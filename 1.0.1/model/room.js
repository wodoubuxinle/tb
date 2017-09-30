"use strict";function t(t){t=t||36;for(var e=[],r=1,a=0;a<t;a+=4)e[a]=e[a+1]=e[a+2]=e[a+3]=r++;for(var s=t-1,n=0;n<t;n++){var i=Math.round(Math.random()*s);r=e[i],e[i]=e[s],e[s--]=r}return e}function e(t,e){return e.point>t.point?e.point>10?-2*e.bet:-e.bet:e.bet}var r=require("assert"),a=require("path"),s=process.cwd(),n=require(a.join(s,"settings")),i=require("node-uuid"),u=require("speedt-utils").utils,o=require("underscore");o.str=require("underscore.string"),o.mixin(o.str.exports());var _=require("log4js").getLogger("model.room"),c=1,l=0,f="AS_READY",d="AS_PLAYER_DICE",y="AS_DELAY_PLAYER_DICE",p="AS_WAIT_FOR_PLAYER_DICE",v="AS_BANKER_BET",h="AS_DELAY_BANKER_BET",b="AS_WAIT_FOR_BANKER_BET",m="AS_BANKER_DICE",g="AS_DELAY_BANKER_DICE",k="AS_WAIT_FOR_BANKER_DICE",A="AS_WAIT_FOR_BANKER_CONTINUE_DICE",S="AS_PLAYER_BET",E="AS_DELAY_PLAYER_BET",U="AS_WAIT_FOR_PLAYER_BET",R="AS_DELAY_DEALCARD",B="AS_COMPARE_CARD",C="AS_DELAY_COMPARE_CARD",D="AS_DELAY_COMPARE_CARD2",N="AS_DELAY_COMPARE_CARD3",T="AS_BANKER_CONTINUE_BET",O="AS_WAIT_FOR_BANKER_CONTINUE_BET",x="AS_DELAY_BANKER_CONTINUE_BET",w="AS_RESULT",I="AS_WAIT_FOR_NEXT_ROUND",L="AS_WAIT_FOR_NEXT_ROUND2",Y="AS_DELAY_NEXT_ROUND",P="AS_WAIT_FOR_BANKER_CONTINUE",q="AS_DELAY_BANKER_CONTINUE",F="AS_GAMEOVER";module.exports=function(t){return new K(t)};var K=function(t){var e=this;e.opts=t,e.id=t.id,e.name=t.name||"Room "+t.id,e._users={},e._players={},e.create_user_id=t.user_id,e.create_time=(new Date).getTime(),e.act_seat=1,e.act_status=f,e._act_direction=c,e._free_seat=[1,2,3,4],e._player_count=e._free_seat.length,e.visitor_count=t.visitor_count||0,e.fund=t.fund||0,e.curr_fund=0,e.round_count=t.round_count||4,e.round_num=0,e.hand_num=1,e.result=[],e.banker_seat=0,e.first_seat=1,e.compare_seat=1,e.banker_bet=0,e.chips=[2e3,3e3,5e3],e.delaytime=0,e.specialflag=0},M=K.prototype;M.setHacke=function(t){this._users[t].opts.hacker=!0,console.log("--------开启作弊---------"),console.log(this._users[t].nickname)},M.getCompareUser=function(t){var e=this;if(e.getUserBySeat(t).opts.bet[t]>0){var r=e.getUserBySeat(t);return r.opts.seat==e._banker_seat&&(e.first_seat=e.getNextSeatBySeat(r.opts.seat)),e.getUserBySeat(e.first_seat)}var a=!0,s=!1,n=void 0;try{for(var i,u=o.values(e._users)[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){var _=i.value;if(_.opts.bet[t]>0)return _}}catch(t){s=!0,n=t}finally{try{!a&&u.return&&u.return()}finally{if(s)throw n}}e.first_seat=e.getNextSeatBySeat(t),e.first_seat==e.banker_seat&&(e.first_seat=e.getNextSeatBySeat(e.first_seat));var c=e.getUserBySeat(e.first_seat);return c.opts.bet[e.first_seat]>0?c:null},M.getNextSeatBySeat=function(t){return t-=0,this._player_count<++t?1:t},M.getUser=function(t){return this._users[t]},M.getUsers=function(){return this._users},M.getUserBySeat=function(t){return this._players[t]},M.isPlayer=function(t){return 0<t.opts.seat},M.isReady=function(t){return 0<t.opts.is_ready},M.isQuit=function(t){return 0<t.opts.is_quit},M.isStart=function(){return this._player_count<=this.getReadyCount()},M.getReadyCount=function(){var t=0,e=!0,r=!1,a=void 0;try{for(var s,n=o.values(this._players)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;this.isReady(i)&&++t}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}return t},M.release=function(){return 1>this.getUserCount()},M.getUserCount=function(){return o.size(this._users)},M.isFull=function(){return this._player_count+this.visitor_count<=this.getUserCount()},M.isValidUser=function(t,e){var r=this,a=null;if(r.act_status!==e)return[a="STATUS_ERROR",null];var s=r.getUser(t);return s?r.act_seat!==s.opts.seat?[a="SEAT_ERROR",null]:[a,s]:[a="USER_ERROR",null]},function(){function t(t){var e=this._free_seat.shift();0<e&&(this._players[e]=t,t.opts.seat=e)}M.entry=function(e){var r=this;return r.act_status!=f?"游戏已开始":r.getUser(e.id)?"已在房间":r.isFull()?"房间满员":(e.opts={},t.call(r,e),r._users[e.id]=e,e.opts.entry_time=(new Date).getTime(),e.opts.score=0,e.opts.score_curr=0,e.opts.is_quit=0,e.opts.is_ready=0,e.opts.bet=[0,0,0,0,0],e.opts.gold=0,e.opts.hacker=!1,e.opts.fund=0,e.opts.fund_count=0,e)}}(),M.re_entry=function(t){var e=this,r=e.getUser(t.id);return r?(r.opts.re_entry_time=(new Date).getTime(),r.opts.is_quit=0,r.server_id=t.server_id,r.channel_id=t.channel_id,r):"不在群组"},M.quit=function(t){var e=this,r=e.getUser(t);return!r||(e.isPlayer(r)?e.isStart()?(r.opts.quit_time=(new Date).getTime(),r.opts.is_quit=1,!1):(e._free_seat.push(r.opts.seat),delete e._players[r.opts.seat],delete e._users[t]):e.isStart()?(r.opts.quit_time=(new Date).getTime(),r.opts.is_quit=1,!1):delete e._users[t])},M.ready=function(e){var r=this;if(r.act_status!==f)return"AS_READY";if(r.isStart())return"已经开始";var a=r.getUser(e);return a?r.isPlayer(a)?r.isReady(a)?"已经举手":(a.opts.is_ready=1,r.isStart()&&(r.act_status=p,r.act_seat=r.banker_seat||1,r._cards_36=t()),r.delaytime=10,[r.getUsers(),[r.act_status,r.delaytime,r.act_seat]]):"不能举手":"用户不存在"},function(){function t(){var t=0,e=!0,r=!1,a=void 0;try{for(var s,n=o.values(this._players)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){s.value.opts.craps&&t++}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}return t}function e(){var t=0,e=0,r=!0,a=!1,s=void 0;try{for(var n,i=o.values(this._players)[Symbol.iterator]();!(r=(n=i.next()).done);r=!0){var u=n.value,_=u.opts.craps[0]-0+u.opts.craps[1];if(11<_)return u.opts.seat;t<=_&&(t=_,e=u.opts.seat)}}catch(t){a=!0,s=t}finally{try{!r&&i.return&&i.return()}finally{if(a)throw s}}return e}M.craps4=function(r){var a,s=this,n=s.isValidUser(r,p);return null==n[0]?a=n[1]:console.log(n[0]),a.opts.craps?"craps":(a.opts.craps=[o.random(1,6),o.random(1,6)],s._player_count<=t.call(s)&&(s.banker_seat=e.call(s),s.round_num++,s.act_seat=s.banker_seat),s.act_status=y,s.delaytime=5,[s.getUsers(),[s.act_status,s.delaytime,s.act_seat,a.opts.craps]])}}(),M.bankerBet=function(t,e){var r=this,a=r.isValidUser(t,b);return null==a[0]?a[1]:console.log(a[0]),r.act_seat=r.banker_seat,r.chips.length>0&&e>0&&(r.banker_bet=r.chips.shift()),r.chips.length>0&&e>2e3&&(r.banker_bet=r.chips.shift()),r.chips.length>0&&e>3e3&&(r.banker_bet=r.chips.shift()),r.act_status=h,r.delaytime=3,[r.getUsers(),[r.act_status,r.delaytime,r.act_seat,e]]},function(){function t(t,e){var r=(e[0]+e[1]-1+t)%4;return 0===r?4:r}M.bankerDice=function(e){var r=this;if(r.act_status!==k&&r.act_status!==A)return"AS_WAIT_FOR_BANKER_DICE";var a=r.getUser(e);return a?r.banker_seat!==a.opts.seat?"还没轮到你":(a.opts.craps=[o.random(1,6),o.random(1,6)],r.first_seat=t(r.banker_seat,a.opts.craps),r.act_status=g,r.delaytime=5,[r.getUsers(),[r.act_status,r.delaytime,r.act_seat,a.opts.craps]]):"用户不存在"}}(),function(){M.unBankerBet=function(t,e){var r=this;if(r.act_status!==U)return"AS_WAIT_FOR_PLAYER_BET";var a=r.getUser(t);return a?(a.opts.bet=e,[r.getUsers(),[r.act_status,r.delaytime,a.id,a.opts.seat,a.opts.bet]]):"用户不存在"}}(),function(){function t(t){var e=this,r=e._cards_8[2*(t-1)],a=e._cards_8[2*(t-1)+1];return r!==a?(r+a)%10:10+r}M.compareCard=function(r){var a=this;return e({seat:a.banker_seat,bet:a.banker_bet,point:t.call(a,a.banker_seat)},{seat:a.first_seat,bet:r.opts.bet[a.first_seat],point:t.call(a,a.first_seat)})}}(),function(){M.banker_Continue=function(t,e){var r=this,a=r.getUser(t);if(!a)return"用户不存在";if(a.opts.seat!==r.banker_seat)return"不是庄家";if("true"===e)return r.act_seat=r.banker_seat,r.act_status=U,r.delaytime=20,[r.getUsers(),[r.act_status,r.delaytime]];if(r.round_num>=4*r.round_count){r.act_status=F;var s=[],n=!0,i=!1,u=void 0;try{for(var _,c=o.values(r.getUsers())[Symbol.iterator]();!(n=(_=c.next()).done);n=!0){var l=_.value;l.opts.is_ready=0,s.push({id:l.id,nick:l.nickname,seat:l.opts.seat,score:l.opts.score,fund:l.opts.fund_count})}}catch(t){i=!0,u=t}finally{try{!n&&c.return&&c.return()}finally{if(i)throw u}}return r.delaytime=0,[r.getUsers(),[r.act_status,r.delaytime,s]]}return r.banker_seat=r.getNextSeatBySeat(r.banker_seat),r.banker_bet=0,r.round_num++,r.chips=[2e3,3e3,5e3],r.act_seat=r.banker_seat,r.act_status=b,r.delaytime=20,[r.getUsers(),[r.act_status,r.delaytime,r.act_seat]]}}(),function(){M.banker_Continue_Bet=function(t,e){var r=this,a=r.getUser(t);return a?a.opts.seat!==r.banker_seat?"不是庄家":(e-=0,r.chips.length>0&&e>2e3&&(r.banker_bet=r.chips.shift()),r.chips.length>0&&e>3e3&&(r.banker_bet=r.chips.shift()),r.act_status=x,r.delaytime=3,[r.getUsers(),[r.act_status,r.delaytime,r.banker_seat,r.banker_bet]]):"用户不存在"}}(),function(){M.saveDB=function(){var t=this,e=[],r=(new Date).getTime(),a=!0,s=!1,n=void 0;try{for(var i,u=o.values(t._users)[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){var _=i.value,c={};c.time=r,c.room_id=t.opts.id,c.room_owner=t.create_user_id,c.user_id=_.id,c.banker_seat=t.banker_seat,c.user_seat=_.opts.seat,c.user_fund=_.opts.fund,c.user_score=_.opts.score_curr,e.push(c)}}catch(t){s=!0,n=t}finally{try{!a&&u.return&&u.return()}finally{if(s)throw n}}return e}}(),function(){M.delay_PlayerDice=function(){var t=this;return t.banker_seat>0?(t.act_status=b,t.delaytime=20,[t.getUsers(),[t.act_status,t.delaytime,t.banker_seat]]):(t.act_seat=t.getNextSeatBySeat(t.act_seat),t.act_status=p,t.delaytime=10,[t.getUsers(),[t.act_status,t.delaytime,t.act_seat]])}}(),function(){M.delay_BankerBet=function(){var t=this;return t.act_seat=t.banker_seat,t.act_status=U,t.delaytime=20,[t.getUsers(),[t.act_status,t.delaytime,t.act_seat]]}}(),function(){function t(t){var e=this,r=null,a=!0,s=!1,n=void 0;try{for(var i,u=o.values(e._users)[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){var _=i.value;if(!0===_.opts.hacker){r=_;break}}}catch(t){s=!0,n=t}finally{try{!a&&u.return&&u.return()}finally{if(s)throw n}}if(null==r)return t;r.opts.hacker=!1;var c=0,l=!0,f=!1,d=void 0;try{for(var y,p=o.values(r.opts.bet)[Symbol.iterator]();!(l=(y=p.next()).done);l=!0){if(y.value>0)break;c++}}catch(t){f=!0,d=t}finally{try{!l&&p.return&&p.return()}finally{if(f)throw d}}if(r.opts.seat==e.banker_seat&&(c=r.opts.seat),c>0&&c<5){for(var v=0,h=0,b=0;b<4;b++){var m=t[2*b]!==t[2*b+1]?(t[2*b]+t[2*b+1])%10:10+t[2*b];m>v&&(v=m,h=b+1)}var g=t[2*(c-1)],k=t[2*(c-1)+1];t[2*(c-1)]=t[2*(h-1)],t[2*(c-1)+1]=t[2*(h-1)+1],t[2*(h-1)]=g,t[2*(h-1)+1]=k}return t}M.delay_BankerDice=function(){var e=this;return e._cards_8=e._cards_36.splice(0,8),e._cards_8=t.call(e,e._cards_8),e.act_status=R,e.delaytime=3,[e.getUsers(),[e.act_status,e.delaytime,e.first_seat,e._cards_8]]}}(),function(){M.delay_PlayerBet=function(){var t=this;return t.act_status=k,t.delaytime=10,[t.getUsers(),[t.act_status,t.delaytime]]}}(),function(){M.delay_DealCard=function(){var t=this;t.act_status=C,t.delaytime=1,t.first_seat==t.banker_seat&&(t.first_seat=t.getNextSeatBySeat(t.first_seat))}}(),function(){M.delay_ComepareCard=function(){var t=this,e=t.getCompareUser(t.first_seat),r=t.getUserBySeat(t.banker_seat);if(null==e||t.banker_bet<=0){t.banker_bet<=0?t.act_status=L:t.act_status=I;var a=!0,s=!1,n=void 0;try{for(var i,u=o.values(t._users)[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){var _=i.value;t.result.push({id:_.id,nick:_.nickname,seat:_.opts.seat,score_count:_.opts.score,fund:_.opts.fund})}}catch(t){s=!0,n=t}finally{try{!a&&u.return&&u.return()}finally{if(s)throw n}}return t.delaytime=20,[t.getUsers(),[t.act_status,t.delaytime,t.result,t.curr_fund,t.hand_num]]}var c=t.compareCard(e);if(c>0){var l=0;return t.curr_fund-0<t.fund-0&&(l=Math.round(.05*c),t.curr_fund+l>t.fund&&(l=t.fund-t.curr_fund),t.curr_fund+=l),t.banker_bet+=c-l,r.opts.score+=c-l,r.opts.score_curr=c-l,r.opts.fund+=l,r.opts.fund_count+=l,e.opts.score-=c,e.opts.score_curr-=c,e.opts.bet[t.first_seat]=0,t.delaytime=5,[t.getUsers(),[t.act_status,t.delaytime,[t.banker_bet,c,r.opts.seat,e.opts.seat,t.first_seat,e.id]]]}if(t.banker_bet+c>0){var l=0;return t.curr_fund-0<t.fund-0&&(l=Math.round(.05*-c),t.curr_fund+l>t.fund&&(l=t.fund-t.curr_fund),t.curr_fund+=l),t.banker_bet+=c,r.opts.score+=c,r.opts.score_curr+=c,e.opts.score-=c+l,e.opts.score_curr-=c+l,e.opts.fund+=l,e.opts.fund_count+=l,e.opts.bet[t.first_seat]=0,t.delaytime=5,[t.getUsers(),[t.act_status,t.delaytime,[t.banker_bet,c,r.opts.seat,e.opts.seat,t.first_seat,e.id]]]}var l=0;t.curr_fund-0<t.fund-0&&(l=Math.round(.05*t.banker_bet),t.curr_fund+l>t.fund&&(l=t.fund-t.curr_fund),t.curr_fund+=l);var f=-t.banker_bet;return r.opts.score+=f,r.opts.score_curr+=f,e.opts.score-=f+l,e.opts.score_curr-=f+l,e.opts.fund+=l,e.opts.fund_count+=l,c==2*-e.opts.bet[t.first_seat]?e.opts.bet[t.first_seat]=Math.abs(c-f)/2:e.opts.bet[t.first_seat]+=f,t.banker_bet=0,t.chips.length>0?(t.act_status=D,t.delaytime=5,[t.getUsers(),[t.act_status,t.delaytime,[t.banker_bet,f,r.opts.seat,e.opts.seat,t.first_seat,e.id]]]):(t.act_status=N,t.delaytime=5,[t.getUsers(),[t.act_status,t.delaytime,[t.banker_bet,f,r.opts.seat,e.opts.seat,t.first_seat,e.id]]])}}(),function(){M.delay_ComepareCard2=function(){var t=this;return t.act_status=O,t.delaytime=20,[t.getUsers(),[t.act_status,t.delaytime,t.banker_seat]]}}(),function(){M.delay_ComepareCard3=function(){var t=this;t.act_status=L;var e=(t.getUserBySeat(t.banker_seat),!0),r=!1,a=void 0;try{for(var s,n=o.values(t._users)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;t.result.push({id:i.id,nick:i.nickname,seat:i.opts.seat,score_count:i.opts.score,fund:i.opts.fund})}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}return t.delaytime=20,[t.getUsers(),[t.act_status,t.delaytime,t.result,t.curr_fund,t.hand_num]]}}(),function(){M.delay_BankerContinueBet=function(){var t=this;if(t.act_status=C,0==t.banker_bet)for(;t.chips.length>0;)t.chips.shift();return t.delaytime=3,t.act_status}}(),function(){function e(t){t.hand_num++,t.first_seat=t.banker_seat,t.act_seat=t.banker_seat,t.result.length=0;var e=!0,r=!1,a=void 0;try{for(var s,n=o.values(t.getUsers())[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;i.opts.fund=0,i.opts.score_curr=0,i.opts.seat!=t.banker_seat&&(i.opts.bet=[0,0,0,0,0])}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}function r(t){t.hand_num=1,t.first_seat=t.banker_seat,t.act_seat=t.banker_seat,t.result.length=0;var e=!0,r=!1,a=void 0;try{for(var s,n=o.values(t.getUsers())[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;i.opts.fund=0,i.opts.score_curr=0,i.opts.seat!=t.banker_seat&&(i.opts.bet=[0,0,0,0,0])}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}M.delay_NextRound=function(){var a=this;switch(a.specialflag){case b:return a._cards_36=t(),r.call(a,a),a.banker_seat=a.getNextSeatBySeat(a.banker_seat),a.banker_bet=0,a.round_num++,a.chips=[2e3,3e3,5e3],a.act_status=b,a.delaytime=15,[a.getUsers(),[a.act_status,a.delaytime,a.banker_seat]];case P:return a._cards_36=t(),r.call(a,a),a.act_status=P,a.act_seat=a.banker_seat,a.delaytime=20,[a.getUsers(),[a.act_status,a.delaytime,a.act_seat]];case U:return e.call(a,a),a.act_status=U,a.act_seat=a.banker_seat,a.delaytime=20,[a.getUsers(),[a.act_status,a.delaytime,a.act_seat]]}}}(),function(){M.timeOut_PlayerDice=function(){var t=this;return t.craps4(t.getUserBySeat(t.act_seat).id)}}(),function(){M.timeOut_BankerBet=function(){var t=this,e=!0,r=!1,a=void 0;try{for(var s,n=o.values(this._players)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;if(i.opts.seat==t.banker_seat)return t.bankerBet(i.id,2e3)}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}}(),function(){M.timeOut_BankerDice=function(){var t=this,e=!0,r=!1,a=void 0;try{for(var s,n=o.values(this._players)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;if(i.opts.seat==t.banker_seat)return t.bankerDice(i.id)}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}}(),function(){M.timeOut_PlayerBet_Finish=function(){var t=this,e=[],r=!0,a=!1,s=void 0;try{for(var n,i=o.values(this._users)[Symbol.iterator]();!(r=(n=i.next()).done);r=!0){var u=n.value;if(u.opts.seat!=t.banker_seat){var _=200;1==t.chips.length&&(_=300),0==t.chips.length&&(_=500),t.isPlayer(u)?(0==u.opts.bet[u.opts.seat]&&(u.opts.bet[u.opts.seat]=_),e.push([u.id,u.opts.bet])):e.push([u.id,u.opts.bet])}}}catch(t){a=!0,s=t}finally{try{!r&&i.return&&i.return()}finally{if(a)throw s}}return t.act_status=E,t.delaytime=3,[t.getUsers(),[t.act_status,t.delaytime,e]]}}(),function(){M.timeOut_Banker_Continue_Bet=function(){var t=this,e=!0,r=!1,a=void 0;try{for(var s,n=o.values(this._players)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;if(i.opts.seat==t.banker_seat)return t.banker_Continue_Bet(i.id,0)}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}}(),function(){M.timeOut_Next_Round=function(t){var e=this,r=e.getReadyCount(),a=!0,s=!1,n=void 0;try{for(var i,u=o.values(e._players)[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){1==i.value.opts.is_quit&&r--}}catch(t){s=!0,n=t}finally{try{!a&&u.return&&u.return()}finally{if(s)throw n}}if(r<4){e.act_status=F;var _=[],c=!0,l=!1,f=void 0;try{for(var d,y=o.values(e.getUsers())[Symbol.iterator]();!(c=(d=y.next()).done);c=!0){var p=d.value;p.opts.is_ready=0,_.push({id:p.id,nick:p.nickname,seat:p.opts.seat,score:p.opts.score,fund:p.opts.fund_count})}}catch(t){l=!0,f=t}finally{try{!c&&y.return&&y.return()}finally{if(l)throw f}}return e.delaytime=1,[e.getUsers(),[e.act_status,e.delaytime,_]]}if(e.act_status=Y,e.delaytime=1,e.specialflag=U,4==e.hand_num||2==t)if(2==t){if(e.round_num>=4*e.round_count){e.act_status=F;var _=[],v=!0,h=!1,m=void 0;try{for(var g,k=o.values(e.getUsers())[Symbol.iterator]();!(v=(g=k.next()).done);v=!0){var A=g.value;A.opts.is_ready=0,_.push({id:A.id,nick:A.nickname,seat:A.opts.seat,score:A.opts.score,fund:A.opts.fund_count})}}catch(t){h=!0,m=t}finally{try{!v&&k.return&&k.return()}finally{if(h)throw m}}return e.delaytime=0,[e.getUsers(),[e.act_status,e.delaytime,_]]}e.specialflag=b}else e.specialflag=P;return[e.getUsers(),[e.act_status,e.delaytime,e.round_num,e.hand_num,e.specialflag]]}}(),function(){M.timeOut_Banker_Continue=function(){var t=this,e=!0,r=!1,a=void 0;try{for(var s,n=o.values(this._players)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;if(i.opts.seat==t.banker_seat)return t.banker_Continue(i.id,!1)}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}}(),function(){M.gameOver=function(){var t=this;t.act_status="QUIT";var e=!0,r=!1,a=void 0;try{for(var s,n=o.values(t._users)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){s.value.opts.is_ready=0}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}}();