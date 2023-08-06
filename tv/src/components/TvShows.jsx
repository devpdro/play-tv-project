import React from "react";

import { BoxImg } from "./StyledTvShows";

import { Link } from "react-router-dom";

const ImgStyle = {
  width: "290px",
  height: "350px",
  objectFit: "cover",
  cursor: "pointer",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};

function TvShows({ img, caption, link }) {
  return (
    <section>
      <BoxImg>
        <Link to={link} target="_blank">
          <img src={img} alt={caption} style={ImgStyle} />
        </Link>
      </BoxImg>
    </section>
  );
}

export default TvShows;
