import React from "react";

const container = {};

const imgStyle = {
  width: "250px",
  height: "400px",
  objectFit: "cover",
};

function TvShows({ img, caption }) {
  return (
    <section style={container}>
      <div>
        <img src={img} alt={caption} style={imgStyle} />
      </div>
    </section>
  );
}

export default TvShows;
