---
title: "SOLVED: The type or namespace name 'record' could not be found"
author: Jason Gaylord
date: 2020-11-06
categories: [dev,dotnet,tip]
tags:  [dev,dotnet,tip]
post-number: 1095
image: https://cdn.jasongaylord.com/images/2020/11/06/type-namespace-record-not-found-error.jpg
bitly: https://jasong.us/3jZuZcC
---

https://www.jasongaylord.com/blog/2020/11/06/type-namespace-record-init-could-not-be-found

I was recently working with [Hot Chocolate](https://jasong.us/3oRfFlT) and used the new [C# 9.0 `record` types](https://jasong.us/3etWx8L). At the time, I still had an older version of .NET 5.0 installed. When compiling, I was receiving the following error:

```shell
error CS0246: The type or namespace name 'record' could not be found (are you missing a using directive or assembly reference?)
```

{% include open-thumbnail.html path="2020/11/06/type-namespace-record-not-found-error.jpg" alt="The type or namespace name 'record' could not be found (are you missing a using directive or assembly reference?" %}

I also notice the following exception when debugging in VS Code:

```shell
Predefined type 'System.Runtime.CompilerServices.IsExternalInit' is not defined or imported
```

{% include open-thumbnail.html path="2020/11/06/isexternalinit-not-defined-or-imported.jpg" alt="Predefined type 'System.Runtime.CompilerServices.IsExternalInit' is not defined or imported" %}

This lead me to search for this error online. During an earlier build of .NET 5.0, both the `record` type as well as [`init` setters](https://jasong.us/34VgRwy) were accidentally unavailable as the `IsExternalInit` class was set as `static` instead of `sealed`. This is [explained in issue 37763](https://jasong.us/3oWN6mZ). Luckily, by removing the old .NET 5.0 SDK and [installing the new version](https://jasong.us/2zXE2ty) solved this issue. 