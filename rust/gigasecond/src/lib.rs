extern crate chrono;

use chrono::{DateTime,Duration,Utc};

pub fn after(start_date: DateTime<Utc>) -> DateTime<Utc> {
    start_date + Duration::seconds(1_000_000_000)
}
