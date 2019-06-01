FROM golang:latest

LABEL version="1.0.0"
LABEL repository="https://github.com/ffflorian/exercism/tree/master/.github/actions/go-test"
LABEL homepage="https://github.com/ffflorian/exercism/tree/master/.github/actions/go-test"
LABEL maintainer="ffflorian"

LABEL com.github.actions.name="GitHub Action for local Go tests"
LABEL com.github.actions.description="cds into the Go dir and runs the given command"
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="yellow"

COPY "entrypoint.sh" "/entrypoint.sh"

ENTRYPOINT ["/entrypoint.sh"]
