package config

import (
	"ctf/entity"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"fmt"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func ConnectionDB() {
	database, err := gorm.Open(sqlite.Open("CTF.db?cache=shared"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	fmt.Println("Connected to the database")
	db = database
}

func SetupDatabase() {
	db.AutoMigrate(
		&entity.Answer{},
	)
}
