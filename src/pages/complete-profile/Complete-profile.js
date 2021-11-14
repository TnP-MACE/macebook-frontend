import React, { Component } from "react";
import "./Completeprofile.scss";
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

const Completeprofile = () => {
    const Profile = () => {
        const element = document.getElementById("profile-input");
        const file = element.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            const output = document.getElementById("profile-img");
            output.src = reader.result;
        };
        reader.readAsDataURL(file);
        document.getElementById("profile-img-default").style.display = "none";
    };
    const Cover = () => {
        const element = document.getElementById("cover-input");
        const file = element.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            const output = document.getElementById("cover-img");
            output.src = reader.result;
        };
        reader.readAsDataURL(file);
        document.getElementById("cover-input").style.display = "none";
        document.getElementById("cover-change-label").style.display = "";
        document.getElementById("cover-input-label").style.display = "none";
    };
    const Coverchange = () => {
        const element = document.getElementById("cover-input-change");
        const file = element.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            const output = document.getElementById("cover-img");
            output.src = reader.result;
        };
        reader.readAsDataURL(file);
        document.getElementById("cover-input").style.display = "none";
    };

    function CustomSelect({ label, options, onChange, defaultValue, isMulti }) {
        return (
            <div>
                <Select isMulti={isMulti} options={options} onChange={onChange} defaultValue={defaultValue} />
            </div>
        );
    }

    const options = [
        { label: "React", value: "react" },
        { label: "ReactNative", value: "react-native" },
        { label: "JavaScript", value: "js" },
        { label: "CSS", value: "css" },
    ];

    function onChangeInput(value) {
        const data = sessionStorage.getItem("skills");
        let skills = [];
        if (data) {
            skills = JSON.parse(data);
        }
        skills.push(value);
        sessionStorage.setItem("skills", JSON.stringify(skills));
    }

    return (
        <Formik
            initialValues={{
                cover: "",
                profile: "",
                bio: "",
                username: "",
                fullname: "",
                email: "",
                phno: "",
                branch: "",
                batch: "",
                addmiss: "",
                link: "",
                insta: "",
                twitter: "",
                rfullname: "",
                remail: "",
                rphno: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
                //console.log(values);
                const skillData = sessionStorage.getItem("skills");
                let skills = [];
                if (skillData) {
                    skills = JSON.parse(skillData);
                }
                const sk = skills[skills.length - 1];
                const skData = sk.map((s) => s.value);
                const data = { ...values, skills: skData };
                //console.log(data)

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
                    about: "This is a sample bio",

                    ref_fullname: data.rfullname,
                    ref_email: data.remail,
                    ref_phonenumber: data.rphno,
                    skills: data.skills,
                };
                console.log(finaldata);

                const asyncFunc = async () => {
                    try {
                        const Completeprofileresponse = await fetch(
                            "https://mace-connect.herokuapp.com/api/v1/profile/completion",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    finaldata,
                                }),
                            }
                        );
                        const completeprofiledata = await Completeprofileresponse.json();
                        console.log(completeprofiledata);
                    } catch (e) {
                        console.log(e);
                    }
                };
                asyncFunc();
            }}
            validationSchema={Yup.object().shape({
                username: Yup.string().required("Required"),
                fullname: Yup.string().required("Required"),
                email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),

                phno: Yup.string().required("Required."),
                branch: Yup.string().required("Required"),
                batch: Yup.string().required("Required"),
                addmiss: Yup.string().required("Required"),
            })}
        >
            {(props) => {
                const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
                return (
                    <>
                        <Header active={"home"} />
                        <div className="Completion">
                            <form onSubmit={handleSubmit}>
                                <div className="container Completion__container">
                                    <div className="Completion__cover-container">
                                        <div className="Completion__cover">
                                            <img id="cover-img" className="Completion__cover-file-ico" />
                                        </div>
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
                                                    Cover(e);
                                                }}
                                                onBlur={handleBlur}
                                                style={{ display: "none" }}
                                                id="cover-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="Completion__profile-picture-container">
                                        <img className="Completion__profile-picture" id="profile-img" />
                                        <img
                                            className="Completion__profile-picture"
                                            id="profile-img-default"
                                            src={profilepic}
                                        />
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
                                                Profile(e);
                                            }}
                                            onBlur={handleBlur}
                                            id="profile-input"
                                            style={{ visibility: "hidden" }}
                                        />
                                    </div>
                                    <label
                                        htmlFor="cover-input-change"
                                        style={{ display: "none", float: "right" }}
                                        id="cover-change-label"
                                    >
                                        <span>Change cover photo</span>
                                    </label>
                                    <div className="coverchange">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            values={values.cover}
                                            onChange={(e) => {
                                                handleChange(e);
                                                Coverchange(e);
                                            }}
                                            onBlur={handleBlur}
                                            id="cover-input-change"
                                            style={{ visibility: "hidden" }}
                                        />
                                    </div>
                                    <div className="Completion__fields-container">
                                        <div className="Completion__fields-container">
                                            <h3 className="Completion__subtitle">Bio</h3>
                                            <textarea
                                                rows="5"
                                                className="Completion__bio"
                                                type="textarea"
                                                name="bio"
                                                value={values.confirmpassword}
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
                                                        value={values.confirmpassword}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.username && touched.username && (
                                                        <div>{errors.username}</div>
                                                    )}
                                                </div>

                                                <div className="Completion__form-group">
                                                    <label>Full Name</label>
                                                    <input
                                                        type="text"
                                                        className="Completion__form-input"
                                                        name="fullname"
                                                        value={values.confirmpassword}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.fullname && touched.fullname && (
                                                        <div>{errors.fullname}</div>
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
                                                        value={values.confirmpassword}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.email && touched.email && <div>{errors.email}</div>}
                                                </div>

                                                <div className="Completion__form-group">
                                                    <label>Phone Number</label>
                                                    <input
                                                        type="text"
                                                        className="Completion__form-input"
                                                        name="phno"
                                                        value={values.confirmpassword}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.phno && touched.phno && <div>{errors.phno}</div>}
                                                </div>
                                            </div>

                                            <h3 className="Completion__subtitle">College Details</h3>

                                            <div className="Completion__row">
                                                <div className="Completion__form-group">
                                                    <label>Branch</label>
                                                    <input
                                                        type="text"
                                                        className="Completion__form-input"
                                                        name="branch"
                                                        value={values.confirmpassword}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.branch && touched.branch && <div>{errors.branch}</div>}
                                                </div>

                                                <div className="Completion__form-group">
                                                    <label>Batch</label>
                                                    <input
                                                        type="text"
                                                        className="Completion__form-input"
                                                        name="batch"
                                                        value={values.confirmpassword}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.batch && touched.batch && <div>{errors.batch}</div>}
                                                </div>

                                                <div className="Completion__form-group">
                                                    <label>Admission No</label>
                                                    <input
                                                        type="text"
                                                        className="Completion__form-input"
                                                        name="addmiss"
                                                        value={values.confirmpassword}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.addmiss && touched.addmiss && <div>{errors.addmiss}</div>}
                                                </div>
                                            </div>

                                            <div className="Completion__row">
                                                <div className="Completion__skills-container">
                                                    <h3 className="Completion__subtitle">Skills</h3>
                                                    <div className="Completion__skills-box">
                                                        <CustomSelect
                                                            isMulti={true}
                                                            defaultValue={[options[3], options[2]]}
                                                            onChange={onChangeInput}
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
                                                            value={values.confirmpassword}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                    </div>

                                                    <div className="Completion__form-group Completion__form-group-skills">
                                                        <label>Instagram</label>
                                                        <input
                                                            type="text"
                                                            className="Completion__form-input"
                                                            name="insta"
                                                            value={values.confirmpassword}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                    </div>

                                                    <div className="Completion__form-group Completion__form-group-skills">
                                                        <label>Twitter</label>
                                                        <input
                                                            type="text"
                                                            className="Completion__form-input"
                                                            name="twitter"
                                                            value={values.confirmpassword}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
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
                                            Go to Feed
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

export default Completeprofile;
