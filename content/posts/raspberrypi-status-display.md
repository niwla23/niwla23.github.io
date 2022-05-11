---
title: Raspberry Pi Mini OLED Status Display
image: raspberrypi-status-display.jpg
tags:
  - systemadministration
  - software
  - hardware
  - raspberry-pi
  - 3d-druck
  - design
  - loeten
---
Diese Statusanzeige benutzt einen SSD1306 128x64 Pixel OLED Bildschirm welcher über I2C an einen Raspberry Pi 4 angeschlossen ist.
<!--more-->
Der Bildschirm selbst sitzt in einer 3D-gedruckten Halterung am oberen Rand von einem Kallax Regalfach.

## Angezeigte Informationen

### Hostname + IP

In der ersten Zeile (bei diesm Modell rot) wird der Hostname sowie die externe IP des Raspberrys angezeigt. Der Hostname wird über `socket.gethostname()` abgerufen, die IP mit diser Funktion die ich auf StackOverflow gefunden habe:

```python
def get_ip():
    """https://stackoverflow.com/a/28950776"""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.settimeout(0)
    try:
        s.connect(('192.255.255.255', 1))
        IP = s.getsockname()[0]
    except Exception:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP
```

Sie erzeugt einen socket der direkt timeouted und versucht dann eine Verbindung zu einer Broadcast IP des lokalen Netzwerks aufzubauen.
Dadurch ist es möglich die IP zu finden die normalerweise benutzt wird (keine VPS verbindungen, docker bridges oder localhost).

### Load, CPU Auslastung, RAM Auslastung, CPU Temperatur

Diese Informationen werden über die built-in library psutil abgerufen.

### firing Alerts

Die Anzahl der firing Alerts wird per requests von prometheus abgerufen. Das Symbol auf der rechten Seite ist ein Häkchen, wenn es keine firing Alerts gibt, sonst ein Ausrufezeichen.

## Burn-In Schutz

Wenn OLED Displays über lange Zeit das gleiche Anzeigen, kann es zu burn-in effekten kommen. Um das zu verhindern wird alle 10 Minuten ein paar mal der Bildschirm zwischen schwarz und weiß gewechselt.

[Source Code](https://github.com/niwla23/raspberry_oled_status_display)
