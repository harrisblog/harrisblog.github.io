"use strict";var getTimeState=function(){var t=(new Date).getHours(),e="";return t<=4||22<t?e="Good 🛌<br>Night<br>":4<t&&t<=10?e="Good 🌮<br>Morning<br>":10<t&&t<=12?e="Good 🍱<br>Noon<br>":12<t&&t<=17?e="Good ☕<br>Afternoon<br>":17<t&&t<=22&&(e="Good 🍇<br>Evening<br>"),e};function sayhi(){document.querySelector("#author-info__sayhi")&&(document.getElementById("author-info__sayhi").innerHTML=getTimeState()+"这里是 👇")}function showTime(){var t=new Date,e="AM",o=t.getHours(),t=t.getMinutes();0<=o&&o<=12?e="AM":12<o&&(o-=12,e="PM"),o=o<10?"0"+o:o,t=t<10?"0"+t:t,document.querySelector(".status-bar_clock").textContent="".concat(o,":").concat(t," ").concat(e),setTimeout(showTime,1e3)}sayhi(),showTime();