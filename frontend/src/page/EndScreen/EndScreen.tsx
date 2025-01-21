import React, { useEffect, useState } from "react";
import "./EndScreen.css"; // ไฟล์ CSS สำหรับการจัดการหน้าจอ
import dragonGif from "../../assets/dragon.gif"; // นำเข้าไฟล์ GIF

const EndScreen: React.FC = () => {
  const [animationEnded, setAnimationEnded] = useState(false); // สถานะสำหรับจบแอนิเมชัน

  useEffect(() => {
    // ตั้งเวลาให้แสดงข้อความหลัง GIF เล่นจบ (เวลาประมาณ GIF เล่นจนจบ)
    const timer = setTimeout(() => {
      setAnimationEnded(true); // เปลี่ยนสถานะเมื่อแอนิเมชันจบ
    }, 5400); // ระยะเวลา GIF (5 วินาทีสำหรับตัวอย่าง)

    return () => clearTimeout(timer); // ล้าง timeout เมื่อ component ถูกถอด
  }, []);

  return (
    <div className={`end-screen ${animationEnded ? "orange-background" : ""}`}>
      {!animationEnded ? (
        <img
          src={dragonGif} // ใช้ไฟล์ GIF
          alt="Dragon Celebration"
          className="gif-player"
        />
      ) : (
        <h1 className="congratulations-text">Congratulation!!!</h1>
      )}
    </div>
  );
};

export default EndScreen;
