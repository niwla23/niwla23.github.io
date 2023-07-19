---
title: Automatic Warehouse 
image: /lagersystem/thumb.jpg
featured: true
tags:
  - backend
  - frontend
  - hardware
  - 3d-druck
---

A fully automatic warehouse using part boxes from the hardware store with (potentially) 192 Boxes. It works by moving a carriage with an extendable part that goes into
the warehouse, hooks into a box and pulls it out. (and vice-versa)
<!--more-->

<div>
<video muted autoplay loop>
  <source src="/lagersystem/video.mp4" type="video/mp4" />
</video>
</div>

<div>
  <block-image src="/lagersystem/carriage.jpg" alt="Y axis motor" />
</div>

## Motors
- X Axis (Left and Right): One NEMA17 Stepper, Belt driven with pulley
- Y Axis (Hoch und Runter): One NEMA17 Stepper on each side, Belt driven with pulley
- Z Axis (In and Out): One NEMA17 stepper with a spindle.

<div>
  <block-image src="/lagersystem/yMotor.jpg" alt="Y axis motor" />
</div>


## Software 
The software is split up into three parts, running on different systems.
### Manager
The Manager Software is written in Go and React. It is the user-facing software to select a part for delivery. It is also the service that manages the Database.
Following entities exist in the database:

- `Part`: A part can be linked to a box. This allows to have multiple parts in one Box and dynamically change the box of a part without deleting it. 
- `Tag`: Can be assigned to parts for easier filtering. M2M to parts.
- `Box`: Represents a physical box. Has relations to the parts in it and a one to one to a position.
- `Position`: Is only a ID with a relation to the stored box (if any)

Manager uses the API of the Operator Service to Deliver Boxes and update the db accordingly. It also proxies some of its APIs like `getIOState`. Manager is also responsible for
"clearing IO" (storing all boxes that are in IO at free positions) as this involves database operations.

### Operator
This is a python service running on the raspberry pi zero connected to the Arduino. It sends G-Code to GRBL.
It exposes following HTTP API: 
- `getIOState`: returns the occupancy of the IO Slots.
- `deliverBox(posId)`: delivers a box to a free IO Slot by Position Id.
- `storeBox(posId, ioSlot)` picks a box up from `ioSlot` and stores it at `posId`
- `scanBoxId(ioSlot)` picks a box up from `ioSlot`, scans it and stores it at the scanner position. It then returns the boxId.
- `getPositions` the operator has configured coordinates for each possible box position. These are returned by this endpoint.

The Operator also handles the pushbuttons on the warehouse (clear IO, light color, reboot, home, standby), auto-standby with auto wakeup and Neopixel LED Strip.

All operations done by the operator are "atomic" (system is always in a safe state after performing action, no box on carriage after operation) to prevent
very bad things from happening. Otherwise the operator may do a scan, keep the box on the carriage, then the manager fails for some reason and then tries to pick up a box with a box still
loaded.

### Firmware
The Firmware runs on an Arduino and is just a normal GRBL, which is a firmware meant for CNC Routers. It accepts GCode commands over USB and manages queuing as well as acceleration.

## Scanner
To detect which box is currently in the scanner, I use a raspberry pi camera and the `zxing-cpp` library to decode the QR Codes that are attached to the back of the drawers.
The code contains a UUIDv4 that is registered in the database.


<div>
  <block-image src="/lagersystem/scanner.jpg" alt="Y axis motor" />
</div>


## Occupancy detection of IO Slots
The warehouse has **three IO Slots** for putting in boxes for storing or taking drawers out. As the "state" of these IO Slots is meant to be modified by the user, the system needs sensors
to detect which IO Slots are free. For this I used cheap IR proximity sensors. They are connected to the raspberry pi zero



<div>
  <block-image src="/lagersystem/thumb.jpg" alt="Y axis motor" />
</div>

