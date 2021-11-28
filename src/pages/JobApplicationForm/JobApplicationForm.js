import React, { useState, Component } from "react";
import Header from "../../components/Header/Header";
import JobCard from "../../components/JobCard/JobCard";
import clogo from "../../assets/images/icons/company-logo.png";
import "./JobApplicationForm.scss";
import fileresume from "../../assets/images/icons/ant-design_file-add-outlined.svg";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

class JobApplicationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    desc: "Lorem Ipsum",
                    date: "2017-01-03",
                    user: "John Doe",
                },
            ],
            resume: [],
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    // const [selectedFile, setSelectedFile] = useState();
    // const [isFilePicked, setIsFilePicked] = useState(false);
    // changeHandler(event){
    //     setSelectedFile(event.target.files[0]);
    // 	setIsSelected(true);
    // }
    ResumePdfInput() {
        console.log("ResumePdfInput");
        const element = document.getElementById("file-input");
        const file = element.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const output = document.getElementById("file-input");
            output.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
    onSubmit(event) {
        console.log("change");
        const fun = async () => {
            try {
                const token = window.localStorage.getItem("token");
                const jobPostResponse = await fetch(
                    "https://mace-connect.herokuapp.com/api/v1/jobs/applications/{job_id}",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            resume: this.state.resume,
                        }),
                    }
                );

                const jobPostData = await jobPostResponse.json();
                console.log(jobPostData);
            } catch (e) {
                console.log(e);
            }
        };
        fun();
    }
    componentDidMount() {
        const res = queryString.parse(this.props.location.search);
        console.log(res);
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
                        desc={this.state.jobs[0].desc}
                        date={this.state.jobs[0].date}
                        user={this.state.jobs[0].user}
                    />
                </div>
                <h3 className="resume">Upload your Resume:</h3>
                <div className="upload">
                    <div className="resume-upload">
                        <div class="image-upload">
                            <label for="file-input">
                                <img src={fileresume} />
                            </label>

                            <input
                                id="file-input"
                                onChange={(e) => {
                                    this.ResumePdfInput(e);
                                }}
                                type="file"
                            />
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
                        className="msg-field"
                    ></textarea>
                </div>
                <button className="btn-apply" onSubmit={this.onSubmit}>
                    APPLY
                </button>
            </div>
        );
    }
}
export default JobApplicationForm;
