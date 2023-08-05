import React from "react";
import { Link } from "react-router-dom"; 
import { Screen, Container, Img } from "./StyledOtherApps";

import ABC from "../../../assets/apps/abc logo.jpg";
import AMC from "../../../assets/apps/app-store-logo.png";
import Aquarium from "../../../assets/apps/aquarium logo.jpg";
import Audio from "../../../assets/apps/audiobooks logo.jpg";
import Fireplace from "../../../assets/apps/fireplace logo.jpg";

const ImgStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "240px",
  margin: "0 10px 0 10px",
  height: "140px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  cursor: "pointer",
};

function Apps1() {
  return (
    <Screen>
      <Container>
        <Link to="/loading">
          <Img style={ImgStyle} src={ABC} alt="ABC" />
        </Link>
        <Img style={ImgStyle} src={AMC} alt="AMC" />
        <Img style={ImgStyle} src={Aquarium} alt="Aquarium" />
        <Img style={ImgStyle} src={Audio} alt="Audio" />
        <Img style={ImgStyle} src={Fireplace} alt="Fireplace" />
      </Container>
    </Screen>
  );
}

export default Apps1;
