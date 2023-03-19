import { useEffect } from "react";
import "./BanList.css";

const BanList = ({ bans, updateBans }) => {
  const handleBanClick = (e) => {
    const ban = e.target.innerText;
    updateBans((prevBans) => {
      const newBans = new Set(prevBans);
      newBans.delete(ban);
      return newBans;
    });
  };

  return (
    <div className="BanList">
      <h2>Ban List</h2>
      <h4>Select an attribute in your listing to ban it</h4>
      <div className="ban-container">
        {Array.from(bans).map((ban) => (
          <button key={ban} onClick={handleBanClick}>
            {ban}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BanList;
