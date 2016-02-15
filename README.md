# Workshop 2 - Step 5

Stop the server (Ctrl+c), check out the step5 branch, and then start the server again.

```bash
git checkout -f step5
node server
```

If needed, start the NPM runner in another terminal.
```bash
npm start
```

###Summary###
Now that we have familiarized ourselves with developming an Angular app, let's create a real time chat client. Between the first 4 steps, you have all of the tools to accomplish this task.

Upon completion, you should be able to view the name and message content for all posted messages in the Firebase chat instance. Additionally, there should be a form to input the name and message. After clicking to submit the chat message, the name should remain, but the chat message in the input element should be cleared.

For reference, here is the link to the [Firebase instance for chat](https://material-sandbox.firebaseio.com/chat).

###Instructions###
1. Create chat.html and chat.js files
2. Add a chat controller module to app.js
3. Update appRouter.js to add a chat state
4. Using the 'chat' Firebase path, get and display the chat messages array from Firebase
5. Add a form to post new messages to the chat table
6. Have the form keep the name but clear the typed message after a submit.
