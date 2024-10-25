package utils

import (
	"math"
	"math/rand"
)

func RandExp(lambda float64) float64 {
	random := rand.Float64()
	return -math.Log(random) * lambda
}
