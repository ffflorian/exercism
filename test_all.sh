#!/usr/bin/env sh

set -e

cd "${0%/*}"

test_all() {
  for DIR in *; do
    if [ -d "${DIR}" ]; then
      ( cd "${DIR}"
        if [ -r "${1}" ]; then
          echo "#### Testing \\033[00;01m${DIR}\\033[00;00m ..."
          ${2}
          echo
        fi
      )
    fi
  done
}

(cd javascript && npm i && npm test)
(cd rust && test_all "Cargo.toml" "cargo test")
(cd python && test_all "*_test.py" "python3 *_test.py")
