import React, { useState, useEffect } from "react";
import "./Island1.css";
import p from "../../assets/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ (7).png";
import paintext from "../../assets/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ (5).png";
import { Image, Card } from "antd";
import CheckAnswer from "../../service";
import Island1_2 from "../island1-2/island1-2";
import { message } from 'antd';
import happy from '../../assets/happy.gif'
import cry from "../../assets/cry.gif"
import RSACAL from "../../assets/RSA.txt"

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
      console.log(response.message);
      message.success({
        content: ' ถูกต้องแล้วจ้า ไปกันต่อ!!!',
        icon: <img src={happy} alt="Success" style={{ width: 24, height: 24 }} />,
      });
      setShowIsland1(false); // ซ่อน Island1
      setShowIsland1_2(true); // แสดง Island1_2
    } catch (error) {
      message.error({
        content: ' ยังไม่ถูกลองใหม่นะ',
        icon: <img src={cry} alt="Success" style={{ width: 24, height: 24 }} />,
      });
    }
  };

  const handleCloseIsland1_2 = () => {
    setShowIsland1_2(false); // ปิด Popup Island1_2
    onClose(); // แจ้ง Parent Component เพื่อปิด Popup
  };
  const handleDownload = () => {
    window.open(RSACAL, "_blank"); // เปิดไฟล์ในแท็บใหม่
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
                    <p className="label">p :</p>
                    <Image src={p} alt="Placeholder" className="custom-image" />
                  </Card>
                </div>
                <div className="column2">
                  <Card bordered={false} className="custom-card">
                    <p className="label">PlainText :</p>
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
                    <p className="label">e :</p>
                    <p>15 บาท มทส-เมืองโคราช</p>
                  </Card>
                  <br />
                  <Card bordered={false} className="custom-card">
                    <p className="label">q :</p>
                    <a
                      href="https://www.sut.ac.th/news/detail/4/news20160106?fbclid=IwY2xjawH7qy1leHRuA2FlbQIxMAABHTQotRDz9MybII5Ly45GACkwmVczqEnhZW-ewGlAlzHsEoGzXoxikYlI3A_aem_Xs-x7yp0BwUvooCqi_jAbw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      https://www.sut.ac.th/news/detail/4/
                    </a>
                  </Card>
                  <p className="green">ดี : ๒หนึ่งสอง๙</p>
                  <button className="download-button-island1" onClick={handleDownload}>
                    Download For Easy Life
                  </button>
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
