package diffiehellman

import (
	"crypto/rand"
	"math/big"
)

// PrivateKey generates a private key
func PrivateKey(p *big.Int) *big.Int {
	if !p.ProbablyPrime(0) {
		panic("Not a prime")
	}
	random := big.NewInt(0)
	random, _ = rand.Int(rand.Reader, random.Sub(p, big.NewInt(3)))
	return random.Add(random, big.NewInt(2))
}

// PublicKey generates a public key
func PublicKey(private, p *big.Int, g int64) *big.Int {
	publicKey := big.NewInt(0)
	return publicKey.Exp(big.NewInt(g), private, p)
}

// NewPair generates a new pair
func NewPair(p *big.Int, g int64) (private, public *big.Int) {
	privateKey := PrivateKey(p)
	return privateKey, PublicKey(privateKey, p, g)
}

// SecretKey generates a secret key
func SecretKey(private1, public2, p *big.Int) *big.Int {
	secretKey := big.NewInt(0)
	return secretKey.Exp(public2, private1, p)
}
