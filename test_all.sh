#!/usr/bin/env sh

# Change to script's directory to ensure we're in the correct folder.
# http://stackoverflow.com/questions/3349105/how-to-set-current-working-directory-to-the-directory-of-the-script
cd "${0%/*}"

set -e

(cd rust
  for DIR in *; do
    if [ -d "${DIR}" ]; then
      ( cd "${DIR}"
        if [ -r "Cargo.toml" ]; then
          echo "#### Testing \033[00;01m${DIR}\033[00;00m ..."
          cargo test
          echo
        fi
      )
    fi
  done
)

(cd javascript && npm test)
