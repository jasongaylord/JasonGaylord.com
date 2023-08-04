---
title: Using Live SASS Compiler in VS Code
author: Jason Gaylord
date: 2023-08-07
categories: [design,dev,dotnet,tip,visual-studio]
tags:  [design,dev,dotnet,tip,visual-studio]
post-number: 1260
image: https://cdn.jasongaylord.com/images/2023/08/07/livesasscompile.jpg
bitly: https://jasong.us/3YjVtLG
---

There are times when I am writing code that I really want to compile SASS quickly and don't care to setup a worker to handle the processing. I started using the VS Code extension called [Live SASS Compiler](https://jasong.us/3qaqYLH). 

With Live SASS Compiler, you'll find a `Watch Sass` link in the notification bar in the lower, right-hand side. This will generate the *.css file and *.css.map file for your SASS file. However, if you're like me, you want to move the compiled files to a different folder. Using the settings file for this extension, you can move the files and compile both minified and non-minified files like so:

```json
{
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css"
        },
        {
            "extensionName": ".min.css",
            "format": "compressed",
            "savePath": "/wwwroot/css"
        }
    ],
    
    "liveSassCompile.settings.excludeList": [
        "**/node_modules/**",
        ".vscode/**"
    ],
    "liveSassCompile.settings.generateMap": true,
    "liveSassCompile.settings.autoprefix": [
        "> 1%",
        "last 2 versions"
    ]
}
```

The settings above are expanding the CSS in the same directory as the SASS files, but moving the compressed version to the `/wwwroot/css` folder.

To begin using this extension, you can get it from the [VS Code extension marketplace here](https://jasong.us/3qaqYLH).

{% include link-thumbnail.html path="2023/08/07/livesasscompile.jpg" alt="Live Sass Compile Settings and Files" url="https://jasong.us/3qaqYLH" %}