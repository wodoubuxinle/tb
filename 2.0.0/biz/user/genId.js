"use strict";var e=require("path"),r=process.cwd(),i=require(e.join(r,"settings")),u=require("node-uuid"),t=require("speedt-utils").md5,n=require("speedt-utils").utils,s=require("emag.db").mysql,o=require("emag.db").redis,d=require("emag.cfg"),a=require("emag.biz"),q=require("underscore");q.str=require("underscore.string"),q.mixin(q.str.exports()),function(){function e(i,u){var t=n.randomStr(6).toUpperCase();s.query(r,[t],function(r,n){return r?i(r):0<n.length?e(i,u):void i(null,t)})}var r="SELECT a.* FROM s_user a WHERE a.id=?";exports=module.exports=function(r){return new Promise(function(i,u){e(function(e,r){if(e)return u(e);i(r)},r)})}}();