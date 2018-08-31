# Simple driver.

I wrote this driver to be as simple as posible. A great starting point for those unfamiliair with coding.

## Installation instructions.

1. Install NodeJS on your system, get it here -> https://nodejs.org/en/download/
2. On this github page there is a download button. Use it to download this code.
3. Extract the zip file in your download folder..
4. Use your computer's console and go to the location of the extracted files.
   in windows use WIN + R, In the window that pops up type CMD and press OK.
   now type cd C:\Users\%USERNAME%\Downloads\neeo_driver-simple-master
5. install the dependancies of this little script by typing: npm install

## Changing the code.

You can edit index.js with any textediting tool but i advice you to use Microsoft Code. => https://code.visualstudio.com/
First goal is to edit in the NEEO brain IP address. Edit line '' brain: "10.2.1.64" '' and change 10.2.1.64 to the IP address of your brain.

Add more buttons in any way you like.
This exampe include two HTTP get examples and two HTTP post examples. change this to controll a device that accepts HTTP gets or posts to be controlled.

## running the driver.

Use your computer's console like before.
in windows use WIN + R, In the window that pops up type CMD and press OK.
now type cd C:\Users\%USERNAME%\Downloads\neeo_driver-simple-master

to start the driver type: node index.js

## remarks

This driver uses some shortcuts to make it more simple.
I removed all stuff that isn't required to run a driver so you don't get distracted.
The code only uses one file (index.js) to provide some overview of what's needed.
This driver doesn't support NEEO CLI, like in the NEEO examples. this to make it more understandable.
All in all this is the absolute minimum you will need but in most cases that is all you need for a simple personal script.
