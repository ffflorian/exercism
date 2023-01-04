pub fn reply(input: &str) -> String {
    let sentence = String::from(input.trim());
    let answer;

    if sentence.is_empty() {
        answer = "Fine. Be that way!";
    } else {
        let is_question = sentence.ends_with("?");
        let is_exclamation = sentence.ends_with("!");
        let no_letters = sentence.chars().all(|char| !char.is_alphabetic());
        let is_uppercase = sentence.chars().all(|char| !char.is_alphabetic() || char.is_uppercase());

        if (is_exclamation || !is_question) && is_uppercase && !no_letters {
            answer = "Whoa, chill out!";
        } else if is_question && is_uppercase && !no_letters {
            answer = "Calm down, I know what I'm doing!";
        } else if is_question {
            answer = "Sure."
        } else {
            answer = "Whatever.";
        }

    }

    return String::from(answer);
}
