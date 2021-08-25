import React, { Component } from "react";

import "./Profile.scss";
import Header from "../../components/Header/Header";

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <Header active="profile" />
        <div className="container">
          <div className="profile-bgimgContainer">
            <img src="" alt="Background Image Not Loaded"></img>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Profile;
