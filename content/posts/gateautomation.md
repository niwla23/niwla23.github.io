---
title: Handysteuerung Tor
image: /gateautomation/thumb.jpg
featured: true
tags:
  - app
  - openhab
  - software
  - hardware
  - esp
  - esp32
  - embedded
  - loeten
  - iot
---

With an ultrasonic sensor, an old postal cable, and a servo, I made our garden gate smart.
<!--more-->

The gate has a remote control with only one button. This button performs one of the following actions:

- Open
- Close
- Stop

The gate always moves in the opposite direction of its last movement. Initially, I controlled the button using Fischertechnik Pneumatics and an ESP32. Later, I replaced the pneumatics with a servo.

While the gate could be controlled, there was no way to know its current state.

My initial idea was to attach an ESP32 with an ultrasonic sensor to the gate to measure the distance.

> Problem: No Wi-Fi
Coincidentally, there was an old postal cable between the basement and the gate. After half a day of measurements, I managed to identify all the wires.

All I had to do was solder the ultrasonic sensor to the cable, attach an ESP32 on the other end, and 3D print a casing for the sensor.

Here's how it looks:

![Ultraschallsensor](ultrasonic_sensor_image_link)

![ESP32](esp32_image_link)

To control it using a slider in openHAB, I created a rule that moves the gate to the desired position. This rule is triggered when the gate slider receives a command.

```python
import time
from org.slf4j import LoggerFactory

logger = LoggerFactory.getLogger("de.niwla23.automation.gate")
logger.info("Starting gate check")

logger.info(str(ir.getItem("gate_working").state))
if str(ir.getItem("gate_working").state) != "OFF":
  exit(0)

def invert_position(pos):
    return 100 - pos


target = int(float(str(ir.getItem("gate").state)))
logger.info("Target value", target)

def get_current():
    return invert_position(int(float(str(ir.getItem("gate_status").state))))


def is_ok():
    return get_current() in range(target - 5, target + 5)

def press_button():
    events.sendCommand('gate_button', 'ON')


if is_ok():
    logger.info("position is already ok")
    exit(0)
else:
    events.sendCommand('gate_working', 'ON')
    logger.info("position is not ok, starting...")
    press_button()
    time.sleep(5)
    # keep checking if posititon reached press button again
    # when position is 0 or 100 press button again.
    # cancel after 10 pushes to prevent gate from going crazy in case of sensor failure
    iterations = 0
    pushes = 0
    
    while True:
        if pushes > 10:
          break
        iterations = iterations + 1
        if is_ok():
            if get_current() > 94 or get_current() < 8:
              break
            pushes += 1
            press_button()
            break
        if iterations > 90:
            pushes += 1
            press_button()
            iterations = 0
            continue
        current = get_current()
        if current > 98 or current < 2:
            logger.info("gate is fully open / closed")
            time.sleep(5)
            if get_current() > 98 or get_current() < 2:
                logger.info("gate is still fully open / closed, pressing button.")
                pushes += 1
                press_button()
                iterations = 0
                time.sleep(5)
        time.sleep(1.5)
logger.info("position is ok now, exiting...")
events.sendCommand('gate_working', 'OFF')
```
This rule updates the label of the slider when the gate's working state changes. It prevents the control rule from running twice, which would lead to chaos.

The pushes > 10 check prevents the button from being pressed every few seconds in case of sensor failure, which would be uncontrollable in case of a VPN connection failure outside the network.

```yaml
triggers:
  - id: "1"
    configuration:
      itemName: gate_working
      state: ""
      previousState: ""
    type: core.ItemStateChangeTrigger
conditions: []
actions:
  - inputs: {}
    id: "2"
    configuration:
      type: application/vnd.openhab.dsl.rule
      script: gate.label = "Tor (" + gate_working.state.toString + ")"
    type: script.ScriptAction
  ```

Diese Regel, der gate proxy updater setzt den Wert vom Tor Controlslider auf den invertierten Wert vom Sensor.
The rule "gate_proxy_updater" sets the value of the Gate Control Slider to the inverted value of the sensor.

```yaml
triggers:
  - id: "1"
    configuration:
      itemName: gate_status
      previousState: ""
    type: core.ItemStateChangeTrigger
conditions: []
actions:
  - inputs: {}
    id: "2"
    configuration:
      type: application/vnd.openhab.dsl.rule
      script: if(gate.state != gate_status.state) gate.postUpdate((100 -
        gate_status.state as DecimalType).toString)
    type: script.ScriptAction
```
