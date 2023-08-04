import "./App.css";
import Apps from "./components/Apps";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Navbar from "./components/layout/Navbar";

import { apps1, songs } from "./data/db";

function App() {
  const selectedApp = apps1.slice(0, 5);

  const selectedSongs = songs.slice(0, 5);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Apps shows={selectedApp} songs={selectedSongs} />
    </div>
  );
}

export default App;
