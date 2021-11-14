import React, { Component } from "react";

import "./Dashboard.scss";
import Header from "../../components/Header/Header";
import DashJobCard from "../../components/DashJobcard/DashJobcard";
import clogo from "../../assets/images/icons/company-logo.png";
import edit from "../../assets/images/icons/edit.svg";
import del from "../../assets/images/icons/delete-red.svg";

class Dashboard extends Component {
    state = {
        jobs: [
            {
                clogo: { clogo },
                position: "Junior Software Engineer",
                company: "Apple Inc.",
                location: "San Fransisco, California",
                type: "Full Time",
                experience: "1-2",
                salary: 90000,
                skills: ["C++", "Perl", "Java", "PHP"],
                date: "14/11/2021",
                newapp: 3,
                totalapp: 42,
            },
            {
                clogo: { clogo },
                position: "Junior Software Engineer",
                company: "Apple Inc.",
                location: "San Fransisco, California",
                type: "Full Time",
                experience: "1-2",
                salary: 90000,
                skills: ["C++", "Perl", "Java", "PHP"],
                date: "14/11/2021",
                newapp: 20,
                totalapp: 77,
            },
        ],
        applications: [
            {
                name: "Mary Jane Watson",
                position: "ML Intern",
                msg: "lorem ipsum",
                remark: "Potencial Candidate",
            },
            {
                name: "Mary Jane Watson",
                position: "ML Intern",
                msg: "lorem ipsum",
                remark: "Potencial Candidate",
            },
            {
                name: "Mary Jane Watson",
                position: "ML Intern",
                msg: "lorem ipsum",
                remark: "Potencial Candidate",
            },
        ],
    };

    render() {
        return (
            <div className="dashboard-container">
                <Header />
                <div className="container">
                    <div className="title">
                        <h2>Application Dashboard</h2>
                    </div>
                    <div className="jobs-posted">
                        <h3>Jobs Posted</h3>
                        <div className="jobs-content">
                            {this.state.jobs.map((job) => (
                                <DashJobCard
                                    clogo={job.clogo}
                                    position={job.position}
                                    company={job.company}
                                    location={job.location}
                                    type={job.type}
                                    experience={job.experience}
                                    salary={job.salary}
                                    skills={job.skills}
                                    date={job.date}
                                    new={job.newapp}
                                    tot={job.totalapp}
                                />
                            ))}
                            <div className="add-btnContainer">
                                <buttun className="add-btn">Add New Job Posting</buttun>
                            </div>
                        </div>
                    </div>
                    <div className="applications">
                        <h3>Applications</h3>
                        <div className="tb-container">
                            <div className="tb-titles">
                                <div className="name">
                                    <span className="tb-title">Name</span>
                                </div>
                                <div className="pos">
                                    <span className="tb-title">Position Applying for</span>
                                </div>
                                <div className="msg">
                                    <span className="tb-title">Message from Candidate</span>
                                </div>
                                <div className="remarks">
                                    <span className="tb-title">Remarks</span>
                                </div>
                            </div>
                            <br />
                            <div className="tb-dataContainer">
                                {this.state.applications.map((app) => (
                                    <div className="tb-datasContainer">
                                        <div className="tb-datas">
                                            <div className="name">
                                                <span className="tb-data">{app.name}</span>
                                            </div>
                                            <div className="pos">
                                                <span className="tb-data">{app.position}</span>
                                                <div className="tb-links">
                                                    <a href="#">View Profile</a>
                                                    <a href="#">Resume</a>
                                                </div>
                                            </div>
                                            <div className="msg">
                                                <span className="tb-data">{app.msg}</span>
                                            </div>
                                            <div className="remarks">
                                                <span className="tb-data">
                                                    {app.remark}
                                                    <img src={edit} alt="Edit"></img>
                                                </span>
                                                <div className="rem-icons">
                                                    <img src={del} alt="Delete"></img>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <hr></hr>
                                        <br />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
