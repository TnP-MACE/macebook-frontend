import React from "react";
import AuthContext from "../../auth/AuthContext";
import "./CommentForm.scss";

class CommentForm extends React.Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            formVal: this.props.text,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
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
                        method: "PATCH",
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
    onChange(event) {
        this.setState((prev) => {
            return {
                ...prev,
                formVal: event.target.value,
            };
        });
    }
    render() {
        return (
            <div>
                <form className="commentform">
                    <textarea className="comment-form-textarea" onChange={this.onChange}>
                        {this.props.text}
                    </textarea>
                    <br />
                    <button onClick={this.handleSubmit} className="comment-form-button">
                        Save
                    </button>
                    <button onClick={this.props.closeCommentForm}>Close</button>
                </form>
            </div>
        );
    }
}
export default CommentForm;
