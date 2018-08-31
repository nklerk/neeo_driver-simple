"use strict";
const neeoapi = require("neeo-sdk");
const http = require("http.min");

let actualDriverObject;
actualDriverObject = neeoapi.buildDevice("My first driver"); // change "My first driver" to anything you like but keep the "" characters
actualDriverObject.setType("ACCESSOIRE"); // can be changed to "ACCESSOIRE" or "AVRECEIVER" or "DVB" or "DVD" or "GAMECONSOLE" or "LIGHT" or "MEDIAPLAYER" or "MUSICPLAYER" or "PROJECTOR" or "TV" or "VOD"
actualDriverObject.addButton({ name: "button-a", label: "Button A" }); // This makes a new button named button-a, on the remote its shown as Button A
actualDriverObject.addButton({ name: "button-b", label: "Button B" }); // This makes a new button named button-b, on the remote its shown as Button B
actualDriverObject.addButton({ name: "button-c", label: "Button C" }); // This makes a new button named button-c, on the remote its shown as Button C
actualDriverObject.addButton({ name: "button-d", label: "Button D" }); // This makes a new button named button-d, on the remote its shown as Button D

// Here is the code that gets executed when a button is pressed.
actualDriverObject.addButtonHandler((buttonName, deviceId) => {
  console.log(`[CONTROLLER] ${buttonName} button pressed`);
  if (buttonName == "button-a") {
    http("http://www.google.com"); //Just sneds a http get, use this to controll devices that supports a http get
  }
  if (buttonName == "button-b") {
    http("http://www.google.com");
  }
  if (buttonName == "button-c") {
    http.post("https://httpbin.org/post", { data: "hello" }); //Sends a http post with json data {data: "hello"}
  }
  if (buttonName == "button-d") {
    http.post("https://httpbin.org/post", { data: "hello" });
  }
});

// change this to set your NEEO brain IP. change 10.2.1.64 to the IP address of your NEEO brain.
const neeoSettings = {
  brain: "10.2.1.64",
  port: 1104,
  name: "myFirstDriver",
  devices: [actualDriverObject]
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// Do not change the code below this point. ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
// Do not change the code below this point. ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
// Do not change the code below this point. ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
// Do not change the code below this point. ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
neeoapi
  .startServer(neeoSettings)
  .then(() => {
    console.log("# READY! use the NEEO app to search for: " + actualDriverObject.devicename);
    if (actualDriverObject.type == "ACCESSOIRE") {
      console.log("\r\n  ACCESOIRE devices do not have their own recipy slides.");
      console.log("  You need to add the buttons as shortcuts to an existing device slide,");
      console.log("  add a dummy device (search for dummy) and add the buttons as shortcut there or");
      console.log("  change the actualDriverObject.setType line to present this driver as a different device type.");
    }
  })
  .catch(err => {
    console.error("ERROR!", err);
    process.exit(1);
  });
