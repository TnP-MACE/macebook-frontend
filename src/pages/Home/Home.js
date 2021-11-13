import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Tweetbox from './TweetBox/Tweetbox'
import './Home.scss'
import Card from '../../components/Card/Card'
import Post from '../../components/Post/Post'
import Suggestions from '../../components/Suggestions/Suggestions'
import Header from '../../components/Header/Header'
import postImg from '../../assets/images/icons/postImg.png'
import profilepic from '../../assets/images/icons/UserProfile.png'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          poster: "Ruben Lubin",
          posterprofile: profilepic,
          designation: "poster designation",
          content:
            "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum ",
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
            "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum ",
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
            "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum ",
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
            "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum ",
          hashtags: "#Hashtags   #lorem_epsum",
          image: postImg,
          likes: "3k",
          comments: "1k",
          profilepic: profilepic,
        },
      ],
    };
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
              {this.state.posts.map(e=>{
                  return <Card>
                    <Post
                      poster={e.poster}
                      posterprofile={e.profilepic}
                      designation={e.designation}
                      content={e.content}
                      hashtags={e.hashtags}
                      image={e.image}
                      likes={e.likes}
                      comments={e.comments}
                      profilepic={e.profilepic}
                    ></Post>
                  </Card>
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

export default Home
