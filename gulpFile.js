var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer')
    browserify = require('browserify'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch')
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');

// Live Reload requires the Chrome extension Live Reload to also be downloaded
// and activated

// Runs browserify and bundles to www/dist.js
// Refreshes the browser
gulp.task('build', function() {
  return browserify({ entries: './www/app.js'})
    .bundle()
    .pipe(source('dist.js'))
    .pipe(gulp.dest('./www'))
    .pipe(livereload());
});

// Watches the www folder, but ignores the www/dist.js
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['www/*.js', 'www/*.html', '!www/dist.js'], ['build', 'lint']);
});

gulp.task('minify', function() {
  return browserify({ entries: './www/app.js'})
    .bundle()
    .pipe(source('dist.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./www/'))
});

// Starts the server and watches/restarts after changes
gulp.task('server', function() {
  nodemon({
    script: 'server.js'
  });
});

gulp.task('lint', function() {
  return gulp.src(['www/*.js', '!www/dist.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
})

// Default script - type 'gulp' in the terminal to run
// Builds the bundle, starts the server, and watches for changes
gulp.task('default', ['build', 'lint', 'server', 'watch']);
