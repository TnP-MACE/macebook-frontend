import React, { Component } from 'react'

import './Jobs.scss'
import Header from '../../components/Header/Header'
import JobCard from '../../components/JobCard/JobCard'
import Card from '../../components/Card/Card'
import clogo from '../../assets/images/icons/company-logo.png'

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
                skills: ['C++', 'Perl', 'Java', 'PHP']
            },
            {
                clogo: { clogo },
                position: 'Junior Software Engineer',
                company: 'Apple Inc.',
                location: 'San Fransisco, California',
                type: 'Full Time',
                experience: '1-2',
                salary: 90000,
                skills: ['C++', 'Perl', 'Java', 'PHP']
            },
            {
                clogo: { clogo },
                position: 'Junior Software Engineer',
                company: 'Apple Inc.',
                location: 'San Fransisco, California',
                type: 'Full Time',
                experience: '1-2',
                salary: 90000,
                skills: ['C++', 'Perl', 'Java', 'PHP']
            }
        ]
    }

    render() {
        return (
            <div class="Jobs">
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
                            />
                        ))}
                    </div>
                    <div class="right-section">
                        <Card>
                            <p>Hello</p>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jobs
