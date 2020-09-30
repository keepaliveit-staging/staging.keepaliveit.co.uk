const paths = require('../_assets/gulp_config/paths');

const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const cleancss = require('gulp-clean-css');
const del = require('del');
const gulp = require('gulp');
const gutil = require('gulp-util');
const postcss = require('gulp-postcss');
const run = require('gulp-run');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

module.exports = {
    /**
     * Compiles and places a CSS file.
     *
     * @param scssRoot
     *   The SCSS root file, e.g. 'styles.scss'.
     * @param destinations
     *   An array of destinations where the resulting CSS file should be placed.
     */
    buildStyles: function buildStyles(scssRoot, destinations) {
        let stream = gulp.src(paths.sassFiles + scssRoot)
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest('./lol'));

        stream.pipe(
            postcss([autoprefixer({browsers: ['last 2 versions']})])
        ).pipe(cleancss());

        // Pipe file to all destinations.
        for (let i = 0; i < destinations.length; i++) {
            stream = stream.pipe(gulp.dest(destinations[i]));
        }

        stream.pipe(
            browserSync.stream()
        ).on('error', gutil.log);

        return stream;
    },

    /**
     * Deletes the specified items.
     *
     * @param items
     *   An array of items to be deleted.
     */
    clean: function clean(items) {
        return del(items);
    },

    /**
     * Reloads browsersync session.
     */
    reload: function reload(callback) {
        browserSync.reload();
        callback();
    },

    /**
     * Runs a command.
     *
     * @param command
     *   The command to run.
     */
    runCommand: (command) => {
        return gulp.src('.')
            .pipe(run(command))
            .on('error', gutil.log);
    },
};
