import React from "react";
import "./ProfileHeader2.scss";
import cover from "../../assets/images/icons/cover.jpg";
import profileimg from "../../assets/images/icons/profile.webp";

class ProfileHeader extends React.Component {
    // helpers
    getFormattedCount(count) {
        if (count < 1000) return count;
        else if (count < 1000000) return `${count / 1000}K`;
        else if (count < 1000000000) return `${count / 1000000}M`;
        else return `${count / 1000000000}`;
    }

    render() {
        const { fullname, bio, branch, batch, location, connections } = this.props.user;

        return (
            <>
                <div className="Profile__header-cover-container">
                    <img src={cover} alt="Background Image Not Loaded" />
                </div>
                <div className="Profile__header-data-container">
                    <div className="Profile__header-data-image-container">
                        <img src={profileimg} alt="User Img"></img>
                    </div>
                    <div className="Profile__header-data-text-container">
                        <h1 className="Profile__header-data-name">{fullname}</h1>
                        <p className="Profile__header-data-bio">{bio}</p>
                        <p className="Profile__header-data-location">
                            {location} . Batch of {batch} . {branch}
                        </p>
                        <p className="Profile__header-data-followers">
                            {this.getFormattedCount(connections)} Connections
                        </p>
                    </div>
                    <div className="Profile__header-control-container">
                        <button className="Profile__header-control-button Profile__header-control-button--settings">
                            Settings
                        </button>
                        <button className="Profile__header-control-button Profile__header-control-button--edit">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default ProfileHeader;
