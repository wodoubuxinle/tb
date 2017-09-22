"use strict";var e=require("emag.biz"),n=require("underscore"),t=require("../settings"),r=require("speedt-utils").utils,i=require("speedt-amq");exports.indexUI=function(n,r,i){e.notice.findAll(function(e,o){if(e)return i(e);r.render("notice/index",{conf:t,data:{list_notice:o,session_user:n.session.user,nav_choose:",04,0401,"}})})},exports.addUI=function(e,n,r){n.render("notice/add",{conf:t,data:{session_user:e.session.user,nav_choose:",04,0401,"}})},exports.add=function(n,t,r){var i=n.body;i.user_id=n.session.userId,e.notice.saveNew(i,function(e,n){if(e)return r(e);t.send({})})},exports.editUI=function(n,r,i){var o=n.query.id;e.notice.getById(o).then(function(e){if(!e)return i(new Error("Not Found"));r.render("notice/edit",{conf:t,data:{notice:e,session_user:n.session.user,nav_choose:",04,0401,"}})}).catch(i)},exports.edit=function(n,t,r){var i=n.body;e.notice.editInfo(i,function(e,n){if(e)return r(e);t.send({})})},exports.del=function(n,t,r){var i=n.body;e.notice.del(i.id,function(e,n){if(e)return r(e);t.send({})})},function(){function t(n,t){return new Promise(function(i,o){if(0===t.length)return o(new Error("前置机未启动"));e.notice.getById(n).then(r.bind(null,t)).then(function(){return i()}).catch(o)})}function r(e,t){return new Promise(function(r,o){if(!t)return o(new Error("Not Found"));delete t.user_id,delete t.last_time;var s=["ALL",JSON.stringify([1008,t,n.now()])],u=!0,d=!1,c=void 0;try{for(var f,a=e[Symbol.iterator]();!(u=(f=a.next()).done);u=!0){var l=f.value;i.send("/queue/back.send.v3."+l,{priority:8},s,function(e,n){})}}catch(e){d=!0,c=e}finally{try{!u&&a.return&&a.return()}finally{if(d)throw c}}r()})}exports.send=function(n,r,i){var o=n.body;e.frontend.findAll().then(t.bind(null,o.id)).then(function(){return r.send({})}).catch(i)}}();