---
title: Servopoti
image: servopoti.jpg
tags:
  - hardware
  - software
  - arduino
  - platformio
  - 3d-druck
  - esp
  - embedded
  - loeten
  - iot
---

Ein motorisierter Drehregler auf Basis eines Servos (mit WLAN und so).
<!--more-->
Dieser Drehregler nutzt einen normalen Miniaturservo bei dem ich ein weiteres Kabel an den Schleifer vom Poti gelötet habe.
So lässt sich die Position des Servos abrufen, aber auch extern eingestellt werden. Im inneren sitzt ein D1 Mini Board an welches der Servo und das dazugehörige Poti angeschlossen sind.

Der ESP8266 fragt in seiner main loop dauerhaft die Position des Potis ab und prüft auf neue MQTT Befehle. Wenn sich die Position signifikant ändert, wird eine MQTT Message an ein einstellbares Topic gepublished. Wird eine Message auf einem ebenfalls einstellbaren Topic empfangen, wird der empfangene Wert in einen Wert im Bereich des Servos umgerechnet und der Servo auf diesen gesetzt.

## Use cases
 - Lautstärkeregelung
 - Smart Home (Dimmer, Hue Werte)
 - Schalter (mit Threshold ab dem der Servo springt)
 - Stufenschalter


[Hier geht es zum GitHub Repo](https://github.com/niwla23/servopoti)