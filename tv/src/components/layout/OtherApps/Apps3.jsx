import React from "react";

import { Screen, Container, Img } from "./StyledOtherApps";

import Netflix from "../../../assets/apps/netflix logo.png";
import Podcast from "../../../assets/apps/podcast logo.jpg";
import Settings from "../../../assets/apps/settings logo.png";
import Vrv from "../../../assets/apps/vrv logo.png";
import Youtube from "../../../assets/apps/youtube logo.png";

const ImgStyle = {
  display: "flex",
  justifyContent: "center",
  width: "240px",
  margin: "0 10px 0 10px",
  height: "140px",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  cursor: "pointer",
};

function Apps3() {
  return (
    <Screen>
      <Container>
        <Img style={ImgStyle} src={Netflix} alt="Netflix" />
        <Img style={ImgStyle} src={Podcast} alt="Podcast" />
        <Img style={ImgStyle} src={Settings} alt="Settings" />
        <Img style={ImgStyle} src={Vrv} alt="Vrv" />
        <Img style={ImgStyle} src={Youtube} alt="Youtube" />
      </Container>
    </Screen>
  );
}

export default Apps3;
