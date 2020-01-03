#!/usr/bin/env bash

GO_SOLUTIONS=$(cd go && ls | wc -l)
JS_SOLUTIONS=$(cd javascript && ls | wc -l)
PYTHON_SOLUTIONS=$(cd python && ls | wc -l)
RUST_SOLUTIONS=$(cd rust && ls | wc -l)

sed -i "s/\(.\/go)\).*/\1 (${GO_SOLUTIONS} solutions)/g" README.md
sed -i "s/\(.\/javascript)\).*/\1 (${JS_SOLUTIONS} solutions)/g" README.md
sed -i "s/\(.\/python)\).*/\1 (${PYTHON_SOLUTIONS} solutions)/g" README.md
sed -i "s/\(.\/rust)\).*/\1 (${RUST_SOLUTIONS} solutions)/g" README.md

if [ ! -z "$(git status --porcelain)" ]; then
  git config --global "user.email" "${GIT_AUTHOR_EMAIL}"
  git config --global "user.name" "${GIT_AUTHOR_NAME}"
  REPO_URL="$(git remote get-url origin | sed -n "s/https:\/\/github.com\//https:\/\/${GIT_AUTHOR_NAME}:${GH_TOKEN}@github.com\//p")"
  git remote set-url origin "${REPO_URL}"
  git checkout master
  git add README.md
  git commit -m "chore(docs): Update readme\n\nskip-checks: true"
  git push
fi
