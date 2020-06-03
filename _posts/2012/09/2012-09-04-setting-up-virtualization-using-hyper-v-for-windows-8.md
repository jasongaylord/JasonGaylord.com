---
title: "Setting up Virtualization using Hyper-V for Windows 8"
author: Jason Gaylord
msmvps_path: "https://blogs.msmvps.com/jgaylord/2012/09/04/setting-up-virtualization-using-hyper-v-for-windows-8/"
date: 2012-09-04
categories: [archive]
tags: [archive]
bitly: https://jasong.us/3eJGuCv
---

So you've downloaded Windows 8, installed it on your box, and are ready to get virtual machines (VMs) setup. Now what? In Windows 7 days, this could be accomplished by using Virtual PC or VirtualBox (an offering from Oracle). With Windows 8, VirtualBox is still available. However, Windows 8 comes with a new feature that's been available for several years from Microsoft in Windows Server called Hyper-V.

To install Hyper-V, navigate to the charm menu (right-side menu) and choose Search. Type in ‘Programs and Features' in the search box, click the Settings option underneath (as shown below), then click on the item to the left.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_2.png)

When Programs and Features load, click the link to Turn Windows features on or off like the image below:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_1.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_4.png)

Check the box to turn on Hyper-V and click OK.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_2.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_6.png)

Continue through the normal prompts to set it up. Once it's done, we're ready to setup our first VM.

Go back into Search and type ‘Hyper-V Manager'. When it loads, you'll notice that the right-hand menu has many options.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_3.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_8.png)

Since we just care about getting a VM up and running for now, we'll focus on creating a new VM. Before we choose New and create a new VM, if we'd like our VM to connect to the Internet (and to our host machine), we'll want to hop into the Virtual Switch Manager and create some NICs to share with our VM. In a server environment, we'll typically want to keep our host NICs separate from our VM NICs. However, in our case, we probably don't care and if we have a laptop, chances are we only have an onboard NIC, wireless NIC, and our Internal that we'll setup.

An example of this is shown below:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_4.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_10.png)

Now that we have our NICs setup, we should create our hard drive. We could use the wizard and setup the hard drive through it. However, our options are limited to using thin provisioning, a technique where our hard drive grows dynamically. I'd prefer to setup my hard drive as a fixed disk as I may install applications such as Microsoft SQL Server for testing out applications. The reasoning behind this has to deal with performance when the data is growing dynamically within an application. I can run into some unexpected results. If I'm ok with that, I may choose to create a dynamic disk.

Anyhow, I'll choose New > Hard Disk. If I plan to only use Hyper-V for this hard drive and never use it with Virtual PC again and only use it in Windows 8 or Windows Server 2012, I can choose VHDX. Otherwise, I'll choose VHD. VHD has a 2 TB limit and can become corrupt during power failures. I'll choose VHDX, then fixed size on the next screen, name my hard disk and then proceed to configure.

In Windows 8, we have some really cool features for our virtual disk.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_5.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_12.png)

Notice that we can create a new disk, copy the data from a pre-existing hard drive (ie: the main computer hard disk or an external USB drive), or to copy another VHD or VHDX. For this case, I want to create a blank drive. I'll then hit Finish to create my disk.

Now that my disk is created, I'll finally choose New > Virtual Machine. I'll get to name my machine and store it wherever I'd like (similar to the Virtual Hard Disk we just created).

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_6.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_14.png)

I'll also get a chance to specify the amount of memory (RAM) that I'd like to give the machine. With this, I have the option to use dynamic memory, a new feature included in Hyper-V when it was updated in Windows Server 2008 R2.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_7.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_16.png)

Dynamic memory is similar to having a dynamic disk in that it only allocates the amount of memory needed for the applications to run. Certain cases work great for this (ie: file and print services). However, for a development environment, strange errors can occur depending on your development style. So, since I have 16 GB of RAM in this machine, I'll opt for carving out 2 GB when the machine is running.

The next screen allows us to configure the default network connection. Don't worry that there's only one option. If you have both an internal NIC as well as a wireless NIC, you'll be able to add the additional NICs after the fact. Choose the one you are connected to now and continue.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_8.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_18.png)

The next screen allows us to choose a hard disk. Remember that since we used a fixed disk, we'll want to choose the attach option and browse to the disk we created.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_9.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_20.png)

If we originally choose to use a dynamic disk, we'll get additional Installation options for installing an operating system as shown below:

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_10.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_22.png)

