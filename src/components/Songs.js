import React, { Fragment, useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import SongForm from "./SongForm";

const Songs = () => {
  const [songs, setSongs] = useState([
    { title: "My Girls", id: uuidv4() },
    { title: "The Bends", id: uuidv4() },
    { title: "Working that 9 to 5", id: uuidv4() },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  };

  useEffect(() => {
    console.log("useEffect hook is awesome!", songs);
  }, []);

  return (
    <Fragment>
      <SongForm addSong={addSong} />
      <div className="songs-list">
        <ul>
          {songs.map((song) => (
            <li key={song.id}>{song.title}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Songs;
