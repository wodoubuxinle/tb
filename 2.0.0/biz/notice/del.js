"use strict";var e=require("path"),r=process.cwd(),i=require(e.join(r,"settings")),u=require("node-uuid"),s=require("speedt-utils").md5,t=require("speedt-utils").utils,d=require("emag.db").mysql,q=require("emag.db").redis,n=require("emag.cfg"),o=require("emag.biz"),c=require("underscore");c.str=require("underscore.string"),c.mixin(c.str.exports()),function(){exports=module.exports=function(e,r){d.query("DELETE FROM w_notice WHERE id=?",[e],r)}}();