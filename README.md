# Workshop 2 - Step 1

If you have not done already, check out the branch and run the server. Then browse to http://localhost:8080.

```bash
git checkout step1
node server
```

###Summary###
In the first step, we want to list the name and email address of each user in the Users table in the Firebase instance. In addition we want to use two filters to search for a name/email address and sort the users by name alphabetically.

There is already a factory called firebaseFactory that will make the get, update, delete calls to Firebase. In addition the appCtrl.js controller is getting an array of users. So the array of users is already bound to the main template index.html. We just need to display the users.

###Instructions###
1. Iterate over the array using ng-repeat and print the name and email of each user
 * [ngRepeat Directive](https://docs.angularjs.org/api/ng/directive/ngRepeat)
 * Notice that the camelCase is replaced by all lowercase and a dash in the template? ```<div ng-repeat="(key, value) in myObj"> ... </div>```
 * Use double curly braces to bind expressions to elements: ```{{vm.example}}```
2. Order elements by name
 * [orderBy Filter](https://docs.angularjs.org/api/ng/filter/orderBy)
3. Add an input element that will filter the array
 * [filter Filter](https://docs.angularjs.org/api/ng/filter/filter)

For reference below - screen capture of the [Firebase user instance](https://material-sandbox.firebaseio.com/user):
![firebaseUser](https://cloud.githubusercontent.com/assets/15114749/13079320/ac47b0f4-d491-11e5-8120-815aed232a6b.png)
