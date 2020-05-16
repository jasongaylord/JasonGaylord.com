---
title: Building VB6 Applications On Windows XP SP2
author: Jason Gaylord
date: 2006-05-10 10:57:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/05/10/445976.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/367D3CS
---

Windows XP SP2 now provides more detailed error messages when processing unhandled exceptions. Yesterday I was rebuilding a VB6 application that would not error on 3 of our PCs, but would on others. I knew that the error message had to be something that would stick out like a sore thumb. The error message looked like this:  
  
```xml
<?xml version="1.0" encoding="UTF-16"?>
<DATABASE>
<EXE NAME="MyPrime.exe" FILTER="GRABMI_FILTER_PRIVACY">
    <MATCHING_FILE NAME="MyPrime.exe" SIZE="2510848" CHECKSUM="0x7605131D" BIN_FILE_VERSION="3.0.0.14" BIN_PRODUCT_VERSION="3.0.0.14" PRODUCT_VERSION="3.00.0014" COMPANY_NAME="United One Resources" PRODUCT_NAME="Real Estate Services Application" FILE_VERSION="3.00.0014" ORIGINAL_FILENAME="MyPrime.exe" INTERNAL_NAME="MyPrime" VERFILEDATEHI="0x0" VERFILEDATELO="0x0" VERFILEOS="0x4" VERFILETYPE="0x1" MODULE_TYPE="WIN32" PE_CHECKSUM="0x270F87" LINKER_VERSION="0x30000" UPTO_BIN_FILE_VERSION="3.0.0.14" UPTO_BIN_PRODUCT_VERSION="3.0.0.14" LINK_DATE="05/05/2006 16:10:08" UPTO_LINK_DATE="05/05/2006 16:10:08" VER_LANGUAGE="English (United States) [0x409]" />
</EXE>
<EXE NAME="kernel32.dll" FILTER="GRABMI_FILTER_THISFILEONLY">
    <MATCHING_FILE NAME="kernel32.dll" SIZE="983552" CHECKSUM="0x4CE79457" BIN_FILE_VERSION="5.1.2600.2180" BIN_PRODUCT_VERSION="5.1.2600.2180" PRODUCT_VERSION="5.1.2600.2180" FILE_DESCRIPTION="Windows NT BASE API Client DLL" COMPANY_NAME="Microsoft Corporation" PRODUCT_NAME="Microsoft® Windows® Operating System" FILE_VERSION="5.1.2600.2180 (xpsp_sp2_rtm.040803-2158)" ORIGINAL_FILENAME="kernel32" INTERNAL_NAME="kernel32" LEGAL_COPYRIGHT="© Microsoft Corporation. All rights reserved." VERFILEDATEHI="0x0" VERFILEDATELO="0x0" VERFILEOS="0x40004" VERFILETYPE="0x2" MODULE_TYPE="WIN32" PE_CHECKSUM="0xFF848" LINKER_VERSION="0x50001" UPTO_BIN_FILE_VERSION="5.1.2600.2180" UPTO_BIN_PRODUCT_VERSION="5.1.2600.2180" LINK_DATE="08/04/2004 07:56:36" UPTO_LINK_DATE="08/04/2004 07:56:36" VER_LANGUAGE="English (United States) [0x409]" />
</EXE>
</DATABASE>
```
  
After doing some digging in the other applications, I was able to determine that the error surrounded the Adobe Type Library (Acrobat.tlb) version that was referenced in the application. On my PC, it was version 7.0 even though I had 5.0 and 7.0 installed. Once I changed the version and compiled, the other PCs with version 5.0 registered worked fine with no errors.  
  
This was one of those things that you might not check if you only build every few months.