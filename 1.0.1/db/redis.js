"use strict";var e=require("path"),r=process.cwd(),s=require("speedt-redis"),i=require(e.join(r,"settings")).redis,t=exports=module.exports=new s(i);process.on("exit",function(){t&&t.quit()});