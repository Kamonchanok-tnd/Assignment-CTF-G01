import React, { useState } from "react";
import "./Island5.css"; // สร้างไฟล์ CSS เฉพาะสำหรับ Popup นี้
import h1 from "../../assets/hash1.png"
import h2 from "../../assets/hash 2.jpg"
import { Image, Card } from "antd";

const Island5: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [answer, setAnswer] = useState(""); // เก็บคำตอบที่ผู้ใช้กรอก

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim() === "correct_answer") { // ตรวจสอบคำตอบ
      alert("Correct! Well done.");
      onClose(); // ปิด Popup
    } else {
      alert("Wrong answer. Please try again.");
    }
  };

  return (
    <div className="Island5 ">
    <div className="popup-blue">
      <div className="popup-header">
        <h2>Island 5 Challenge</h2>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="popup-content">
      <br/>
        <Card bordered={false} className="custom-cardh">
        <p>
        🏆​🏆​🏆​ มาพิชิตการแข่งขันนี้กันเถอะ!!! 🏆​🏆​🏆​
        <br/><br/>
        format : flag&#123;hash&#125;
        <br/>
        hash : 
        <div className="row">
          <div className="column">
              <Image src={h1} alt="Placeholder" className="custom-image1" />
          </div>
          <div className="column">
              <div className="text-container">
                <Image src={h2} alt="Placeholder" className="custom-image2" />
              </div>
          </div>
        </div>
        </p>
        </Card>
        <br/>
        <form onSubmit={handleSubmit}>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="answer-input"
          />
          <div className="submit">
          <button type="submit" className="submit-button">
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Island5;