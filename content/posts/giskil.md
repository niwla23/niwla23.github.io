---
title: Giskil
image: /giskil/thumb.png
tags:
  - game
  - software
  - web-frontend
  - design
  - datenbanken
---

Giskil ist ein **multiplayer**, browserbasiertes Spiel bei sich die Spieler eine Definition für ein Wort ausdenken, die möglichst plausibel ist.
<!--more-->
Sobald alle Spieler eine Definition eingegeben haben startet die Ratephase. Alle ausgedachten Definitionen sowie die richtige werden allen Spielern angezeigt. Diese raten welche die richtige ist. Für jeden Vote bekommt die Person die sich die Defintion ausgedacht hat 3 Punkte. Für das auswählen der richtigen Definiton gibt es 2 Punkte.

Link: https://giskil.cloudserver.click

## Datenquelle

Momentan stammen alle Daten aus wahlweise der englischen oder deutschen Wikipedia. Es werden ausschließlich Artikel verwendet die eine Kurzdefintion haben. Jede Stunde werden ein paar neue Definitionen von Wikipedia heruntergeladen und in Redis gespeichert.

## Stack

| Komponente             | Technik                                                                        |
| ---------------------- | ------------------------------------------------------------------------------ |
| Realtime-Kommunikation | socket.io                                                                      |
| Frontend               | Nuxt.js, TailwindCSS                                                           |
| Backend                | Python 3, [python-socketio](https://python-socketio.readthedocs.io/en/latest/) |
| State Management       | Redis                                                                          |
| Wortspeicher           | Redis                                                                          |
