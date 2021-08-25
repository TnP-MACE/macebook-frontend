import React, { Component } from "react";

import "./Profile.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

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
                <span>Location . Batch of '14 . CSE</span>
                <span className="userConnections">Connections</span>
              </div>
            </div>
            <div className="profile-header-section-3">
              <div className="profile-header-btnContainer">
                <div className="profile-header-userButtons">
                  <button className="profile-header-btn1">Settings</button>
                  <button className="profile-header-btn2">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-body">
            <div className="profile-leftpanel">
              <div className="card-container">
                <Card>
                  <h3>About</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                </Card>
              </div>
              <div className="card-container">
                <Card>
                  <h3>Skills</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                </Card>
              </div>
              <div className="card-container">
                <Card>
                  <h3>PEOPLE YOU MAY KNOW</h3>
                </Card>
              </div>
            </div>
            <div className="profile-rightpanel">
              Right Panel
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
