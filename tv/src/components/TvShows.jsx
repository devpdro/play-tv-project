import React from "react";

import { BoxImg } from "./StyledTvShows";

const ImgStyle = {
  width: "290px",
  height: "350px",
  objectFit: "cover",
  cursor: "pointer",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};

function TvShows({ img, caption }) {
  return (
    <section>
      <BoxImg>
        <img src={img} alt={caption} style={ImgStyle} />
      </BoxImg>
    </section>
  );
}

export default TvShows;
