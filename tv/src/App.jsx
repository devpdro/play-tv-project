import "./App.css";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Navbar from "./components/layout/Navbar";

import { apps1 } from "./data/db";

function App() {
  const selectedApp = apps1[0];

  return (
    <div className="App">
      <Navbar />
      <Header
        img={selectedApp.img}
        caption={selectedApp.caption}
        type={selectedApp.type}
      />
      <Main />
    </div>
  );
}

export default App;
