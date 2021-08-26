import React, { Component } from 'react'
import './Post.scss'
import like from '../../assets/images/icons/like.svg'
import msg from '../../assets/images/icons/message.svg'
import share from '../../assets/images/icons/share.svg'

class Post extends Component {
    render() {
        return (
            <div className="post-container">
                <div className="poster">
                    <div className="posterimg">
                        <a href="./">
                            {' '}
                            <img
                                src={this.props.posterprofile}
                                alt="posterimage"
                                className="profile-pic"></img>
                        </a>
                    </div>
                    <div className="name_desig">
                        <a href="./">
                            <p className="Name">{this.props.poster}</p>
                        </a>
                        <p className="Desig">{this.props.designation}</p>
                    </div>
                </div>
                <div className="post-content">
                    <p>{this.props.content}</p>
                    <p className="hashtags">{this.props.hashtags}</p>
                    <img src={this.props.image} alt={this.props.content}></img>
                </div>
                <div className="post-attributes">
                    <p>{this.props.likes} Likes</p>
                    <p>{this.props.comments} Comments</p>
                </div>
                <div className="post-activity">
                    <div>
                        <img src={like} alt="Like"></img>
                    </div>
                    <div>
                        <img src={msg} alt="Message"></img>
                    </div>
                    <div>
                        <img src={share} alt="Share"></img>
                    </div>
                </div>
                <div className="post-comment">
                    <img src={this.props.profilepic} alt="Profilepic"></img>
                    <input
                        type="text"
                        placeholder="Add a comment"
                        className="comment-input-field"></input>
                </div>
                <div className="load-comments">
                    <a href="./">View all comments</a>
                </div>
            </div>
        )
    }
}
export default Post
