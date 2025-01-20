import React, { useState } from "react";
import "./Island4.css";
import IVFile from "../../assets/IV.txt"; // Import ไฟล์โดยตรง
import CheckAnswer from "../../service";


const Island4: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState(""); // เริ่มต้นเป็นค่าว่าง
  const [value, setValue] = useState("");

  React.useEffect(() => {
      setName("Plaintext");
    }, []);

  const handleDownload = () => {
    window.open(IVFile, "_blank"); // เปิดไฟล์ในแท็บใหม่
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await CheckAnswer(name, value); // เรียกใช้ฟังก์ชัน CheckAnswer
      alert(`Success: ${response.message}`); // แจ้งเตือนเมื่อคำตอบถูกต้อง
      onClose(); // ปิด popup
    } catch (error) {
      alert(`Wrong answer. Please try again.`); // แจ้งเตือนเมื่อคำตอบผิด
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
