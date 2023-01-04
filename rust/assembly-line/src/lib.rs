pub fn production_rate_per_hour(speed: u8) -> f64 {
    let perfect_rate = speed as usize * 221;

    match speed {
        1..=4 => perfect_rate as f64,
        5..=8 => perfect_rate as f64 * 0.9,
        9.. => perfect_rate as f64 * 0.77,
        _ => 0 as f64,
    }
}

pub fn working_items_per_minute(speed: u8) -> u32 {
    (production_rate_per_hour(speed) / 60.0) as u32
}
