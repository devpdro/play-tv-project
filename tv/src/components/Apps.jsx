import React, { useState } from "react";
import Teste from "../assets/apps/music logo.png";
import Teste2 from "../assets/apps/movies logo.jpg";
import Teste3 from "../assets/apps/tv logo.jpg";
import Teste4 from "../assets/apps/photos logo.jpg";
import Teste5 from "../assets/apps/app-store-logo.png";

const screen = {
  maxWidth: "1280px",
  margin: "5rem auto",
};

const container = {
  gap: "30px",
  display: "flex",
};

const imgStyle = {
  width: "250px",
  height: "170px",
  cursor: "pointer", 
};

function Apps({ shows, songs }) {
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
    <section style={screen}>
      <div style={container}>
        <img
          onClick={() => handleCategoryClick("tv")}
          style={imgStyle}
          src={Teste3}
          alt=""
        />
        <img
          onClick={() => handleCategoryClick("photos")}
          style={imgStyle}
          src={Teste4}
          alt=""
        />
        <img
          onClick={() => handleCategoryClick("store")}
          style={imgStyle}
          src={Teste5}
          alt=""
        />
        <img
          onClick={() => handleCategoryClick("movies")}
          style={imgStyle}
          src={Teste2}
          alt=""
        />
        <img
          onClick={() => handleCategoryClick("music")}
          style={imgStyle}
          src={Teste}
          alt=""
        />
        {selectedShow ? (
          <div>
            <h1>{selectedShow.caption}</h1>
          </div>
        ) : null}
      </div>
      {selectedCategory === "movies" && (
        <div style={container}>
          {shows.map((show) => (
            <div
              key={show.id}
              caption={show.caption}
              onClick={() => handleShowClick(show)}
            >
              <img style={imgStyle} src={show.img} alt="" />
            </div>
          ))}
        </div>
      )}
      {selectedCategory === "music" && (
        <div style={container}>
          {songs.map((song) => (
            <div
              key={song.id}
              caption={song.caption}
              onClick={() => handleShowClick(song)}
            >
              <img style={imgStyle} src={song.img} alt="" />
            </div>
          ))}
        </div>
      )}
      {selectedCategory === "store" && (
        <div style={container}>
          {songs.map((song) => (
            <div
              key={song.id}
              caption={song.caption}
              onClick={() => handleShowClick(song)}
            >
              <img style={imgStyle} src={song.img} alt="" />
            </div>
          ))}
        </div>
      )}
      {selectedCategory === "photos" && (
        <div style={container}>
          {songs.map((song) => (
            <div
              key={song.id}
              caption={song.caption}
              onClick={() => handleShowClick(song)}
            >
              <img style={imgStyle} src={song.img} alt="" />
            </div>
          ))}
        </div>
      )}
      {selectedCategory === "tv" && (
        <div style={container}>
          {songs.map((song) => (
            <div
              key={song.id}
              caption={song.caption}
              onClick={() => handleShowClick(song)}
            >
              <img style={imgStyle} src={song.img} alt="" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Apps;
