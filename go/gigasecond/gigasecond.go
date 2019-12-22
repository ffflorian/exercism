package gigasecond

import "time"

// AddGigasecond adds a Gigasecond to a timestamp
func AddGigasecond(t time.Time) time.Time {
	return t.Add(1e9 * time.Second)
}
