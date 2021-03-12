import React, { Fragment } from "react";
import Tweet from "./Tweet";

const Tweets = (props) => {
  const tweets = [
    {
      name: "Taylor",
      tweet: "React is effing stressful!",
    },
    {
      name: "Rachelle",
      tweet: "Please help me",
    },
    {
      name: "Net Ninja",
      tweet: "I will help you learn how to program",
    },
  ];

  return (
    <Fragment>
      {tweets.map((tweet, index) => (
        <Tweet name={tweet.name} tweet={tweet.tweet} />
      ))}
    </Fragment>
  );
};

export default Tweets;
