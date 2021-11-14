import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import "./Settings.scss";
class Settings extends Component {
    render() {
        return (
            <div className="Settings-cont">
                <Header active={"profile"} />
                <div className="card-columns">
                    <div className="card-col1">
                        <Card>
                            <div className="c1">
                                <h3>Account</h3>
                                <h3>Notification</h3>
                            </div>
                        </Card>
                    </div>
                    <div className="card-col2">
                        <h3>Edit Your Account Settings</h3>
                        <p className="set">Username:</p>
                        <div className="username">
                            <input type="text" className="uname-ip"></input>

                            <button type="button" className="edit-uname">
                                Edit
                            </button>
                        </div>
                        <div className="password">
                            <p className="set">Password:</p>
                            <div className="psw-curr">
                                <p>Current password</p>
                                <input type="text"></input>
                            </div>
                            <div className="reset-psw">
                                <div className="psw-ip">
                                    <p>New Password</p>
                                    <input type="text"></input>
                                </div>
                                <div className="confirm-psw">
                                    <p>Confirm Password</p>
                                    <input type="text"></input>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn-sub">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Settings;
