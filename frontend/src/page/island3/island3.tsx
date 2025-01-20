import React, { useState } from "react";
import "./Island3.css";
import modeImage from "../../assets/mode.jpeg"; // นำเข้าไฟล์รูปภาพ

const Island3: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [answer, setAnswer] = useState(""); // เก็บคำตอบที่ผู้ใช้กรอก

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim() === "correct_answer") {
      alert("Correct! Well done.");
      onClose(); // ปิด Popup
    } else {
      alert("Wrong answer. Please try again.");
    }
  };

  return (
    <div className="popup-blue">
      <div className="popup-header">
        <h2>MODE</h2> {/* ข้อความตรงกลาง */}
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="popup-content">
        {/* รูปภาพ mode.JPG */}
        <div className="image-container">
          <img src={modeImage} alt="Mode" className="mode-image" />
        </div>
      </div>
    </div>
  );
};

export default Island3;
