"use strict";var e=require("path"),r=process.cwd(),i=require(e.join(r,"settings")),u=require("node-uuid"),s=require("speedt-utils").md5,n=require("speedt-utils").utils,t=require("emag.db").mysql,o=require("emag.db").redis,q=require("emag.cfg"),a=require("emag.biz"),c=require("underscore");c.str=require("underscore.string"),c.mixin(c.str.exports()),function(){exports=module.exports=function(e,r){return new Promise(function(i,u){(r||t).query("SELECT a.* FROM s_manager a WHERE a.user_name=?",[e],function(e,r){if(e)return u(e);i(t.checkOnly(r)?r[0]:null)})})}}();