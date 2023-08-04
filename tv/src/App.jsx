import React from "react";

import Apps from "./components/Apps";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Navbar from "./components/layout/Navbar";

import { apps1, songs, movies, stores } from "./data/db";

function App() {
  const selectedApp = apps1.slice(0, 5);
  const selectedSongs = songs.slice(0, 15);
  const selectedMovies = movies.slice(0, 20);
  const selectedStores = stores.slice(0, 20);

  return (
    <main>
      <Navbar />
      <Header />
      <Main />
      <Apps
        shows={selectedApp}
        songs={selectedSongs}
        movies={selectedMovies}
        stores={selectedStores}
      />
    </main>
  );
}

export default App;
