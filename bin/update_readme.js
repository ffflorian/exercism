#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');

const {GIT_AUTHOR_NAME, GH_TOKEN, GIT_AUTHOR_EMAIL} = process.env;

const exec = command => execSync(command).toString().trim();

function updateLines(...dirs) {
  for (let dir of dirs) {
    const solutionsCount = fs.readdirSync(dir).filter(file => fs.statSync(path.resolve(dir, file)).isDirectory()).length
    const readmeContent = fs.readFileSync('README.md', 'utf-8');
    const regex = new RegExp(`(\\./${dir})\\) .* \\[`, 'gm');
    const replaced = readmeContent.replace(regex, `$1 (${solutionsCount} solutions) [`);
    fs.writeFileSync('README.md', replaced);
  }
}

updateLines('go', 'javascript', 'purescript', 'python', 'rust', 'typescript')

const gitStatus = exec('git status --porcelain');

if (gitStatus) {
  const repoURL = exec('git remote get-url origin').replace(new RegExp('https://github.com/'), `https://${GIT_AUTHOR_NAME}:${GH_TOKEN}@github.com/`)
  exec(`git config "user.email" "${GIT_AUTHOR_EMAIL}"`)
  exec(`git config "user.name" "${GIT_AUTHOR_NAME}"`)
  exec(`git remote set-url origin "${repoURL}"`)
  exec('git checkout master')
  exec('git commit -m "chore(docs): Update readme [ci skip]" README.md')
  exec('git push')
}
