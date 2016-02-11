# Workshop 2 - Angular Material and UI-Router with Firebase as the backend DB

Workshop writing Angular code to complete a simple chat client. The workshop is divided into 6 branches with each branch representing a step. Checkout branch 1 and follow the README or the instructions printed in the index.html files to complet each step.

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
The SPA is served using NodeJS and Express. Firebase is used as the real time database backend. The link to the Firebase server is https://material-sandbox.firebaseio.com/.

Presently the application consists of 3 UI router views; a simple chat, a list of users, and a new user form.

The following Bower components of note are used:
 - Angular
 - Angular Material
 - UI-Router
 - Firebase
 - Angular Fire

The application uses CommonJS commands for modularization. The distinguishable difference is that 'require' and 'module.exports' are used, both commands common in NodeJS. Because of this, Browserify **must** be used to bundle the application since it supports 'require' and modules.
