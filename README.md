# Workshop 2 - Step 2

Stop the server (Ctrl+c), check out the step2 branch, and then start the server. After browsing to http://localhost:8080 again, you will see that Step 1 has been completed and you now have instructions for step 2.

```bash
git checkout step2
node server
```

In another terminal, start the NPM runner that will automatically bundle your code upon any code changes. Note that if you were already running this command in step 1, you do not need to re-run this step as the watchify Node app will detect a change when you checked out the step2 branch.

```bash
npm start
```

###Summary###
Next we want to write a simple form to add a new user to the User table. Additionally we want to restrict the ability to hit the submit button until there is a name and valid email address.

We once again will use the firebaseFactory. This time we are inserting a new object into the table. Write a form where you can submit a new name and email address. And then complete the createNewUser() function in appCtrl.js.

Since we are using Firebase, all updates will be automatically pushed out to connected clients. So you may see new users being added to the page while you are still developing. Subsequently any new users you add will immediately be pushed to other clients as well.

###Instructions###
1. Write an ng-submit form with an input for a name and email address
 * [ngSubmit Directive](https://docs.angularjs.org/api/ng/directive/ngSubmit)
 * We recommend creating a single object with a name and email attribute
 * Make sure you are passing that object in with the createNewUser() call in index.html
2. Use ng-disabled to disable the button until the name and email are present
 * If you have not already, add the type='email' attribute to the email input element
 * [ngDisabled](https://docs.angularjs.org/api/ng/directive/ngDisabled) - make sure you include the 'd' at the end of Disabled!
