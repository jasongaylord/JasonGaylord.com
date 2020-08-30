---
title: Using VSCode to Build and Run an Angular Application
author: Jason Gaylord
cloudscribe_id: "75b13282-ead5-4865-9ea6-1f325d3473ea"
cloudscribe_path: "/blog/using-vscode-to-build-and-run-an-angular-application"
permalink: /blog/using-vscode-to-build-and-run-an-angular-application
date: 2020-04-25
categories: [angular,dev]
tags:  [angular,dev]
bitly: https://jasong.us/2S1v7Nz
image: https://cdn.jasongaylord.com/images/2020/04/25/vscode.png
---

<img src="https://cdn.jasongaylord.com/images/2020/04/25/vscode.png" alt="VS Code" style="width: 400px;" />

There are many editors you can choose when building and running an Angular application. As time passes, my favorite editor for nearly all development is becoming Visual Studio Code (VSCode). [VSCode](https://jasong.us/code) is a lightweight editor built by Microsoft.  It runs on nearly any platform and can support development from nearly any language. You can download the source code and build VSCode yourself by visiting [https://github.com/Microsoft/vscode/](https://jasong.us/2Kvk4rE). You can also learn more about VSCode by visiting [code.visualstudio.com](https://jasong.us/code).

After you have VSCode installed, open VSCode and open the folder where you created your Angular application. Your explorer pane should now look like this:

![https://cdn.jasongaylord.com/images/2020/04/25/filestructure.jpg](https://cdn.jasongaylord.com/images/2020/04/25/filestructure.jpg)

One of the first tasks we must do is to install all of the packages required by Angular and defined in the package.json file. To do this, we'll open up a command window in VSCode. Note, the watermark on the background of VSCode contains some quick tips to find features. For instance, using `Ctrl` + ``` opens up a terminal window.

![https://cdn.jasongaylord.com/images/2020/04/25/Watermark.jpg](https://cdn.jasongaylord.com/images/2020/04/25/Watermark.jpg)

Once our terminal opens, type `npm install` and hit enter to install the packages. This will take a few moments. At the end, you'll receive a message showing how many packages were installed and the amount of time it took to install. You may also notice two other messages. The first will tell you how many of the package owners are looking for donations to support their open source causes and the second lists package vulnerabilities. For the Angular packages, we can ignore these. 

Now that we have installed the packages, you may be wondering where they are. The packages are contained in the [node](https://jasong.us/2xroU6F)-modules folder as shown in the image at the top. Notice how it is greyed out. This is letting me know that this folder will not be checked into source control. The reason for this is that the folder is quite large and anyone obtaining the source code will likely install or update the packages on their machine anyway by running the `npm install` command.

Next, we'll open the package.json file. In there, I'll find the script called start. I'll modify the script definition to include the `-o` switch. This switch will not only run the built in web server, but will also open the application in the default browser.  Save the file after you make your changes. You'll notice that the file name will now change color and will contain an M designation to the right of the file name. This means the file has been modified and is ready for your change to be saved back to the local git repository. 

![https://cdn.jasongaylord.com/images/2020/04/25/package-json-modified.jpg](https://cdn.jasongaylord.com/images/2020/04/25/package-json-modified.jpg)

You can navigate to the git window, enter a comment for the commit such as "Added the –o switch to open the default browser." and click the checkmark icon or press `Ctrl` + `Enter` to save your commit.

![https://cdn.jasongaylord.com/images/2020/04/25/git-window.jpg](https://cdn.jasongaylord.com/images/2020/04/25/git-window.jpg)

Then, back in the terminal, type `npm start`. Remember, we just updated this script so our application should build, which may take a minute or two the first time we do it, and a browser window should open. 

![https://cdn.jasongaylord.com/images/2020/04/25/angular-app-running.jpg](https://cdn.jasongaylord.com/images/2020/04/25/angular-app-running.jpg)

We can then go back to VSCode, open the app.component.html file from the `src > app` folders, and replace the HTML with 

```html
<h3>{{title}}</h3>
```

Notice, the browser automatically reflects the change.

![https://cdn.jasongaylord.com/images/2020/04/25/vscode-live-editing.jpg](https://cdn.jasongaylord.com/images/2020/04/25/vscode-live-editing.jpg)

When we close the browser, the Angular web server is still running. So, within the terminal, we'll need to press `Ctrl` + `C` and then press `Y` to confirm. This will allow the web server to be terminated.

## Summary
During this walk through, we opened an Angular application using VSCode. We made a minor code change and committed that code change back to our local repository. We then built and served the application in our default browser.