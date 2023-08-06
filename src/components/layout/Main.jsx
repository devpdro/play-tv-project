import React from "react";

import { Container, ScrollContainer, ImgSize } from "./StyledMain";

import TvShows from "../TvShows";

import { tvShows } from "../../data/db";

function Main() {
  const selectedShows = tvShows.slice(0, 22);

  return (
    <Container>
      <ScrollContainer>
        <ImgSize>
          {selectedShows.map((show) => (
            <TvShows
              key={show.id}
              img={show.img}
              caption={show.caption}
              type={show.type}
              link={show.link}
            />
          ))}
        </ImgSize>
      </ScrollContainer>
    </Container>
  );
}

export default Main;
