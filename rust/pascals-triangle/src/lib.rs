pub struct PascalsTriangle {
    row_count: u32
}

impl PascalsTriangle {
    pub fn new(row_count: u32) -> Self {
        PascalsTriangle { row_count: row_count }
    }

    pub fn rows(&self) -> Vec<Vec<u32>> {
        let mut triangle = vec![];
        let mut last_row = vec![1];

        for _ in 0..(self.row_count) {
            let mut row = vec![1];

            for pair in last_row.windows(2) {
                row.push(pair[0] + pair[1]);
            }

            row.push(1);

            triangle.push(last_row);
            last_row = row;
        }

        triangle
    }
}