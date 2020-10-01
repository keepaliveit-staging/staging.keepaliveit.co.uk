source "https://rubygems.org"
ruby "2.7.1"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!

gem "jekyll", "~> 4.0.0"
gem "minimal-mistakes-jekyll"
gem "jekyll-paginate-v2", git: 'https://github.com/mmistakes/jekyll-paginate-v2.git', branch: 'jekyll-v4'
gem "jekyll-algolia"
gem "hologram"
gem 'sass', '~> 3.4', '>= 3.4.22'

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platform :mswin, :mingw, :x64_mingw do
    install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
      gem "tzinfo", "~> 1.2"
      gem "tzinfo-data"
    end

    # Performance-booster for watching directories on Windows
    gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
end
