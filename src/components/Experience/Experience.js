import React, { Component } from "react";
import "./Experience.scss";
import logo from '../../assets/images/icons/company-logo.png';


class Experience extends Component{
    render(){
        return(
            <div className="exp-row">
                  <div className="exp-col-1">
                      <img src={logo} alt="Image"></img>
                      <div className="exp-comp-det">
                        <h4>Apple Inc</h4>
                        <p>oct 2019 - Current</p>
                        <span className="gray-bg">Fulltime</span>
                      </div>
                  </div>
                  <div className="exp-col-2">
                    <h3>Senior Software Engineer</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                  </div>
            </div>
        )
    }
}

export default Experience