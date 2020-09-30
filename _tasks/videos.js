const paths = require('../_assets/gulp_config/paths');

const gulp = require('gulp');

// Copies image files.
const buildVideos = () => {
  return gulp.src(paths.videoFilesGlob)
    .pipe(gulp.dest(paths.siteVideoFiles));
};
gulp.task('build:videos', gulp.parallel(buildVideos));
