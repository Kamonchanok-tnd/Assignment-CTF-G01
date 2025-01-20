import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Openning.css"; // ไฟล์ CSS สำหรับจัดสไตล์
import openningVideo from "../../assets/openning.mp4"; // นำเข้าไฟล์วิดีโอ

const Openning: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // ใช้สำหรับอ้างอิงวิดีโอ
  const navigate = useNavigate();

  // เมื่อวิดีโอเล่นจบ ให้เปลี่ยนเส้นทางไปที่ /home
  const handleVideoEnd = () => {
    navigate("/home");
  };

  // เมื่อกดปุ่ม Skip ให้เปลี่ยนเส้นทางไปที่ /home
  const handleSkip = () => {
    navigate("/home");
  };

  useEffect(() => {
    // ตรวจสอบให้แน่ใจว่าวิดีโอเล่นอัตโนมัติ
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  return (
    <div className="openning-container">
      <video
        ref={videoRef}
        className="openning-video"
        src={openningVideo}
        autoPlay
        onEnded={handleVideoEnd}
        controls // เพิ่มปุ่มควบคุมให้ผู้ใช้เปิดเสียงเองได้
      />
      <button className="skip-button" onClick={handleSkip}>
        Skip ⋙
      </button>
    </div>
  );
};

export default Openning;
