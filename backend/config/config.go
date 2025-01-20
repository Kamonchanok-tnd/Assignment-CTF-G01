package config

import (
	"crypto/sha256"
	"encoding/hex"
	"errors"
)

// HashValue เป็นฟังก์ชันสำหรับแปลงค่าที่ต้องการตรวจสอบให้เป็นแฮชด้วย SHA256
func HashValue(value string) (string, error) {
	if value == "" {
		return "", errors.New("value cannot be empty")
	}
	// ใช้ SHA256 ในการแปลงค่า
	hash := sha256.Sum256([]byte(value))
	return hex.EncodeToString(hash[:]), nil
}

// CheckValueHash เป็นฟังก์ชันสำหรับตรวจสอบค่าที่แฮชแล้วว่าตรงกันหรือไม่
func CheckValueHash(value string, hash string) bool {
	// แปลงค่า `value` เป็นแฮช
	computedHash, err := HashValue(value)
	if err != nil {
		return false
	}
	// เปรียบเทียบแฮช
	return computedHash == hash
}
