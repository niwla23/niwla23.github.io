__NUXT_JSONP__("/posts/gateautomation", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av){return {data:[{article:{slug:"gateautomation",description:D,title:"Handysteuerung Tor",image:"\u002Fgateautomation\u002Fthumb.jpg",featured:true,tags:["app","openhab","software","hardware","esp","esp32","embedded","loeten","iot"],toc:[],body:{type:R,children:[{type:b,tag:j,props:{},children:[{type:a,value:D}]},{type:a,value:f},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"The gate has a remote control with only one button. This button performs one of the following actions:"}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:E,props:{},children:[{type:a,value:"Open"}]},{type:a,value:f},{type:b,tag:E,props:{},children:[{type:a,value:"Close"}]},{type:a,value:f},{type:b,tag:E,props:{},children:[{type:a,value:"Stop"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"The gate always moves in the opposite direction of its last movement. Initially, I controlled the button using Fischertechnik Pneumatics and an ESP32. Later, I replaced the pneumatics with a servo."}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"While the gate could be controlled, there was no way to know its current state."}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"My initial idea was to attach an ESP32 with an ultrasonic sensor to the gate to measure the distance."}]},{type:a,value:f},{type:b,tag:"blockquote",props:{},children:[{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"Problem: No Wi-Fi"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"Coincidentally, there was an old postal cable between the basement and the gate. After half a day of measurements, I managed to identify all the wires."}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"All I had to do was solder the ultrasonic sensor to the cable, attach an ESP32 on the other end, and 3D print a casing for the sensor."}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"Here's how it looks:"}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:b,tag:S,props:{alt:"Ultraschallsensor",src:"ultrasonic_sensor_image_link"},children:[]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:b,tag:S,props:{alt:"ESP32",src:"esp32_image_link"},children:[]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"To control it using a slider in openHAB, I created a rule that moves the gate to the desired position. This rule is triggered when the gate slider receives a command."}]},{type:a,value:f},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{},children:[{type:b,tag:I,props:{className:[J,"python"]},children:[{type:b,tag:c,props:{className:[h]},children:[{type:a,value:T}]},{type:a,value:" time\n"},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:"from"}]},{type:a,value:" org.slf4j "},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:T}]},{type:a,value:" LoggerFactory\n\nlogger = LoggerFactory.getLogger("},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"\"de.niwla23.automation.gate\""}]},{type:a,value:U},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"\"Starting gate check\""}]},{type:a,value:")\n\nlogger.info("},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:V}]},{type:a,value:").state))\n"},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:n}]},{type:a,value:e},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:V}]},{type:a,value:").state) != "},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"\"OFF\""}]},{type:a,value:":\n  exit("},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:o}]},{type:a,value:W},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[x,y]},children:[{type:a,value:"invert_position"}]},{type:a,value:q},{type:b,tag:c,props:{className:["hljs-params"]},children:[{type:a,value:"pos"}]},{type:a,value:"):\n    "},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:K}]},{type:a,value:e},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:"100"}]},{type:a,value:" - pos\n\n\ntarget = "},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:X}]},{type:a,value:q},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:Y}]},{type:a,value:q},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"\"gate\""}]},{type:a,value:").state)))\nlogger.info("},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"\"Target value\""}]},{type:a,value:", target)\n\n"},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[x,y]},children:[{type:a,value:"get_current"}]},{type:a,value:Z},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:K}]},{type:a,value:" invert_position("},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:X}]},{type:a,value:q},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:Y}]},{type:a,value:q},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"\"gate_status\""}]},{type:a,value:").state))))\n\n\n"},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[x,y]},children:[{type:a,value:"is_ok"}]},{type:a,value:Z},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:K}]},{type:a,value:" get_current() "},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:"in"}]},{type:a,value:e},{type:b,tag:c,props:{className:[l]},children:[{type:a,value:"range"}]},{type:a,value:"(target - "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:r}]},{type:a,value:", target + "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:r}]},{type:a,value:W},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[x,y]},children:[{type:a,value:"press_button"}]},{type:a,value:"():\n    events.sendCommand("},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"'gate_button'"}]},{type:a,value:L},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:_}]},{type:a,value:")\n\n\n"},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:n}]},{type:a,value:" is_ok():\n    logger.info("},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"\"position is already ok\""}]},{type:a,value:")\n    exit("},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:o}]},{type:a,value:$},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:"else"}]},{type:a,value:":\n    events.sendCommand("},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:aa}]},{type:a,value:L},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:_}]},{type:a,value:")\n    logger.info("},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"\"position is not ok, starting...\""}]},{type:a,value:")\n    press_button()\n    time.sleep("},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:r}]},{type:a,value:")\n    "},{type:b,tag:c,props:{className:[M]},children:[{type:a,value:"# keep checking if posititon reached press button again"}]},{type:a,value:k},{type:b,tag:c,props:{className:[M]},children:[{type:a,value:"# when position is 0 or 100 press button again."}]},{type:a,value:k},{type:b,tag:c,props:{className:[M]},children:[{type:a,value:"# cancel after 10 pushes to prevent gate from going crazy in case of sensor failure"}]},{type:a,value:"\n    iterations = "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:o}]},{type:a,value:"\n    pushes = "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:o}]},{type:a,value:"\n    \n    "},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:"while"}]},{type:a,value:e},{type:b,tag:c,props:{className:["hljs-literal"]},children:[{type:a,value:"True"}]},{type:a,value:":\n        "},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:n}]},{type:a,value:" pushes \u003E "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:"10"}]},{type:a,value:":\n          "},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:N}]},{type:a,value:"\n        iterations = iterations + "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:z}]},{type:a,value:O},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:n}]},{type:a,value:" is_ok():\n            "},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:n}]},{type:a,value:ab},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:"94"}]},{type:a,value:e},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:P}]},{type:a,value:ac},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:"8"}]},{type:a,value:":\n              "},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:N}]},{type:a,value:"\n            pushes += "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:z}]},{type:a,value:"\n            press_button()\n            "},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:N}]},{type:a,value:O},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:n}]},{type:a,value:" iterations \u003E "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:"90"}]},{type:a,value:":\n            pushes += "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:z}]},{type:a,value:"\n            press_button()\n            iterations = "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:o}]},{type:a,value:"\n            "},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:"continue"}]},{type:a,value:"\n        current = get_current()\n        "},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:n}]},{type:a,value:" current \u003E "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:ad}]},{type:a,value:e},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:P}]},{type:a,value:" current \u003C "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:ae}]},{type:a,value:":\n            logger.info("},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"\"gate is fully open \u002F closed\""}]},{type:a,value:")\n            time.sleep("},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:r}]},{type:a,value:")\n            "},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:n}]},{type:a,value:ab},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:ad}]},{type:a,value:e},{type:b,tag:c,props:{className:[h]},children:[{type:a,value:P}]},{type:a,value:ac},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:ae}]},{type:a,value:":\n                logger.info("},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"\"gate is still fully open \u002F closed, pressing button.\""}]},{type:a,value:")\n                pushes += "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:z}]},{type:a,value:"\n                press_button()\n                iterations = "},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:o}]},{type:a,value:"\n                time.sleep("},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:r}]},{type:a,value:")\n        time.sleep("},{type:b,tag:c,props:{className:[i]},children:[{type:a,value:"1.5"}]},{type:a,value:U},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"\"position is ok now, exiting...\""}]},{type:a,value:")\nevents.sendCommand("},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:aa}]},{type:a,value:L},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"'OFF'"}]},{type:a,value:$}]}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"This rule updates the label of the slider when the gate's working state changes. It prevents the control rule from running twice, which would lead to chaos."}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"The pushes \u003E 10 check prevents the button from being pressed every few seconds in case of sensor failure, which would be uncontrollable in case of a VPN connection failure outside the network."}]},{type:a,value:f},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{},children:[{type:b,tag:I,props:{className:[J,af]},children:[{type:b,tag:c,props:{className:[g]},children:[{type:a,value:ag}]},{type:a,value:A},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:t}]},{type:a,value:e},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:B}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:ah}]},{type:a,value:k},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:C}]},{type:a,value:m},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:ai}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"gate_working"}]},{type:a,value:m},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:"state:"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:Q}]},{type:a,value:m},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:aj}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:Q}]},{type:a,value:k},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:ak}]},{type:a,value:f},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:al}]},{type:a,value:am},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:an}]},{type:a,value:A},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:t}]},{type:a,value:e},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:ao}]},{type:a,value:ap},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:B}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:aq}]},{type:a,value:k},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:C}]},{type:a,value:m},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:ar}]},{type:a,value:m},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:as}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"gate.label"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"="}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"\"Tor (\""}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:at}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"gate_working.state.toString"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:at}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"\")\""}]},{type:a,value:k},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:au}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"Diese Regel, der gate proxy updater setzt den Wert vom Tor Controlslider auf den invertierten Wert vom Sensor.\nThe rule \"gate_proxy_updater\" sets the value of the Gate Control Slider to the inverted value of the sensor."}]},{type:a,value:f},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{},children:[{type:b,tag:I,props:{className:[J,af]},children:[{type:b,tag:c,props:{className:[g]},children:[{type:a,value:ag}]},{type:a,value:A},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:t}]},{type:a,value:e},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:B}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:ah}]},{type:a,value:k},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:C}]},{type:a,value:m},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:ai}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"gate_status"}]},{type:a,value:m},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:aj}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:Q}]},{type:a,value:k},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:ak}]},{type:a,value:f},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:al}]},{type:a,value:am},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:an}]},{type:a,value:A},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:t}]},{type:a,value:e},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:ao}]},{type:a,value:ap},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:B}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:aq}]},{type:a,value:k},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:C}]},{type:a,value:m},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:ar}]},{type:a,value:m},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:as}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"if(gate.state"}]},{type:a,value:e},{type:b,tag:c,props:{className:["hljs-type"]},children:[{type:a,value:"!="}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"gate_status.state)"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"gate.postUpdate((100"}]},{type:a,value:e},{type:b,tag:c,props:{className:[s]},children:[{type:a,value:t}]},{type:a,value:O},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"gate_status.state"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"as"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:"DecimalType).toString)"}]},{type:a,value:k},{type:b,tag:c,props:{className:[g]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d]},children:[{type:a,value:au}]},{type:a,value:f}]}]}]}]},excerpt:{type:R,children:[{type:b,tag:j,props:{},children:[{type:a,value:D}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fgateautomation",extension:".md",createdAt:av,updatedAt:av},_img:{"/_ipx/s_1280x584/gateautomation/thumb.jpg":"\u002F_nuxt\u002Fimage\u002Fa8f752.jpg","/_ipx/w_320,f_png,fit_inside/icon.png":"\u002F_nuxt\u002Fimage\u002F0a404b.png","/_ipx/w_640,f_png,fit_inside/icon.png":"\u002F_nuxt\u002Fimage\u002Fa9de22.png","/_ipx/w_768,f_png,fit_inside/icon.png":"\u002F_nuxt\u002Fimage\u002F6fd3de.png","/_ipx/w_1024,f_png,fit_inside/icon.png":"\u002F_nuxt\u002Fimage\u002F9c8214.png","/_ipx/w_1280,f_png,fit_inside/icon.png":"\u002F_nuxt\u002Fimage\u002Fe1b1d3.png","/_ipx/w_1536,f_png,fit_inside/icon.png":"\u002F_nuxt\u002Fimage\u002F1cfc49.png","/_ipx/w_320,f_webp,fit_inside/icon.png":"\u002F_nuxt\u002Fimage\u002F98e7a7.webp","/_ipx/w_640,f_webp,fit_inside/icon.png":"\u002F_nuxt\u002Fimage\u002F82becb.webp","/_ipx/w_768,f_webp,fit_inside/icon.png":"\u002F_nuxt\u002Fimage\u002F4f68f8.webp","/_ipx/w_1024,f_webp,fit_inside/icon.png":"\u002F_nuxt\u002Fimage\u002F96a92d.webp","/_ipx/w_1280,f_webp,fit_inside/icon.png":"\u002F_nuxt\u002Fimage\u002F3503f4.webp","/_ipx/w_1536,f_webp,fit_inside/icon.png":"\u002F_nuxt\u002Fimage\u002F8c5f4e.webp"}}],fetch:{},mutations:void 0}}("text","element","span","hljs-string"," ","\n","hljs-attr","hljs-keyword","hljs-number","p","\n    ","hljs-built_in","\n      ","if","0","type:","(","5","hljs-bullet","-","str","(ir.getItem(","def","hljs-title","function_","1","\n  ","id:","configuration:","With an ultrasonic sensor, an old postal cable, and a servo, I made our garden gate smart.","li","div","nuxt-content-highlight","pre","code","hljs","return",", ","hljs-comment","break","\n        ","or","\"\"","root","img","import",")\nlogger.info(","\"gate_working\"",")\n\n","int","float","():\n    ","'ON'",")\n","'gate_working'"," get_current() \u003E "," get_current() \u003C ","98","2","yaml","triggers:","\"1\"","itemName:","previousState:","core.ItemStateChangeTrigger","conditions:"," []\n","actions:","inputs:"," {}\n    ","\"2\"","application\u002Fvnd.openhab.dsl.rule","script:","+","script.ScriptAction","2023-07-19T16:18:10.000Z")));