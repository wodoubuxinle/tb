"use strict";var r=require("path"),e=process.cwd(),n=require(r.join(e,"settings")),i=require("emag.biz"),t=require("emag.cfg"),a=require("log4js").getLogger("handle.pushCake"),u=require("underscore"),s=require("emag.model").roomPool;!function(){function r(r,e,n){if(n){var i=[];i.push(null),i.push(JSON.stringify([3012,e.seqId,u.now(),n[1]]));var t=!0,s=!1,o=void 0;try{for(var c,l=u.values(n[0])[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var d=c.value;d.server_id&&d.channel_id&&(i.splice(0,1,d.channel_id),r("/queue/back.send.v3."+d.server_id,{priority:9},i,function(r,e){if(r)return a.error("channel ready:",r)}))}}catch(r){s=!0,o=r}finally{try{!t&&l.return&&l.return()}finally{if(s)throw o}}}}function e(r,e,n){if("string"!=typeof n)return a.error("channel ready:",n);var i=[];i.push(e.channelId),i.push(JSON.stringify([3012,e.seqId,u.now(),,n])),r("/queue/back.send.v3."+e.serverId,{priority:9},i,function(r,e){if(r)return a.error("channel ready:",r)})}function n(r,e,n){if(n){var i=[];i.push(null),i.push(JSON.stringify([n[2],e.seqId,u.now(),n[1]]));var t=!0,s=!1,o=void 0;try{for(var c,l=u.values(n[0])[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var d=c.value;d.server_id&&d.channel_id&&(i.splice(0,1,d.channel_id),r("/queue/back.send.v3."+d.server_id,{priority:9},i,function(r,e){if(r)return a.error("channel ready "+n[2]+":",r)}))}}catch(r){s=!0,o=r}finally{try{!t&&l.return&&l.return()}finally{if(s)throw o}}}}exports.ready=function(t,s){if(!u.isString(s.body))return a.error("channel ready empty");try{var o=JSON.parse(s.body)}catch(r){return}i.pushCake.ready(o.serverId,o.channelId,n.bind(null,t,o)).then(r.bind(null,t,o)).catch(e.bind(null,t,o))}}(),function(){function r(r,e,n){if(n){var i=[];i.push(null),i.push(JSON.stringify([5014,e.seqId,u.now(),n[1]]));var t=!0,s=!1,o=void 0;try{for(var c,l=u.values(n[0])[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var d=c.value;d.server_id&&d.channel_id&&(i.splice(0,1,d.channel_id),r("/queue/back.send.v3."+d.server_id,{priority:9},i,function(r,e){if(r)return a.error("pushCake craps4:",r)}))}}catch(r){s=!0,o=r}finally{try{!t&&l.return&&l.return()}finally{if(s)throw o}}}}function e(r,e,n){if("string"!=typeof n)return a.error("pushCake craps4:",n);var i=[];i.push(e.channelId),i.push(JSON.stringify([5014,e.seqId,u.now(),,n])),r("/queue/back.send.v3."+e.serverId,{priority:9},i,function(r,e){if(r)return a.error("pushCake craps4:",r)})}exports.craps4=function(n,t){if(!u.isString(t.body))return a.error("pushCake craps4 empty");try{var s=JSON.parse(t.body)}catch(r){return}i.pushCake.craps4(s.serverId,s.channelId).then(r.bind(null,n,s)).catch(e.bind(null,n,s))}}(),function(){function r(r,e,n){if(n){var i=[];i.push(null),i.push(JSON.stringify([5018,e.seqId,u.now(),n[1]]));var t=!0,s=!1,o=void 0;try{for(var c,l=u.values(n[0])[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var d=c.value;d.server_id&&d.channel_id&&(i.splice(0,1,d.channel_id),r("/queue/back.send.v3."+d.server_id,{priority:9},i,function(r,e){if(r)return a.error("pushCake bankerBet:",r)}))}}catch(r){s=!0,o=r}finally{try{!t&&l.return&&l.return()}finally{if(s)throw o}}}}function e(r,e,n){if("string"!=typeof n)return a.error("pushCake bankerBet:",n);var i=[];i.push(e.channelId),i.push(JSON.stringify([5018,e.seqId,u.now(),,n])),r("/queue/back.send.v3."+e.serverId,{priority:9},i,function(r,e){if(r)return a.error("pushCake bankerBet:",r)})}exports.bankerBet=function(n,t){if(!u.isString(t.body))return a.error("pushCake bankerBet empty");try{var s=JSON.parse(t.body)}catch(r){return}i.pushCake.bankerBet(s.serverId,s.channelId,s.data).then(r.bind(null,n,s)).catch(e.bind(null,n,s))}}(),function(){function r(r,e,n){if(n){var i=[];i.push(null),i.push(JSON.stringify([5016,e.seqId,u.now(),n[1]]));var t=!0,s=!1,o=void 0;try{for(var c,l=u.values(n[0])[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var d=c.value;d.server_id&&d.channel_id&&(i.splice(0,1,d.channel_id),r("/queue/back.send.v3."+d.server_id,{priority:9},i,function(r,e){if(r)return a.error("pushCake bankerCraps:",r)}))}}catch(r){s=!0,o=r}finally{try{!t&&l.return&&l.return()}finally{if(s)throw o}}}}function e(r,e,n){if("string"!=typeof n)return a.error("pushCake bankerCraps:",n);var i=[];i.push(e.channelId),i.push(JSON.stringify([5016,e.seqId,u.now(),,n])),r("/queue/back.send.v3."+e.serverId,{priority:9},i,function(r,e){if(r)return a.error("pushCake bankerCraps:",r)})}function n(r,e,n){if(n){var i=[];i.push(null),i.push(JSON.stringify([5022,e.seqId,u.now(),n[1]]));var t=!0,s=!1,o=void 0;try{for(var c,l=u.values(n[0])[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var d=c.value;d.server_id&&d.channel_id&&(i.splice(0,1,d.channel_id),r("/queue/back.send.v3."+d.server_id,{priority:9},i,function(r,e){if(r)return a.error("pushCake unBankerBetClosure:",r)}))}}catch(r){s=!0,o=r}finally{try{!t&&l.return&&l.return()}finally{if(s)throw o}}}}exports.bankerCraps=function(t,s){if(!u.isString(s.body))return a.error("pushCake bankerCraps empty");try{var o=JSON.parse(s.body)}catch(r){return}i.pushCake.bankerCraps(o.serverId,o.channelId,n.bind(null,t,o)).then(r.bind(null,t,o)).catch(e.bind(null,t,o))}}(),function(){function r(r,e,n){if(n){var i=[];i.push(null),i.push(JSON.stringify([5020,e.seqId,u.now(),n[1]]));var t=!0,s=!1,o=void 0;try{for(var c,l=u.values(n[0])[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var d=c.value;d.server_id&&d.channel_id&&(i.splice(0,1,d.channel_id),r("/queue/back.send.v3."+d.server_id,{priority:9},i,function(r,e){if(r)return a.error("pushCake unBankerBet:",r)}))}}catch(r){s=!0,o=r}finally{try{!t&&l.return&&l.return()}finally{if(s)throw o}}}}function e(r,e,n){if("string"!=typeof n)return a.error("pushCake unBankerBet:",n);var i=[];i.push(e.channelId),i.push(JSON.stringify([5020,e.seqId,u.now(),,n])),r("/queue/back.send.v3."+e.serverId,{priority:9},i,function(r,e){if(r)return a.error("pushCake unBankerBet:",r)})}exports.unBankerBet=function(n,t){if(!u.isString(t.body))return a.error("pushCake unBankerBet empty");try{var s=JSON.parse(t.body)}catch(r){return}i.pushCake.unBankerBet(s.serverId,s.channelId,s.data).then(r.bind(null,n,s)).catch(e.bind(null,n,s))}}(),function(){function r(r,e,n){if(n){var i=[];i.push(null),i.push(JSON.stringify([5072,e.seqId,u.now(),n[1]]));var t=!0,s=!1,o=void 0;try{for(var c,l=u.values(n[0])[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var d=c.value;d.server_id&&d.channel_id&&(i.splice(0,1,d.channel_id),r("/queue/back.send.v3."+d.server_id,{priority:9},i,function(r,e){if(r)return a.error("pushCake bankerGoOn:",r)}))}}catch(r){s=!0,o=r}finally{try{!t&&l.return&&l.return()}finally{if(s)throw o}}}}function e(r,e,n){if("string"!=typeof n)return a.error("pushCake bankerGoOn:",n);var i=[];i.push(e.channelId),i.push(JSON.stringify([5072,e.seqId,u.now(),,n])),r("/queue/back.send.v3."+e.serverId,{priority:9},i,function(r,e){if(r)return a.error("pushCake bankerGoOn:",r)})}exports.bankerGoOn=function(n,t){if(!u.isString(t.body))return a.error("pushCake bankerGoOn empty");try{var s=JSON.parse(t.body)}catch(r){return}i.pushCake.bankerGoOn(s.serverId,s.channelId,s.data).then(r.bind(null,n,s)).catch(e.bind(null,n,s))}}();