import React from "react";

import { Screen, Container, Img } from "./StyledOtherApps";

import Espn from "../../../assets/apps/espn logo.jpg";
import Fx from "../../../assets/apps/fx logo.jpeg";
import Hbo from "../../../assets/apps/hbo go logo.jpg";
import Hulu from "../../../assets/apps/hulu logo.jpg";
import Nba from "../../../assets/apps/nba logo.jpg";

import { Link } from "react-router-dom";

const ImgStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "240px",
  margin: "0 10px 5rem 10px",
  height: "140px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  cursor: "pointer",
};

function Apps2() {
  return (
    <Screen>
      <Container>
        <Link to="/loading">
          <Img style={ImgStyle} src={Fx} alt="Fx" />
        </Link>
        <Link to="/loading">
          <Img style={ImgStyle} src={Hbo} alt="Hbo" />
        </Link>
        <Link to="/loading">
          <Img style={ImgStyle} src={Espn} alt="Fotos" />
        </Link>
        <Link to="/loading">
          <Img style={ImgStyle} src={Hulu} alt="Hulu" />
        </Link>
        <Link to="/loading">
          <Img style={ImgStyle} src={Nba} alt="Nba" />
        </Link>
      </Container>
    </Screen>
  );
}

export default Apps2;
