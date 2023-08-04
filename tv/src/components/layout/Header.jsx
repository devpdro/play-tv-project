import React from "react";

import { Screen, Container, BoxHeader } from "./StyledHeader";

function Header() {
  return (
    <Screen>
      <Container>
        <BoxHeader>
          <h2>O app StreamVision TV</h2>
          <div>
            <h1>
              Toda a sua <em>TV </em>
              <span>no mesmo app.</span>
            </h1>
          </div>
        </BoxHeader>
      </Container>
    </Screen>
  );
}

export default Header;
