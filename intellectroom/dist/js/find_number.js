"use strict";var e,n,t=document.querySelector(".span-chislo"),l=document.querySelectorAll(".nomer-chislo"),r=document.querySelectorAll(".nomer");function c(){t.style.color="#FFFFFF",e=Math.floor(98*Math.random()+1),n=Math.floor(8*Math.random()),t.innerHTML=e;for(var o=0;o<8;o++){var r=Math.floor(100*Math.random());l[o].innerHTML=o==n?e:r}}c();for(var o=function(o){r[o].addEventListener("click",function(){e==l[o].innerHTML?t.style.color="green":t.style.color="red",c()})},a=0;a<8;a++)o(a);