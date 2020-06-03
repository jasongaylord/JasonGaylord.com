---
title: Web Site Performance
author: Jason Gaylord
date: 2008-09-29 11:02:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/09/29/web-site-performance.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/09/29/web-site-performance/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3eaIGmC
---

I came across a post on [StackOverflow.com regarding web site performance](http://stackoverflow.com/questions/134574/how-to-make-html-rendering-fast). Quite often you can take a look at your application and find 10 different ways to make it more efficient. Depending on your environment, you may have many different ways to increase performance. For instance, in a shared hosting environment, you'll likely be limited as to what you can do on the server, but can tweak your application appropriately.

Here are a few things I'd recommend:

1. Compress your HTML output using [built-in compression](http://www.orcsweb.com/articles/iis_compression_6.0.aspx) or third party software like [GZip](http://www.gnu.org/software/gzip/gzip.html).
2. If you are using ASP.NET, make sure you [minimize your ViewState by turning it off](http://msdn.microsoft.com/en-us/library/ms972427.aspx) for everything and then determining what items actually need it. ViewState can add quite a bit to your output and as site hits begin to add up, so won't your traffic.
3. Move your images, CSS, and JavaScript files to a [content delivery network](http://en.wikipedia.org/wiki/Content_Delivery_Network) (CDN) or sub-domain. Keep in mind that there are many parts to retrieving a site such as server through-put and bandwidth. At a minimum, you should use a sub-domain to send your files to the browser. This will allow the browser to load your page completely, even if the images, CSS, and JavaScript are not done loading. Finally, when using traffic tools, your images and other files will dominate the results. By moving your content files to another domain, you can provide better traffic reports.
4. JavaScript files should be at the bottom of your HTML output. If your JavaScript files are at the top of the page and are rather large in size, the browser will attempt to download those before continuing down the page.
5. Use a tool like [CompressJavaScript.com](http://www.compressjavascript.com/) to compress your JavaScript files. It's also a good idea to [compress your CSS](http://www.maxkiesler.com/index.php/weblog/comments/how_to_minimize_your_javascript_and_css_files_for_faster_page_loads/).

If you have any more tips, or corrections to anything that I've listed above, be sure to comment about it here.