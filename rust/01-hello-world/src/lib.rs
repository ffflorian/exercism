pub fn hello(name: Option<&str>) -> String {
    let mut recipient: String = "World".to_owned();

    if name.is_some() {
        recipient = name.unwrap().to_string();
    }

    return format!("Hello, {}!", recipient);
}
