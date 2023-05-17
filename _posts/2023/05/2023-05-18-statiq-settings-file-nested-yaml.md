---
title: Nested YAML Settings in Statiq
author: Jason Gaylord
date: 2023-05-18
categories: [dev,statiq,tip]
tags: [dev,statiq,tip]
post-number: 1251
image: https://cdn.jasongaylord.com/images/2023/05/11/statiq-web.jpg
bitly: https://jasong.us/3Iget6L
---

Last week I started a [blog series](https://jasong.us/3VZBsJe) about Statiq, a static content generator written in C#. The next major post will focus on creating a Statiq theme and template.

When creating a theme or even just using Statiq, you can create a settings file many different ways. One way is to use YAML. YAML, short for _Yet Another Markup Language_, has become extremely popular over the past few years for front matter on markdown files and also for settings. Typically, the settings or data is easier to read. In fact, [this post has some front matter](https://jasong.us/3MhxN57) in YAML. If you looked at this file in GitHub, you could see that. Here's a snippet:

```yaml
title: Nested YAML Settings in Statiq
author: Jason Gaylord
date: 2023-05-18
```

Looking at this example above, you may want to have nested settings in YAML. Here's an example below:

```yaml
title: Nested YAML Settings in Statiq
author:
  firstName: Jason
  lastName: Gaylord
date: 2023-05-18
```

Using the format above, there's only a single instance of author. So, you can access this property or setting using a C# expression like this:

```csharp
string firstName = Context.GetString("author:firstName");
```

However, there are times that you may want to have multiple instances of a property. Here's a sample YAML snippet:

```yaml
title: Nested YAML Settings in Statiq
authors:
  - firstName: Jason
    lastName: Gaylord
  - firstName: Dr
    lastName: Seuss
date: 2023-05-18
```

This is a bit different. In this case, we can access a specific first name by using the collection index like so:

```csharp
string firstName = Context.GetString("author:0:firstName");
```

Hopefully this little tip helps as you read in nested settings.