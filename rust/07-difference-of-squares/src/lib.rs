pub fn square_of_sum(n: u32) -> u32 {
    (1..(n + 1)).sum::<u32>().pow(2)
}

pub fn sum_of_squares(n: u32) -> u32 {
    (1..(n + 1)).fold(0, |sum, x| sum + (x * x))
}

pub fn difference(n: u32) -> u32 {
    square_of_sum(n) - sum_of_squares(n)
}
