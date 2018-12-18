workflow "Build, lint and test" {
  on = "push"
  resolves = ["docker://node:10-1"]
}

action "Change dir" {
  uses = "docker://node:10"
  runs = "cd javascript"
}

action "docker://node:10" {
  uses = "docker://node:10"
  needs = ["Change dir"]
  runs = "yarn"
}

action "docker://node:10-1" {
  uses = "docker://node:10"
  needs = ["docker://node:10"]
  runs = "yarn"
  args = "test"
}
