import React from "react";
import defaultUserImage from "../../assets/images/icons/default-user.png";

class Comment extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.profile_pic_url} />
                <p>{this.props.profile_name}</p>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
export default Comment;
