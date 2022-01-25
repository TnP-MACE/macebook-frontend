import React from "react";
import Header from "../../components/Header/Header";
import FileResumeImage from "../../assets/images/icons/ant-design_file-add-outlined.svg";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import "./NewJob.scss";

class NewJob extends React.Component {
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            job: {
                job_id: "",
                uid: "",
                job_name: "",
                job_type: [],
                job_description: "",
                company_name: "",
                salary: "",
                skills: [],
                address: {
                    state: "",
                    city: "",
                },
                domain: "",
            },
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleSkillChange = this.handleSkillChange.bind(this);
        this.handleJobTypeChange = this.handleJobTypeChange.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.job);
    }

    handleInputChange(e) {
        this.setState((prev) => {
            let job;
            if (["city", "state"].includes(e.target.name)) {
                job = {
                    ...prev.job,
                    address: {
                        ...prev.job.address,
                        [e.target.name]: e.target.value,
                    },
                };
            } else {
                job = {
                    ...prev.job,
                    [e.target.name]: e.target.value,
                };
            }
            return {
                ...prev,
                job,
            };
        });
    }

    handleSkillChange(newValue) {
        const skills = newValue.map((skill) => skill.value);
        this.setState((prev) => {
            return {
                ...prev,
                job: {
                    ...prev.job,
                    skills,
                },
            };
        });
    }

    handleJobTypeChange(newValue) {
        this.setState((prev) => {
            return {
                ...prev,
                job: {
                    ...prev.job,
                    job_type: [newValue.value],
                },
            };
        });
    }

    render() {
        const skillOptions = [
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
        ];

        const jobTypeOptions = [
            { value: "Full Time", label: "Full Time" },
            { value: "Part Time", label: "Part Time" },
            { value: "Internship", label: "Internship" },
        ];

        return (
            <div className="NewJob">
                <Header />
                <div className="container">
                    <h1 className="NewJob__title">Add New Job Posting</h1>
                    <form className="NewJob__form" onSubmit={this.handleFormSubmit}>
                        <div className="NewJob__form-row">
                            <div className="NewJob__form-group">
                                <label className="NewJob__form-label">Job Name*</label>
                                <input
                                    type="text"
                                    id="newjob-job-name"
                                    name="job_name"
                                    placeholder="Enter the job name"
                                    className="NewJob__form-input"
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>

                            <div className="NewJob__form-group">
                                <label className="NewJob__form-label">Job Type*</label>
                                <Select onChange={this.handleJobTypeChange} options={jobTypeOptions} />
                            </div>
                        </div>

                        <div className="NewJob__form-group">
                            <label className="NewJob__form-label">Salary/Stipend*</label>
                            <input
                                type="number"
                                id="newjob-salary"
                                name="salary"
                                placeholder="Enter the numerical value in Rupees"
                                className="NewJob__form-input"
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>

                        <div className="NewJob__form-row">
                            <div className="NewJob__form-group">
                                <label className="NewJob__form-label">Company Name*</label>
                                <input
                                    type="text"
                                    id="newjob-company-name"
                                    name="company_name"
                                    placeholder="Enter the company name"
                                    className="NewJob__form-input"
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>

                            <div className="NewJob__form-group">
                                <label className="NewJob__form-label">Position*</label>
                                <input
                                    type="text"
                                    id="newjob-position"
                                    name="position"
                                    placeholder="Enter the position name"
                                    className="NewJob__form-input"
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="NewJob__form-row">
                            <div className="NewJob__form-group">
                                <label className="NewJob__form-label">State*</label>
                                <input
                                    type="text"
                                    id="newjob-state"
                                    name="state"
                                    placeholder="Enter the state name"
                                    className="NewJob__form-input"
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>

                            <div className="NewJob__form-group">
                                <label className="NewJob__form-label">City*</label>
                                <input
                                    type="text"
                                    id="newjob-city"
                                    name="city"
                                    placeholder="Enter the city name"
                                    className="NewJob__form-input"
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="NewJob__form-group">
                            <label className="NewJob__form-label">Job Description*</label>
                            <textarea
                                type="text"
                                id="newjob-description"
                                name="description"
                                placeholder="Enter the job description"
                                className="NewJob__form-input"
                                rows={10}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>

                        <div className="NewJob__form-group">
                            <label className="NewJob__form-label">Domain*</label>
                            <input
                                type="email"
                                id="newjob-domain"
                                name="domain"
                                placeholder="Enter the domain"
                                className="NewJob__form-input"
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>

                        <div className="NewJob__form-group">
                            <label className="NewJob__form-label">Required Skills*</label>
                            <CreatableSelect isMulti onChange={this.handleSkillChange} options={skillOptions} />
                        </div>

                        <div className="NewJob__form-group">
                            <label className="NewJob__form-label">Upload company logo*</label>
                            <div className="NewJob__form-file-image-wrapper">
                                <label htmlFor="newjob-company-logo" className="NewJob__form-file-image">
                                    <img src={FileResumeImage} />
                                    <p>Upload the file here</p>
                                </label>
                            </div>
                            <input
                                type="file"
                                id="newjob-company-logo"
                                name="company-logo"
                                placeholder="Enter the numerical value in Rupees"
                                className="NewJob__form-upload"
                                style={{ display: "none" }}
                                onChange={this.handleInputChange}
                                accept="image/*"
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewJob;
