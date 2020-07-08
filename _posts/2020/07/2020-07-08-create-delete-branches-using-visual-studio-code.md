---
title: How to Create and Delete Branches in Visual Studio Code
author: Jason Gaylord
date: 2020-07-08
categories: [development,devops,visual-studio]
tags:  [development,devops,visual-studio]
post-number: 964
image: https://cdn.jasongaylord.com/images/2020/07/08/vscode-keyboard-shortcut-delete-branch.jpg
bitly: https://jasong.us/2NWJhgq
---

When checking in code into source control, especially in a continuous integration and deployment process, it's best to use pull requests. Using pull requests allows others, including virtual bots, to review your code and to ensure there are no build issues. I use this process frequently within GitHub when building my personal website. 

## Creating Branches
Creating branches in Visual Studio Code (VS Code) is quite easy. You can either click the branch in the lower, left-hand corner of the screen:

{% include open-thumbnail.html path="2020/07/08/vscode-click-branch.jpg" alt="Click the branch in VS Code" %}

or, you can create a new keybinding and map directly to the _Create Branch_ action of Git. You can do this by opening the _Keyboard Shortcuts_ menu in **File > Preferences > Keyboard Shortcuts** in Windows or **Code > Preferences > Keyboard Shortcuts** in macOS. You can also use the keyboard shortcut (`Ctrl+K Ctrl+S`) in Windows to open the shortcut menu. Next, search for branch until you have a filtered list:

{% include open-thumbnail.html path="2020/07/08/vscode-keyboard-shortcut-branch-filter.jpg" alt="Search 'Branch' in the Keyboard Shortcut window" %}

Next, select the command and choose to add a keybinding. I typically use `Ctrl+B Ctrl+C` for creating branches:

{% include open-thumbnail.html path="2020/07/08/vscode-keyboard-shortcut-create-branch.jpg" alt="Add a keybinding for the git create branch command" %}

Whichever method you choose above, you'll be prompted to create a branch in VS Code through a dialogue like the following:

{% include open-thumbnail.html path="2020/07/08/vscode-create-branch.jpg" alt="Name your new branch" %}

You'll now notice your new branch in the bottom, left-hand corner of the screen. However, your source code provider, such as GitHub, is still unaware of the new branch. To create the new branch on the origin and add the remote link between your local branch and the branch at the origin, flip over to the Source Control (`Ctrl+Shift+G`) window. Click the ellipsis icon at the top to expand the menu and then click to _Publish Branch_. 

{% include open-thumbnail.html path="2020/07/08/vscode-publish-branch.jpg" alt="Publish your branch" %}

You now have created your branch locally and published a copy of the branch, not your changes within your branch just yet, to the remote source control system. You can continue to check items in and push your changes. Just note that your changes will be pushed to the branch you currently have checked out.

## Deleting Branches
As of this post, deleting branches is not quite as elegant. There are two considerations when deleting branches. First, we need to delete the pointers to the remote branches. Even when they are deleted on the remote server, using a fetch through VS Code, they are not deleted. Second, we need to delete the local branches.

#### Deleting Remote Branch Pointers
The easiest way to do this is by running a simple command. In Visual Studio Code, navigate to a terminal window, and run the following command:

```shell
git fetch --prune
```

As I [mentioned in a previous post](https://jasong.us/3f61JiG), if you are using GitHub's Pull Request feature, you can also delete the branch through GitHub's user interface online. I prefer this method, but if I need to leave a branch around, I'll resort to the command above.

#### Deleted Local Branches
To delete local branches, there are two options. We can either use the command `git branch -d LOCAL_BRANCH_NAME` replacing `LOCAL_BRANCH_NAME` with the name of the local branch. Or, we can update VS Code's keyboard shortcuts, as I mentioned above for creating new branches, to add a new key binding. I'll choose the latter repeating the step to open the keyboard shortcut (`Ctrl+K Ctrl+S`) window, searching for branch, and updating the Delete Branch command to use `Ctrl+B Ctrl+D`.

{% include open-thumbnail.html path="2020/07/08/vscode-keyboard-shortcut-delete-branch.jpg" alt="Add a keybinding for the git delete branch command" %}

Now, when I press `Ctrl+B Ctrl+D` I can choose which branch I want to delete and delete the branch very easily.

{% include open-thumbnail.html path="2020/07/08/vscode-delete-branch.jpg" alt="Delete Branch dialogue in VS Code" %}

## Summary
During this post, we covered creating and deleting branches using Git and Visual Studio Code. We also talked about creating custom key bindings to be used as keyboard shortcuts to each.