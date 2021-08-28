import React, { Component } from 'react'
import './Suggestions.scss'
import Connect from './Connect/Connect'
import connectionpic from '../../assets/images/icons/UserProfile.jpg'

class Suggestions extends Component {
    render() {
        return (
            <div className="Suggest-cont">
                <h4>People you may know</h4>
                <Connect
                    image={connectionpic}
                    name="John Doe"
                    designation="Software Developer"></Connect>
                <Connect
                    image={connectionpic}
                    name="John Doe"
                    designation="Software Developer"></Connect>
                <Connect
                    image={connectionpic}
                    name="John Doe"
                    designation="Software Developer"></Connect>
                <Connect
                    image={connectionpic}
                    name="John Doe"
                    designation="Software Developer"></Connect>
            </div>
        )
    }
}
export default Suggestions
