---
title: Creating a Jekyll Theme from Windows
author: Jason Gaylord
cloudscribe_id: "d5b26d93-3f81-49e2-820d-dda23f310ab1"
cloudscribe_path: "/blog/creating-a-jekyll-theme-from-windows"
permalink: /blog/creating-a-jekyll-theme-from-windows
date: 2020-05-04
categories: [dev,jekyll]
tags:  [dev,jekyll]
bitly: https://jasong.us/35luIer
---

[Static content generators](https://jasong.us/3f5KGxx) are becoming more and more popular as there's a drive to deliver content as quickly as possible from versioned source code to the browser. [Jekyll](https://jasong.us/35iEvSm) is a static content generator that is written in Ruby and available as a Ruby Gem. Jekyll can be executed locally, on a server, within a cloud service, or within GitHub. Within this post, you'll learn how to create a Jekyll theme using a Windows based PC. While the steps are the same if you are using a Mac or Linux machine, there are a few subtle differences for Windows such as the way you get started. Jekyll Themes are actually Ruby Gems. Wait! You've never created a Ruby Gem? Neither have I. We'll go through this process together.

## Prerequisites
There are a few requirements to get started.

1. **Ruby** – You'll need to grab [Ruby](https://jasong.us/2VP3pFU). The Jekyll website states that version 2.5 or above is needed, but I tend to ensure I have the latest. On Windows, you'll install Ruby plus the Devkit using [https://rubyinstaller.org/downloads/](https://jasong.us/3bSPR1Z). You can find out what version you have by running `ruby -v` from a command line.
2. **RubyGems** – You'll need to have [RubyGems](https://jasong.us/2VPdEKm). You can check if you have it installed by running `gem -v` from a command line.
3. **Jekyll** – You'll need to install Jekyll. However, to do this, you need to have a new command line open to ensure that Ruby has been added to the `PATH` environment variable. To install Jekyll, run `gem install jekyll bundler` from the new command line. You'll know the process was successful if you see the version returned from running `jekyll -v`.

Awesome! At this point, you should have a Ruby environment and Jekyll installed as well.

## Create a Jekyll Theme
I normally like to create a brand new Git repository right from the start. However, Jekyll will do this for us when we create our new theme. So, let's navigate to the folder that we'd like to place our new Git repository that will house Jekyll. We'll do this inside of our command prompt. I have a habit of creating a folder on my local `C:` drive called Repos and cloning and creating repositories in that folder. I'll navigate to `C:\Repos` in my command prompt. For these purposes, I'm going to use the name Spaaced. Type `jekyll new-theme Spaaced` to create your structure for your Jekyll theme.

![https://cdn.jasongaylord.com/images/2020/05/04/Jekyll-New-Theme-Command.jpg](https://cdn.jasongaylord.com/images/2020/05/04/Jekyll-New-Theme-Command.jpg)

You'll notice that Jekyll will respond with a message to read the README.md file to get started. Open that file in your favorite Markdown editor. I happen to use [Visual Studio Code](https://jasong.us/code) as my preferred editor. In fact, I won't just open that file, I'll open the entire folder in VS Code. 

The README.md will explain how to install your Jekyll theme in your local Jekyll site. However, did you know that if you host the repository on something such as GitHub and use GitHub pages, you can take advantage of the remote-theme gem. What's this gem, you ask? It's a plugin for Jekyll that allows your Jekyll site to connect to any public GitHub hosted theme (or repository). You can find out more about the jekyll-remote-theme gem by visiting [https://github.com/benbalter/jekyll-remote-theme](https://jasong.us/3d65jIj). 

We'll create a basic theme below. However, from here, you should be set to start updating your theme. Be sure to update the README.md file to instruct others about your theme and how to use it. If you're struggling to get started with the layouts, includes, and other items, I'd recommend looking at another theme for ideas and inspiration. The following sites provide Jekyll themes including links to their source:

- [JAMstack Themes](https://jasong.us/3aR5c1x "https://jasong.us/3aR5c1x")
- [Jekyll-Themes.com](https://jasong.us/2YmuUbU "https://jasong.us/2YmuUbU")

## Testing Your Theme
We'll want to start adding a very basic theme and test it locally. So, I performed the same actions above, but instead of the Spaaced theme, I decided to use a new theme called BasicTheme. If you want to see the full source of this theme, visit the repository on GitHub at [https://github.com/jasongaylord/BasicTheme](https://jasong.us/3bSlubV). The idea is to provide a very basic layout with an HTML structure, a header, and some basic styles. Once I created the BasicTheme as we did above, I headed to GitHub and created a new repository called BasicTheme. I then navigated to the BasicTheme folder on my machine and ran a series of commands to send the theme to GitHub.

```shell
git remote add origin https://github.com/jasongaylord/BasicTheme.git
git add .
git commit -m "Initial commit."
git push -u origin master
```

At this point, our initial theme has been pushed to GitHub. We can now test this theme out within a local Jekyll site. So again, in the command line, I'll navigate back to C:\Repos and create a new Jekyll site by executing:

`jekyll new TestJekyllSite`

TestJekyllSite is just the name I decided to call my new site.  Next, I'll open the TestJekyllSite in VS Code. Once it opens, in the Explorer pane, I'll find `GEMFILE`. The `GEMFILE `contains the list of gems that will be used by the Ruby application, in this case, Jekyll and the Jekyll plugins. In the Jekyll Plugins group at around link 19, I'll add a new entry for the `jekyll-remote-theme` that will look like this:

![https://cdn.jasongaylord.com/images/2020/05/04/jekyll-remote-theme-gem.jpg](https://cdn.jasongaylord.com/images/2020/05/04/jekyll-remote-theme-gem.jpg)

Next, open the `_config.yml` YAML file in the Explorer pane. Remove the line that reads `theme: minima`. Replace that line with a line that reads `remote_theme: jasongaylord/BasicTheme`. Replace `jasongaylord` with your GitHub username and `BasicTheme` with the name of your theme. 

Now that we've prepared our Jekyll site for build, let's go back to the command line and run the following two commands:

```shell
jekyll build
jekyll serve
```

You'll notice that after the serve command executes, you'll receive a URL like so:

![https://cdn.jasongaylord.com/images/2020/05/04/jekyll-serve-01.jpg](https://cdn.jasongaylord.com/images/2020/05/04/jekyll-serve-01.jpg)

Navigate to that URL and be prepared to be amazed. Wait! The page is blank? That's because of two things. Let's go back to our Jekyll file so we can observe. Don't close out of the browser just yet.

Open up the index.markdown file in the Explorer pane. This is our entry file for our test site. You'll notice that it references the home Layout file. We haven't explored the layouts in our theme yet, but for now we only have a default, post, and page layout. Let's replace home with default for now. Below the YAML header at the top of the file, the area that has three dashes (---), add a new line of text that simply reads 'Hello World!'. Save the file and navigate back to the browser. Refresh and you'll notice your new file being served.

Now that we've tested our theme and building a sample Jekyll site, let's start analyzing our theme a little bit more.

## Adding Includes
Include files are files that we'll "include" in another area of the website. Think of includes as content that can be shared throughout pages and posts on your site. They can contain dynamic content that is passed as a parameter. A great use of an include would be a header or footer for a website. I'll add just one include and call it `head.html`. The content of the file will look like this:

```html
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Mate|Open+Sans" rel="stylesheet">
  <link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">
</head>
```

This file is fairly self explanatory as it will contain the head section of my HTML file. The `&#123;&#123; .. &#125;&#125;` value will be injected into this include at runtime.

## Adding Layouts
The `default.html` file contained in the Layouts folder should be considered the default template to be used for content within the site. Typically, this file will contain the HTML header and body for your site. Remember, we can include files from our includes folder as mentioned above.

You'll notice that there are two other files in the Layouts folder: `page.html` and `post.html`. The page file is used as the primary layout for any static pages. The post file is used as the primary layout for any blog posts. In both of these pages, you'll see that they inherit from `default.html`.

I'll update the `default.html` file so that it looks similar to this:

```html
<!DOCTYPE html>

<html lang="en">
  {%- include head.html -%}
  <body>
    <main class="container">
      <section class="about">
        <h2>{{ site.title }}</h2>
      </section>
      <section class="content">
        {{ content }}
      </section>
    </main>
  </body>
</html>
```

In this case, we're including head.html within the HTML. We're also pulling in a few variables.

## Adding Style
We can add style a few different ways. One way we can add style is by adding CSS files directly into the assets folder and referencing those files in the `head.html` file like above. However, Jekyll also includes SASS support by default. So, we'll start by adding a very basic `style.scss `style.scss file to the root of the assets directory. The purpose of this file is just to import our SASS. This will compile to the CSS file location referenced in the `head.html` file.

```markdown
---
---
@import "default";
```

Next, we'll add a `default.scss` file to the SASS folder. The contents of this SASS file, for now, will be static in nature. We can add the dynamic style rules at a later time.

```css
body { font-family: Mate; margin: 0; padding: 0; }
h2, h3 { font-family: "Open Sans"; }
h3 { margin: 0; padding: 1em 0; }
.about { background-color: #336699; display: block; padding: 20px; text-align: center; color: #fff; }
.content { background-color: #f6f6f6; color: #333; padding: 20px; }
```

Next, let's commit and push our changes. We'll need to stop our Jekyll server by pressing `Ctrl + C` and hitting `Y`. Let's rerun the build and serve process and navigate back to our website. We should notice a new look to our site:

![https://cdn.jasongaylord.com/images/2020/05/04/BasicTheme-Snapshot.jpg](https://cdn.jasongaylord.com/images/2020/05/04/BasicTheme-Snapshot.jpg)

## Updating the .gemspec, README.md, and more
At this point we're on our way to create a nice looking Jekyll theme. Of course we'll need to go back and update the includes, layouts, and SASS to provide our own look and feel for our theme. However, we cannot forget to perform the other due diligence of updating our `.gemspec `and `README.md `files. These files will help others benefit from the remote theme we are building. We could also take this a step further and build our theme as a gem accessible from the RubyGem library. The possibilities are really endless. 

## Recap
Hopefully you have a good idea how to head down the path of creating your first Jekyll theme. I'm interested in hearing what themes you've built. Use the comments found below to provide feedback and let me know what themes you've built so I can check them out myself.