---
title: Adding QueryString Parameters to the SiteMapNode
author: Jason Gaylord
msmvps_path: https://blogs.msmvps.com/jgaylord/2008/06/04/adding-querystring-parameters-to-the-sitemapnode/
date: 2008-06-04
categories: [archive]
tags: [archive]
bitly: https://jasong.us/2Bl8i1K
---

There is no way to add querystring parameters to the `SiteMapNode` in a `SiteMap` control "out of the box." I'm quite surprised there is no option but luckily the SiteMap uses the provider model. After a Live search, I was able to find a solution provided by [Bobby DeRosa](http://www.csharper.net/blog/sitemapprovider_doesn_t_take_querystring_into_consideration.aspx#custom_sitemapprovider_incorporates_querystring_reliance.aspx). By creating a custom provider, this can be accomplished. The project I was on is an update of an ASP.net app written in VB.net so here is my VB.net port:

```vb
Imports System.Collections.Specialized
Imports System.Web

Namespace Configuration

    Public Class ExtendedSiteMapProvider
        Inherits XmlSiteMapProvider

        Public Overrides Sub Initialize(ByVal name As String, ByVal attributes As NameValueCollection)
            MyBase.Initialize(name, attributes)
            Dim resolveHandler As New SiteMapResolveEventHandler(AddressOf SmartSiteMapProvider_SiteMapResolve)
            AddHandler Me.SiteMapResolve, resolveHandler
        End Sub

        Function SmartSiteMapProvider_SiteMapResolve(ByVal sender As Object, ByVal e As SiteMapResolveEventArgs) As SiteMapNode
            If (SiteMap.CurrentNode Is Nothing) Then Return Nothing

            Dim this As New XmlSiteMapProvider
            Dim temp As SiteMapNode
            temp = SiteMap.CurrentNode.Clone(True)
            Dim u As Uri = New Uri(e.Context.Request.Url.ToString())
            Dim tempNode As SiteMapNode = temp

            While Not tempNode Is Nothing
                Dim qs As String = GetQueryString(tempNode, e.Context)
                If Not qs Is Nothing Then
                    If Not tempNode Is Nothing Then
                        tempNode.Url += qs
                    End If
                End If
                tempNode = tempNode.ParentNode
            End While

            Return temp
        End Function

        Private Function GetQueryString(ByVal node As SiteMapNode, ByVal context As HttpContext) As String
            If node("queryStringToInclude") Is Nothing Then Return Nothing

            Dim values As NameValueCollection = New NameValueCollection
            Dim vars() As String = node("queryStringToInclude").Split(",".ToCharArray())
            Dim s As String

            For Each s In vars
                Dim var As String = s.Trim()
                If context.Request.QueryString(var) Is Nothing Then Continue For
                values.Add(var, context.Request.QueryString(var))
            Next

            If values.Count = 0 Then Return Nothing

            Return NameValueCollectionToString(values)
        End Function

        Private Function NameValueCollectionToString(ByVal col As NameValueCollection) As String
            Dim parts(col.Count - 1) As String
            Dim keys() As String = col.AllKeys

            For i As Integer = 0 To keys.Length - 1
                parts(i) = keys(i) & "=" & col(keys(i))
            Next

            Dim url As String = "?" & String.Join("&", parts)

            Return url
        End Function

    End Class

End Namespace
```

I added the following to the web.config:

```xml
<siteMap defaultProvider="ExtendedSiteMapProvider" enabled="true">
    <providers>
        <clear />
        <add name="ExtendedSiteMapProvider" type="Configuration.ExtendedSiteMapProvider" siteMapFile="web.sitemap" securityTrimmingEnabled="true" />
    </providers>
</siteMap>
```

If I had a page of products on products.aspx, displayed the details of the product on details.aspx, and had a separate update.aspx page, my web.sitemap might look like this:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<siteMap xmlns="http://schemas.microsoft.com/AspNet/SiteMap-File-1.0" >
    <siteMapNode url="~/" title="Main Page">
            <siteMapNode url="~/products.aspx" title="Products" >
                <siteMapNode url="~/details.aspx" title="Product Details" queryStringToInclude="ProductID" >
                    <siteMapNode url="~/update.aspx" title="Updating a Product" />
                </siteMapNode>
            </siteMapNode>
    </siteMapNode>
</siteMap>
```

So, on `/update.aspx?ProductID=3`, the `SiteMapNode` for Product Details would have a url of `/details.aspx?ProductID=3`.

Hopefully a similar feature will be added soon to the ASP.net `SiteMap` control.