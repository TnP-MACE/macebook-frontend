import React, { Component } from 'react'
import './Connect.scss'

class Connect extends Component {
    render() {
        const Connectprofile = this.props.image
        return (
            <div className="connect">
                <div className="connect-profile">
                    <a href="./">
                        <img
                            className="img-fluid"
                            src={Connectprofile}
                            alt="connection"
                            width="100%"
                            height="100%"></img>
                    </a>
                    <div className="connect-name">
                        <h4>{this.props.name}</h4>
                        <p>{this.props.designation}</p>
                    </div>
                </div>
                <button>Connect</button>
            </div>
        )
    }
}
export default Connect
