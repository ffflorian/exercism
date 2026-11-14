package clock

import (
	"fmt"
	"math"
)

// Clock is a clock
type Clock struct {
	hours   int
	minutes int
}

// New returns a new Clock
func New(hours, minutes int) Clock {
	hours += int(math.Floor(float64(minutes/60))) % 24
	minutes = minutes % 60

	if hours < 0 {
		hours += 24
	}

	if minutes < 0 {
		minutes += 60
	}

	return Clock{
		hours,
		minutes,
	}
}

// Subtract subtracts minutes from a clock
func (clock Clock) Subtract(minutes int) Clock {
	hours := minutes / 60
	minutes = minutes % 60
	clock.hours -= hours
	clock.minutes -= minutes
	return clock
}

// Add adds minutes to a clock
func (clock Clock) Add(minutes int) Clock {
	hours := minutes / 60
	minutes = minutes % 60
	clock.hours += hours
	clock.minutes += minutes
	return clock
}

// String returns a string representation of the clock
func (clock Clock) String() string {
	return fmt.Sprintf("%02d:%02d", clock.hours, clock.minutes)
}
