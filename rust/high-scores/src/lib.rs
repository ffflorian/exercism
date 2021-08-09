use std::cmp;

#[derive(Debug)]
pub struct HighScores {
    pub scores: Vec<u32>,
}

impl HighScores {
    pub fn new(scores: &[u32]) -> Self {
        Self {
            scores: scores.to_vec(),
        }
    }

    pub fn scores(&self) -> &[u32] {
        &self.scores
    }

    pub fn latest(&self) -> Option<u32> {
        self.scores.clone().into_iter().last()
    }

    pub fn personal_best(&self) -> Option<u32> {
        self.scores
            .clone()
            .into_iter()
            .reduce(|result, digit| cmp::max(result, digit))
    }

    pub fn personal_top_three(&self) -> Vec<u32> {
        let mut scores = self.scores.to_vec();
        scores.sort();
        scores.reverse();

        let len = scores.len();
        let min = cmp::min(len, 3);

        return scores[0..min].to_vec();
    }
}
