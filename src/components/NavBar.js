import React, { Fragment } from "react";

const NavBar = (props) => {
  return (
    <Fragment>
      <h5>{props.title}</h5>
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">Profile</li>
        <li className="nav-item">Analytics</li>
        <li className="nav-item">About</li>
      </ul>
    </Fragment>
  );
};

export default NavBar;
