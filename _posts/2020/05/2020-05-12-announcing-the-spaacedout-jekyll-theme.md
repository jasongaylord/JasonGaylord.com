---
title: Announcing the SpaacedOut Jekyll Theme
author: Jason Gaylord
cloudscribe_id: "3a18e70a-6ec5-4c7e-95a4-6b0b0870be58"
cloudscribe_path: "/blog/announcing-the-spaacedout-jekyll-theme"
permalink: /blog/announcing-the-spaacedout-jekyll-theme
date: 2020-05-12
categories: [css,development,jekyll,web]
tags:  [css,development,jekyll,web]
bitly: https://jasong.us/3fBMNtn
---

For the past several weeks I've been working on my first [Jekyll](https://jasong.us/35iEvSm) theme called [SpaacedOut](https://jasong.us/2ywUm3C). Jekyll themes are also used by GitHub Pages as GitHub Pages are actually a Jekyll site under the hood. The theme is responsive and contains a basic look and feel with a menu on the left in a desktop view and the menu collapsed, but available as a slide out, in a mobile view. This will give you an idea of what the theme looks like:

[![SpaacedOut Theme Desktop View](https://cdn.jasongaylord.com/images/2020/05/12/SpaacedOut-Theme.jpg)](https://cdn.jasongaylord.com/images/2020/05/12/SpaacedOut-Theme.jpg)

There are two ways to use this theme:

1.  [Install using the spaacedout gem](#install-using-the-spaacedout-gem)
2.  [Install using it as a remote theme](#install-using-remote-theme)

## Install Using the SpaacedOut Gem
[![Gem Version](https://badge.fury.io/rb/spaacedout.svg)](https://jasong.us/3bp45GJ)

I have created this theme as a Ruby gem. This means you can use the gem using the bundler from the command line. To use the gem, it's quite simple. In your Jekyll site, add a line to your `GEMFILE` that looks like this:

```shell
gem 'spaacedout', '~> 1.0', '>= 1.0.1'`
```

For the most updated version of this, although the above will pull the latest, copy the code found at [https://rubygems.org/gems/spaacedout](https://jasong.us/2LgXFi7) in the right-side menu under `GEMFILE`.

Next, update your `_config.yml` to include the [SpaacedOut](https://jasong.us/2ywUm3C) theme like so:

```yaml
theme: spaacedout
```

If you have another theme or a remote theme, you'll want to comment that line out using the hash bang (`#`). 

Next, run the bundler to update your packages. You can do this by running the following command:

```shell
bundle install
```

Finally, you should be set to use the new theme. Be sure to either rebuild your Jekyll site locally or push to GitHub pages to rebuild your application.  

## Install Using Remote Theme
If you can use the remote theme, this is much, much easier. The reason for this is that you don't have to mess with versions as you'll always be pulling down the latest. However, you're also at the mercy of the developer, me in this case, that I won't push something up that will break your site. Since I'm using remote theme as well, I'll be sure I minimize disruption as much as possible and will keep the theme readme up to date with any breaking changes. As of now, I hope to never cause breaking changes, but as time passes, it may be possible.

If you are using GitHub pages, there's very little you need to do to get started using [SpaacedOut](https://jasong.us/2ywUm3C) as a remote theme. You can skip past the next two step and proceed from there. However, if you are using Jekyll, there's one initial step you'll need to perform. 

If you are hosting Jekyll elsewhere, you'll need to install the remote theme gem. This can be accomplished by modifying your `GEMFILE` to include the following line:

```shell
gem "jekyll-remote-theme"
```

You'll also need to install this new gem by running the bundler locally:

```shell
bundle install
```

The third step in this process is to ensure that your `_config.yml` has the following in the plugins section. To ensure that your configuration pulls together all of the settings that are used in the theme, I highly recommend copying the `_config.yml` file from the [SpaacedOut repository here](https://jasong.us/3fqiwO2).

```yaml
plugins:
  - jekyll-avatar
  - jekyll-feed
  - jekyll-paginate
  - jekyll-remote-theme
  - jekyll-seo-tag
  - jekyll-sitemap
```

Finally, update your `_config.yml` to include the remote theme like below:

```yaml
remote_theme: jasongaylord/SpaacedOut
```

As I mentioned in the third step, if you [copy the config from the theme](https://jasong.us/3fqiwO2), you won't have to perform any of these steps. This will all just work.

## Feedback
If you have any feedback for me on the theme, notice any bugs, or want to contribute, I'd like to hear from you. Please submit a comment here. Pull requests are welcome so if you find something that needs improving, I'd be happy to review the PR. [Fork](https://jasong.us/2ywUm3C) the theme to get started.