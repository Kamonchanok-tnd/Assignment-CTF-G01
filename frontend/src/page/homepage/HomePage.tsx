import React, { useState } from "react";
import "./HomePage.css";
import Island2 from "../island2/Island2"; // Import Island components
import Island1 from "../island1/island1";
import Island3 from "../island3/island3";
import Island4 from "../island4/island4";
import Island5 from "../island5/island5";

const HomePage: React.FC = () => {
  const [inventory, setInventory] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState<number | null>(null);

  const addItemToInventory = (item: string) => {
    if (inventory.length < 3) {
      setInventory([...inventory, item]);
    } else {
      alert("Inventory is full!");
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setCurrentChallenge(null); // Reset challenge ID
  };

  const challenges = [
    { id: 1, name: "Island 1", x: "17%", y: "44%" },
    { id: 2, name: "Island 2", x: "41.5%", y: "50%" },
    { id: 3, name: "Island 3", x: "77%", y: "3%" },
    { id: 4, name: "Island 4", x: "26.5%", y: "78%" },
    { id: 5, name: "Island 5", x: "83%", y: "50%" },
  ];

  const renderIsland = () => {
    switch (currentChallenge) {
      case 1:
        return <Island1 onClose={handlePopupClose} />;
      case 2:
        return <Island2 onClose={handlePopupClose} />;
      case 3:
        return <Island3 onClose={handlePopupClose} />;
      case 4:
        return <Island4 onClose={handlePopupClose} />;
      case 5:
        return <Island5 onClose={handlePopupClose} />;
      default:
        return null;
    }
  };

  return (
    <div className="map-container">
      <div className="ctf-sign">
        <span className="ctf-sign-text">CTF Challenge</span>
      </div>

      {/* Inventory */}
      <div className="inventory-container">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="inventory-slot" key={index}>
            {inventory[index] ? (
              <img
                src={`src/assets/${inventory[index]}.png`}
                alt={inventory[index]}
              />
            ) : null}
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="map">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="diamond"
            style={{ left: challenge.x, top: challenge.y }}
            onClick={() => {
              setCurrentChallenge(challenge.id);
              setShowPopup(true);
            }}
          >
            <div className="diamond-text">{challenge.name}</div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && currentChallenge !== null && (
  <div className="popup-overlay">
    <div className="popup-content">
      {renderIsland()} {/* Render dynamic Island component */}
    </div>
  </div>
)}

    </div>
  );
};

export default HomePage;
