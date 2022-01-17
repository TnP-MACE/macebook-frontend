import React, { Component, useContext, useEffect } from "react";
import "./EditProfile.scss";
//import React from "react";
import { Formik, Field } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import Google from "../../assets/images/icons/Google.svg";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { render } from "react-dom";
import profilepic from "../../assets/images/icons/profile.jpg";
import Select from "react-select";
import { useState } from "react";
import DocImage from "../../assets/images/icons/Doc.svg";
import { Redirect, useHistory } from "react-router";
import AuthContext from "../../auth/AuthContext";
import isAuthenticated from "../../auth/isAuthenticated";
import Spinner from "../../components/Spinner/Spinner";
import imageCompression from "browser-image-compression";

const EditProfile = (props) => {
    const history = useHistory();
    const { state, dispatch } = useContext(AuthContext);

    const [user, setUser] = useState({
        about: "This is a sample bio",
        accomplishments: [],
        email: "asdf",
        address: null,
        admission: { admission_no: "sdfjh", branch: "sdfjkh", batch: "1254" },
        cover_url: null,
        experience: [],
        fullname: "lksdjf",
        phoneno: "9456898",
        profile_id: "cf0069b6-dc0e-465c-8ce6-d6da3c226b31",
        profile_image_url: null,
        ref_email: "",
        ref_fullname: "",
        ref_phonenumber: "",
        skills: [],
        status: "complete",
        urls: { linkedin: "", facebook: "", github: "" },
    });
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [changeCoverActive, setChangeCoverActive] = useState(false);
    const [coverImage, setCoverImage] = useState("");
    const [coverImageFileFormat, setCoverImageFileFormat] = useState(null);
    const [profileImage, setProfileImage] = useState("");
    const [loading, setLoading] = useState(true);

    const handleProfileImageAdd = (evt) => {
        const element = document.getElementById("profile-input");
        const file = element.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            setProfileImage(reader.result);
            const output = document.getElementById("profile-img");
            output.src = reader.result;
        };
        reader.readAsDataURL(file);
        // document.getElementById("profile-img-default").style.display = "none";
    };

    const handleCoverImageAdd = () => {
        const element = document.getElementById("cover-input");
        const file = element.files[0];
        setCoverImageFileFormat(file);

        const reader = new FileReader();
        reader.onload = () => {
            setCoverImage(reader.result);
            const output = document.getElementById("cover-img");
            output.src = reader.result;
        };
        reader.readAsDataURL(file);
        setChangeCoverActive(true);
    };

    const handleCoverImageChange = () => {
        const element = document.getElementById("cover-input-change");
        const file = element.files[0];
        setCoverImageFileFormat(file);

        const reader = new FileReader();
        reader.onload = () => {
            setCoverImage(reader.result);
            const output = document.getElementById("cover-img");
            output.src = reader.result;
        };
        reader.readAsDataURL(file);
    };

    function CustomSelect({ label, options, onChange, defaultValue, isMulti }) {
        return (
            <div>
                <Select isMulti={isMulti} options={options} onChange={onChange} defaultValue={defaultValue} />
            </div>
        );
    }

    async function compressImage(file) {
        const options = {
            maxSizeMB: 0.5,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);
        return compressedFile;
    }

    async function submitCoverImage(token) {
        console.log("submitting cover");
        console.log(coverImageFileFormat);
        const blob = await compressImage(coverImageFileFormat);
        const compressedImageFile = new File([blob], "cover.jpeg");

        let coverFormData = new FormData();
        coverFormData.append("cover", compressedImageFile);

        const coverImageResponse = await fetch("https://mace-connect.herokuapp.com/api/v1/profile/cover", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: coverFormData,
        });

        const coverResponseData = await coverImageResponse.json();
        console.log(coverResponseData);
    }

    async function submitProfileImage(token) {
        console.log("submitting profile");
        const profileImageElement = document.getElementById("profile-input");
        // console.log(profileImageElement);
        const profileImageData = profileImageElement.files[0];

        const blob = await compressImage(profileImageData);
        const compressedImageFile = new File([blob], "profile.jpeg");

        console.log(compressedImageFile);

        let profileFormData = new FormData();
        profileFormData.append("profilepicture", compressedImageFile);

        const profileImageResponse = await fetch("https://mace-connect.herokuapp.com/api/v1/profile/picture", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: profileFormData,
        });

        const profileResponseData = await profileImageResponse.json();
        console.log(profileResponseData);
    }

    const options = [
        { label: "React", value: "react" },
        { label: "ReactNative", value: "react-native" },
        { label: "JavaScript", value: "js" },
        { label: "CSS", value: "css" },
    ];

    function onSkillChange(value) {
        const data = sessionStorage.getItem("skills");
        let skills = [];
        if (data) {
            skills = JSON.parse(data);
        }
        skills.push(value);
        sessionStorage.setItem("skills", JSON.stringify(skills));
    }

    async function fetchProfile(token, userId) {
        console.log(userId);
        const response = await fetch(`https://mace-connect.herokuapp.com/api/v1/profile/p1/${userId}`, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        const data = await response.json();
        return data.profile;
    }

    useEffect(() => {
        if (!state.isAuthenticated) {
            (async () => {
                const [authenticated, payload] = await isAuthenticated();
                if (authenticated === true) {
                    dispatch({
                        type: "LOGIN",
                        payload: payload,
                    });
                    const user = await fetchProfile(payload.token, payload.user.id);
                    setUser(user);
                    setEmail(payload.user.email);
                    setUsername(payload.user.username);
                    setLoading(false);
                } else {
                    this.props.history.push("/login");
                }
            })();
        } else {
            (async () => {
                const user = await fetchProfile(state.token, state.user.id);
                setUser(user);
                setEmail(state.user.email);
                setUsername(state.user.username);
                setLoading(false);
            })();
        }
    }, []);

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    return (
        <Formik
            initialValues={{
                cover: "",
                profile: "",
                bio: user.about,
                username: username,
                fullname: user.fullname,
                email: email,
                phno: user.phoneno,
                branch: user.admission.branch,
                batch: user.admission.batch,
                addmiss: user.admission.admission_no,
                link: user.urls.linkedin,
                insta: "",
                twitter: "",
                rfullname: "",
                remail: "",
                rphno: "",
            }}
            enableReinitialize
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                const skillData = sessionStorage.getItem("skills");
                let skills = [
                    [
                        { label: "css", value: "css" },
                        { label: "Javascript", value: "js" },
                    ],
                ];

                if (skillData) {
                    skills = JSON.parse(skillData);
                }

                const sk = skills[skills.length - 1];
                const skData = sk.map((s) => s.value);
                const data = { ...values, skills: skData };

                const accomplishment = [];
                const finaldata = {
                    fullname: data.fullname,
                    admission: {
                        admission_no: data.addmiss,
                        branch: data.branch,
                        batch: data.batch,
                    },
                    phoneno: data.phno,
                    urls: {
                        linkedin: data.link,
                        facebook: data.insta,
                        github: data.twitter,
                    },
                    about: data.bio,

                    ref_fullname: data.rfullname,
                    ref_email: data.remail,
                    ref_phonenumber: data.rphno,
                    skills: data.skills,
                    accomplishments: accomplishment,
                };
                (async () => {
                    try {
                        const token = state.token;
                        console.log(token);
                        const Completeprofileresponse = await fetch(
                            "https://mace-connect.herokuapp.com/api/v1/profile/completion",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`,
                                },
                                body: JSON.stringify(finaldata),
                            }
                        );
                        const completeprofiledata = await Completeprofileresponse.json();
                        if (completeprofiledata.success) {
                            window.localStorage.setItem("profile-completed", true);

                            // console.log(profileImage);
                            // console.log(coverImage);
                            if (profileImage) {
                                await submitProfileImage(token);
                            }
                            if (coverImage) {
                                await submitCoverImage(token);
                            }

                            setSubmitting(false);
                            history.push("/");
                        } else {
                            alert("Couldn't submit your profile! Try again");
                            setSubmitting(false);
                        }
                    } catch (e) {
                        alert("Couldn't submit your profile! Try again");
                        setSubmitting(false);
                        console.log(e);
                    }
                })();
            }}
            validationSchema={Yup.object().shape({
                // username: Yup.string().required("Required"),
                fullname: Yup.string().required("Required"),
                // email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
                phno: Yup.string().required("Required.").matches(phoneRegExp, "Phone number is not valid"),
                branch: Yup.string().required("Required"),
                batch: Yup.string().required("Required"),
                addmiss: Yup.string().required("Required"),
            })}
        >
            {(props) => {
                const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
                if (loading) {
                    return (
                        <div className="Completion__spinner-container">
                            <Spinner />
                        </div>
                    );
                }
                return (
                    <>
                        <Header />
                        <div className="Completion">
                            <form onSubmit={handleSubmit} id="completion-form">
                                <div className="container Completion__container">
                                    <div className="Completion__cover-container">
                                        <div className="Completion__cover">
                                            <img
                                                id="cover-img"
                                                className="Completion__cover-file-ico"
                                                name="profilecover"
                                            />
                                        </div>
                                        {changeCoverActive || (
                                            <div className="Completion__cover-image-btn-container">
                                                <label htmlFor="cover-input" id="cover-input-label">
                                                    <img src={DocImage} />
                                                    <span>Upload Cover Photo</span>
                                                </label>
                                                <input
                                                    className="Completion__cover-btn"
                                                    type="file"
                                                    name="cover"
                                                    accept="image/*"
                                                    value={values.cover}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        handleCoverImageAdd(e);
                                                    }}
                                                    onBlur={handleBlur}
                                                    style={{ display: "none" }}
                                                    id="cover-input"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="Completion__profile-picture-container">
                                        <img
                                            className="Completion__profile-picture"
                                            id="profile-img"
                                            src={profilepic}
                                        />
                                        {/* <img
                                            className="Completion__profile-picture"
                                            id="profile-img-default"
                                            src={profilepic}
                                        /> */}
                                        <label htmlFor="profile-input">
                                            <span className="Completion__profile-picture-btn">
                                                Upload Profile Picture
                                            </span>
                                        </label>
                                        <input
                                            type="file"
                                            name="profile"
                                            accept="image/*"
                                            value={values.profile}
                                            onChange={(e) => {
                                                handleChange(e);
                                                handleProfileImageAdd(e);
                                            }}
                                            onBlur={handleBlur}
                                            id="profile-input"
                                            style={{ visibility: "hidden" }}
                                        />
                                    </div>
                                    {changeCoverActive && (
                                        <div className="cover-input-change-container">
                                            <label htmlFor="cover-input-change" id="cover-change-label">
                                                <span>Change cover photo</span>
                                            </label>
                                            <div className="coverchange">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    values={values.cover}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        handleCoverImageChange(e);
                                                    }}
                                                    onBlur={handleBlur}
                                                    id="cover-input-change"
                                                    style={{ visibility: "hidden", position: "absolute" }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                    <div className="Completion__fields-container">
                                        <div className="Completion__fields-container">
                                            <h3 className="Completion__subtitle">Bio</h3>
                                            <textarea
                                                rows="5"
                                                className="Completion__bio"
                                                type="textarea"
                                                name="bio"
                                                value={values.bio}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />

                                            <h3 className="Completion__subtitle">Personal Details</h3>
                                            <div className="Completion__row">
                                                <div className="Completion__form-group">
                                                    <label>Username</label>
                                                    <input
                                                        type="text"
                                                        className="Completion__form-input"
                                                        name="username"
                                                        value={username}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        disabled={true}
                                                    />
                                                    {errors.username && touched.username && (
                                                        <div className="Completion__error-msg">{errors.username}</div>
                                                    )}
                                                </div>

                                                <div className="Completion__form-group">
                                                    <label>Full Name</label>
                                                    <input
                                                        type="text"
                                                        className="Completion__form-input"
                                                        name="fullname"
                                                        value={values.fullname}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.fullname && touched.fullname && (
                                                        <div className="Completion__error-msg">{errors.fullname}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="Completion__row">
                                                <div className="Completion__form-group">
                                                    <label>Email</label>
                                                    <input
                                                        type="text"
                                                        className="Completion__form-input"
                                                        name="email"
                                                        value={email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        disabled={true}
                                                    />
                                                    {errors.email && touched.email && (
                                                        <div className="Completion__error-msg">{errors.email}</div>
                                                    )}
                                                </div>

                                                <div className="Completion__form-group">
                                                    <label>Phone Number</label>
                                                    <input
                                                        type="text"
                                                        className="Completion__form-input"
                                                        name="phno"
                                                        value={values.phno}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.phno && touched.phno && (
                                                        <div className="Completion__error-msg">{errors.phno}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <h3 className="Completion__subtitle">College Details</h3>

                                            <div className="Completion__row">
                                                <div className="Completion__form-group">
                                                    <label>Branch</label>
                                                    {/* <select className="Completion__form-input" name="branch" onChange={handleChange} onBlur={handleBlur}>
                                                        <option>CSE</option>
                                                        <option>Mech</option>
                                                        <option>Civil</option>
                                                        <option>EC</option>
                                                        <option>EEE</option>
                                                        <option>DS</option>
                                                    </select> */}
                                                    <input
                                                        type="text"
                                                        className="Completion__form-input"
                                                        name="branch"
                                                        value={values.branch}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder="ECE, CSE, Mech"
                                                    />
                                                    {errors.branch && touched.branch && (
                                                        <div className="Completion__error-msg">{errors.branch}</div>
                                                    )}
                                                </div>

                                                <div className="Completion__form-group">
                                                    <label>Batch</label>
                                                    <input
                                                        type="text"
                                                        className="Completion__form-input"
                                                        name="batch"
                                                        value={values.batch}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder="2018, 2020, 2023"
                                                    />
                                                    {errors.batch && touched.batch && (
                                                        <div className="Completion__error-msg">{errors.batch}</div>
                                                    )}
                                                </div>

                                                <div className="Completion__form-group">
                                                    <label>Admission No</label>
                                                    <input
                                                        type="text"
                                                        className="Completion__form-input"
                                                        name="addmiss"
                                                        value={values.addmiss}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.addmiss && touched.addmiss && (
                                                        <div className="Completion__error-msg">{errors.addmiss}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="Completion__row">
                                                <div className="Completion__skills-container">
                                                    <h3 className="Completion__subtitle">Skills</h3>
                                                    <div className="Completion__skills-box">
                                                        <CustomSelect
                                                            isMulti={true}
                                                            defaultValue={[options[3], options[2]]}
                                                            onChange={onSkillChange}
                                                            options={options}
                                                            label="Choose a libary"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="Completion__links-container">
                                                    <h3 className="Completion__subtitle">Links</h3>

                                                    <div className="Completion__form-group Completion__form-group-skills">
                                                        <label>Linkedin</label>
                                                        <input
                                                            type="text"
                                                            className="Completion__form-input"
                                                            name="link"
                                                            value={values.link}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="https://linkedin.com/in/johndoe"
                                                        />
                                                    </div>

                                                    <div className="Completion__form-group Completion__form-group-skills">
                                                        <label>Instagram</label>
                                                        <input
                                                            type="text"
                                                            className="Completion__form-input"
                                                            name="insta"
                                                            value={values.insta}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="https://instagram.com/johndoe"
                                                        />
                                                    </div>

                                                    <div className="Completion__form-group Completion__form-group-skills">
                                                        <label>Twitter</label>
                                                        <input
                                                            type="text"
                                                            className="Completion__form-input"
                                                            name="twitter"
                                                            value={values.twitter}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="https://twitter.com/johndoe"
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
                                        <button type="submit" className="Completion__submit-btn">
                                            {isSubmitting
                                                ? // <div class="lds-ring">
                                                  //     <div></div>
                                                  //     <div></div>
                                                  //     <div></div>
                                                  //     <div></div>
                                                  // </div>
                                                  "Submitting..."
                                                : "Submit"}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </>
                );
            }}
        </Formik>
    );
};

export default EditProfile;
