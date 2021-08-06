fn is_prime(n: u32) -> bool {
    if n <= 1 {
        return false;
    }

    for i in 2..n {
        if n % i == 0 {
            return false;
        }
    }

    return true;
}

pub fn nth(n: u32) -> u32 {
    let mut found_primes = 0;
    let mut candidate = 1;

    while found_primes <= n {
        candidate += 1;
        if is_prime(candidate) {
            found_primes += 1;
        }
    }

    return candidate;
}
