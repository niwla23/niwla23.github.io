---
title: Printserver
image: /printserver/thumb.png
tags:
  - hardware
---

Ein Druckserver und Spotify Player aus einem alten Laptop.
<!--more-->
Eigentlich wollte ich nur Musik in der Werstatt haben und dafür den Drucker Laptop mit `spotifyd` ausrüsten. Die erste Idee war einfach externe Lautsprecher anzuschließen, aber die Qualität des Kopfhörerausgangs war jetzt nicht gerade HiFi Audio. Die Internen Lautsprecher klangen auch nicht wirklich gut, aber immerhin kein rauschen.

Dann wollte ich *einfach* nur die Internen Lautsprecher austauschen. Ich hab den Laptop also komplett auseinander genommen und komischerweise hatte ich gar keine Lust mehr das Ding wieder zusammenzuschrauben (und ich hatte auch keinen Plan mehr wo was hingehört). 
Da ich aber Bildschirm, Tastatur, Touchpad und CD-Laufwerk eh nicht brauche (ist ja ein Server), habe ich das Mainboard in ein Holzgehäuse eingebaut und die Lautsprecher auf DuPont Female Stecker ausgeführt. So kann ich einfach größere Lautsprecher anschließen und richtig im Raum positionieren. (Bisher ist das DAC / Verstärker noch nicht durchgebrannt).

## Software
Auf dem Server läuft ein Docker Container mit OctoPrint der das privileged flag gesetzt hat und somit auf Kamera(s) und den Drucker selber zugreifen kann. Außerdem läuft `spotifyd`, eine Spotify Connect Implmentierung als systemd service auf dem Server.

<div class="flex">
<div>
  <block-image
    src="/printserver/printer.jpg" />
</div>
<div>
  <block-image
    src="/printserver/speaker.jpg" />
</div>
<div>
  <block-image
    src="/printserver/printer.jpg" />
</div>
</div>
