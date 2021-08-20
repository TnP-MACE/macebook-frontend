import React, { Component } from "react";

import "./Search.scss";
import SearchIcon from "../../assets/images/icons/Search.svg";

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <img className="Search__icon" src={SearchIcon} />
        <input type="text" className="Search__input" placeholder="Search" />
      </div>
    );
  }
}

export default Search;
