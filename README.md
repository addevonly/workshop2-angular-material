# Gulp - Creating a new task

###Overview of Gulp###
The task runner [Gulp](http://gulpjs.com/) is a NodeJS application that can build and deploy your application. For the purpose of this workshop, we are using Gulp to bundle the Javascript into one file and start the server. The script also watches for changes and rebuilds a new bundled file. The server will automatically restart after any changes. Finally, if you download the Chrome extension [Live Reload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en), the browser will automatically refresh (assuming you are using Google Chrome).

In the main directory, the Gulp file gulpFile.js has the follwing tasks:
```
1. build - calls Browserify to bundle the app into www/dist.js, refreshes the browser if the Chrome Live Reload extension is installed
2. server - starts the server, restarts the server if there are changes
3. watch - runs until Gulp is closed. Calls build if there sa change to the .js or .html files in the www/ folder ignoring www/dist.js
4. default - calls build, server, and watch
```
Unix users should be familiar with the .pipe() or | used to redirect the output. The .pipe() function is used to chain together tasks.

```
gulp.task('build', function() {
 return browserify({ entries: './www/app.js'})
  .bundle() 
   .pipe(source('dist.js'))
   .pipe(gulp.dest('./www'))
   .pipe(livereload());
});
```
After browserify bundles the application, we are redirecting the output to dist.js, then saving that to ./www, then refreshing the browser (if Live Reload is enabled in Chrome).

Ultimately, the main advantage is that one command ```gulp``` will bundle the application, turn on the watch, and start/restart the server. Gulp is easy to scale up from a prototype to an enterprise applications thanks to the many NPM Gulp packages that can be imported. Most of them are prefixed with "gulp-" such as [gulp-plumber](https://www.npmjs.com/package/gulp-plumber), [gulp-nodemon](https://www.npmjs.com/package/gulp-nodemon), and [gulp-livereload](https://www.npmjs.com/package/gulp-livereload), all of which are used in this application. 

###Setup###
```
git clone https://github.com/addevonly/workshop2-angular-material.git
git fetch
git checkout -f gulp-jshint
npm install
npm install -g gulp
gulp
```

###JSHint###
Linting is a recommended process to help ensure quality code is delivered to production. For this exercise, we are going to be implementing [JSHint](http://jshint.com/).

Install globally so the ```jshint``` command can be used (prepend ```sudo``` if you are on a Mac):
```
npm install -g jshint
```

Then install as a developer dependency:
```
npm install --save-dev jshint
```

So now we can lint files for code quality:
```
jshint www/app.js
jshint www/*.js
```

###Creating a Gulp Task for JSHint###
This is helpful for a spot check, but it becomes one more command to memorize. We also have to manually run it everytime we want to link our code.

Instead we can create a Gulp task to automate this check. Gulp is an open source project so the development community must create a Gulp package that imports JSHint. Fortunately, someone already created a [Gulp-JSHint](https://www.npmjs.com/package/gulp-jshint) package already.

###Instructions###
Please generously use the existing tasks in gulpFile.js and the documentation for [Gulp-JSHint](https://www.npmjs.com/package/gulp-jshint) to complete the following:

1. Install Gulp-JSHint as a dev dependency
2. Import the module to gulpFile.js
3. Create a new lint Gulp task that grabs all .js files in the ./www folder BUT ignores dist.js
4. Verify the task works using ```gulp lint```
5. Integrate into the default task
