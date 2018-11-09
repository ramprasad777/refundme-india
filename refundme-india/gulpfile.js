/* file: gulpfile.js */

var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    pkg = require('./package.json');

// Default task
gulp.task('default', ['minify-css', 'minify-js', 'copy']);

/* jshint task would be here */
gulp.task('build-css', function() {
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Minify CSS
gulp.task('minify-css', function() {
    return gulp.src('./src/assets/css/main-style.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./src/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('./src/assets/javascript/**/*.js')
    .pipe(jshint())
    .pipe(gulp.dest('./src/assets/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src('./src/assets/js/custom.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./src/assets/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

//Start browser Sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

//Start JS Concatenation
gulp.task('useref', function(){
  return gulp.src('./src/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('./src/assets/js'))
});

/* updated watch task to include sass */

gulp.task('watch', ['browserSync', 'build-css', 'minify-css', 'minify-js',  'jshint'], function() {
  gulp.watch('./src/assets/javascript/**/*.js', ['jshint']);
  gulp.watch('./src/assets/scss/**/*.scss', ['build-css']);
  gulp.watch('./src/assets/css/*.css', ['minify-css']);
  gulp.watch('./src/assets/js/*.js', ['minify-js']);
  gulp.watch('./src/**/*.html', browserSync.reload);
});
