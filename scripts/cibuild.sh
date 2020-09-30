#!/bin/bash

# skip if build is triggered by pull request
if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "This is a PR, exiting"
  exit 0
fi

# enable error reporting to the console
set -e

if [ $TRAVIS_REPO_SLUG == "keepaliveit-staging/staging.keepaliveit.co.uk" ]; then
  echo "staging.keepaliveit.co.uk" > CNAME
  echo -e "User-agent: *\nDisallow: /" > robots.txt
  echo "This repository acts as a staging repository for keepaliveit.co.uk. Please see https://github.com/KeepAliveIT/keepaliveit.github.io for full source code." > README.md
fi

git config user.email "joel@keepaliveit.co.uk"
git config user.name "Keep-Alive I.T"
git add --all
git commit -a -m "Travis commit for build: #$TRAVIS_BUILD_NUMBER"
git push --force origin master