package robotname

import (
	"fmt"
	"math/rand"
	"time"
)

// Robot is a robot
type Robot struct {
	name string
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

func randomLetter() string {
	return string(letters[rand.Intn(len(letters))])
}

func generateName() string {
	rand.Seed(time.Now().UnixNano())
	return fmt.Sprint(randomLetter(), randomLetter(), rand.Intn(999))
}

// Reset resets the robot
func (r *Robot) Reset() {
	*r = Robot{}
}

// Name returns the robot's name
func (r *Robot) Name() (string, error) {
	if r.name == "" {
		r.name = generateName()
	}
	return r.name, nil
}
