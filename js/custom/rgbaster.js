"use strict";!function(n){function t(n,t){var e=new Image;"data:"!==(n=n.src||n).substring(0,5)&&(e.crossOrigin="Anonymous"),e.onload=function(){var n=document.createElement("canvas").getContext("2d");n.drawImage(e,0,0);n=n.getImageData(0,0,e.width,e.height);t&&t(n.data)},e.src=n}function f(n){return["rgb(",n,")"].join("")}var e={};e.colors=function(m,s){var d=(s=s||{}).exclude||[],l=s.paletteSize||10;t(m,function(n){for(var t,e,a,o=m.width*m.height||n.length,r={},i=[],c={dominant:{name:"",count:0},palette:Array.apply(null,new Array(l)).map(Boolean).map(function(){return{name:"0,0,0",count:0}})},u=0;u<o;)i[0]=n[u],i[1]=n[u+1],i[2]=n[u+2],r[t=i.join(",")]=t in r?r[t]+1:1,-1===d.indexOf(f(t))&&((e=r[t])>c.dominant.count?(c.dominant.name=t,c.dominant.count=e):c.palette.some(function(n){return e>n.count?(n.name=t,n.count=e,!0):void 0})),u+=20;s.success&&(a=c.palette.map(function(n){return f(n.name)}),s.success({dominant:f(c.dominant.name),secondary:a[0],palette:a}))})},n.RGBaster=n.RGBaster||e}(window);