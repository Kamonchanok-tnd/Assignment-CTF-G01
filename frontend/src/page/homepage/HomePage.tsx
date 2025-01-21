import React, { useState } from "react";
import "./HomePage.css";
import Island1 from "../island1/island1";
import Island2 from "../island2/Island2";
import Island3 from "../island3/island3";
import Island4 from "../island4/island4";
import Island5 from "../island5/island5";

const HomePage: React.FC = () => {
  const [inventory, setInventory] = useState<{ item: string; details: string; name: string }[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ item: string; details: string; name: string } | null>(null);
  const [currentChallenge, setCurrentChallenge] = useState<number | null>(null);
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]); // เก็บ id ของ challenges ที่ทำเสร็จแล้ว

  const addItemToInventory = (item: string, details: string, name: string) => {
    if (inventory.length < 3) {
      setInventory([...inventory, { item, details, name }]);
      if (currentChallenge !== null) {
        setCompletedChallenges([...completedChallenges, currentChallenge]); // เพิ่ม id ของ challenge ที่ทำเสร็จแล้ว
      }
      setShowPopup(false); // ปิด Popup เมื่อได้ไอเท็ม
      setCurrentChallenge(null); // Reset current challenge
    } else {
      alert("Inventory is full!");
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setCurrentChallenge(null);
  };

  const handleDetailPopupClose = () => {
    setShowDetailPopup(false);
    setSelectedItem(null);
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
        return (
          <Island1
            onClose={handlePopupClose}
            addItem={(item, details, name) => addItemToInventory(item, details, name)}
          />
        );
      case 2:
        return (
          <Island2
            onClose={handlePopupClose}
            addItem={(item, details, name) => addItemToInventory(item, details, name)}
          />
        );
      case 3:
        return <Island3 onClose={handlePopupClose} />;
      case 4:
        return (
          <Island4
            onClose={handlePopupClose}
            addItem={(item, details, name) => addItemToInventory(item, details, name)}
          />
        );
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
          <div
            className="inventory-slot"
            key={index}
            onClick={() => {
              if (inventory[index]) {
                setSelectedItem(inventory[index]);
                setShowDetailPopup(true);
              }
            }}
          >
            {inventory[index] ? (
              <img
                src={`src/assets/${inventory[index].item}.png`}
                alt={inventory[index].item}
                style={{ width: "100%", height: "100%" }}
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
            style={{
              left: challenge.x,
              top: challenge.y,
              backgroundImage: completedChallenges.includes(challenge.id)
                ? `url('src/assets/diamon2.png')` // เปลี่ยนภาพเมื่อทำเสร็จ
                : `url('src/assets/daimond.png')`,
            }}
            onClick={() => {
              if (!completedChallenges.includes(challenge.id)) {
                setCurrentChallenge(challenge.id);
                setShowPopup(true);
              }
            }}
          >
            <div className="diamond-text">{challenge.name}</div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && currentChallenge !== null && (
        <div className="popup-overlay">
          <div className="popup-content">{renderIsland()}</div>
        </div>
      )}

      {showDetailPopup && selectedItem && (
        <div className="popup-item-overlay">
          <div className="popup-item-content">
            <button className="popup-item-close-button" onClick={handleDetailPopupClose}>
              X
            </button>
            <h2>Item Details</h2>
            <h4>{selectedItem.name}</h4>
            <p>{selectedItem.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
