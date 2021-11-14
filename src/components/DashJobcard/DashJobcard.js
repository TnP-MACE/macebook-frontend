import React, { Component } from "react";

import "./DashJobcard.scss";
import Card from "../../components/Card/Card";
import clogo from "../../assets/images/icons/company-logo.png";
import edit from "../../assets/images/icons/edit.svg";
import del from "../../assets/images/icons/delete.svg";
import { Link } from "react-router-dom";

class DashJobCard extends Component {
    // handleClick = () =>{
    //     this.setState({ ShowHidedesc: !this.state.ShowHidedesc });
    //     if(this.state.ShowHidedesc){
    //         this.setState({btnContent: 'View More'});
    //     }
    //     else{
    //         this.setState({btnContent: 'View Less'});
    //     }
    // }

    render() {
        return (
            <div className="jobCard-container">
                <Card>
                    <div className="jobCard-content">
                        <div className="section-1">
                            <img src={clogo} alt="Company Logo"></img>
                        </div>
                        <div className="section-2">
                            <h2>{this.props.position}</h2>
                            <h4>{this.props.company}</h4>
                            <span className="location">{this.props.location}</span>
                            <div className="btns-container">
                                <Link to="#">
                                    <img src={edit} alt="Edit"></img>
                                </Link>
                                <Link to="#">
                                    <img src={del} alt="Edit"></img>
                                </Link>
                            </div>
                        </div>
                        <div className="section-4">
                            <div className="profile-appCount">
                                <div className="profile-appContent">
                                    <h2>{this.props.new}</h2>
                                    <p>New Applications</p>
                                </div>
                                <div className="profile-appContent">
                                    <h2>{this.props.tot}</h2>
                                    <p>Total Applications</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-3">
                            <h4 className="lh-25">
                                Job Type: <span className="job-spec">{this.props.type}</span>{" "}
                                <span className="job-spec">{this.props.experience} Experience</span>
                            </h4>
                            <h4 className="lh-25">
                                Salary/Stipend: <span className="job-spec">${this.props.salary} + Benefits</span>
                            </h4>
                            <h4 className="lh-25">
                                Skills:{" "}
                                <span className="skills">
                                    {this.props.skills.map((skill) => (
                                        <span className="job-spec">{skill}</span>
                                    ))}
                                </span>
                            </h4>
                            <div className="posted-details">
                                <p>Posted on {this.props.date}</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default DashJobCard;
