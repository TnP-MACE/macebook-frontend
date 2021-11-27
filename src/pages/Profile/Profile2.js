import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./Profile2.scss";
import Header from "../../components/Header/Header";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader2";
import Card from "../../components/Card/Card";
import Experience from "../../components/Experience/Experience";
import Suggestions from "../../components/Suggestions/Suggestions";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import cover from "../../assets/images/icons/cover.jpg";
import profileimg from "../../assets/images/icons/profile.webp";
import postImg from "../../assets/images/icons/postImg.png";
import profilepic from "../../assets/images/icons/UserProfile.png";
import mail from "../../assets/images/icons/mail.svg";
import phone from "../../assets/images/icons/phone.svg";
import web from "../../assets/images/icons/web.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import fb from "../../assets/images/icons/fb.svg";
import github from "../../assets/images/icons/github.svg";
import edit from "../../assets/images/icons/edit.svg";
import arrow from "../../assets/images/icons/arrow.png";
import clogo from "../../assets/images/icons/company-logo.png";
import isAuthenticated from "../../auth/isAuthenticated";
import AuthContext from "../../auth/AuthContext";
import Spinner from "../../components/Spinner/Spinner";
import Post from "../../components/ProfilePost/ProfilePost";

class Profil2 extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            experience: [{}, {}],
            posts: [{}, {}],
            user: {
                username: "john",
                fullname: "John Doe",
                bio: "SENIOR SWE AT APPLE INC",
                location: "San Fransisco, CA",
                batch: "2014",
                branch: "CSE",
                connections: 25000,
                image: profileimg,
                cover: cover,
                isAuthenticated: true,
                id: 1,
            },
        };
    }

    render() {
        return (
            <>
                <Header />
                <div className="Profile container">
                    <ProfileHeader user={this.state.user} />
                    <div className="Profile__content">
                        <aside className="Profile__content-side">
                            <div className="Profile__about">
                                <Card>
                                    <h2>ABOUT</h2>
                                    <p>
                                        The founder and late CEO of #Apple. I code and create iPhones. And my disciples,
                                        ഇവന്മാര് ഈ company പൂട്ടിക്കും
                                    </p>
                                </Card>
                            </div>
                            <div className="Profile__skills">
                                <Card>
                                    <h2>SKILLS</h2>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>REACT</span>
                                    <span>NODE JS</span>
                                    <span>TENSORFLOW</span>
                                    <span>ADOBE PHOTOSHOP</span>
                                    <span>SEO</span>
                                    <span>DIGITAL MARKETING</span>
                                </Card>
                            </div>
                        </aside>
                        <main className="Profile__content-main">
                            <h1>My Posts</h1>
                            <div className="Profile__content-main-posts">
                                {this.state.posts.map((post) => {
                                    return (
                                        <Card>
                                            <Post />
                                        </Card>
                                    );
                                })}
                                <a href="/posts">
                                    <img src={arrow} />
                                </a>
                            </div>
                            <h1>Experience</h1>
                            <div className="Profile__content-main-experience">
                                {this.state.experience.map((exp) => {
                                    return (
                                        <div className="Profile__content-main-experience-container">
                                            <div className="Profile__content-main-experience-image-container">
                                                <img src={clogo} />
                                            </div>
                                            <div className="Profile__content-main-experience-company-container">
                                                <p className="Profile__content-main-experience-company-name">
                                                    Apple Inc
                                                </p>
                                                <p className="Profile__content-main-experience-company-date">
                                                    Oct 2019- Current
                                                </p>
                                                <p className="Profile__content-main-experience-company-type">
                                                    Full Time
                                                </p>
                                            </div>
                                            <div className="Profile__content-main-experience-description-container">
                                                <h2 className="Profile__content-main-experience-description-title">
                                                    Senior Software Engineer
                                                </h2>
                                                <p className="Profile__content-main-experience-description-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod temporaure incididunt ut labore et dolore magna aliqua.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <h1>Contact Info</h1>
                            <div className="Profile__content-main-contact">
                                <div className="Profile__content-main-contact-img-txt-container">
                                    <img src={mail} alt="mail" />
                                    <p>john@doe.com</p>
                                </div>
                                <div className="Profile__content-main-contact-img-txt-container">
                                    <img src={phone} alt="mail" />
                                    <p>+91 123456789</p>
                                </div>
                                <div className="Profile__content-main-contact-img-txt-container">
                                    <img src={web} alt="mail" />
                                    <p>johndoe.com</p>
                                </div>
                                <div className="Profile__content-main-contact-img-txt-container">
                                    <img src={linkedin} alt="mail" />
                                    <p>linkedin.com/in/johndoe</p>
                                </div>
                                <div className="Profile__content-main-contact-img-txt-container">
                                    <img src={fb} alt="mail" />
                                    <p>John Doe</p>
                                </div>
                                <div className="Profile__content-main-contact-img-txt-container">
                                    <img src={github} alt="mail" />
                                    <p>github.com/johndoe</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </>
        );
    }
}

export default Profil2;
