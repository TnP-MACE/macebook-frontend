/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./Tweetbox.scss";
import { Link } from "react-router-dom";
import profilepic from "../../../assets/images/icons/UserProfile.png";
import Camera from "../../../assets/images/icons/Camera.svg";
import Video from "../../../assets/images/icons/Video.svg";
import Doc from "../../../assets/images/icons/Doc.svg";
import Card from "../../../components/Card/Card";
import AuthContext from "../../../auth/AuthContext";
//import Anyone from "../../../assets/images/icons/Anyone.svg"
import imageCompression from "browser-image-compression";
import defaultUserImage from "../../../assets/images/icons/default-user.png";

class Tweetbox extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = { isModalOpen: false, text: "", topic: "", postImage: "" };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleAddImageToPost = this.handleAddImageToPost.bind(this);
        this.submitImage = this.submitImage.bind(this);
    }
    onChange(event) {
        this.setState((prev) => {
            return {
                ...prev,
                text: event.target.value,
            };
        });
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
            method: "POST",
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

    onSubmit(event) {
        console.log("string");
        // console.log(event.target.text.value);
        // console.log(event.target.topic.value);
        const fun = async () => {
            try {
                // const token = window.localStorage.getItem("token");
                const state = this.context;
                const token = state.token;
                console.log(this.state);
                const postResponse = await fetch("https://mace-connect.herokuapp.com/api/v1/posts/add_post", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        text: this.state.text,
                        topic: this.state.topic,
                    }),
                });
                if (postResponse.status === 201) {
                    const data = await postResponse.json();
                    if (this.state.postImage) {
                        await this.submitImage(token, data.post.post_id);
                    }
                    this.setState({ isModalOpen: false });
                    this.props.setMessage("Post has been added", "success");
                    this.props.getPosts(() => {});
                }
            } catch (e) {
                console.log(e);
            }
        };
        fun();
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
            <div className="Tweetbox">
                <div className="profile-pic">
                    <img
                        src={`https://mace-connect.herokuapp.com/profile/${this.props.user.profile_image_url}`}
                        alt="profilepicture"
                    />
                </div>
                <div className="input-text-field">
                    <div onClick={() => this.openModal()}>
                        <input className="text-field" name="text" placeholder="Add a post" />
                    </div>
                    <div className="input-video">
                        <input type="image" src={Camera} onClick={() => this.openModal()} className="video-btn" />
                        <input type="image" src={Video} onClick={() => this.openModal()} className="video-btn" />
                    </div>
                    <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                        <h3>Create a post</h3>
                        <hr></hr>
                        <div className="poster">
                            <div className="poster-img-container">
                                <img
                                    src={
                                        this.props.user.profile_image_url
                                            ? `https://mace-connect.herokuapp.com/profile/${this.props.user.profile_image_url}`
                                            : defaultUserImage
                                    }
                                    alt="profilepicture"
                                />
                            </div>
                            <div className="post-view">
                                <Link to="./" className="profile-link">
                                    {this.props.user.fullname}
                                </Link>
                                <select id="post-viewers" name="post-viewers">
                                    <option value="Anyone">Anyone </option>
                                    <option value="Connections">Connections</option>
                                    <option value="Selected">Selected</option>
                                </select>
                            </div>
                        </div>
                        <div className="tweetbox-content-wrapper">
                            {/* <Card> */}
                            <div className="tweetbox-textarea-container">
                                <textarea className="post-text" name="post-text" onChange={this.onChange}></textarea>
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
                    </Modal>
                </div>
            </div>
        );
    }

    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }
}

class Modal extends React.Component {
    render() {
        if (this.props.isOpen === false) return null;

        return (
            <div>
                <div className="modal">{this.props.children}</div>
                <div className="bg" onClick={(e) => this.close(e)} />
            </div>
        );
    }

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose();
        }
    }
}
export default Tweetbox;
