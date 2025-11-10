#!/usr/bin/env bash

update_line() {
  DIR="${1}"
  SOLUTIONS_COUNT=$(cd "${DIR}" && ls -d */ | wc -l)
  SOLUTION_WORD=$([ $SOLUTIONS_COUNT -eq 1 ] && echo "solution" || echo "solutions")
  sed -i "s/\(.\/${DIR})\).* \[/\1 (${SOLUTIONS_COUNT} ${SOLUTION_WORD}) \[/g" README.md
}

update_line go
update_line javascript
update_line python
update_line rust
update_line typescript
update_line bash

if [ -n "$(git status --porcelain)" ]; then
  REPO_URL="$(git remote get-url origin | sed -n "s/https:\/\/github.com\//https:\/\/${GIT_AUTHOR_NAME}:${GITHUB_TOKEN}@github.com\//p")"
  git config "user.email" "${GIT_AUTHOR_EMAIL}"
  git config "user.name" "${GIT_AUTHOR_NAME}"
  git remote set-url origin "${REPO_URL}"
  git checkout main
  git commit -m "chore(docs): Update readme [ci skip]" README.md
  git push
fi
