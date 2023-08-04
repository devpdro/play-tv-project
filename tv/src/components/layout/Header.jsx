import React from "react";
import { Screen, Container, Title } from "./StyledHeader";

function Header() {
  return (
    <Screen>
      <Container>
        <Title>
          <h2>O app StreamVision TV</h2>
          <div>
            <h1>
              Toda a sua Tv <span>no mesmo app.</span>
            </h1>
          </div>
        </Title>
      </Container>
    </Screen>
  );
}

export default Header;
