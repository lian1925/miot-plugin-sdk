'use strict';var e=require('path'),r=require("fs"),t=require("metro/src/transformer"),n=require("./common").project_dir,o=t.transform,i=t.getCacheKey,s=new Map,a=r.readFileSync(e.join(n,"bin","config","modules"));a&&((JSON.parse(a.toString()||"{}").modules||[]).filter(function(e){return e&&e.length>2}).forEach(function(e){s.set(e[1],e[2])}),a=null);module.exports={getCacheKey:i,transform:function(r){var t=e.relative(n,r.filename),i=s.get(t);return i&&console.log(t),r.src=i||r.src,{ast:o(r).ast}}};