"use strict";var e=require("path"),r=process.cwd(),t=require(e.join(r,"settings")),i=require("node-uuid"),u=require("speedt-utils").md5,s=require("speedt-utils").utils,n=require("emag.db").mysql,o=require("emag.db").redis,c=require("emag.cfg"),d=require("emag.biz"),a=require("underscore");a.str=require("underscore.string"),a.mixin(a.str.exports());var m=require("emag.model").roomPool;!function(){function e(e){return e.group_id?Promise.resolve(e):Promise.reject("不在群组")}function r(e){var r=m.get(e.group_id);return r?r.quit(e.id)?new Promise(function(t,i){d.user.quitGroup(e.id).then(function(){if(1>a.size(r.getUsers()))return t();t([r.getUsers(),[e.id,e.opts.seat,r.isStart()]])}).catch(i)}):Promise.resolve([r.getUsers(),[e.id,e.opts.seat,r.isStart()]]):new Promise(function(r,t){d.user.quitGroup(e.id).then(function(){return r()}).catch(t)})}exports=module.exports=function(t,i){return new Promise(function(u,s){d.user.getByChannelId(t,i).then(e).then(r).then(function(e){return u(e)}).catch(s)})}}();