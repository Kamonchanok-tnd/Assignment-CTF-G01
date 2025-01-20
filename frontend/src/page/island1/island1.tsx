import React, { useState } from "react";
import "./Island1.css"; // สร้างไฟล์ CSS เฉพาะสำหรับ Popup นี้
import p from "../../assets/TOUCHTHANAWAT (1).png";
import paintext from "../../assets/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ (5).png";
import { Image, Card } from "antd";

const Island1: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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
    <div className="popup-blue1">
      <div className="popup-header">
        <h2>Island 1 Challenge</h2>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="popup-content">
        <div className="content-container">
          <div className="row">
            <div className="column">
              <Card bordered={false} className="custom-card">
                <p className="label">p:</p>
                <Image src={p} alt="Placeholder" className="custom-image" />
              </Card>
            </div>
            <div className="column">
              <Card bordered={false} className="custom-card">
                <p className="label">PlainText:</p>
                <div className="text-container">
                  <Image src={paintext} alt="Placeholder" className="custom-image" />
                  <p>happy birth year to you</p>
                  <p>🪨​🪨​🪨​ : </p>
                  <p className="white-text">มออื่นไม่ได้อยู่ใน มทส.นิแล้วเกี่ยวกันยังไงนะ?เขามีอะไรที่มันเหมือนกันไหมนะ</p>
                </div>
              </Card>
            </div>
            <div className="column1">
              <Card bordered={false} className="custom-card">
                <p className="label">e:</p>
                <p>15 บาท มทส-เมืองโคราช</p>
              </Card>
              <br />
              <Card bordered={false} className="custom-card">
                <p className="label">q:</p>
                <a
                  href="https://www.sut.ac.th/news/detail/4/news20160108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  https://www.sut.ac.th/news/detail/4/news20160108
                </a>
              </Card>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="answer" className="answer-label">Answer:</label>
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

export default Island1;
