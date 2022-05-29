---
title: SmartInput Shortcut Keyboard
image: smartinput_shortcutkeyboard.png
tags:
  - hardware
  - software
  - esp8266
  - embedded
  - 3d-druck
  - python
  - web-frontend
  - design
  - loeten
---

Eine Shortcut Tastatur mit addressierbarer RGB beleuchtung und frei konfigurierbaren Tasten. [GitHub](https://github.com/niwla23/smartinput_ng)
<!--more-->

## Design
Das Case und die Tasten sind 3D gedruckt. 

Für das Case habe ich [dieses](https://www.thingiverse.com/thing:4186055) Modell von thingiverse leicht geändert, damit es den D1 Mini halten kann.

Die Tasten basieren auf [diesem](https://www.thingiverse.com/thing:738769) Modell. In Blender habe ich dann die jeweiligen Symbole auf die Tasten gesetzt.
Diese stammen größtenteils von FontAwesome. Das Spotify Logo ist direkt von der [Spotify Website](https://developer.spotify.com/documentation/general/design-and-branding/#using-our-logo)

## Hardware
Im inneren sitzt ein WeMos D1 Mini ESP8266 mit eingebautem USB to Serial Adapter. Über den wird das Modul mit dem PC verbunden. Für die Tasten habe ich Cherry MX Red transparent Switches benutzt. Diese sind als Input Matrix verschaltet.
Außerdem befinden sich 4 Neopixel WS2812B PCBs am Boden des Gehäuses.

  <block-image
    src="/smartinput_shortcutkeyboard/case_open.jpg"
    class="h-16">
  </block-image>

## Software
Die Software besteht aus drei Teilen:

 - SmartInput NG Firmware
 - SmartInput NG Daemon
 - SmartInput NG UI

### Firmware
Die Firmware ist in C++ (PlatformIO) geschrieben und läuft auf dem ESP8266. Diese sendet Events über die serielle Schnittstelle an den Daemon.

Die Events sehen so aus:
```c++
S:1 // (Taste 1 wurde kurz gedrückt und wieder losgelassen)
P:2 // (Taste 2 wurde gedrückt)
L:3 // (Taste 3 wurde lange gedrückt)
R:4 // (Taste 4 wurde losgelassen)
```
Außerdem liest die Firmware die serielle Schnittstelle aus um die LEDs zu steuern. Dabei ist das erste Byte der Wert für Rot, das zweite für Grün und das dritte für Blau. Das vierte Byte ist der Control Byte. Wenn er 0 ist, werden die nächsten Bytes für den nächsten Pixel interpretiert. Wenn er 1 ist, wurden alle Daten gesendet und der aktuelle Frame wird angezeigt. Neue Daten gelten dann wieder für Pixel 0.

```c++
int valueContext = RED;
size_t currentPixel = 0;
uint8_t currentColor[3] = {};

void ledLoop() {
    while (Serial.available()) {
        int value = Serial.read();

        if (valueContext == CONTROL) {
            pixels[currentPixel] = CRGB(currentColor[RED], currentColor[GREEN], currentColor[BLUE]);

            valueContext = RED;
            currentPixel++;

            if (value == 1) {
                FastLED.show();
                currentPixel = 0;
            }

        } else {
            currentColor[valueContext] = value;
            valueContext++;
        }
    }
}
```

### Daemon
Der Daemon ist in Python geschrieben und läuft auf dem PC. Er empfängt die Events, parst sie und ruft dann den konfigurierten handler auf.
Konfiguriert werden die Tasten über eine YAML Datei.

```yaml 
device: "VID:PID=1A86:7523 LOCATION=3-2.3" # hierüber wird das Gerät gefunden
baudrate: 115200 # Geschwindigkeit der seriellen Schnittstelle
keys:
  "0": # Die erste Taste
    short_press: # Wird ausgeführt wenn die Taste kurz gedrückt wird
      - handler: exec
        params:
          command: "playerctl play-pause" # Pausiert die Medienwiedergabe oder setzt sie fort
    long_press: # Wird ausgeführt wenn die Taste lange gedrückt wird
      - handler: exec
        params:
          command: "playerctl next" # Spielt das nächste Lied ab

  "1": # Zweite Taste
    short_press:
      - handler: exec
        params:
          command: "amixer -D pulse sset Master 5%+" # Hebt die Lautstärke um 5 Prozentpunkte an
    long_press:
      - handler: exec
        params:
          command: "amixer -D pulse sset Master on" # enmutet die Lautsprecher
      - handler: exec
        params:
          command: "notify-send 'Ton an'" # Sendet eine Benachrichtigung
```

Es gibt auch noch weitere handler wir http oder keyboard um Tastendrücke zu emulieren.
Der Daemon hat einen Thread welcher die RGB Effekte managed. In diesem läuft ein Flask Webserver, der eine Effektliste zurückgeben kann und die Effekte wechseln kann. Dazu startet er einen subprocess mit der Effektfunktion und den Optionen.\
Der aktuelle Effekt und seine Einstellungen werden in einer JSON Datei gespeichert.

### UI
Die UI läuft in [Tauri](https://tauri.studio/), einem Rust Framework für Desktop-Apps. Es rendert HTML in einer WebView und bietet sichere APIs für die Kommunikation mit dem System an. Für die eigentliche UI verwende ich Vue 3 mit TailwindCSS. Die UI redet über eine scoped HTTP API mit dem Daemon.

Sie kann Effekte abrufen und verändern.

