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

	values := []entity.Answer{
		{
			Name: "Plaintext",
			Value: "I can't find your silver lining I don't mean to judge",
		},
		{
			Name: "Key",
			Value: "22d97a2d0df69bc9acbaa37750b105a456664d635ce507aae09f0f8e0aba5e91",
		},
		{
			Name: "IV",
			Value: "24c1388fd0c3236bbb35d4c230be91b6",
		},
		{
			Name: "Mode",
			Value: "OFB",
		},
		{
			Name: "Cyphertext",
			Value: "7ff40ce469bc1654a79ff15db453b925cef3b9d1533b1aa18d4ad9dce6c782f775f04fe986e358f7e89ed5eb1715c51fffc3fa33f4",
		},
		{
			Name: "Hashing",
			Value: "983e480beecb4c8f4144b52270c1de5f290f1570c39d9bcc02acc9b35c2cdc46",
		},
		{
			Name: "Caesar",
			Value: "10",
		},
	}

	for _, item := range values {
		hashedValue, err := HashValue(item.Value)
		if err != nil {
			fmt.Printf("Failed to hash value for %s: %v\n", item.Name, err)
			continue
		}
		item.Value = hashedValue
		db.Create(&item)
	}
}
