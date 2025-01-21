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
        <h2>KEY Challenge</h2>
        <button className="island1-2-close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="island1-2-popup-content">
        <Card bordered={false} className="island1-2-custom-cardh">
          <p>
            🕵️‍♂️🕵️‍♂️​​🕵️‍♂️​​ ตามหา KEY!!! 🕵️‍♂️🕵️‍♂️​​🕵️‍♂️​​
            <br />
            <br />
            Sjgzczg33 Uc7k3gh7in d4 T316cdad5n lzh 3hiz0a7h632 zh zc ej0a71 zjidcdbdjh jc7k3gh7in djih723 i63 17k7a h3gk713 hnhi3b, jc23g i63 hje3gk7h7dc d4 i63 Rdnza T6z7 Gdk3gcb3ci, egdbdi7c5 z2b7c7higzi7k3 egd47173c1n zc2 3447173c1n 7c 7ih de3gzi7dch; z h16dazgan 1dbbjc7in 1dch7hi7c5 d4 i63 a3zgc32 zc2 i63 a3zgc3gh, zh l3aa zh T63 K3n 7h rr2ywzr2p24vy01yz10zzswwup0qpuztuvvvt2vsu13upwzz3py4p4x3pz0zu3yq zaa 97c2h d4 9cdla3253 7c Agih, S173c13h zc2 T316cdad5n, 03c34717za id 0di6 7c27k72jzah zc2 hd173in.  T67h jc7k3gh7in 47gban ea3253h id bz7ciz7c 3m13aa3c13 7c zaa d4 7ih 1dbb7ib3cih; id z2kzc13 i63 fjza7in d4 a743; id h339 zeea71zi7dch 7c i63 1daa31i7dc zc2 1g3zi7dc d4 9cdla3253, bdgza 3i6dh zc2 l7h2db, 4dg i63 3i3gcza 5gdli6 d4 6jbzc97c2.
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
