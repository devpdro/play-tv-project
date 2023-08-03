import React from "react";
import { Screen, Container, Title, Image } from "./StyledHeader";

function Header({ img, caption, type }) {
  return (
    <Screen>
      <Container>
        <Title>
          <h2>O app StreamVision TV</h2>
          <div>
            <h1>
              Toda a sua {type} <span>no mesmo app.</span>
            </h1>
          </div>
        </Title>
        <Image>
          <img src={img} alt={caption} />
        </Image>
      </Container>
    </Screen>
  );
}

export default Header;
