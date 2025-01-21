import React, { useState } from "react";
import "./Island5.css";
import h1 from "../../assets/hash1.png";
import h2 from "../../assets/hash 2.jpg";
import { Image, Card, message } from "antd";
import CheckAnswer from "../../service";
import sur from "../../assets/surprised.gif";
import cry from "../../assets/cry.gif";
import { useNavigate } from "react-router-dom"; // ใช้ useNavigate สำหรับเปลี่ยนหน้า

const Island5: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState(""); // เริ่มต้นเป็นค่าว่าง
  const [value, setValue] = useState("");
  const navigate = useNavigate(); // ตัวแปรสำหรับเปลี่ยนเส้นทาง

  React.useEffect(() => {
    setName("Answer");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await CheckAnswer(name, value); // เรียกใช้ฟังก์ชัน CheckAnswer
      console.log(response.message);

      message.success({
        content: "ถูกต้องแล้วจ้า เก่งสุดๆไปเลย",
        icon: <img src={sur} alt="Success" style={{ width: 24, height: 24 }} />,
      });

      navigate("/end"); // เปลี่ยนเส้นทางไปหน้า /end
    } catch (error) {
      message.error({
        content: "ยังไม่ถูกลองใหม่นะ",
        icon: <img src={cry} alt="Error" style={{ width: 24, height: 24 }} />,
      });
    }
  };

  return (
    <div className="Island5 ">
      <div className="popup-blue">
        <div className="popup-header">
          <h2>Hash function Challenge</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="popup-content">
          <br />
          <Card bordered={false} className="custom-cardh">
            <p>
              🏆​🏆​🏆​ มาพิชิตการแข่งขันนี้กันเถอะ!!! 🏆​🏆​🏆​
              <br />
              <br />
              ให้นำ ciphertext มาเข้ารหัสเพื่อตอบคำถามตาม format :
              flag&#123;hash&#125;
              <br />
              hash :
              <div className="row">
                <div className="column">
                  <Image src={h1} alt="Placeholder" className="custom-image1" />
                </div>
                <div className="column">
                  <div className="text-container">
                    <Image
                      src={h2}
                      alt="Placeholder"
                      className="custom-image2"
                    />
                  </div>
                </div>
              </div>
            </p>
          </Card>
          <br />
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
    </div>
  );
};

export default Island5;
