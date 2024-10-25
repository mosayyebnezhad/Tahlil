package main

import (
	"fmt"
	utils "system"
)

func main() {

	const (
		lambda      = 4
		mu          = 5
		entityCount = 1000
		Capacity    = 10
	)

	var (
		arrCount    int64   = 0
		lossCount   int64   = 0
		queueLength int32   = 0
		serverState bool    = false
		curruntTime float64 = 0
	)

	var (
		nextArr float64 = curruntTime + utils.RandExp(1/lambda)
		nextDep float64 = curruntTime + utils.RandExp(1/mu)
	)

	for arrCount < entityCount {
		if nextArr < nextDep {
			arrCount++
			curruntTime = nextArr

			if !serverState {
				serverState = true
			} else {
				if queueLength < (Capacity - 1) {
					queueLength++
				} else {
					lossCount++
				}
			}
			nextArr = curruntTime + utils.RandExp(1/lambda)

		} else {
			curruntTime = nextDep

			if queueLength == 0 {
				serverState = false
				nextDep = nextDep + utils.RandExp(1/mu)
			} else {
				queueLength--
				nextDep = curruntTime + utils.RandExp(1/mu)
			}
		}
	}

	P := float64(lossCount) / float64(arrCount)
	fmt.Printf("Probably Of this is: %f\n", P)

}
