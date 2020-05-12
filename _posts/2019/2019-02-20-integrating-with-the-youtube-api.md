---
title: Integrating with the YouTube API
author: Jason Gaylord
cloudscribe_id: "56e6e8dc-1807-4aff-b1aa-cad9a2becc90"
cloudscribe_path: "/blog/integrating-with-the-youtube-api"
permalink: /blog/integrating-with-the-youtube-api
date: 2019-02-20
categories: [development,dotnet,google]
tags:  [development,dotnet,google]
---

For some reason, over the past few years, the documentation surrounding the various Google APIs has gone downhill. So, while working on a feature for the upcoming TechBash website refresh, I shouldn't have been too surprised that the YouTube API lacked solid documentation around connecting to our TechBash YouTube channel to obtain our most recent videos that we have posted.

## Setting up Google APIs
First, we need to sign in and create a project for the Google APIs. You can do this by visiting [https://console.developers.google.com/projectcreate](https://jasong.us/2EjgbE2 "https://console.developers.google.com/projectcreate") and creating a new project. For free accounts, you can create up to 10 projects. When you are done, you should have an API key. Copy this value as you'll need it. Also, take note of the Application Name.

Next, you'll need to enable the YouTube Data API v3 by visiting [https://console.developers.google.com/apis/library/youtube.googleapis.com](https://jasong.us/2Va1glf "https://console.developers.google.com/apis/library/youtube.googleapis.com"). Once it's enabled, we'll want to go back into our credential manager, choose OAuth consent (located here: [https://console.developers.google.com/apis/credentials/consent](https://jasong.us/2BTEEOP "https://console.developers.google.com/apis/credentials/consent")), and choose Add scope. From the window, choose the appropriate scope for YouTube. I typically choose to use YouTube ReadOnly. 

We're now ready to start writing code.

## Connecting to Our Channel
Now that we have API access, the next thing we'll do is pick a language of choice and being coding. For purposes of this article, I'm using .NET Core 2.1 and C#. Add the NuGet packages `Google.Apis` and `Google.Apis.Youtube.v3`  to your project. Next, I'll setup a class to handle pulling in my latest videos. As you can see from my class below, I'll grab the latest 5 videos from my channel sorted by date in descending order. There are other options I have for querying the channel which can be found at [https://developers.google.com/youtube/v3/docs/search/list#usage](https://developers.google.com/youtube/v3/docs/search/list#usage "https://developers.google.com/youtube/v3/docs/search/list#usage"). In the snippet below, you'll want to replace the tokens identified as `{API_Key}`,` {Project}`, and `{Channel}`.

That's it to connecting to YouTube. Now, you can call your `LatestVideos` method to obtain a list of videos.