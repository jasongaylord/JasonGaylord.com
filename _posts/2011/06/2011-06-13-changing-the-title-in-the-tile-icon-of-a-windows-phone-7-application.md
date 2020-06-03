---
title: Changing the Title in the Tile Icon of a Windows Phone 7 Application
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2011/06/13/changing-the-title-in-the-tile-icon-of-a-windows-phone-7-application/"
date: 2011-06-13
categories: [archive]
tags: [archive]
bitly: https://jasong.us/36QMzKX
---

If you've built a Windows Phone 7 application, you may have noticed that if you pin your application to the Start menu, the name of your application appears in the lower, left-hand side of the tile. You can change the text in this tile, by right-clicking on the application and going to properties. On the Application menu, modify the Tile title properties. A sample of this area is displayed below:

[![tile_options](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Removing-the-Title-in-the-Tile-Icon-of-a_11B05/tile_options_thumb.png "tile_options")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Removing-the-Title-in-the-Tile-Icon-of-a_11B05/tile_options_2.png)

You'll notice that the title text is blank in my screenshot. To accomplish this, you'll need to perform a little magic. If you wipe this out in Visual Studio 2010, you'll receive the error message stating "An empty string is not allowed for Title" like the following:

[![error](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Removing-the-Title-in-the-Tile-Icon-of-a_11B05/error_thumb.png "error")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Removing-the-Title-in-the-Tile-Icon-of-a_11B05/error_2.png)

However, you can blank out this field my modifying the WMAppManifest.xml file located in your project's properties folder. Modify the section of this file that is highlighted below:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Deployment xmlns="http://schemas.microsoft.com/windowsphone/2009/deployment" AppPlatformVersion="7.0">
    ...
    <Tokens>
      <PrimaryToken TokenID="BarefootToken" TaskName="\_default">
        <TemplateType5>
          <BackgroundImageURI IsRelative="true" IsResource="false">Application\_TileImage\_173x173.png</BackgroundImageURI>
          <Count>0</Count>
          <Title></Title>
        </TemplateType5>
      </PrimaryToken>
    </Tokens>
  </App>
</Deployment>
```

This will allow your title to be blank and also allow your tile to appear on your device without the title.