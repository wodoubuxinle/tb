"use strict";function t(t){t=t||36;for(var e=[],r=1,a=0;a<t;a+=4)e[a]=e[a+1]=e[a+2]=e[a+3]=r++;for(var s=t-1,n=0;n<t;n++){var i=Math.round(Math.random()*s);r=e[i],e[i]=e[s],e[s--]=r}return e}function e(t,e){var r=[0,0,0];return e.point>t.point?e.point>10?e.gold>0&&(r[0]=-e.bet,r[1]=e.bet,r[2]=e.seat):(r[0]=-e.bet,r[1]=e.bet):t.point>10?t.gold>0&&(r[0]=e.bet,r[1]=-e.bet,r[2]=t.seat):(r[0]=e.bet,r[1]=-e.bet),r}var r=require("assert"),a=require("path"),s=process.cwd(),n=require(a.join(s,"settings")),i=require("node-uuid"),u=require("speedt-utils").utils,o=require("underscore");o.str=require("underscore.string"),o.mixin(o.str.exports());var _=require("log4js").getLogger("model.room"),c=1,l=0,d="AS_READY",f="AS_PLAYER_DICE",y="AS_DELAY_PLAYER_DICE",p="AS_WAIT_FOR_PLAYER_DICE",h="AS_BANKER_BET",v="AS_DELAY_BANKER_BET",b="AS_WAIT_FOR_BANKER_BET",m="AS_BANKER_DICE",g="AS_DELAY_BANKER_DICE",k="AS_WAIT_FOR_BANKER_DICE",A="AS_WAIT_FOR_BANKER_CONTINUE_DICE",S="AS_PLAYER_BET",U="AS_DELAY_PLAYER_BET",E="AS_WAIT_FOR_PLAYER_BET",R="AS_DELAY_DEALCARD",B="AS_COMPARE_CARD",C="AS_DELAY_COMPARE_CARD",D="AS_DELAY_COMPARE_CARD2",N="AS_DELAY_COMPARE_CARD3",T="AS_BANKER_CONTINUE_BET",O="AS_WAIT_FOR_BANKER_CONTINUE_BET",x="AS_DELAY_BANKER_CONTINUE_BET",w="AS_RESULT",I="AS_WAIT_FOR_NEXT_ROUND",L="AS_WAIT_FOR_NEXT_ROUND2",Y="AS_DELAY_NEXT_ROUND",P="AS_WAIT_FOR_BANKER_CONTINUE",q="AS_DELAY_BANKER_CONTINUE",F="AS_GAMEOVER";module.exports=function(t){return new K(t)};var K=function(t){var e=this;e.opts=t,e.id=t.id,e.name=t.name||"Room "+t.id,e._users={},e._players={},e.create_user_id=t.user_id,e.create_time=(new Date).getTime(),e.act_seat=1,e.act_status=d,e._act_direction=c,e._free_seat=[1,2,3,4],e._player_count=e._free_seat.length,e.visitor_count=t.visitor_count||0,e.fund=t.fund||1e3,e.curr_fund=0,e.round_count=t.round_count||4,e.round_num=0,e.hand_num=1,e.result=[],e.banker_seat=0,e.first_seat=1,e.compare_seat=1,e.banker_bet=0,e.chips=[2e3,3e3,5e3],e.delaytime=0,e.specialflag=0},W=K.prototype;W.setHacke=function(t){this._users[t].opts.hacker=!0},W.getCompareUser=function(t){var e=this;if(e.getUserBySeat(t).opts.checkout){var r=(e.getUsers(),!0),a=!1,s=void 0;try{for(var n,i=o.values(this._users)[Symbol.iterator]();!(r=(n=i.next()).done);r=!0){var u=n.value;if(0!==u.opts.bet[t]&&!u.opts.checkout)return u}}catch(t){a=!0,s=t}finally{try{!r&&i.return&&i.return()}finally{if(a)throw s}}e.first_seat=e.getNextSeatBySeat(t),e.first_seat==e.banker_seat&&(e.first_seat=e.getNextSeatBySeat(e.first_seat));var _=e.getUserBySeat(e.first_seat);return _.opts.checkout?null:_}var c=e.getUserBySeat(t);return c.opts.seat==e._banker_seat&&(e.first_seat=e.getNextSeatBySeat(c.opts.seat)),e.getUserBySeat(e.first_seat)},W.getNextSeatBySeat=function(t){return t-=0,this._player_count<++t?1:t},W.getUser=function(t){return this._users[t]},W.getUsers=function(){return this._users},W.getUserBySeat=function(t){return this._players[t]},W.isPlayer=function(t){return 0<t.opts.seat},W.isReady=function(t){return 0<t.opts.is_ready},W.isQuit=function(t){return 0<t.opts.is_quit},W.isStart=function(){return this._player_count<=this.getReadyCount()},W.getReadyCount=function(){var t=0,e=!0,r=!1,a=void 0;try{for(var s,n=o.values(this._players)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;this.isReady(i)&&++t}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}return t},W.release=function(){return 1>this.getUserCount()},W.getUserCount=function(){return o.size(this._users)},W.isFull=function(){return this._player_count+this.visitor_count<=this.getUserCount()},W.isValidUser=function(t,e){var r=this,a=null;if(r.act_status!==e)return[a="STATUS_ERROR",null];var s=r.getUser(t);return s?r.act_seat!==s.opts.seat?[a="SEAT_ERROR",null]:[a,s]:[a="USER_ERROR",null]},function(){function t(t){var e=this._free_seat.shift();0<e&&(this._players[e]=t,t.opts.seat=e)}W.entry=function(e){var r=this;return r.getUser(e.id)?"已在房间":r.isFull()?"房间满员":(e.opts={},t.call(r,e),r._users[e.id]=e,e.opts.entry_time=(new Date).getTime(),e.opts.score=0,e.opts.is_quit=0,e.opts.is_ready=0,e.opts.bet=[0,0,0,0,0],e.opts.gold=0,e.opts.hacker=!1,e.opts.checkout=!1,e)}}(),W.re_entry=function(t){var e=this,r=e.getUser(t.id);return r?(r.opts.re_entry_time=(new Date).getTime(),r.opts.is_quit=0,r.server_id=t.server_id,r.channel_id=t.channel_id,r):"不在群组"},W.quit=function(t){var e=this,r=e.getUser(t);if(!r)return!0;if(e.isPlayer(r)){if(e.isStart())return r.opts.quit_time=(new Date).getTime(),r.opts.is_quit=1,!1;e._free_seat.push(r.opts.seat),delete e._players[r.opts.seat]}return delete e._users[t]},W.ready=function(e){var r=this;if(r.act_status!==d)return"AS_READY";if(r.isStart())return"已经开始";var a=r.getUser(e);return a?r.isPlayer(a)?r.isReady(a)?"已经举手":(a.opts.is_ready=1,r.isStart()&&(r.act_status=p,r.act_seat=r.banker_seat||1,r._cards_36=t()),r.delaytime=10,[r.getUsers(),[r.act_status,r.delaytime,r.act_seat]]):"不能举手":"用户不存在"},function(){function t(){var t=0,e=!0,r=!1,a=void 0;try{for(var s,n=o.values(this._players)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){s.value.opts.craps&&t++}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}return t}function e(){var t=0,e=0,r=!0,a=!1,s=void 0;try{for(var n,i=o.values(this._players)[Symbol.iterator]();!(r=(n=i.next()).done);r=!0){var u=n.value,_=u.opts.craps[0]-0+u.opts.craps[1];if(11<_)return u.opts.seat;t<=_&&(t=_,e=u.opts.seat)}}catch(t){a=!0,s=t}finally{try{!r&&i.return&&i.return()}finally{if(a)throw s}}return e}W.craps4=function(r){var a,s=this,n=s.isValidUser(r,p);return null==n[0]?a=n[1]:console.log(n[0]),a.opts.craps?"craps":(a.opts.craps=[o.random(1,6),o.random(1,6)],s._player_count<=t.call(s)&&(s.banker_seat=e.call(s),s.round_num++,s.act_seat=s.banker_seat),s.act_status=y,s.delaytime=5,[s.getUsers(),[s.act_status,s.delaytime,s.act_seat,a.opts.craps]])}}(),W.bankerBet=function(t,e){var r=this,a=r.isValidUser(t,b);return null==a[0]?a[1]:console.log(a[0]),r.act_status=v,r.act_seat=r.banker_seat,r.chips.length>0&&e>0&&(r.banker_bet=r.chips.shift()),r.chips.length>0&&e>2e3&&(r.banker_bet=r.chips.shift()),r.chips.length>0&&e>3e3&&(r.banker_bet=r.chips.shift()),r.delaytime=3,[r.getUsers(),[r.act_status,r.delaytime,r.act_seat,e]]},function(){function t(t,e){var r=(e[0]+e[1]-1+t)%4;return 0===r?4:r}W.bankerDice=function(e){var r=this;if(r.act_status!==k&&r.act_status!==A)return"AS_WAIT_FOR_BANKER_DICE";var a=r.getUser(e);return a?r.banker_seat!==a.opts.seat?"还没轮到你":(a.opts.craps=[o.random(1,6),o.random(1,6)],r.first_seat=t(r.banker_seat,a.opts.craps),r.act_status=g,r.delaytime=5,[r.getUsers(),[r.act_status,r.delaytime,r.act_seat,a.opts.craps]]):"用户不存在"}}(),function(){function t(t){return t}W.unBankerBet=function(e,r){var a=this;if(a.act_status!==E)return"AS_WAIT_FOR_PLAYER_BET";var s=a.getUser(e);if(!s)return"用户不存在";var n=r[0],i=r[1];return n=t.call(a,n),s.opts.bet[i]?"该玩家已下过注":(s.opts.bet[i]=n,a.delaytime=0,[a.getUsers(),[a.act_status,a.delaytime,s.opts.seat,n,i]])}}(),function(){function t(t){var e=this,r=e._cards_8[2*(t-1)],a=e._cards_8[2*(t-1)+1];return r!==a?(r+a)%10:10+r}W.compareCard=function(r){var a=this;return e({seat:a.banker_seat,bet:a.banker_bet,gold:a.getUserBySeat(a.banker_seat).gold_count,point:t.call(a,a.banker_seat)},{seat:a.first_seat,bet:r.opts.bet[a.first_seat],gold:r.gold_count,point:t.call(a,a.first_seat)})}}(),function(){W.banker_Continue=function(t,e){var r=this,a=r.getUser(t);return a?a.opts.seat!==r.banker_seat?"不是庄家":"true"===e?(r.act_status=E,r.act_seat=r.banker_seat,r.delaytime=20,[r.getUsers(),[r.act_status,r.delaytime]]):(r.getUserBySeat(r.banker_seat).opts.checkout=!1,r.banker_seat=r.getNextSeatBySeat(r.banker_seat),r.banker_bet=0,r.round_num++,r.chips=[2e3,3e3,5e3],r.act_status=b,r.act_seat=r.banker_seat,r.delaytime=20,[r.getUsers(),[r.act_status,r.delaytime,r.act_seat]]):"用户不存在"}}(),function(){W.banker_Continue_Bet=function(t,e){var r=this,a=r.getUser(t);return a?a.opts.seat!==r.banker_seat?"不是庄家":(r.act_status=x,e-=0,r.chips.length>0&&e>2e3&&(r.banker_bet+=r.chips.shift()),r.chips.length>0&&e>3e3&&(r.banker_bet+=r.chips.shift()),r.delaytime=3,[r.getUsers(),[r.act_status,r.delaytime,r.banker_seat,r.banker_bet]]):"用户不存在"}}(),function(){W.delay_PlayerDice=function(){var t=this;return t.banker_seat>0?(t.act_status=b,t.delaytime=20,[t.getUsers(),[t.act_status,t.delaytime,t.banker_seat]]):(t.act_status=p,t.act_seat=t.getNextSeatBySeat(t.act_seat),t.delaytime=10,[t.getUsers(),[t.act_status,t.delaytime,t.act_seat]])}}(),function(){W.delay_BankerBet=function(){var t=this;return t.act_status=E,t.act_seat=t.banker_seat,t.delaytime=20,[t.getUsers(),[t.act_status,t.delaytime,t.act_seat]]}}(),function(){function t(t){var e=this,r=null,a=!0,s=!1,n=void 0;try{for(var i,u=o.values(e._users)[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){var _=i.value;if(!0===_.opts.hacker){r=_;break}}}catch(t){s=!0,n=t}finally{try{!a&&u.return&&u.return()}finally{if(s)throw n}}if(null==r)return t;var c=0,l=!0,d=!1,f=void 0;try{for(var y,p=o.values(r.opts.bet)[Symbol.iterator]();!(l=(y=p.next()).done);l=!0){var h=y.value;if(h>0){c=h;break}}}catch(t){d=!0,f=t}finally{try{!l&&p.return&&p.return()}finally{if(d)throw f}}if(c>0){for(var v=0,b=0,m=0;m<4;m++){var g=t[2*m]!==t[2*m+1]?(t[2*m]+t[2*m+1])%10:10+t[2*m];g>v&&(v=g,b=m+1)}t[2*c],t[2*c+1];t[2*c]=t[2*b],t[2*c+1]=t[2*b+1],t[2*b]=t[2*eat],t[2*b+1]=t[2*c+1]}return t}W.delay_BankerDice=function(){var e=this;return e.act_status=R,e._cards_8=e._cards_36.splice(0,8),e._card_8=t.call(e,e._card_8),e.delaytime=3,[e.getUsers(),[e.act_status,e.delaytime,e.first_seat,e._cards_8]]}}(),function(){W.delay_PlayerBet=function(){var t=this;return t.act_status=k,t.delaytime=10,[t.getUsers(),[t.act_status,t.delaytime]]}}(),function(){W.delay_DealCard=function(){var t=this;t.act_status=C,t.first_seat==t.banker_seat&&(t.first_seat=t.getNextSeatBySeat(t.first_seat)),t.delaytime=1}}(),function(){W.delay_ComepareCard=function(){var t=this,e=t.getCompareUser(t.first_seat),r=t.getUserBySeat(t.banker_seat);if(null==e){t.act_status=I,r.opts.checkout=!0;var a=!0,s=!1,n=void 0;try{for(var i,u=o.values(t._users)[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){var _=i.value;_.opts.checkout?_.gold_count+=_.opts.gold:t.result.push({id:_.id,nick:_.user_name,seat:_.opts.seat,gold:_.gold_count,score_count:_.opts.score})}}catch(t){s=!0,n=t}finally{try{!a&&u.return&&u.return()}finally{if(s)throw n}}return t.result.unshift({id:r.id,nick:r.user_name,seat:r.opts.seat,gold:r.gold_count,score_count:r.opts.score}),t.delaytime=20,[t.getUsers(),[t.act_status,t.delaytime,t.result,t.curr_fund,t.hand_num]]}var c=t.compareCard(e);if(c[0]>0){var l=0;return t.curr_fund-0<t.fund-0&&(l=Math.round(.05*c[0]),t.curr_fund+l>t.fund&&(l=t.fund-t.curr_fund),t.curr_fund+=l),t.banker_bet+=c[0]-l,r.opts.score+=c[0]-l,e.opts.score+=c[1],e.opts.checkout=!0,t.result.push({id:e.id,nick:e.user_name,seat:e.opts.seat,gold:e.gold_count,score_count:e.opts.score}),r.opts.seat===c[2]&&(r.opts.gold=-1),t.delaytime=5,[t.getUsers(),[t.act_status,t.delaytime,[t.banker_bet,c[0],r.opts.seat,e.opts.seat,t.first_seat]]]}if(t.banker_bet+c[0]>0){var l=0;return t.curr_fund-0<t.fund-0&&(l=Math.round(.05*c[1]),t.curr_fund+l>t.fund&&(l=t.fund-t.curr_fund),t.curr_fund+=l),t.banker_bet+=c[0],r.opts.score+=c[0],e.opts.score+=c[1]-l,e.opts.checkout=!0,e.opts.seat===c[2]&&(e.opts.gold=-1),t.result.push({id:e.id,nick:e.user_name,seat:e.opts.seat,gold:e.gold_count,score_count:e.opts.score}),t.delaytime=5,[t.getUsers(),[t.act_status,t.delaytime,[t.banker_bet,c[0],r.opts.seat,e.opts.seat,t.first_seat]]]}var l=0;t.curr_fund-0<t.fund-0&&(l=Math.round(.05*t.banker_bet),t.curr_fund+l>t.fund&&(l=t.fund-t.curr_fund),t.curr_fund+=l);var d=t.banker_bet;return r.opts.score-=t.banker_bet,e.opts.score+=d-l,e.opts.bet[t.first_seat]-=t.banker_bet,t.banker_bet=0,t.chips.length>0?(t.act_status=D,t.delaytime=5,[t.getUsers(),[t.act_status,t.delaytime,[t.banker_bet,-d,r.opts.seat,e.opts.seat,t.first_seat]]]):(e.opts.checkout=!0,t.act_status=N,t.result.push({id:e.id,nick:e.user_name,seat:e.opts.seat,gold:e.gold_count,score_count:e.opts.score}),t.delaytime=5,[t.getUsers(),[t.act_status,t.delaytime,[t.banker_bet,-d,r.opts.seat,e.opts.seat,t.first_seat]]])}}(),function(){W.delay_ComepareCard2=function(){var t=this;return t.act_status=O,t.delaytime=20,[t.getUsers(),[t.act_status,t.delaytime,t.banker_seat]]}}(),function(){W.delay_ComepareCard3=function(){var t=this;t.act_status=L;var e=t.getUserBySeat(t.banker_seat);e.opts.checkout=!0;var r=!0,a=!1,s=void 0;try{for(var n,i=o.values(t._users)[Symbol.iterator]();!(r=(n=i.next()).done);r=!0){var u=n.value;u.opts.checkout?u.gold_count+=u.opts.gold:t.result.push({id:u.id,nick:u.user_name,seat:u.opts.seat,gold:u.gold_count,score_count:u.opts.score})}}catch(t){a=!0,s=t}finally{try{!r&&i.return&&i.return()}finally{if(a)throw s}}return t.result.unshift({id:e.id,nick:e.user_name,seat:e.opts.seat,gold:e.gold_count,score_count:e.opts.score}),t.delaytime=20,[t.getUsers(),[t.act_status,t.delaytime,t.result,t.curr_fund,t.hand_num]]}}(),function(){W.delay_BankerContinueBet=function(){var t=this;if(t.act_status=C,0==t.banker_bet)for(;t.chips.length>0;)t.chips.shift();return t.delaytime=3,t.act_status}}(),function(){function e(t){t.hand_num++,t.first_seat=t.banker_seat,t.act_seat=t.banker_seat,t.result.length=0;var e=!0,r=!1,a=void 0;try{for(var s,n=o.values(t.getUsers())[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;i.opts.seat!=t.banker_seat&&(i.opts.bet=[0,0,0,0,0],i.opts.checkout=!1)}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}function r(t){t.hand_num=1,t.first_seat=t.banker_seat,t.act_seat=t.banker_seat,t.result.length=0;var e=!0,r=!1,a=void 0;try{for(var s,n=o.values(t.getUsers())[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;i.opts.seat!=t.banker_seat&&(i.opts.bet=[0,0,0,0,0],i.opts.checkout=!1)}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}W.delay_NextRound=function(){var a=this;switch(a.specialflag){case b:return a._cards_36=t(),r.call(a,a),a.getUserBySeat(a.banker_seat).opts.checkout=!1,a.banker_seat=a.getNextSeatBySeat(a.banker_seat),a.banker_bet=0,a.round_num++,a.chips=[2e3,3e3,5e3],a.act_status=b,a.delaytime=15,[a.getUsers(),[a.act_status,a.delaytime,a.banker_seat]];case P:return a._cards_36=t(),r.call(a,a),a.act_status=P,a.act_seat=a.banker_seat,a.delaytime=15,[a.getUsers(),[a.act_status,a.delaytime,a.act_seat]];case E:return e.call(a,a),a.act_status=E,a.act_seat=a.banker_seat,a.delaytime=20,[a.getUsers(),[a.act_status,a.delaytime,a.act_seat]]}}}(),function(){W.timeOut_PlayerDice=function(){var t=this;return t.craps4(t.getUserBySeat(t.act_seat).id)}}(),function(){W.timeOut_BankerBet=function(){var t=this,e=!0,r=!1,a=void 0;try{for(var s,n=o.values(this._players)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;if(i.opts.seat==t.banker_seat)return t.bankerBet(i.id,2e3)}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}}(),function(){W.timeOut_BankerDice=function(){var t=this,e=!0,r=!1,a=void 0;try{for(var s,n=o.values(this._players)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;if(i.opts.seat==t.banker_seat)return t.bankerDice(i.id)}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}}(),function(){W.timeOut_PlayerBet_Finish=function(){var t=this,e=[],r=!0,a=!1,s=void 0;try{for(var n,i=o.values(this._users)[Symbol.iterator]();!(r=(n=i.next()).done);r=!0){var u=n.value;u.opts.seat!=t.banker_seat&&(t.isPlayer(u)?(0==u.opts.bet[u.opts.seat]&&(u.opts.bet[u.opts.seat]=100),e.push([u.id,u.opts.bet])):e.push([u.id,u.opts.bet]))}}catch(t){a=!0,s=t}finally{try{!r&&i.return&&i.return()}finally{if(a)throw s}}return t.act_status=U,t.delaytime=3,[t.getUsers(),[t.act_status,t.delaytime,e]]}}(),function(){W.timeOut_Banker_Continue_Bet=function(){var t=this,e=!0,r=!1,a=void 0;try{for(var s,n=o.values(this._players)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;if(i.opts.seat==t.banker_seat)return t.banker_Continue_Bet(i.id,t.chips[0])}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}}(),function(){W.timeOut_Next_Round=function(t){var e=this,r=e.getReadyCount(),a=!0,s=!1,n=void 0;try{for(var i,u=o.values(e._players)[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){1==i.value.opts.is_quit&&r--}}catch(t){s=!0,n=t}finally{try{!a&&u.return&&u.return()}finally{if(s)throw n}}if(r<4&&!(e.getUserCount()<4)){e.act_status=F;var _=[],c=!0,l=!1,d=void 0;try{for(var f,y=o.values(e.getUsers())[Symbol.iterator]();!(c=(f=y.next()).done);c=!0){var p=f.value;p.opts.is_ready=0,_.push({id:p.id,nick:p.user_name,seat:p.opts.seat,gold:p.gold_count,score:p.opts.score})}}catch(t){l=!0,d=t}finally{try{!c&&y.return&&y.return()}finally{if(l)throw d}}return e.delaytime=1,[e.getUsers(),[e.act_status,e.delaytime,_]]}if(e.round_num>=4*e.round_count){e.act_status=F;var _=[],h=!0,v=!1,m=void 0;try{for(var g,k=o.values(e.getUsers())[Symbol.iterator]();!(h=(g=k.next()).done);h=!0){var A=g.value;A.opts.is_ready=0,_.push({id:A.id,nick:A.user_name,seat:A.opts.seat,gold:A.gold_count,score:A.opts.score})}}catch(t){v=!0,m=t}finally{try{!h&&k.return&&k.return()}finally{if(v)throw m}}return e.delaytime=0,[e.getUsers(),[e.act_status,e.delaytime,_]]}return e.act_status=Y,e.delaytime=1,e.specialflag=E,4!=e.hand_num&&2!=t||(e.specialflag=2==t?b:P),[e.getUsers(),[e.act_status,e.delaytime,e.round_num,e.hand_num,e.specialflag]]}}(),function(){W.timeOut_Banker_Continue=function(){var t=this,e=!0,r=!1,a=void 0;try{for(var s,n=o.values(this._players)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var i=s.value;if(i.opts.seat==t.banker_seat)return t.banker_Continue(i.id,!1)}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}}(),function(){W.gameOver=function(){var t=this,e=!0,r=!1,a=void 0;try{for(var s,n=o.values(t._users)[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){s.value.opts.is_ready=0}}catch(t){r=!0,a=t}finally{try{!e&&n.return&&n.return()}finally{if(r)throw a}}}}();