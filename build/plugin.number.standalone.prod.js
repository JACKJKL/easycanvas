!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var s=r[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}({0:function(t,e,r){t.exports=r(45)},45:function(t,e){"use strict";var r=void 0,n=function(t){var e=new r.class.sprite(t);e.style=t.style,e.content.img=t.number,e.style.sx=0,e.style.sw=e.style.sw||t.number.width,e.style.sh=Math.floor(e.style.sh||t.number.height/10);var n=0,s={tick:Math.floor((t.interval||1e3)/16.6),heightRate:1,numberHeight:e.style.sh,current:0,stop:!1};return e.set=function(t){for(var e in t)s[e]=t[e]},e.getCurrentValue=function(){return s.current},e.setCurrentValue=function(t){s.current=t,e.style.sy=s.current*s.heightRate*s.numberHeight},e.scrollToValue=function(t,n){s.current=t,e.style.sy=r.transition.linear(e.$cache.sy,s.current*s.heightRate*s.numberHeight,n||200)},e.stop=function(){s.stop=!0},e.restart=function(){s.stop=!1,s.current=0,e.style.sy=0,n=0},e.hooks={ticked:function(){s.stop||++n<=s.tick||(n=1,s.current++,e.style.sy=s.current*s.heightRate*s.numberHeight,s.current>9&&(e.style.sy=0,s.current=0))}},e};window&&window.Easycanvas&&(r=window.Easycanvas,r.class.number=n),t.exports=function(t){r=t,t.class.number=n}}})});