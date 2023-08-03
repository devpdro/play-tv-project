import React from "react";

function TvShows({ img, caption }) {
  return (
    <section>
      <img src={img} alt={caption} />
    </section>
  );
}

export default TvShows;
