import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate
import "./Island1.css"; 
import p from "../../assets/TOUCHTHANAWAT (1).png";
import paintext from "../../assets/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ (5).png";
import { Image, Card } from "antd";
import CheckAnswer from "../../service";

const Island1: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState("Caesar");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate(); // สร้าง instance สำหรับเปลี่ยนเส้นทาง

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await CheckAnswer(name, value); // เรียกใช้ฟังก์ชัน CheckAnswer
      setResult(`Success: ${response.message}`);
      navigate("/deeja"); // เปลี่ยนหน้าไปที่ /deeja เมื่อคำตอบถูกต้อง
    } catch (error) {
      setResult(`Wrong answer. Please try again.`);
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
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
