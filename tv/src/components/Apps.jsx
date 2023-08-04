import React, { useState } from "react";

import { Screen, Container, Img, BoxImg } from "./StyledApps";

import PrimeVideo from "../assets/apps/prime video logo.png";
import Movies from "../assets/apps/movies logo.jpg";
import Store from "../assets/apps/app-store-logo.png";
import Music from "../assets/apps/music logo.png";
import Photos from "../assets/apps/photos logo.jpg";

const ImgStyle = {
  display: "flex",
  justifyContent: "center",
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
        <img
          onClick={() => handleCategoryClick("prime")}
          style={ImgStyle}
          src={PrimeVideo}
          caption={"Prime"}
          alt="Prime Video"
        />
        <img
          onClick={() => handleCategoryClick("movies")}
          style={ImgStyle}
          src={Movies}
          caption={"Movies"}
          alt="Filmes"
        />
        <img
          onClick={() => handleCategoryClick("store")}
          style={ImgStyle}
          src={Store}
          caption={"Store"}
          alt="Compras"
        />
        <img
          onClick={() => handleCategoryClick("music")}
          style={ImgStyle}
          src={Music}
          caption={"Music"}
          alt="Musicas"
        />
        <img
          onClick={() => handleCategoryClick("photos")}
          style={ImgStyle}
          src={Photos}
          caption={"Photos"}
          alt="Fotos"
        />

        {selectedShow ? <div></div> : null}
      </Container>
      {selectedCategory === "prime" && (
        <Container>
          {shows.map((show) => (
            <div key={show.id} onClick={() => handleShowClick(show)}>
              <BoxImg>
                <Img src={show.img} alt="" />
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
                <Img src={movie.img} alt="Filmes" />
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
                <Img src={store.img} alt="Compras" />
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
                <Img src={song.img} alt="Musicas" />
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
                <Img src={song.img} alt="Fotos" />
              </BoxImg>
            </div>
          ))}
        </Container>
      )}
    </Screen>
  );
}

export default Apps;
