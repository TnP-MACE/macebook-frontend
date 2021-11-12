import React, { Component } from 'react'
import Card from '../../components/Card/Card'
import './JobApplicationForm.scss'
import fileresume from '../../assets/images/icons/ant-design_file-add-outlined.svg'
//import { Link } from 'react-router-dom'

class JobApplicationForm extends Component {
    render() {
        return (
            <div className="job-application-form-cont">
                <h3 className="joblist">APPLY FOR:</h3>
                <Card />
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
