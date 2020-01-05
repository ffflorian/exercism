#!/usr/bin/env bash

GO_SOLUTIONS=$(cd go && ls -d */ | wc -l)
JS_SOLUTIONS=$(cd javascript && ls -d */ | wc -l)
TS_SOLUTIONS=$(cd typescript && ls -d */ | wc -l)
PS_SOLUTIONS=$(cd purescript && ls -d */ | wc -l)
PYTHON_SOLUTIONS=$(cd python && ls -d */ | wc -l)
RUST_SOLUTIONS=$(cd rust && ls -d */ | wc -l)

sed -i "s/\(.\/go)\).*/\1 (${GO_SOLUTIONS} solutions)/g" README.md
sed -i "s/\(.\/javascript)\).*/\1 (${JS_SOLUTIONS} solutions)/g" README.md
sed -i "s/\(.\/typescript)\).*/\1 (${TS_SOLUTIONS} solutions)/g" README.md
sed -i "s/\(.\/purescript)\).*/\1 (${PS_SOLUTIONS} solution)/g" README.md
sed -i "s/\(.\/python)\).*/\1 (${PYTHON_SOLUTIONS} solutions)/g" README.md
sed -i "s/\(.\/rust)\).*/\1 (${RUST_SOLUTIONS} solutions)/g" README.md

if [ ! -z "$(git status --porcelain)" ]; then
  git config --global "user.email" "${GIT_AUTHOR_EMAIL}"
  git config --global "user.name" "${GIT_AUTHOR_NAME}"
  REPO_URL="$(git remote get-url origin | sed -n "s/https:\/\/github.com\//https:\/\/${GIT_AUTHOR_NAME}:${GH_TOKEN}@github.com\//p")"
  git remote set-url origin "${REPO_URL}"
  git checkout master
  git add README.md
  git commit -m "chore(docs): Update readme [ci skip]"
  git push
fi
