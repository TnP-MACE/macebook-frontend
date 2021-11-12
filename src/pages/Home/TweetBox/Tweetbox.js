/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './Tweetbox.scss'
import { Link } from 'react-router-dom'
import profilepic from '../../../assets/images/icons/UserProfile.png'
import Camera from '../../../assets/images/icons/Camera.svg'
import Video from '../../../assets/images/icons/Video.svg'
import Doc from '../../../assets/images/icons/Doc.svg'
import Card from '../../../components/Card/Card'
//import Anyone from "../../../assets/images/icons/Anyone.svg"

class Tweetbox extends Component {
    constructor(props) {
        super(props)
        this.state = { isModalOpen: false }
    }
    render() {
        return (
            <div className="Tweetbox">
                <div className="profile-pic">
                    <img src={profilepic} alt="profilepicture"></img>
                </div>
                <div className="input-text-field">
                    <div onClick={() => this.openModal()}>
                        <input className="text-field" placeholder="Add a post" />
                    </div>
                    <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                        <h3>Create a post</h3>
                        <hr></hr>
                        <div className="poster">
                            <img src={profilepic} alt="profilepicture"></img>
                            <div className="post-view">
                                <Link to="./" className="profile-link">
                                    David J
                                </Link>
                                <select id="post-viewers" name="post-viewers">
                                    <option value="Anyone">Anyone </option>
                                    <option value="Connections">Connections</option>
                                    <option value="Selected">Selected</option>
                                </select>
                            </div>
                        </div>
                        <Card>
                            <textarea className="post-text"></textarea>
                        </Card>
                        <div className="modal-bottom">
                            <div class="media-input">
                                <input type="image" src={Camera}></input>
                                <input type="image" src={Video}></input>
                                <input type="image" src={Doc}></input>
                            </div>
                            <Card>
                                <button type="button">Post</button>
                            </Card>
                        </div>
                    </Modal>
                    <div className="input-video">
                        <input
                            type="image"
                            src={Camera}
                            onClick={() => this.openModal()}
                            className="video-btn"></input>
                        <input
                            type="image"
                            src={Video}
                            onClick={() => this.openModal()}
                            className="video-btn"></input>
                    </div>
                </div>
            </div>
        )
    }

    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }
}

class Modal extends React.Component {
    render() {
        if (this.props.isOpen === false) return null

        return (
            <div>
                <div className="modal">{this.props.children}</div>
                <div className="bg" onClick={(e) => this.close(e)} />
            </div>
        )
    }

    close(e) {
        e.preventDefault()

        if (this.props.onClose) {
            this.props.onClose()
        }
    }
}
export default Tweetbox
