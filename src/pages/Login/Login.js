import React, { Component } from "react";
import "./Login.scss";
//import React from "react";
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
//import Google from "../../assets/images/icons/Google.svg";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
const Login = () => {
    const history = useHistory();

    return (
        <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
                const asyncFunc = async () => {
                    try {
                        const loginResponse = await fetch("https://mace-connect.herokuapp.com/api/v1/auth/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                email: values.username,
                                password: values.password,
                            }),
                        });

                        if (loginResponse.status != 201) {
                            return alert("Couldn't login!");
                        }

                        const loginData = await loginResponse.json();
                        // if( loginData.statusCode != 200){
                        //     return alert(`Unable to login!${loginData.statusCode}`);
                        //     //console.log(loginData.statusCode);
                        // }
                        console.log(loginData);

                        const token = loginData.access_token;
                        window.localStorage.setItem("token", token);
                        window.localStorage.setItem("isAuthenticated", "true");
                        history.push("/complete-profile");
                    } catch (e) {
                        // alert("Couldn't sign you in! Try again");
                        console.log(e);
                    }
                };

                asyncFunc();
            }}
            validationSchema={Yup.object().shape({
                username: Yup.string().required("Required"),
                password: Yup.string().required("No password provided."),
            })}
        >
            {(props) => {
                const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
                return (
                    <div className="container Login">
                        <div className="Login__heading">MACEBOOK</div>

                        <div className="Login__container-white container">
                            <div className="Login__container-white__sign ">Sign in</div>
                            {/* <div className="Login__container-white__google ">
                            <img src={Google} />
                            <p>Sign in with Google</p>
                        </div> */}
                            <form onSubmit={handleSubmit}>
                                <div className="Login__container-white__username">
                                    <input
                                        name="username"
                                        type="text"
                                        placeholder="Enter your email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.username && touched.username && "error"}
                                    />
                                </div>
                                {errors.username && touched.username && (
                                    <div className="Login__container-white__error-message">{errors.username}</div>
                                )}

                                <div className="Login__container-white__password">
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.password && touched.password && "error"}
                                    />
                                </div>
                                {errors.password && touched.password && (
                                    <div className="Login__container-white__error-message">{errors.password}</div>
                                )}
                                <div>
                                    <Link className="Login__container-white__forgot" to="/forgotpassword">
                                        Forgot Password
                                    </Link>
                                </div>

                                <div>
                                    <button type="submit">Sign in</button>
                                </div>
                                <div className="Login__container-white__create">
                                    <Link to="/signup">Create an Account</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
};

export default Login;
