pub fn hamming_distance(strand1: &str, strand2: &str) -> Result<usize, String> {
    if strand1.len() == strand2.len() {
        Ok(strand1.chars().zip(strand2.chars()).filter(|&(i, j)| i != j).count())
    } else {
        Err("DNA strands must be of equal length.".to_string())
    }
}
