"use strict";var e=require("path"),r=process.cwd(),i=require(e.join(r,"settings")),s=require("node-uuid"),u=require("speedt-utils").md5,t=require("speedt-utils").utils,d=require("emag.db").mysql,a=require("emag.db").redis,n=require("emag.cfg"),q=require("emag.biz"),o=require("underscore");o.str=require("underscore.string"),o.mixin(o.str.exports()),function(){exports=module.exports=function(e,r){return a.evalsha("16dd95ae2b44a0df9af02f02e8751bbc87b6db4d",2,i.redis.database,e,r)}}();