import React, { Component } from "react";

import "./Posts.scss";
import Header from "../../components/Header/Header";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Card from "../../components/Card/Card";
import Post from "../../components/Post/Post";
import cover from "../../assets/images/icons/cover.jpg";
import profileimg from "../../assets/images/icons/profile.webp";
import postImg from "../../assets/images/icons/postImg.png";
import profilepic from "../../assets/images/icons/UserProfile.png";

class Posts extends Component {
    state = {
        profile: {
            username: "John Doe",
            cover: { cover },
            profileimg: { profileimg },
            position: "Senior SWE at Apple Inc.",
            location: "San Fransisco, CA",
            batch: 14,
            dept: "CSE",
            conn: 2000,
            self: true,
            skills: ["HTML", "CSS", "REACTJS", "NodeJS"],
        },
        posts: [
            {
                poster: "Ruben Lubin",
                posterprofile: profilepic,
                designation: "poster designation",
                content:
                    "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum",
                hashtags: "#Hashtags   #lorem_epsum",
                image: postImg,
                likes: "3k",
                comments: "1k",
                profilepic: profilepic,
            },
            {
                poster: "Ruben Lubin",
                posterprofile: profilepic,
                designation: "poster designation",
                content:
                    "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum",
                hashtags: "#Hashtags   #lorem_epsum",
                image: postImg,
                likes: "3k",
                comments: "1k",
                profilepic: profilepic,
            },
            {
                poster: "Ruben Lubin",
                posterprofile: profilepic,
                designation: "poster designation",
                content:
                    "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum",
                hashtags: "#Hashtags   #lorem_epsum",
                image: postImg,
                likes: "3k",
                comments: "1k",
                profilepic: profilepic,
            },
            {
                poster: "Ruben Lubin",
                posterprofile: profilepic,
                designation: "poster designation",
                content:
                    "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum",
                hashtags: "#Hashtags   #lorem_epsum",
                image: postImg,
                likes: "3k",
                comments: "1k",
                profilepic: profilepic,
            },
        ],
    };

    render() {
        return (
            <div className="posts-container">
                <Header active="profile" />
                <div className="container">
                    <ProfileHeader
                        user={this.state.profile.username}
                        cover={this.state.profile.cover}
                        profileimg={this.state.profile.profileimg}
                        position={this.state.profile.position}
                        location={this.state.profile.location}
                        batch={this.state.profile.batch}
                        dept={this.state.profile.dept}
                        conn={this.state.profile.conn}
                        self={this.state.profile.self}
                    />
                    <div class="posts-body">
                        <h2>All Posts</h2>
                        <div className="posts-display">
                            {this.state.posts.map((post) => {
                                return (
                                    <div className="post-content">
                                        <Card>
                                            <Post
                                                poster={post.poster}
                                                posterprofile={post.posterprofile}
                                                designation={post.designation}
                                                content={post.content}
                                                hashtags={post.hashtags}
                                                image={post.image}
                                                likes={post.likes}
                                                comments={post.comments}
                                                profilepic={post.profilepic}
                                            ></Post>
                                        </Card>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;
