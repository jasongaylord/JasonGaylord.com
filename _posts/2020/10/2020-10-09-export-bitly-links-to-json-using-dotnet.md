---
title: Export Bitly Links using C#
author: Jason Gaylord
date: 2020-10-09
categories: [api,data,dev,dotnet,productivity,web]
tags:  [api,data,dev,dotnet,productivity,web]
post-number: 1064
image: https://cdn.jasongaylord.com/images/2020/10/09/bitly-export.jpg
bitly: https://jasong.us/3lAc2P1
---

Yesterday I [posted about connecting to the Bitly API](https://jasong.us/2GCVgQ6) to export links using Postman. Today I'll expand on that a bit more and use C# to not only connect to Bitly, but generate a JSON file that includes all of the history (up to 150,000 links).

To do this, create a .NET Core console application. You can do this either using the .NET CLI, Visual Studio, or any other method you are comfortable with. Next, include the [BitlyAPI NuGet package](https://jasong.us/2GBPxu1). This package includes helper methods that target the Bitly API and, as of this post, target the latest 4.x version of the API. We'll then get the bitlinks by group, as we did yesterday, and use C# to page through the results. We'll start by grabbing the first page, checking the total number of links in the pagination results. Since this is a quick and dirty console app, I've placed all of the config settings inside the main class. So, `Program` looks like this:

```csharp
class Program
{
    private const string token = "REPLACE_WITH_ACCESS_TOKEN";
    private const string group_id = "REPLACE_WITH_GROUP_ID";
    private const int page_size = 100;
    private const int sleep_seconds = 1;
    private const string output_file = "C:\\bitlinks.json";
    public static int total_links { get; set; }

    static void Main(string[] args)
    {
        Console.WriteLine("Preparing to process...");
        SaveLinks();
    }

    static async void SaveLinks()
    {
        var bitly = new Bitly(token);
        var linksPage1 = await bitly.GetBitlinksByGroup(group_id, page_size);
        total_links = linksPage1.Pagination.Total;

        var links = new List<BitlyLink>();
        links.AddRange(linksPage1.Links);

        var page_count = (total_links / page_size);
        if ((total_links % page_size) > 0) { page_count++; }

        Console.WriteLine("Found " + total_links + " bitlink(s).");
        Console.WriteLine("Processing page 1 of " + page_count + "; Adding " + linksPage1.Links.Count + " links.");

        for (var x = 2; x <= page_count; x++)
        {
            var additionalLinks = await bitly.GetBitlinksByGroup(group_id, page_size, x);
            Console.WriteLine("Processing page " + x + " of " + page_count + "; Adding " + additionalLinks.Links.Count + " links.");
            links.AddRange(additionalLinks.Links);
            Thread.Sleep(sleep_seconds);
        }

        var list = JsonConvert.SerializeObject(links);
        File.WriteAllText(output_file, list);

        Console.WriteLine("Press any key to close.");
        Console.ReadLine();
    }
}
```

When running this, your console will look similar to this:

{% include open-thumbnail.html path="2020/10/09/bitly-export.jpg" alt="Bitly Export Results" %}

You can get a copy of the source for this at:

{% include github-browse.html bitly="jasong.us/3nuiuZx" repo="jasongaylord/BitlyExport" branch="main" %}

## Optional: Export the JSON to Excel
To export to Excel, you'll need to be using a modern version of Excel. Create a new file and then navigate to the _Data_ tab, _Get Data_, _From File_, then _From Json_.

{% include open-thumbnail.html path="2020/10/09/excel-get-data-from-json-file.jpg" alt="Excel select export from JSON" %}

You'll then navigate to your JSON file. Excel will open the Power Query Editor. You'll see a single column that says _List_ with a list of records. Click the button at the top that reads _To Table_. Leave the default options selected and choose _Ok_.

{% include open-thumbnail.html path="2020/10/09/excel-power-query-to-table.jpg" alt="Excel Power Query To Table" %}

Then, click the column expander icon next to _Column1_ to expand the columns:

{% include open-thumbnail.html path="2020/10/09/excel-power-query-column-expander.jpg" alt="Excel Power Query Column Expander" %}

Choose all columns and press Ok. Then, choose _Close & Load_. You'll now see your spreadsheet is filled with your bitlinks.