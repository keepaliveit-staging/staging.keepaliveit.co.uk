#!/bin/bash

# skip if build is triggered by pull request
if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "This is a PR, exiting"
  exit 0
fi

# enable error reporting to the console
set -e

# cleanup "_site"
rm -rf _site
mkdir _site

# clone a remote repo to "_site" and build it
if [ $TRAVIS_REPO_SLUG == "KeepAliveIT/keepaliveit.github.io" ]; then
  git clone https://${GH_TOKEN}@github.com/KeepAliveIT/keepaliveit.github.io.git --branch master _site

  # Push content changes to algolia
  bundle exec jekyll algolia

  npm install

  # build with Jekyll into "_site" with production config
  JEKYLL_ENV=production gulp publish

elif [ $TRAVIS_REPO_SLUG == "keepaliveit-staging/staging.keepaliveit.co.uk" ]; then
  git clone https://${GH_TOKEN}@github.com/keepaliveit-staging/staging.keepaliveit.co.uk.git --branch master _site

  npm install

  # build with Jekyll into "_site" with staging config
  JEKYLL_ENV=production gulp publish --config _config-staging.yml
else
  echo "Invalid repository - see cibuild.sh source code for more info..."
  exit 0
fi

# Add files to _site and push to master
cd _site

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