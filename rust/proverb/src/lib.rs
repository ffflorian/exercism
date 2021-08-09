pub fn build_proverb(list: &[&str]) -> String {
    list.into_iter()
        .enumerate()
        .fold(String::new(), |acc, (i, cur)| {
            match list.get(i + 1) {
                Some(s) => format!("{}For want of a {} the {} was lost.\n", acc, cur, s),
                None => format!("{}And all for the want of a {}.", acc, list[0]),
            }
        })
}
