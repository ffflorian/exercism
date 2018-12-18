workflow "Build, lint and test" {
  on = "push"
  resolves = ["JS: Test"]
}

action "JS: Install" {
  uses = "docker://node:10"
  args = "cd javascript && yarn"
}

action "JS: Test" {
  uses = "docker://node:10"
  runs = "yarn"
  args = "cd javascript && yarn test"
  needs = ["JS: Install"]
}
