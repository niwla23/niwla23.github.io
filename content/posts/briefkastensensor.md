---
title: Briefkastensensor
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

Ein Sensor am Briefkasten mit einem ESP, der eine Benachrichtigung bei neuer Post sendet.
<!--more-->
Der Sensor ist über das gleiche alte Post Kabel mit dem ESP im Keller verbunden wie die [Torsteuerung](/posts/gateautomation). Um den Sensor am Briefkasten zu befestigen habe ich eine Halterung gedruckt an welche der Endschalter geklebt wird. Die Halterung wird dann in den Briefkastenschlitz eingesetzt.

## openHAB und Benachrichtigungen
Die Benachrichtigung wird über eine habapp rule durch [ntfy.sh](ntfy.sh) gesendet. Der Sensor ist als Switch in openHAB eingerichtet. Ist er `ON` wurde neue Post eingeworfen, wenn er von Hand wieder auf `OFF` gestellt wird, wird eine Benachrichtigung gesendet das der Kasten geleert wurde.

Die STL und CAD Datei kann man [hier](https://www.printables.com/model/232235-mailbox-pushbutton-mount) herunterladen.

<div>
  <block-image
    src="/briefkastensensor/cad.png" />
</div>
