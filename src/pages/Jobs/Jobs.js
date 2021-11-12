import React, { Component } from 'react'

import "./Jobs.scss";
import Header from "../../components/Header/Header";
import JobCard from "../../components/JobCard/JobCard";
import Card from "../../components/Card/Card";
import clogo from "../../assets/images/icons/company-logo.png";
import SearchIcon from "../../assets/images/icons/Search.svg";

class Jobs extends Component {
    state = {
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
                user: 'John Doe',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. '
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
                user: 'John Doe',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. '
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
                user: 'John Doe',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. '
            }
        ]
    }

    render(){
        return(
            <div className="Jobs">
                <Header active="jobs" />
                <div class="jobs-container">
                    <div class="left-section">
                        {this.state.jobs.map((job) => (
                            <JobCard
                                clogo={job.clogo}
                                position={job.position}
                                company={job.company}
                                location={job.location}
                                type={job.type}
                                experience={job.experience}
                                salary={job.salary}
                                skills={job.skills}
                                desc={job.desc}
                                date={job.date}
                                user={job.user}
                            />
                        ))}
                        <div className="left-section-bottom">
                            <p>Show More</p>
                        </div>
                    </div>
                    <div class="right-section">
                        <Card>
                            <div className="right-card">
                                <div className="Search">
                                    <img className="Search__icon" src={SearchIcon} />
                                    <input type="text" className="Search__input" placeholder="Search" />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jobs
