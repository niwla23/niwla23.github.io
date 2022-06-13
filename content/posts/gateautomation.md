---
title: Handysteuerung Tor
image: /gateautomation/thumb.jpg
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

Mit einem Ultraschallsensor, einem alten Post Kabel und einem Servo habe ich unser Gartentor smart gemacht.
<!--more-->
Das Tor hat eine Fernbedienung, die nur einen Knopf hat. Dieser Knopf führt eine der folgenden Aktionen aus:

- Auf
- Zu
- Stopp

Wobei sich das Tor immer in die entgegengesetzte Richtung bewegt in die es sich beim letzten Mal bewegt hat. Den Knopf habe ich zuerst mit Fischertechnik Pneumatik und einem ESP32 gestuert. Später habe ich die Pneumatik durch einen Servo ausgetauscht.
Das Tor lässt sich so schon steuern, man weiß aber nicht in welchem Zustand es sich gerade befindet.

Meine erste Idee war einen ESP32 mit Ultraschallsensor am Tor anzubringen, der den Abstand misst.

> Problem: kein WLAN
Zuffälligerweise lag zwischen Keller und Tor ein altes Postkabel. Nach einem halben Tag messen hatte ich dann alle Adern zugeordnet.
Ich musste also nur noch den Ultraschallsensor an das Kabel löten, einen ESP an der anderen Seite anbringen und ein Gehäuse für den Sensor drucken.
Das ganze sieht dann so aus:

Bild: Ultraschallsensor

Bild: ESP32

Um das ganze mit einem Slider in openHAB steuern zu können, habe ich eine Regel erstellt, die das Tor in die gewünscht Position fährt.
Diese regel wird ausgeführt, wenn der Tor Slider einen Befehlt erhält.

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

Diese Regel ändert das Label vom Slider wenn sich der `working` Zustand vom Tor ändert. Dieser verhindert, dass die Steuerungsregel doppelt läuft
was zu ziemlichem Chaos führt.
Der pushes > 10 Check verhindert das in dem Fall, dass der Sensor kapput geht alle paar Sekunden der Knopf gedrückt wird was bei gleichzeitigem
Ausfall der VPN Verbindung außerhalb des Netzwerks nicht mehr zu stoppen wäre.

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
