"use strict";var o=require("underscore"),r=require("log4js").getLogger("handle.front");exports.start=function(t,n){r.info("front %j start: %j",n,o.now())},exports.stop=function(t,n){r.info("front %j stop: %j",n,o.now())};