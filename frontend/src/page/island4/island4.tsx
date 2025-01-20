import React, { useState } from "react";
import "./Island4.css";

const Island4: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [answer, setAnswer] = useState(""); // เก็บคำตอบที่ผู้ใช้กรอก

  const handleDownload = () => {
    window.open("/path-to-your-file/document.pdf", "_blank");
  };

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
      <div className="popup-header4">
        <h2>IV</h2>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="popup-content">
        <button className="download-button" onClick={handleDownload}>
          Download Document
        </button>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-row">
            <label htmlFor="answer" className="answer-label">Guess for IV:</label>
            <input
              type="text"
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="answer-input"
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Island4;
