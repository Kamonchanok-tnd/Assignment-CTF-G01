package main

import (
	"fmt"
	"net/http"
	"ctf/config"
	"ctf/controller"
	"github.com/gin-gonic/gin"
)

const PORT = "8080"

func main() {

	// เปิดการเชื่อมต่อฐานข้อมูล
	config.ConnectionDB()

	// สร้างตารางและเตรียมข้อมูลในฐานข้อมูล
	config.SetupDatabase()

	// สร้าง instance ของ Gin
	r := gin.Default()

	// เปิดใช้งาน Middleware สำหรับจัดการ CORS
	r.Use(CORSMiddleware())

	// เส้นทาง API
	r.POST("/answer", controller.CheckAnswer) // เส้นทางสำหรับตรวจสอบคำตอบ

	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "API RUNNING... PORT: %s", PORT)
	})

	// รันเซิร์ฟเวอร์
	if err := r.Run(":" + PORT); err != nil {
		fmt.Println("Server failed to start:", err)
	}
}

// CORSMiddleware เป็น Middleware สำหรับจัดการ CORS
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		// ถ้าเป็นคำขอ OPTIONS ให้ตอบกลับทันที
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}
}
