"use strict";var e=require("path"),r=process.cwd(),i=require(e.join(r,"settings")),t=require("node-uuid"),u=require("speedt-utils").md5,s=require("speedt-utils").utils,a=require("emag.db").mysql,d=require("emag.db").redis,q=require("emag.cfg"),n=require("emag.biz"),o=require("underscore");o.str=require("underscore.string"),o.mixin(o.str.exports()),function(){exports=module.exports=function(e,r,i,t){a.query("SELECT a.* FROM w_gift a WHERE a.user_id=? AND a.gift_type=? AND DATE(a.create_time)=?",[e,r||1,i||s.formatDate(new Date,"YYYY-MM-dd")],t)}}();