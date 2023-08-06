import React, { useState } from "react";

import {
  Screen,
  Container,
  Img,
  BoxImg,
  ScrollContainer,
  ImgList,
} from "./StyledApps";

import { Link } from "react-router-dom";

import Movies from "../assets/apps/movies logo.jpg";
import Store from "../assets/apps/app-store-logo.png";
import Music from "../assets/apps/music logo.png";

const ImgStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "262px",
  height: "140px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  cursor: "pointer",
};

function Apps({ songs, movies, stores }) {
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedShow(null);
  };

  return (
    <Screen>
      <Container>
        <Img
          onClick={() => handleCategoryClick("movies")}
          style={ImgStyle}
          src={Movies}
          caption={"Movies"}
          alt="Filmes"
        />
        <Img
          onClick={() => handleCategoryClick("store")}
          style={ImgStyle}
          src={Store}
          caption={"Store"}
          alt="Compras"
        />
        <Img
          onClick={() => handleCategoryClick("music")}
          style={ImgStyle}
          src={Music}
          caption={"Music"}
          alt="Musicas"
        />

        {selectedShow ? "" : null}
      </Container>
      <ScrollContainer>
        {selectedCategory === "movies" && (
          <Container>
            {movies.map((movie) => (
              <div key={movie.id} onClick={() => handleShowClick(movie)}>
                <BoxImg>
                  <Link to={movie.link} target="_blank">
                    <ImgList src={movie.img} alt="Filmes" />
                  </Link>
                </BoxImg>
              </div>
            ))}
          </Container>
        )}
        {selectedCategory === "store" && (
          <Container>
            {stores.map((store) => (
              <div key={store.id} onClick={() => handleShowClick(store)}>
                <BoxImg>
                  <ImgList src={store.img} alt="Compras" />
                </BoxImg>
              </div>
            ))}
          </Container>
        )}
        {selectedCategory === "music" && (
          <Container>
            {songs.map((song) => (
              <div key={song.id} onClick={() => handleShowClick(song)}>
                <BoxImg>
                  <Link to={song.link}>
                    <ImgList src={song.img} alt="Musicas" />
                  </Link>
                </BoxImg>
              </div>
            ))}
          </Container>
        )}
      </ScrollContainer>
    </Screen>
  );
}

export default Apps;
