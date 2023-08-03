import React from "react";
import TvShows from "../TvShows";

const style = {
  maxWidth: "1280px",
  margin: "0 auto",
};

function Main({ img, caption, type }) {
  return (
    <main style={style}>
      <TvShows />
    </main>
  );
}

export default Main;
