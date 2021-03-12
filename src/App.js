import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import Tweets from "./components/Tweets";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <section className="nav">
        <NavBar title="Navigation" />
      </section>
      <section className="body">
        <Tweets />
      </section>
    </Fragment>
  );
};

export default App;
