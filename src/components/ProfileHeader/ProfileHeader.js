import React, { Component } from "react";

import "./ProfileHeader.scss";
import cover from "../../assets/images/icons/cover.jpg";
import profileimg from "../../assets/images/icons/profile.webp";

class ProfileHeader extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         btnData1: 'Connect',
    //         btnDate2: 'Message'
    //     }
    // }

    render(){
        return(
            <div className="profile-headerContainer">
                <div className="profile-bgimgContainer">
                    <img src={cover} alt="Background Image Not Loaded"></img>
                </div>
                <div className="profile-header">
                    <div className="profile-header-section-1">
                    <div className="profile-imgContainer">
                        <img src={profileimg} alt="User Img"></img>
                    </div>
                    </div>
                    <div className="profile-header-desc">
                    <div className="profile-header-section-2">
                        <h2 className="username">{this.props.user}</h2>
                        <div className="profile-userDetails">
                        <span className="position">{this.props.position}</span>
                        <span className="batch">{this.props.location} . Batch of '{this.props.batch} . {this.props.dept}</span>
                        <span className="userConnections">{this.props.conn} Connections</span>
                        </div>
                    </div>
                    <div className="profile-header-section-3">
                        <div className="profile-header-btnContainer">
                        <div className="profile-header-userButtons">
                            <button className="profile-header-btn1">{this.props.self ? "Setting": "Message"}</button>
                            <button className="profile-header-btn2">{this.props.self ? "Edit Profile": "Connect"}</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileHeader