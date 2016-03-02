var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch')
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    templateCache = require('gulp-angular-templatecache');

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

gulp.task('template', function() {
  return gulp.src('./www/*.html')
    .pipe(templateCache('templates.js', options={standalone: true}))
    .pipe(gulp.dest('./www'));
});

// Watches the www folder, but ignores the www/dist.js
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['www/*.js', 'www/*.html', '!www/dist.js'], ['build']);
});

// Starts the server and watches/restarts after changes
gulp.task('server', function() {
  nodemon({
    script: 'server.js'
  });
});

// Default script - type 'gulp' in the terminal to run
// Builds the bundle, starts the server, and watches for changes
gulp.task('default', ['template', 'build', 'server', 'watch']);
