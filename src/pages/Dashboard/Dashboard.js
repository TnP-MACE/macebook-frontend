import React, { Component } from "react";

import "./Dashboard.scss";
import Header from "../../components/Header/Header";
import DashJobCard from "../../components/DashJobcard/DashJobcard";
import clogo from "../../assets/images/icons/company-logo.png";


class Dashboard extends Component{
    state={
        jobs: [
            {
                clogo: { clogo },
                position: 'Junior Software Engineer',
                company: 'Apple Inc.',
                location: 'San Fransisco, California',
                type: 'Full Time',
                experience: '1-2',
                salary: 90000,
                skills: ['C++', 'Perl', 'Java', 'PHP'],
                date: '14/11/2021',
                newapp: 3,
                totalapp: 42
            },
            {
                clogo: { clogo },
                position: 'Junior Software Engineer',
                company: 'Apple Inc.',
                location: 'San Fransisco, California',
                type: 'Full Time',
                experience: '1-2',
                salary: 90000,
                skills: ['C++', 'Perl', 'Java', 'PHP'],
                date: '14/11/2021',
                newapp: 20,
                totalapp: 77
            }
        ]
    }


    render(){
        return(
            <div className="dashboard-container">
                <Header />
                <div className="container">
                    <div className="title">
                        <h2>Application Dashboard</h2>
                    </div>
                    <div className="jobs-posted">
                        <h3>Jobs Posted</h3>
                        <div className="jobs-content">
                            {this.state.jobs.map((job) =>
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
                            )}
                            <div className="add-btnContainer">
                                <buttun className="add-btn">Add New Job Posting</buttun>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard