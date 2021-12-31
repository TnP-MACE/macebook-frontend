/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Post.scss";
import msg from "../../assets/images/icons/message.svg";
import share from "../../assets/images/icons/share.svg";
import data from "../../assets/data.json";
import defaultUserImage from "../../assets/images/icons/default-user.png";
import AuthContext from "../../auth/AuthContext";
import Modal from "./Modal";
import Comment from "./Comment";
import DelModal from "./DelModal";
import Card from "../Card/Card";
import { FaEllipsisV, FaPen, FaTrash } from "react-icons/fa";

class Post extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        // eslint-disable-next-line no-undef
        this.state = {
            initComments: [],
            moreComments: [],
            viewMoreComments: false,
            deletedPost: false,
            delPostModal: false,
            editdeloptions: false,
            openModal: false,
            setOpenModal: false,
            liked: false,
            likes_count: 0,
            commentValue: "",
            commentText: "",
            commentLine: [{ commentId: "", commentText: "" }],
            commentData: [],
            profile: {},
            userId: "",
            posts: [],
        };
        this.fetchComments = this.fetchComments.bind(this);
        this.profile = this.profile.bind(this);
        this.likePost = this.likePost.bind(this);
        this.componentUpdated = this.componentUpdated.bind(this);
        // console.log(this.props.content);
    }

    // eslint-disable-next-line react/no-typos
    componentDidMount() {
        this.profile();
        this.fetchComments();
    }
    updateCount() {
        this.setState({
            likes_count: this.props.likes.length,
        });
        data.likes = this.state.likes_count;
    }
    closeEditModal() {
        this.setState({
            openModal: false,
            editdeloptions: false,
        });
    }
    closeDelModal() {
        this.setState({
            delPostModal: false,
            editdeloptions: false,
        });
    }

    profile() {
        this.fetchComments();
        const fetchProfile = async (userid) => {
            const { state } = this.context;
            this.setState({
                userId: userid,
            });
            try {
                const token = state.token;

                const response = await fetch(`https://mace-connect.herokuapp.com/api/v1/profile/p1/${userid}`, {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                const data = await response.json();
                if (data.profile) {
                    this.setState({
                        profile: data.profile,
                    });
                }
            } catch (e) {
                console.error(e);
            }
        };
        fetchProfile(this.props.profile_id);
    }

    async componentUpdated() {
        const { state } = this.context;
        try {
            const token = state.token;

            let response = await fetch("https://mace-connect.herokuapp.com/api/v1/posts", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status !== 200) {
                return alert("Couldn't fetch posts! Reload this page.");
            }
            let data = await response.json();
            console.log(data);

            return this.setState({
                posts: data,
            });
        } catch (error) {
            console.error(error);
        }
    }
    async likePost(post_id) {
        const { state } = this.context;
        const token = state.token;
        console.log(post_id);
        this.setState((prev) => {
            return {
                ...prev,
                liked: !prev.liked,
            };
        });

        const res = await fetch(`https://mace-connect.herokuapp.com/api/v1/posts/like/${post_id}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (res.ok) {
            const data = await res.json();
            console.log(data);
        }

        this.setState((prevState) => {
            //likes_count:  (prevState.likes_count==1) ? 0 : 1;
            // if (prevState.liked) {
            //     this.setState({ likes_count: prevState.likes_count + 1 });
            //     console.log(this.likes_count);
            // } else {
            //     this.setState({ likes_count: prevState.likes_count - 1 });
            // }

            if (prevState.likes_count === 1) {
                this.setState({ likes_count: prevState.likes_count - 1 });
            } else {
                this.setState({ likes_count: prevState.likes_count + 1 });
            }
        });
    }

    handleClick(event) {
        const delPost = async (post_id) => {
            try {
                const { state } = this.context;
                const token = state.token;

                const postDelResponse = await fetch(`https://mace-connect.herokuapp.com/api/v1/posts/${post_id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (postDelResponse.status === 200) {
                    const data = await postDelResponse.json();
                    this.setState({
                        deletedPost: true,
                    });
                    console.log(this.props.post_id + " deleted successfully");
                }
            } catch (e) {
                console.log(e);
            }
        };
        delPost(this.props.post_id);
    }
    handleCommentValue(e) {
        this.setState({ commentValue: e.target.value });
    }
    setCommentLine = () => {
        this.setState({
            commentLine: [...this.state.commentLine, { text: this.state.commentValue }],
            commentValue: "",
        });
    };
    submitCommentValue = (e) => {
        this.setCommentLine();
        const fun = async (post_id) => {
            try {
                // const token = window.localStorage.getItem("token");
                const { state } = this.context;
                const token = state.token;

                const commentResponse = await fetch(`https://mace-connect.herokuapp.com/api/v1/comments/${post_id}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        body: this.state.commentValue,
                    }),
                });
                if (commentResponse.status === 201) {
                    const commentdata = await commentResponse.json();

                    this.setState({ isModalOpen: false });
                    console.log(commentdata);
                }
            } catch (e) {
                console.log(e);
            }
        };
        fun(this.props.post_id);
    };
    enterCommentLine = (e) => {
        this.setCommentLine();
    };

    fetchComments() {
        const CommentsFun = async (post_id) => {
            try {
                const { state } = this.context;
                const token = state.token;

                const commentResponse = await fetch(`https://mace-connect.herokuapp.com/api/v1/comments/p/${post_id}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (commentResponse.status === 200) {
                    const commentdata = await commentResponse.json();

                    this.setState({ commentData: commentdata });
                    console.log(commentdata);
                }
            } catch (e) {
                console.log(e);
            }
        };
        CommentsFun(this.props.post_id);

        const cd = this.state.commentData;
        const dt = cd.comment;
        let rows = [];

        if (dt === undefined) {
            return;
        } else {
            for (var j = 0; j < dt.length; j++) {
                rows.push(dt[j].body);
            }

            this.setState({ moreComments: rows });
        }
    }

    render() {
        return this.state.deletedPost ? (
            <div>
                <p>Post Removed</p>
            </div>
        ) : (
            <div className="home-posts-container">
                <div className="poster">
                    <div className="posterimg">
                        <Link to="./">
                            {" "}
                            <img
                                src={
                                    this.props.postCreatorImageName
                                        ? `https://mace-connect.herokuapp.com/profile/${this.props.postCreatorImageName}`
                                        : defaultUserImage
                                }
                                alt="posterimage"
                                className="profile-pic"
                            ></img>
                        </Link>
                    </div>
                    <div className="name_desig">
                        <Link to="./">
                            <p className="Name">{this.props.fullname}</p>
                        </Link>
                        <p className="Desig">{this.props.designation}</p>
                    </div>
                    {this.state.userId === this.props.post_profile_id && (
                        <button
                            className="edit-post-btn"
                            onClick={() => {
                                if (!this.state.editdeloptions) {
                                    this.setState({ editdeloptions: true });
                                } else {
                                    this.setState({ editdeloptions: false });
                                }
                            }}
                        >
                            <FaEllipsisV />
                        </button>
                    )}

                    {this.state.editdeloptions && (
                        <Card>
                            <div className="list-options">
                                <div style={{ display: "flex" }}>
                                    <FaPen />
                                    <button
                                        style={{ marginLeft: 10 }}
                                        onClick={() => {
                                            this.setState({ setOpenModal: true, openModal: true });
                                        }}
                                    >
                                        edit
                                    </button>
                                </div>

                                <div style={{ display: "flex", marginTop: 12 }}>
                                    <FaTrash />
                                    <button
                                        style={{ marginLeft: 10 }}
                                        onClick={() => {
                                            this.setState({
                                                delPostModal: true,
                                                editdeloptions: false,
                                            });
                                        }}
                                    >
                                        delete
                                    </button>
                                </div>
                            </div>
                        </Card>
                    )}

                    {this.state.openModal && (
                        <div className="open-edit">
                            <Modal
                                componentUpdated={this.componentUpdated}
                                closeEditModal={this.closeEditModal.bind(this)}
                                post_id={this.props.post_id}
                                name={this.props.fullname}
                                designation={this.props.designation}
                                content={this.props.content}
                            />
                        </div>
                    )}
                    {this.state.delPostModal && (
                        <div>
                            <DelModal
                                closeDelModal={this.closeDelModal.bind(this)}
                                handleClick={this.handleClick.bind(this)}
                                post_id={this.props.post_id}
                            />
                        </div>
                    )}
                </div>

                <div className="home-posts-content">
                    <p className="home-posts-text">{this.props.content}</p>
                    <p className="hashtags">{this.props.hashtags}</p>
                    {this.props.imageName && (
                        <img src={`https://mace-connect.herokuapp.com/post/${this.props.imageName}`} alt="" />
                    )}
                </div>
                <div className="home-posts-attributes">
                    <p>{this.state.likes_count} Likes</p>
                    <p>{this.props.comments} Comments</p>
                </div>
                <div className="home-posts-activity">
                    <div>
                        <button onClick={() => this.likePost(this.props.post_id)}>
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
                    </div>
                    <div>
                        <button>
                            <img src={msg} alt="Message"></img>
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={share} alt="Share"></img>
                        </button>
                    </div>
                </div>
                <div className="home-posts-comment">
                    <img
                        src={`https://mace-connect.herokuapp.com/profile/${this.props.profileImageName}`}
                        alt="Profilepic"
                    />
                    <input
                        type="text"
                        placeholder="Add a comment"
                        className="comment-input-field"
                        onChange={(e) => this.handleCommentValue(e)}
                        value={this.commentValue}
                    ></input>
                    <button className="comment-post-btn" onClick={(e) => this.submitCommentValue()}>
                        Post
                    </button>
                </div>
                {this.state.commentData && (
                    <div className="load-comments">
                        <button
                            onClick={() => {
                                this.state.viewMoreComments
                                    ? this.setState({ viewMoreComments: false })
                                    : this.setState({ viewMoreComments: true });
                                this.fetchComments();
                            }}
                            className="comments-loader"
                        >
                            {this.state.viewMoreComments ? <div>hide</div> : <div>View Comments</div>}
                        </button>
                        <br />
                        {/* {this.state.viewMoreComments && (
                            <Comment
                                profile_name={this.state.profile.fullname}
                                profile_pic_url={this.state.profile.profile_image_url}
                                text={this.state.moreComments}
                            />
                        )} */}

                        {this.state.viewMoreComments &&
                            this.state.moreComments.map((comment) => {
                                return (
                                    <Comment
                                        profile_name={this.state.profile.fullname}
                                        profile_pic_url={this.state.profile.profile_image_url}
                                        text={comment}
                                    />
                                );
                            })}
                    </div>
                )}
            </div>
        );
    }
}
export default Post;
