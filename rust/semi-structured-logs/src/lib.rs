/// various log levels
#[derive(Clone, PartialEq, Eq, Debug)]
pub enum LogLevel {
    Info,
    Warning,
    Error,
    #[cfg(feature = "add-a-variant")]
    Debug,
}
/// primary function for emitting logs
pub fn log(level: LogLevel, message: &str) -> String {
    match level {
        LogLevel::Info => info(message),
        LogLevel::Error => error(message),
        LogLevel::Warning => warn(message),
        #[cfg(feature = "add-a-variant")]
        LogLevel::Debug => debug(message),
    }
}
pub fn info(message: &str) -> String {
    format!("[INFO]: {}", message)
}
pub fn warn(message: &str) -> String {
    format!("[WARNING]: {}", message)
}
pub fn error(message: &str) -> String {
    format!("[ERROR]: {}", message)
}
#[cfg(feature = "add-a-variant")]
pub fn debug(message: &str) -> String {
    format!("[DEBUG]: {}", message)
}
