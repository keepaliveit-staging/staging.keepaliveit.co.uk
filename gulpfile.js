// Gulpfile.js

// https://gulpjs.com/docs/en/getting-started/creating-tasks
// series() and parallel() can be nested to any arbitrary depth.
const devBuild = (process.env.NODE_ENV !== 'production');

const gulp = require('gulp');
const child = require('child_process');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const del = require('del');
const gutil = require('gulp-util');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const run = require('gulp-run');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify-es').default;
const assets = require('postcss-assets');
const mqpacker = require('css-mqpacker');
const sourcemaps = devBuild ? require('gulp-sourcemaps') : null;

//sass.compiler = require('node-sass');

// Include paths file
const paths = require('./assets/gulp-config/paths');


// ************************* //
// *** Stylesheets Tasks *** //
// ************************* //

// Process styles, add vendor-prefixes, minify, then
// output the file to the appropriate location
buildStyles = () => {
    return gulp.src('./assets/styles/sass/main.scss')
        .pipe(sourcemaps ? sourcemaps.init() : noop())
        .pipe(sass({
            outputStyle: 'nested',
            imagePath: '/images/',
            precision: 3,
            errLogToConsole: true
        }).on('error', sass.logError))
        .pipe(postcss([
            assets({loadPaths: ['images/']}),
            autoprefixer(),
            mqpacker,
            cssnano
        ]))
        .pipe(sourcemaps ? sourcemaps.write() : noop())
        .pipe(browserSync.stream())
        .pipe(gulp.dest(paths.siteCssFiles));

};


// ************************* //
// **** Javascript Tasks *** //
// ************************* //

// Concatenate and uglify global JS files and output the result to the
// appropriate location
buildScriptsGlobal = () => {
    return gulp.src([
        paths.jsFiles + '/lib' + paths.jsPattern,
        paths.jsFiles + '/*.js'
    ]).pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.jekyllJsFiles))
        .pipe(gulp.dest(paths.siteJsFiles))
        .on('error', gutil.log)
};

// Uglify local JS files and output the result to the appropriate location
buildScriptsLocal = () => {
    return gulp.src(paths.jsFiles + '/local' + paths.jsPattern)
        .pipe(uglify())
        .pipe(gulp.dest(paths.jekyllJsFiles))
        .pipe(gulp.dest(paths.siteJsFiles))
        .on('error', gutil.log);
};

// Build all scripts
buildScripts = (done) => {
    return gulp.series(
        buildScriptsGlobal,
        buildScriptsLocal
    )(done);
};


// ************************* //
// ****** Image Tasks ****** //
// ************************* //

// Optimize and copy image files
gulp.task('build:images', (callback) => {
    return callback(
        gulp.src(paths.imageFilesGlob)
            .pipe(
                imagemin({
                    optimizationLevel: 3,
                    progressive: true,
                    interlaced: true,
                    use: [pngquant()]
                })
            )
            .pipe(gulp.dest(paths.jekyllImageFiles))
            .pipe(gulp.dest(paths.siteImageFiles))
            .pipe(browserSync.stream())
    );
});


// ************************* //
// ******** Fonts ********** //
// ************************* //

// Place fonts in proper location
gulp.task('build:fonts', (callback) => {
    return callback(gulp.src(paths.fontFiles + '/**/**.*')
        .pipe(rename(function (path) {
            path.dirname = '';
        }))
        .pipe(gulp.dest(paths.jekyllFontFiles))
        .pipe(gulp.dest(paths.siteFontFiles))
        .pipe(browserSync.stream())
        .on('error', gutil.log)
    );
});


// ************************* //
// ******* Jekyll ********** //
// ************************* //

build = (done) => {
    gulp.series(
        jekyllBuild,
        buildScripts,
        //'build:images',
        //'build:fonts',
    )(done);
};

// Run jekyll build command.
jekyllBuild = (callback) => {
    const jekyll = child.spawn('jekyll', [
        'build',
        '--watch',
        '--incremental',
        '--drafts'
    ]);

    const jekyllLogger = (buffer) => {
        buffer.toString()
            .split(/\n\n/)
            .forEach((message) => gutil.log('Jekyll: ' + message));
    };

    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);

    browserSync.reload();

    callback();
};

// Serve site and watch files
serve = (callback) => {
    // Initialise browsersync
    browserSync.init({
        server: paths.siteDir,
        serveStatic: ['./_site'],
        serveStaticOptions: {
            extensions: ['html']
        },
        watch: true,
        startPath: 'index.html',
        index: 'index.html',
        ghostMode: false, // Toggle to mirror clicks, reloads etc (performance)
        logFileChanges: true,
        logLevel: 'debug',
        open: false       // Toggle to auto-open page when starting
    });

    //gulp.watch(['_config.yml'], gulp.series('build:jekyll:watch'));

    // Watch .scss files and pipe changes to browserSync
    gulp.watch('assets/styles/**/*.scss', gulp.series(buildStyles));

    // Watch .js files
    //gulp.watch('assets/js/**/*.js', gulp.series('build:scripts:watch'));

    // Watch image files and pipe changes to browserSync
    //gulp.watch('assets/img/**/*', gulp.series('build:images'));

    callback();
};


exports.buildStyles = buildStyles;
exports.jekyllBuild = jekyllBuild;
exports.build = build;
exports.serve = gulp.series(jekyllBuild, buildStyles, serve);