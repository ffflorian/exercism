workflow "Build, lint and test" {
  on = "push"
  resolves = ["JS: Test"]
}

action "JS: Change dir" {
  uses = "docker://node:10"
  args = "javascript"
  runs = "cd"
}

action "JS: Install" {
  uses = "docker://node:10"
  runs = "yarn"
  needs = ["JS: Change dir"]
}

action "JS: Test" {
  uses = "docker://node:10"
  runs = "yarn"
  args = "test"
  needs = ["JS: Install"]
}
