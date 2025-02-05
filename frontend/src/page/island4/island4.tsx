import React, { useState } from "react";
import "./Island4.css";
import IVFile from "../../assets/IV.txt"; // Import ไฟล์โดยตรง
import CheckAnswer from "../../service";
import {  message } from 'antd';
import happy from '../../assets/happy.gif'
import cry from "../../assets/cry.gif"

const Island4: React.FC<{ onClose: () => void; addItem: (item: string, details: string,name: string) => void }> = ({ onClose, addItem }) => {
  const [name, setName] = useState(""); // เริ่มต้นเป็นค่าว่าง
  const [value, setValue] = useState("");

  React.useEffect(() => {
    setName("IV");
  }, []);

  const handleDownload = () => {
    window.open(IVFile, "_blank"); // เปิดไฟล์ในแท็บใหม่
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await CheckAnswer(name, value); // เรียกใช้ฟังก์ชัน CheckAnswer
      console.log(response.message);
      message.success({
        content: ' ถูกต้องแล้วจ้า ไปกันต่อ!!!',
        icon: <img src={happy} alt="Success" style={{ width: 24, height: 24 }} />,
      });
      addItem("heart", `${value}`,`${name}`); // เพิ่มไอเท็ม "iv-item" ไปยัง Homepage
      onClose(); // ปิด popup
    } catch (error) {
      message.error({
        content: ' ยังไม่ถูกลองใหม่นะ',
        icon: <img src={cry} alt="Success" style={{ width: 24, height: 24 }} />,
      });
    }
  };

  return (
    <div className="popup-blue">
      <div className="popup-header4">
        <h2>IV Challenge</h2>
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
              value={value}
              onChange={(e) => setValue(e.target.value)}
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
