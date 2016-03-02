# Workshop 2 - Angular Material and UI-Router with Firebase as the backend DB

This is a workshop designed to practice writing Angular code in order to complete a simple chat client. The workshop is divided into 6 branches with each branch representing a step. Start with the ***Getting Started*** and ***Starting the Server and Workshop*** steps in this document, then jump to the different steps.

* [Step 1](https://github.com/addevonly/workshop2-angular-material/tree/step1) - Basic Angular directives
* [Step 2](https://github.com/addevonly/workshop2-angular-material/tree/step2) - Writing a form and controller
* [Step 3](https://github.com/addevonly/workshop2-angular-material/tree/step3) - Modifying and deleting content
* [Step 4](https://github.com/addevonly/workshop2-angular-material/tree/step4) - UI Router intro
* [Step 5](https://github.com/addevonly/workshop2-angular-material/tree/step5) - Writing a simple chat client
* [Step 6](https://github.com/addevonly/workshop2-angular-material/tree/step6) - Using Angular Material components
* [Gulp](https://github.com/addevonly/workshop2-angular-material/tree/gulp-jshint) - Creating a new Gulp Task
 
###Architecture###
The single page application (SPA) is served using NodeJS and Express. Firebase is used as the real time database backend. The link to the Firebase server is https://material-sandbox.firebaseio.com/.

Presently the application consists of 3 UI router views; a simple chat, a list of users, and a new user form.

The following Bower components of note are used:
 - Angular
 - Angular Material
 - UI-Router
 - Firebase
 - Angular Fire

The application uses CommonJS commands for modularization. The distinguishable difference is that 'require' and 'module.exports' are used, both commands common in NodeJS. Because of this, Browserify **must** be used to bundle the application since it supports 'require' and modules.

###Bundling###
After the Node/Express server pushes the index.html file to the client, the template must make an HTTP call for each script/stylesheet. In the case of a modular Angular app, there could be dozens of script files so this could severely bog down a page load. Again to differentiate a legacy website from an Angular application, the former would serve a page with each state/view change so generally only one script/stylesheet needs to be loaded at a time. With an Angular application, all scripts/sheets need to be loaded at the beginning.

To limit the number of calls, the Angular application is bundled into one dist.js script (dist = distribution).

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

For debugging purposes, we are not including minification which removes whitespace and substitutes names/functions for characters. Minification decreases the size of the file and can also mask your scripts from other users.

###Getting Started###
Clone the repository and go to the newly created directory.
```bash
git clone https://github.com/addevonly/workshop2-angular-material.git
cd workshop2-angular-material
```

Next you will need to install the packages and dependencies needed to run the app. ***If you are using a Mac***, you will need to prepend ```sudo``` in front of ```npm install``` (i.e. ```sudo npm install```). The second step exports the path so Bower can be run from the command line.
```bash
npm install
export PATH="./node_modules/.bin:$PATH"
bower install
```

You may see a message while installing the bower components that looks like the sample and image below. This is due to Bower components that are dependent on Angular; i.e. these Bower components will fail to work without Angular. For instance, Angular-Material was developed using Angular version 1.4.8 whereas Angular Fire used version 1.3.

```bash
Unable to find a suitable version for angular, please choose one:
 1) Angular#1.3.x ... angularfire
 2) angular#1.5.0 ... angular-aria
 3) angular#^1.5.0 ... workshop2-angular-material
 4) angular#^1.0.8 ... angular-ui-router
 5) angular#^1.4.8 ... angular-material
 
 Prefix the choice with ! to persist it to bower.json
 ? Answer
```

You must select the highest option available or else some of the Bower components may fail to work. In the example below, option 2 or option 3 will work.

***Warning to Windows Users:*** ```bower install``` will not work properly with Cygwin. Command prompt, Git Bash, Git are alternatives. However after that, you should be able to continue using Cygwin for navigation and building.

![bowerIssue](https://cloud.githubusercontent.com/assets/15114749/13083353/9c007b66-d4a2-11e5-85ef-ba8f9aa5bc91.jpg)

Everything installed correctly if your www/bower_components directory is populated.

***Bower Install Help*** If you received error messages, you may have a firewall issue. Try running:
```bash
git config --global url."https://".insteadOf git://
bower install
```

###Starting the Server and Workshop###
Now that everything is installed, make sure you are in the main workshop directory and run the default Gulp script to start the server. Then in a browser, go to http://localhost:8080 to verify the build was successful. You should see something resembling the screen capture below the terminal sample:
```bash
gulp
```

Then browse to http://localhost:8080 where you should see something resembling the following:
![chat](https://cloud.githubusercontent.com/assets/15114749/13079199/0b61e704-d491-11e5-9b53-5bf6f7c00d11.png)

To start the workshop, check out branch step1 and stop (Ctrl+c).
```bash
git checkout -f step1
```

Browse to http://localhost:8080 and the [README](https://github.com/addevonly/workshop2-angular-material/tree/step1) for the first step and follow the instructions.
