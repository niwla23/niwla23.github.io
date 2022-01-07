---
title: SchulHack
image: schulhack.png
tags:
  - app
  - software
  - react native
---

SchulHack ist eine App mit der sich der Vertretungsplan des Gymnasiums Walsrode abrufen lässt. Weitere FUnktionen sind das speichern des
Stundenplans, Aufgabenansicht, Klassenarbeitenübersicht und das Abrufen von Geburtstagen von IServ.
<!--more-->
Die App ist in React Native geschrieben.

[Source Code](https://github.com/niwla23/schulhack)
[Website](https://schulhack.tk)

## Parsing

### Vertretungsplan

Der Untis Vertretungsplan besteht aus Zeilen mit nur einer Spalte (Klasse, Header Zeile) und Zeilen mit 6 Spalten (Zeit, Fach, Lehrer, Text, Klassen, Raum). Wenn man den Plan von oben nach unten ausliest kann man also recht einfach die Einträge einzelnen Klassen zuordnen und die Felder benennen.
Die Funktion zum Parsen des Plans sieht so aus:

```typescript
  parse(courses: Array<String>) {
        const $ = cheerio.load(this.input)
        let header = $(".mon_title").text().split(" ")
        let date = header[0]
        let week = header[header.length - 1]


        // The table containing the actual plan
        const contentTable = $($(".mon_list").children()[0])

        // The headers of the contentTable
        var contentHeaderList = [
            "time",
            "subject",
            "teacher",
            "text",
            "course",
            "room",
        ];

        // Scrapping function start
        var currentClass: String | null = null;
        var parsedPlan = {};
        var beforeRow: String | null = null
        var beforeClass: String | null = null
        contentTable.children().each(function (_index: Number, row) {
            row = $(row)
            if (row.children().length === 6) {
                if (currentClass) {
                    if (courses.includes(currentClass)) {
                        var parsedRow: row = { time: null, subject: null, teacher: null, text: null, course: null, room: null };
                        if (!parsedPlan[currentClass]) {
                            parsedPlan[currentClass] = [];
                        }
                        row.children().each(function (index2, column) {
                            column = $(column)
                            if (column.text().trim()) {
                                parsedRow[contentHeaderList[index2]] = column.html();
                            } else {
                                parsedRow[contentHeaderList[index2]] = null;
                            }
                        })
                        var comparableParsedRow = Object.assign({}, parsedRow)
                        var comparableBeforeRow = Object.assign({}, beforeRow)
                        delete comparableParsedRow.time
                        delete comparableBeforeRow.time
                        if (JSON.stringify(comparableParsedRow) === JSON.stringify(comparableBeforeRow) && currentClass == beforeClass) {
                            parsedPlan[currentClass].pop()
                            parsedRow.time = beforeRow.time + " / " + parsedRow.time
                            parsedPlan[currentClass].push(parsedRow)
                        } else {
                            parsedPlan[currentClass].push(parsedRow);
                        }
                        beforeRow = JSON.parse(JSON.stringify(parsedRow))
                        beforeClass = currentClass
                    }
                }


            } else if (row.children().length === 1) {
                currentClass = row.text().split(" ")[0];
            }
        });

        return { plan: parsedPlan, date, week };
    }
```

Zuerst wird hier das Dokument mit cheerio, dem HTML Parser, geladen. In den folgenden Zeilen wird das Datum und ob es sich um eine A oder B Woche handelt ausgelesen.
Anschließend wird die Tabelle die den eigentlichen Inhalt enthält gesucht und in `contentTable` gespeichert.

```typescript
contentTable.children().each(function (_index: Number, row) {
    row = $(row)
    if (row.children().length === 6) {
        // Logik für Content row
    } else if (row.children().length === 1) {
        // Logik für Header row
    }
});
```

In diesem Teil der Funktion wird über die Zeilen der Tabelle iteriert. `row = $(row)` wandelt das HTML Objekt row zu einem cheerio Objekt um.
Danach wird geprüft wieviele Spalten die aktuelle Zeile hat.

Wenn nur eine Spalte vorhanden ist, wird die aktuelle Klasse auf die Klasse in der Zeile gesetzt:

```typescript
currentClass = row.text().split(" ")[0];
```

Da auf die Angabe der Klasse das Lehrerkürzel folgt, wird der Text gespalten und nur der erste Teil verwendet.

Bei 6 Spalten wird zunächst geprüft ob `currentClass` nicht null ist. Das ist wichtig, da die erste Zeile auch 6 Felder hat, aber nur die Namen der Spalten enthält.
Danach wird geprüft, ob die aktuelle Klasse in der Liste der angefragten Klassen enthalten ist. Nur wenn die Klasse in der Liste vorhanden ist, werden
die Einträge für diese verarbeitet.

```typescript
var parsedRow: row = { time: null, subject: null, teacher: null, text: null, course: null, room: null };
if (!parsedPlan[currentClass]) {
    parsedPlan[currentClass] = [];
}
```

Dieser Teil erstellt eine Variable für die geparste Zeile und Erstellt eine Liste an Zeilen für die aktuelle Klasse falls diese noch nicht existiert.

```typescript
row.children().each(function (index2, column) {
    column = $(column)
    if (column.text().trim()) {
        parsedRow[contentHeaderList[index2]] = column.html();
    } else {
        parsedRow[contentHeaderList[index2]] = null;
    }
})
```

Hier wird nurnoch über die einzelnen Spalten iteriert und anhand des Indexes dem richtigen Feld zugeordnet. Bei leeren Spalten wird stattdesssen
`null` dem Feld zugewiesen.

```typescript
var comparableParsedRow = Object.assign({}, parsedRow)
var comparableBeforeRow = Object.assign({}, beforeRow)
delete comparableParsedRow.time
delete comparableBeforeRow.time
if (JSON.stringify(comparableParsedRow) === JSON.stringify(comparableBeforeRow) && currentClass == beforeClass) {
    parsedPlan[currentClass].pop()
    parsedRow.time = beforeRow.time + " / " + parsedRow.time
    parsedPlan[currentClass].push(parsedRow)
} else {
    parsedPlan[currentClass].push(parsedRow);
}
beforeRow = JSON.parse(JSON.stringify(parsedRow))
```

Dieser Teil ist ~~etwas~~ *sehr* hacky, tut aber was er soll. Zuerst werden die aktuelle und die vorherige Zeile mit `Object.assign` kopiert.
Danach wird jeweils die Zeit aus den Zeilen gelöscht.
Danach wird die JSON Repräsentation der beiden Zeilen verglichen sowie die vorherige Klasse mit der aktuellen.
Wenn beide gleich sind, wird die letzte Zeile mit `.pop()` wieder gelöscht. Dafür wird die Zeit aus der letzten Zeile an die aktuelle mit einem / getrennt angehängt.
Der Grund dafür ist das auf dem Vertretungsplan manchmal aus sich mir nicht erschließenden Gründen Doppelstunden nicht als solche, sondern als zwei Einzelstunden angezeigt werden.

Mit

```typescript
beforeRow = JSON.parse(JSON.stringify(parsedRow))
```

wird dann nur noch die letzte Zeile auf die aktuelle gesetzt. Das merkwürdige JSON Konstrukt drumherum hat den Grund, das JavaScript Objekte nicht kopiert, sondern nur eine Referenz erstellt:

```true

i = {x: 2}
j = i

j.x = 5

i.x === 5 // true
j.x === 5 // true
```

## Redirect Probleme

Iserv schickt nach einem erfolgreichem Login einen temporären redirect an den client. In den Headern dieses Redirects werden die Cookies, die
für zukünftige Anfragen benötigt werden geschickt. Der HTTP Client von React Native ist jedoch leider nicht dazu in der Lage, redirects abzufangen.
Gelöst habe ich dieses Problem durch ein in Java geschriebenes Modul, welches den Login übernimmt und auf Androids OkHttp zugreifen kann.

## Security Problem

Am Anfang habe ich Benutzername und Passwort in der React Native Keychain gespeichert und bei jedem App-Start einen neuen Login durchgeführt.
Da dies aber unnötig ist und viel Traffic braucht, habe ich auf zwischenspeichern der tokens umgestellt, Benutzername und Passwort wurden aber weiter
gespeichert.
In Version 2.0 wird die "Angemeldet bleiben" Funktion von Iserv genutzt, mit der sich ein Login über ein ganzes Jahr speichern lässt.
