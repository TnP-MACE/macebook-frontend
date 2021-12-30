import React from "react";

class Comment extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
export default Comment;
