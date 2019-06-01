#!/usr/bin/env bash

set -e

TEST_FILENAMES="${1}"
RUN_COMMAND="${2} ${3}"

for DIR in *; do
  if [ -d "${DIR}" ]; then
    (
      cd "${DIR}" || exit 1
      for TEST_FILENAME in ${TEST_FILENAMES}; do
        if [ ! -r "${TEST_FILENAME}" ]; then
          exit 1
        fi
      done
      echo "#### Testing \"${DIR}\" ..."
      bash -c "${RUN_COMMAND}"
      echo
    )
  fi
done
