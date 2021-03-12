import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import Tweets from "./components/Tweets";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <section className="nav">
          <NavBar title="Navigation" />
        </section>
        <section className="body">
          <Tweets />
        </section>
      </div>
    </Fragment>
  );
};

export default App;
