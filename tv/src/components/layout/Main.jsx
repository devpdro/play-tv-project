import React from "react";
import TvShows from "../TvShows";
import { tvShows } from "../../data/db";

const style = {
  maxWidth: "1280px",
  margin: "0 auto",
};

function Main() {
  const selectedShows = tvShows.slice(0, 15);
  return (
    <main style={style}>
      {selectedShows.map((show) => (
        <TvShows
          key={show.id}
          img={show.img}
          caption={show.caption}
          type={show.type}
        />
      ))}
    </main>
  );
}

export default Main;
