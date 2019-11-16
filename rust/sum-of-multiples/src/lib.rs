pub fn sum_of_multiples(n: u32, v: &[u32]) -> u32 {
    (1..n).filter(|i| v.iter().any(|&n| i % n == 0)).sum()
}
