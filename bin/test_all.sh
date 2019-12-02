#!/usr/bin/env bash

set -e

TEST_FILENAMES="${1}"
RUN_COMMAND="${2} ${3}"

for DIR in *; do
  if [ -d "${DIR}" ]; then
    (
      cd "${DIR}" >/dev/null 2>&1 || true
      if ls ${TEST_FILENAMES} >/dev/null 2>&1; then
        echo "#### Testing \"${DIR}\" ..."
        bash -c "${RUN_COMMAND}"
        echo
      fi
    )
  fi
done
