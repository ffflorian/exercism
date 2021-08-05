fn count (num: i16, lowercase: bool) -> String {
    format!(
        "{}",
        if num == 0 {
            format!("{}o more", if lowercase == true { "n" } else { "N" })
        } else {
            format!("{}", if num == -1 { "99".to_string() } else { num.to_string() })
        }
    )
}

fn bottle (num: i16, extended: bool) -> String {
    format!(
        "bottle{} of beer{}",
        if num != 1 { "s" } else { "" },
        if extended == true { " on the wall" } else { "" }
    )
}

fn take (num: i16) -> String {
    format!(
        "{}",
        if num == 0 {
            "Go to the store and buy some more".to_string()
        } else {
            format!(
                "Take {} down and pass it around",
                if num == 1 { "it" } else { "one" }
            )
        }
    )
}

pub fn verse(line: i16) -> String {
    format!(
        "{} {}, {} {}.\n{}, {} {}.\n",
        count(line, false),
        bottle(line, true),
        count(line, line == 0),
        bottle(line, false),
        take(line),
        count(line - 1, line == 1),
        bottle(line - 1, true)
    )
}

pub fn sing(line_from: i16, line_to: i16) -> String {
    (line_to .. line_from + 1)
        .rev()
        .map(|n| verse(n))
        .collect::<Vec<String>>()
        .join("\n")
}
