import React, { Fragment } from "react";

const Tweet = (props) => {
  return (
    <Fragment>
      <h4>
        {props.name} tweeted '{props.tweet}'
      </h4>
    </Fragment>
  );
};

export default Tweet;
