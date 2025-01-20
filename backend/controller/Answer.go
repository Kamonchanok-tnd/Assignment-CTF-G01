package controller

import (
	"net/http"
	"ctf/config"
	"ctf/entity"
	"github.com/gin-gonic/gin"
)

// CheckAnswer handles requests to verify Name and Value
func CheckAnswer(c *gin.Context) {
	var inputData struct {
		Name  string `json:"name"`
		Value string `json:"value"`
	}

	// Bind JSON input to inputData
	if err := c.ShouldBindJSON(&inputData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	// Get database connection
	db := config.DB()
	var answer entity.Answer

	// Check if the Name exists in the database
	if err := db.Where("name = ?", inputData.Name).First(&answer).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Type not found"})
		return
	}

	// Verify the Value using the new CheckValueHash
	if !config.CheckValueHash(inputData.Value, answer.Value) {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Incorrect value"})
		return
	}

	// Return a success response
	c.JSON(http.StatusOK, gin.H{
		"message": "Answer verified successfully",
		"name":    answer.Name,
		"value":   inputData.Value,
	})
}
