!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.padEvents=n():e.padEvents=n()}(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var d=t[r]={exports:{},id:r,loaded:!1};return e[r].call(d.exports,d,d.exports,n),d.loaded=!0,d.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n){"use strict";var t=function(){function e(){var t=function(e){var t=d[e];0===s[e].length&&(s[e]=t.axes.map(function(e){return l(e)}),i[e]=t.axes.map(function(n,t){return p(n,s[e][t])}));for(var u in t.buttons){var c=t.buttons[u].pressed,x=a[e][u];x&&o[e][x]!==c&&(o[e][x]=c,window.dispatchEvent(new CustomEvent(r[x][c?"pressed":"released"],{detail:{controllerIndex:e}})),console.log(i[e],t.axes.map(function(n,t){return p(n,s[e][t])}))),n&&c&&!x&&n(u)}};for(var u in d)t(u);requestAnimationFrame(e)}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return console.warn("unmapped button index",e)},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{0:"x",1:"a",2:"b",3:"y",9:"start",8:"select",5:"rt-shoulder",7:"rb-shoulder",4:"lt-shoulder",6:"lb-shoulder",10:"l-axis",11:"r-axis",12:"up",13:"down",14:"left",15:"right"},r=["a","b","x","y","start","select","rt-shoulder","rb-shoulder","lt-shoulder","lb-shoulder","l-axis","r-axis","l-axis-left","l-axis-right","l-axis-up","l-axis-down","r-axis-left","r-axis-right","r-axis-up","r-axis-down"].reduce(function(e,n){return e[n]={pressed:"gamepad-"+n+"-pressed",released:"gamepad-"+n+"-released"},e},{}),d={},a={},o={},i={},s={},u=function(e){return Object.keys(e).reduce(function(n,t){return n[e[t]]=!1,n},{})},l=function(e){return Math.round(100*e)},p=function(e,n){return 1===e?100:e===-1?-100:l(e)-n},c=function(e){d[e.gamepad.index]=e.gamepad,a[e.gamepad.index]=Object.assign({},t),o[e.gamepad.index]=u(a[e.gamepad.index]),i[e.gamepad.index]=e.gamepad.axes.map(function(e){return l(e)}),s[e.gamepad.index]=[]},x=function(e){var n=e.gamepad;delete d[n.index],delete a[n.index],delete o[n.index],delete i[n.index],delete s[n.index]};return e(),window.addEventListener("gamepadconnected",c),window.addEventListener("gamepaddisconnected",x),r};e.exports={initPadEvents:t}}])});