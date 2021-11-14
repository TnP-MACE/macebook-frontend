import React from "react";
import "./Notification.scss";
import User from "../../assets/images/icons/UserProfile.png";

class Notification extends React.Component {
    render() {
        return (
            <div className="Notification">
                <h3>TODAY</h3>
                <p>
                    <img src={User} /> John Doe liked your post. <span>3min</span>
                </p>
                <p>
                    <img src={User} /> John Doe commented on your post. "Good Job!" <span>5min</span>
                </p>
                <p>
                    <img src={User} /> John Doe connected with you. <span>1hr</span>
                </p>
                <h3>THIS WEEK</h3>
                <p>
                    <img src={User} /> John Doe liked your post. <span>3min</span>
                </p>
                <p>
                    <img src={User} /> John Doe commented on your post. "Good Job!" <span>5min</span>
                </p>
            </div>
        );
    }
}

export default Notification;
