import React, { Component } from "react";
import  "./Login.scss";
//import React from "react";
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import Google from "../../assets/images/icons/Google.svg";

import { Link } from "react-router-dom";
const Login = () => (
    <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
            console.log(values);
        }}



        validationSchema={Yup.object().shape({
            username: Yup.string()
                .required("Required"),
            password: Yup.string()
                .required("No password provided.")

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
                    <div className="Login__heading">
                        MACEBOOK
                    </div>

                    <div className="Login__container-white container">
                        <div className="Login__container-white__sign ">Sign in</div>
                        <div className="Signup__container-white__google "><img  src={Google}/> Sign in with Google</div>
                        <form onSubmit={handleSubmit}>


                            <div className="Login__container-white__username"><input
                                name="username"
                                type="text"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.username && touched.username && "error"}
                            /></div>
                                {errors.username && touched.username && (
                                    <div className="Login__container-white__error-message">{errors.username}</div>
                                )}


                            <div className="Login__container-white__password"><input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.password && touched.password && "error"}
                            /></div>
                                {errors.password && touched.password && (
                                    <div className="Login__container-white__error-message">{errors.password}</div>
                                )}
                            <div><Link className="Login__container-white__forgot"to='/forgotpassword'>Forgot Password</Link></div>


                            <div><button type="submit" >
                                Sign in
                            </button></div>
                            <div className="Login__container-white__create"><Link  to='/signup'>Create an Account</Link></div>


                        </form>
                    </div>
                </div>
            );
        }}
    </Formik>
);


export default Login;
