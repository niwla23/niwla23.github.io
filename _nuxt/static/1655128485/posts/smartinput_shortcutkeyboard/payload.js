__NUXT_JSONP__("/posts/smartinput_shortcutkeyboard", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am){return {data:[{article:{slug:"smartinput_shortcutkeyboard",description:"Eine Shortcut Tastatur mit addressierbarer RGB beleuchtung und frei konfigurierbaren Tasten. GitHub",title:"SmartInput Shortcut Keyboard",image:"\u002Fsmartinput_shortcutkeyboard\u002Fthumb.png",tags:[G,H,"esp8266","embedded","3d-druck","python","web-frontend",I,"loeten"],toc:[{id:I,depth:J,text:T},{id:G,depth:J,text:U},{id:H,depth:J,text:V},{id:W,depth:K,text:X},{id:Y,depth:K,text:Z},{id:_,depth:K,text:$}],body:{type:aa,children:[{type:b,tag:h,props:{},children:[{type:a,value:ab},{type:b,tag:i,props:{href:ac,rel:[l,m,n],target:o},children:[{type:a,value:ad}]}]},{type:a,value:e},{type:a,value:e},{type:b,tag:L,props:{id:I},children:[{type:b,tag:i,props:{href:"#design",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:T}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Das Case und die Tasten sind 3D gedruckt."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Für das Case habe ich "},{type:b,tag:i,props:{href:"https:\u002F\u002Fwww.thingiverse.com\u002Fthing:4186055",rel:[l,m,n],target:o},children:[{type:a,value:"dieses"}]},{type:a,value:" Modell von thingiverse leicht geändert, damit es den D1 Mini halten kann."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Die Tasten basieren auf "},{type:b,tag:i,props:{href:"https:\u002F\u002Fwww.thingiverse.com\u002Fthing:738769",rel:[l,m,n],target:o},children:[{type:a,value:"diesem"}]},{type:a,value:" Modell. In Blender habe ich dann die jeweiligen Symbole auf die Tasten gesetzt.\nDiese stammen größtenteils von FontAwesome. Das Spotify Logo ist direkt von der "},{type:b,tag:i,props:{href:"https:\u002F\u002Fdeveloper.spotify.com\u002Fdocumentation\u002Fgeneral\u002Fdesign-and-branding\u002F#using-our-logo",rel:[l,m,n],target:o},children:[{type:a,value:"Spotify Website"}]}]},{type:a,value:e},{type:b,tag:L,props:{id:G},children:[{type:b,tag:i,props:{href:"#hardware",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:U}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Im inneren sitzt ein WeMos D1 Mini ESP8266 mit eingebautem USB to Serial Adapter. Über den wird das Modul mit dem PC verbunden. Für die Tasten habe ich Cherry MX Red transparent Switches benutzt. Diese sind als Input Matrix verschaltet.\nAußerdem befinden sich 4 Neopixel WS2812B PCBs am Boden des Gehäuses."}]},{type:a,value:e},{type:b,tag:"block-image",props:{src:"\u002Fsmartinput_shortcutkeyboard\u002Fcase_open.jpg",className:["h-16"]},children:[{type:a,value:"\n\n\n"}]},{type:a,value:e},{type:b,tag:L,props:{id:H},children:[{type:b,tag:i,props:{href:"#software",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:V}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Die Software besteht aus drei Teilen:"}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:M,props:{},children:[{type:a,value:"SmartInput NG Firmware"}]},{type:a,value:e},{type:b,tag:M,props:{},children:[{type:a,value:"SmartInput NG Daemon"}]},{type:a,value:e},{type:b,tag:M,props:{},children:[{type:a,value:"SmartInput NG UI"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:N,props:{id:W},children:[{type:b,tag:i,props:{href:"#firmware",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:X}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Die Firmware ist in C++ (PlatformIO) geschrieben und läuft auf dem ESP8266. Diese sendet Events über die serielle Schnittstelle an den Daemon."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Die Events sehen so aus:"}]},{type:a,value:e},{type:b,tag:O,props:{className:[P]},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:R,props:{className:[S,ae]},children:[{type:a,value:"S:"},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:af}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"\u002F\u002F (Taste 1 wurde kurz gedrückt und wieder losgelassen)"}]},{type:a,value:"\nP:"},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:"2"}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"\u002F\u002F (Taste 2 wurde gedrückt)"}]},{type:a,value:"\nL:"},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:ag}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"\u002F\u002F (Taste 3 wurde lange gedrückt)"}]},{type:a,value:"\nR:"},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:"4"}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"\u002F\u002F (Taste 4 wurde losgelassen)"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Außerdem liest die Firmware die serielle Schnittstelle aus um die LEDs zu steuern. Dabei ist das erste Byte der Wert für Rot, das zweite für Grün und das dritte für Blau. Das vierte Byte ist der Control Byte. Wenn er 0 ist, werden die nächsten Bytes für den nächsten Pixel interpretiert. Wenn er 1 ist, wurden alle Daten gesendet und der aktuelle Frame wird angezeigt. Neue Daten gelten dann wieder für Pixel 0."}]},{type:a,value:e},{type:b,tag:O,props:{className:[P]},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:R,props:{className:[S,ae]},children:[{type:b,tag:c,props:{className:[t]},children:[{type:a,value:ah}]},{type:a,value:" valueContext = RED;\n"},{type:b,tag:c,props:{className:[t]},children:[{type:a,value:"size_t"}]},{type:a,value:" currentPixel = "},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:ai}]},{type:a,value:";\n"},{type:b,tag:c,props:{className:[t]},children:[{type:a,value:"uint8_t"}]},{type:a,value:" currentColor["},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:ag}]},{type:a,value:"] = {};\n\n"},{type:b,tag:c,props:{className:["hljs-function"]},children:[{type:b,tag:c,props:{className:[t]},children:[{type:a,value:"void"}]},{type:a,value:d},{type:b,tag:c,props:{className:["hljs-title"]},children:[{type:a,value:"ledLoop"}]},{type:b,tag:c,props:{className:["hljs-params"]},children:[{type:a,value:"()"}]},{type:a,value:d}]},{type:a,value:"{\n    "},{type:b,tag:c,props:{className:[D]},children:[{type:a,value:"while"}]},{type:a,value:" (Serial."},{type:b,tag:c,props:{className:[E]},children:[{type:a,value:"available"}]},{type:a,value:"()) {\n        "},{type:b,tag:c,props:{className:[t]},children:[{type:a,value:ah}]},{type:a,value:" value = Serial."},{type:b,tag:c,props:{className:[E]},children:[{type:a,value:"read"}]},{type:a,value:"();\n\n        "},{type:b,tag:c,props:{className:[D]},children:[{type:a,value:aj}]},{type:a,value:" (valueContext == CONTROL) {\n            pixels[currentPixel] = "},{type:b,tag:c,props:{className:[E]},children:[{type:a,value:"CRGB"}]},{type:a,value:"(currentColor[RED], currentColor[GREEN], currentColor[BLUE]);\n\n            valueContext = RED;\n            currentPixel++;\n\n            "},{type:b,tag:c,props:{className:[D]},children:[{type:a,value:aj}]},{type:a,value:" (value == "},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:af}]},{type:a,value:") {\n                FastLED."},{type:b,tag:c,props:{className:[E]},children:[{type:a,value:"show"}]},{type:a,value:"();\n                currentPixel = "},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:ai}]},{type:a,value:";\n            }\n\n        } "},{type:b,tag:c,props:{className:[D]},children:[{type:a,value:"else"}]},{type:a,value:" {\n            currentColor[valueContext] = value;\n            valueContext++;\n        }\n    }\n}\n"}]}]}]},{type:a,value:e},{type:b,tag:N,props:{id:Y},children:[{type:b,tag:i,props:{href:"#daemon",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:Z}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Der Daemon ist in Python geschrieben und läuft auf dem PC. Er empfängt die Events, parst sie und ruft dann den konfigurierten handler auf.\nKonfiguriert werden die Tasten über eine YAML Datei."}]},{type:a,value:e},{type:b,tag:O,props:{className:[P]},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:R,props:{className:[S,"yaml"]},children:[{type:b,tag:c,props:{className:[f]},children:[{type:a,value:"device:"}]},{type:a,value:d},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:"\"VID:PID=1A86:7523 LOCATION=3-2.3\""}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"# hierüber wird das Gerät gefunden"}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:"baudrate:"}]},{type:a,value:d},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:"115200"}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"# Geschwindigkeit der seriellen Schnittstelle"}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:"keys:"}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:"\"0\":"}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"# Die erste Taste"}]},{type:a,value:F},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:ak}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"# Wird ausgeführt wenn die Taste kurz gedrückt wird"}]},{type:a,value:u},{type:b,tag:c,props:{className:[v]},children:[{type:a,value:w}]},{type:a,value:d},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:x}]},{type:a,value:d},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:y}]},{type:a,value:z},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:A}]},{type:a,value:B},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:C}]},{type:a,value:d},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:"\"playerctl play-pause\""}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"# Pausiert die Medienwiedergabe oder setzt sie fort"}]},{type:a,value:F},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:al}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"# Wird ausgeführt wenn die Taste lange gedrückt wird"}]},{type:a,value:u},{type:b,tag:c,props:{className:[v]},children:[{type:a,value:w}]},{type:a,value:d},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:x}]},{type:a,value:d},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:y}]},{type:a,value:z},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:A}]},{type:a,value:B},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:C}]},{type:a,value:d},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:"\"playerctl next\""}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"# Spielt das nächste Lied ab"}]},{type:a,value:"\n\n  "},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:"\"1\":"}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"# Zweite Taste"}]},{type:a,value:F},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:ak}]},{type:a,value:u},{type:b,tag:c,props:{className:[v]},children:[{type:a,value:w}]},{type:a,value:d},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:x}]},{type:a,value:d},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:y}]},{type:a,value:z},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:A}]},{type:a,value:B},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:C}]},{type:a,value:d},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:"\"amixer -D pulse sset Master 5%+\""}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"# Hebt die Lautstärke um 5 Prozentpunkte an"}]},{type:a,value:F},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:al}]},{type:a,value:u},{type:b,tag:c,props:{className:[v]},children:[{type:a,value:w}]},{type:a,value:d},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:x}]},{type:a,value:d},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:y}]},{type:a,value:z},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:A}]},{type:a,value:B},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:C}]},{type:a,value:d},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:"\"amixer -D pulse sset Master on\""}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"# enmutet die Lautsprecher"}]},{type:a,value:u},{type:b,tag:c,props:{className:[v]},children:[{type:a,value:w}]},{type:a,value:d},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:x}]},{type:a,value:d},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:y}]},{type:a,value:z},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:A}]},{type:a,value:B},{type:b,tag:c,props:{className:[f]},children:[{type:a,value:C}]},{type:a,value:d},{type:b,tag:c,props:{className:[j]},children:[{type:a,value:"\"notify-send 'Ton an'\""}]},{type:a,value:d},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"# Sendet eine Benachrichtigung"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Es gibt auch noch weitere handler wir http oder keyboard um Tastendrücke zu emulieren.\nDer Daemon hat einen Thread welcher die RGB Effekte managed. In diesem läuft ein Flask Webserver, der eine Effektliste zurückgeben kann und die Effekte wechseln kann. Dazu startet er einen subprocess mit der Effektfunktion und den Optionen."},{type:b,tag:"br",props:{},children:[]},{type:a,value:"\nDer aktuelle Effekt und seine Einstellungen werden in einer JSON Datei gespeichert."}]},{type:a,value:e},{type:b,tag:N,props:{id:_},children:[{type:b,tag:i,props:{href:"#ui",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:$}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Die UI läuft in "},{type:b,tag:i,props:{href:"https:\u002F\u002Ftauri.studio\u002F",rel:[l,m,n],target:o},children:[{type:a,value:"Tauri"}]},{type:a,value:", einem Rust Framework für Desktop-Apps. Es rendert HTML in einer WebView und bietet sichere APIs für die Kommunikation mit dem System an. Für die eigentliche UI verwende ich Vue 3 mit TailwindCSS. Die UI redet über eine scoped HTTP API mit dem Daemon."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Sie kann Effekte abrufen und verändern."}]}]},excerpt:{type:aa,children:[{type:b,tag:h,props:{},children:[{type:a,value:ab},{type:b,tag:i,props:{href:ac,rel:[l,m,n],target:o},children:[{type:a,value:ad}]}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fsmartinput_shortcutkeyboard",extension:".md",createdAt:am,updatedAt:am},_img:{"/_ipx/s_1280x584/smartinput_shortcutkeyboard/thumb.png":"\u002F_nuxt\u002Fimage\u002F61b746.png","/_ipx/f_jpeg,fit_inside,s_320x700/smartinput_shortcutkeyboard/case_open.jpg":"\u002F_nuxt\u002Fimage\u002F634eba.jpeg","/_ipx/f_jpeg,fit_inside,s_640x700/smartinput_shortcutkeyboard/case_open.jpg":"\u002F_nuxt\u002Fimage\u002F350ec2.jpeg","/_ipx/f_jpeg,fit_inside,s_768x700/smartinput_shortcutkeyboard/case_open.jpg":"\u002F_nuxt\u002Fimage\u002F5e09db.jpeg","/_ipx/f_jpeg,fit_inside,s_1024x700/smartinput_shortcutkeyboard/case_open.jpg":"\u002F_nuxt\u002Fimage\u002F3beca9.jpeg","/_ipx/f_jpeg,fit_inside,s_1280x700/smartinput_shortcutkeyboard/case_open.jpg":"\u002F_nuxt\u002Fimage\u002Fd91439.jpeg","/_ipx/f_jpeg,fit_inside,s_1536x700/smartinput_shortcutkeyboard/case_open.jpg":"\u002F_nuxt\u002Fimage\u002Fd10175.jpeg","/_ipx/f_webp,fit_inside,s_320x700/smartinput_shortcutkeyboard/case_open.jpg":"\u002F_nuxt\u002Fimage\u002F07e54c.webp","/_ipx/f_webp,fit_inside,s_640x700/smartinput_shortcutkeyboard/case_open.jpg":"\u002F_nuxt\u002Fimage\u002F2f801e.webp","/_ipx/f_webp,fit_inside,s_768x700/smartinput_shortcutkeyboard/case_open.jpg":"\u002F_nuxt\u002Fimage\u002F00c5d9.webp","/_ipx/f_webp,fit_inside,s_1024x700/smartinput_shortcutkeyboard/case_open.jpg":"\u002F_nuxt\u002Fimage\u002F8be9b3.webp","/_ipx/f_webp,fit_inside,s_1280x700/smartinput_shortcutkeyboard/case_open.jpg":"\u002F_nuxt\u002Fimage\u002F2a034d.webp","/_ipx/f_webp,fit_inside,s_1536x700/smartinput_shortcutkeyboard/case_open.jpg":"\u002F_nuxt\u002Fimage\u002F45d393.webp"}}],fetch:{},mutations:void 0}}("text","element","span"," ","\n","hljs-attr","hljs-comment","p","a","hljs-string","hljs-number","nofollow","noopener","noreferrer","_blank","true",-1,"icon","icon-link","hljs-type","\n      ","hljs-bullet","-","handler:","exec","\n        ","params:","\n          ","command:","hljs-keyword","hljs-built_in","\n    ","hardware","software","design",2,3,"h2","li","h3","div","nuxt-content-highlight","pre","code","hljs","Design","Hardware","Software","firmware","Firmware","daemon","Daemon","ui","UI","root","Eine Shortcut Tastatur mit addressierbarer RGB beleuchtung und frei konfigurierbaren Tasten. ","https:\u002F\u002Fgithub.com\u002Fniwla23\u002Fsmartinput_ng","GitHub","c++","1","3","int","0","if","short_press:","long_press:","2022-06-13T13:53:28.241Z")));