!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=class{getCard(e){for(var t=0;t<e.length;t++){var n=document.createElement("div");n.style.width="25%",n.className="w3-card-4";var r=document.createElement("img");"Hulk"==e[t].name?r.src="/assets/littlehulk.png":"Captain America"==e[t].name?r.src="/assets/captainamerica.png":"Spider-Man"==e[t].name?r.src="/assets/spiderman.png":"Vision"==e[t].name?r.src="/assets/vision.png":"Thor"==e[t].name&&(r.src="/assets/thorpic.png"),n.append(r);var a=document.createElement("div");a.className="w3-container w3-center",n.append(a);var o=document.createElement("p");o.innerHTML=e[t].description,a.append(o),content.append(n)}}}},function(e,t,n){let r=n(0);e.exports=class{getData(){let e=new XMLHttpRequest;e.onreadystatechange=function(){4==this.readyState&&(new r).getCard(JSON.parse(this.responseText))},e.open("Get","http://onyx.zerodevgroup.com:4000"),e.send()}}},function(e,t,n){var r=new Navigo("http://localhost:3000/#",!0,"#"),a=n(1);r.on("/avengers",function(){let e=new a,t=document.getElementById("content"),n=document.getElementById("avengers");n.onclick=e.getData(),t.append(n)}),r.on(function(){var e=document.getElementById("content"),t=document.createElement("button");t.onclick=getAvengers,t.innerHTML="Get Avengers",e.append(t)}).resolve()}]);