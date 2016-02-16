# Workshop 2 - Angular Material and UI-Router with Firebase as the backend DB

This is a workshop designed to practice writing Angular code in order to complete a simple chat client. The workshop is divided into 6 branches with each branch representing a step. Checkout branch 1 and follow the README or the instructions printed in the index.html files to complete each step.

###Getting Started###
Clone the repository and go to the newly created directory.
```bash
git clone git@github.com:addevonly/workshop2-angular-material.git
cd workshop2-angular-material
```

Next you will need to install the packages and dependencies needed to run the app. The second step exports the path so bower can be run from the command line.
```bash
npm install
export PATH="./node_modules/.bin:$PATH"
bower install
```

Run the server and browse to http://localhost/8080 to verify the build was successful:
```bash
node server
```

To start the workshop, check out branch step1 and run the server
```bash
git checkout step1
node server
```

Browse to http://localhost/8080 and the [README](https://github.com/addevonly/workshop2-angular-material/tree/step1) for the first step and follow the instructions.

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

If you go to the package.json script in the main directory, you can view the scripts that bundle the application.
```bash
"scripts": {
  "clean": "> www/dist.js",
  "bundle": "browserify www/app.js -o www/dist.js",
  "watch": "watchify www/app.js -o www/dist.js",
  "start": "npm run clean && npm run watch"
},
```
1. clean - deletes the dist.js bundle
2. bundle - calls Browserify to bundle the application into dist.js
3. watch - calls Watchify to watch for any changes to the Angular application, calls Browserify if there are any changes
4. start - deletes the dist.js and calls watch

For debugging purposes, we are not including minification which removes whitespace and substitutes names/functions for characters. Minification decreases the size of the file and can also mask your scripts from other users.
