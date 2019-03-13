#!/usr/bin/env bash

cd "${DESTINATION_DIR}"
sh -c "../bin/test_all.sh $*"
