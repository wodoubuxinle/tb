"use strict";var e=require("path"),r=process.cwd(),i=require(e.join(r,"settings")),s=require("node-uuid"),u=require("speedt-utils").md5,t=require("speedt-utils").utils,d=require("emag.db").mysql,a=require("emag.db").redis,c=require("emag.cfg"),n=require("emag.biz"),o=require("underscore");o.str=require("underscore.string"),o.mixin(o.str.exports()),function(){exports=module.exports=function(e,r){return a.evalsha("f80e603c00b8ae91b4cecb582bac25097b05c587",2,i.redis.database,e,o.now(),r)}}();