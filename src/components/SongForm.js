import React, { Fragment, useState } from "react";

const SongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label>New Song</label>
        <input
          type="text"
          value={title}
          require="true"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </Fragment>
  );
};

export default SongForm;
