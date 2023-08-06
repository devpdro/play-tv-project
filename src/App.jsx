import React from "react";

import Apps from "./components/Apps";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Navbar from "./components/layout/Navbar";
import Apps2 from "./components/layout/OtherApps/Apps2";
import Apps3 from "./components/layout/OtherApps/Apps3";
import Apps1 from "./components/layout/OtherApps/Apps1";

import { songs, movies, stores } from "./data/db";

import { Helmet } from "react-helmet";

function App() {
  const selectedSongs = songs.slice(0, 15);
  const selectedMovies = movies.slice(0, 20);
  const selectedStores = stores.slice(0, 20);

  return (
    <>
      <Helmet>
        <title>Play TV</title>
      </Helmet>
      <Navbar />
      <Header />
      <Main />
      <Apps
        songs={selectedSongs}
        movies={selectedMovies}
        stores={selectedStores}
      />
      <Apps1 />
      <Apps2 />
      <Apps3 />
    </>
  );
}

export default App;
