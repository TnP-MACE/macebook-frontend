import React from "react";
import Header from "../../components/Header/Header";
import FileResumeImage from "../../assets/images/icons/ant-design_file-add-outlined.svg";
import "./NewJob.scss";

class NewJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job_id: "string",
            uid: "vwsjjbjjxj",
            job_name: "Software Devloper",
            job_type: ["Full Time", "1 year Experience"],
            job_description: "A good job with free food",
            company_name: "Apple",
            salary: "1000",
            skills: ["C++", "java", "python"],
            address: {
                state: "California",
                city: "LA",
            },
            domain: "apple.com",
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
    }

    handleInputChange(e) {
        console.log(e.target.file);
        // this.setState({[e.name]})
    }

    render() {
        return (
            <div className="NewJob">
                <Header />
                <div className="container">
                    <h1 className="NewJob__title">Add New Job Posting</h1>
                    <form className="NewJob__form" onSubmit={this.handleFormSubmit}>
                        <div className="NewJob__form-row">
                            <div className="NewJob__form-group">
                                <label className="NewJob__form-label">Company Name*</label>
                                <input
                                    type="text"
                                    id="newjob-company-name"
                                    name="company-name"
                                    placeholder="Enter the company name"
                                    className="NewJob__form-input"
                                    onChange={this.handleInputChange}
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
                                />
                            </div>
                        </div>

                        <div className="NewJob__form-group">
                            <label className="NewJob__form-label">Salary/Stipend*</label>
                            <input
                                type="text"
                                id="newjob-salary"
                                name="salary"
                                placeholder="Enter the numerical value in Rupees"
                                className="NewJob__form-input"
                                onChange={this.handleInputChange}
                            />
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
