"use strict";var e=require("path"),r=process.cwd(),i=require(e.join(r,"settings")),u=require("node-uuid"),s=require("speedt-utils").md5,t=require("speedt-utils").utils,d=require("emag.db").mysql,n=require("emag.db").redis,a=require("emag.cfg"),q=require("emag.biz"),o=require("underscore");o.str=require("underscore.string"),o.mixin(o.str.exports()),function(){exports=module.exports=function(e){d.query("SELECT b.user_name, a.* FROM (SELECT * FROM w_notice) a LEFT JOIN s_manager b ON (a.user_id=b.id) WHERE b.id IS NOT NULL ORDER BY a.create_time DESC",null,e)}}();