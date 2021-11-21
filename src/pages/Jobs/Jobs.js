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
            jobs: [
                {
                    id: "24343",
                    clogo: { clogo },
                    position: "Junior Software Engineer",
                    company: "Apple Inc.",
                    location: "San Fransisco, California",
                    type: "Full Time",
                    experience: "1-2",
                    salary: 90000,
                    skills: ["C++", "Perl", "Java", "PHP"],
                    date: "14/11/2021",
                    user: "John Doe",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
                },
                {
                    id: "2342",
                    clogo: { clogo },
                    position: "Junior Software Engineer",
                    company: "Apple Inc.",
                    location: "San Fransisco, California",
                    type: "Full Time",
                    experience: "1-2",
                    salary: 90000,
                    skills: ["C++", "Perl", "Java", "PHP"],
                    date: "14/11/2021",
                    user: "John Doe",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
                },
                {
                    id: "34423",
                    clogo: { clogo },
                    position: "Junior Software Engineer",
                    company: "Apple Inc.",
                    location: "San Fransisco, California",
                    type: "Full Time",
                    experience: "1-2",
                    salary: 90000,
                    skills: ["C++", "Perl", "Java", "PHP"],
                    date: "14/11/2021",
                    user: "John Doe",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
                },
            ],
        };
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
                    this.setState({
                        loading: false,
                    });
                } else {
                    this.props.history.push("/login");
                }
            };
            asyncFunc();
        } else {
            this.setState({ loading: false });
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
                            {this.state.jobs.map((job) => (
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
                            <div className="left-section-bottom">
                                <p>Show More</p>
                            </div>
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
