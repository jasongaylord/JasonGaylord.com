---
title: "MSDN Magazine: Manage Web Users with Custom Profile Providers in ASP.NET 2.0"
author: Jason Gaylord
date: 2007-03-01
msdn-link: http://msdn.microsoft.com/msdnmag/issues/07/03/ASPNET2/default.aspx
categories: [msdn]
tags: [archive,article,dev,msdn,personal]
bitly: https://jasong.us/2Tkyrny
---

With ASP.NET 2.0, you can add authentication, authorization, and profiles to your Web site without writing a single line of code. That's quite a step forward from the way things used to be. Like most of the new features in ASP.NET 2.0, authentication, authorization, and profiles each have their own built-in providers. You can think of providers as modules that contain the methods for a particular task. These providers are quite flexible-they can be customized by specifying attributes that pass information into the provider to allow it to execute different behavior. For extreme customization, though, it may be necessary to replace a built-in version with a custom or third-party provider.
The Profile feature in ASP.NET allows developers to specify per-user settings or data. All this data can be stored in an anonymous profile so that settings can be retrieved without requiring the user to log into the site. However, if the user creates an account, these settings can be migrated to the logged in profile. The anonymous profile feature can also be turned off.

To store and retrieve a user's profile properties, simply name each profile property and add them to the profile element in the web.config file, as shown in Figure 1. This puts the profile properties into the profile's `SettingsPropertyValueCollection`. You may also specify the data type and a default value for each property.

**FIGURE 1**
```xml
<profile>
  <properties>
    <add name="FirstName" />
    <add name="LastName" />
    <add name="Address1" />
    <add name="Address2" />
    <add name="City" />
    <add name="State" />
    <add name="Zip" />
    <add name="Phone" />
    <add name="ProfileVersion" type="int" defaultValue="0" />
  </properties>
</profile>
```

ASP.NET reads the web.config file in search of the profile section group. If one is found, ASP.NET then looks for a type or connection string attributes (not included in Figure 1). If neither is found, the machine.config file is examined. In most scenarios, the machine.config file would not have been altered since ASP.NET was installed. By default, the machine.config file has the `System.Web.Profile.SqlProfileProvider` registered as the default provider for the profile feature. The `SqlProfileProvider` is defined to use the `LocalSqlServer` connection string name to connect to the target database for profile information (all connection string names and attributes are stored in a group called `connectionStrings`, found in the web.config file). Again by default, the `LocalSqlServer` connection string is defined as a SQL Server™ 2005 Express database that can be found at `|DataDirectory|aspnetdb.mdf` (translated in ASP.NET as \App_Data\aspnetdb.mdb).

The database used by the `SqlProfileProvider` to store profile information must be configured using a known schema. If a SQL Server 2005 Express database is being used, ASP.NET can dynamically create the database file and create the necessary tables, views, stored procedures, and so forth on demand; otherwise, the `aspnet_regsql` tool from the Microsoft® .NET Framework SDK can be used. One of the tables, the `aspnet_Profile` table, is used for storing the profile information for each user. When a user assigns a profile property to his profile, a new row is added that contains the user's unique UserID, the names of each of the profile properties in a single column, and the data that relates to each of the profile names in another column. In Figure 2, you can see that the data is stored as a BLOB. The property names and values can be in a variety of data formats including a continuous string, an XML dataset, or a binary serialization of the data. As a result, storing profile data using the built-in profile provider can make it difficult for a developer or database administrator to query or modify the data using SQL. If the default provider's functionality doesn't completely meet your needs, a custom provider can be used.

**FIGURE 2**
<a href="https://cdn.jasongaylord.com/images/2007/03/01/aspnet-profile-values.jpg"><img src="https://cdn.jasongaylord.com/images/2007/03/01/aspnet-profile-values.jpg" alt="Property Names and Values of ASP.NET Profile" style="width:400px" /></a>

