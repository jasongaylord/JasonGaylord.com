---
title: Filter A GridView After The Initial Bind
author: Jason Gaylord
date: 2006-05-31 10:12:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/05/31/filter-a-gridview-after-the-initial-bind.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/3g0cZ12
---

One of the goals that Microsoft has really pushed for in ASP.NET 2.0 is saving the amount of coding necessary to perform common tasks such as data access. On a recent project, I needed the ability to filter the results on a `GridView` control after I returned the results from my data source. To accomplish this, I added a `DropDownList` and set the `AutoPostBack` property on the `DropDownList` to `True`. I added two values to the list; one that showed all of the results, and one that showed the filtered result set which in my case was a list of exceptions. I also added a `SqlDataSource` object called `MySqlDataSource`. I set the `OnChange` event to a subroutine similar to below:  
  
```vb
Private Sub FilterDropDownList\_Change(s as Object, e as EventArgs)  
    If FilterDropDownList.SelectedValue = "Filter" then  
        MySqlDataSource.FilterExpression = "MyColumn=1"  
    Else  
        MySqlDataSource.FilterExpression = ""  
    End If  
  
    MyGridView.DataBind  
End Sub
```
  
I added the sub `MyGridView.DataBind` to the subroutine because this subroutine occurs after the `SqlDataSource` object is created and the `resultset` is filled. In reality, you only need to perform the `MyGridView.DataBind` when the `FilterExpression` value is set to something other than `""`.