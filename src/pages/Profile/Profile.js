import React, { Component } from "react";

import "./Profile.scss";
import Header from "../../components/Header/Header";
import UserIconActive from "../../assets/images/icons/User-active.png";

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <Header active="profile" />
        <div className="container">
          <div className="profile-bgimgContainer">
            <img src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg' alt="Background Image Not Loaded"></img>
          </div>
          <div className="profile-header">
            <div className="profile-header-section-1">
              <div className="profile-imgContainer">
                <img src='https://randomuser.me/api/portraits/med/men/4.jpg' alt="User Img"></img>
              </div>
            </div>
            <div className="profile-header-section-2">
              <h2>User Name</h2>
              <div className="profile-userDetails">
                <span>Position</span>
                <span>Location</span>
                <span>Connections</span>
              </div>
            </div>
            <div className="profile-header-section-3">
              <span>Buttons</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
