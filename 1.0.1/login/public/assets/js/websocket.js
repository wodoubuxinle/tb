"use strict";!function(n){var e=n,o=e.ws,t=function n(e){return e instanceof n?e:this instanceof n?void 0:new n(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=t),exports.ws=t):e.ws=t,t.connect=function(){},t.noConflict=function(){return e.ws=o,this},"function"==typeof define&&define.amd&&define("websocket",[],function(){return t})}("undefined"==typeof window?{}:window);