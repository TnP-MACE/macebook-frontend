import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Tweetbox from "./TweetBox/Tweetbox";
import "./Home.scss";
import Card from "../../components/Card/Card";
import Post from "../../components/Post/Post";
//import Suggestions from "../../components/Suggestions/Suggestions";
import Header from "../../components/Header/Header";
import postImg from "../../assets/images/icons/postImg.png";
import profilepic from "../../assets/images/icons/UserProfile.png";
import AuthContext from "../../auth/AuthContext";
import isAuthenticated from "../../auth/isAuthenticated";
import Spinner from "../../components/Spinner/Spinner";

class Home extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            message: {
                text: "",
                type: "success",
            },
            loading: true,
            postImg: postImg,
            designation: "SDE I at Amazon",
            profilepic: profilepic,
            posts: [],
            profile: {
                about: "This is a sample bio",
                accomplishments: [],
                email: "asdf",
                address: null,
                admission: { admission_no: "sdfjh", branch: "sdfjkh", batch: "1254" },
                cover_url: null,
                experience: [],
                fullname: "lksdjf",
                phoneno: "9456898",
                profile_id: "cf0069b6-dc0e-465c-8ce6-d6da3c226b31",
                profile_image_url: null,
                ref_email: "",
                ref_fullname: "",
                ref_phonenumber: "",
                skills: [],
                status: "complete",
                urls: { linkedin: "", facebook: "", github: "" },
            },
        };

        this.fetchPosts = this.fetchPosts.bind(this);
        this.fetchProfile = this.fetchProfile.bind(this);
        this.setMessage = this.setMessage.bind(this);
        this.clearMessage = this.clearMessage.bind(this);
    }

    clearMessage() {
        this.setState((prev) => {
            return {
                ...prev,
                message: {
                    text: "",
                    type: "success",
                },
            };
        });
    }

    setMessage(message, type) {
        this.setState((prev) => {
            return {
                ...prev,
                message: {
                    text: message,
                    type: type,
                },
            };
        });
        // setTimeout(() => {
        //     this.clearMessage();
        // }, 3000);
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
            if (response.status !== 200) {
                return alert("Couldn't fetch posts! Reload this page.");
            }
            let data = await response.json();
            console.log(data);

            return this.setState(
                {
                    posts: data,
                },
                () => cbk()
            );
        } catch (error) {
            console.error(error);
        }
    }

    async fetchProfile(userId, cbk) {
        const { state } = this.context;
        console.log(userId);

        try {
            const token = state.token;
            const response = await fetch(`https://mace-connect.herokuapp.com/api/v1/profile/p1/${userId}`, {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            const data = await response.json();
            if (data.profile) {
                this.setState(
                    {
                        profile: data.profile,
                    },
                    cbk
                );
            }
        } catch (e) {
            console.error(e);
        }
    }

    //ABcd@12345678910
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
                    this.fetchProfile(payload.user.id, () => this.fetchPosts(() => this.setState({ loading: false })));
                } else {
                    this.props.history.push("/login");
                }
            })();
        } else {
            this.fetchProfile(state.user.id, () => this.fetchPosts(() => this.setState({ loading: false })));
        }
    }

    render() {
        return (
            <div className="Home">
                <Helmet>
                    <title>Macebook | Home</title>
                </Helmet>

                <Header active={"home"} />
                <div className="container">
                    <div className="card-cols">
                        <div className="card-col1">
                            <div className="tweetbox-container">
                                <Tweetbox
                                    setMessage={this.setMessage}
                                    getPosts={this.fetchPosts}
                                    user={this.state.profile}
                                ></Tweetbox>
                            </div>
                            {this.state.message.text && (
                                <div className="message-box message-box--success">
                                    <p>{this.state.message.text}</p>
                                    <span onClick={this.clearMessage}>X</span>
                                </div>
                            )}

                            {this.state.loading ? (
                                <div className="Home__spinner-container">
                                    <Spinner />
                                </div>
                            ) : (
                                this.state.posts.map((post) => {
                                    return (
                                        <Card key={post.post_id}>
                                            <Post
                                                fullname={post.post_username}
                                                post_id={post.post_id}
                                                poster={this.state.profile.username}
                                                profile_id={this.state.profile.profile_id}
                                                profileImageName={this.state.profile.profile_image_url}
                                                designation={this.state.designation}
                                                content={post.text}
                                                hashtags={post.hashtags}
                                                imageName={post.post_image_name}
                                                likes={post.likes}
                                                comments={post.comments}
                                                postCreatorImageName={post.post_profile_image_name}
                                            ></Post>
                                        </Card>
                                    );
                                })
                            )}
                        </div>
                        {/* <div className="card-col2">
                            <Card>
                                <Suggestions></Suggestions>
                            </Card>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
