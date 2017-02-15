pub fn reply(input: &str) -> String {
    let mut sentence = String::from(input);
    let answer;

    if sentence.is_empty() {
        answer = "Fine. Be that way!";
    } else if sentence == sentence.to_uppercase() {
        answer = "Whoa, chill out!";
    } else if sentence.pop().unwrap() == '?' {
        answer = "Sure.";
    } else {
        answer = "Whatever.";
    }

    return String::from(answer);
}
