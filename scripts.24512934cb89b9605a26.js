!function(e,o){"function"==typeof define&&define.amd?define([],o):"object"==typeof module&&module.exports?module.exports=o():e.Rellax=o()}("undefined"!=typeof window?window:global,(function(){var e=function(o,t){var n=Object.create(e.prototype),r=0,i=0,l=0,a=0,s=[],p=!0,d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},c=null,m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,u=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var o,t=["Webkit","Moz","ms"];for(o in t)if(void 0!==e.style[t[o]+"Transform"])return t[o]+"Transform"}return"transform"}();n.options={speed:-2,center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}},t&&Object.keys(t).forEach((function(e){n.options[e]=t[e]})),o||(o=".rellax");var f="string"==typeof o?document.querySelectorAll(o):[o];if(0<f.length){if(n.elems=f,n.options.wrapper&&!n.options.wrapper.nodeType){if(!(f=document.querySelector(n.options.wrapper)))return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=f}var w=function(){for(var e=0;e<s.length;e++)n.elems[e].style.cssText=s[e].style;for(s=[],i=window.innerHeight,a=window.innerWidth,h(),e=0;e<n.elems.length;e++){var o=n.elems[e],t=o.getAttribute("data-rellax-percentage"),r=o.getAttribute("data-rellax-speed"),l=o.getAttribute("data-rellax-zindex")||0,d=o.getAttribute("data-rellax-min"),c=o.getAttribute("data-rellax-max"),m=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;n.options.relativeToWrapper&&(m=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var u=n.options.vertical&&(t||n.options.center)?m:0,f=n.options.horizontal&&(t||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0;m=u+o.getBoundingClientRect().top;var y=o.clientHeight||o.offsetHeight||o.scrollHeight,v=f+o.getBoundingClientRect().left,b=o.clientWidth||o.offsetWidth||o.scrollWidth;u=t||(u-m+i)/(y+i),t=t||(f-v+a)/(b+a),n.options.center&&(u=t=.5),t=x(t,u,r=r||n.options.speed),u="",0<=(o=o.style.cssText).indexOf("transform")&&(u=o.indexOf("transform"),u=(f=(u=o.slice(u)).indexOf(";"))?" "+u.slice(11,f).replace(/\s/g,""):" "+u.slice(11).replace(/\s/g,"")),s.push({baseX:t.x,baseY:t.y,top:m,left:v,height:y,width:b,speed:r,style:o,transform:u,zindex:l,min:d,max:c})}p&&(window.addEventListener("resize",w),p=!1),g()},h=function(){var e=r,o=l;return r=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,l=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper&&(r=((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-n.options.wrapper.offsetTop),!!(e!=r&&n.options.vertical||o!=l&&n.options.horizontal)},x=function(e,o,t){var r={};return e=100*t*(1-e),o=100*t*(1-o),r.x=n.options.round?Math.round(e):Math.round(100*e)/100,r.y=n.options.round?Math.round(o):Math.round(100*o)/100,r},y=function(){h()&&!1===p&&g(),c=d(y)},g=function(){for(var e,o=0;o<n.elems.length;o++){var t=(e=x((l-s[o].left+a)/(s[o].width+a),(r-s[o].top+i)/(s[o].height+i),s[o].speed)).y-s[o].baseY,p=e.x-s[o].baseX;null!==s[o].min&&(n.options.vertical&&!n.options.horizontal&&(t=t<=s[o].min?s[o].min:t),n.options.horizontal&&!n.options.vertical&&(p=p<=s[o].min?s[o].min:p)),null!==s[o].max&&(n.options.vertical&&!n.options.horizontal&&(t=t>=s[o].max?s[o].max:t),n.options.horizontal&&!n.options.vertical&&(p=p>=s[o].max?s[o].max:p)),n.elems[o].style[u]="translate3d("+(n.options.horizontal?p:"0")+"px,"+(n.options.vertical?t:"0")+"px,"+s[o].zindex+"px) "+s[o].transform}n.options.callback(e)};return n.destroy=function(){for(var e=0;e<n.elems.length;e++)n.elems[e].style.cssText=s[e].style;p||(window.removeEventListener("resize",w),p=!0),m(c),c=null},w(),y(),n.refresh=w,n}console.warn("Rellax: The elements you're trying to select don't exist.")};return e}));