import { useEffect, useState } from "react";
import "./Discover.css";
import CatView from "./CatView";

const API_KEY = import.meta.env.VITE_API_KEY;

const query = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&has_breeds=1`;

const Discover = ({ bans, updateBans, updateGallery }) => {
  const [catData, setCatData] = useState(null);

  const handleBtnClick = async () => {
    let newCatData = await callApi();
    while (containsBanned(newCatData.breeds[0], bans)) {
      newCatData = await callApi();
    }

    setCatData(newCatData);
    updateGallery((prevCats) => [
      {
        id: newCatData.id,
        imgUrl: newCatData.url,
        name: newCatData.breeds[0].name,
        country: newCatData.breeds[0].origin,
      },
      ...prevCats,
    ]);
  };

  const containsBanned = (breedData, bans) => {
    // const { name, weight, origin, lifespan } = breedData;
    const tags = [
      breedData.name,
      `${breedData.weight.imperial} lbs`,
      breedData.origin,
      `${breedData.life_span} years`,
    ];
    return tags.some((tag) => bans.has(tag));
  };

  const callApi = async () => {
    const response = await fetch(query);
    const data = await response.json();
    return data[0];
    // setCatData(data[0]);
    // updateGallery((prevCats) => [
    //   ...prevCats,
    //   {
    //     id: data[0].id,
    //     imgUrl: data[0].url,
    //     name: data[0].breeds[0].name,
    //     country: data[0].breeds[0].origin,
    //   },
    // ]);
  };

  return (
    <div className="Discover">
      <h1>Trippin' on Cats</h1>
      <p>It's just like StumbleUpon... but for cats!</p>
      {/* <p>😺😸😹😻😼😽🙀😿😾</p> */}
      <br />
      {catData && <CatView data={catData} updateBans={updateBans} />}
      <button className="discover-btn" onClick={handleBtnClick}>
        Discover!
      </button>
    </div>
  );
};

export default Discover;
