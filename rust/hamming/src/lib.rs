pub fn hamming_distance(strand1: &str, strand2: &str) -> Option<usize> {
    if strand1.len() == strand2.len() {
        Some(strand1.chars().zip(strand2.chars()).filter(|&(i, j)| i != j).count())
    } else {
        None
    }
}
