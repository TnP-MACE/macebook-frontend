import React from "react";
import defaultUserImage from "../../assets/images/icons/default-user.png";
import "./Comment.scss";

class Comment extends React.Component {
    onSubmit(event) {
        const editPost = async (comment_id) => {
            try {
                const { state } = this.context;
                const token = state.token;
                console.log(this.state);
                console.log({
                    text: this.state.text,
                });
                const postEditResponse = await fetch(
                    `https://mace-connect.herokuapp.com/api/v1//api/v1/comments/${comment_id}`,
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
                    this.props.componentUpdated();
                }
            } catch (e) {
                console.log(e);
            }
        };
        editPost(this.props.comment_id);
    }
    render() {
        return (
            <div className="comment">
                <img src={this.props.profile_pic_url} />
                <p>{this.props.profile_name}</p>
                <p>{this.props.text}</p>
                <button onClick={this.onSubmit}>edit</button>
                <button>Del</button>
            </div>
        );
    }
}
export default Comment;
