import React, { Component } from "react";
import { Helmet } from "react-helmet";

import "./Home.scss";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Helmet>
          <title>Macebook | Home</title>
        </Helmet>

        <Header active={"home"} />

        <div className="container">
          <Card>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
