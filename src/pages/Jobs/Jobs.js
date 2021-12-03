import React, { Component } from "react";

import "./Jobs.scss";
import Header from "../../components/Header/Header";
import JobCard from "../../components/JobCard/JobCard";
import Card from "../../components/Card/Card";
import clogo from "../../assets/images/icons/company-logo.png";
import SearchIcon from "../../assets/images/icons/Search.svg";
import isAuthenticated from "../../auth/isAuthenticated";
import AuthContext from "../../auth/AuthContext";
import Spinner from "../../components/Spinner/Spinner";

class Jobs extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            jobData: [],
        };
        this.getJobs = this.getJobs.bind(this);
    }

    async getJobs() {
        const { state } = this.context;
        try {
            const token = state.token;
            let response = await fetch("https://mace-connect.herokuapp.com/api/v1/jobs/", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status != 200) {
                return alert("Couldn't fetch jobs! Reload this page.");
            }
            let data = await response.json();
            console.log(data);
            return this.setState({
                jobData: data,
            });
        } catch (error) {
            console.error(error);
        }
    }
    componentDidMount() {
        const { state, dispatch } = this.context;
        if (!state.isAuthenticated) {
            const asyncFunc = async () => {
                const [authenticated, payload] = await isAuthenticated();
                if (authenticated === true) {
                    dispatch({
                        type: "LOGIN",
                        payload: payload,
                    });
                    this.getJobs().then(this.setState({ loading: false }));
                } else {
                    this.props.history.push("/login");
                }
            };
            asyncFunc();
        } else {
            this.getJobs().then(this.setState({ loading: false }));
        }
    }

    render() {
        // if (this.state.loading) {
        //     return <div>Loading ...</div>;
        // }
        return (
            <div className="Jobs">
                <Header active="jobs" />
                {this.state.loading ? (
                    <div className="Jobs__spinner-container">
                        <Spinner />
                    </div>
                ) : (
                    <div class="jobs-container">
                        <div class="left-section">
                            {this.state.jobData.map((job) => (
                                <JobCard
                                    key={job.id}
                                    clogo={job.clogo}
                                    position={job.position}
                                    company={job.company}
                                    location={job.location}
                                    type={job.type}
                                    experience={job.experience}
                                    salary={job.salary}
                                    skills={job.skills}
                                    desc={job.desc}
                                    date={job.date}
                                    user={job.user}
                                    id={job.id}
                                    history={this.props.history}
                                />
                            ))}
                            {/* <div className="left-section-bottom">
                                <p>Show More</p>
                            </div> */}
                        </div>
                        <div class="right-section">
                            <Card>
                                <div className="right-card">
                                    <div className="Search">
                                        <img className="Search__icon" src={SearchIcon} />
                                        <input type="text" className="Search__input" placeholder="Search" />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Jobs;
