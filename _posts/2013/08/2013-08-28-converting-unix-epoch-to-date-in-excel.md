---
title: Converting Unix Epoch to Date in Excel
author: Jason Gaylord
cloudscribe_id: "15799d92-45d0-42f7-b040-dc0618d7863d"
cloudscribe_path: "/blog/converting-unix-epoch-to-date-in-excel"
msmvps_path: "https://blogs.msmvps.com/jgaylord/2013/08/28/converting-unix-epoch-to-date-in-excel/"
permalink: /blog/converting-unix-epoch-to-date-in-excel
date: 2013-08-28
categories: [archive]
tags:  [archive,msoffice]
bitly: https://jasong.us/2Xpimj4
---

I ran into an interesting problem earlier today. I was using a CDR dump from our Cisco system. However, all of the datetime fields were represented as seconds. I knew right away that it used an epoch value. What I didn't know is what the originating date was. Apparently, I was correct at my first guess. I guessed that it was using the standard Unix epoch value of 1/1/1970. Many applications, such as Microsoft Excel, use 1/1/1900.

Since I wanted to represent the correct date and time in Excel, I began looking around for a formula. To my surprise, nothing exists out of the box (unless my eyes are failing me). So, I had two options. The first option I headed down had me save my spreadsheet as a macro-enabled workbook. From there, I added a formula to an empty module.

```vb
Public Function EpochConversion(timeZoneOffset As Long, myNumber As Long, myDate As Date) As Date
    EpochConversion = DateAdd("s", myNumber + (timeZoneOffset * 3600), myDate)
End Function
```

The function accepts 3 parameters: timeZoneOffset which is the offset from GMT (for example, New York City is in the Eastern Time Zone which is –5), the number of seconds, and the base date (in the event I need to use 1/1/1900 instead). So, an example use would look like this:

[![Epoch Conversion](https://cdn.jasongaylord.com/images/2013/08/28/epochconversion.png "Epoch Conversion")](https://cdn.jasongaylord.com/images/2013/08/28/epochconversion.png)

That works, but it requires that my spreadsheet is a macro-enabled workbook. I can accomplish something similar by using the following formula. This is my second option for handling the conversion.

```vb
=(((G2-(5*3600))/86400)+25569)
```

In this formula, the following values are used:

<table>
<tbody>
<tr>
<td>G2</td>
<td>The cell containing the number of seconds from epoch.</td></tr>
<tr>
<td>-</td>
<td>If you are in the western hemisphere, this would be negative. Otherwise, change this to a plus sign. This handles the offset from GMT.</td></tr>
<tr>
<td>5</td>
<td>The is the value of the timezone from GMT. It's combined with the minus sign above.</td></tr>
<tr>
<td>3600</td>
<td>The number of seconds in an hour used to assist with the timezone offset.</td></tr>
<tr>
<td>86400</td>
<td>The number of seconds in a day.</td></tr>
<tr>
<td>25569</td>
<td>The number of days since 1/1/1900 to assist Excel in the proper epoch conversion of 1/1/1970.</td></tr></tbody></table>

In either case, I'll obtain the same result.

One thing is for sure, I'm hoping that I'm retired by January 19th, 2038 so that we don't have another Y2K crisis when the 32-bit versions of epoch have overflows: [http://2038bug.com/](https://jasong.us/3fALlaA).