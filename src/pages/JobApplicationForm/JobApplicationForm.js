import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import JobCard from '../../components/JobCard/JobCard'
import clogo from '../../assets/images/icons/company-logo.png'
import './JobApplicationForm.scss'
import fileresume from '../../assets/images/icons/ant-design_file-add-outlined.svg'
//import { Link } from 'react-router-dom'

class JobApplicationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
                }
            ]
        }
    }
    render() {
        return (
            <div className="job-application-form-cont">
                <Header active="jobs" />
                <h3 className="joblist">APPLY FOR:</h3>
                <div className="job-spec">
                    <JobCard
                        clogo={this.state.jobs[0].clogo}
                        position={this.state.jobs[0].position}
                        company={this.state.jobs[0].company}
                        location={this.state.jobs[0].location}
                        type={this.state.jobs[0].type}
                        experience={this.state.jobs[0].experience}
                        salary={this.state.jobs[0].salary}
                        skills={this.state.jobs[0].skills}
                    />
                </div>
                <h3 className="resume">Upload your Resume:</h3>
                <div className="upload">
                    <div className="resume-upload">
                        <div class="image-upload">
                            <label for="file-input">
                                <img src={fileresume} />
                            </label>

                            <input id="file-input" type="file" />
                        </div>
                        <p>Upload or Drag the file into here</p>
                    </div>
                </div>
                <div className="message">
                    <h3 className="msg">Message:</h3>
                    <textarea
                        type="text"
                        placeholder="Max. 100 words only"
                        maxlength="100"
                        className="msg-field"></textarea>
                </div>
                <button className="btn-apply">APPLY</button>
            </div>
        )
    }
}
export default JobApplicationForm
