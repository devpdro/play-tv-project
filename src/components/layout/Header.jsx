import React from "react";

import { Screen, Container, BoxHeader, Highlights } from "./StyledHeader";

function Header() {
  return (
    <Screen>
      <Container>
        <BoxHeader>
          <div>
            <h1>
              Toda a sua <em>TV </em>
              <span>no mesmo app.</span>
            </h1>
          </div>
        </BoxHeader>
      </Container>
      <Highlights>
        <span>Destaqu</span>es
      </Highlights>
    </Screen>
  );
}

export default Header;
