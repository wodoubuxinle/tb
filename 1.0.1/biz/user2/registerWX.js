"use strict";var e=require("path"),r=process.cwd(),n=require(e.join(r,"settings")),i=require("node-uuid"),u=require("speedt-utils").md5,t=require("speedt-utils").utils,s=require("speedt-anysdk"),a=require("emag.db").mysql,o=require("emag.db").redis,d=require("emag.cfg"),c=require("emag.biz"),x=require("underscore");x.str=require("underscore.string"),x.mixin(x.str.exports()),function(){function e(e){var n=x.clone(e);return new Promise(function(i,u){c.user2.getByWXOpenid(e.data.user_info.openid).then(r.bind(null,e.data.user_info)).then(function(){return i(n)}).catch(u)})}function r(e,r){return r?(r.wx_original=JSON.stringify(e),r.nickname=e.nickname,r.sex=e.sex,r.wx_avatar=e.headimgurl,new Promise(function(e,n){a.query(i,[r.wx_original,r.nickname,r.sex,r.wx_avatar,r.wx_openid],function(i){if(i)return n(i);e(r)})})):n(e)}function n(e){return e.wx_original=JSON.stringify(e),e.user_name=e.openid,e.user_pass="123456tb",e.wx_openid=e.openid,e.wx_unionid=e.unionid,e.wx_pass=u.hex("123456"),e.wx_avatar=e.headimgurl,c.user2.saveNew(e)}exports=module.exports=function(r){return new Promise(function(n,i){s.wx(r).then(e).then(function(e){return n(e)}).catch(i)})};var i="UPDATE s_user SET wx_original=?, nickname=?, sex=?, wx_avatar=? WHERE wx_openid=?"}();