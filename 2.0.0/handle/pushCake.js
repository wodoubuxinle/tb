"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=require("path"),n=process.cwd(),i=require(r.join(n,"settings")),t=require("underscore"),u=require("emag.biz"),a=require("emag.cfg"),o=require("log4js").getLogger("handle.pushCake");!function(){function r(e,r,n){if(n){var i=[null,JSON.stringify([5002,n[1],t.now(),r.seqId])],u=!0,a=!1,d=void 0;try{for(var c,s=t.values(n[0])[Symbol.iterator]();!(u=(c=s.next()).done);u=!0){var l=c.value;l.server_id&&l.channel_id&&(i.splice(0,1,l.channel_id),e("/queue/back.send.v3."+l.server_id,{priority:9},i,function(e){if(e)return o.error("pushCake ready:",e)}))}}catch(e){a=!0,d=e}finally{try{!u&&s.return&&s.return()}finally{if(a)throw d}}}}function n(r,n,i){if("object"===(void 0===i?"undefined":e(i)))return o.error("pushCake ready:",i);if("invalid_user_id"===i)return o.debug("pushCake ready:",i);var u=[n.channelId,JSON.stringify([5002,,t.now(),n.seqId,i])];r("/queue/back.send.v3."+n.serverId,{priority:9},u,function(e){if(e)return o.error("pushCake ready:",e)})}function i(e,r,n){if(n){var i=[null,JSON.stringify([5002,n[1],t.now(),r.seqId])],u=!0,a=!1,d=void 0;try{for(var c,s=t.values(n[0])[Symbol.iterator]();!(u=(c=s.next()).done);u=!0){var l=c.value;l.server_id&&l.channel_id&&(i.splice(0,1,l.channel_id),e("/queue/back.send.v3."+l.server_id,{priority:9},i,function(e){if(e)return o.error("pushCake ready:",e)}))}}catch(e){a=!0,d=e}finally{try{!u&&s.return&&s.return()}finally{if(a)throw d}}}}exports.ready=function(e,t){try{var a=JSON.parse(t)}catch(e){return}u.pushCake.ready(a.serverId,a.channelId,i.bind(null,e,a)).then(r.bind(null,e,a)).catch(n.bind(null,e,a))}}(),function(){function r(e,r,n){if(n){var i=[null,JSON.stringify([5002,n[1],t.now(),r.seqId])],u=!0,a=!1,d=void 0;try{for(var c,s=t.values(n[0])[Symbol.iterator]();!(u=(c=s.next()).done);u=!0){var l=c.value;l.server_id&&l.channel_id&&(i.splice(0,1,l.channel_id),e("/queue/back.send.v3."+l.server_id,{priority:9},i,function(e){if(e)return o.error("pushCake craps4:",e)}))}}catch(e){a=!0,d=e}finally{try{!u&&s.return&&s.return()}finally{if(a)throw d}}}}function n(r,n,i){if("object"===(void 0===i?"undefined":e(i)))return o.error("pushCake craps4:",i);if("invalid_user_id"===i)return o.debug("pushCake craps4:",i);var u=[n.channelId,JSON.stringify([5002,,t.now(),n.seqId,i])];r("/queue/back.send.v3."+n.serverId,{priority:9},u,function(e){if(e)return o.error("pushCake craps4:",e)})}exports.craps4=function(e,i){try{var t=JSON.parse(i)}catch(e){return}u.pushCake.craps4(t.serverId,t.channelId).then(r.bind(null,e,t)).catch(n.bind(null,e,t))}}(),function(){function r(e,r,n){if(n){var i=[null,JSON.stringify([5002,n[1],t.now(),r.seqId])],u=!0,a=!1,d=void 0;try{for(var c,s=t.values(n[0])[Symbol.iterator]();!(u=(c=s.next()).done);u=!0){var l=c.value;l.server_id&&l.channel_id&&(i.splice(0,1,l.channel_id),e("/queue/back.send.v3."+l.server_id,{priority:9},i,function(e){if(e)return o.error("pushCake bankerBet:",e)}))}}catch(e){a=!0,d=e}finally{try{!u&&s.return&&s.return()}finally{if(a)throw d}}}}function n(r,n,i){if("object"===(void 0===i?"undefined":e(i)))return o.error("pushCake bankerBet:",i);if("invalid_user_id"===i)return o.debug("pushCake bankerBet:",i);var u=[n.channelId,JSON.stringify([5002,,t.now(),n.seqId,i])];r("/queue/back.send.v3."+n.serverId,{priority:9},u,function(e){if(e)return o.error("pushCake bankerBet:",e)})}exports.bankerBet=function(e,i){try{var t=JSON.parse(i)}catch(e){return}u.pushCake.bankerBet(t.serverId,t.channelId,t.data).then(r.bind(null,e,t)).catch(n.bind(null,e,t))}}(),function(){function r(e,r,n){if(n){var i=[null,JSON.stringify([5002,n[1],t.now(),r.seqId])],u=!0,a=!1,d=void 0;try{for(var c,s=t.values(n[0])[Symbol.iterator]();!(u=(c=s.next()).done);u=!0){var l=c.value;l.server_id&&l.channel_id&&(i.splice(0,1,l.channel_id),e("/queue/back.send.v3."+l.server_id,{priority:9},i,function(e){if(e)return o.error("pushCake bankerDice:",e)}))}}catch(e){a=!0,d=e}finally{try{!u&&s.return&&s.return()}finally{if(a)throw d}}}}function n(r,n,i){if("object"===(void 0===i?"undefined":e(i)))return o.error("pushCake bankerDice:",i);if("invalid_user_id"===i)return o.debug("pushCake bankerDice:",i);var u=[n.channelId,JSON.stringify([5002,,t.now(),n.seqId,i])];r("/queue/back.send.v3."+n.serverId,{priority:9},u,function(e){if(e)return o.error("pushCake bankerDice:",e)})}exports.bankerDice=function(e,i){try{var t=JSON.parse(i)}catch(e){return}u.pushCake.bankerDice(t.serverId,t.channelId).then(r.bind(null,e,t)).catch(n.bind(null,e,t))}}(),function(){function r(e,r,n){if(n){var i=[null,JSON.stringify([5002,n[1],t.now(),r.seqId])],u=!0,a=!1,d=void 0;try{for(var c,s=t.values(n[0])[Symbol.iterator]();!(u=(c=s.next()).done);u=!0){var l=c.value;l.server_id&&l.channel_id&&(i.splice(0,1,l.channel_id),e("/queue/back.send.v3."+l.server_id,{priority:9},i,function(e){if(e)return o.error("pushCake unBankerBet:",e)}))}}catch(e){a=!0,d=e}finally{try{!u&&s.return&&s.return()}finally{if(a)throw d}}}}function n(r,n,i){if("object"===(void 0===i?"undefined":e(i)))return o.error("pushCake unBankerBet:",i);if("invalid_user_id"===i)return o.debug("pushCake unBankerBet:",i);var u=[n.channelId,JSON.stringify([5002,,t.now(),n.seqId,i])];r("/queue/back.send.v3."+n.serverId,{priority:9},u,function(e){if(e)return o.error("pushCake unBankerBet:",e)})}exports.unBankerBet=function(e,i){try{var t=JSON.parse(i)}catch(e){return}try{var a=JSON.parse(t.data)}catch(e){return}u.pushCake.unBankerBet(t.serverId,t.channelId,a).then(r.bind(null,e,t)).catch(n.bind(null,e,t))}}(),function(){function r(e,r,n){if(n){var i=[null,JSON.stringify([5002,n[1],t.now(),r.seqId])],u=!0,a=!1,d=void 0;try{for(var c,s=t.values(n[0])[Symbol.iterator]();!(u=(c=s.next()).done);u=!0){var l=c.value;l.server_id&&l.channel_id&&(i.splice(0,1,l.channel_id),e("/queue/back.send.v3."+l.server_id,{priority:9},i,function(e){if(e)return o.error("pushCake bankerContinue:",e)}))}}catch(e){a=!0,d=e}finally{try{!u&&s.return&&s.return()}finally{if(a)throw d}}}}function n(r,n,i){if("object"===(void 0===i?"undefined":e(i)))return o.error("pushCake bankerContinue:",i);if("invalid_user_id"===i)return o.debug("pushCake bankerContinue:",i);var u=[n.channelId,JSON.stringify([5002,,t.now(),n.seqId,i])];r("/queue/back.send.v3."+n.serverId,{priority:9},u,function(e){if(e)return o.error("pushCake bankerContinue:",e)})}exports.bankerContinue=function(e,i){try{var t=JSON.parse(i)}catch(e){return}console.log(t),u.pushCake.bankerContinue(t.serverId,t.channelId,t.data).then(r.bind(null,e,t)).catch(n.bind(null,e,t))}}(),function(){function r(e,r,n){if(n){var i=[null,JSON.stringify([5002,n[1],t.now(),r.seqId])],u=!0,a=!1,d=void 0;try{for(var c,s=t.values(n[0])[Symbol.iterator]();!(u=(c=s.next()).done);u=!0){var l=c.value;l.server_id&&l.channel_id&&(i.splice(0,1,l.channel_id),e("/queue/back.send.v3."+l.server_id,{priority:9},i,function(e){if(e)return o.error("pushCake bankerContinueBet:",e)}))}}catch(e){a=!0,d=e}finally{try{!u&&s.return&&s.return()}finally{if(a)throw d}}}}function n(r,n,i){if("object"===(void 0===i?"undefined":e(i)))return o.error("pushCake bankerContinueBet:",i);if("invalid_user_id"===i)return o.debug("pushCake bankerContinueBet:",i);var u=[n.channelId,JSON.stringify([5002,,t.now(),n.seqId,i])];r("/queue/back.send.v3."+n.serverId,{priority:9},u,function(e){if(e)return o.error("pushCake bankerContinueBet:",e)})}exports.bankerContinueBet=function(e,i){try{var t=JSON.parse(i)}catch(e){return}console.log(i),u.pushCake.bankerContinueBet(t.serverId,t.channelId,t.data).then(r.bind(null,e,t)).catch(n.bind(null,e,t))}}();