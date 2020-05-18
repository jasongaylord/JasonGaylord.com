---
title: "How To: Use a CheckBox In A Template Column And Still Access GridViewRow Data"
author: Jason Gaylord
date: 2006-07-12 17:05:00
aspnet-weblog-link: http://weblogs.asp.net/jgaylord/archive/2006/07/12/How-To_3A00_-Use-a-CheckBox-In-A-Template-Column-And-Still-Access-GridViewRow-Data.aspx
categories: [aspnet-weblog]
tags: [archive]
bitly: https://jasong.us/3bPrEsF
---

[Teemu "Joteke" Keiski](/http://blogs.aspadvice.com/joteke) has helped me solve a very trivial task. I had the simple request of accessing a GridView row data by checking a checkbox within that row. Based on the row data, I'd perform a particular task.  
  
My GridView had a few bound columns with a few template columns. One of the template columns contained a checkbox. When the checkbox was clicked, I wanted to run the Checked event and pull information from the row that it was clicked. So, using the Checked event, I can then take that information and based on that information, I can perform a task. The example I have provided below does just that. It is a simple example where the first field in the GridView is a username from the Membership.GetUsers collection. The second and third fields are two roles that the user may or may not be part of. I want the administrator to click the checkbox to add or remove the user from a particular role. Here's the example:  

```vb
Sub ToggleUserAndRole(ByVal s as Object, ByVal e as EventArgs)  
    'Convert Object to CheckBox  
    Dim MyCheckBox as CheckBox = CType(s, CheckBox)  

    'Convert NamingContainer to GridViewRow  
    Dim MyRow as GridViewRow = CType(MyCheckBox.NamingContainer, GridViewRow)  

    'Obtain Current Cell and CellIndex  
    Dim CurrentCell as TableCell = CType(MyCheckBox.Parent, TableCell)  
    Dim CellIndex as Integer = MyRow.Cells.GetCellIndex(CurrentCell)  

    'Obtain Username from first column  
    Dim Username as String = MyRow.Cells(0).Text  

    'Obtain "Role" Checked  
    Dim Role as String  
    If CellIndex = 1 then  
        Role = "Administrator"  
    Else  
        Role = "Member"  
    End If  

    'Add or Remove User to Role  
    If MyCheckBox.Checked then  
        Roles.AddUserToRole(Username, Role)  
    Else  
        Roles.RemoveUserFromRole(Username, Role)  
    End If  
End Sub
```