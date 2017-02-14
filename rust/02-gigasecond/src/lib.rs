extern crate chrono;
use chrono::*;

pub fn after(start_date: DateTime<UTC>) -> DateTime<UTC> {
    return start_date.to_owned() + Duration::seconds(1_000_000_000);
}
