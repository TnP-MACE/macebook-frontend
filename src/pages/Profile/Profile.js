import React, { Component } from "react";

import "./Profile.scss";
import Header from "../../components/Header/Header";

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <Header active="profile" />
      </div>
    );
  }
}

export default Profile;
