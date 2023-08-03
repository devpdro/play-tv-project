import React from "react";

const style = {
  maxWidth: "1280px",
  margin: "0 auto",
};

function TvShows({ img, caption, type }) {
  return (
    <section style={style}>
      <img src={img} alt={caption} />
      ola
    </section>
  );
}

export default TvShows;
