import React from "react";

const ImgStyle = {
  width: "287px",
  height: "340px",
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
