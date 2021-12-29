import React from "react";
import "./Modal.scss";
import AuthContext from "../../auth/AuthContext";

class DelModal extends React.Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        const delPost = async (post_id) => {
            try {
                const postDelResponse = await fetch(`https://mace-connect.herokuapp.com/api/v1/posts/${post_id}`, {
                    method: "DELETE",
                });
                if (postDelResponse.status === 200) {
                    console.log(this.props.post_id + " successfully deleted");
                }
            } catch (e) {
                console.log(e);
            }
        };
        delPost(this.props.post_id);
    }
    render() {
        return (
            <div>
                <p>Do you want to delete this post?</p>
                <button onClick={this.handleClick}>Delete</button>
            </div>
        );
    }
}
export default DelModal;
