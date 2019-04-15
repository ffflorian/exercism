action "Don't skip CI" {
  uses = "ffflorian/actions/last_commit@master"
  args = "^(?:(?!\\[(ci skip|skip ci)\\]).)*$"
}

workflow "Test JavaScript" {
  on = "push"
  resolves = [
    "Test JavaScript challenges",
    "Lint JavaScript solutions"
  ]
}

action "Install JavaScript dependencies" {
  uses = "./.github/actions/js-test"
  needs = "Don't skip CI"
  env = {
    "DESTINATION_DIR" = "javascript"
  }
  args = "yarn"
}

action "Test JavaScript challenges" {
  uses = "./.github/actions/js-test"
  needs = "Install JavaScript dependencies"
  env = {
    "DESTINATION_DIR" = "javascript"
  }
  args = ["yarn", "test"]
}

action "Lint JavaScript solutions" {
  uses = "./.github/actions/js-test"
  needs = "Install JavaScript dependencies"
  env = {
    "DESTINATION_DIR" = "javascript"
  }
  args = ["yarn", "lint"]
}

workflow "Test Rust" {
  on = "push"
  resolves = "Test Rust challenges"
}

action "Test Rust challenges" {
  uses = "./.github/actions/rust-test"
  needs = "Don't skip CI"
  env = {
    "DESTINATION_DIR" = "rust"
  }
  args = ["Cargo.toml", "cargo", "test"]
}

workflow "Test Python" {
  on = "push"
  resolves = "Test Python challenges"
}

action "Test Python challenges" {
  uses = "./.github/actions/python-test"
  needs = "Don't skip CI"
  env = {
    "DESTINATION_DIR" = "python"
  }
  args = ["*_test.py", "python3", "*_test.py"]
}
