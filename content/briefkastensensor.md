---
title: Mailbox Sensor
image: /briefkastensensor/thumb.png
featured: true
tags:
  - app
  - openhab
  - software
  - hardware
  - esp
  - esp32
  - iot
  - embedded
  - 3d-druck
  - featured
---

A Sensor on the mailbox connected to an ESP that sends a notification when there is new mail.
<!--more-->
The sensor is connected to the ESP in the basement through the same old postal cable as the gate automation.
To attach the sensor to the mailbox, I printed a holder to which the keyboard switch is glued.
The holder is then inserted into the mailbox slot.

## openHAB und Benachrichtigungen
The notification gets send through [ntfy.sh](ntfy.sh) with a habapp rule. The sensor is setup as a Switch item in openHAB. If it is `ON`, new mail is available, it can then be reset manually to `OFF`. This also triggers a notification so everyone knows it has been emptied.

STL and CAD files are available for [download](https://www.printables.com/model/232235-mailbox-pushbutton-mount) 

<div>
  <block-image
    src="/briefkastensensor/cad.png" />
</div>
