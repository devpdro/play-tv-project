import React, { useState } from "react";

import {
  Screen,
  Container,
  Img,
  BoxImg,
  ScrollContainer,
  ImgList,
} from "./StyledApps";

import PrimeVideo from "../assets/apps/prime video logo.png";
import Movies from "../assets/apps/movies logo.jpg";
import Store from "../assets/apps/app-store-logo.png";
import Music from "../assets/apps/music logo.png";
import Photos from "../assets/apps/photos logo.jpg";

const ImgStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "3rem",
  width: "262px",
  height: "140px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  cursor: "pointer",
};

function Apps({ shows, songs, movies, stores }) {
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
          onClick={() => handleCategoryClick("prime")}
          style={ImgStyle}
          src={PrimeVideo}
          caption={"Prime"}
          alt="Prime Video"
        />
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
        <Img
          onClick={() => handleCategoryClick("photos")}
          style={ImgStyle}
          src={Photos}
          caption={"Photos"}
          alt="Fotos"
        />

        {selectedShow ? <div></div> : null}
      </Container>
      <ScrollContainer>
        {selectedCategory === "prime" && (
          <Container>
            {shows.map((show) => (
              <div key={show.id} onClick={() => handleShowClick(show)}>
                <BoxImg>
                  <ImgList src={show.img} alt="" />
                </BoxImg>
              </div>
            ))}
          </Container>
        )}
        {selectedCategory === "movies" && (
          <Container>
            {movies.map((movie) => (
              <div key={movie.id} onClick={() => handleShowClick(movie)}>
                <BoxImg>
                  <ImgList src={movie.img} alt="Filmes" />
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
                  <ImgList src={song.img} alt="Musicas" />
                </BoxImg>
              </div>
            ))}
          </Container>
        )}
        {selectedCategory === "photos" && (
          <Container>
            {songs.map((song) => (
              <div key={song.id} onClick={() => handleShowClick(song)}>
                <BoxImg>
                  <ImgList src={song.img} alt="Fotos" />
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
