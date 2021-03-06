import React, { Component } from "react";

import "./Posts.scss";
import Header from "../../components/Header/Header";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader2";
import Card from "../../components/Card/Card";
import Post from "../../components/Post/Post";
import cover from "../../assets/images/icons/cover.jpg";
import profileimg from "../../assets/images/icons/profile.webp";
import postImg from "../../assets/images/icons/postImg.png";
import profilepic from "../../assets/images/icons/UserProfile.png";
import AuthContext from "../../auth/AuthContext";
import isAuthenticated from "../../auth/isAuthenticated";
import Spinner from "../../components/Spinner/Spinner";

class Posts extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: {
                username: "john",
                fullname: "John Doe",
                bio: "SENIOR SWE AT APPLE INC",
                location: "San Fransisco, CA",
                batch: "2014",
                branch: "CSE",
                connections: 25000,
                image: profileimg,
                cover: cover,
                isAuthenticated: true,
                id: 1,
            },
            posts: [
                {
                    poster: "Ruben Lubin",
                    posterprofile: profilepic,
                    designation: "poster designation",
                    text: "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum",
                    hashtags: "#Hashtags   #lorem_epsum",
                    image: postImg,
                    likes: "3k",
                    comments: "1k",
                },
                {
                    poster: "Ruben Lubin",
                    posterprofile: profilepic,
                    designation: "poster designation",
                    text: "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum",
                    hashtags: "#Hashtags   #lorem_epsum",
                    image: postImg,
                    likes: "3k",
                    comments: "1k",
                },
                {
                    poster: "Ruben Lubin",
                    posterprofile: profilepic,
                    designation: "poster designation",
                    text: "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum",
                    hashtags: "#Hashtags   #lorem_epsum",
                    image: postImg,
                    likes: "3k",
                    comments: "1k",
                },
                {
                    poster: "Ruben Lubin",
                    posterprofile: profilepic,
                    designation: "poster designation",
                    text: "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum",
                    hashtags: "#Hashtags   #lorem_epsum",
                    image: postImg,
                    likes: "3k",
                    comments: "1k",
                },
            ],
        };
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    async fetchPosts(cbk) {
        const { state } = this.context;
        try {
            const token = state.token;
            let response = await fetch("https://mace-connect.herokuapp.com/api/v1/posts", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status != 200) {
                return alert("Couldn't fetch posts! Reload this page.");
            }
            let data = await response.json();
            console.log(data);

            data = data.map(async (post) => {
                if (!post.post_image_name) return post;
                let response = await fetch(
                    "https://mace-connect.herokuapp.com/api/v1/uploads/posts/" + post.post_image_name,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                let data = await response.json();
                console.log(data);
                return post;
            });

            return this.setState({ posts: data }, cbk);
        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount() {
        const { state, dispatch } = this.context;
        if (!state.isAuthenticated) {
            (async () => {
                const [authenticated, payload] = await isAuthenticated();
                if (authenticated === true) {
                    dispatch({
                        type: "LOGIN",
                        payload: payload,
                    });
                    this.fetchPosts(() => {
                        this.setState({ loading: false });
                    });
                } else {
                    this.props.history.push("/login");
                }
            })();
        } else {
            this.fetchPosts(() => {
                this.setState({ loading: false });
            });
        }
    }

    render() {
        return (
            <div className="posts-container">
                <Header active="profile" />
                {this.state.loading ? (
                    <div className="posts-container__spinner-container">
                        <Spinner />
                    </div>
                ) : (
                    <div className="container">
                        <ProfileHeader user={this.state.user} />

                        <div class="posts-body">
                            <h2>All Posts</h2>
                            <div className="posts-display">
                                {this.state.posts.map((post) => {
                                    return (
                                        <div className="post-content" key={post.post_id}>
                                            <Card>
                                                <Post
                                                    poster={post.poster}
                                                    posterprofile={post.posterprofile}
                                                    designation={post.designation}
                                                    content={post.text}
                                                    hashtags={post.hashtags}
                                                    image={post.image}
                                                    likes={post.likes}
                                                    comments={post.comments}
                                                    profilepic={this.state.profilepic}
                                                ></Post>
                                            </Card>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Posts;
