import React, { Component } from "react";
import "./Experience.scss";
import logo from "../../assets/images/icons/company-logo.png";

class Experience extends Component {
    render() {
        return (
            <div className="exp-row">
                <div className="exp-col-1">
                    <img src={this.props.logo} alt="Image"></img>
                    <div className="exp-comp-det">
                        <h4>{this.props.name}</h4>
                        <p>{this.props.duration}</p>
                        <span className="gray-bg">{this.props.type}</span>
                    </div>
                </div>
                <div className="exp-col-2">
                    <h3>{this.props.position}</h3>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

export default Experience;
