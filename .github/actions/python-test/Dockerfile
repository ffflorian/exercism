FROM python:3-slim

LABEL version="1.0.0"
LABEL repository="https://github.com/ffflorian/exercism/tree/master/.github/actions/python-test"
LABEL homepage="https://github.com/ffflorian/exercism/tree/master/.github/actions/python-test"
LABEL maintainer="ffflorian"

LABEL com.github.actions.name="GitHub Action for local Python tests"
LABEL com.github.actions.description="cds into the Python dir and runs the given command"
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="yellow"

COPY "entrypoint.sh" "/entrypoint.sh"

ENTRYPOINT ["/entrypoint.sh"]
