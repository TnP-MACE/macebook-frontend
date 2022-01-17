import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProfilePost.scss";
import msg from "../../assets/images/icons/message.svg";
import share from "../../assets/images/icons/share.svg";
import data from "../../assets/data.json";
import Card from "../Card/Card";

class Post extends Component {
    constructor() {
        super();
        // eslint-disable-next-line no-undef
        this.state = {
            liked: false,
            likesCount: 0,
        };
        this.handlePostLike = this.handlePostLike.bind(this);
    }
    updateCount() {
        data.likes = this.state.likesCount;
    }
    handlePostLike(e) {
        this.setState((prev) => {
            return {
                ...prev,
                liked: !prev.liked,
            };
        });
        this.setState((prevState) => {
            //likesCount:  (prevState.likesCount==1) ? 0 : 1;
            if (prevState.likesCount === 1) {
                this.setState({ likesCount: 0 });
            } else {
                this.setState({ likesCount: 1 });
            }
        });
    }

    handleCommentBoxFocus() {}

    render() {
        return (
            <Card>
                <div className="ProfilePost">
                    <div className="ProfilePost__content-container">
                        <p className="ProfilePost__content-text">{this.props.post.text}</p>
                        <p className="ProfilePost__content-hashtag">{this.props.hashtags}</p>
                        {this.props.postImageName && (
                            <div className="ProfilePost__content-image">
                                <img
                                    src={`https://mace-connect.herokuapp.com/api/v1/profile/${this.props.postImageName}`}
                                    alt={this.props.text}
                                />
                            </div>
                        )}
                    </div>
                    <div className="ProfilePost__attributes-container">
                        <p className="ProfilePost__attributes-like">{this.state.likesCount} Likes</p>
                        <p className="ProfilePost__attributes-comments">{this.props.comments} Comments</p>
                    </div>
                    <div className="ProfilePost__activity-container">
                        <button onClick={this.handlePostLike}>
                            <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke="red"
                                    strokeWidth="1"
                                    d="M4.78229 0.818359C2.25745 0.818359 0.209961 2.85171 0.209961 5.36037C0.209961 7.38546 1.01012 12.1917 8.88642 17.0503C9.0275 17.1364 9.18948 17.182 9.35462 17.182C9.51977 17.182 9.68175 17.1364 9.82283 17.0503C17.6991 12.1917 18.4993 7.38546 18.4993 5.36037C18.4993 2.85171 16.4518 0.818359 13.927 0.818359C11.4021 0.818359 9.35462 3.57109 9.35462 3.57109C9.35462 3.57109 7.30713 0.818359 4.78229 0.818359Z"
                                    fill={this.state.liked ? "red" : "white"}
                                />
                            </svg>
                        </button>
                        <button>
                            <img src={msg} alt="Message"></img>
                        </button>
                        <button>
                            <img src={share} alt="Share"></img>
                        </button>
                    </div>
                    <div className="ProfilePost__comments-container">
                        <div className="ProfilePost__comments-image-container">
                            <img
                                src={`https://mace-connect.herokuapp.com/api/v1/profile/${this.props.userImageName}`}
                                alt="Profile Picture"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Add a comment"
                            className="comment-input-field"
                            onFocus={this.handleCommentBoxFocus}
                        />
                    </div>
                    <div className="ProfilePost__load-comments-container">
                        <Link to="./" className="ProfilePost__load-comments-button">
                            View all comments
                        </Link>
                    </div>
                </div>
            </Card>
        );
    }
}
export default Post;
