import React from "react";
import "./ProfileHeader2.scss";
import cover from "../../assets/images/icons/cover.jpg";
import profileimg from "../../assets/images/icons/profile.webp";
import defaultUserImage from '../../assets/images/icons/default-user.png'
import defaultCoverImage from '../../assets/images/icons/cover.jpg'
import {Link} from "react-router-dom";

class ProfileHeader extends React.Component {
    // helpers
    getFormattedCount(count) { 
        if (isNaN(count)) return 0;
        else if (count < 1000) return count;
        else if (count < 1000000) return `${count / 1000}K`;
        else if (count < 1000000000) return `${count / 1000000}M`;
        else return `${count / 1000000000}`;
    }

    render() {
        const { fullname, about, address, admission, location, connections, profile_image_url, cover_url } =
            this.props.user;
        const { branch, batch } = admission;

        return (
            <>
                <div className="Profile__header-cover-container">
                    <img
                        src={`https://mace-connect.herokuapp.com/cover/${cover_url}`}
                        alt="Background Image Not Loaded"
                    />
                </div>
                <div className="Profile__header-data-container">
                    <div className="Profile__header-data-image-container">
                        <img src={`https://mace-connect.herokuapp.com/profile/${profile_image_url}`} alt="User Img" />
                    </div>
                    <div className="Profile__header-data-text-container">
                        <h1 className="Profile__header-data-name">{fullname}</h1>
                        <p className="Profile__header-data-bio">{about}</p>
                        <p className="Profile__header-data-location">
                            {address && address + " ."} {batch && "Batch of " + batch + " ."} {branch}
                        </p>
                        <p className="Profile__header-data-followers">
                            {this.getFormattedCount(connections)} Connections
                        </p>
                    </div>
                    <div className="Profile__header-control-container">
                        <Link to="/settings">
                            <button className="Profile__header-control-button Profile__header-control-button--settings">
                                Settings
                            </button>
                        </Link>
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
