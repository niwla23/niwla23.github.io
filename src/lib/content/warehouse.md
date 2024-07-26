### Fully automatic warehouse
This project is a good mix of software and hardware. It uses a three axis system to pick up drawers from six 32 slot magazines.


Mechanically it is driven by standard stepper motors which are driven by an Arduino Uno. The Uno connects to a Pi Zero via USB Serial. Here runs the 'operator' software
writtten in python. It is a stateless service which knows the coordinates of the slots and has endpoints to pick up a box or store it somewhere. It receives commands 
from a Pi 4 running the 'manager' server. It consists of a Go backend that connects to a database which maintains the relations between stored parts, boxes and positions.

The frontend is built using React and Tailwind. One can fuzzy search (powered by typesense) for parts that are stored, request their delivery or add new parts with name,
description, tags and an image.

[Source Code](https://github.com/niwla23/lagersystem)
