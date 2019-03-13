FROM node:10-slim

LABEL version="1.0.0"
LABEL repository="https://github.com/ffflorian/exercistm/tree/master/.github/actions/js-test"
LABEL homepage="https://github.com/ffflorian/exercistm/tree/master/.github/actions/js-test"
LABEL maintainer="ffflorian"

LABEL com.github.actions.name="GitHub Action for local JavaScript tests"
LABEL com.github.actions.description="cds into the JavaScript dir and runs the given command"
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="yellow"

COPY "entrypoint.sh" "/entrypoint.sh"

ENTRYPOINT ["/entrypoint.sh"]
