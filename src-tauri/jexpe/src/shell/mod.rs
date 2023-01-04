use serde::{Deserialize, Serialize};

pub mod commands;

#[derive(Serialize, Deserialize, Clone)]
struct PtyStdoutPayload {
    id: String,
    bytes: Vec<u8>,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct OsShellPayload {
    display_name: String,
    icon: String,
    command: String,
}