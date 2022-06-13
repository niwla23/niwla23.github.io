__NUXT_JSONP__("/posts/schulhack", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk){return {data:[{article:{slug:"schulhack",description:ah,title:"SchulHack",image:"\u002Fschulhack\u002Fthumb.png",tags:["app","software","react-native","mobile-app"],toc:[{id:at,depth:T,text:au},{id:av,depth:3,text:aw},{id:ax,depth:T,text:ay},{id:az,depth:T,text:aA},{id:aB,depth:T,text:aC}],body:{type:aD,children:[{type:b,tag:i,props:{},children:[{type:a,value:ah}]},{type:a,value:g},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Die App ist in React Native geschrieben."}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:b,tag:B,props:{href:"https:\u002F\u002Fgithub.com\u002Fniwla23\u002Fschulhack",rel:[ai,aj,ak],target:al},children:[{type:a,value:"Source Code"}]},{type:a,value:g},{type:b,tag:B,props:{href:aE,rel:[ai,aj,ak],target:al},children:[{type:a,value:aF}]}]},{type:a,value:g},{type:b,tag:U,props:{id:at},children:[{type:b,tag:B,props:{href:"#parsing",ariaHidden:M,tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:au}]},{type:a,value:g},{type:b,tag:"h3",props:{id:av},children:[{type:b,tag:B,props:{href:"#vertretungsplan",ariaHidden:M,tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:aw}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Der Untis Vertretungsplan besteht aus Zeilen mit nur einer Spalte (Klasse, Header Zeile) und Zeilen mit 6 Spalten (Zeit, Fach, Lehrer, Text, Klassen, Raum). Wenn man den Plan von oben nach unten ausliest kann man also recht einfach die Einträge einzelnen Klassen zuordnen und die Felder benennen.\nDie Funktion zum Parsen des Plans sieht so aus:"}]},{type:a,value:g},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:p,props:{className:[F,G]},children:[{type:a,value:"  "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:t},{type:b,tag:c,props:{className:[Q]},children:[{type:a,value:"courses: "},{type:b,tag:c,props:{className:[W]},children:[{type:a,value:"Array"}]},{type:a,value:"\u003C"},{type:b,tag:c,props:{className:[W]},children:[{type:a,value:X}]},{type:a,value:"\u003E"}]},{type:a,value:am},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:aG}]},{type:a,value:" $ = cheerio."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"load"}]},{type:a,value:t},{type:b,tag:c,props:{className:["hljs-variable","language_"]},children:[{type:a,value:"this"}]},{type:a,value:o},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:"input"}]},{type:a,value:aH},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:an}]},{type:a,value:" header = $("},{type:b,tag:c,props:{className:[q]},children:[{type:a,value:"\".mon_title\""}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:a}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ao}]},{type:a,value:t},{type:b,tag:c,props:{className:[q]},children:[{type:a,value:ap}]},{type:a,value:aH},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:an}]},{type:a,value:" date = header["},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:Y}]},{type:a,value:"]\n        "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:an}]},{type:a,value:" week = header[header."},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:R}]},{type:a,value:" - "},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:aq}]},{type:a,value:"]\n\n\n        "},{type:b,tag:c,props:{className:[H]},children:[{type:a,value:"\u002F\u002F The table containing the actual plan"}]},{type:a,value:Z},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:aG}]},{type:a,value:" contentTable = $($("},{type:b,tag:c,props:{className:[q]},children:[{type:a,value:"\".mon_list\""}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:"()["},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:Y}]},{type:a,value:"])\n\n        "},{type:b,tag:c,props:{className:[H]},children:[{type:a,value:"\u002F\u002F The headers of the contentTable"}]},{type:a,value:Z},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:w}]},{type:a,value:" contentHeaderList = [\n            "},{type:b,tag:c,props:{className:[q]},children:[{type:a,value:"\"time\""}]},{type:a,value:S},{type:b,tag:c,props:{className:[q]},children:[{type:a,value:"\"subject\""}]},{type:a,value:S},{type:b,tag:c,props:{className:[q]},children:[{type:a,value:"\"teacher\""}]},{type:a,value:S},{type:b,tag:c,props:{className:[q]},children:[{type:a,value:"\"text\""}]},{type:a,value:S},{type:b,tag:c,props:{className:[q]},children:[{type:a,value:"\"course\""}]},{type:a,value:S},{type:b,tag:c,props:{className:[q]},children:[{type:a,value:"\"room\""}]},{type:a,value:",\n        ];\n\n        "},{type:b,tag:c,props:{className:[H]},children:[{type:a,value:"\u002F\u002F Scrapping function start"}]},{type:a,value:Z},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:w}]},{type:a,value:x},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:aJ}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:X}]},{type:a,value:ar},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:_},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:";\n        "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:w}]},{type:a,value:" parsedPlan = {};\n        "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:w}]},{type:a,value:x},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:"beforeRow"}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:X}]},{type:a,value:ar},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:_},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:Z},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:w}]},{type:a,value:x},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:"beforeClass"}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:X}]},{type:a,value:ar},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:_},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:"\n        contentTable."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:t},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:aa}]},{type:a,value:J},{type:b,tag:c,props:{className:[Q]},children:[{type:a,value:aK},{type:b,tag:c,props:{className:[W]},children:[{type:a,value:aL}]},{type:a,value:aM}]},{type:a,value:") {\n            row = $(row)\n            "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:u}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:r},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:R}]},{type:a,value:K},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:aN}]},{type:a,value:") {\n                "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:u}]},{type:a,value:" (currentClass) {\n                    "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:u}]},{type:a,value:" (courses."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"includes"}]},{type:a,value:"(currentClass)) {\n                        "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:w}]},{type:a,value:x},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:aO}]},{type:a,value:aP},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:v}]},{type:a,value:n},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:y},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:aQ}]},{type:a,value:n},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:y},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:aR}]},{type:a,value:n},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:y},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:a}]},{type:a,value:n},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:y},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:aS}]},{type:a,value:n},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:y},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:aT}]},{type:a,value:n},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:" };\n                        "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:u}]},{type:a,value:" (!parsedPlan[currentClass]) {\n                            parsedPlan[currentClass] = [];\n                        }\n                        row."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:t},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:aa}]},{type:a,value:J},{type:b,tag:c,props:{className:[Q]},children:[{type:a,value:aU}]},{type:a,value:") {\n                            column = $(column)\n                            "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:u}]},{type:a,value:aV},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:a}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aW}]},{type:a,value:"()) {\n                                parsedRow[contentHeaderList[index2]] = column."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aX}]},{type:a,value:"();\n                            } "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:L}]},{type:a,value:" {\n                                parsedRow[contentHeaderList[index2]] = "},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:";\n                            }\n                        })\n                        "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:w}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ac}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:a,value:"({}, parsedRow)\n                        "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:w}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ac}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:a,value:"({}, beforeRow)\n                        "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:ae}]},{type:a,value:a_},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:v}]},{type:a,value:a$},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:ae}]},{type:a,value:ba},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:v}]},{type:a,value:a$},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:u}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:bb},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:"(comparableBeforeRow) && currentClass == beforeClass) {\n                            parsedPlan[currentClass]."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bc}]},{type:a,value:"()\n                            parsedRow."},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:v}]},{type:a,value:bd},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:v}]},{type:a,value:be},{type:b,tag:c,props:{className:[q]},children:[{type:a,value:bf}]},{type:a,value:bg},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:v}]},{type:a,value:"\n                            parsedPlan[currentClass]."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:"(parsedRow)\n                        } "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:L}]},{type:a,value:" {\n                            parsedPlan[currentClass]."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:"(parsedRow);\n                        }\n                        beforeRow = "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:"(parsedRow))\n                        beforeClass = currentClass\n                    }\n                }\n\n\n            } "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:L}]},{type:a,value:x},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:u}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:r},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:R}]},{type:a,value:K},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:aq}]},{type:a,value:") {\n                currentClass = row."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:a}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ao}]},{type:a,value:t},{type:b,tag:c,props:{className:[q]},children:[{type:a,value:ap}]},{type:a,value:bh},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:Y}]},{type:a,value:"];\n            }\n        });\n\n        "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:"return"}]},{type:a,value:" { "},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:"plan"}]},{type:a,value:": parsedPlan, date, week };\n    }\n"}]}]}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Zuerst wird hier das Dokument mit cheerio, dem HTML Parser, geladen. In den folgenden Zeilen wird das Datum und ob es sich um eine A oder B Woche handelt ausgelesen.\nAnschließend wird die Tabelle die den eigentlichen Inhalt enthält gesucht und in "},{type:b,tag:p,props:{},children:[{type:a,value:"contentTable"}]},{type:a,value:" gespeichert."}]},{type:a,value:g},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:p,props:{className:[F,G]},children:[{type:a,value:"contentTable."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:t},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:aa}]},{type:a,value:J},{type:b,tag:c,props:{className:[Q]},children:[{type:a,value:aK},{type:b,tag:c,props:{className:[W]},children:[{type:a,value:aL}]},{type:a,value:aM}]},{type:a,value:") {\n    row = $(row)\n    "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:u}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:r},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:R}]},{type:a,value:K},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:aN}]},{type:a,value:am},{type:b,tag:c,props:{className:[H]},children:[{type:a,value:"\u002F\u002F Logik für Content row"}]},{type:a,value:"\n    } "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:L}]},{type:a,value:x},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:u}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:r},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:R}]},{type:a,value:K},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:aq}]},{type:a,value:am},{type:b,tag:c,props:{className:[H]},children:[{type:a,value:"\u002F\u002F Logik für Header row"}]},{type:a,value:"\n    }\n});\n"}]}]}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"In diesem Teil der Funktion wird über die Zeilen der Tabelle iteriert. "},{type:b,tag:p,props:{},children:[{type:a,value:"row = $(row)"}]},{type:a,value:" wandelt das HTML Objekt row zu einem cheerio Objekt um.\nDanach wird geprüft wieviele Spalten die aktuelle Zeile hat."}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Wenn nur eine Spalte vorhanden ist, wird die aktuelle Klasse auf die Klasse in der Zeile gesetzt:"}]},{type:a,value:g},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:p,props:{className:[F,G]},children:[{type:a,value:"currentClass = row."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:a}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ao}]},{type:a,value:t},{type:b,tag:c,props:{className:[q]},children:[{type:a,value:ap}]},{type:a,value:bh},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:Y}]},{type:a,value:"];\n"}]}]}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Da auf die Angabe der Klasse das Lehrerkürzel folgt, wird der Text gespalten und nur der erste Teil verwendet."}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Bei 6 Spalten wird zunächst geprüft ob "},{type:b,tag:p,props:{},children:[{type:a,value:aJ}]},{type:a,value:" nicht null ist. Das ist wichtig, da die erste Zeile auch 6 Felder hat, aber nur die Namen der Spalten enthält.\nDanach wird geprüft, ob die aktuelle Klasse in der Liste der angefragten Klassen enthalten ist. Nur wenn die Klasse in der Liste vorhanden ist, werden\ndie Einträge für diese verarbeitet."}]},{type:a,value:g},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:p,props:{className:[F,G]},children:[{type:b,tag:c,props:{className:[f]},children:[{type:a,value:w}]},{type:a,value:x},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:aO}]},{type:a,value:aP},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:v}]},{type:a,value:n},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:y},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:aQ}]},{type:a,value:n},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:y},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:aR}]},{type:a,value:n},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:y},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:a}]},{type:a,value:n},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:y},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:aS}]},{type:a,value:n},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:y},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:aT}]},{type:a,value:n},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:" };\n"},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:u}]},{type:a,value:" (!parsedPlan[currentClass]) {\n    parsedPlan[currentClass] = [];\n}\n"}]}]}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Dieser Teil erstellt eine Variable für die geparste Zeile und Erstellt eine Liste an Zeilen für die aktuelle Klasse falls diese noch nicht existiert."}]},{type:a,value:g},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:p,props:{className:[F,G]},children:[{type:a,value:"row."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:t},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:aa}]},{type:a,value:J},{type:b,tag:c,props:{className:[Q]},children:[{type:a,value:aU}]},{type:a,value:") {\n    column = $(column)\n    "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:u}]},{type:a,value:aV},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:a}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aW}]},{type:a,value:"()) {\n        parsedRow[contentHeaderList[index2]] = column."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aX}]},{type:a,value:"();\n    } "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:L}]},{type:a,value:" {\n        parsedRow[contentHeaderList[index2]] = "},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:h}]},{type:a,value:";\n    }\n})\n"}]}]}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Hier wird nurnoch über die einzelnen Spalten iteriert und anhand des Indexes dem richtigen Feld zugeordnet. Bei leeren Spalten wird stattdesssen\n"},{type:b,tag:p,props:{},children:[{type:a,value:h}]},{type:a,value:" dem Feld zugewiesen."}]},{type:a,value:g},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:p,props:{className:[F,G]},children:[{type:b,tag:c,props:{className:[f]},children:[{type:a,value:w}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ac}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:a,value:"({}, parsedRow)\n"},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:w}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ac}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:a,value:"({}, beforeRow)\n"},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:ae}]},{type:a,value:a_},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:ae}]},{type:a,value:ba},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:u}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:bb},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:"(comparableBeforeRow) && currentClass == beforeClass) {\n    parsedPlan[currentClass]."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bc}]},{type:a,value:"()\n    parsedRow."},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:v}]},{type:a,value:bd},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:v}]},{type:a,value:be},{type:b,tag:c,props:{className:[q]},children:[{type:a,value:bf}]},{type:a,value:bg},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:v}]},{type:a,value:"\n    parsedPlan[currentClass]."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:"(parsedRow)\n} "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:L}]},{type:a,value:" {\n    parsedPlan[currentClass]."},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:"(parsedRow);\n}\nbeforeRow = "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:bi}]}]}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Dieser Teil ist "},{type:b,tag:"del",props:{},children:[{type:a,value:"etwas"}]},{type:a,value:x},{type:b,tag:"em",props:{},children:[{type:a,value:"sehr"}]},{type:a,value:" hacky, tut aber was er soll. Zuerst werden die aktuelle und die vorherige Zeile mit "},{type:b,tag:p,props:{},children:[{type:a,value:"Object.assign"}]},{type:a,value:" kopiert.\nDanach wird jeweils die Zeit aus den Zeilen gelöscht.\nDanach wird die JSON Repräsentation der beiden Zeilen verglichen sowie die vorherige Klasse mit der aktuellen.\nWenn beide gleich sind, wird die letzte Zeile mit "},{type:b,tag:p,props:{},children:[{type:a,value:".pop()"}]},{type:a,value:" wieder gelöscht. Dafür wird die Zeit aus der letzten Zeile an die aktuelle mit einem \u002F getrennt angehängt.\nDer Grund dafür ist das auf dem Vertretungsplan manchmal aus sich mir nicht erschließenden Gründen Doppelstunden nicht als solche, sondern als zwei Einzelstunden angezeigt werden."}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Mit"}]},{type:a,value:g},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:p,props:{className:[F,G]},children:[{type:a,value:"beforeRow = "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:bi}]}]}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"wird dann nur noch die letzte Zeile auf die aktuelle gesetzt. Das merkwürdige JSON Konstrukt drumherum hat den Grund, das JavaScript Objekte nicht kopiert, sondern nur eine Referenz erstellt:"}]},{type:a,value:g},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:p,props:{className:[F,G]},children:[{type:a,value:"\ni = {"},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:ag}]},{type:a,value:n},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:"2"}]},{type:a,value:"}\nj = i\n\nj."},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:ag}]},{type:a,value:_},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:as}]},{type:a,value:"\n\ni."},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:ag}]},{type:a,value:K},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:as}]},{type:a,value:x},{type:b,tag:c,props:{className:[H]},children:[{type:a,value:bj}]},{type:a,value:"\nj."},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:ag}]},{type:a,value:K},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:as}]},{type:a,value:x},{type:b,tag:c,props:{className:[H]},children:[{type:a,value:bj}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:U,props:{id:ax},children:[{type:b,tag:B,props:{href:"#update-mechanismus",ariaHidden:M,tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:ay}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Normalerweise werden Android Apps über den Google Play Store verteilt und aktualisiert. Für SchulHack gibt es dabei aber zwei Probleme.\nErstens kostet das Geld und zweitens möchte Google zur Überprüfung vollen Zugriff auf die App haben. Da SchulHack technisch gesehen eher ein Client\nist (wie ein Mail-Client) und ich nicht einfach das Passwort von meiner Schule an Google geben darf \u002F will müsste ich wahrscheinlich einen Mock-Server\nerstellen der alle Endpoints mit Fakedaten versorgt, aber das ist mir zu viel Aufwand."}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Stattdessen nutze ich GitHub Releases. Die App nutzt die GitHub API um die Releases abzurufen und prüft ob eine neuere Version verfügbar ist.\nWenn das der Fall ist wird dem Nutzer ein Popup mit den Changelogs angezeigt. Darunter befindet sich ein Button welcher auf das GitHub Asset leitet.\nDer Browser lädt die APK herunter und danach wird das Update vom Android Paketmanager (pm) übernommen."}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Die Installation läuft über die "},{type:b,tag:B,props:{href:aE,rel:[ai,aj,ak],target:al},children:[{type:a,value:aF}]},{type:a,value:". Wenn man dort den Download Button drückt wird man direkt auf das neuste GitHub Asset weitergeleitet und pm übernimmt die Installation."}]},{type:a,value:g},{type:b,tag:U,props:{id:az},children:[{type:b,tag:B,props:{href:"#redirect-probleme",ariaHidden:M,tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:aA}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Iserv schickt nach einem erfolgreichem Login einen temporären redirect an den client. In den Headern dieses Redirects werden die Cookies, die\nfür zukünftige Anfragen benötigt werden geschickt. Der HTTP Client von React Native ist jedoch leider nicht dazu in der Lage, redirects abzufangen.\nGelöst habe ich dieses Problem durch ein in Java geschriebenes Modul, welches den Login übernimmt und auf Androids OkHttp zugreifen kann."}]},{type:a,value:g},{type:b,tag:U,props:{id:aB},children:[{type:b,tag:B,props:{href:"#security-problem",ariaHidden:M,tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:aC}]},{type:a,value:g},{type:b,tag:i,props:{},children:[{type:a,value:"Am Anfang habe ich Benutzername und Passwort in der React Native Keychain gespeichert und bei jedem App-Start einen neuen Login durchgeführt.\nDa dies aber unnötig ist und viel Traffic braucht, habe ich auf zwischenspeichern der tokens umgestellt, Benutzername und Passwort wurden aber weiter\ngespeichert.\nIn Version 2.0 wird die \"Angemeldet bleiben\" Funktion von Iserv genutzt, mit der sich ein Login über ein ganzes Jahr speichern lässt."}]}]},excerpt:{type:aD,children:[{type:b,tag:i,props:{},children:[{type:a,value:ah}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fschulhack",extension:".md",createdAt:bk,updatedAt:bk},_img:{"/_ipx/s_1280x584/schulhack/thumb.png":"\u002F_nuxt\u002Fimage\u002Fe40b85.png"}}],fetch:{},mutations:void 0}}("text","element","span","hljs-title","function_","hljs-keyword","\n","null","p","hljs-literal","hljs-property","hljs-attr","class_",": ",".","code","hljs-string","().","hljs-number","(","if","time","var"," ",", ","JSON","children","a","div","nuxt-content-highlight","pre","hljs","typescript","hljs-comment","stringify"," ("," === ","else","true",-1,"icon","icon-link","hljs-params","length",",\n            ",2,"h2","parse","hljs-built_in","String","0","\n        "," = ","each","function"," (row.","Object","assign","delete","push","x","SchulHack ist eine App mit der sich der Vertretungsplan des Gymnasiums Walsrode abrufen lässt. Weitere Funktionen sind das speichern des\nStundenplans, Aufgabenansicht, Klassenarbeitenübersicht und das Abrufen von Geburtstagen von IServ.","nofollow","noopener","noreferrer","_blank",") {\n        ","let","split","\" \"","1"," | ","5","parsing","Parsing","vertretungsplan","Vertretungsplan","update-mechanismus","Update-Mechanismus","redirect-probleme","Redirect Probleme","security-problem","Security Problem","root","https:\u002F\u002Fschulhack.netlify.app","Website","const",")\n        ",").","currentClass","_index: ","Number",", row","6","parsedRow",": row = { ","subject","teacher","course","room","index2, column"," (column.","trim","html"," comparableParsedRow = "," comparableBeforeRow = "," comparableParsedRow.","\n                        "," comparableBeforeRow.","(comparableParsedRow) === ","pop"," = beforeRow."," + ","\" \u002F \""," + parsedRow.",")[","(parsedRow))\n","\u002F\u002F true","2022-06-13T13:53:28.241Z")));