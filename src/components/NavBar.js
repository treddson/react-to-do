import React, { Fragment } from "react";

const NavBar = (props) => {
  return (
    <Fragment>
      <h5>{props.title}</h5>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Analytics</li>
        <li>About</li>
      </ul>
    </Fragment>
  );
};

export default NavBar;
