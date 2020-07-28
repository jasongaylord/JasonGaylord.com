---
title: Migrating Exchange 2003 Public Folders
author: Jason Gaylord
date: 2005-06-22 14:21:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2005/06/22/Exchange-2003-Public-Folders-Local-Modified-Status.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://jasong.us/2EtwFMo
---

We came across an issue within the past few months when we attempted to setup a new Exchange 2003 server and replicate the public folders. We tried every possible way to replicate the folders. However, they never came across to the new server. We noticed that the status showed the current box as 'In Sync' while the new box showed 'Local Modified'. After numerous attempts to get this working, we consulted with Microsoft guru's. They attempted to replicate the folders as well. It still did not work. So, we had two options. First, we could attempt to debug the issue; which could take weeks. Or, we could copy over the entire Public Folder tree and drop our current server off the network; which we planned on doing anyway. So, we went with Option 2.  
  
On the existing server, we drilled down from Administrative Groups to Public Folders. We right-clicked on the node and chose Dismount. Then at a command prompt we typed `eseutil /mh` and the path of the public folder .edb file. This allowed us to check for consistency. Once we found that it was OK, we copied the pub.edb and pub.stm files to a temporary directory on the new server. On the new server, we dismounted the public folders. Then we right-clicked and went into the properties. On the database tab, we checked the box to overwrite the database. Then pressed apply and OK. We then copied the new files to the new server's `mdbdata` folder, replacing the old files. Finally, we mounted the folders on both servers. The old server could have been taken offline at this point.  
  
The stuff they don't include in documentation!!! ;)