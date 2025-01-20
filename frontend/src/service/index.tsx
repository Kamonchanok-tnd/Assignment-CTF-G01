const CheckAnswer = async (name: string, value: string) => {
  const apiUrl = "http://localhost:8080/answer"; // URL สำหรับ API endpoint

  try {
    // ส่งคำขอ POST ไปยัง server
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // ระบุว่าเนื้อหาที่ส่งไปเป็น JSON
      },
      body: JSON.stringify({ name, value }), // ส่งข้อมูลในรูปแบบ JSON
    });

    // แปลงผลลัพธ์เป็น JSON
    const data = await response.json();

    // ตรวจสอบสถานะการตอบกลับ
    if (response.ok) {
      console.log("Success:", data);
      return data; // ส่งข้อมูลกลับไปใช้งานในฟังก์ชันอื่น
    } else {
      console.error("Error:", data);
      throw new Error(data.error || "An error occurred");
    }
  } catch (error) {
    console.error("Failed to check answer:", error);
    throw error; // ส่งข้อผิดพลาดออกไปให้ handle ภายนอก
  }
};

export default CheckAnswer;
