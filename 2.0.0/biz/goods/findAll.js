"use strict";var e=require("path"),r=process.cwd(),i=require(e.join(r,"settings")),u=require("node-uuid"),s=require("speedt-utils").md5,t=require("speedt-utils").utils,d=require("emag.db").mysql,n=require("emag.db").redis,o=require("emag.cfg"),q=require("emag.biz"),a=require("underscore");a.str=require("underscore.string"),a.mixin(a.str.exports()),function(){exports=module.exports=function(e){return d.query("SELECT a.* FROM w_goods a ORDER BY a.create_time DESC",null,e)}}();