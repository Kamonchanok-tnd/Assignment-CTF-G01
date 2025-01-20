import React, { useState } from "react";
import "./Island2.css"; // สร้างไฟล์ CSS เฉพาะสำหรับ Popup นี้
import {Card } from "antd";

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
      <Card bordered={false} className="custom-cardh">
        <p>
        🕵️‍♂️🕵️‍♂️​​🕵️‍♂️​​ ตามหา PLAINTEXT!!! 🕵️‍♂️🕵️‍♂️​​🕵️‍♂️​​<br/>
        <br/>
        TheSu ranar eeUnu versu tyo fTec hnolo gyusa natuo nalpu blucu nuv ersut yunNa khonR atcha sumaP rov unceT heunu versu tywa sest ablus hedon 27Jul y1990 becom ungfu llyo perat uonal ThePl aunte xtusu can't fundy ours ulver lunun gudon 'tmean tojud geun1 993ut usnam edaft erTh aoSur anaru thelo calhe roune ofNa khonR atcha sumau tuson eofnu neNa tuona lRese archU nuver sutue sofTh aulan d
        <br/>
        </p>
        </Card>
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