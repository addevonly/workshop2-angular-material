# Workshop 2 - Angular Material and UI-Router with Firebase as the backend DB

This is a workshop designed to practice writing Angular code in order to complete a simple chat client. The workshop is divided into 6 branches with each branch representing a step. Start with the ***Getting Started*** and ***Starting the Server and Workshop*** steps in this document, then jump to the different steps.

* [Step 1](https://github.com/addevonly/workshop2-angular-material/tree/step1) - Basic Angular directives
* [Step 2](https://github.com/addevonly/workshop2-angular-material/tree/step2) - Writing a form and controller
* [Step 3](https://github.com/addevonly/workshop2-angular-material/tree/step3) - Modifying and deleting content
* [Step 4](https://github.com/addevonly/workshop2-angular-material/tree/step4) - UI Router intro
* [Step 5](https://github.com/addevonly/workshop2-angular-material/tree/step5) - Writing a simple chat client
* [Step 6](https://github.com/addevonly/workshop2-angular-material/tree/step6) - Using Angular Material components

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

You will probably see a message while installing the bower components that looks like the sample and image below. This is due to Bower components that are dependent on Angular; i.e. these Bower components will fail to work without Angular. For instance, Angular-Material was developed using Angular version 1.4.8 whereas Angular Fire used version 1.3.

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

***Warning:*** For Windows users, ```bower install``` will fail to work with Cygwin. Command prompt, Git Bash, Git are alternatives.

![bowerIssue](https://cloud.githubusercontent.com/assets/15114749/13083353/9c007b66-d4a2-11e5-85ef-ba8f9aa5bc91.jpg)

Everything installed correctly if your www/bower_components directory is populated.

***Bower Install Help*** If you received error messages, you may have a firewall issue. Try running:
```bash
git config --global url."https://".insteadOf git://
bower install
```

###Starting the Server and Workshop###
Now that everything is installed, make sure you are in the main workshop directory and run the server. Then in a browser, go to http://localhost:8080 to verify the build was successful. You should see something resembling the screen capture below the terminal sample:
```bash
node server
```

![chat](https://cloud.githubusercontent.com/assets/15114749/13079199/0b61e704-d491-11e5-9b53-5bf6f7c00d11.png)

To start the workshop, check out branch step1 and stop (Ctrl+c) and start the server
```bash
git checkout -f step1
node server
```

Browse to http://localhost:8080 and the [README](https://github.com/addevonly/workshop2-angular-material/tree/step1) for the first step and follow the instructions.
