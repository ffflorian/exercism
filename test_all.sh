#!/usr/bin/env sh

# Change to script's directory to ensure we're in the correct folder.
# http://stackoverflow.com/questions/3349105/how-to-set-current-working-directory-to-the-directory-of-the-script
cd "${0%/*}"

set -e

test_all() {
  for DIR in *; do
    if [ -d "${DIR}" ]; then
      ( cd "${DIR}"
        if [ -r ${1} ]; then
          echo "#### Testing \033[00;01m${DIR}\033[00;00m ..."
          ${2}
          echo
        fi
      )
    fi
  done
}

(cd javascript && npm test)
(cd rust && test_all "Cargo.toml" "cargo test")
(cd python && test_all "*_test.py" "python3 *_test.py")
