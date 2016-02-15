# Workshop 2 - Step 6

Stop the server (Ctrl+c), check out the step5 branch, and then start the server again.

```bash
git checkout -f step6
node server
```

If needed, start the NPM runner in another terminal.
```bash
npm start
```

###Summary###
The final step in the workshop is to add [Angular Material](https://material.angularjs.org) markup. Based on their website, "Angular Material is the reference implementation of [Google's Material Design specification](https://www.google.com/design/spec/material-design/introduction.html). Then Material Design is a visual language to allow for a unified experience across platforms and design sizes. Effectively specifications to design a response website. Note that a responsive website must incorporate touch, voice, mouse, and keyboard inputs. There is also a subset focusing on [Accessible Rich Internet Applications (ARIA)](https://en.wikipedia.org/wiki/WAI-ARIA) which is a spec for designing webpages accessible to all users, including those with visual, audio, and motor skill impairments or disabilities.

Angular Material only recently released Version 1.0 so many of its components are still under development. However many shops have many utilizing Angular Material while it was still in beta.

This final step is focused on browsing the Angular Material documentation to find appropriate directives and services to incorporate into our application to make it responsive.

###Instructions###
Chat
1. Replace Name input element with a dropdown selector to choose users from the Users Firebase instance
2. Update the list, form, and buttons to be responsive

User List + New User
1. Where applicable, update the list, buttons, form to be responsive

Index
1. Replace the Chat, User List, New User links with tabs

###Epilogue###
When you have completed the above instructions or you have reached a stopping point, we can now conduct a quick Git + Github exercise.

1. Create a Github [issue](https://github.com/addevonly/workshop2-angular-material/issues/new). Title it "Create [your name]'s workshop branch". Submit the issue.
2. While you are in the step 6 branch (or move to the step6 branch if you are not already), create a new branch named after yourself. The -b flag creates a new branch and the checkout command takes you to that newly created branch.
 *```git checkout -b [your name]```
3. If you are satisfied with your changes, add your changes. The period after the git add includes all added/deleted/modified files.
 * ```git add .```
4. Now we want to commit our changes. To tie our commit to the opened issue, make sure to include "Fixes #[issue #] where [issue #] is the Github issue number you created. When we push to the remote server in the final step, the opened issue will automatically be closed. 
 * ```git commit -m "Fixes #[issue #] My completed workshop with Angular Material markup"```
5. Now do a push from your repository to the newly created branch. The new branch will now appear in Github
 * ```git push origin [your branch]```
