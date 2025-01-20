import React, { useState } from "react";
import "./Island1-2.css"; // สร้างไฟล์ CSS เฉพาะสำหรับ Popup นี้
import { Card } from "antd";
import CheckAnswer from "../../service";

const Island1_2: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState(""); // เริ่มต้นเป็นค่าว่าง
  const [value, setValue] = useState("");

  // ตั้งค่าชื่อให้เป็น "Plaintext" เมื่อ component ถูก mount
  React.useEffect(() => {
    setName("Key");
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
        <h2>Island 1 Challenge</h2>
        <button className="island1-2-close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="island1-2-popup-content">
        <Card bordered={false} className="island1-2-custom-cardh">
          <p>
            🕵️‍♂️🕵️‍♂️​​🕵️‍♂️​​ ตามหา KEY!!! 🕵️‍♂️🕵️‍♂️​​🕵️‍♂️​​<br />
            <br />
            Fhenanerr Havirefvgl bs Grpuabybtl jnf rfgnoyvfurq nf na choyvp nhgbabzbhf havirefvgl bhgfvqr gur pvivy freivpr flfgrz, haqre gur fhcreivfvba bs gur Eblny Gunv Tbireazrag, cebzbgvat nqzvavfgengvir cebsvpvrapl naq rssvpvrapl va vgf bcrengvbaf; n fpubyneyl pbzzhavgl pbafvfgvat bs gur yrnearq naq gur yrnearef, nf jryy nf Gur Xrl vf 22q97n2q0qs69op9nponn37750o105n456664q635pr507nnr09s0s8r0non5r91 nyy xvaqf bs xabjyrqtr va Negf, Fpvraprf naq Grpuabybtl, orarsvpvny gb obgu vaqvivqhnyf naq fbpvrgl.  Guvf havirefvgl svezyl cyrqtrf gb znvagnva rkpryyrapr va nyy bs vgf pbzzvgzragf; gb nqinapr gur dhnyvgl bs yvsr; gb frrx nccyvpngvbaf va gur pbyyrpgvba naq perngvba bs xabjyrqtr, zbeny rgubf naq jvfqbz, sbe gur rgreany tebjgu bs uhznaxvaq.
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
