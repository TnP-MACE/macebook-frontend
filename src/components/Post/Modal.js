import React from "react";
import "./Modal.scss";
import Doc from "../../assets/images/icons/Doc.svg";
import defaultUserImage from "../../assets/images/icons/default-user.png";
import imageCompression from "browser-image-compression";
import AuthContext from "../../auth/AuthContext";
import { FaTimes } from "react-icons/fa";

class Modal extends React.Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            postImage: "",
            text: this.props.content,
            posts: [],
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submitImage = this.submitImage.bind(this);
        this.handleAddImageToPost = this.handleAddImageToPost.bind(this);
    }
    onChange(event) {
        this.setState((prev) => {
            return {
                ...prev,
                text: event.target.value,
            };
        });
    }
    onSubmit(event) {
        const editPost = async (post_id) => {
            try {
                const { state } = this.context;
                const token = state.token;
                console.log(this.state);
                console.log({
                    text: this.state.text,
                });
                const postEditResponse = await fetch(
                    `https://mace-connect.herokuapp.com/api/v1/posts/update_post/${post_id}`,
                    {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            text: this.state.text,
                        }),
                    }
                );
                if (postEditResponse.status === 200) {
                    const data = await postEditResponse.json();
                    if (this.state.postImage) {
                        await this.submitImage(token, this.props.post_id);
                    }
                    console.log(this.props.post_id);
                }
            } catch (e) {
                console.log(e);
            }
        };
        editPost(this.props.post_id);
    }
    async compressImage(file) {
        const options = {
            maxSizeMB: 0.5,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);
        return compressedFile;
    }

    async submitImage(token, post_id) {
        console.log("submitting image");
        const imageElement = document.getElementById("tweetbox-image-input");
        // console.log(imageElement);
        const imageData = imageElement.files[0];
        console.log(imageData);

        const blob = await this.compressImage(imageData);
        const compressedImageFile = new File([blob], "postImage.jpeg");

        console.log(compressedImageFile);

        let formData = new FormData();
        formData.append("postimage", compressedImageFile);

        const imageResponse = await fetch("https://mace-connect.herokuapp.com/api/v1/posts/picture/" + post_id, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        if (!imageResponse.ok) {
            throw new Error("Couldn't upload image");
        }

        const responseData = await imageResponse.json();
        console.log(responseData);
    }
    handleAddImageToPost(evt) {
        const element = evt.target;
        const file = element.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            this.setState({ postImage: reader.result });
        };
        reader.readAsDataURL(file);
        // document.getElementById("profile-img-default").style.display = "none";
    }
    render() {
        return (
            <div className="modal-bg">
                <div className="close-btn">
                    <button onClick={this.props.closeEditModal}>
                        <FaTimes />
                    </button>
                </div>
                <h3>Edit post</h3>
                <hr></hr>

                <div className="poster">
                    <div className="poster-img-container">
                        <img
                            width="30px"
                            src={
                                this.props.profile_image_url
                                    ? `https://mace-connect.herokuapp.com/profile/${this.props.profile_image_url}`
                                    : defaultUserImage
                            }
                            alt="profilepicture"
                        />
                    </div>
                    <p>{this.props.name}</p>
                </div>
                <div className="post-view">
                    <select id="post-viewers" name="post-viewers">
                        <option value="Anyone">Anyone </option>
                        <option value="Connections">Connections</option>
                        <option value="Selected">Selected</option>
                    </select>
                </div>
                <br />
                <div className="tweetbox-content-wrapper">
                    {/* <Card> */}
                    <div className="tweetbox-textarea-container">
                        <textarea className="post-text" name="post-text" onChange={this.onChange}>
                            {this.props.content}
                        </textarea>
                    </div>
                    {/* </Card> */}
                    {this.state.postImage && (
                        <div className="tweetbox-image-container">
                            <img src={this.state.postImage} />
                        </div>
                    )}
                </div>
                <div className="modal-bottom">
                    <div class="media-input">
                        <div>
                            <label htmlFor="tweetbox-image-input">
                                <img src={Doc} />
                            </label>
                            <input
                                type="file"
                                id="tweetbox-image-input"
                                name="image"
                                style={{ display: "none" }}
                                onChange={this.handleAddImageToPost}
                            />
                        </div>
                        {/* <input type="image" src={Video} />
                                <input type="image" src={Doc} /> */}
                    </div>

                    <button type="button" onClick={this.onSubmit}>
                        Post
                    </button>
                </div>
            </div>
        );
    }
}
export default Modal;
