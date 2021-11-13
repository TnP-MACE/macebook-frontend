import React, { Component } from 'react'

import "./Posts.scss";
import Header from "../../components/Header/Header";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Card from "../../components/Card/Card";
import Post from '../../components/Post/Post'
import cover from "../../assets/images/icons/cover.jpg";
import profileimg from "../../assets/images/icons/profile.webp";
import postImg from '../../assets/images/icons/postImg.png';
import profilepic from '../../assets/images/icons/UserProfile.png';


class Posts extends Component{
    state={
        username: 'John Doe',
        cover: {cover},
        profileimg: {profileimg},
        position: 'Senior SWE at Apple Inc.',
        location: 'San Fransisco, CA',
        batch: 14,
        dept: 'CSE',
        conn: 2000,
        self: true,
        skills: ['HTML','CSS','REACTJS','NodeJS']
  }

  render(){
      return(
          <div className="posts-container">
            <Header active="profile" />
            <div className="container">
                <ProfileHeader 
                    user={this.state.username} 
                    cover={this.state.cover}
                    profileimg={this.state.profileimg}
                    position={this.state.position}
                    location={this.state.location}
                    batch={this.state.batch}
                    dept={this.state.dept}
                    conn={this.state.conn}
                    self={this.state.self}
                />
                <div class="posts-body">
                    <h2>All Posts</h2>
                    <div className="posts-display">
                        <div className="post-content">
                            <Card>
                                <div className="card-content">
                                    <Post
                                        poster="Ruben Lubin"
                                        posterprofile={profilepic}
                                        designation="poster designation"
                                        content="Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum"
                                        hashtags="#Hashtags   #lorem_epsum"
                                        image={postImg}
                                        likes="3k"
                                        comments="1k"
                                        profilepic={profilepic}>
                                    </Post>
                                </div>
                            </Card>
                         </div>
                         <div className="post-content">
                            <Card>
                                <div className="card-content">
                                    <Post
                                        poster="Ruben Lubin"
                                        posterprofile={profilepic}
                                        designation="poster designation"
                                        content="Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum"
                                        hashtags="#Hashtags   #lorem_epsum"
                                        image={postImg}
                                        likes="3k"
                                        comments="1k"
                                        profilepic={profilepic}>
                                    </Post>
                                </div>
                            </Card>
                         </div>
                         <div className="post-content">
                            <Card>
                                <div className="card-content">
                                    <Post
                                        poster="Ruben Lubin"
                                        posterprofile={profilepic}
                                        designation="poster designation"
                                        content="Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum"
                                        hashtags="#Hashtags   #lorem_epsum"
                                        image={postImg}
                                        likes="3k"
                                        comments="1k"
                                        profilepic={profilepic}>
                                    </Post>
                                </div>
                            </Card>
                         </div>
                    </div>
                </div>
            </div>
          </div>
      )
  }
}

export default Posts