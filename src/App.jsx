import { useState } from "react";
import "./App.css";
import BanList from "./components/BanList";
import Discover from "./components/Discover";
import Gallery from "./components/Gallery";

function App() {
  const [prevCats, setPrevCats] = useState([]);
  const [banList, setBanList] = useState(new Set());

  return (
    <div className="App">
      <Gallery cats={prevCats} />
      <Discover
        bans={banList}
        updateBans={setBanList}
        updateGallery={setPrevCats}
      />
      <BanList bans={banList} updateBans={setBanList} />
    </div>
  );
}

export default App;
