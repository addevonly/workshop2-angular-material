# Workshop 2 - Step 3

Stop the server (Ctrl+c), check out the step3 branch, and then start the server again. After browsing to http://localhost:8080 again, you will see that Step 2 has been completed and you now have instructions for step 3.

```bash
git checkout step3
node server
```

In another terminal, start the NPM runner that will automatically bundle your code upon any code changes.
```bash
npm start
```

###Summary###
Now we want to modify and delete existing 

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
