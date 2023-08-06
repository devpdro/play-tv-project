import React from "react";
import { Link } from "react-router-dom";
import { Screen, Container, Img } from "./StyledOtherApps";

import Amc from "../../../assets/apps/amc logo.jpg";
import Ted from "../../../assets/apps/ted logo.png";
import Showtime from "../../../assets/apps/showtime logo.jpg";
import Audio from "../../../assets/apps/audiobooks logo.jpg";
import PrimeVideo from "../../../assets/apps/prime video logo.png"


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

function Apps1() {
  return (
    <Screen>
      <Container>
        <Link to="/loading">
          <Img style={ImgStyle} src={Amc} alt="Amc" />
        </Link>
        <Link to="/loading">
          <Img style={ImgStyle} src={Ted} alt="Ted" />
        </Link>
        <Link to="/loading">
          <Img style={ImgStyle} src={Showtime} alt="Showtime" />
        </Link>
        <Link to="/loading">
          <Img style={ImgStyle} src={Audio} alt="Audio" />
        </Link>
        <Link to="/loading">
          <Img style={ImgStyle} src={PrimeVideo} alt="PrimeVideo" />
        </Link>
      </Container>
    </Screen>
  );
}

export default Apps1;
