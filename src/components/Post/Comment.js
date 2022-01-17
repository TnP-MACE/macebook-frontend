import React from "react";
import AuthContext from "../../auth/AuthContext";
import defaultUserImage from "../../assets/images/icons/default-user.png";
import "./Comment.scss";
import CommentForm from "./CommentForm";

class Comment extends React.Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            openCommentForm: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    closeCommentForm() {
        if (this.state.openCommentForm) {
            this.setState({ openCommentForm: false });
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        const editcomment = async (comment_id) => {
            try {
                const { state } = this.context;
                const token = state.token;
                console.log(state);

                const commentEditResponse = await fetch(
                    `https://mace-connect.herokuapp.com/api/v1/comments/${comment_id}`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            body: this.state.formVal,
                        }),
                    }
                );
                if (commentEditResponse.status === 200) {
                    const data = await commentEditResponse.json();
                    console.log(data);
                    console.log(this.props.comment_id);
                }
            } catch (e) {
                console.log(e);
            }
        };
        editcomment(this.props.comment_id);
    }
    render() {
        return (
            <div className="comment">
                <div className="comment-user">
                    <img src={this.props.profile_pic_url} />
                    <p className="fullname">{this.props.profile_name}</p>
                </div>
                <p>{this.props.text}</p>
                {this.props.profile_name === this.props.user_name && (
                    <div>
                        <button
                            onClick={() => {
                                this.setState({ openCommentForm: true });
                            }}
                        >
                            Edit
                        </button>
                        |<button onClick={this.handleSubmit}>Delete</button>
                    </div>
                )}
                {this.state.openCommentForm && (
                    <CommentForm
                        comment_id={this.props.comment_id}
                        closeCommentForm={this.closeCommentForm.bind(this)}
                        text={this.props.text}
                    />
                )}
            </div>
        );
    }
}
export default Comment;
