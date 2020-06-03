---
title: Using Conditional Formatting in Microsoft Excel
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2012/06/05/using-conditional-formatting-in-microsoft-excel/"
date: 2012-06-05
categories: [archive]
tags: [archive]
bitly: https://jasong.us/36XeTeK
---

Have you ever had a spreadsheet that you'd like to apply formatting, such as highlighting a row, if a certain value was within a particular range? It's not that difficult to do. Below, I'll walk through doing this in Microsoft Excel 2003 and again in Microsoft Excel 2010. Microsoft Excel 2010 adds additional features such as including icons in the cells.

## Conditional Formatting in Microsoft Excel 2003
Let's assume we have a table that looks like the following:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_thumb.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_2.png)

We may want to highlight anything in red that is past due at least 60 days. If today's date is June 5th, 2012, we'd expect results to look like the following:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_thumb_1.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_4.png)

To accomplish this, we'll need to first highlight the ‘C' column. This will mean anytime we add anything to this column, the conditional formatting will apply. We can perform this task from a single cell to the entire sheet. In our case, we're only going to choose this column.

Once this column is chosen, we'll choose Format > Conditional Formatting. Since we'll be adding more rows later on, we'll want to create a rule that will first check for blank data. We'll add a second rule for the conditional date format. So, our rules will look like the following:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_thumb_2.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_6.png)

If we need to, we can add up to three rules per cell. If we'd like, we can also clear the rules for a set selection of cells by highlighting the cells, going to Format > Conditional Formatting, choosing the Delete button, then choosing the specific rules to remove (rules 1 – 3).

## Conditional Formatting in Microsoft Excel 2010
The process is similar in Microsoft Excel 2010. Let's assume we have a table that appears like the following:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_thumb_3.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_8.png)

We'll apply conditional formatting to the column ‘C' here as well. However, the traditional menu was replaced with a ribbon menu in Office 2010. So, we'll actually find the Conditional Formatting option in the main ribbon such as highlighted below:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_thumb_4.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_10.png)

However, we'll see that we have many options to choose from in Excel 2010.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_thumb_5.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_12.png)

In our case, we'll use the Highlight Cells Rules > Less Than and set our value to =Now() – 30:

[![SNAGHTML4b80008](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/SNAGHTML4b80008_thumb.png "SNAGHTML4b80008")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/SNAGHTML4b80008.png)

Next, we'll add our rule to clear out the blank cells. In this case, we'll select Conditional Formatting > Highlight Cells Rules > Equal To:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_thumb_6.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_14.png)

We'll change the value to ="" and change the style to a Custom Format making the fill color and border color transparent.

In the end, we'll be left with a table that appears like the following:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_thumb_7.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Using-Conditional-Formatting-in-Microsof_D55C/image_16.png)

To delete rules in Excel 2010, Choose the Clear Rules menu option.

## Other Solutions
You may find that using conditional formatting doesn't fit your needs. What if you wanted to highlight an entire row based on the value of a certain cell? For something like this, macros do the best job.