---
title: Query Snowflake Using .NET
author: Jason Gaylord
date: 2020-10-22
categories: [cloud,data,dev,dotnet]
tags:  [cloud,data,dev,dotnet]
post-number: 1079
image: https://cdn.jasongaylord.com/images/2020/10/22/snowflake-results.jpg
bitly: https://jasong.us/34c200u
---

Yesterday I wrote about how you could [get started with Snowflake](https://jasong.us/31q1EkS). To expand on this, today we'll use the same query we used to connect to the *DAILY_16_TOTAL* table and select 100 records using .NET. We'll do this by first creating a brand new .NET console application and importing the **Snowflake.Data** NuGet package. The source for this NuGet package can be found at:

{% include github-browse.html bitly="jasong.us/2TbW5lM" repo="snowflakedb/snowflake-connector-net" branch="master" %}

Now that the library is imported, we'll need to connect to the *SNOWFLAKE_SAMPLE_DATA* database object. We'll need to gather a few parameters to make this happen:

{% include open-thumbnail.html path="2020/10/22/snowflake-account-id.jpg" alt="Snowflake Account ID" %}

* **Account** - This is captured by using the URL section as shown above.
* **Host** - The full host path including the account. This is only optional if you use the west-us region. So as an example, here is my host: `{YOUR_ACCOUNT_ID}.east-us-2.azure.snowflakecomputing.com`
* **User** - The username that you are using to login
* **Password** - The password that you are using to login
* **DB** - In our case, this is the *SNOWFLAKE_SAMPLE_DATA*

So, replacing *account*, *host*, *user*, and *password* values accordingly, here is our sample connection string: `account={YOUR_ACCOUNT_ID};host={YOUR_HOST};user={YOUR_USERNAME};password={YOUR_PASSWORD};db=SNOWFLAKE_SAMPLE_DATA;`.

If you have issues with the host, after the default timeout of 120 seconds (which can be changed by specifying a value for `CONNECTION_TIMEOUT` in the connection string), you'll get an exception like this:

{% include open-thumbnail.html path="2020/10/22/host-exception.jpg" alt="Snowflake Host Exception" %}

Finally, we'll iterate through the records returned. Here's a snippet from my app:

```csharp
using (var conn = new SnowflakeDbConnection() { ConnectionString="account={YOUR_ACCOUNT_ID};host={YOUR_HOST};user={YOUR_USERNAME};password={YOUR_PASSWORD};db=SNOWFLAKE_SAMPLE_DATA;" })
{
    conn.Open();

    var cmd = conn.CreateCommand();
    cmd.CommandText = "select * from weather.daily_16_total limit 100;";

    var reader = cmd.ExecuteReader();
    while (reader.Read())
    {
        Console.WriteLine(reader.GetString(0));
    }

    conn.Close();
}
```

We've now successfully connected to Snowflake for the first time.

{% include open-thumbnail.html path="2020/10/22/snowflake-results.jpg" alt="Snowflake Query Results" %}