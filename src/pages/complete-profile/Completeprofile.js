import React from "react";
import Header from "../../components/Header/Header";
import "./CompleteProfile.scss";
import fileImage from "../../assets/images/icons/file.svg";

class CompleteProfile extends React.Component {
    render() {
        return (
            <div className="Completion">
                <Header />
                <div className="container">
                    <h1 className="Completion__title">Profile Completion</h1>
                    <div className="Completion__inner-container">
                        <form onSubmit={() => {}}>
                            <div className="Completion__content-box">
                                <div className="Completion__cover-container">
                                    <div className="Completion__cover"></div>
                                    <div className="Completion__cover-image-btn-container">
                                        <img
                                            src={fileImage}
                                            className="Completion__cover-file-ico"
                                        />
                                        <button className="Completion__cover-btn">
                                            Upload Cover Photo
                                        </button>
                                    </div>
                                </div>

                                <div className="Completion__profile-picture-container">
                                    <img
                                        className="Completion__profile-picture"
                                        src="https://randomuser.me/api/portraits/women/35.jpg"
                                    />
                                    <button className="Completion__profile-picture-btn">
                                        Upload Profile Picture
                                    </button>
                                </div>
                                <div className="Completion__fields-container">
                                    <h3 className="Completion__subtitle">Bio</h3>
                                    <textarea rows="5" className="Completion__bio" />

                                    <h3 className="Completion__subtitle">Personal Details</h3>
                                    <div className="Completion__row">
                                        <div className="Completion__form-group">
                                            <label>Username</label>
                                            <input type="text" className="Completion__form-input" />
                                        </div>

                                        <div className="Completion__form-group">
                                            <label>Full Name</label>
                                            <input type="text" className="Completion__form-input" />
                                        </div>
                                    </div>
                                    <div className="Completion__row">
                                        <div className="Completion__form-group">
                                            <label>Email</label>
                                            <input type="text" className="Completion__form-input" />
                                        </div>

                                        <div className="Completion__form-group">
                                            <label>Phone Number</label>
                                            <input type="text" className="Completion__form-input" />
                                        </div>
                                    </div>

                                    <h3 className="Completion__subtitle">College Details</h3>

                                    <div className="Completion__row">
                                        <div className="Completion__form-group">
                                            <label>Branch</label>
                                            <input type="text" className="Completion__form-input" />
                                        </div>

                                        <div className="Completion__form-group">
                                            <label>Batch</label>
                                            <input type="text" className="Completion__form-input" />
                                        </div>

                                        <div className="Completion__form-group">
                                            <label>Admission No</label>
                                            <input type="text" className="Completion__form-input" />
                                        </div>
                                    </div>

                                    <div className="Completion__row">
                                        <div className="Completion__form-group">
                                            <label>Personal Details</label>
                                            <input type="text" className="Completion__form-input" />
                                        </div>
                                        <div className="Completion__form-group Completion__hidden">
                                            <input type="text" />
                                        </div>
                                        <div className="Completion__form-group Completion__hidden">
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className="Completion__row">
                                        <div className="Completion__skills-container">
                                            <h3 className="Completion__subtitle">Skills</h3>
                                            <div className="Completion__skills-box"></div>
                                        </div>

                                        <div className="Completion__links-container">
                                            <h3 className="Completion__subtitle">Links</h3>

                                            <div className="Completion__form-group Completion__form-group-skills">
                                                <label>Linkedin</label>
                                                <input
                                                    type="text"
                                                    className="Completion__form-input"
                                                />
                                            </div>

                                            <div className="Completion__form-group Completion__form-group-skills">
                                                <label>Instagram</label>
                                                <input
                                                    type="text"
                                                    className="Completion__form-input"
                                                />
                                            </div>

                                            <div className="Completion__form-group Completion__form-group-skills">
                                                <label>Twitter</label>
                                                <input
                                                    type="text"
                                                    className="Completion__form-input"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* <h3 className="Completion__subtitle">Referrals</h3>

                            <div className="Completion__row">
                                <div className="Completion__form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="Completion__form-input" />
                                </div>

                                <div className="Completion__form-group">
                                    <label>Email</label>
                                    <input type="text" className="Completion__form-input" />
                                    </div>
                            </div>
                            <div className="Completion__row">
                            <div className="Completion__form-group">
                            <label>Phone Number</label>
                            <input type="text" className="Completion__form-input" />
                                </div>
                                <div className="Completion__form-group Completion__hidden">
                                <input type="text" />
                                </div>
                                </div>
                            <button type="submit">Add</button> */}
                                </div>
                            </div>
                            <button type="submit" className="Completion__submit-btn">
                                Go to feed
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompleteProfile;
