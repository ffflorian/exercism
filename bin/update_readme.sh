#!/usr/bin/env bash

update_line() {
  DIR="${1}"
  SOLUTIONS_COUNT=$(cd "${DIR}" && ls -d */ | wc -l)
  sed -i "s/\(.\/${DIR})\).* \[/\1 (${SOLUTIONS_COUNT} solutions) \[/g" README.md
}

update_line go
update_line javascript
update_line purescript
update_line python
update_line rust
update_line typescript

if [ -n "$(git status --porcelain)" ]; then
  REPO_URL="$(git remote get-url origin | sed -n "s/https:\/\/github.com\//https:\/\/${GIT_AUTHOR_NAME}:${GH_TOKEN}@github.com\//p")"
  git config "user.email" "${GIT_AUTHOR_EMAIL}"
  git config "user.name" "${GIT_AUTHOR_NAME}"
  git remote set-url origin "${REPO_URL}"
  git checkout main
  git commit -m "chore(docs): Update readme [ci skip]" README.md
  git push
fi
