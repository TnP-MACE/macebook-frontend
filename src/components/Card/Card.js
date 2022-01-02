import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
    render() {
        return <div className="Card">{this.props.children}</div>;
    }
}
export default Card;
