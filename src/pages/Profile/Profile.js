import React, { Component } from "react";

import "./Profile.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Experience from "../../components/Experience/Experience";
import cover from "../../assets/images/icons/cover.jpg";
import profileimg from "../../assets/images/icons/profile.webp";

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <Header active="profile" />
        <div className="container">
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
                  <div className="profile-skillsContainer">
                    <span className="profile-skills">HTML</span>
                    <span className="profile-skills">CSS</span>
                    <span className="profile-skills">REACT</span>
                    <span className="profile-skills">Node.js</span>                    
                  </div>
                </Card>
              </div>
              <div className="card-container">
                <Card>
                  <div className="profile-applicationContainer">
                    <div className="profile-appCount">
                      <div className="profile-appContent">
                        <h2>3</h2>
                        <p>New Applications</p>
                      </div>
                      <div className="profile-appContent">
                        <h2>42</h2>
                        <p>Total Applications</p>
                      </div>
                    </div>
                    <div className="profile-dashboardbtnContainer">
                      <button>Go to Dashboard</button>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="card-container">
                <Card>
                  <h3>PEOPLE YOU MAY KNOW</h3>
                </Card>
              </div>
            </div>
            <div className="profile-rightpanel">
              <div className="profile-posts-section">
                <h2>My Posts</h2>
                <p>Posts</p>
              </div>
              <div className="profile-experience">
                <h2>Experience</h2>
                <Experience 
                  name="Apple Inc" 
                  duration="Oct 2019- Current"
                  type="Fulltime"
                  position="Senior Software Engineer"
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                />
                <Experience 
                  name="Apple Inc" 
                  duration="Oct 2019- Current"
                  type="Fulltime"
                  position="Senior Software Engineer"
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                />
                <Experience 
                  name="Apple Inc" 
                  duration="Oct 2019- Current"
                  type="Fulltime"
                  position="Senior Software Engineer"
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                />
              </div>
              <div className="profile-accom">
                <h2>Accomplishments</h2>
                <div className="acc-row">
                  <span className="acc-data">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                  <span className="acc-data">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                  <span className="acc-data">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>
              </div>
              <div className="profile-contact">
                <h2>Contact Info</h2>

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
