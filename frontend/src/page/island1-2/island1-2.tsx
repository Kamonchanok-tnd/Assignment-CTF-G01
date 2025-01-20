import React, { useState } from "react";
import "./Island1-2.css"; // สร้างไฟล์ CSS เฉพาะสำหรับ Popup นี้
import { Card } from "antd";
import CheckAnswer from "../../service";

const Island1_2: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState(""); // เริ่มต้นเป็นค่าว่าง
  const [value, setValue] = useState("");

  // ตั้งค่าชื่อให้เป็น "Plaintext" เมื่อ component ถูก mount
  React.useEffect(() => {
    setName("Plaintext");
  }, []); // เรียกครั้งเดียวเมื่อ component ถูก mount

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
            🕵️‍♂️🕵️‍♂️​​🕵️‍♂️​​ ตามหา PLAINTEXT!!! 🕵️‍♂️🕵️‍♂️​​🕵️‍♂️​​<br />
            <br />
            TheSu ranar eeUnu versu tyo fTec hnolo gyusa natuo nalpu blucu nuv ersut yunNa
            khonR atcha sumaP rov unceT heunu versu tywa sest ablus hedon 27Jul y1990
            becom ungfu llyo perat uonal ThePl aunte xtusu can't fundy ours ulver lunun
            gudon 'tmean tojud geun1 993ut usnam edaft erTh aoSur anaru thelo calhe
            roune ofNa khonR atcha sumau tuson eofnu neNa tuona lRese archU nuver
            sutue sofTh aulan d
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
