'use strict';var n=require('child_process'),e=n.spawn,o=n.execSync,r=require('path'),i=require("fs"),t=require('../../miot-sdk/package.json'),c=r.join(__dirname,"..",".."),l=t.api_level_ios,a=t.api_level_android,u=t.api_level_react,s=u+l+a;t.api_level=s;function d(n,e,o){var r=i.createReadStream(n);r.on('error',function(e){e&&console.log('read error',n),o&&o(e)});var t=i.createWriteStream(e);t.on('error',function(n){n&&console.log('write error',e),o&&o(n)}),t.on('close',function(n){o&&o(n)}),r.pipe(t)}function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(i.readdirSync(n)||[]).forEach(function(t){var c=r.join(n,t),l=i.statSync(c);l.isDirectory()?e.onDir&&!e.onDir(r.relative(o||n,c))||f(c,e,o||n):l.isFile()&&(e.onFile||e)(r.relative(o||n,c))})}module.exports={sdkconf:t,project_dir:c,API_LEVEL_IOS:l,API_LEVEL_ANDROID:a,API_LEVEL_REACT:u,API_LEVEL:s,PRELUDE:"__prelude__",PRELUDE_ID:1e4,PRELUDEID:1e4,STEP:3,MOD:function(n){return n%3},MOD_SDK:0,MOD_BASE:1,MOD_PLUG:2,exec:function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=e(n,o);i.stdout.on('data',function(n){console.log(n.toString())}),i.stderr.on('data',function(n){console.log('error\uff1a'+n)}),i.on('close',function(n){r&&r(n)})},execSync:o,copyFile:d,copyFolder:function n(e,o){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i.readdir(e,function(c,l){var a=0,u=function(){++a==l.length&&t&&t()};c?u():(l.forEach(function(t){var c=r.join(e,t),l=r.join(o,t);i.stat(c,function(e,o){o.isDirectory()?i.mkdir(l,function(e){e?console.log(e):n(c,l,u)}):d(c,l,u)})}),0===l.length&&t&&t())})},makeDirs:function n(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;i.exists(e,function(t){t?o&&o():n(r.dirname(e),function(){i.mkdir(e,o||function(){})})})},loadAllFiles:function(n){var e=[];return f(n,function(n){return e.push(n)}),e},loadFiles:f,objectWithoutProperties:function(n){for(var e={},o=arguments.length,r=Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];for(var t in n)r.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}};