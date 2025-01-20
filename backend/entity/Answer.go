package entity
import "gorm.io/gorm"

type Answer struct{
	gorm.Model
	Name 	string
	Value  	string
}