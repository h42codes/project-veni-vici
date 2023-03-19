import "./Gallery.css";

const Gallery = ({ cats }) => {
  return (
    <div className="Gallery">
      <h3>Who have we seen so far?</h3>
      <div className="cats-container">
        {cats.map((cat) => (
          <div key={cat.id} className="cat">
            <img src={cat.imgUrl} alt="" />
            <p>
              A {cat.name} cat from {cat.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
