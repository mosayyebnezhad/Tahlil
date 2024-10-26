package main

import (
	"fmt"
	"math"
	"math/rand"
	"time"
)

func re(rate float64) float64 {
	return -1 * math.Log(1.0-rand.Float64()) / rate
}

func main() {
	rand.Seed(time.Now().UnixNano())

	// Initialize variables
	var arrCount, lossCount, queueLength int
	var serverFState, serverSState bool
	var currArr, nextArr, nextFDep, nextSDep float64

	// Constants (assuming example rates for L, mf, ms)
	const (
		L              = 5.0  // Arrival rate
		mf             = 2.5  // Rate for F service
		ms             = 1.25 // Rate for S service
		maxQueueLength = 8
		maxArrivals    = 1000
	)

	// Initialize first arrival and service times
	nextArr = re(L)
	nextFDep = nextArr + re(mf)
	nextSDep = nextArr + re(ms)

	// Simulation loop
	for arrCount < maxArrivals {
		if nextArr <= nextFDep && nextArr <= nextSDep {
			// Process arrival event
			arrCount++
			currArr = nextArr
			nextArr = currArr + re(L)

			if !serverFState {
				serverFState = true
				nextFDep = currArr + re(mf)
			} else if !serverSState {
				serverSState = true
				nextSDep = currArr + re(ms)
			} else if queueLength < maxQueueLength {
				queueLength++
			} else {
				lossCount++
			}
			fmt.Printf("Arrival: arrCount=%d, queueLength=%d, lossCount=%d\n", arrCount, queueLength, lossCount)
		} else if nextFDep < nextSDep {
			// Process F service departure event
			serverFState = false
			if queueLength > 0 {
				queueLength--
				serverFState = true
				nextFDep += re(mf)
			}
			fmt.Printf("Departure F: arrCount=%d, queueLength=%d, lossCount=%d\n", arrCount, queueLength, lossCount)
		} else {
			// Process S service departure event
			serverSState = false
			if queueLength > 0 {
				queueLength--
				serverSState = true
				nextSDep += re(ms)
			}
			fmt.Printf("Departure S: arrCount=%d, queueLength=%d, lossCount=%d\n", arrCount, queueLength, lossCount)
		}
	}

	// Calculate and print loss probability
	ploss := float64(lossCount) / float64(arrCount)
	fmt.Printf("Loss probability: %.4f\n", ploss)
}
