package diffsquares

// SumOfSquares finds the sum of the squares of the first N natural numbers.
func SumOfSquares(n int) int {
	result := 0
	for i := 0; i <= n; i++ {
		result += i * i
	}
	return result
}

// SquareOfSum finds the square of the sum of the first N natural numbers.
func SquareOfSum(n int) int {
	result := 0
	for i := 0; i <= n; i++ {
		result += i
	}
	return result * result
}

// Difference finds the difference between SquareofSum and SumOfSquares.
func Difference(n int) int {
	return SquareOfSum(n) - SumOfSquares(n)
}
