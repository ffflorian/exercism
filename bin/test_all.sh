#!/usr/bin/env bash

set -e

cd "${0%/*}"
cd ".."

test_all() {
  for DIR in *; do
    if [ -d "${DIR}" ]; then
      ( cd "${DIR}"
        if [ -r "${1}" ]; then
          echo "#### Testing \\033[00;01m${DIR}\\033[00;00m ..."
          bash -c "${2}"
          echo
        fi
      )
    fi
  done
}

(cd javascript && yarn test)
(cd rust && test_all "Cargo.toml" "cargo test")
(cd python && test_all "*_test.py" "python3 *_test.py")
