"use strict";var e=require("assert"),r=require("path"),n=process.cwd(),s=require(r.join(n,"settings")),u=require("node-uuid"),t=require("speedt-utils").md5,i=require("speedt-utils").utils,o=require("emag.db").mysql,a=require("emag.db").redis,c=require("emag.cfg"),m=require("emag.biz"),l=require("underscore");l.str=require("underscore.string"),l.mixin(l.str.exports());var f=require("log4js").getLogger("biz.manager");!function(){exports.getByName=function(e,r){return new Promise(function(n,s){(r||o).query("SELECT a.* FROM s_manager a WHERE a.user_name=?",[e],function(e,r){if(e)return s(e);n(o.checkOnly(r)?r[0]:null)})})}}(),function(){exports.getById=function(e,r){return new Promise(function(n,s){(r||o).query("SELECT a.* FROM s_manager a WHERE a.id=?",[e],function(e,r){if(e)return s(e);n(o.checkOnly(r)?r[0]:null)})})}}(),function(){function e(e,r){return r?1!==r.status?Promise.reject("禁用状态"):t.hex(e.user_pass)!==r.user_pass?Promise.reject("用户名或密码输入错误"):Promise.resolve(r):Promise.reject("用户不存在")}exports.login=function(r){return new Promise(function(n,s){m.manager.getByName(r.user_name).then(e.bind(null,r)).then(function(e){return n(e)}).catch(s)})}}(),function(){function r(e){return l.isString(e.user_pass)?(e.user_pass=l.trim(e.user_pass),""===e.user_pass?Promise.reject("INVALID_PARAMS"):Promise.resolve()):Promise.reject("INVALID_PARAMS")}function n(r,n){return e.notEqual(null,n),t.hex(r.old_pass)!==n.user_pass?Promise.reject("原始密码错误"):Promise.resolve()}function s(e){return e.user_pass=t.hex(e.user_pass),new Promise(function(r,n){o.query(u,[e.user_pass,e.id],function(e){if(e)return n(e);r()})})}exports.changePwd=function(e){return new Promise(function(u,t){r(e).then(m.manager.getById.bind(null,e.id)).then(n.bind(null,e)).then(s.bind(null,e)).then(function(){return u(e)}).catch(t)})};var u="UPDATE s_manager set user_pass=? WHERE id=?"}();