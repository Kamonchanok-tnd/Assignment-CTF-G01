import React, { useState } from "react";
import "./Island2.css"; // สร้างไฟล์ CSS เฉพาะสำหรับ Popup นี้
import { Card } from "antd";
import CheckAnswer from "../../service";
import {  message } from 'antd';
import happy from '../../assets/happy.gif'
import cry from "../../assets/cry.gif"
const Island2: React.FC<{ onClose: () => void; addItem: (item: string, details: string,name: string) => void }> = ({ onClose, addItem }) => {
  const [name, setName] = useState(""); // เริ่มต้นเป็นค่าว่าง
  const [value, setValue] = useState("");

  // ตั้งค่าชื่อให้เป็น "Plaintext" เมื่อ form ถูก mount
  React.useEffect(() => {
    setName("Plaintext");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await CheckAnswer(name, value); // เรียกใช้ฟังก์ชัน CheckAnswer
      console.log(response.message);
      message.success({
        content: ' ถูกต้องแล้วจ้า ไปกันต่อ!!!',
        icon: <img src={happy} alt="Success" style={{ width: 24, height: 24 }} />,
      });
      console.log("Correct answer submitted:", value); // Debugging ตรวจสอบคำตอบที่ส่งไป
      addItem("heart", `${value}`,`${name}`); // เพิ่มไอเท็มไปยัง Inventory พร้อมรายละเอียด
      console.log("Item added to inventory:", { item: "heart", details: `Correct answer: ${value}` }); // Debugging
      onClose(); // ปิด popup
    } catch (error) {
      console.error("Error submitting answer:", error); // Debugging ตรวจสอบ error
      message.error({
        content: ' ยังไม่ถูกลองใหม่นะ',
        icon: <img src={cry} alt="Success" style={{ width: 24, height: 24 }} />,
      });
    }
  };

  return (
    <div className="popup-blue">
      <div className="popup-header">
        <h2>PLAINTEXT Challenge</h2>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="popup-content">
        <Card bordered={false} className="custom-cardh">
          <p>
            🕵️‍♂️🕵️‍♂️​​🕵️‍♂️​​ ตามหา PLAINTEXT!!! 🕵️‍♂️🕵️‍♂️​​🕵️‍♂️​​
            <br />
            <br />
            TheSura qaree Uqive rsity ofTec hqolo gyisa qatio qalp ublic uqive rsity iqqa khoqR atcha simaP rovi qceTh euqiv ersit ywase stab lished oq27J uly19 90bec omiq gfull yoper atioq alThe Plaiq texti sIcaq't fiqdy oursi lverl iqiqi doq't meaq tojud geiq1 993It isq ameda fterT haoSu raqar ithel ocalh eroiq eofqa khoqR atcha simaI tisoq eofqi qeqat ioqal Resea rchU qiver sities ofTha ilaqd
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
