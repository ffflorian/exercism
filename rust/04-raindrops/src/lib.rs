pub fn raindrops(number: u16) -> String {
    let mut val = String::from("");

    if number % 3 == 0 {
        val.push_str("Pling");
    }

    if number % 5 == 0 {
        val.push_str("Plang");
    }

    if number % 7 == 0 {
        val.push_str("Plong");
    }

    if val.is_empty() {
        return number.to_string();
    } else {
        return val;
    }
}
