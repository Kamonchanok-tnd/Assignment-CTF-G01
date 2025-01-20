import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [inventory, setInventory] = useState<string[]>([]);

  const addItemToInventory = (item: string) => {
    if (inventory.length < 3) {
      setInventory([...inventory, item]);
    } else {
      alert("Inventory is full!");
    }
  };

  const challenges = [
    { id: 1, name: "Island 1", x: "17%", y: "44%" },
    { id: 2, name: "Island 2", x: "41.5%", y: "50%" },
    { id: 3, name: "Island 3", x: "77%", y: "3%" },
    { id: 4, name: "Island 4", x: "26.5%", y: "78%" },
    { id: 5, name: "Island 5", x: "83%", y: "50%" },
  ];

  return (
    <div className="map-container">
      <div className="ctf-sign">
  <span className="ctf-sign-text">CTF Challenge</span>
</div>

      <div className="inventory-container">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="inventory-slot" key={index}>
            {inventory[index] ? <img src={`src/assets/${inventory[index]}.png`} alt={inventory[index]} /> : null}
          </div>
        ))}
      </div>

      <div className="map">
        {challenges.map((challenge) => (
          <Link
            key={challenge.id}
            to={`/rsa`}
            className="diamond"
            style={{ left: challenge.x, top: challenge.y }}
            onClick={() => addItemToInventory(`item${challenge.id}`)}
          >
            <div className="diamond-text">{challenge.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
