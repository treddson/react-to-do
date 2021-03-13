import React, { Fragment, useState } from "react";
import Song from "./Song";

const Songs = (props) => {
  const [songs, setSongs] = useState([
    { title: "My Girls", id: 1 },
    { title: "The Bends", id: 2 },
    { title: "Working that 9 to 5", id: 3 },
  ]);

  return (
    <Fragment>
      <div className="songs-list">
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              <Song title={song.title} />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Songs;
