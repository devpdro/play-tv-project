import React, { useState } from "react";
import TvShows from "../TvShows";
import { tvShows } from "../../data/db";

const imgSize = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "15px",
};

const container = {
  maxWidth: "1280px",
  margin: "0 auto",
  overflowY: "none",
  overflowX: "hidden",
  maxHeight: "450px",
};

const scrollContainer = {
  display: "flex",
  overflowX: "scroll",
};

function Main() {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  const selectedShows = tvShows.slice(0, 22);

  return (
    <main style={container}>
      <div style={scrollContainer}>
        {selectedShow ? (
          <div>
            <h1>ola</h1>
          </div>
        ) : (
          <div style={imgSize}>
            {selectedShows.map((show) => (
              <TvShows
                key={show.id}
                img={show.img}
                caption={show.caption}
                type={show.type}
                onClick={() => handleShowClick(show)}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
