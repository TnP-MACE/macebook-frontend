import React from "react";
import "./DelModal.scss";
import { FaTimes } from "react-icons/fa";

class DelModal extends React.Component {
    render() {
        return (
            <div className="delModal">
                <div className="close-btn">
                    <button onClick={this.props.closeDelModal}>
                        <FaTimes />
                    </button>
                </div>
                <p>Do you want to delete this post?</p>
                <button className="del-btn" onClick={this.props.handleClick}>
                    Delete
                </button>
            </div>
        );
    }
}
export default DelModal;
