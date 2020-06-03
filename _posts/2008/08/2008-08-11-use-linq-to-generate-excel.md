---
title: Use LINQ to XML to Generate Excel Documents
author: Jason Gaylord
date: 2008-08-11 15:01:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2008/08/11/use-linq-to-xml-to-generate-excel-documents.aspx
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/08/11/use-linq-to-xml-to-generate-excel-documents/
categories: [aspnet-weblog]
tags: [archive]
bitly: https://bit.ly/3gcAK67
---

I was looking for a quick and easy solution to export data from SQL into an Excel format from within my ASP.NET application. I came across a great video posted by Beth Massi on the asp.net website (Video #7 at the bottom at [http://www.asp.net/learn/linq-videos/](http://www.asp.net/learn/linq-videos/ "http://www.asp.net/learn/linq-videos/")). Beth steps through creating the LINQ to XML and how you can populate your Excel document. When I used this in an ASP.NET application, I added the XML declaration to the Response.Write so that Excel could understand the document. In ASP.NET, the XMLDocument type has a tendency to drop the XML declaration when writing out the document using .ToString.

It's quite easy to get this to work. Imagine thatweI have a simple result set of products that contains column ID, Product, and Price. We'd create an Excel document that would look like the following:

[![LinqToExcel-01](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-01_thumb.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-01_2.jpg)

Save this document as _XML Spreadsheet 2003_ (in Office 2007) or _XML Spreadsheet_ (in Office 2003). This will save our sample spreadsheet with the proper XML markup. If you open the newly created XML file in Notepad, you'd see the XML that makes up this spreadsheet.

```xml
<?xml version\="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns\="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o\="urn:schemas-microsoft-com:office:office"
 xmlns:x\="urn:schemas-microsoft-com:office:excel"
 xmlns:ss\="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html\="http://www.w3.org/TR/REC-html40"\>
    <DocumentProperties xmlns\="urn:schemas-microsoft-com:office:office"\>
        <Author\>Jason N. Gaylord</Author\>
        <LastAuthor\>Jason N. Gaylord</LastAuthor\>
        <Created\>2008-08-11T18:01:35Z</Created\>
        <Company\>Jason N. Gaylord</Company\>
        <Version\>12.00</Version\>
    </DocumentProperties\>
    <ExcelWorkbook xmlns\="urn:schemas-microsoft-com:office:excel"\>
        <WindowHeight\>12240</WindowHeight\>
        <WindowWidth\>24855</WindowWidth\>
        <WindowTopX\>240</WindowTopX\>
        <WindowTopY\>105</WindowTopY\>
        <ProtectStructure\>False</ProtectStructure\>
        <ProtectWindows\>False</ProtectWindows\>
    </ExcelWorkbook\>
    <Styles\>
        <Style ss:ID\="Default" ss:Name\="Normal"\>
            <Alignment ss:Vertical\="Bottom"/>
            <Borders/>
            <Font ss:FontName\="Calibri" x:Family\="Swiss" ss:Size\="11" ss:Color\="#000000"/>
            <Interior/>
            <NumberFormat/>
            <Protection/>
        </Style\>
        <Style ss:ID\="s18" ss:Name\="Currency"\>
            <NumberFormat ss:Format\="\_(&quot;$&quot;\* #,##0.00\_);\_(&quot;$&quot;\* \\(#,##0.00\\);\_(&quot;$&quot;\* &quot;\-&quot;??\_);\_(@\_)"/>
        </Style\>
        <Style ss:ID\="s66"\>
            <Font ss:FontName\="Calibri" x:Family\="Swiss" ss:Size\="11" ss:Color\="#000000"/>
        </Style\>
        <Style ss:ID\="s68" ss:Parent\="s18"\>
            <Font ss:FontName\="Calibri" x:Family\="Swiss" ss:Size\="11" ss:Color\="#000000"/>
        </Style\>
        <Style ss:ID\="s69"\>
            <Alignment ss:Horizontal\="Center" ss:Vertical\="Bottom"/>
            <Font ss:FontName\="Calibri" x:Family\="Swiss" ss:Size\="11" ss:Color\="#000000"
             ss:Bold\="1"/>
        </Style\>
        <Style ss:ID\="s70" ss:Parent\="s18"\>
            <Alignment ss:Horizontal\="Center" ss:Vertical\="Bottom"/>
            <Font ss:FontName\="Calibri" x:Family\="Swiss" ss:Size\="11" ss:Color\="#000000"
             ss:Bold\="1"/>
        </Style\>
        <Style ss:ID\="s73"\>
            <Alignment ss:Horizontal\="Center" ss:Vertical\="Bottom"/>
            <Font ss:FontName\="Calibri" x:Family\="Swiss" ss:Size\="11" ss:Color\="#000000"/>
        </Style\>
    </Styles\>
    <Worksheet ss:Name\="Sheet1"\>
        <Table ss:ExpandedColumnCount\="3" ss:ExpandedRowCount\="3" x:FullColumns\="1"
         x:FullRows\="1" ss:StyleID\="s66" ss:DefaultRowHeight\="15"\>
            <Column ss:StyleID\="s73" ss:AutoFitWidth\="0" ss:Width\="35.25"/>
            <Column ss:StyleID\="s66" ss:AutoFitWidth\="0" ss:Width\="135"/>
            <Column ss:StyleID\="s68" ss:AutoFitWidth\="0" ss:Width\="82.5"/>
            <Row ss:StyleID\="s69"\>
                <Cell\>
                    <Data ss:Type\="String"\>ID</Data\>
                </Cell\>
                <Cell\>
                    <Data ss:Type\="String"\>Product</Data\>
                </Cell\>
                <Cell ss:StyleID\="s70"\>
                    <Data ss:Type\="String"\>Price</Data\>
                </Cell\>
            </Row\>
            <Row\>
                <Cell\>
                    <Data ss:Type\="Number"\>1</Data\>
                </Cell\>
                <Cell\>
                    <Data ss:Type\="String"\>Apple</Data\>
                </Cell\>
                <Cell\>
                    <Data ss:Type\="Number"\>0.79</Data\>
                </Cell\>
            </Row\>
            <Row\>
                <Cell\>
                    <Data ss:Type\="Number"\>2</Data\>
                </Cell\>
                <Cell\>
                    <Data ss:Type\="String"\>Banana</Data\>
                </Cell\>
                <Cell\>
                    <Data ss:Type\="Number"\>0.99</Data\>
                </Cell\>
            </Row\>
        </Table\>
        <WorksheetOptions xmlns\="urn:schemas-microsoft-com:office:excel"\>
            <PageSetup\>
                <Header x:Margin\="0.3"/>
                <Footer x:Margin\="0.3"/>
                <PageMargins x:Bottom\="0.75" x:Left\="0.7" x:Right\="0.7" x:Top\="0.75"/>
            </PageSetup\>
            <Print\>
                <ValidPrinterInfo/>
                <HorizontalResolution\>600</HorizontalResolution\>
                <VerticalResolution\>0</VerticalResolution\>
            </Print\>
            <Selected/>
            <ProtectObjects\>False</ProtectObjects\>
            <ProtectScenarios\>False</ProtectScenarios\>
        </WorksheetOptions\>
    </Worksheet\>
    <Worksheet ss:Name\="Sheet2"\>
        <Table ss:ExpandedColumnCount\="1" ss:ExpandedRowCount\="1" x:FullColumns\="1"
         x:FullRows\="1" ss:DefaultRowHeight\="15"\>
        </Table\>
        <WorksheetOptions xmlns\="urn:schemas-microsoft-com:office:excel"\>
            <PageSetup\>
                <Header x:Margin\="0.3"/>
                <Footer x:Margin\="0.3"/>
                <PageMargins x:Bottom\="0.75" x:Left\="0.7" x:Right\="0.7" x:Top\="0.75"/>
            </PageSetup\>
            <ProtectObjects\>False</ProtectObjects\>
            <ProtectScenarios\>False</ProtectScenarios\>
        </WorksheetOptions\>
    </Worksheet\>
    <Worksheet ss:Name\="Sheet3"\>
        <Table ss:ExpandedColumnCount\="1" ss:ExpandedRowCount\="1" x:FullColumns\="1"
         x:FullRows\="1" ss:DefaultRowHeight\="15"\>
        </Table\>
        <WorksheetOptions xmlns\="urn:schemas-microsoft-com:office:excel"\>
            <PageSetup\>
                <Header x:Margin\="0.3"/>
                <Footer x:Margin\="0.3"/>
                <PageMargins x:Bottom\="0.75" x:Left\="0.7" x:Right\="0.7" x:Top\="0.75"/>
            </PageSetup\>
            <ProtectObjects\>False</ProtectObjects\>
            <ProtectScenarios\>False</ProtectScenarios\>
        </WorksheetOptions\>
    </Worksheet\>
</Workbook\>
```

Copy this XML and go into your ASP.NET application. For my application, I created an `HttpHandler` to generate my output. Note that you must use a class file (or code-behind) as the XML will not work within an .aspx page. We'll create a few variables to populate our XML spreadsheet. I created a new variable called OutputSpreadsheet and set the value of this variable to the entire XML document just copied from Notepad.

[![LinqToExcel-02](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-02_thumb.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-02_2.jpg)

Next, copy the namespace declarations (with the exception of the HTML reference) and add these namespaces as imports to the top of the class. This allows the special Excel row and column attributes to be valid.

[![LinqToExcel-03](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-03_thumb.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-03_2.jpg)

Above the OutputSpreadsheet variable, create a new variable called `SpreadsheetData`. Scroll down to find the Worksheet named Sheet1 in the XML. Cut the second row section and past it into Spreadsheet Data.

[![LinqToExcel-04](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-04_thumb.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-04_2.jpg)

We can then populate the XML by using a LINQ query with embedded expressions.

[![LinqToExcel-05](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-05_thumb.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-05_2.jpg)

Now that the query can populate the rows, we must modify the XML in the OutputSpreadsheet variable to handle the rows. Be sure that in the row elements, that only the header row element remains. If other row elements exist, delete them. Add the expression

```csharp
<%= SpreadsheetData %>
```

right below the header row element. This will add the populated rows to the spreadsheet. We must also tell Excel how many rows to expect. To do this, we need to modify the XML attribute ss:ExpandedRowCount on the Table element and add in `<%= SpreadsheetData.Count + 1 %>`. We are adding 1 to accommodate our header row.

[![LinqToExcel-06](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-06_thumb.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-06_2.jpg)

Finally, we can output our response to the browser.

[![LinqToExcel-07](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-07_thumb.jpg)](http://weblogs.asp.net/blogs/jgaylord/WindowsLiveWriter/UseLINQtoXMLtoGenerateExcelDocuments_D33D/LinqToExcel-07_2.jpg)

As you can see, it's pretty easy to generate the Excel XML output. Thanks for all your help Beth!