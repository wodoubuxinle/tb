"use strict";var e=require("path"),r=process.cwd(),t=require(e.join(r,"settings")),o=require("http"),n=require("speedt-utils").ajax,i=require("underscore"),a=require("log4js"),c=a.getLogger("cfg"),s=new Promise(function(e,r){n(o.request,{host:t.app.resHost,port:80,path:"/assets/cfg/common.json",method:"GET"},null,null).then(function(r){e(JSON.parse(r))}).catch(r)});Promise.all([s]).then(function(e){var r=e[0];if(124!==r.ver)throw new Error("");exports.common=r.data,require("emag.biz").cfg.findAll(null,function(e,r){if(e)return c.error("load dynamic config:",e);var t=exports.dynamic={},o=!0,n=!1,i=void 0;try{for(var a,s=r[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var u=a.value;t[u.type_]||(t[u.type_]={}),t[u.type_][u.key_]=u.value_}}catch(e){n=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(n)throw i}}c.debug("loaded dynamic config:",t),c.info("loaded all config: success")})}).catch(function(e){c.error("load config:",e),process.exit(1)});