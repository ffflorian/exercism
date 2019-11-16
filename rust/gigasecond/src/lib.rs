extern crate chrono;
extern crate time;

use chrono::prelude::*;
use time::Duration;

pub fn after(start_date: DateTime<Utc>) -> DateTime<Utc> {
    start_date + Duration::seconds(1_000_000_000)
}