But, we didn't, so instead we'll continue to the Summary and choose Finish.

Once our VM is created, we'll see it in the list of Virtual Machines on our PC. The current state of the VM will be off. One cool benefit of having Hyper-V installed is that we can Start a VM, shutdown our host, and when we power up our host, the VM will be started again without losing state. This is because Hyper-V controls the state of the VM and constantly saves that state to the same location as the VM file.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_11.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_24.png)

Before we start our VM, let's hop into the configuration and modify it accordingly. We'll either right-click and choose Settings or left-click once our VM name and choose Settings from the right-hand menu that is named after our Virtual Machine.

We'll begin by adding in the other NICs. We do this by choosing Add Hardware in the list and clicking Network Adapter. Then click the Add button.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_12.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_26.png)

We can continue through the process until we have added all of the NICs that we'd like to add.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_13.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_28.png)

Before we close out of Settings, we'll want to choose our IDE Controller and update our DVD drive to point to the appropriate ISO image or drive containing our OS installation disk. I'll be installing a Windows 8 x64 operating system using an ISO image I have placed on an external USB hard drive.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_14.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_30.png)

While we are still in this screen, take notice to the upper left-hand corner above our settings. We don't need to hop out of one settings window, click on another VM, and go into their settings to edit. Rather, we can navigate through all of our VMs right here. Do note, however, that if a VM is started, some settings such as the memory allocation and hardware configuration will not be available. We must shutdown the VM to make those changes. We can mount the IDE controller for our DVD drive when the VM is running.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_15.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_32.png)

Woot! We can now boot our VM. We can do this by right-clicking the VM (or using the menu in the right-hand side under the name of the VM) and choosing Start. Start boots the VM, but doesn't show it. If we'd like to see the screen, we'll have to then choose Connect under the same menu.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_16.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_34.png)

We'll want to continue with our OS install as usual. Note that you will give up mouse and keyboard control for some operating systems. To gain back control on your host machine, press and hold the Alt, Control, and left arrow keys.

After your OS is done installing, there's a really good chance you'll want to install the Integration Services by using the VM instance Action menu and choosing the option to Insert Integration Services Setup Disk.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_18.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_38.png)

This will mount this ISO image to your DVD drive. You'll then be able to run the setup from your operating system.

Once it's installed and you reboot your VM, you'll notice that you'll now have the ability to use the VM instance Clipboard menu. The options here are to ‘Type clipboard text' or ‘Capture screen'. Hyper-V does not support dragging and dropping files or copying clipboard items using Ctrl-C and Ctrl-V. It also does not support copying text from the VM back to the host. That is, natively. So, we now have to find a solution for this. We have a couple of options. Many technology consultants tend to recommend using a VNC server and VNC client such as [RealVNC](http://jasong.us/PZcJyI) or [](http://tightvnc.com/)[TightVNC](http://jasong.us/PZcKD5). In Windows 8, depending on your display adapter, you may not have the desired display settings available for the VNC client. As a result, this is the first time in many years that I'd highly recommend using Remote Desktop.

Remote Desktop from the host back to the VMs will give me fully integrated capabilities such as full screen display and copy and paste back and forth between the two machines.

On Windows 8, setting up Remote Desktop is as simple as going into Search and searching for ‘Remote Desktop', choosing Settings, and clicking the option to Allow remote access to your computer.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_20.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_42.png)

When this opens, we'll want to choose the radio button to Allow remote connections to this computer. We'll also want to choose Specific Users (if on a business network) that have the ability to connect to it.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_21.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_44.png)

Then, if you're connecting to Remote Desktop from Windows 8, search for it the same way as before, but this time leave the default Search results as Apps and choose the Remote Desktop Connection.

[![image](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_thumb_22.png "image")](http://jasongaylord.com/Media/Default/Windows-Live-Writer/Setting-up-Virtualization-for-Windows-8_C451/image_46.png)

When that appears, type in the host name of your VM and you're connected.

In summary, I walked you through the basics of setting up virtualization on Windows 8 and connecting to the VM for better integration. We talked about some caveats such as the native support for copying and pasting as well as benefits such as the "always on" functionality of your VM. I hope that this post helps clear up any issues or questions you've had for Windows 8 virtualization.

If there's a topic or area that I haven't covered here (or anywhere on my blog) that you're interested about, leave me a comment and I'll get to it as soon as possible.