import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Header.scss";
import Search from "../Search/Search";
import HomeIcon from "../../assets/images/icons/Home.svg";
import HomeIconActive from "../../assets/images/icons/Home-active.png";
import JobsIcon from "../../assets/images/icons/Jobs.svg";
import JobsIconActive from "../../assets/images/icons/Jobs-active.png";
import NotificationIcon from "../../assets/images/icons/Notification.svg";
// import NotificationIconActive from "../../assets/images/icons/Notification-active.png";
import UserIcon from "../../assets/images/icons/User.svg";
import UserIconActive from "../../assets/images/icons/User-active.png";

class Header extends Component {
  static propTypes = {
    active: PropTypes.oneOf(["home", "jobs", "notify", "profile"]),
  };

  constructor(props) {
    super(props);

    this.state = {
      dropdownActive: false,
    };
  }

  // helpers
  getIcon = (n) => {
    switch (n) {
      case "home":
        return n === this.props.active ? HomeIconActive : HomeIcon;
      case "jobs":
        return n === this.props.active ? JobsIconActive : JobsIcon;
      case "notify":
        return n === this.props.active ? NotificationIcon : NotificationIcon;
      case "profile":
        return n === this.props.active ? UserIconActive : UserIcon;
    }
  };

  // handlers
  handleToggleClick = () => {
    this.setState((prev) => {
      return {
        ...prev,
        dropdownActive: !prev.dropdownActive,
      };
    });
  };

  render() {
    return (
      <nav className="Navbar">
        <div className="Navbar__container container">
          <h1 className="Navbar__title">MACEBOOK</h1>
          <button className="Navbar__toggler" onClick={this.handleToggleClick}>
            Drop
          </button>
          <div
            className={
              this.state.dropdownActive
                ? "Navbar__collapse"
                : "Navbar__collapse Navbar__hide"
            }
          >
            <div className="Navbar__search">
              <Search />
            </div>
            <ul className="Navbar__nav">
              <div className="Navbar__item">
                <img className="Navbar__item-icon" src={this.getIcon("home")} />
                <p className="Navbar__item-text">Home</p>
              </div>
              <div className="Navbar__item">
                <img className="Navbar__item-icon" src={this.getIcon("jobs")} />
                <p className="Navbar__item-text">Jobs</p>
              </div>
              <div className="Navbar__item">
                <img
                  className="Navbar__item-icon"
                  src={this.getIcon("notify")}
                />
                <p className="Navbar__item-text">Notification</p>
              </div>
              <div className="Navbar__item">
                <img
                  className="Navbar__item-icon"
                  src={this.getIcon("profile")}
                />
                <p className="Navbar__item-text">Profile</p>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
