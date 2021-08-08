pub fn is_armstrong_number(num: u32) -> bool {
    let string = num.to_string();

    let len = string.len() as u32;

    let result = string
        .chars()
        .map(|c| c.to_digit(10).unwrap())
        .fold(0, |sum, digit| sum + u32::pow(digit, len));

    result == num
}
