import React, { Component } from "react";
import './Completeprofile.scss'
//import React from "react";
import { Formik,Field } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import Google from "../../assets/images/icons/Google.svg";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const Completeprofile =()=>(
    <Formik
        initialValues={{ cover: "", profile: "",bio:"",username:"",fullname:"",
                         email:"",phno:"",branch:"",batch:"",addmiss:"",link:"",
                         insta:"",twitter:"",rfullname:"",remail:"",rphno:""
        }}
        onSubmit={(values, { setSubmitting }) => {
            console.log(values);
        }}
        validationSchema={Yup.object().shape({
            username:Yup.string()
                .required("Required"),
            fullname: Yup.string()
                .required("Required"),
            email:Yup.string().email('Must be a valid email').max(255).required('Email is required'),

            phno: Yup.string()
                .required("Required."),
            branch:Yup.string()
                .required("Required"),
            batch:Yup.string()
                .required("Required"),
            addmiss:Yup.string()
                .required("Required")

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
                <>
                    <Header active={'home'} />
                    <div className="container Completeprofile__main">
                        <form onSubmit={handleSubmit}>

                            <div className="container">
                                <div className="Completeprofile__main__cover container">
                                    <div>
                                        <input type="file"
                                               name="cover"
                                               value={values.confirmpassword}
                                               onChange={handleChange}
                                               onBlur={handleBlur}

                                        />
                                    </div>
                                    <div className="Completeprofile__main__cover__dp">

                                    </div>
                                </div>

                                <div>
                                    <input className="Completeprofile__main__profile"
                                           type="file"
                                           name="profile"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className="Completeprofile__main__bio container"
                                        type="textarea"
                                        name="bio"
                                        value={values.confirmpassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                    </textarea>
                                </div>
                                <div className="Completeprofile__main__username">
                                    <input type="text"
                                           name="username"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                    {errors.username && touched.username && (
                                        <div>{errors.username}</div>
                                    )}
                                </div>


                                <div className="Completeprofile__main__full">
                                    <input
                                           type="text"
                                           name="fullname"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                    {errors.fullname && touched.fullname && (
                                        <div>{errors.fullname}</div>
                                    )}
                                </div>


                                <div>
                                    <input type="text"
                                           name="email"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email && (
                                        <div>{errors.email}</div>
                                    )}
                                </div>


                                <div className="Completeprofile__main__phno">
                                    <input type="text"
                                           name="phno"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                    {errors.phno && touched.phno && (
                                        <div>{errors.phno}</div>
                                    )}
                                </div>


                                <div>
                                    <input type="text"
                                           name="branch"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                </div>

                                {errors.branch && touched.branch && (
                                    <div>{errors.branch}</div>
                                )}
                                <div>
                                    <input type="text"
                                           name="batch"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                </div>

                                {errors.batch && touched.batch && (
                                    <div>{errors.batch}</div>
                                )}
                                <div>
                                    <input type="text"
                                           name="addmiss"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                </div>

                                {errors.addmiss && touched.addmiss && (
                                    <div>{errors.addmiss}</div>
                                )}
                                <div>
                                    <input type="text"
                                           name="link"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                           name="insta"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                           name="twitter"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                           name="rfullname"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                           name="remail"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                           name="rphno"
                                           value={values.confirmpassword}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                </div>
                                <div><button type="submit" >
                                    Go to Feed
                                </button></div>

                            </div>


                        </form>
                    </div>

                </>

                );

        }}
    </Formik>
);

export default Completeprofile;

