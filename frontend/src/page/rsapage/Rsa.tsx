import React, { useState } from "react";
import "./Rsa.css";
import p from '../../assets/TOUCHTHANAWAT (1).png'
import { Image } from "antd";
import paintext from '../../assets/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ (5).png'
import { Card } from 'antd';

const CyberSecurityPage: React.FC = () => {
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted Answer:", answer);
        // Add your submission logic here
    };

    return (
        <div className="container">
            <div className="header">
                <h1>CYBER</h1>
                <h1>SECURITY</h1>
            </div>
            <div className="card">
                <div className="row">
                    <div className="column">
                        <Card bordered={false} style={{
                            boxShadow: "0px 4px 8px rgba(90, 6, 86, 0.48)", // เงา
                            borderRadius: "8px", // ตัวเลือกสำหรับมุมโค้ง
                        }}>
                            <p style={{color:"green",fontSize:"25px",fontWeight:"bolder"}}>p : </p>
                            <Image
                                src={p}
                                alt="Placeholder"
                                style={{ height: "300px", width: "300px", marginLeft: "10px" }}
                            />
                        </Card>
                    </div>
                    <div className="column">
                        <Card bordered={false} style={{
                            boxShadow: "0px 4px 8px rgba(90, 6, 86, 0.48)", // เงา
                            borderRadius: "8px", // ตัวเลือกสำหรับมุมโค้ง
                            height:"100%"
                        }}>
                            <p style={{color:"green",fontSize:"25px",fontWeight:"bolder"}}>PlainText :</p>
                            <div className="text-container">
                                <Image
                                    src={paintext}
                                    alt="Placeholder"
                                    style={{ height: "300px", width: "300px", marginLeft: "10px" }}

                                />
                                <p>happy birth year to you</p>
                            </div>
                        </Card>
                    </div>
                    <div className="column2">
                        <Card bordered={false} style={{
                            boxShadow: "0px 4px 8px rgba(90, 6, 86, 0.48)", // เงา
                            borderRadius: "8px", // ตัวเลือกสำหรับมุมโค้ง
                            height:"47.5%"
                        }}>
                            <p style={{color:"green",fontSize:"25px",fontWeight:"bolder"}}>e :</p>
                            <p style={{ marginLeft: "10px" }}>15 บาท เข้างานเมืองโคราช</p>
                        </Card>
                        <br />
                        <Card bordered={false} style={{
                            boxShadow: "0px 4px 8px rgba(64, 21, 62, 0.48)", // เงา
                            borderRadius: "8px", // ตัวเลือกสำหรับมุมโค้ง
                             height:"47.5%"
                        }}>
                            <p style={{color:"green",fontSize:"25px",fontWeight:"bolder"}}>q :</p>
                            <a
                                href="https://www.sut.ac.th/news/detail/4/news20160108"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                                style={{ marginLeft: "10px" }}
                            >
                                https://www.sut.ac.th/news/detail/4/news20160108
                            </a>
                        </Card>
                    </div>
                </div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <label className="answer-label">ANSWER</label>
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="input"
                />
                <button type="submit" className="submit-button">
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default CyberSecurityPage;
