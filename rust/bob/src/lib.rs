fn is_uppercase(input: &str) -> bool {
    input == input.to_uppercase() && input.chars().any(|c| matches!(c, 'A'..='Z'))
}

fn is_question(input: &str) -> bool {
    input.chars().last().unwrap() == '?'
}

pub fn reply(input: &str) -> String {
    let sentence = String::from(input);
    let trimmed_sentence = sentence.trim();
    let answer;

    if trimmed_sentence.is_empty() {
        answer = "Fine. Be that way!";
    } else if is_uppercase(trimmed_sentence) {
        if is_question(trimmed_sentence) {
            answer = "Calm down, I know what I'm doing!";
        } else {
            answer = "Whoa, chill out!";
        }
    } else if is_question(trimmed_sentence) {
        answer = "Sure.";
    } else {
        answer = "Whatever.";
    }

    return String::from(answer);
}
