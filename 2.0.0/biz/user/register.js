"use strict";var e=require("path"),r=process.cwd(),s=require(e.join(r,"settings")),i=require("node-uuid"),u=require("speedt-utils").md5,t=require("speedt-utils").utils,a=require("emag.db").mysql,n=require("emag.db").redis,m=require("emag.cfg"),o=require("emag.biz"),_=require("underscore");_.str=require("underscore.string"),_.mixin(_.str.exports()),function(){var e=/^[\u4E00-\u9FA5a-zA-Z0-9_]{2,10}$/,r=/^[a-zA-Z0-9_]{6,16}$/;exports=module.exports=function(s){return s=s||{},_.isString(s.user_name)?(s.user_name=_.trim(s.user_name),e.test(s.user_name)&&_.isString(s.user_pass)?(s.user_pass=_.trim(s.user_pass),r.test(s.user_pass)?o.user.saveNew(s):Promise.reject("INVALID_PARAMS")):Promise.reject("INVALID_PARAMS")):Promise.reject("INVALID_PARAMS")}}();