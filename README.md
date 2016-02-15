# Workshop 2 - Step 3

Stop the server (Ctrl+c), check out the step3 branch, and then start the server again. After browsing to http://localhost:8080 again, you will see that Step 2 has been completed and you now have instructions for step 3.

```bash
git checkout -f step3
node server
```

In another terminal, start the NPM runner that will automatically bundle your code upon any code changes. Once again note that if you already ran this command in a previous step, the watchify will detect the changes from the checkout and rebuild a new dist.js.
```bash
npm start
```

###Summary###
Now that we can add new users, we can add functionality to modify and delete users. In the previous step, we used the ngSubmit directive to submit a form. Now we can utilize both ngChange and ngClick to initiate an event.

###Instructions###
1. Change name and email to input fields
 * Since we want to edit the user's name and email address, we need to modify the contents inside the ng-repeat div to use an input element
2. Use ng-change so the Firebase user table is updated upon an inputted change
 * Add the ngChange directive as an attribute to each input.
 * [ngChange](https://docs.angularjs.org/api/ng/directive/ngChange)
 * Complete the updateUser() method in appCtrl.js
 * Refer to firebaseFactory.js to find the appropriate service method to call in updateUser()
3. Add a delete button and function to remove a user from Firebase
 * [ngClick](https://docs.angularjs.org/api/ng/directive/ngClick)
 * Complete the deleteUser() method in appCtrl.js
 * Refer to firebaseFactory.js to find the appropriate service method to call in deleteUser()
