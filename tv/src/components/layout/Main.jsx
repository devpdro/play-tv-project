import React from "react";
import TvShows from "../TvShows";
import { tvShows } from "../../data/db";

const imgSize = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "15px",
};

const container = {
  maxWidth: "1280px",
  margin: "0 auto",
  overflowY: "none",
  overflowX: "hidden",
  maxHeight: "450px",
};

const scrollContainer = {
  display: "flex",
  overflowX: "scroll",
};

function Main() {
  const selectedShows = tvShows.slice(0, 15);
  return (
    <main style={container}>
      <div style={scrollContainer}>
        <div style={imgSize}>
          {selectedShows.map((show) => (
            <TvShows
              key={show.id}
              img={show.img}
              caption={show.caption}
              type={show.type}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;
