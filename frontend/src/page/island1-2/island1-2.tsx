import React, { useState, useEffect } from "react";
import "./Island1-2.css"; // สร้างไฟล์ CSS เฉพาะสำหรับ Popup นี้
import { Card } from "antd";
import CheckAnswer from "../../service";
import happy from '../../assets/happy.gif'
import cry from "../../assets/cry.gif"
import {  message } from 'antd';
const Island1_2: React.FC<{
  onClose: () => void;
  addItem: (item: string, details: string) => void;
}> = ({ onClose, addItem }) => {
  const [name, setName] = useState(""); // ชื่อ challenge
  const [value, setValue] = useState(""); // คำตอบของผู้ใช้

  // ตั้งค่าชื่อให้เป็น "Key" เมื่อ component ถูก mount
  useEffect(() => {
    setName("Key");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await CheckAnswer(name, value); // ตรวจคำตอบ
      console.log(response.message);
      message.success({
        content: ' ถูกต้องแล้วจ้า ไปกันต่อ!!!',
        icon: <img src={happy} alt="Success" style={{ width: 24, height: 24 }} />,
      });
      addItem("heart", ` ${value}`); // ส่งข้อมูลไอเท็มไปยัง inventory
      onClose(); // ปิด popup
    } catch (error) {
      message.error({
        content: ' ยังไม่ถูกลองใหม่นะ',
        icon: <img src={cry} alt="Success" style={{ width: 24, height: 24 }} />,
      });
    }
  };

  return (
    <div className="island1-2-popup-blue">
      <div className="island1-2-popup-header">
        <h2>Island 1-2 Challenge</h2>
        <button className="island1-2-close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="island1-2-popup-content">
        <Card bordered={false} className="island1-2-custom-cardh">
          <p>
            🕵️‍♂️🕵️‍♂️​​🕵️‍♂️​​ ตามหา KEY!!! 🕵️‍♂️🕵️‍♂️​​🕵️‍♂️​​<br />
            <br />
            Fhenanerr Havirefvgl bs Grpuabybtl jnf rfgnoyvfurq nf na choyvp nhgbabzbhf havirefvgl bhgfvqr gur pvivy freivpr flfgrz...
            <br />
          </p>
        </Card>
        <form onSubmit={handleSubmit}>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="island1-2-answer-input"
          />
          <div className="island1-2-submit">
            <button type="submit" className="island1-2-submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Island1_2;
