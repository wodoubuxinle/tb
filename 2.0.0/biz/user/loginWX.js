"use strict";var e=require("path"),r=process.cwd(),i=require(e.join(r,"settings")),n=require("node-uuid"),t=require("speedt-utils").md5,u=require("speedt-utils").utils,s=require("emag.db").mysql,c=require("emag.db").redis,o=require("emag.cfg"),a=require("emag.biz"),d=require("underscore");d.str=require("underscore.string"),d.mixin(d.str.exports()),function(){function e(e,r){return r?1!==r.status?Promise.reject("禁用状态"):t.hex(e.user_pass)!==r.wx_pass?Promise.reject("用户名或密码输入错误"):Promise.resolve(r):Promise.reject("用户不存在")}function r(e){return new Promise(function(r,i){Promise.all([s(e),a.frontend.available()]).then(function(e){return r(e)}).catch(i)})}function s(e){return new Promise(function(r,t){c.evalsha(o,d,i.redis.database,i.app.id,e.id,u.replaceAll(n.v4(),"-",""),m,function(e,i){if(e)return t(e);r(i)})})}exports=module.exports=function(i){return new Promise(function(n,t){a.user.getByWXOpenid(i.user_name).then(e.bind(null,i)).then(r).then(function(e){return n(e)}).catch(t)})};var o="5d6ae7790c5575549e66e87a5bc40cb3c8e182dc",d=4,m=5}();