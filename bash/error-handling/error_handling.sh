#!/usr/bin/env bash

main() {
  if [ -z ${1+x} ] || [ ! -z "${@:2}" ]; then
    echo "Usage: ./error_handling <greetee>"
    exit 1
  fi

  echo "Hello, ${1}"
}

main "$@"
