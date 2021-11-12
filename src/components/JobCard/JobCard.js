import React, { Component } from "react";
 
import "./JobCard.scss";
import Card from "../../components/Card/Card";
import clogo from "../../assets/images/icons/company-logo.png";
 
 
class JobCard extends Component{
    state={
        ShowHidedesc: false,
        btnContent: "View More"
    }
   
    handleClick = () =>{
        this.setState({ ShowHidedesc: !this.state.ShowHidedesc });
        if(this.state.ShowHidedesc){
            this.setState({btnContent: 'View More'});
        }
        else{
            this.setState({btnContent: 'View Less'});
        }
    }
 
    render(){
        return(
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
                                <button id="btn1" className="btn1">
                                    Apply Now
                                </button>
                                <button id="btn2" className="btn2" onClick={this.handleClick}>
                                    {this.state.btnContent}
                                </button>
                            </div>
                        </div>
                        <div className="section-3">
                            <h4 className="lh-25">
                                Job Type: {' '}
                                <span className="job-spec">{this.props.type}</span> <span className="job-spec">{this.props.experience} Experience</span>
                            </h4>
                            <h4 className="lh-25">
                                Salary/Stipend: {' '} 
                                <span className="job-spec">${this.props.salary} + Benefits</span>
                            </h4>
                            <h4 className="lh-25">
                                Skills: {' '} 
                                <span className="skills"> 
                                    {this.props.skills.map((skill) => <span className="job-spec">{skill}</span>)}
                                </span>
                            </h4>
                        </div>
                    </div>
                    <div className="jobCard-desc" style={{display: this.state.ShowHidedesc ? "block" : "none" }}>
                        <h4>Description</h4>
                        <p>{this.props.desc}</p>
                    </div>
                    <div className="posted-details">
                        <p>Posted on {this.props.date} by <span className="user">{this.props.user}</span></p>
                    </div>
                </Card>
            </div>
        );
    }
}
 
export default JobCard