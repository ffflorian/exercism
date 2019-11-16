pub fn hello(name: Option<&str>) -> String {
    let recipient = name.unwrap_or("World");

    format!("Hello, {}!", recipient)
}