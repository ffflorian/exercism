pub fn reverse(word: &str) -> String {
    word.chars().rev().fold(String::new(), |mut result, char| {
        result.push(char);
        result
    })
}