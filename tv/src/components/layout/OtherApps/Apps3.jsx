import React from "react";

import { Screen, Container, Img } from "./StyledOtherApps";

import Netflix from "../../../assets/apps/netflix logo.png";
import Podcast from "../../../assets/apps/podcast logo.jpg";
import Settings from "../../../assets/apps/settings logo.png";
import Vrv from "../../../assets/apps/vrv logo.png";
import Youtube from "../../../assets/apps/youtube logo.png";

import { Link } from "react-router-dom";

const ImgStyle = {
  display: "flex",
  justifyContent: "center",
  width: "240px",
  margin: "0 10px 5rem 10px",
  height: "140px",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  cursor: "pointer",
};

function Apps3() {
  return (
    <Screen>
      <Container>
        <Link to="/loading">
          <Img style={ImgStyle} src={Netflix} alt="Netflix" />
        </Link>
        <Link to="/loading">
          <Img style={ImgStyle} src={Podcast} alt="Podcast" />
        </Link>
        <Link to="/loading">
          <Img style={ImgStyle} src={Settings} alt="Settings" />
        </Link>
        <Link to="/loading">
          <Img style={ImgStyle} src={Vrv} alt="Vrv" />
        </Link>
        <Link to="/loading">
          <Img style={ImgStyle} src={Youtube} alt="Youtube" />
        </Link>
      </Container>
    </Screen>
  );
}

export default Apps3;
