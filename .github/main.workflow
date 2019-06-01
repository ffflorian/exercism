action "Don't skip CI" {
  uses = "ffflorian/actions/skip-ci-check@v1.0.0"
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
  args = "yarn"
}

action "Test JavaScript challenges" {
  uses = "./.github/actions/js-test"
  needs = "Install JavaScript dependencies"
  args = ["yarn", "test"]
}

action "Lint JavaScript solutions" {
  uses = "./.github/actions/js-test"
  needs = "Install JavaScript dependencies"
  args = ["yarn", "lint"]
}

workflow "Test Rust" {
  on = "push"
  resolves = "Test Rust challenges"
}

action "Test Rust challenges" {
  uses = "./.github/actions/rust-test"
  needs = "Don't skip CI"
}

workflow "Test Python" {
  on = "push"
  resolves = "Test Python challenges"
}

action "Test Python challenges" {
  uses = "./.github/actions/python-test"
  needs = "Don't skip CI"
}

workflow "Test Go" {
  on = "push"
  resolves = "Test Go challenges"
}

action "Test Go challenges" {
  uses = "./.github/actions/go-test"
  needs = "Don't skip CI"
}