## Using a Custom Profile Provider
Even while developing a new version of ASP.NET, the ASP.NET team is hard at work enhancing the existing versions. The useful resources they produce are called sandbox projects and can be downloaded from the official ASP.NET Web site at [sandbox.asp.net](http://sandbox.asp.net/). One of the cool things about many of these projects is that they can be used in production environments. Some of the best add-ons for ASP.NET can be found here, including the Web Deployment Project and the Table Profile Provider Samples. In this project, I'll use the Table Profile Provider Samples, which you'll find at [asp.net/sandbox/samp\_profiles.aspx?tabid=62](http://asp.net/sandbox/samp_profiles.aspx?tabid=62).

Unlike the built-in ASP.NET Profile provider, the Table Profile Provider Samples allow profile data to be stored in an easily readable format. The download contains two sample providers and instructions. The `SqlTableProfileProvider` allows data to be stored in individual columns within a profile table. The table must include the UserID unique identifier as the primary key and the `LastUpdatedDate` date time field. The `UserID` field will allow each profile record to be associated with the User account contained in the `aspnet\_Membership` and `aspnet\_Users` tables. You'll notice that neither of these fields need to be specified in the web.config file. The other profile sample, the `SqlStoredProcedureProfileProvider`, passes each profile property value into a separate parameter in a SQL stored procedure. This option will allow a stored procedure to store the profile properties in a location up to the stored procedure and to use business logic to transform the data before storing it.

Before using these samples in an ASP.NET project, you must copy the code for them to the `App\_Code` folder. The code is written in C#, so if the application is being developed in Visual Basic®, the samples will need to be in a separate folder under the `App\_Code` folder. The folder must be added as a code subdirectory in the web.config file as shown here:

```xml
<compilation debug="true" strict="false" explicit="true">
  <codeSubDirectories>
    <add directoryName="ProfileProvider" />
  </codeSubDirectories>
</compilation>
```

By adding the folder as a code subdirectory, all C# files in the folder will be compiled separately from the rest of the Web application project. At run time, two DLLs will be generated in the ASP.NET temporary folder for the application.

For this application to be used with the `SqlTableProfileProvider`, I'll create a new table called `CustomProfile` that will contain columns to store the user's first and last name, full address, and phone number, along with a version number used to determine the current version of the user's profile. The table will also include the user's unique identifier as its primary key and the last updated date in the last column. For example, Figure 3 shows how the provider will be added to the profile section. Also note how each property will be added to the properties section group. In addition to a .NET type and default value, a custom provider data attribute will also need to be specified on each property. This attribute will include the column name from the SQL table and the SQL type of the column.

**FIGURE 3**
```xml
<profile defaultProvider="MyCustomProfileProvider">
  <providers>
    <add name="MyCustomProfileProvider" type="Microsoft.SqlTableProfileProvider" 
        connectionStringName="LocalSqlServer" table="CustomProfile" applicationName="/" profileVersion="1" />
  </providers>
  <properties>
    <add name="FirstName" type="string" defaultValue="[null]" customProviderData="FirstName;nvarchar" />
    <add name="LastName" type="string" defaultValue="[null]" customProviderData="LastName;nvarchar" />
    <add name="Address1" type="string" defaultValue="[null]" customProviderData="Address1;nvarchar" />
    <add name="Address2" type="string" defaultValue="[null]" customProviderData="Address2;nvarchar" />
    <add name="City" type="string" defaultValue="[null]" customProviderData="City;nvarchar" />
    <add name="State" type="string" defaultValue="[null]" customProviderData="State;nvarchar" />
    <add name="Zip" type="string" defaultValue="[null]" customProviderData="Zip;nvarchar" />
    <add name="Phone" type="string" defaultValue="[null]" customProviderData="Phone;nvarchar" />
    <add name="ProfileVersion" type="int" defaultValue="[null]" customProviderData="ProfileVersion;int" />
  </properties>
</profile>
```

## Customizing the CreateUserWizard Control
Not only does ASP.NET 2.0 have built-in providers to support its authentication features, it also has built-in Web controls for dealing with authentication and authorization. These include `Login`, `LoginView`, `PasswordRecovery`, `LoginStatus`, `LoginName`, `CreateUserWizard`, and `ChangePassword`. The `CreateUserWizard` control allows users to create an account within an ASP.NET application. Much like the providers, the controls require little if any coding. To use the `CreateUserWizard` control, or any of these controls for that matter, simply drag it from the Toolbox onto any ASP.NET page or user control.

`CreateUserWizard` is a two-step wizard control. The first step, called "Sign Up for Your New Account," asks the user for information such as username, password, e-mail address, and a security question and answer. In some instances, the Membership provider defined in the web.config may be configured where the `requiresQuestionAndAnswer` property is set to `false`. In such cases, the security question and security answer fields are hidden at run time. The second step, called "Complete," confirms that the user account was created and displays a Finish button. Clicking the button redirects the user to the URL specified in the `ContinueDestinationPageURL` property or runs an event handler for the button's click event if one was provided. Usually, a developer will redirect the user to the homepage or to the referring page using the `ContinueDestinationPageURL` property. For more detailed information on the `CreateUserWizard` control, see [msdn.microsoft.com/msdnmag/issues/05/10/ExtremeASPNET](http://msdn.microsoft.com/msdnmag/issues/05/10/ExtremeASPNET) and [msdn.microsoft.com/msdnmag/issues/04/11/CuttingEdge](http://msdn.microsoft.com/msdnmag/issues/04/11/CuttingEdge).

## Creating a Registration Procedure
There are a few ways to create a custom user registration process. First, you can use the built-in CreateUserWizard control and modify it with an additional action in front of the Sign Up for Your New Account step. Second, you can convert each step to a navigation template and customize each control step as you see fit. This lets you move the user information and profile information to different steps or to leave all of the fields in the same step. Finally, you can create your own registration control using the Membership API's CreateUser method. The solution you choose depends on the design of the application and the level of customization you'd like to add. In this case, you'll add a step in front of Sign Up for Your New Account as this will let you add your profile form with minimal coding.

The new step will ask the user to submit values for each of the profile properties mentioned earlier, with the exception of the ProfileVersion property. As a reminder, the UserID and LastUpdatedDate will be populated by the provider and don't need values supplied by the user. The ProfileVersion property will be populated when the form is submitted by retrieving the value from an application setting or from another section in web.config. You can find out more about creating your own configuration sections at [msdn.microsoft.com/msdnmag/issues/06/06/ConfigureThis](http://msdn.microsoft.com/msdnmag/issues/06/06/ConfigureThis).

Figure 4 shows the property being added to the SqlTableProfileProvider that has been provided by Microsoft. We will use the Profile sectionGroup to specify the value of the profile version. The Profile will be updated immediately after the user's account has been created. An object defined as the ProfileCommon will load the user's current profile properties and values. Since the profile and user account are new to the system, all of the values will be null. All of the profile properties will be updated to contain non-null values. Finally, the ProfileCommon will be saved so the data can be written back to the database using the provider. If the ProfileCommon isn't saved, there is no way for ASP.NET to know that a data write is needed.

**FIGURE 4**
```csharp
public class SqlTableProfileProvider : ProfileProvider 
{
    ...
    private string _profileVersion;

    public override void Initialize(string name, NameValueCollection config) 
    {
        ...
        // Check to see that a profile version exists 
        _profileVersion = config["profileVersion"];
        if (string.IsNullOrEmpty(_profileVersion))
        {
            throw new ProviderException("No profile version specified");
        }

        // Validate the profile version
        int testProfileVersion;
        if (!Int32.TryParse(_profileVersion, out testProfileVersion))
        {
            throw new ProviderException(
                "Profile version must be an Integer");
        }
        ...
        config.Remove("profileVersion");
    }

    // Public property to obtain the ProfileVersion from the web.config
    static public Int32 ProfileVersion
    {
        get 
        {
            ProfileSection profileConfig = (ProfileSection)WebConfigurationManager.GetSection("system.web/profile");
            return Int32.Parse(profileConfig.Providers[1].ElementInformation.Properties["profileVersion"].Value.ToString());
        }
    }
```

## Checking the Profile Version
One of the benefits of using ASP.NET is that it's modular. Since ASP.NET 1.0, developers could create an HTTP handler or module for ASP.NET. You can write an `HTTPModule` to see if a profile exists for a user and if it is the correct version. If a profile does not exist or if it's the wrong version, you could force the user to go to a centralized update-profile page.

To determine the profile version that a user is currently registered with, you need to handle the application's AuthorizeRequest method. In doing so, your own custom method will run when the user is authenticated and before the user is granted access to the page he wants (see Figure 5). Since you won't be able to pull the profile on users not logged in, you'll need to exclude those requests from your examination. You'll also want to exclude users who are currently on your `editprofile.aspx` page so they are not caught in a cycle of continuous redirection. You'll then obtain the value for the profileVersion property on the second registered profile provider, which will be the `SqlTableProfileProvider`. You don't want to pull the first provider in the provider collection because that will always be the built-in profile provider unless you explicitly removed it from the providers collection. Once you've pulled the current profile version on the application, load the user account's profile and check the profile version in the profile. To do this, create a new `ProfileCommon` object and load the user's profile based on his name. If the user's profile version is less than the application's profile version, the user will be redirected to the `editprofile.aspx` page. If it is the same, the page the user was attempting to access will load.

Before you can build the application, make sure that your web.config file is configured for Forms authentication. If you don't, the application will assume that you are using Windows® authentication as defined in the `machine.config` file. The web.config file will also need a location section group to deny any users that are not authenticated access to the edit profile page. You must also add a login control so that your users can log into the site. You can add the control to your main page or to a separate login page. It may be a good idea to add a register link to the login control so that your users can find the registration page.

**FIGURE 5**
```vb
Public Class ProfileHttpModule
    Implements IHttpModule

    Public Sub Dispose() Implements System.Web.IHttpModule.Dispose
    End Sub

    Public Sub Init(ByVal context As System.Web.HttpApplication) Implements System.Web.IHttpModule.Init
        AddHandler context.AuthorizeRequest, AddressOf Me.CheckProfile
    End Sub

    Public Sub CheckProfile(ByVal s As Object, ByVal e As EventArgs)
        Dim objApp As HttpApplication = CType(s, HttpApplication)
        Dim objContext As HttpContext = objApp.Context

        'User is authenticated, check profile
        If objApp.User.Identity.IsAuthenticated And _
                objContext.Request.Path <> "editprofile.aspx" Then
            Dim ProfileVersion As Integer = SqlTableProfileProvider.ProfileVersion

            Dim UserProfile As New ProfileCommon
            If CInt(UserProfile.GetProfile(objApp.User.Identity.Name).ProfileVersion.ToString) < ProfileVersion And _
                !objContext.Request.Path.EndsWith("editprofile.aspx") _
                Then
                    objContext.Response.Redirect("~/editprofile.aspx")
            End If
        End If
    End Sub
End Class
```

## Stepping through the Application  
To review, when a user visits the site and clicks on the link asking him to create a user account, he'll be redirected to the registration page and asked to fill in his profile information. When he clicks Next, he'll be asked to enter a username and password and will then be redirected to the default page. During each page load, the HTTPModule will check to see if the profile version specified in the web.config file is greater than the user's profile version. If it is, the user will be redirected to the edit profile page. If not, he'll continue browsing.

To ensure that the module is working properly, add a column to the custom profile table. The column must allow null values or you'll receive an error message when a user attempts to browse a page. This is because that property is not established yet for all users and has not been added to the web.config file. Add it and change the profile from version 1 to 2. When you save the web.config file and log onto the site, you can't browse to any page without updating the profile first, as expected.

The one catch with using the web.config file to store the profile version is that if you modify it when users are on the Web site, the application will reset and the users will be kicked off. Then they'll be redirected to the edit profile page on their next login attempt. With this in mind, you may want to create a simple text file or XML file to read the version number of the profile.
 
## Where to Go from Here
If you need some help getting started, you can download a Visual Studio® Installer (VSI) project that I've put together. It includes full source code written in Visual Basic and ASP.NET and provides a great foundation for beginning your application. It can be downloaded from the _MSDN_®_Magazine_ Web site. I've explored only a very small portion of the customization possibilities with the ASP.NET 2.0 Profile provider; I'm sure you'll discover lots more if you look. That's what's great about .NET-it's like having your own personal sandbox.