import React, { useState } from "react";
import "./Island2.css"; // สร้างไฟล์ CSS เฉพาะสำหรับ Popup นี้

const Island2: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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
    <div className="popup-blue">
      <div className="popup-header">
        <h2>Island 2 Challenge</h2>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="popup-content">
        <p>
          Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!
          Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!
          Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!
          Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!
          Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!
          Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!
          Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!
          Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!
          Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!
          Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!
          Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!
          Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!\  Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!
          Solve the challenge and submit your answer below. Your task is to find
          the right key to unlock this island!
        </p>
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
  );
};

export default Island2;