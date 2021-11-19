import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Tweetbox from "./TweetBox/Tweetbox";
import "./Home.scss";
import Card from "../../components/Card/Card";
import Post from "../../components/Post/Post";
import Suggestions from "../../components/Suggestions/Suggestions";
import Header from "../../components/Header/Header";
import postImg from "../../assets/images/icons/postImg.png";
import profilepic from "../../assets/images/icons/UserProfile.png";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postImg: postImg,
            designation: "SDE I at Amazon",
            profilepic: profilepic,
            posts: [],
            profile: [],
        };
    }
    // fetchUpcoming() {
    //     fetch("https://mace-connect.herokuapp.com/api/v1/posts")
    //         .then((response) => response.json())
    //         .then((data) =>
    //             this.setState({
    //                 posts: data.results,
    //             })
    //         );
    // };

    fetchUpcoming = async () => {
        try {
            const token = window.localStorage.getItem("token");
            let response = await fetch("https://mace-connect.herokuapp.com/api/v1/posts", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            let response2 = await fetch("https://mace-connect.herokuapp.com/api/v1/auth", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            let responseJson = await response.json();
            let resJson = await response2.json();
            return this.setState({
                posts: responseJson,
                profile: resJson,
            });
        } catch (error) {
            console.error(error);
        }
    };

    //ABcd@12345678910
    componentDidMount() {
        this.fetchUpcoming();
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
                                <Tweetbox></Tweetbox>
                            </div>

                            {this.state.posts.map((e) => {
                                return (
                                    <Card>
                                        <Post
                                            poster={this.state.profile.username}
                                            posterprofile={this.state.profilepic}
                                            designation={this.state.designation}
                                            content={e.text}
                                            hashtags={e.hashtags}
                                            image="https://picsum.photos/seed/picsum/200/"
                                            likes={e.likes}
                                            comments={e.comments}
                                            profilepic={this.state.profilepic}
                                        ></Post>
                                    </Card>
                                );
                            })}
                            {/* <Card>
                <Post
                  poster="Ruben Lubin"
                  posterprofile={profilepic}
                  designation="poster designation"
                  content="Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip.
                      Hashtags   lorem_epsum"
                  hashtags="#Hashtags   #lorem_epsum"
                  image={postImg}
                  likes="3k"
                  comments="1k"
                  profilepic={profilepic}
                ></Post>
              </Card> */}
                        </div>
                        <div className="card-col2">
                            <Card>
                                <Suggestions></Suggestions>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
