import React from "react";
import defaultUserImage from "../../assets/images/icons/default-user.png";
import "./Comment.scss";

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <img src={this.props.profile_pic_url} />
                <p>{this.props.profile_name}</p>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
export default Comment;
