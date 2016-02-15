# Workshop 2 - Step 4

Stop the server (Ctrl+c), check out the step4 branch, and then start the server again.

```bash
git checkout -f step4
node server
```

If you have not already done so, start the NPM runner in another terminal to automatically bundle your code.
```bash
npm start
```

###Summary###
So far our app uses a single view and a single controller. However one of the benefits of a front end framework like AngularJS is the ability to build multiple views and routes within a Single Page Application (SPA). The Angular team does provide the [ngRoute](https://docs.angularjs.org/api/ngRoute) module to accomplish routing but the developer community created [Angular UI-Router](https://github.com/angular-ui/ui-router), now the de factor choice.

From a template perspective, the syntax is nearly identical:

index.html - Sample ngRoute example code
```bash
<a href="userList">User List</a>
<a href="user">Create New User</a>
<div ng-view>View goes here</div>
```

index.html - Sample UI-Router example code
```bash
<a ui-sref="userList">User List</a>
<a ui-sref="user">Create New User</a>
<div ui-view>View goes here</div>
```

So the point is that UI-Router is as easy to use as ngRoute. However there are two main improvements in UI-Router.
1. States can be used in addition to URLs. In some cases you do not want a view to have a distinct URL, e.g. a multi-view shopping cart checkout page
2. Nested states are supported. This means a view itself can have a ui-view attribute/element too.

Our simple example for the workshop does not take advantage of these two features, but keep these in mind for future development.

The other half of routing (ngRoute or UI-Router) is the addition of a config module that handles the routes. In this workshop, that config module is in appRouter.js. Fortunately the module is already completed for this step. We only have to worry about moving the template and controller logic to separate files.

Recommended further Reading/Viewing:
1. [Stack Overflow question](http://stackoverflow.com/questions/21023763/angularjs-difference-between-angular-route-and-angular-ui-router) detailing why UI-Router is preferred to ngRoute
2. [Youtube UI-Router tutorial](https://www.youtube.com/watch?v=dqJRoh8MnBo) from Tim Kindber, one of the founders/advocates for UI-Router.

###Instructions###
1. Move the user list to userList.html and userListCtrl.js
 * Mostly a copy/paste effort but note that we use "vm" in the parent controller, and "vmc" in the child controller. Make sure those changes are made in both the controller and template
2. Move the create new user form to user.html and userCtrl.js
 * See above note
3. Remove the user list and create new user form from index.html and appCtrl.js
 * Since the list and form are moved to separate views and controllers, we can now remove the existing code in index.html and appCtrl.js as its redundant
