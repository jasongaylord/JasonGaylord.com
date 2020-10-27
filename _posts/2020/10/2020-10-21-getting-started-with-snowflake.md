---
title: Getting Started with Snowflake
author: Jason Gaylord
date: 2020-10-21
categories: [cloud,data,dev]
tags:  [cloud,data,dev]
post-number: 1078
image: https://cdn.jasongaylord.com/images/2020/10/21/snowflake-query-weather-top-100.jpg
bitly: https://jasong.us/31q1EkS
---

[Snowflake](https://jasong.us/3kiZ4ol) is a "data warehouse as a service" platform that has been around publicly since October 2014. Just last month the company went public with its IPO on NYSE and was the highest valued software IPO ever. The service allows organizations to query all of it's data at once and assists with getting a data warehouse setup quickly. Think of it as being the new cool kid on the block within the big data space. 

In this article we'll:
- [Setup Your Snowflake Account](#setup-your-snowflake-account)
- [Query Snowflake Sample Data](#query-snowflake-sample-data)
- [Bring Your Own Data](#bring-your-own-data)

## Setup Your Snowflake Account
When setting up Snowflake, you'll choose the edition of Snowflake you'd like to target as well as the cloud provider you'd like to host Snowflake with:

{% include open-thumbnail.html path="2020/10/21/snowflake-trial-cloud-option.jpg" alt="Snowflake Trial Setup" %}

After continuing, you'll have an opportunity to watch a quick video tutorial, participate in a hands-on lab, and also view the complete documentation.

{% include open-thumbnail.html path="2020/10/21/snowflake-signed-up.jpg" alt="Snowflake Trail Setup Successfully" %}

You'll want to be sure to check your email as the activation link is only valid for 72 hours. In my case, I choose Azure to setup my account:

{% include open-thumbnail.html path="2020/10/21/snowflake-account-activation-email.jpg" alt="Snowflake Account Activation Email" %}

Now that you have your account activated, like most other services, you'll create a username and password. Then, you're in!

## Query Snowflake Sample Data
Within the IDE, under the _New Worksheet_ tab, navigate to the *SNOWFLAKE_SAMPLE_DATA* database object.

{% include open-thumbnail.html path="2020/10/21/snowflake-new-worksheet.jpg" alt="Snowflake New Worksheet Tab" %}

Next, navigate to the _Weather_ schema and find the *DAILY_16_TOTAL* table. In this query, we'll select 100 records of this data:

{% include open-thumbnail.html path="2020/10/21/snowflake-query-weather-top-100.jpg" alt="Snowflake Query Select 100 Weather Results" %}

You'll notice that the query syntax is most likely similar to what you've used in the past. You may also notice the total duration for the query. In my case, this was 9.11s in total; 2.22s for queuing, 3.38s for compilation, and 3.51s for execution. This did query 128.2 GB of data which equates to 331,443,064 rows.

## Bring Your Own Data
This works great if you'd like to mess with the sample data. But, chances are you'd like to actually use your own. So, create a new database and have some fun. Be sure to check out the [Snowflake tutorial for bulk loading using COPY](https://jasong.us/2Hk0WP5). This will allow you to drop data exports from SQL or to use data currently stored in JSON. If using Azure, like me, you'll connect to your Azure Storage account. You'll also be able to bulk load data using a local file system, Amazon S3, or Google Cloud Storage. You can also continuously update your data using [Snowpipe](https://jasong.us/2Te3SiR).