(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,t,o){var content=o(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(59).default)("48e617d8",content,!0,{sourceMap:!1})},217:function(e,t,o){"use strict";var r=o(0).a.extend({computed:{year:function(){return(new Date).getFullYear()}}}),n=(o(268),o(36)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bg-background-main dark:bg-neutral-900 min-h-screen pb-8"},[o("Nuxt",{staticClass:"min-h-screen"}),e._v(" "),o("footer",{staticClass:"flex flex-row justify-center text-gray-300 space-x-4"},[o("p",[e._v("Copyright © "+e._s(e.year)+" niwla23")]),e._v(" "),o("nuxt-link",{attrs:{to:"/impressum"}},[e._v("Impressum")]),e._v(" "),o("nuxt-link",{attrs:{to:"/privacy"}},[e._v("Datenschutz")])],1)],1)}),[],!1,null,null,null);t.a=component.exports},223:function(e,t,o){o(224),e.exports=o(225)},264:function(e,t,o){var content=o(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(59).default)("1992bd8b",content,!0,{sourceMap:!1})},265:function(e,t,o){var r=o(58)((function(i){return i[1]}));r.push([e.i,'/*! tailwindcss v3.0.11 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: Source Sans Pro, sans-serif; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.prose{color:var(--tw-prose-body);max-width:65ch;}.prose :where([class~="lead"]):not(:where([class~="not-prose"] *)){color:var(--tw-prose-lead);font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em;}.prose :where(a):not(:where([class~="not-prose"] *)){color:var(--tw-prose-links);text-decoration:underline;font-weight:500;}.prose :where(strong):not(:where([class~="not-prose"] *)){color:var(--tw-prose-bold);font-weight:600;}.prose :where(ol):not(:where([class~="not-prose"] *)){list-style-type:decimal;padding-left:1.625em;}.prose :where(ol[type="A"]):not(:where([class~="not-prose"] *)){list-style-type:upper-alpha;}.prose :where(ol[type="a"]):not(:where([class~="not-prose"] *)){list-style-type:lower-alpha;}.prose :where(ol[type="A" s]):not(:where([class~="not-prose"] *)){list-style-type:upper-alpha;}.prose :where(ol[type="a" s]):not(:where([class~="not-prose"] *)){list-style-type:lower-alpha;}.prose :where(ol[type="I"]):not(:where([class~="not-prose"] *)){list-style-type:upper-roman;}.prose :where(ol[type="i"]):not(:where([class~="not-prose"] *)){list-style-type:lower-roman;}.prose :where(ol[type="I" s]):not(:where([class~="not-prose"] *)){list-style-type:upper-roman;}.prose :where(ol[type="i" s]):not(:where([class~="not-prose"] *)){list-style-type:lower-roman;}.prose :where(ol[type="1"]):not(:where([class~="not-prose"] *)){list-style-type:decimal;}.prose :where(ul):not(:where([class~="not-prose"] *)){list-style-type:disc;padding-left:1.625em;}.prose :where(ol > li):not(:where([class~="not-prose"] *))::marker{font-weight:400;color:var(--tw-prose-counters);}.prose :where(ul > li):not(:where([class~="not-prose"] *))::marker{color:var(--tw-prose-bullets);}.prose :where(hr):not(:where([class~="not-prose"] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em;}.prose :where(blockquote):not(:where([class~="not-prose"] *)){font-weight:500;font-style:italic;color:var(--tw-prose-quotes);border-left-width:0.25rem;border-left-color:var(--tw-prose-quote-borders);quotes:"\\201C""\\201D""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em;}.prose :where(blockquote p:first-of-type):not(:where([class~="not-prose"] *))::before{content:open-quote;}.prose :where(blockquote p:last-of-type):not(:where([class~="not-prose"] *))::after{content:close-quote;}.prose :where(h1):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:0.8888889em;line-height:1.1111111;}.prose :where(h1 strong):not(:where([class~="not-prose"] *)){font-weight:900;}.prose :where(h2):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333;}.prose :where(h2 strong):not(:where([class~="not-prose"] *)){font-weight:800;}.prose :where(h3):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:0.6em;line-height:1.6;}.prose :where(h3 strong):not(:where([class~="not-prose"] *)){font-weight:700;}.prose :where(h4):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:600;margin-top:1.5em;margin-bottom:0.5em;line-height:1.5;}.prose :where(h4 strong):not(:where([class~="not-prose"] *)){font-weight:700;}.prose :where(figure > *):not(:where([class~="not-prose"] *)){margin-top:0;margin-bottom:0;}.prose :where(figcaption):not(:where([class~="not-prose"] *)){color:var(--tw-prose-captions);font-size:0.875em;line-height:1.4285714;margin-top:0.8571429em;}.prose :where(code):not(:where([class~="not-prose"] *)){color:var(--tw-prose-code);font-weight:600;font-size:0.875em;}.prose :where(code):not(:where([class~="not-prose"] *))::before{content:"`";}.prose :where(code):not(:where([class~="not-prose"] *))::after{content:"`";}.prose :where(a code):not(:where([class~="not-prose"] *)){color:var(--tw-prose-links);}.prose :where(pre):not(:where([class~="not-prose"] *)){color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);overflow-x:auto;font-weight:400;font-size:0.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:0.375rem;padding-top:0.8571429em;padding-right:1.1428571em;padding-bottom:0.8571429em;padding-left:1.1428571em;}.prose :where(pre code):not(:where([class~="not-prose"] *)){background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;}.prose :where(pre code):not(:where([class~="not-prose"] *))::before{content:none;}.prose :where(pre code):not(:where([class~="not-prose"] *))::after{content:none;}.prose :where(table):not(:where([class~="not-prose"] *)){width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:0.875em;line-height:1.7142857;}.prose :where(thead):not(:where([class~="not-prose"] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders);}.prose :where(thead th):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:600;vertical-align:bottom;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em;}.prose :where(tbody tr):not(:where([class~="not-prose"] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders);}.prose :where(tbody tr:last-child):not(:where([class~="not-prose"] *)){border-bottom-width:0;}.prose :where(tbody td):not(:where([class~="not-prose"] *)){vertical-align:baseline;padding-top:0.5714286em;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em;}.prose{--tw-prose-body:#374151;--tw-prose-headings:#111827;--tw-prose-lead:#4b5563;--tw-prose-links:#111827;--tw-prose-bold:#111827;--tw-prose-counters:#6b7280;--tw-prose-bullets:#d1d5db;--tw-prose-hr:#e5e7eb;--tw-prose-quotes:#111827;--tw-prose-quote-borders:#e5e7eb;--tw-prose-captions:#6b7280;--tw-prose-code:#111827;--tw-prose-pre-code:#e5e7eb;--tw-prose-pre-bg:#1f2937;--tw-prose-th-borders:#d1d5db;--tw-prose-td-borders:#e5e7eb;--tw-prose-invert-body:#d1d5db;--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:#9ca3af;--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:#9ca3af;--tw-prose-invert-bullets:#4b5563;--tw-prose-invert-hr:#374151;--tw-prose-invert-quotes:#f3f4f6;--tw-prose-invert-quote-borders:#374151;--tw-prose-invert-captions:#9ca3af;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:#d1d5db;--tw-prose-invert-pre-bg:rgb(0 0 0 / 50%);--tw-prose-invert-th-borders:#4b5563;--tw-prose-invert-td-borders:#374151;font-size:1rem;line-height:1.75;}.prose :where(p):not(:where([class~="not-prose"] *)){margin-top:1.25em;margin-bottom:1.25em;}.prose :where(img):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em;}.prose :where(video):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em;}.prose :where(figure):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em;}.prose :where(h2 code):not(:where([class~="not-prose"] *)){font-size:0.875em;}.prose :where(h3 code):not(:where([class~="not-prose"] *)){font-size:0.9em;}.prose :where(li):not(:where([class~="not-prose"] *)){margin-top:0.5em;margin-bottom:0.5em;}.prose :where(ol > li):not(:where([class~="not-prose"] *)){padding-left:0.375em;}.prose :where(ul > li):not(:where([class~="not-prose"] *)){padding-left:0.375em;}.prose > :where(ul > li p):not(:where([class~="not-prose"] *)){margin-top:0.75em;margin-bottom:0.75em;}.prose > :where(ul > li > *:first-child):not(:where([class~="not-prose"] *)){margin-top:1.25em;}.prose > :where(ul > li > *:last-child):not(:where([class~="not-prose"] *)){margin-bottom:1.25em;}.prose > :where(ol > li > *:first-child):not(:where([class~="not-prose"] *)){margin-top:1.25em;}.prose > :where(ol > li > *:last-child):not(:where([class~="not-prose"] *)){margin-bottom:1.25em;}.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"] *)){margin-top:0.75em;margin-bottom:0.75em;}.prose :where(hr + *):not(:where([class~="not-prose"] *)){margin-top:0;}.prose :where(h2 + *):not(:where([class~="not-prose"] *)){margin-top:0;}.prose :where(h3 + *):not(:where([class~="not-prose"] *)){margin-top:0;}.prose :where(h4 + *):not(:where([class~="not-prose"] *)){margin-top:0;}.prose :where(thead th:first-child):not(:where([class~="not-prose"] *)){padding-left:0;}.prose :where(thead th:last-child):not(:where([class~="not-prose"] *)){padding-right:0;}.prose :where(tbody td:first-child):not(:where([class~="not-prose"] *)){padding-left:0;}.prose :where(tbody td:last-child):not(:where([class~="not-prose"] *)){padding-right:0;}.prose > :where(:first-child):not(:where([class~="not-prose"] *)){margin-top:0;}.prose > :where(:last-child):not(:where([class~="not-prose"] *)){margin-bottom:0;}.prose-green{--tw-prose-links:#16a34a;--tw-prose-invert-links:#22c55e;}.pointer-events-none{pointer-events:none;}.static{position:static;}.fixed{position:fixed;}.absolute{position:absolute;}.relative{position:relative;}.top-0{top:0px;}.right-0{right:0px;}.bottom-0{bottom:0px;}.z-50{z-index:50;}.z-0{z-index:0;}.-m-1{margin:-0.25rem;}.m-8{margin:2rem;}.mt-16{margin-top:4rem;}.mb-4{margin-bottom:1rem;}.ml-16{margin-left:4rem;}.mt-64{margin-top:16rem;}.mr-64{margin-right:16rem;}.block{display:block;}.flex{display:flex;}.grid{display:grid;}.h-64{height:16rem;}.h-2{height:0.5rem;}.h-full{height:100%;}.h-screen{height:100vh;}.h-32{height:8rem;}.h-96{height:24rem;}.min-h-screen{min-height:100vh;}.w-full{width:100%;}.w-auto{width:auto;}.w-48{width:12rem;}.w-10\\/12{width:83.333333%;}.max-w-full{max-width:100%;}.transform{transform:var(--tw-transform);}@-webkit-keyframes lite-bounce{0%, 100%{transform:translateY(-10%);}50%{transform:translateY(0%);}}@keyframes lite-bounce{0%, 100%{transform:translateY(-10%);}50%{transform:translateY(0%);}}.animate-scroll-down{-webkit-animation:lite-bounce 3s ease-in-out infinite;animation:lite-bounce 3s ease-in-out infinite;}.cursor-pointer{cursor:pointer;}.resize{resize:both;}.flex-row{flex-direction:row;}.flex-col{flex-direction:column;}.place-content-end{place-content:end;}.place-items-center{place-items:center;}.justify-end{justify-content:flex-end;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.gap-12{gap:3rem;}.gap-4{gap:1rem;}.space-x-2 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));}.space-x-4 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));}.overflow-hidden{overflow:hidden;}.rounded-md{border-radius:0.375rem;}.bg-primary-transparent{background-color:rgba(7, 102, 110, 0.8);}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.bg-primary{--tw-bg-opacity:1;background-color:rgb(7 102 110 / var(--tw-bg-opacity));}.bg-background-main{--tw-bg-opacity:1;background-color:rgb(223 235 255 / var(--tw-bg-opacity));}.fill-background-main{fill:#dfebff;}.object-cover{-o-object-fit:cover;object-fit:cover;}.p-6{padding:1.5rem;}.p-4{padding:1rem;}.p-16{padding:4rem;}.p-8{padding:2rem;}.pt-2{padding-top:0.5rem;}.pb-2{padding-bottom:0.5rem;}.pb-8{padding-bottom:2rem;}.pb-48{padding-bottom:12rem;}.pb-4{padding-bottom:1rem;}.text-center{text-align:center;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.text-6xl{font-size:3.75rem;line-height:1;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-4xl{font-size:2.25rem;line-height:2.5rem;}.font-bold{font-weight:700;}.uppercase{text-transform:uppercase;}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219 / var(--tw-text-opacity));}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline;}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.hover\\:scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:var(--tw-transform);}.prose-pre\\:p-0 :is(:where(pre):not(:where([class~="not-prose"] *))){padding:0px;}@media (prefers-color-scheme: dark){.dark\\:prose-invert{--tw-prose-body:var(--tw-prose-invert-body);--tw-prose-headings:var(--tw-prose-invert-headings);--tw-prose-lead:var(--tw-prose-invert-lead);--tw-prose-links:var(--tw-prose-invert-links);--tw-prose-bold:var(--tw-prose-invert-bold);--tw-prose-counters:var(--tw-prose-invert-counters);--tw-prose-bullets:var(--tw-prose-invert-bullets);--tw-prose-hr:var(--tw-prose-invert-hr);--tw-prose-quotes:var(--tw-prose-invert-quotes);--tw-prose-quote-borders:var(--tw-prose-invert-quote-borders);--tw-prose-captions:var(--tw-prose-invert-captions);--tw-prose-code:var(--tw-prose-invert-code);--tw-prose-pre-code:var(--tw-prose-invert-pre-code);--tw-prose-pre-bg:var(--tw-prose-invert-pre-bg);--tw-prose-th-borders:var(--tw-prose-invert-th-borders);--tw-prose-td-borders:var(--tw-prose-invert-td-borders);}.dark\\:bg-slate-800{--tw-bg-opacity:1;background-color:rgb(30 41 59 / var(--tw-bg-opacity));}.dark\\:bg-neutral-900{--tw-bg-opacity:1;background-color:rgb(23 23 23 / var(--tw-bg-opacity));}.dark\\:fill-neutral-900{fill:#171717;}.dark\\:text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}}@media (min-width: 640px){.sm\\:w-8\\/12{width:66.666667%;}.sm\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}}@media (min-width: 768px){.md\\:w-6\\/12{width:50%;}.md\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.md\\:gap-32{gap:8rem;}.md\\:p-32{padding:8rem;}.md\\:pt-16{padding-top:4rem;}}@media (min-width: 1024px){.lg\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.lg\\:gap-12{gap:3rem;}}@media (min-width: 1280px){.xl\\:p-32{padding:8rem;}}',""]),r.locals={},e.exports=r},268:function(e,t,o){"use strict";o(188)},269:function(e,t,o){var r=o(58)((function(i){return i[1]}));r.push([e.i,"html{font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;scroll-behavior:smooth}",""]),r.locals={},e.exports=r}},[[223,12,1,13]]]);