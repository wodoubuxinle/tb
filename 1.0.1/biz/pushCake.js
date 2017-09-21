"use strict";var e=require("path"),r=process.cwd(),t=require(e.join(r,"settings")),n=require("node-uuid"),i=require("underscore"),u=require("speedt-utils").md5,o=require("speedt-utils").utils,a=require("emag.db").mysql,c=require("emag.db").redis,s=require("emag.cfg"),_=require("emag.biz"),d=require("emag.model").roomPool,f=require("log4js").getLogger("biz.pushCake");!function(){exports.nasha=function(e){return new Promise(function(r,t){f.debug(e),r()})}}(),function(){function e(e,t){if(!t.group_id)return Promise.reject("不在群组");var n=d.get(t.group_id);if(!n)return Promise.reject("房间不存在");var i=n.ready(t.id);return"string"==typeof i?Promise.reject(i):(n.isStart()&&_.user.deduct(n.create_user_id,function(t){t||r(n.id,e)}),Promise.resolve(i))}function r(e,r){!function t(n){n=1e3*(n||10);var i=setTimeout(function(){clearTimeout(i);var n=d.get(e);if(n){if(n.delaytime--<=0)switch(n.act_status){case"AS_WAIT_FOR_PLAYER_DICE":r(n.timeOut_PlayerDice()),10;break;case"AS_DELAY_PLAYER_DICE":r(n.delay_PlayerDice()),5;break;case"AS_WAIT_FOR_BANKER_BET":r(n.timeOut_BankerBet()),20;break;case"AS_DELAY_BANKER_BET":r(n.delay_BankerBet()),3;break;case"AS_WAIT_FOR_BANKER_CONTINUE_DICE":case"AS_WAIT_FOR_BANKER_DICE":r(n.timeOut_BankerDice()),10;break;case"AS_DELAY_BANKER_DICE":r(n.delay_BankerDice()),5;break;case"AS_WAIT_FOR_PLAYER_BET":r(n.timeOut_PlayerBet_Finish()),20;break;case"AS_DELAY_PLAYER_BET":r(n.delay_PlayerBet()),3;break;case"AS_DELAY_DEALCARD":r(n.delay_DealCard()),1;break;case"AS_DELAY_COMPARE_CARD":r(n.delay_ComepareCard()),5;break;case"AS_DELAY_COMPARE_CARD2":r(n.delay_ComepareCard2()),5;break;case"AS_DELAY_COMPARE_CARD3":r(n.delay_ComepareCard3()),5;break;case"AS_WAIT_FOR_BANKER_CONTINUE_BET":r(n.timeOut_Banker_Continue_Bet()),20;break;case"AS_DELAY_BANKER_CONTINUE_BET":r(n.delay_BankerContinueBet()),3;break;case"AS_WAIT_FOR_NEXT_ROUND":r(n.timeOut_Next_Round(1)),20;break;case"AS_WAIT_FOR_NEXT_ROUND2":r(n.timeOut_Next_Round(2)),20;break;case"AS_WAIT_FOR_BANKER_CONTINUE":r(n.timeOut_Banker_Continue()),20;break;case"AS_DELAY_NEXT_ROUND":r(n.delay_NextRound()),1;break;case"AS_GAMEOVER":r(n.gameOver())}t(1)}},n)}()}exports.ready=function(r,t,n){return new Promise(function(i,u){_.user.getByChannelId(r,t).then(e.bind(null,n)).then(function(e){return i(e)}).catch(u)})}}(),function(){function e(e){if(!e.group_id)return Promise.reject("已经退出了");var r=d.get(e.group_id);if(!r)return Promise.reject("房间不存在");var t=r.craps4(e.id);return"string"==typeof t?Promise.reject(t):Promise.resolve(t)}exports.craps4=function(r,t,n){return new Promise(function(n,i){_.user.getByChannelId(r,t).then(e).then(function(e){return n(e)}).catch(i)})}}(),function(){function e(e,r){if(!r.group_id)return Promise.reject("已经退出了");var t=d.get(r.group_id);if(!t)return Promise.reject("房间不存在");var n=t.bankerBet(r.id,e);return"string"==typeof n?Promise.reject(n):Promise.resolve(n)}exports.bankerBet=function(r,t,n){return new Promise(function(i,u){_.user.getByChannelId(r,t).then(e.bind(null,n)).then(function(e){return i(e)}).catch(u)})}}(),function(){function e(e){if(!e.group_id)return Promise.reject("已经退出了");var r=d.get(e.group_id);if(!r)return Promise.reject("房间不存在");var t=r.bankerDice(e.id);return"string"==typeof t?Promise.reject(t):Promise.resolve(t)}exports.bankerDice=function(r,t){return new Promise(function(n,i){_.user.getByChannelId(r,t).then(e).then(function(e){return n(e)}).catch(i)})}}(),function(){function e(e,r){if(!r.group_id)return Promise.reject("已经退出了");var t=d.get(r.group_id);if(!t)return Promise.reject("房间不存在");var n=t.unBankerBet(r.id,e);return"string"==typeof n?Promise.reject(n):Promise.resolve(n)}exports.unBankerBet=function(r,t,n){return new Promise(function(i,u){_.user.getByChannelId(r,t).then(e.bind(null,n)).then(function(e){return i(e)}).catch(u)})}}(),function(){function e(e,r){if(!r.group_id)return Promise.reject("已经退出了");var t=d.get(r.group_id);if(!t)return Promise.reject("房间不存在");var n=t.banker_Continue(r.id,e);return console.log(n),console.log("-----"),"string"==typeof n?Promise.reject(n):Promise.resolve(n)}exports.bankerContinue=function(r,t,n){return new Promise(function(i,u){_.user.getByChannelId(r,t).then(e.bind(null,n)).then(function(e){return i(e)}).catch(u)})}}(),function(){function e(e,r){if(!r.group_id)return Promise.reject("已经退出了");var t=d.get(r.group_id);if(!t)return Promise.reject("房间不存在");var n=t.banker_Continue_Bet(r.id,e);return"string"==typeof n?Promise.reject(n):Promise.resolve(n)}exports.bankerContinueBet=function(r,t,n){return new Promise(function(i,u){_.user.getByChannelId(r,t).then(e.bind(null,n)).then(function(e){return i(e)}).catch(u)})}}();