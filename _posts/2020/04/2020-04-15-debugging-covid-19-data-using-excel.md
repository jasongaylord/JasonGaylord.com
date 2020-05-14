---
title: Debugging COVID-19 Data Using Excel
author: Jason Gaylord
cloudscribe_id: "bf27f04c-7533-4134-9582-9a58f13209f1"
cloudscribe_path: "/blog/debugging-covid-19-data-using-excel"
permalink: /blog/debugging-covid-19-data-using-excel
date: 2020-04-15
categories: [covid19,ms-office,opinion,technology]
tags:  [covid19,ms-office,opinion,technology]
---

When looking for historical Pennsylvania COVID-19 data, I came across the [Covid Tracking](https://jasong.us/2wMcLZC) website. They cover all states and take historical screen shots of the data. The reason I wanted to get this data was to validate the common statement of "Positive Case Numbers are Decreasing." The reason I wanted this was because I believe that there is a direct correlation between the positive case numbers and the total number of tests. So, to calculate this out, I went to Microsoft Excel.

![https://cdn.jasongaylord.com/images/2020/04/15/COVID19Data.jpg](https://cdn.jasongaylord.com/images/2020/04/15/COVID19Data.jpg)

## Pulling Data Into Excel
Excel is a powerful tool. One feature that you may be unaware of is that you can pull in data from the web by letting Excel search the DOM of the webpage finding tables and allowing you to connect to the table. Then, each day, you can refresh the data without having to copy the data and reformat in Excel. You do this by going to the Data menu and choosing From Web.

![https://cdn.jasongaylord.com/images/2020/04/15/DataFromWebMenu.jpg](https://cdn.jasongaylord.com/images/2020/04/15/DataFromWebMenu.jpg)

Next, you'll enter the website address. So, in my case, I entered the full URL from the browser in the dialogue box that would appear:

![https://cdn.jasongaylord.com/images/2020/04/15/DataFromWebDialogue.jpg](https://cdn.jasongaylord.com/images/2020/04/15/DataFromWebDialogue.jpg)

From there, you'll be presented with the Data Navigator. If it's your first visit to the page, it may take a couple minutes for Excel to review the source code. Choose the table that is appropriate for you.

![https://cdn.jasongaylord.com/images/2020/04/15/DataNavigator.jpg](https://cdn.jasongaylord.com/images/2020/04/15/DataNavigator.jpg)

You now have the data in Excel. You can always revisit this spreadsheet and choose Refresh All on the Data menu to refresh the data.

## Analyzing the Data
Now that the data is in Excel, I wanted to analyze it a few different ways. 

#### Table 1: Net New Tests and Results
The first table I built was based on the historical data to find the delta, or net new, positive cases, negative cases, and the total test results. Sure, some test results come back in 7 days and some come back in 5 minutes, but the way the data is reported today, I have no choice but to use the numbers in this manner. Looking at the graph below, the grey line is the total number of new test results that have been returned in Pennsylvania. The red line is the new positive cases and the blue line is the new negative cases. The government and media are portraying this as a "slowing down" or a "decrease in new positive cases each day." Clearly, that's not the case. The total number of test results is decreasing. There's a correlation between the two.

![https://cdn.jasongaylord.com/images/2020/04/15/COVID19Data.jpg](https://cdn.jasongaylord.com/images/2020/04/15/COVID19Data.jpg)

#### Table 2: Positive Results Per 100 Tests
If you now take that data and look at the ratio between the reported new positive cases each day and the new total cases each day, you'll notice that the average percentage is increasing. Meaning, while we are testing many less individuals (perhaps lack of tests, conditions not serious enough, etc), the percentage that a test will come back as positive is increasing.

![https://cdn.jasongaylord.com/images/2020/04/15/PositiveCasePercentage.jpg](https://cdn.jasongaylord.com/images/2020/04/15/PositiveCasePercentage.jpg)

## Conclusion
We continue to hear estimated dates for "reopening the economy." However, based on pure data, it doesn't appear it's a good idea, does it. I don't know how anyone can be convinced otherwise unless

## Other Posts Related to COVID-19
Below you'll find the list of other posts in the series:

1. [COVID-19, Resources, and Technology](https://jasong.us/2wgSBqo)
2. [Free Technical Training and Welcome Spring](https://jasong.us/2XeHw3W)
3. [Use Docking Station from Home and Add Home Projects](https://jasong.us/3bRuoWK)
4. [Technology Events in 2020](https://jasong.us/2wvKshS)
5. [Google's Stadia Gaming Free for Two Months](https://jasong.us/3a9Rne9)
6. [Debugging COVID-19 Data Using Excel](https://jasong.us/2K5BhHV)
7. [Hiding Your Background When Working From Home](https://jasong.us/3enL8XE)
8. [Pixel by LabCorp Releases At Home Test](https://jasong.us/2xVsplI)
9. [Blockbuster Surviving Covid-19](https://jasong.us/2YduAvE)
10. [DevAroundTheSun a 24-hour Fundraiser May 12](https://jasong.us/2VWxxzm)