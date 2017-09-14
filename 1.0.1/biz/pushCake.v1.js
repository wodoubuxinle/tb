"use strict";var e=require("path"),r=process.cwd(),t=require(e.join(r,"settings")),n=require("node-uuid"),o=require("underscore"),u=require("speedt-utils").md5,s=require("speedt-utils").utils,i=require("emag.db").mysql,a=require("emag.db").redis,c=require("emag.cfg"),d=require("emag.biz"),f=require("emag.model").roomPool,_=require("log4js").getLogger("biz.pushCake");!function(){function e(e){if(!e.group_id)return Promise.reject("已经退出了");var r=f.get(e.group_id);if(!r)return Promise.reject("房间不存在");var t=r.ready(e.id);return t?Promise.resolve([r.users,[t.id,t.opts.seat,o.size(r.round_no_ready),r.id]]):Promise.resolve()}function r(e,r){!function(e,r){var t=f.get(e);t&&t.isStart()&&function o(u){u=1e3*(u||10);var a=setTimeout(function(){if(clearTimeout(a),t&&t.act_status){if(5===t.act_status){_.debug("ready next: %s, %s",3,e);var u=t.cardCompare();if(!u)return o(5);if("5026"===u)return r([t.users,t.round_no_compare,5026]),o(13);if(u){_.debug(u);var c=u[0],d=u[5],f=u[6],p=u[7],l=u[1],m=u[3],g=u[2],v=u[4],b=u[8],P=u[13],h=u[9],y=u[11];i.query("insert into g_group_balance (id, create_time, group_id, round_id, round_pno, round_no, user_id_a, user_id_b, seat_a, seat_b, gold_count_a, gold_count_b, score_a, score_b) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[s.replaceAll(n.v4(),"-",""),new Date,c,d,f,p,l,m,g,v,b,P,h,y],function(e){if(e)return _.debug(e);i.query("update s_user set gold_count=? where id=?",[b,l],function(e){if(e)return _.debug(e);i.query("update s_user set gold_count=? where id=?",[P,m],function(e){if(e)return _.debug(e)})})})}return r([t.users,u,5024]),o(5)}if(9===t.act_status){var u=t.roundReady();return"GAME_OVER"===u?r([t.users,null,5040]):"ACT_STATUS_ROUND_NO_READY"===u?(r([t.users,[t.round_pno,t.round_no],5030]),o(5)):o(10)}if(11===t.act_status)return t.cardCompareBefore(),o(6);o()}},u)}()}(e,r)}exports.ready=function(t,n,o){return new Promise(function(u,s){d.user.getByChannelId(t,n).then(e).then(function(e){e&&(r(e[1][3],o),u(e))}).catch(s)})}}(),function(){function e(e){if(!e.group_id)return Promise.reject("已经退出了");var r=f.get(e.group_id);if(!r)return Promise.reject("房间不存在");var t=r.craps4(e.id);return t?Promise.resolve([r.users,[t.id,t.opts.seat,t.opts.craps,r.act_seat,r.banker_seat]]):Promise.resolve()}exports.craps4=function(r,t,n){return new Promise(function(n,o){d.user.getByChannelId(r,t).then(e).then(function(e){return n(e)}).catch(o)})}}(),function(){function e(e,r){if(!r.group_id)return Promise.reject("已经退出了");var t=f.get(r.group_id);if(!t)return Promise.reject("房间不存在");var n=t.bankerBet(r.id,e);return n?Promise.resolve([t.users,[n.id,n.opts.seat,t.act_seat,n.opts.bet]]):Promise.resolve()}exports.bankerBet=function(r,t,n){return n-=0,new Promise(function(o,u){d.user.getByChannelId(r,t).then(e.bind(null,n)).then(function(e){return o(e)}).catch(u)})}}(),function(){function e(e){if(!e.group_id)return Promise.reject("已经退出了");var r=f.get(e.group_id);if(!r)return Promise.reject("房间不存在");var t=r.bankerCraps(e.id);return t?Promise.resolve([r.users,[t.id,t.opts.seat,r.act_seat,t.opts.craps,r.id]]):Promise.resolve()}function r(e,r){setTimeout(function(){var t=f.get(e);if(t){var n=t.unBankerBetClosure();if(n){var u=[],s=!0,i=!1,a=void 0;try{for(var c,d=o.values(t.users)[Symbol.iterator]();!(s=(c=d.next()).done);s=!0){var _=c.value;u.push([_.id,_.opts.seat,_.opts.bet])}}catch(e){i=!0,a=e}finally{try{!s&&d.return&&d.return()}finally{if(i)throw a}}r([t.users,[u,n]])}}},15e3)}exports.bankerCraps=function(t,n,o){return new Promise(function(u,s){d.user.getByChannelId(t,n).then(e).then(function(e){e&&(r(e[1][4],o),u(e))}).catch(s)})}}(),function(){function e(e,r){if(!r.group_id)return Promise.reject("已经退出了");var t=f.get(r.group_id);if(!t)return Promise.reject("房间不存在");var n=t.unBankerBet(r.id,e);return n?Promise.resolve([t.users,[n.id,n.opts.seat,n.opts.bet]]):Promise.resolve()}exports.unBankerBet=function(r,t,n){return new Promise(function(o,u){d.user.getByChannelId(r,t).then(e.bind(null,n)).then(function(e){return o(e)}).catch(u)})}}(),function(){function e(e,r){if(!r.group_id)return Promise.reject("已经退出了");var t=f.get(r.group_id);if(!t)return Promise.reject("房间不存在");var n=t.bankerGoOn(r.id,e);return n?(_.debug(n),"5038"===n?Promise.resolve([t.users,[5038,t.round_no_compare,t.banker_seat]]):"5034"===n?Promise.resolve([t.users,[5034,t.round_no_compare,t.banker_seat]]):(_.debug("10--------- %s",n),Promise.resolve([t.users,[5024,t.round_no_compare[t.round_no_compare.length-1],[n.id,n.opts.seat,n.opts.bet,n.opts.score]]]))):Promise.resolve()}exports.bankerGoOn=function(r,t,n){return new Promise(function(o,u){d.user.getByChannelId(r,t).then(e.bind(null,n)).then(function(e){return o(e)}).catch(u)})}}();