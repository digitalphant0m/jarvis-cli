!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=function(){var e=document.getElementById("content");let t=document.createElement("div");t.className="w3-bar w3-blue";let n=document.createElement("a");n.className="w3-bar-item w3-button",n.href="#",n.innerHTML="Home",t.append(n);let r=document.createElement("a");r.className="w3-bar-item w3-button",r.href="#/avengers",r.innerHTML="Avengers",t.append(r),e.append(t)}},function(e,t){e.exports=function(e){var t=document.createElement("div");t.style.width="100%",t.className="w3-card-4 w3-display-middle";let n=document.createElement("header");n.className="w3-container w3-blue",t.append(n);let r=document.createElement("H1");r.innerHTML=e.name,n.append(r);let a=document.createElement("div");a.className="w3-container",t.append(a);var o=document.createElement("p");o.innerHTML=e.description,a.append(o);var c=document.createElement("div");c.className="w3-container",c.style.paddingBottom="20px",t.append(c),content.append(t)}},function(e,t,n){let r=n(1);e.exports=function(){let e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==this.readyState){let e=JSON.parse(this.responseText);r(e[0])}},e.open("Get","http://onyx.zerodevgroup.com:4000"),e.send()}},function(e,t,n){var r=n(0),a=n(2);e.exports=function(){r(),a()}},function(e,t){e.exports=function(e){for(var t=0;t<e.length;t++){var n=document.createElement("div");n.style.width="15%",n.className="w3-card-4",n.style.marginTop="8px",n.style.marginLeft="8px",n.style.marginRight="8px",n.style.marginBottom="8px",n.style.float="left",n.style.display="inline";var r=document.createElement("img");r.style.width="100%",n.append(r);var a=document.createElement("div");a.className="w3-container w3-center",a.style.paddingBottom="20px",n.append(a),document.createElement("p").innerHTML=e[t].description;var o=document.createElement("p");o.innerHTML=e[t].name,a.append(o);let c=document.createElement("a");c.className="w3-button",c.innerHTML="More Info","Hulk"==e[t].name?(r.src="/assets/littlehulk.png",c.href="#/hulk"):"Captain America"==e[t].name?(r.src="/assets/captainamerica.png",c.href="#/captain-america"):"Spider-Man"==e[t].name?(r.src="/assets/spiderman.png",c.href="#/spider-man"):"Vision"==e[t].name?(r.src="/assets/vision.png",c.href="#/vision"):"Thor"==e[t].name&&(r.src="/assets/thorpic.png",c.href="#/thor"),a.append(c),content.append(n)}}},function(e,t,n){let r=n(4);e.exports=function(){let e=new XMLHttpRequest;e.onreadystatechange=function(){4==this.readyState&&r(JSON.parse(this.responseText))},e.open("Get","http://onyx.zerodevgroup.com:4000"),e.send()}},function(e,t,n){var r=n(0),a=n(5);e.exports=function(){r(),a()}},function(e,t,n){var r=n(0);e.exports=function(){r()}},function(e,t,n){var r=new Navigo("http://localhost:3000/#",!0,"#"),a=n(7),o=n(6),c=n(3);r.on(function(){document.getElementById("content").innerHTML="",a()}).on("/avengers",function(){document.getElementById("content").innerHTML="",o()}).on("/thor",function(){document.getElementById("content").innerHTML="",c()}).resolve()}]);