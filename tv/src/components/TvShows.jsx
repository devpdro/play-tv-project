import React from "react";

const ImgStyle = {
  width: "250px",
  height: "400px",
  objectFit: "cover",
};

function TvShows({ img, caption }) {
  return (
    <section>
      <div>
        <img src={img} alt={caption} style={ImgStyle} />
      </div>
    </section>
  );
}

export default TvShows;
