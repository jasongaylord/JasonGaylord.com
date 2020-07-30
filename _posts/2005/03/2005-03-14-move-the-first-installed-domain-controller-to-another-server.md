---
title: Move the First Installed 2003 Domain Controller/Exchange Server to Another Server
author: Jason Gaylord
date: 2005-03-14 10:46:00
windowsadvice-link: http://windowsadvice.com/blogs/jason_n_gaylord/archive/2005/03/14/Migrating-Windows-Server-And-Exchange-To-Another-Server.aspx
categories: [windowsadvice-blog]
tags: [archive]
bitly: https://jasong.us/3f8NF7p
---

Isn't it fun when it comes time to upgrading server hardware, especially when you need to upgrade your first installed domain controller and exchange server to a new server? Even though its not a guaranteed flawless procedure, Microsoft has done a great job improving the migration in Server 2003. In most scenarios, you'll want to keep the same server name. So, you'll need an intermediate server to assist with the process.  
  
1.  Determine which server you'll use as an intermediate server. Set the server up with Windows Server 2003 and Exchange 2003 (if needed).
2.  Migrate the Exchange 2003 mailboxes from the existing domain controller to the temporary domain controller ([http://support.microsoft.com/default.aspx?scid=kb;en-us;821829](http://support.microsoft.com/default.aspx?scid=kb;en-us;821829))
3.  After all mailboxes are moved over, begin transferring the domain controller and Active Directory roles ([http://support.microsoft.com/default.aspx?scid=kb;en-us;255690](http://support.microsoft.com/default.aspx?scid=kb;en-us;255690))
4.  After all roles are migrated to the temporary server, migrate the Exchange server roles ([http://support.microsoft.com/default.aspx?scid=kb;en-us;152960](http://support.microsoft.com/default.aspx?scid=kb;en-us;152960))
5.  Test to be sure client computers can connect to the temporary server. If they can, repeat these 5 steps again, but with the temporary server and the new domain controller.

If you need to uninstall Exchange for any reason, use the following Microsoft Knowledge base article: [http://support.microsoft.com/default.aspx?scid=kb;en-us;307917](http://support.microsoft.com/default.aspx?scid=kb;en-us;307917).  
  
\*\* This post has been provided as a guide and is not a complete procedure for migrating your first installed domain controller. It is recommended that you still contact Microsoft or a consultant to assist with the migration. \*\*