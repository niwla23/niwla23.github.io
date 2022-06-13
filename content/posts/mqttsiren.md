---
title: MQTT Sirene
image: /mqttsiren/closed.jpg
tags:
  - hardware
  - software
  - esp8266
  - embedded
  - 3d-druck
  - design
  - loeten
  - mqtt
  - iot
---

Eine WLAN Sirene die sich über MQTT aktivieren lässt
<!--more-->
Das Gehäuse ist 3D-gedruckt. Der ESP8266 sitzt im Deckel und ist mit zwei Kabeln mit dem Lautsprecher im Sockel verbunden. Alle Teile sind zusammengesteckt. Außerdem wird das Last will and Testament (LWT) Feature von MQTT verwendet um zu überwachen ob die Sirene mit dem Broker verbunden ist.

  <block-image
    src="/mqttsiren/open.jpg"
    class="h-16">
  </block-image>
  <block-image
    src="/mqttsiren/body.png"
    class="h-16">
  </block-image>
  <block-image
    src="/mqttsiren/deckel.png"
    class="h-16">
  </block-image>

## Code für Sirenen Sound
```c++
void loop {
  // increase frequency
  for (size_t i = 0; i < 10; i++) {
      tone(pin, i * 10 + baseFrquency);
      delay(10);
  }
  // keep frequency
  delay(100);
  // decrease frequency
  for (size_t i = 10; i > 0; i--) {
      tone(pin, i * 10 + baseFrquency);
      delay(10);
  }
}
```