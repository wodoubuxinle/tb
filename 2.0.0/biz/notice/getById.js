"use strict";var e=require("path"),r=process.cwd(),i=require(e.join(r,"settings")),u=require("node-uuid"),t=require("speedt-utils").md5,s=require("speedt-utils").utils,n=require("emag.db").mysql,o=require("emag.db").redis,d=require("emag.cfg"),c=require("emag.biz"),q=require("underscore");q.str=require("underscore.string"),q.mixin(q.str.exports()),function(){exports=module.exports=function(e){return new Promise(function(r,i){n.query("SELECT a.* FROM w_notice a WHERE a.id=?",[e],function(e,u){return e?i(e):n.checkOnly(u)?void r(u[0]):i("数据不存在")})})}}();