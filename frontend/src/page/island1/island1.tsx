import React, { useState, useEffect } from "react";
import "./Island1.css";
import p from "../../assets/TOUCHTHANAWAT (1).png";
import paintext from "../../assets/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ (5).png";
import { Image, Card } from "antd";
import CheckAnswer from "../../service";
import Island1_2 from "../island1-2/island1-2";

const Island1: React.FC<{ onClose: () => void; addItem: (item: string, details: string) => void }> = ({ onClose, addItem }) => {
  const [name, setName] = useState(""); // ชื่อ
  const [value, setValue] = useState(""); // คำตอบที่ผู้ใช้กรอก
  const [showIsland1, setShowIsland1] = useState(true); // ควบคุมการแสดง Island1
  const [showIsland1_2, setShowIsland1_2] = useState(false); // ควบคุมการแสดง Island1_2

  useEffect(() => {
    setName("Caesar"); // ตั้งค่าชื่อเป็น "Caesar" เมื่อ component ถูก mount
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await CheckAnswer(name, value); // ตรวจคำตอบ
      alert(`Success: ${response.message}`); // แจ้งเตือนเมื่อคำตอบถูกต้อง
      setShowIsland1(false); // ซ่อน Island1
      setShowIsland1_2(true); // แสดง Island1_2
    } catch (error) {
      alert(`Wrong answer. Please try again.`); // แจ้งเตือนเมื่อคำตอบผิด
    }
  };

  const handleCloseIsland1_2 = () => {
    setShowIsland1_2(false); // ปิด Popup Island1_2
    onClose(); // แจ้ง Parent Component เพื่อปิด Popup
};


  return (
    <>
      {/* แสดง Island1 */}
      {showIsland1 && (
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
                      <p>🪨​🪨​🪨​ :</p>
                      <p>9</p>
                      <p className="white-text">มหาวิทยาลัยวิจัยแห่งชาติ</p>
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
              <label htmlFor="answer" className="answer-label">
                Answer:
              </label>
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
      )}

      {/* แสดง Island1_2 เมื่อ showIsland1_2 = true */}
      {showIsland1_2 && <Island1_2 onClose={handleCloseIsland1_2} addItem={addItem} />}
    </>
  );
};

export default Island1;
