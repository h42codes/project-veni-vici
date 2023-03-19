import "./CatView.css";

const CatView = ({ data, updateBans }) => {
  //   console.log(data);
  //   const tags = [name, weight, origin, lifespan];
  const tags = {
    name: data.breeds[0].name,
    weight: `${data.breeds[0].weight.imperial} lbs`,
    origin: data.breeds[0].origin,
    lifespan: `${data.breeds[0].life_span} years`,
  };

  const handleTagClick = (e) => {
    updateBans((prevBans) => {
      const newBans = new Set(prevBans);
      newBans.add(e.target.innerText);
      return newBans;
    });
  };

  return (
    <div className="CatView">
      <div className="tag-container">
        {Object.keys(tags).map((key) => (
          <button className="tag" key={key} onClick={handleTagClick}>
            {tags[key]}
          </button>
        ))}
      </div>
      <img src={data.url} alt="" />
    </div>
  );
};

export default CatView;

// setCatData({
//   name: data[0].breeds[0].name,
//   weight: `${data[0].breeds[0].weight.imperial} lbs`,
//   origin: data[0].breeds[0].origin,
//   lifespan: `${data[0].breeds[0].life_span} years`,
// });
