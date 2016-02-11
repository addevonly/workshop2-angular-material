# Firebase and Angular-Material Sandbox

This is a sandbox application using Angular Material and Firebase.

The SPA is served using NodeJS and Express. Firebase is used as the real time database backend. The link to the Firebase server is https://material-sandbox.firebaseio.com/.

Presently the application consists of 3 UI router views; a simple chat, a list of users, and a new user form.

The following Bower components of note are used:
 - Angular
 - Angular Material
 - UI-Router
 - Firebase
 - Angular Fire

Exporting the path like below will make executable of node modules available on command line. 
```bash
export PATH="./node_modules/.bin:$PATH"
```

Please run npm install and bower install to download all of the needed packages.

The application uses CommonJS commands for modularization. The distinguishable difference is that 'require' and 'module.exports' are used, both commands common in NodeJS. Because of this, Browserify **must** be used to bundle the application since it supports 'require' and modules.

To start the bundling process, run in the main directory:
```bash
npm start
```

If any changes are made to the server code(server.js) run:
```bash
node server
```
