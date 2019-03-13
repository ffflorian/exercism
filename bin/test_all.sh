#!/usr/bin/env bash

set -e

TEST_FILENAME="${1}"
RUN_COMMAND="${2} ${3}"

for DIR in *; do
  if [ -d "${DIR}" ]; then
    ( cd "${DIR}"
      if [ -r "${TEST_FILENAME}" ]; then
        echo "#### Testing \"${DIR}\" ..."
        bash -c "${RUN_COMMAND}"
        echo
      fi
    )
  fi
done
