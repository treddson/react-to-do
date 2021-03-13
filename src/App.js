import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import Songs from "./components/Songs";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <section className="nav">
          <NavBar />
        </section>
        <section className="body">
          <Songs />
        </section>
      </div>
    </Fragment>
  );
};

export default App;
