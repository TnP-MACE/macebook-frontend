import React, { Component } from "react";
import "./ForgotPassword.scss";
//import React from "react";
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import Google from "../../assets/images/icons/Google.svg";
import { Link } from "react-router-dom";
const ForgotPassword = () => (
    <Formik
        initialValues={{ otp: "", newpassword: "" ,confirmpassword:""}}
        onSubmit={(values, { setSubmitting }) => {
            console.log(values);
        }}



        validationSchema={Yup.object().shape({
            otp: Yup.string()
                .required("Required"),
            newpassword: Yup.string().required('Password is required'),
            confirmpassword: Yup.string()
                .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')

        })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            return (
                <div className="container">
                    <div className="ForgotPassword__heading">
                        MACEBOOK
                    </div>

                    <div className="ForgotPassword__container-white container">
                        <div className="ForgotPassword__container-white__forgot">Forgot Password?</div>
                        <div className="ForgotPassword__container-white__description">Please check your mail for the One Time Password</div>
                        <form onSubmit={handleSubmit}>
                            <div className="ForgotPassword__container-white__otp"><input
                                name="otp"
                                type="text"
                                placeholder="OTP"
                                value={values.otp}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.otp && touched.otp && "error"}
                            /></div>
                                {errors.otp && touched.otp && (
                                    <div className="ForgotPassword__container-white__error-message">{errors.otp}</div>
                                )}

                            <div className="ForgotPassword__container-white__newpassword"> <input
                                name="newpassword"
                                type="password"
                                placeholder="New Password"
                                value={values.newpassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.newpassword && touched.newpassword && "error"}
                            /></div>
                                {errors.newpassword && touched.newpassword && (
                                    <div className="ForgotPassword__container-white__error-message">{errors.newpassword}</div>
                                )}


                            <div className="ForgotPassword__container-white__confirmpassword">     <input
                                name="confirmpassword"
                                type="password"
                                placeholder="Confirm Password"
                                value={values.confirmpassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.confirmpassword && touched.confirmpassword && "error"}
                            /></div>
                                {errors.confirmpassword && touched.confirmpassword && (
                                    <div className="ForgotPassword__container-white__error-message">{errors.confirmpassword}</div>
                                )}

                            <div>  <button type="submit" >
                                Sign in
                            </button></div>


                        </form>
                    </div>
                </div>


            );
        }}
    </Formik>
);


export default ForgotPassword;
