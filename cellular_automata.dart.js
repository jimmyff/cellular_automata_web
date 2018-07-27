{}(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
var y=function(){function t(){};return typeof t.name=='string'}()
function setFunctionNamesIfNecessary(a){if(y)return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$is"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.ie(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+x+++"(x) {"+"if (c === null) c = "+"H.eJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+x+++"() {"+"if (c === null) c = "+"H.eJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t
return d?function(){if(t===void 0)t=H.eJ(this,a,b,c,true,[],e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var w=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q=q+w
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function setOrUpdateInterceptorsByTag(a){var t=u.interceptorsByTag
if(!t){u.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=u.leafTags
if(!t){u.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=u.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}function initializeDeferredHunk(a){w=u.types.length
a(inherit,mixin,lazy,makeConstList,convertToFastObject,installTearOff,setFunctionNamesIfNecessary,updateHolder,updateTypes,setOrUpdateInterceptorsByTag,setOrUpdateLeafTags,u,v,$)}function getGlobalFromName(a){for(var t=0;t<v.length;t++){if(v[t]==C)continue
if(v[t][a])return v[t][a]}}var C={},H={ew:function ew(a){this.a=a},
hk:function(a,b,c,d){if(!!a.$isr)return new H.bR(a,b,[c,d])
return new H.b0(a,b,[c,d])},
eu:function(){return new P.E("No element")},
hf:function(){return new P.E("Too few elements")},
r:function r(){},
aq:function aq(){},
aZ:function aZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
b0:function b0(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(a,b,c){this.a=a
this.b=b
this.$ti=c},
co:function co(a,b){this.a=null
this.b=a
this.c=b},
as:function as(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(a,b){this.a=a
this.b=b},
aQ:function aQ(){},
d3:function d3(){},
bd:function bd(){},
hZ:function(a){return u.types[a]},
fT:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.q(a).$isey},
b:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.by(a)
if(typeof t!=="string")throw H.e(H.a1(a))
return t},
hr:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.aT(t)
s=t[0]
r=t[1]
return new H.cL(a,t,(s&2)===2,s>>2,r>>1,(r&1)===1,t[2])},
a9:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
hp:function(a,b){var t,s,r,q,p,o
if(typeof a!=="string")H.C(H.a1(a))
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.R(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.d.aT(q,o)|32)>r)return}return parseInt(a,b)},
b5:function(a){var t,s,r,q,p,o,n,m,l
t=J.q(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.Q||!!J.q(a).$isaa){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.d.aT(q,0)===36)q=C.d.ap(q,1)
l=H.fU(H.ai(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
w:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ho:function(a){return a.b?H.w(a).getUTCFullYear()+0:H.w(a).getFullYear()+0},
hn:function(a){return a.b?H.w(a).getUTCMonth()+1:H.w(a).getMonth()+1},
hl:function(a){return a.b?H.w(a).getUTCDate()+0:H.w(a).getDate()+0},
ff:function(a){return a.b?H.w(a).getUTCHours()+0:H.w(a).getHours()+0},
fg:function(a){return a.b?H.w(a).getUTCMinutes()+0:H.w(a).getMinutes()+0},
fh:function(a){return a.b?H.w(a).getUTCSeconds()+0:H.w(a).getSeconds()+0},
hm:function(a){return a.b?H.w(a).getUTCMilliseconds()+0:H.w(a).getMilliseconds()+0},
bv:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.M(!0,b,"index",null)
t=J.ak(a)
if(b<0||b>=t)return P.f7(b,a,"index",null,t)
return P.cK(b,"index",null)},
a1:function(a){return new P.M(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.av()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.h_})
t.name=""}else t.toString=H.h_
return t},
h_:function(){return J.by(this.dartException)},
C:function(a){throw H.e(a)},
id:function(a){throw H.e(P.aM(a))},
L:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.n([],[P.l])
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.d_(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
d0:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
fr:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
fe:function(a,b){return new H.cI(a,b==null?null:b.method)},
ez:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.c6(a,s,t?null:b.receiver)},
H:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.em(a)
if(a==null)return
if(a instanceof H.ao)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.b5(r,16)&8191)===10)switch(q){case 438:return t.$1(H.ez(H.b(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.fe(H.b(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$fl()
o=$.$get$fm()
n=$.$get$fn()
m=$.$get$fo()
l=$.$get$fs()
k=$.$get$ft()
j=$.$get$fq()
$.$get$fp()
i=$.$get$fv()
h=$.$get$fu()
g=p.w(s)
if(g!=null)return t.$1(H.ez(s,g))
else{g=o.w(s)
if(g!=null){g.method="call"
return t.$1(H.ez(s,g))}else{g=n.w(s)
if(g==null){g=m.w(s)
if(g==null){g=l.w(s)
if(g==null){g=k.w(s)
if(g==null){g=j.w(s)
if(g==null){g=m.w(s)
if(g==null){g=i.w(s)
if(g==null){g=h.w(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.fe(s,g))}}return t.$1(new H.d2(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.b9()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.M(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.b9()
return a},
B:function(a){var t
if(a instanceof H.ao)return a.b
if(a==null)return new H.bn(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.bn(a)},
fN:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.p(0,a[s],a[r])}return b},
i4:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.es("Unsupported number of arguments for wrapped closure"))},
aH:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.i4)
a.$identity=t
return t},
h7:function(a,b,c,d,e,f,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.q(d).$isz){t.$reflectionInfo=d
r=H.hr(t).r}else r=d
q=e?Object.create(new H.cU().constructor.prototype):Object.create(new H.al(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(e)p=function(){this.$initialize()}
else{o=$.J
$.J=o+1
o=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")
p=o}q.constructor=p
p.prototype=q
if(!e){n=f.length==1&&!0
m=H.eX(a,t,n)
m.$reflectionInfo=d}else{q.$static_name=a0
m=t
n=!1}if(typeof r=="number")l=function(a1,a2){return function(){return a1(a2)}}(H.hZ,r)
else if(typeof r=="function")if(e)l=r
else{k=n?H.eT:H.er
l=function(a1,a2){return function(){return a1.apply({$receiver:a2(this)},arguments)}}(r,k)}else throw H.e("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=m,i=1;i<o;++i){h=b[i]
g=h.$callName
if(g!=null){h=e?h:H.eX(a,h,n)
q[g]=h}if(i===c){h.$reflectionInfo=d
j=h}}q["call*"]=j
q.$R=t.$R
q.$D=t.$D
return p},
h4:function(a,b,c,d){var t=H.er
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
eX:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.h6(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.h4(s,!q,t,b)
if(s===0){q=$.J
$.J=q+1
o="self"+H.b(q)
q="return function(){var "+o+" = this."
p=$.am
if(p==null){p=H.bF("self")
$.am=p}return new Function(q+H.b(p)+";return "+o+"."+H.b(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.J
$.J=q+1
n+=H.b(q)
q="return function("+n+"){return this."
p=$.am
if(p==null){p=H.bF("self")
$.am=p}return new Function(q+H.b(p)+"."+H.b(t)+"("+n+");}")()},
h5:function(a,b,c,d){var t,s
t=H.er
s=H.eT
switch(b?-1:a){case 0:throw H.e(H.ht("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
h6:function(a,b){var t,s,r,q,p,o,n,m
t=$.am
if(t==null){t=H.bF("self")
$.am=t}s=$.eS
if(s==null){s=H.bF("receiver")
$.eS=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.h5(q,!o,r,b)
if(q===1){t="return function(){return this."+H.b(t)+"."+H.b(r)+"(this."+H.b(s)+");"
s=$.J
$.J=s+1
return new Function(t+H.b(s)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
t="return function("+m+"){return this."+H.b(t)+"."+H.b(r)+"(this."+H.b(s)+", "+m+");"
s=$.J
$.J=s+1
return new Function(t+H.b(s)+"}")()},
eJ:function(a,b,c,d,e,f,g){var t,s
t=J.aT(b)
s=!!J.q(d).$isz?J.aT(d):d
return H.h7(a,t,c,s,!!e,f,g)},
er:function(a){return a.a},
eT:function(a){return a.c},
bF:function(a){var t,s,r,q,p
t=new H.al("self","target","receiver","name")
s=J.aT(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
i3:function(a,b){var t=new H.c1(a,[b])
t.bH(a)
return t},
fM:function(a){var t
if("$S" in a){t=a.$S
if(typeof t=="number")return u.types[t]
else return a.$S()}return},
bw:function(a,b){var t,s
if(a==null)return!1
if(typeof a=="function")return!0
t=H.fM(J.q(a))
if(t==null)return!1
s=H.fS(t,null,b,null)
return s},
ie:function(a){throw H.e(new P.bN(a))},
ht:function(a){return new H.cM(a)},
fP:function(a){return u.getIsolateTag(a)},
n:function(a,b){a.$ti=b
return a},
ai:function(a){if(a==null)return
return a.$ti},
ij:function(a,b,c){return H.aj(a["$as"+H.b(c)],H.ai(b))},
hY:function(a,b,c,d){var t=H.aj(a["$as"+H.b(c)],H.ai(b))
return t==null?null:t[d]},
eM:function(a,b,c){var t=H.aj(a["$as"+H.b(b)],H.ai(a))
return t==null?null:t[c]},
m:function(a,b){var t=H.ai(a)
return t==null?null:t[b]},
fZ:function(a){var t=H.a2(a,null)
return t},
a2:function(a,b){if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].name+H.fU(a,1,b)
if(typeof a=="function")return a.name
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.b(a)
return H.b(b[b.length-a-1])}if('func' in a)return H.hH(a,b)
if('futureOr' in a)return"FutureOr<"+H.a2("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
hH:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if("bounds" in a){t=a.bounds
if(a0==null){a0=H.n([],[P.l])
s=null}else s=a0.length
r=a0.length
for(q=t.length,p=q;p>0;--p)a0.push("T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o=C.d.A(o+n,a0[a0.length-p-1])
m=t[p]
if(m!=null&&m!==P.j)o+=" extends "+H.a2(m,a0)}o+=">"}else{o=""
s=null}l=!!a.v?"void":H.a2(a.ret,a0)
if("args" in a){k=a.args
for(j=k.length,i="",h="",g=0;g<j;++g,h=", "){f=k[g]
i=i+h+H.a2(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(j=e.length,h="",g=0;g<j;++g,h=", "){f=e[g]
i=i+h+H.a2(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(j=H.hV(d),c=j.length,h="",g=0;g<c;++g,h=", "){b=j[g]
i=i+h+H.a2(d[b],a0)+(" "+H.b(b))}i+="}"}if(s!=null)a0.length=s
return o+"("+i+") => "+l},
fU:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.ax("")
for(s=b,r="",q=!0,p="";s<a.length;++s,r=", "){t.a=p+r
o=a[s]
if(o!=null)q=!1
p=t.a+=H.a2(o,c)}p="<"+t.h(0)+">"
return p},
aj:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
af:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ai(a)
s=J.q(a)
if(s[b]==null)return!1
return H.fI(H.aj(s[d],t),null,c,null)},
fI:function(a,b,c,d){var t,s
if(c==null)return!0
if(a==null){t=c.length
for(s=0;s<t;++s)if(!H.G(null,null,c[s],d))return!1
return!0}t=a.length
for(s=0;s<t;++s)if(!H.G(a[s],b,c[s],d))return!1
return!0},
ii:function(a,b,c){return a.apply(b,H.aj(J.q(b)["$as"+H.b(c)],H.ai(b)))},
G:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
if(a===c)return!0
if(c==null||c===-1||c.name==="j"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="j"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.G(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="k")return!0
if('func' in c)return H.fS(a,b,c,d)
if('func' in a)return c.name==="aR"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
if('futureOr' in c){r="type" in c?c.type:null
if('futureOr' in a)return H.G("type" in a?a.type:null,b,r,d)
else if(H.G(a,b,r,d))return!0
else{if(!('$is'+"t" in s.prototype))return!1
q=s.prototype["$as"+"t"]
p=H.aj(q,t?a.slice(1):null)
return H.G(typeof p==="object"&&p!==null&&p.constructor===Array?p[0]:null,b,r,d)}}o=typeof c==="object"&&c!==null&&c.constructor===Array
n=o?c[0]:c
if(n!==s){m=H.fZ(n)
if(!('$is'+m in s.prototype))return!1
l=s.prototype["$as"+m]}else l=null
if(!o)return!0
t=t?a.slice(1):null
o=c.slice(1)
return H.fI(H.aj(l,t),b,o,d)},
fS:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
t=a.bounds
s=c.bounds
if(t.length!==s.length)return!1}else if("bounds" in c)return!1
if(!H.G(a.ret,b,c.ret,d))return!1
r=a.args
q=c.args
p=a.opt
o=c.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
for(j=0;j<n;++j)if(!H.G(q[j],d,r[j],b))return!1
for(i=j,h=0;i<m;++h,++i)if(!H.G(q[i],d,p[h],b))return!1
for(i=0;i<k;++h,++i)if(!H.G(o[i],d,p[h],b))return!1
g=a.named
f=c.named
if(f==null)return!0
if(g==null)return!1
return H.i7(g,b,f,d)},
i7:function(a,b,c,d){var t,s,r,q
t=Object.getOwnPropertyNames(c)
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
if(!H.G(c[q],d,a[q],b))return!1}return!0},
fR:function(a,b){if(a==null)return
return H.fO(a,{func:1},b,0)},
fO:function(a,b,c,d){var t,s,r,q,p,o
if("v" in a)b.v=a.v
else if("ret" in a)b.ret=H.eI(a.ret,c,d)
if("args" in a)b.args=H.e4(a.args,c,d)
if("opt" in a)b.opt=H.e4(a.opt,c,d)
if("named" in a){t=a.named
s={}
r=Object.keys(t)
for(q=r.length,p=0;p<q;++p){o=r[p]
s[o]=H.eI(t[o],c,d)}b.named=s}return b},
eI:function(a,b,c){var t,s
if(a==null)return a
if(a===-1)return a
if(typeof a=="function")return a
if(typeof a==="number"){if(a<c)return a
return b[a-c]}if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.e4(a,b,c)
if('func' in a){t={func:1}
if("bounds" in a){s=a.bounds
c+=s.length
t.bounds=H.e4(s,b,c)}return H.fO(a,t,b,c)}throw H.e(P.eq("Unknown RTI format in bindInstantiatedType."))},
e4:function(a,b,c){var t,s,r
t=a.slice()
for(s=t.length,r=0;r<s;++r)t[r]=H.eI(t[r],b,c)
return t},
i5:function(a){var t,s,r,q,p,o
t=$.fQ.$1(a)
s=$.e5[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.eb[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.fH.$2(a,t)
if(t!=null){s=$.e5[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.eb[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.eh(r)
$.e5[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.eb[t]=r
return r}if(p==="-"){o=H.eh(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.fW(a,r)
if(p==="*")throw H.e(P.fw(t))
if(u.leafTags[t]===true){o=H.eh(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.fW(a,r)},
fW:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.eO(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
eh:function(a){return J.eO(a,!1,null,!!a.$isey)},
i6:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.eh(t)
else return J.eO(t,c,null,null)},
i0:function(){if(!0===$.eN)return
$.eN=!0
H.i1()},
i1:function(){var t,s,r,q,p,o,n,m
$.e5=Object.create(null)
$.eb=Object.create(null)
H.i_()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.fY.$1(p)
if(o!=null){n=H.i6(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
i_:function(){var t,s,r,q,p,o,n
t=C.V()
t=H.ae(C.S,H.ae(C.X,H.ae(C.x,H.ae(C.x,H.ae(C.W,H.ae(C.T,H.ae(C.U(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.fQ=new H.e8(p)
$.fH=new H.e9(o)
$.fY=new H.ea(n)},
ae:function(a,b){return a(b)||b},
hh:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.e(P.f5("Illegal RegExp pattern ("+String(q)+")",a,null))},
ia:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
ib:function(a,b,c,d){var t=a.indexOf(b,d)
if(t<0)return a
return H.ic(a,t,t+b.length,c)},
ic:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
cL:function cL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
d_:function d_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cI:function cI(a,b){this.a=a
this.b=b},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a){this.a=a},
ao:function ao(a,b){this.a=a
this.b=b},
em:function em(a){this.a=a},
bn:function bn(a){this.a=a
this.b=null},
aL:function aL(){},
cY:function cY(){},
cU:function cU(){},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c0:function c0(){},
c1:function c1(a,b){this.a=a
this.$ti=b},
cM:function cM(a){this.a=a},
bc:function bc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
Y:function Y(a,b,c){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=null
_.r=b
_.$ti=c},
c5:function c5(a){this.a=a},
c7:function c7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c8:function c8(a,b){this.a=a
this.$ti=b},
c9:function c9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e8:function e8(a){this.a=a},
e9:function e9(a){this.a=a},
ea:function ea(a){this.a=a},
c4:function c4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dE:function dE(a,b){this.a=a
this.b=b},
a_:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bv(b,a))},
au:function au(){},
b2:function b2(){},
at:function at(){},
b3:function b3(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
b4:function b4(){},
cH:function cH(){},
az:function az(){},
aA:function aA(){},
aB:function aB(){},
aC:function aC(){},
hV:function(a){return J.f9(a?Object.keys(a):[],null)},
i8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aV.prototype
return J.aU.prototype}if(typeof a=="string")return J.X.prototype
if(a==null)return J.aW.prototype
if(typeof a=="boolean")return J.c3.prototype
if(a.constructor==Array)return J.O.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof P.j)return a
return J.bx(a)},
eO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bx:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.eN==null){H.i0()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(P.fw("Return interceptor for "+H.b(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$ex()]
if(p!=null)return p
p=H.i5(a)
if(p!=null)return p
if(typeof a=="function")return C.Y
s=Object.getPrototypeOf(a)
if(s==null)return C.L
if(s===Object.prototype)return C.L
if(typeof q=="function"){Object.defineProperty(q,$.$get$ex(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
hg:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.bB(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.R(a,0,4294967295,"length",null))
return J.f9(new Array(a),b)},
f9:function(a,b){return J.aT(H.n(a,[b]))},
aT:function(a){a.fixed$length=Array
return a},
hW:function(a){if(typeof a=="number")return J.a7.prototype
if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(a.constructor==Array)return J.O.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof P.j)return a
return J.bx(a)},
ah:function(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(a.constructor==Array)return J.O.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof P.j)return a
return J.bx(a)},
e6:function(a){if(a==null)return a
if(a.constructor==Array)return J.O.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof P.j)return a
return J.bx(a)},
eK:function(a){if(typeof a=="number")return J.a7.prototype
if(a==null)return a
if(!(a instanceof P.j))return J.aa.prototype
return a},
hX:function(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(!(a instanceof P.j))return J.aa.prototype
return a},
eL:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof P.j)return a
return J.bx(a)},
aI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hW(a).A(a,b)},
x:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).q(a,b)},
eP:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.eK(a).R(a,b)},
eQ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.eK(a).S(a,b)},
en:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fT(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ah(a).i(a,b)},
h0:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fT(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.e6(a).p(a,b,c)},
h1:function(a,b,c,d){return J.eL(a).aD(a,b,c,d)},
eo:function(a,b,c){return J.ah(a).ck(a,b,c)},
h2:function(a,b){return J.e6(a).N(a,b)},
eR:function(a){return J.q(a).gk(a)},
ep:function(a){return J.e6(a).gu(a)},
ak:function(a){return J.ah(a).gj(a)},
h3:function(a,b){return J.hX(a).bz(a,b)},
by:function(a){return J.q(a).h(a)},
i:function i(){},
c3:function c3(){},
aW:function aW(){},
ap:function ap(){},
cJ:function cJ(){},
aa:function aa(){},
P:function P(){},
O:function O(a){this.$ti=a},
ev:function ev(a){this.$ti=a},
bC:function bC(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
a7:function a7(){},
aV:function aV(){},
aU:function aU(){},
X:function X(){}},P={
hx:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.hQ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aH(new P.dd(t),1)).observe(s,{childList:true})
return new P.dc(t,s,r)}else if(self.setImmediate!=null)return P.hR()
return P.hS()},
hy:function(a){self.scheduleImmediate(H.aH(new P.de(a),0))},
hz:function(a){self.setImmediate(H.aH(new P.df(a),0))},
hA:function(a){P.eD(C.O,a)},
eD:function(a,b){var t=C.a.L(a.a,1000)
return P.hD(t<0?0:t,b)},
fk:function(a,b){var t=C.a.L(a.a,1000)
return P.hE(t<0?0:t,b)},
hD:function(a,b){var t=new P.bq(!0,0)
t.bI(a,b)
return t},
hE:function(a,b){var t=new P.bq(!1,0)
t.bJ(a,b)
return t},
e0:function(a){return new P.d9(new P.bp(new P.o(0,$.f,[a]),[a]),!1,[a])},
dY:function(a,b){a.$2(0,null)
b.b=!0
return b.a.a},
bs:function(a,b){P.hF(a,b)},
dX:function(a,b){b.V(0,a)},
dW:function(a,b){b.W(H.H(a),H.B(a))},
hF:function(a,b){var t,s,r,q
t=new P.dZ(b)
s=new P.e_(b)
r=J.q(a)
if(!!r.$iso)a.aB(t,s,null)
else if(!!r.$ist)a.ak(t,s,null)
else{q=new P.o(0,$.f,[null])
q.a=4
q.c=a
q.aB(t,null,null)}},
e2:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
return $.f.aJ(new P.e3(t))},
f6:function(a,b,c){var t=new P.o(0,$.f,[c])
P.hv(a,new P.bU(t,b))
return t},
hG:function(a,b,c){$.f.toString
a.B(b,c)},
hC:function(a,b,c){var t=new P.o(0,b,[c])
t.a=4
t.c=a
return t},
fx:function(a,b){var t,s,r
b.a=1
try{a.ak(new P.dt(b),new P.du(b),null)}catch(r){t=H.H(r)
s=H.B(r)
P.ei(new P.dv(b,t,s))}},
ds:function(a,b){var t,s
for(;t=a.a,t===2;)a=a.c
if(t>=4){s=b.ab()
b.a=a.a
b.c=a.c
P.ac(b,s)}else{s=b.c
b.a=2
b.c=a
a.b0(s)}},
ac:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=p.a
p=p.b
s.toString
P.aF(null,null,s,o,p)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.ac(t.a,b)}s=t.a
m=s.c
r.a=q
r.b=m
p=!q
if(p){o=b.c
o=(o&1)!==0||o===8}else o=!0
if(o){o=b.b
l=o.b
if(q){k=s.b
k.toString
k=k==null?l==null:k===l
if(!k)l.toString
else k=!0
k=!k}else k=!1
if(k){s=s.b
p=m.a
o=m.b
s.toString
P.aF(null,null,s,p,o)
return}j=$.f
if(j==null?l!=null:j!==l)$.f=l
else j=null
s=b.c
if(s===8)new P.dA(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.dz(r,b,m).$0()}else if((s&2)!==0)new P.dy(t,r,b).$0()
if(j!=null)$.f=j
s=r.b
if(!!J.q(s).$ist){if(s.a>=4){i=o.c
o.c=null
b=o.ac(i)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.ds(s,o)
return}}h=b.b
i=h.c
h.c=null
b=h.ac(i)
s=r.a
p=r.b
if(!s){h.a=4
h.c=p}else{h.a=8
h.c=p}t.a=h
s=h}},
hL:function(a,b){if(H.bw(a,{func:1,args:[P.j,P.D]}))return b.aJ(a)
if(H.bw(a,{func:1,args:[P.j]}))return a
throw H.e(P.bB(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
hJ:function(){var t,s
for(;t=$.ad,t!=null;){$.aE=null
s=t.b
$.ad=s
if(s==null)$.aD=null
t.a.$0()}},
hO:function(){$.eF=!0
try{P.hJ()}finally{$.aE=null
$.eF=!1
if($.ad!=null)$.$get$eE().$1(P.fK())}},
fG:function(a){var t=new P.be(a)
if($.ad==null){$.aD=t
$.ad=t
if(!$.eF)$.$get$eE().$1(P.fK())}else{$.aD.b=t
$.aD=t}},
hN:function(a){var t,s,r
t=$.ad
if(t==null){P.fG(a)
$.aE=$.aD
return}s=new P.be(a)
r=$.aE
if(r==null){s.b=t
$.aE=s
$.ad=s}else{s.b=r.b
r.b=s
$.aE=s
if(s.b==null)$.aD=s}},
ei:function(a){var t=$.f
if(C.c===t){P.a0(null,null,C.c,a)
return}t.toString
P.a0(null,null,t,t.aE(a))},
ih:function(a){return new P.dP(a,!1)},
bb:function(a,b,c,d,e,f){return new P.bf(0,b,c,d,a,[f])},
bu:function(a){var t,s,r,q
if(a==null)return
try{a.$0()}catch(r){t=H.H(r)
s=H.B(r)
q=$.f
q.toString
P.aF(null,null,q,t,s)}},
fC:function(a,b){var t=$.f
t.toString
P.aF(null,null,t,a,b)},
hK:function(){},
hv:function(a,b){var t=$.f
if(t===C.c){t.toString
return P.eD(a,b)}return P.eD(a,t.aE(b))},
hw:function(a,b){var t,s
t=$.f
if(t===C.c){t.toString
return P.fk(a,b)}s=t.ba(b,P.cZ)
$.f.toString
return P.fk(a,s)},
aF:function(a,b,c,d,e){var t={}
t.a=d
P.hN(new P.e1(t,e))},
fE:function(a,b,c,d){var t,s
s=$.f
if(s===c)return d.$0()
$.f=c
t=s
try{s=d.$0()
return s}finally{$.f=t}},
fF:function(a,b,c,d,e){var t,s
s=$.f
if(s===c)return d.$1(e)
$.f=c
t=s
try{s=d.$1(e)
return s}finally{$.f=t}},
hM:function(a,b,c,d,e,f){var t,s
s=$.f
if(s===c)return d.$2(e,f)
$.f=c
t=s
try{s=d.$2(e,f)
return s}finally{$.f=t}},
a0:function(a,b,c,d){var t=C.c!==c
if(t)d=!(!t||!1)?c.aE(d):c.cc(d)
P.fG(d)},
dd:function dd(a){this.a=a},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a){this.a=a},
df:function df(a){this.a=a},
bq:function bq(a,b){this.a=a
this.b=null
this.c=b},
dT:function dT(a,b){this.a=a
this.b=b},
dS:function dS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a,b,c){this.a=a
this.b=b
this.$ti=c},
db:function db(a,b){this.a=a
this.b=b},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a){this.a=a},
e_:function e_(a){this.a=a},
e3:function e3(a){this.a=a},
dh:function dh(a,b){this.a=a
this.$ti=b},
di:function di(a,b,c,d){var _=this
_.dx=a
_.fr=_.dy=null
_.x=b
_.c=_.b=_.a=null
_.d=c
_.e=d
_.r=_.f=null},
ab:function ab(){},
dQ:function dQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.r=_.f=_.e=_.d=null
_.$ti=d},
dR:function dR(a){this.a=a},
t:function t(){},
bU:function bU(a,b){this.a=a
this.b=b},
bg:function bg(){},
bp:function bp(a,b){this.a=a
this.$ti=b},
bl:function bl(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
o:function o(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
dp:function dp(a,b){this.a=a
this.b=b},
dx:function dx(a,b){this.a=a
this.b=b},
dt:function dt(a){this.a=a},
du:function du(a){this.a=a},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
dr:function dr(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dB:function dB(a){this.a=a},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a){this.a=a
this.b=null},
ba:function ba(){},
cW:function cW(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
cV:function cV(){},
dL:function dL(){},
dN:function dN(a){this.a=a},
dM:function dM(a){this.a=a},
dg:function dg(){},
bf:function bf(a,b,c,d,e,f){var _=this
_.a=null
_.b=a
_.c=null
_.d=b
_.e=c
_.f=d
_.r=e
_.$ti=f},
S:function S(a,b){this.a=a
this.$ti=b},
bh:function bh(a,b,c){var _=this
_.x=a
_.c=_.b=_.a=null
_.d=b
_.e=c
_.r=_.f=null},
dj:function dj(){},
dO:function dO(){},
dk:function dk(){},
ay:function ay(a){this.b=a
this.a=null},
dF:function dF(){},
dG:function dG(a,b){this.a=a
this.b=b},
bo:function bo(a){this.c=this.b=null
this.a=a},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(a,b){this.a=null
this.b=a
this.c=b},
cZ:function cZ(){},
a3:function a3(a,b){this.a=a
this.b=b},
dV:function dV(){},
e1:function e1(a,b){this.a=a
this.b=b},
dH:function dH(){},
dJ:function dJ(a,b){this.a=a
this.b=b},
dI:function dI(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
hi:function(a,b,c,d,e){return new H.Y(0,0,[d,e])},
ca:function(a,b,c){return H.fN(a,new H.Y(0,0,[b,c]))},
eA:function(a,b){return new H.Y(0,0,[a,b])},
aY:function(a){return H.fN(a,new H.Y(0,0,[null,null]))},
he:function(a,b,c){var t,s
if(P.eG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$aG()
s.push(a)
try{P.hI(a,t)}finally{s.pop()}s=P.fj(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
f8:function(a,b,c){var t,s,r
if(P.eG(a))return b+"..."+c
t=new P.ax(b)
s=$.$get$aG()
s.push(a)
try{r=t
r.a=P.fj(r.gU(),a,", ")}finally{s.pop()}s=t
s.a=s.gU()+c
s=t.gU()
return s.charCodeAt(0)==0?s:s},
eG:function(a){var t,s
for(t=0;s=$.$get$aG(),t<s.length;++t)if(a===s[t])return!0
return!1},
hI:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gu(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.m())return
q=H.b(t.gl())
b.push(q)
s+=q.length+2;++r}if(!t.m()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gl();++r
if(!t.m()){if(r<=4){b.push(H.b(n))
return}p=H.b(n)
o=b.pop()
s+=p.length+2}else{m=t.gl();++r
for(;t.m();n=m,m=l){l=t.gl();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.b(n)
p=H.b(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
aX:function(a,b,c){var t=P.hi(null,null,null,b,c)
a.a2(0,new P.cb(t))
return t},
eC:function(a){var t,s,r
t={}
if(P.eG(a))return"{...}"
s=new P.ax("")
try{$.$get$aG().push(a)
r=s
r.a=r.gU()+"{"
t.a=!0
a.a2(0,new P.cl(t,s))
t=s
t.a=t.gU()+"}"}finally{$.$get$aG().pop()}t=s.gU()
return t.charCodeAt(0)==0?t:t},
d4:function d4(a,b){this.a=a
this.$ti=b},
cb:function cb(a){this.a=a},
cc:function cc(){},
Q:function Q(){},
ck:function ck(){},
cl:function cl(a,b){this.a=a
this.b=b},
cm:function cm(){},
dU:function dU(){},
cn:function cn(){},
d5:function d5(a,b){this.a=a
this.$ti=b},
bm:function bm(){},
br:function br(){},
T:function(a,b,c){var t=H.hp(a,c)
if(t!=null)return t
if(b!=null)return b.$1(a)
throw H.e(P.f5(a,null,null))},
hc:function(a){var t=J.q(a)
if(!!t.$isaL)return t.h(a)
return"Instance of '"+H.b5(a)+"'"},
hj:function(a,b,c,d){var t,s,r
t=J.hg(a,d)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
eB:function(a,b,c){var t,s
t=H.n([],[c])
for(s=J.ep(a);s.m();)t.push(s.gl())
return t},
hs:function(a,b,c){return new H.c4(a,H.hh(a,!1,!0,!1))},
fj:function(a,b,c){var t=J.ep(b)
if(!t.m())return a
if(c.length===0){do a+=H.b(t.gl())
while(t.m())}else{a+=H.b(t.gl())
for(;t.m();)a=a+c+H.b(t.gl())}return a},
hu:function(){var t,s
if($.$get$fz())return H.B(new Error())
try{throw H.e("")}catch(s){H.H(s)
t=H.B(s)
return t}},
h8:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
h9:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aO:function(a){if(a>=10)return""+a
return"0"+a},
hb:function(a,b,c,d,e,f){return new P.K(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
f4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.by(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hc(a)},
eq:function(a){return new P.M(!1,null,null,a)},
bB:function(a,b,c){return new P.M(!0,a,b,c)},
hq:function(a){return new P.aw(null,null,!1,null,null,a)},
cK:function(a,b,c){return new P.aw(null,null,!0,a,b,"Value not in range")},
R:function(a,b,c,d,e){return new P.aw(b,c,!0,a,d,"Invalid value")},
fi:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.R(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.R(b,a,c,"end",f))
return b},
f7:function(a,b,c,d,e){var t=e!=null?e:J.ak(b)
return new P.c_(b,t,!0,a,c,"Index out of range")},
F:function(a){return new P.d6(a)},
fw:function(a){return new P.d1(a)},
cT:function(a){return new P.E(a)},
aM:function(a){return new P.bL(a)},
es:function(a){return new P.dn(a)},
f5:function(a,b,c){return new P.bT(a,b,c)},
fa:function(a,b,c,d){var t,s,r
if(c){t=H.n([],[d])
C.b.sj(t,a)}else{s=new Array(a)
s.fixed$length=Array
t=H.n(s,[d])}for(r=0;r<a;++r)t[r]=b.$1(r)
return t},
fX:function(a){H.i8(H.b(a))},
p:function p(){},
aN:function aN(a,b){this.a=a
this.b=b},
ag:function ag(){},
K:function K(a){this.a=a},
bP:function bP(){},
bQ:function bQ(){},
a5:function a5(){},
av:function av(){},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aw:function aw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
c_:function c_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
d6:function d6(a){this.a=a},
d1:function d1(a){this.a=a},
E:function E(a){this.a=a},
bL:function bL(a){this.a=a},
b9:function b9(){},
bN:function bN(a){this.a=a},
dn:function dn(a){this.a=a},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(){},
h:function h(){},
a6:function a6(){},
c2:function c2(){},
z:function z(){},
k:function k(){},
U:function U(){},
j:function j(){},
D:function D(){},
l:function l(){},
ax:function ax(a){this.a=a},
dC:function dC(){},
f3:function(){var t=$.f2
if(t==null){t=J.eo(window.navigator.userAgent,"Opera",0)
$.f2=t}return t},
ha:function(){var t,s
t=$.f_
if(t!=null)return t
s=$.f0
if(s==null){s=J.eo(window.navigator.userAgent,"Firefox",0)
$.f0=s}if(s)t="-moz-"
else{s=$.f1
if(s==null){s=!P.f3()&&J.eo(window.navigator.userAgent,"Trident/",0)
$.f1=s}if(s)t="-ms-"
else t=P.f3()?"-o-":"-webkit-"}$.f_=t
return t}},W={
dD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fy:function(a,b,c,d){var t,s
t=W.dD(W.dD(W.dD(W.dD(0,a),b),c),d)
s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
hB:function(a,b,c,d){var t=W.hP(new W.dm(c),W.a)
t=new W.dl(0,a,b,t,!1)
t.c8()
return t},
hP:function(a,b){var t=$.f
if(t===C.c)return a
return t.ba(a,b)},
d:function d(){},
bz:function bz(){},
bA:function bA(){},
W:function W(){},
a4:function a4(){},
bM:function bM(){},
bO:function bO(){},
aP:function aP(){},
c:function c(){},
a:function a(){},
v:function v(){},
bS:function bS(){},
cd:function cd(){},
cB:function cB(){},
A:function A(){},
cS:function cS(){},
bj:function bj(){},
dl:function dl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dm:function dm(a){this.a=a},
bi:function bi(){}},R={
aJ:function(a,b,c,d,e,f,g,h){var t=H.n([],[[Y.aS,g]])
d.a=!0
d.b=a
return new R.N(t,62,e,b,d,c,[g,h])},
N:function N(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.$ti=g},
bD:function bD(a){this.a=a},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c}},A={
an:function(a,b,c,d){var t=P.hj(a*b,c,!1,d)
if(a===0)return new A.V(0,b,H.n([],[d]),[d])
return A.eV(a,t,d)},
eW:function(a,b,c){var t=P.eB(b,!0,c)
return A.eV(a,new P.d4(t,[c]),c)},
eV:function(a,b,c){var t=a!=null&&a>0&&b!=null?C.a.aM(J.ak(b),a):0
return new A.V(a,t,b,[c])},
V:function V(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d}},Y={
hd:function(a,b,c,d,e){var t=new H.d7(e,new Y.bZ(),[H.m(e,0)])
return new Y.aS(a,b,c,d,e,t.gj(t))},
aS:function aS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bZ:function bZ(){},
cg:function cg(a,b,c){var _=this
_.d=a
_.e=b
_.f=c
_.c=_.b=_.a=null},
ci:function ci(){},
ch:function ch(){}},S={bI:function bI(){},
eU:function(a,b){var t=b==null?128:b
return new S.aK(t,a==null?128:a)},
aK:function aK(a,b){var _=this
_.a=a
_.b=b
_.f=_.e=_.d=_.c=null}},K={
b1:function(a,b,c,d){var t,s
t=new K.cp(a,c,b,[d])
if(a==null){s=C.r[C.o.aj(11)]
t.a=s}else s=a
$.$get$fA().E(C.u,"Generator: "+s.h(0),null,null)
return t},
u:function u(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cq:function cq(){},
cr:function cr(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
I:function I(a,b){this.a=a
this.b=b},
bG:function bG(a){var _=this
_.d=a
_.c=_.b=_.a=null},
bH:function bH(a){this.a=a}},E={b7:function b7(a,b){this.a=a
this.b=b},bJ:function bJ(){}},B={bK:function bK(){},cj:function cj(){this.c=this.b=this.a=null}},X={y:function y(a,b){this.a=a
this.b=b},bV:function bV(a){var _=this
_.d=a
_.c=_.b=_.a=null},bY:function bY(a){this.a=a}},L={bW:function bW(){this.c=this.b=this.a=null},bX:function bX(){}},T={b8:function b8(a,b){this.a=a
this.b=b},cN:function cN(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e
_.y=null
_.z=f
_.Q=g
_.ch=h
_.cx=i
_.cy=j
_.db=k
_.dx=l
_.$ti=m},cR:function cR(a){this.a=a},cO:function cO(){},cP:function cP(a){this.a=a},cQ:function cQ(a){this.a=a}},U={
ig:function(a,b){var t,s,r,q
t={}
t.a=null
t.b=null
t.c=0
s=new U.ej(t,a,new U.el(t,b))
r=new U.ek(t)
q=P.bb(r,s,r,s,!1,P.h)
t.a=q
return new P.S(q,[H.m(q,0)])},
el:function el(a,b){this.a=a
this.b=b},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a){this.a=a}},N={
a8:function(a){return $.$get$fc().cC(a,new N.ce(a))},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=d
_.f=null},
ce:function ce(a){this.a=a},
Z:function Z(a,b){this.a=a
this.b=b},
b_:function b_(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
i2:function(){var t,s,r,q,p,o
t=P.l
s=P.eA(t,t)
if(window.location.search!==""){t=window.location.search
t.length
r=H.ib(t,"?","",0).split("&")
for(q=r.length,p=0;p<q;++p){o=J.h3(r[p],"=")
s.p(0,o[0],o[1])}}return s},
hU:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=P.l
s=H.n([],[t])
for(r=0;r<11;++r){q=C.r[r]
s.push(C.d.ap(q.h(0),C.d.aF(q.h(0),".")+1))}if(a.af("generator")&&!C.b.M(s,a.i(0,"generator")))throw H.e(P.es('Unknown generator: "'+H.b(a.i(0,"generator"))+'"'))
if(a.af("generator"))p=C.r[C.b.aF(s,a.i(0,"generator"))]
else{o=P.eB(C.r,!0,null)
C.b.bx(o)
p=C.b.gD(o)}P.fX(p)
o=a.i(0,"rules")
switch(o==null?"game_of_life":o){case"majority_vote":o=P.p
t=R.aJ(!1,c,P.aX(P.aY([!1,"#000000",!0,"#FFFE01"]),o,t),new B.cj(),b,!0,o,t)
t.a_(K.b1(p,!1,!0,o))
return t
case"brians_brain":o=K.I
n=P.ca([C.h,1,C.f,0,C.l,0],o,P.h)
t=R.aJ(C.f,c,P.aX(P.aY([C.f,"#556B2F",C.l,"#FF4500",C.h,"#FFA500"]),o,t),new K.bG(n),b,!0,o,t)
t.a_(K.b1(p,C.f,C.h,o))
return t
case"mcell_generations":o=a.i(0,"rules_config")
o=P.hs("([0-9]*)\\/([0-9]*)\\/([0-9]*)",!0,!1).cl(o).b
n=[t]
m=H.n(o[1].split(""),n)
l=P.h
m=new H.as(m,P.fL(),[H.m(m,0),l]).bo(0,!1)
n=H.n(o[2].split(""),n)
n=new H.as(n,P.fL(),[H.m(n,0),l]).bo(0,!1)
o=P.T(o[3],null,null)
t=R.aJ(0,c,P.aX(P.aY([0,"#000000",1,"#A2EAF9",2,"#F5A2F9",3,"#D0DE34",4,"#C35E00",5,"#C3005F"]),l,t),new Y.cg(m,n,o),b,!0,l,t)
t.a_(K.b1(p,0,1,l))
return t
case"game_of_life_simple":o=P.p
t=R.aJ(!1,c,P.aX(P.aY([!1,"#8B0000",!0,"#ADFE2F"]),o,t),new L.bW(),b,!0,o,t)
t.a_(K.b1(p,!1,!0,o))
return t
case"game_of_life":o=X.y
n=P.ca([C.j,1,C.m,1,C.n,0,C.p,0,C.q,0],o,P.h)
t=R.aJ(C.n,c,P.aX(P.aY([C.n,"#0000FF",C.p,"#00008B",C.q,"#8A2BE2",C.j,"#FFFE01",C.m,"#FEFEE0"]),o,t),new X.bV(n),b,!0,o,t)
t.a_(K.b1(p,C.n,C.j,o))
return t
default:throw H.e(P.es("Unknown rules reference: "+H.b(a.i(0,"rules"))))}},
fV:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t={}
s=$.$get$cf()
s.toString
if($.e7&&s.b!=null)s.c=C.z
else{if(s.b!=null)H.C(P.F('Please set "hierarchicalLoggingEnabled" to true if you want to change the level on a non-root logger.'))
$.fD=C.z}s.aV().a3(new N.ed())
r=N.i2()
q=P.T(r.i(0,"render_size"),null,null)
t.a=null
t.b=null
t.c=null
t.d=null
p=new N.ec(t,r,q)
p.$0()
switch(r.i(0,"display")){case"fullscreen":s=t.c
o=S.eU(t.d,s)
s=document.querySelector("#canvas")
n=t.a
o.bd(s,t.b,n,C.M,!0)
break
case"fixed":default:s=t.c
o=S.eU(t.d,s)
s=document.querySelector("#canvas")
n=t.a
o.cn(s,t.b,n,C.N)}s=t.c
n=t.d
m=r.af("fps")?P.T(r.i(0,"fps"),null,null):30
l=P.l
k=[A.V,l]
j=P.bb(null,null,null,null,!1,k)
k=P.bb(null,null,null,null,!1,k)
i=P.bb(null,null,null,null,!1,T.b8)
h=P.bb(null,null,null,null,!1,P.h)
m=m!=null?P.hb(0,0,0,C.e.v(1/m*1000),0,0):null
g=new T.cN(P.eA(l,[R.N,,,]),m,0,s,n,0,null,j,k,i,0,h,[l])
$.$get$bt().E(C.u,"Max Age: null",null,null)
new P.S(h,[H.m(h,0)]).a3(new N.ee(t,g,r))
new P.S(j,[H.m(j,0)]).a3(H.i3(o.gcE(),null))
new P.S(i,[H.m(i,0)]).a3(new N.ef(g))
g.ao(0)
W.hB(window,"resize",new N.eg(t,g,p),!1)},
ed:function ed(){},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
ef:function ef(a){this.a=a},
eg:function eg(a,b,c){this.a=a
this.b=b
this.c=c}}
var v=[C,H,J,P,W,R,A,Y,S,K,E,B,X,L,T,U,N]
setFunctionNamesIfNecessary(v)
var $={}
H.ew.prototype={}
J.i.prototype={
q:function(a,b){return a===b},
gk:function(a){return H.a9(a)},
h:function(a){return"Instance of '"+H.b5(a)+"'"}}
J.c3.prototype={
h:function(a){return String(a)},
gk:function(a){return a?519018:218159},
$isp:1}
J.aW.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gk:function(a){return 0},
$isk:1}
J.ap.prototype={
gk:function(a){return 0},
h:function(a){return String(a)}}
J.cJ.prototype={}
J.aa.prototype={}
J.P.prototype={
h:function(a){var t=a[$.$get$eZ()]
if(t==null)return this.bF(a)
return"JavaScript function for "+H.b(J.by(t))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.O.prototype={
ct:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.b(a[s])
return t.join(b)},
ag:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.e(P.aM(a))}return s},
N:function(a,b){return a[b]},
gD:function(a){if(a.length>0)return a[0]
throw H.e(H.eu())},
bv:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.C(P.F("setRange"))
P.fi(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
s=J.ah(d)
if(e+t>s.gj(d))throw H.e(H.hf())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.i(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.i(d,e+r)},
a5:function(a,b,c,d){return this.bv(a,b,c,d,0)},
by:function(a,b){var t,s,r
if(!!a.immutable$list)H.C(P.F("shuffle"))
t=a.length
for(;t>1;){s=C.o.aj(t);--t
r=a[t]
this.p(a,t,a[s])
this.p(a,s,r)}},
bx:function(a){return this.by(a,null)},
aG:function(a,b,c){var t
if(c>=a.length)return-1
for(t=c;t<a.length;++t)if(J.x(a[t],b))return t
return-1},
aF:function(a,b){return this.aG(a,b,0)},
M:function(a,b){var t
for(t=0;t<a.length;++t)if(J.x(a[t],b))return!0
return!1},
h:function(a){return P.f8(a,"[","]")},
gu:function(a){return new J.bC(a,a.length,0)},
gk:function(a){return H.a9(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.C(P.F("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.bB(b,"newLength",null))
if(b<0)throw H.e(P.R(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.e(H.bv(a,b))
return a[b]},
p:function(a,b,c){if(!!a.immutable$list)H.C(P.F("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.bv(a,b))
if(b>=a.length||b<0)throw H.e(H.bv(a,b))
a[b]=c},
A:function(a,b){var t,s
t=C.a.A(a.length,C.t.gj(b))
s=H.n([],[H.m(a,0)])
this.sj(s,t)
this.a5(s,0,a.length,a)
this.a5(s,a.length,t,b)
return s},
$isr:1,
$isz:1}
J.ev.prototype={}
J.bC.prototype={
gl:function(){return this.d},
m:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.id(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.a7.prototype={
v:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.F(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk:function(a){return a&0x1FFFFFFF},
A:function(a,b){if(typeof b!=="number")throw H.e(H.a1(b))
return a+b},
I:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aM:function(a,b){if(typeof b!=="number")throw H.e(H.a1(b))
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.b7(a,b)},
L:function(a,b){return(a|0)===a?a/b|0:this.b7(a,b)},
b7:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(P.F("Result of truncating division is "+H.b(t)+": "+H.b(a)+" ~/ "+b))},
bw:function(a,b){if(b<0)throw H.e(H.a1(b))
return b>31?0:a<<b>>>0},
b5:function(a,b){var t
if(a>0)t=this.c4(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
c4:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.e(H.a1(b))
return a<b},
R:function(a,b){if(typeof b!=="number")throw H.e(H.a1(b))
return a>b},
$isU:1}
J.aV.prototype={
F:function(a,b){var t=this.bw(1,b-1)
return((a&t-1)>>>0)-((a&t)>>>0)},
$ish:1}
J.aU.prototype={}
J.X.prototype={
aT:function(a,b){if(b>=a.length)throw H.e(H.bv(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.e(P.bB(b,null,null))
return a+b},
bz:function(a,b){var t=H.n(a.split(b),[P.l])
return t},
bC:function(a,b,c){var t
if(c>a.length)throw H.e(P.R(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bB:function(a,b){return this.bC(a,b,0)},
aq:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.cK(b,null,null))
if(b>c)throw H.e(P.cK(b,null,null))
if(c>a.length)throw H.e(P.cK(c,null,null))
return a.substring(b,c)},
ap:function(a,b){return this.aq(a,b,null)},
aG:function(a,b,c){var t
if(c>a.length)throw H.e(P.R(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
aF:function(a,b){return this.aG(a,b,0)},
cv:function(a,b,c){var t
c=a.length
t=b.length
if(c+t>c)c-=t
return a.lastIndexOf(b,c)},
cu:function(a,b){return this.cv(a,b,null)},
ck:function(a,b,c){if(c>a.length)throw H.e(P.R(c,0,a.length,null,null))
return H.ia(a,b,c)},
h:function(a){return a},
gk:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gj:function(a){return a.length},
$isl:1}
H.r.prototype={}
H.aq.prototype={
gu:function(a){return new H.aZ(this,this.gj(this),0)},
gD:function(a){if(this.gj(this)===0)throw H.e(H.eu())
return this.N(0,0)},
bo:function(a,b){var t,s,r
t=new Array(this.gj(this))
t.fixed$length=Array
s=H.n(t,[H.eM(this,"aq",0)])
for(r=0;r<this.gj(this);++r)s[r]=this.N(0,r)
return s}}
H.aZ.prototype={
gl:function(){return this.d},
m:function(){var t,s,r,q
t=this.a
s=J.ah(t)
r=s.gj(t)
if(this.b!==r)throw H.e(P.aM(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.N(t,q);++this.c
return!0}}
H.b0.prototype={
gu:function(a){var t=this.a
return new H.co(t.gu(t),this.b)},
gj:function(a){var t=this.a
return t.gj(t)},
gD:function(a){var t=this.a
return this.b.$1(t.gD(t))},
$asa6:function(a,b){return[b]}}
H.bR.prototype={$isr:1,
$asr:function(a,b){return[b]}}
H.co.prototype={
m:function(){var t=this.b
if(t.m()){this.a=this.c.$1(t.gl())
return!0}this.a=null
return!1},
gl:function(){return this.a}}
H.as.prototype={
gj:function(a){return J.ak(this.a)},
N:function(a,b){return this.b.$1(J.h2(this.a,b))},
$asr:function(a,b){return[b]},
$asaq:function(a,b){return[b]},
$asa6:function(a,b){return[b]}}
H.d7.prototype={
gu:function(a){return new H.d8(J.ep(this.a),this.b)}}
H.d8.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(s.$1(t.gl()))return!0
return!1},
gl:function(){return this.a.gl()}}
H.aQ.prototype={}
H.d3.prototype={
p:function(a,b,c){throw H.e(P.F("Cannot modify an unmodifiable list"))}}
H.bd.prototype={}
H.cL.prototype={}
H.d_.prototype={
w:function(a){var t,s,r
t=new RegExp(this.a).exec(a)
if(t==null)return
s=Object.create(null)
r=this.b
if(r!==-1)s.arguments=t[r+1]
r=this.c
if(r!==-1)s.argumentsExpr=t[r+1]
r=this.d
if(r!==-1)s.expr=t[r+1]
r=this.e
if(r!==-1)s.method=t[r+1]
r=this.f
if(r!==-1)s.receiver=t[r+1]
return s}}
H.cI.prototype={
h:function(a){var t=this.b
if(t==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.c6.prototype={
h:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.b(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.b(this.a)+")"}}
H.d2.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ao.prototype={}
H.em.prototype={
$1:function(a){if(!!J.q(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:4}
H.bn.prototype={
h:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isD:1}
H.aL.prototype={
h:function(a){return"Closure '"+H.b5(this).trim()+"'"},
gcO:function(){return this},
$D:null}
H.cY.prototype={}
H.cU.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.al.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.al))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gk:function(a){var t,s
t=this.c
if(t==null)s=H.a9(this.a)
else s=typeof t!=="object"?J.eR(t):H.a9(t)
return(s^H.a9(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b5(t)+"'")}}
H.c0.prototype={
bH:function(a){if(false)H.fR(0,0)},
h:function(a){var t="<"+C.b.ct([new H.bc(H.m(this,0))],", ")+">"
return H.b(this.a)+" with "+t}}
H.c1.prototype={
$1:function(a){return this.a.$1$1(a,this.$ti[0])},
$S:function(){return H.fR(H.fM(this.a),this.$ti)}}
H.cM.prototype={
h:function(a){return"RuntimeError: "+H.b(this.a)}}
H.bc.prototype={
gad:function(){var t=this.b
if(t==null){t=H.fZ(this.a)
this.b=t}return t},
h:function(a){var t=this.c
if(t==null){t=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.gad(),u.mangledGlobalNames)
this.c=t}return t},
gk:function(a){var t=this.d
if(t==null){t=C.d.gk(this.gad())
this.d=t}return t},
q:function(a,b){if(b==null)return!1
return b instanceof H.bc&&this.gad()===b.gad()}}
H.Y.prototype={
gj:function(a){return this.a},
gcr:function(a){return this.a===0},
gbg:function(){return new H.c8(this,[H.m(this,0)])},
ga4:function(a){return H.hk(this.gbg(),new H.c5(this),H.m(this,0),H.m(this,1))},
af:function(a){var t=this.b
if(t==null)return!1
return this.bR(t,a)},
i:function(a,b){var t,s,r,q
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a9(t,b)
r=s==null?null:s.b
return r}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)return
s=this.a9(q,b)
r=s==null?null:s.b
return r}else return this.cp(b)},
cp:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aW(t,this.be(a))
r=this.bf(s,a)
if(r<0)return
return s[r].b},
p:function(a,b,c){var t,s
if(typeof b==="string"){t=this.b
if(t==null){t=this.av()
this.b=t}this.aP(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.av()
this.c=s}this.aP(s,b,c)}else this.cq(b,c)},
cq:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=this.av()
this.d=t}s=this.be(a)
r=this.aW(t,s)
if(r==null)this.aA(t,s,[this.aw(a,b)])
else{q=this.bf(r,a)
if(q>=0)r[q].b=b
else r.push(this.aw(a,b))}},
cC:function(a,b){var t
if(this.af(a))return this.i(0,a)
t=b.$0()
this.p(0,a,t)
return t},
bb:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aX()}},
a2:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(P.aM(this))
t=t.c}},
aP:function(a,b,c){var t=this.a9(a,b)
if(t==null)this.aA(a,b,this.aw(b,c))
else t.b=c},
aX:function(){this.r=this.r+1&67108863},
aw:function(a,b){var t,s
t=new H.c7(a,b)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aX()
return t},
be:function(a){return J.eR(a)&0x3ffffff},
bf:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.x(a[s].a,b))return s
return-1},
h:function(a){return P.eC(this)},
a9:function(a,b){return a[b]},
aW:function(a,b){return a[b]},
aA:function(a,b,c){a[b]=c},
bS:function(a,b){delete a[b]},
bR:function(a,b){return this.a9(a,b)!=null},
av:function(){var t=Object.create(null)
this.aA(t,"<non-identifier-key>",t)
this.bS(t,"<non-identifier-key>")
return t}}
H.c5.prototype={
$1:function(a){return this.a.i(0,a)},
$S:function(){var t=this.a
return{func:1,ret:H.m(t,1),args:[H.m(t,0)]}}}
H.c7.prototype={}
H.c8.prototype={
gj:function(a){return this.a.a},
gu:function(a){var t,s
t=this.a
s=new H.c9(t,t.r)
s.c=t.e
return s}}
H.c9.prototype={
gl:function(){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.e(P.aM(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.e8.prototype={
$1:function(a){return this.a(a)},
$S:4}
H.e9.prototype={
$2:function(a,b){return this.a(a,b)},
$S:9}
H.ea.prototype={
$1:function(a){return this.a(a)}}
H.c4.prototype={
h:function(a){return"RegExp/"+this.a+"/"},
cl:function(a){var t
if(typeof a!=="string")H.C(H.a1(a))
t=this.b.exec(a)
if(t==null)return
return new H.dE(this,t)}}
H.dE.prototype={}
H.au.prototype={}
H.b2.prototype={
gj:function(a){return a.length},
$isey:1,
$asey:function(){}}
H.at.prototype={
i:function(a,b){H.a_(b,a,a.length)
return a[b]},
$isr:1,
$asr:function(){return[P.ag]},
$asQ:function(){return[P.ag]},
$isz:1,
$asz:function(){return[P.ag]}}
H.b3.prototype={$isr:1,
$asr:function(){return[P.h]},
$asQ:function(){return[P.h]},
$isz:1,
$asz:function(){return[P.h]}}
H.cC.prototype={
i:function(a,b){H.a_(b,a,a.length)
return a[b]}}
H.cD.prototype={
i:function(a,b){H.a_(b,a,a.length)
return a[b]}}
H.cE.prototype={
i:function(a,b){H.a_(b,a,a.length)
return a[b]}}
H.cF.prototype={
i:function(a,b){H.a_(b,a,a.length)
return a[b]}}
H.cG.prototype={
i:function(a,b){H.a_(b,a,a.length)
return a[b]}}
H.b4.prototype={
gj:function(a){return a.length},
i:function(a,b){H.a_(b,a,a.length)
return a[b]}}
H.cH.prototype={
gj:function(a){return a.length},
i:function(a,b){H.a_(b,a,a.length)
return a[b]}}
H.az.prototype={}
H.aA.prototype={}
H.aB.prototype={}
H.aC.prototype={}
P.dd.prototype={
$1:function(a){var t,s
t=this.a
s=t.a
t.a=null
s.$0()},
$S:5}
P.dc.prototype={
$1:function(a){var t,s
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)}}
P.de.prototype={
$0:function(){this.a.$0()}}
P.df.prototype={
$0:function(){this.a.$0()}}
P.bq.prototype={
bI:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aH(new P.dT(this,b),0),a)
else throw H.e(P.F("`setTimeout()` not found."))},
bJ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aH(new P.dS(this,a,Date.now(),b),0),a)
else throw H.e(P.F("Periodic timer."))},
a1:function(){if(self.setTimeout!=null){var t=this.b
if(t==null)return
if(this.a)self.clearTimeout(t)
else self.clearInterval(t)
this.b=null}else throw H.e(P.F("Canceling a timer."))}}
P.dT.prototype={
$0:function(){var t=this.a
t.b=null
t.c=1
this.b.$0()}}
P.dS.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.c+1
r=this.b
if(r>0){q=Date.now()-this.c
if(q>(s+1)*r)s=C.a.aM(q,r)}t.c=s
this.d.$1(t)}}
P.d9.prototype={
V:function(a,b){var t
if(this.b)this.a.V(0,b)
else{t=H.af(b,"$ist",this.$ti,"$ast")
if(t){t=this.a
b.ak(t.gcf(t),t.gci(),-1)}else P.ei(new P.db(this,b))}},
W:function(a,b){if(this.b)this.a.W(a,b)
else P.ei(new P.da(this,a,b))}}
P.db.prototype={
$0:function(){this.a.a.V(0,this.b)}}
P.da.prototype={
$0:function(){this.a.a.W(this.b,this.c)}}
P.dZ.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:6}
P.e_.prototype={
$2:function(a,b){this.a.$2(1,new H.ao(a,b))},
$S:10}
P.e3.prototype={
$2:function(a,b){this.a(a,b)},
$S:11}
P.dh.prototype={}
P.di.prototype={
ax:function(){},
ay:function(){}}
P.ab.prototype={
gaa:function(){return this.c<4},
b4:function(a){var t,s
t=a.fr
s=a.dy
if(t==null)this.d=s
else t.dy=s
if(s==null)this.e=t
else s.fr=t
a.fr=a
a.dy=a},
b6:function(a,b,c,d){var t,s,r
if((this.c&4)!==0){if(c==null)c=P.fJ()
t=new P.bk($.f,0,c)
t.c0()
return t}t=$.f
s=new P.di(0,this,t,d?1:0)
s.aN(a,b,c,d)
s.fr=s
s.dy=s
s.dx=this.c&1
r=this.e
this.e=s
s.dy=null
s.fr=r
if(r==null)this.d=s
else r.dy=s
if(this.d===s)P.bu(this.a)
return s},
b1:function(a){var t
if(a.dy===a)return
t=a.dx
if((t&2)!==0)a.dx=t|4
else{this.b4(a)
if((this.c&2)===0&&this.d==null)this.as()}return},
b2:function(a){},
b3:function(a){},
a6:function(){if((this.c&4)!==0)return new P.E("Cannot add new events after calling close")
return new P.E("Cannot add new events while doing an addStream")},
bU:function(a){var t,s,r,q
t=this.c
if((t&2)!==0)throw H.e(P.cT("Cannot fire new event. Controller is already firing an event"))
s=this.d
if(s==null)return
r=t&1
this.c=t^3
for(;s!=null;){t=s.dx
if((t&1)===r){s.dx=t|2
a.$1(s)
t=s.dx^=1
q=s.dy
if((t&4)!==0)this.b4(s)
s.dx&=4294967293
s=q}else s=s.dy}this.c&=4294967293
if(this.d==null)this.as()},
as:function(){if((this.c&4)!==0&&this.r.a===0)this.r.aR(null)
P.bu(this.b)},
gK:function(){return this.c}}
P.dQ.prototype={
gaa:function(){return P.ab.prototype.gaa.call(this)&&(this.c&2)===0},
a6:function(){if((this.c&2)!==0)return new P.E("Cannot fire new event. Controller is already firing an event")
return this.bG()},
J:function(a){var t=this.d
if(t==null)return
if(t===this.e){this.c|=2
t.aO(a)
this.c&=4294967293
if(this.d==null)this.as()
return}this.bU(new P.dR(a))}}
P.dR.prototype={
$1:function(a){a.aO(this.a)}}
P.t.prototype={}
P.bU.prototype={
$0:function(){var t,s,r
try{this.a.a8(null)}catch(r){t=H.H(r)
s=H.B(r)
P.hG(this.a,t,s)}}}
P.bg.prototype={
W:function(a,b){if(a==null)a=new P.av()
if(this.a.a!==0)throw H.e(P.cT("Future already completed"))
$.f.toString
this.B(a,b)},
cj:function(a){return this.W(a,null)}}
P.bp.prototype={
V:function(a,b){var t=this.a
if(t.a!==0)throw H.e(P.cT("Future already completed"))
t.a8(b)},
cg:function(a){return this.V(a,null)},
B:function(a,b){this.a.B(a,b)}}
P.bl.prototype={
cz:function(a){if(this.c!==6)return!0
return this.b.b.aK(this.d,a.a)},
cm:function(a){var t,s
t=this.e
s=this.b.b
if(H.bw(t,{func:1,args:[P.j,P.D]}))return s.cI(t,a.a,a.b)
else return s.aK(t,a.a)}}
P.o.prototype={
ak:function(a,b,c){var t=$.f
if(t!==C.c){t.toString
if(b!=null)b=P.hL(b,t)}return this.aB(a,b,c)},
cM:function(a,b){return this.ak(a,null,b)},
aB:function(a,b,c){var t=new P.o(0,$.f,[c])
this.ar(new P.bl(t,b==null?1:3,a,b))
return t},
bp:function(a){var t,s
t=$.f
s=new P.o(0,t,this.$ti)
if(t!==C.c)t.toString
this.ar(new P.bl(s,8,a,null))
return s},
ar:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){t=this.c
s=t.a
if(s<4){t.ar(a)
return}this.a=s
this.c=t.c}t=this.b
t.toString
P.a0(null,null,t,new P.dp(this,a))}},
b0:function(a){var t,s,r,q,p,o
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){s=this.c
o=s.a
if(o<4){s.b0(a)
return}this.a=o
this.c=s.c}t.a=this.ac(a)
s=this.b
s.toString
P.a0(null,null,s,new P.dx(t,this))}},
ab:function(){var t=this.c
this.c=null
return this.ac(t)},
ac:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
a8:function(a){var t,s,r
t=this.$ti
s=H.af(a,"$ist",t,"$ast")
if(s){t=H.af(a,"$iso",t,null)
if(t)P.ds(a,this)
else P.fx(a,this)}else{r=this.ab()
this.a=4
this.c=a
P.ac(this,r)}},
B:function(a,b){var t=this.ab()
this.a=8
this.c=new P.a3(a,b)
P.ac(this,t)},
bQ:function(a){return this.B(a,null)},
aR:function(a){var t=H.af(a,"$ist",this.$ti,"$ast")
if(t){this.bO(a)
return}this.a=1
t=this.b
t.toString
P.a0(null,null,t,new P.dr(this,a))},
bO:function(a){var t=H.af(a,"$iso",this.$ti,null)
if(t){if(a.a===8){this.a=1
t=this.b
t.toString
P.a0(null,null,t,new P.dw(this,a))}else P.ds(a,this)
return}P.fx(a,this)},
bL:function(a,b){var t
this.a=1
t=this.b
t.toString
P.a0(null,null,t,new P.dq(this,a,b))},
$ist:1,
gK:function(){return this.a},
gc_:function(){return this.c}}
P.dp.prototype={
$0:function(){P.ac(this.a,this.b)}}
P.dx.prototype={
$0:function(){P.ac(this.b,this.a.a)}}
P.dt.prototype={
$1:function(a){var t=this.a
t.a=0
t.a8(a)},
$S:5}
P.du.prototype={
$2:function(a,b){this.a.B(a,b)},
$1:function(a){return this.$2(a,null)},
$S:13}
P.dv.prototype={
$0:function(){this.a.B(this.b,this.c)}}
P.dr.prototype={
$0:function(){var t,s
t=this.a
s=t.ab()
t.a=4
t.c=this.b
P.ac(t,s)}}
P.dw.prototype={
$0:function(){P.ds(this.b,this.a)}}
P.dq.prototype={
$0:function(){this.a.B(this.b,this.c)}}
P.dA.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{q=this.c
t=q.b.b.bl(q.d)}catch(p){s=H.H(p)
r=H.B(p)
if(this.d){q=this.a.a.c.a
o=s
o=q==null?o==null:q===o
q=o}else q=!1
o=this.b
if(q)o.b=this.a.a.c
else o.b=new P.a3(s,r)
o.a=!0
return}if(!!J.q(t).$ist){if(t instanceof P.o&&t.gK()>=4){if(t.gK()===8){q=this.b
q.b=t.gc_()
q.a=!0}return}n=this.a.a
q=this.b
q.b=t.cM(new P.dB(n),null)
q.a=!1}}}
P.dB.prototype={
$1:function(a){return this.a},
$S:14}
P.dz.prototype={
$0:function(){var t,s,r,q
try{r=this.b
this.a.b=r.b.b.aK(r.d,this.c)}catch(q){t=H.H(q)
s=H.B(q)
r=this.a
r.b=new P.a3(t,s)
r.a=!0}}}
P.dy.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.cz(t)&&q.e!=null){p=this.b
p.b=q.cm(t)
p.a=!1}}catch(o){s=H.H(o)
r=H.B(o)
q=this.a.a.c
p=q.a
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q
else m.b=new P.a3(s,r)
m.a=!0}}}
P.be.prototype={}
P.ba.prototype={
gj:function(a){var t,s
t={}
s=new P.o(0,$.f,[P.h])
t.a=0
this.bi(new P.cW(t,this),!0,new P.cX(t,s),s.gbP())
return s}}
P.cW.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,ret:P.k,args:[H.eM(this.b,"ba",0)]}}}
P.cX.prototype={
$0:function(){this.b.a8(this.a.a)}}
P.cV.prototype={}
P.dL.prototype={
gbY:function(){if((this.b&8)===0)return this.a
return this.a.gal()},
bT:function(){var t,s
if((this.b&8)===0){t=this.a
if(t==null){t=new P.bo(0)
this.a=t}return t}s=this.a
s.gal()
return s.gal()},
gc5:function(){if((this.b&8)!==0)return this.a.gal()
return this.a},
bM:function(){if((this.b&4)!==0)return new P.E("Cannot add event after closing")
return new P.E("Cannot add event while adding a stream")},
C:function(a,b){var t=this.b
if(t>=4)throw H.e(this.bM())
if((t&1)!==0)this.J(b)
else if((t&3)===0)this.bT().C(0,new P.ay(b))},
b6:function(a,b,c,d){var t,s,r,q
if((this.b&3)!==0)throw H.e(P.cT("Stream has already been listened to."))
t=$.f
s=new P.bh(this,t,d?1:0)
s.aN(a,b,c,d)
r=this.gbY()
t=this.b|=1
if((t&8)!==0){q=this.a
q.sal(s)
q.cG()}else this.a=s
s.c3(r)
s.bV(new P.dN(this))
return s},
b1:function(a){var t,s,r,q,p,o
t=null
if((this.b&8)!==0)t=this.a.a1()
this.a=null
this.b=this.b&4294967286|2
q=this.r
if(q!=null)if(t==null)try{t=q.$0()}catch(p){s=H.H(p)
r=H.B(p)
o=new P.o(0,$.f,[null])
o.bL(s,r)
t=o}else t=t.bp(q)
q=new P.dM(this)
if(t!=null)t=t.bp(q)
else q.$0()
return t},
b2:function(a){if((this.b&8)!==0)C.t.cP(this.a)
P.bu(this.e)},
b3:function(a){if((this.b&8)!==0)this.a.cG()
P.bu(this.f)},
gK:function(){return this.b}}
P.dN.prototype={
$0:function(){P.bu(this.a.d)}}
P.dM.prototype={
$0:function(){var t=this.a.c
if(t!=null&&t.a===0)t.aR(null)}}
P.dg.prototype={
J:function(a){this.gc5().aQ(new P.ay(a))}}
P.bf.prototype={}
P.S.prototype={
gk:function(a){return(H.a9(this.a)^892482866)>>>0},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof P.S))return!1
return b.a===this.a}}
P.bh.prototype={
aY:function(){return this.x.b1(this)},
ax:function(){this.x.b2(this)},
ay:function(){this.x.b3(this)}}
P.dj.prototype={
aN:function(a,b,c,d){var t,s
t=this.d
t.toString
this.a=a
s=b==null?P.hT():b
if(H.bw(s,{func:1,ret:-1,args:[P.j,P.D]}))this.b=t.aJ(s)
else if(H.bw(s,{func:1,ret:-1,args:[P.j]}))this.b=s
else H.C(P.eq("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
this.c=c==null?P.fJ():c},
c3:function(a){if(a==null)return
this.r=a
if(a.c!=null){this.e=(this.e|64)>>>0
a.an(this)}},
a1:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.bN()
t=this.f
return t==null?$.$get$et():t},
bN:function(){var t,s
t=(this.e|8)>>>0
this.e=t
if((t&64)!==0){s=this.r
if(s.a===1)s.a=3}if((t&32)===0)this.r=null
this.f=this.aY()},
aO:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.J(a)
else this.aQ(new P.ay(a))},
ax:function(){},
ay:function(){},
aY:function(){return},
aQ:function(a){var t,s
t=this.r
if(t==null){t=new P.bo(0)
this.r=t}t.C(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.an(this)}},
J:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.bn(this.a,a)
this.e=(this.e&4294967263)>>>0
this.aS((t&4)!==0)},
bV:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.aS((t&4)!==0)},
aS:function(a){var t,s,r
t=this.e
if((t&64)!==0&&this.r.c==null){t=(t&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){s=this.r
s=s==null||s.c==null}else s=!1
else s=!1
if(s){t=(t&4294967291)>>>0
this.e=t}}for(;!0;a=r){if((t&8)!==0){this.r=null
return}r=(t&4)!==0
if(a===r)break
this.e=(t^32)>>>0
if(r)this.ax()
else this.ay()
t=(this.e&4294967263)>>>0
this.e=t}if((t&64)!==0&&t<128)this.r.an(this)},
gK:function(){return this.e}}
P.dO.prototype={
bi:function(a,b,c,d){return this.a.b6(a,d,c,!0===b)},
a3:function(a){return this.bi(a,null,null,null)}}
P.dk.prototype={
gaI:function(){return this.a},
saI:function(a){return this.a=a}}
P.ay.prototype={
cB:function(a){a.J(this.b)}}
P.dF.prototype={
an:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.ei(new P.dG(this,a))
this.a=1},
gK:function(){return this.a}}
P.dG.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gaI()
t.b=q
if(q==null)t.c=null
r.cB(this.b)}}
P.bo.prototype={
C:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.saI(b)
this.c=b}}}
P.bk.prototype={
c0:function(){if((this.b&2)!==0)return
var t=this.a
t.toString
P.a0(null,null,t,this.gc1())
this.b=(this.b|2)>>>0},
a1:function(){return $.$get$et()},
c2:function(){var t=(this.b&4294967293)>>>0
this.b=t
if(t>=4)return
this.b=(t|1)>>>0
this.a.bm(this.c)},
gK:function(){return this.b}}
P.dP.prototype={}
P.cZ.prototype={}
P.a3.prototype={
h:function(a){return H.b(this.a)},
$isa5:1}
P.dV.prototype={}
P.e1.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.av()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.h(0)
throw r}}
P.dH.prototype={
bm:function(a){var t,s,r
try{if(C.c===$.f){a.$0()
return}P.fE(null,null,this,a)}catch(r){t=H.H(r)
s=H.B(r)
P.aF(null,null,this,t,s)}},
cL:function(a,b){var t,s,r
try{if(C.c===$.f){a.$1(b)
return}P.fF(null,null,this,a,b)}catch(r){t=H.H(r)
s=H.B(r)
P.aF(null,null,this,t,s)}},
bn:function(a,b){return this.cL(a,b,null)},
cd:function(a){return new P.dJ(this,a)},
cc:function(a){return this.cd(a,null)},
aE:function(a){return new P.dI(this,a)},
ba:function(a,b){return new P.dK(this,a,b)},
cH:function(a){if($.f===C.c)return a.$0()
return P.fE(null,null,this,a)},
bl:function(a){return this.cH(a,null)},
cK:function(a,b){if($.f===C.c)return a.$1(b)
return P.fF(null,null,this,a,b)},
aK:function(a,b){return this.cK(a,b,null,null)},
cJ:function(a,b,c){if($.f===C.c)return a.$2(b,c)
return P.hM(null,null,this,a,b,c)},
cI:function(a,b,c){return this.cJ(a,b,c,null,null,null)},
cD:function(a){return a},
aJ:function(a){return this.cD(a,null,null,null)}}
P.dJ.prototype={
$0:function(){return this.a.bl(this.b)}}
P.dI.prototype={
$0:function(){return this.a.bm(this.b)}}
P.dK.prototype={
$1:function(a){return this.a.bn(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.d4.prototype={
gj:function(a){return this.a.length},
i:function(a,b){return this.a[b]}}
P.cb.prototype={
$2:function(a,b){this.a.p(0,a,b)},
$S:7}
P.cc.prototype={$isr:1,$isz:1}
P.Q.prototype={
gu:function(a){return new H.aZ(a,this.gj(a),0)},
N:function(a,b){return this.i(a,b)},
A:function(a,b){var t=H.n([],[H.hY(this,a,"Q",0)])
C.b.sj(t,C.a.A(this.gj(a),C.t.gj(b)))
C.b.a5(t,0,this.gj(a),a)
C.b.a5(t,this.gj(a),t.length,b)
return t},
h:function(a){return P.f8(a,"[","]")}}
P.ck.prototype={}
P.cl.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.b(a)
t.a=s+": "
t.a+=H.b(b)},
$S:7}
P.cm.prototype={
gj:function(a){var t=this.gbg()
return t.gj(t)},
h:function(a){return P.eC(this)}}
P.dU.prototype={}
P.cn.prototype={
gj:function(a){var t=this.a
return t.gj(t)},
h:function(a){return P.eC(this.a)}}
P.d5.prototype={}
P.bm.prototype={}
P.br.prototype={}
P.p.prototype={}
P.aN.prototype={
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aN))return!1
return this.a===b.a&&this.b===b.b},
gk:function(a){var t=this.a
return(t^C.a.b5(t,30))&1073741823},
h:function(a){var t,s,r,q,p,o,n
t=P.h8(H.ho(this))
s=P.aO(H.hn(this))
r=P.aO(H.hl(this))
q=P.aO(H.ff(this))
p=P.aO(H.fg(this))
o=P.aO(H.fh(this))
n=P.h9(H.hm(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n}}
P.ag.prototype={}
P.K.prototype={
A:function(a,b){return new P.K(C.a.A(this.a,b.gaU()))},
S:function(a,b){return C.a.S(this.a,b.gaU())},
R:function(a,b){return C.a.R(this.a,b.gaU())},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.K))return!1
return this.a===b.a},
gk:function(a){return this.a&0x1FFFFFFF},
h:function(a){var t,s,r,q,p
t=new P.bQ()
s=this.a
if(s<0)return"-"+new P.K(0-s).h(0)
r=t.$1(C.a.L(s,6e7)%60)
q=t.$1(C.a.L(s,1e6)%60)
p=new P.bP().$1(s%1e6)
return""+C.a.L(s,36e8)+":"+H.b(r)+":"+H.b(q)+"."+H.b(p)}}
P.bP.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.bQ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.a5.prototype={}
P.av.prototype={
h:function(a){return"Throw of null."}}
P.M.prototype={
gau:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gat:function(){return""},
h:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.b(t)
q=this.gau()+s+r
if(!this.a)return q
p=this.gat()
o=P.f4(this.b)
return q+p+": "+H.b(o)}}
P.aw.prototype={
gau:function(){return"RangeError"},
gat:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.b(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.b(t)
else if(r>t)s=": Not in range "+H.b(t)+".."+H.b(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.b(t)}return s}}
P.c_.prototype={
gau:function(){return"RangeError"},
gat:function(){if(J.eQ(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.b(t)},
gj:function(a){return this.f}}
P.d6.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.d1.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.E.prototype={
h:function(a){return"Bad state: "+this.a}}
P.bL.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.f4(t))+"."}}
P.b9.prototype={
h:function(a){return"Stack Overflow"},
$isa5:1}
P.bN.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.dn.prototype={
h:function(a){return"Exception: "+this.a}}
P.bT.prototype={
h:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.b(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.d.aq(r,0,75)+"..."
return s+"\n"+r}}
P.aR.prototype={}
P.h.prototype={}
P.a6.prototype={
gj:function(a){var t,s
t=this.gu(this)
for(s=0;t.m();)++s
return s},
gD:function(a){var t=this.gu(this)
if(!t.m())throw H.e(H.eu())
return t.gl()},
N:function(a,b){var t,s,r
if(b<0)H.C(P.R(b,0,null,"index",null))
for(t=this.gu(this),s=0;t.m();){r=t.gl()
if(b===s)return r;++s}throw H.e(P.f7(b,this,"index",null,s))},
h:function(a){return P.he(this,"(",")")}}
P.c2.prototype={}
P.z.prototype={$isr:1}
P.k.prototype={
gk:function(a){return P.j.prototype.gk.call(this,this)},
h:function(a){return"null"}}
P.U.prototype={}
P.j.prototype={constructor:P.j,$isj:1,
q:function(a,b){return this===b},
gk:function(a){return H.a9(this)},
h:function(a){return"Instance of '"+H.b5(this)+"'"},
toString:function(){return this.h(this)}}
P.D.prototype={}
P.l.prototype={}
P.ax.prototype={
gj:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gU:function(){return this.a}}
W.d.prototype={}
W.bz.prototype={
h:function(a){return String(a)}}
W.bA.prototype={
h:function(a){return String(a)}}
W.W.prototype={
gj:function(a){return a.length}}
W.a4.prototype={
bu:function(a,b){var t=a.getPropertyValue(this.a7(a,b))
return t==null?"":t},
a7:function(a,b){var t,s
t=$.$get$eY()
s=t[b]
if(typeof s==="string")return s
s=this.c6(a,b)
t[b]=s
return s},
c6:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.ha()+b
if(t in a)return t
return b},
az:function(a,b,c,d){a.setProperty(b,c,d)},
gah:function(a){return a.height},
gai:function(a){return a.left},
gaL:function(a){return a.top},
gam:function(a){return a.width},
gj:function(a){return a.length}}
W.bM.prototype={
gai:function(a){return this.bu(a,"left")}}
W.bO.prototype={
h:function(a){return String(a)}}
W.aP.prototype={
h:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
q:function(a,b){var t
if(b==null)return!1
t=H.af(b,"$isb6",[P.U],"$asb6")
if(!t)return!1
t=J.eL(b)
return a.left===t.gai(b)&&a.top===t.gaL(b)&&a.width===t.gam(b)&&a.height===t.gah(b)},
gk:function(a){return W.fy(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gah:function(a){return a.height},
gai:function(a){return a.left},
gaL:function(a){return a.top},
gam:function(a){return a.width},
$isb6:1,
$asb6:function(){return[P.U]}}
W.c.prototype={
h:function(a){return a.localName}}
W.a.prototype={$isa:1}
W.v.prototype={
aD:function(a,b,c,d){if(c!=null)this.bK(a,b,c,!1)},
bK:function(a,b,c,d){return a.addEventListener(b,H.aH(c,1),!1)}}
W.bS.prototype={
gj:function(a){return a.length}}
W.cd.prototype={
h:function(a){return String(a)}}
W.cB.prototype={
aD:function(a,b,c,d){if(b==="message")a.start()
this.bD(a,b,c,!1)}}
W.A.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.bE(a):t}}
W.cS.prototype={
gj:function(a){return a.length}}
W.bj.prototype={
h:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
q:function(a,b){var t
if(b==null)return!1
t=H.af(b,"$isb6",[P.U],"$asb6")
if(!t)return!1
t=J.eL(b)
return a.left===t.gai(b)&&a.top===t.gaL(b)&&a.width===t.gam(b)&&a.height===t.gah(b)},
gk:function(a){return W.fy(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gah:function(a){return a.height},
gam:function(a){return a.width}}
W.dl.prototype={
c8:function(){var t=this.d
if(t!=null&&this.a<=0)J.h1(this.b,this.c,t,!1)}}
W.dm.prototype={
$1:function(a){return this.a.$1(a)}}
W.bi.prototype={}
P.dC.prototype={
aj:function(a){if(a<=0||a>4294967296)throw H.e(P.hq("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
R.N.prototype={
gX:function(){return this.a.length===0?0:this.G(0).a},
gcs:function(){var t,s,r
if(this.a.length>60)for(t=1;t<=30;++t){r=0
while(!0){if(!(r<2)){s=!0
break}if(this.G(r).f!==this.G(r+t*r).f){s=!1
break}++r}if(s){$.$get$eH().E(C.k,"Stable scene detected! Repeating pattern "+t,null,null)
return!0}}return!1},
gb9:function(){if(this.a.length===0)return 100
if(this.G(0).f===0)return 0
return C.e.v(this.G(0).f/(this.c*this.d)*100)},
G:function(a){var t,s
t=this.a
s=t.length-1
if(s<a)return
return t[s-a]},
O:function(){return this.G(0)},
cA:function(a){var t,s,r,q
if(this.a.length<2||a){t=this.O().d
s=H.m(this,1)
return A.eW(this.c,new H.as(t,new R.bD(this),[H.m(t,0),s]),s)}r=this.O().d
q=this.G(1).d
t=H.m(this,1)
return A.eW(this.c,P.fa(J.ak(q.c),new R.bE(this,q,r),!0,t),t)},
bj:function(a){var t,s
t=this.O()
t=t==null?null:t.a
if(t==null)t=0
s=this.a
s.push(Y.hd(t+1,this.c,this.d,a,this.e.P(a)))
t=s.length
if(t>this.b){P.fi(0,1,t,null,null,null)
s.splice(0,1)}return},
cb:function(a){var t,s,r,q,p,o
t=this.c
s=this.d
r=A.an(t,s,null,H.m(this,0))
for(q=this.e,p=0;p<t;++p)for(o=0;o<s;++o)if(this.O().e.bs(p,o,q.a))r.t(p,o,q.a0(p,o,this.O().d),q.a)
else r.t(p,o,this.O().d.n(p,o,q.a,null),q.a)
this.bj(r)},
ca:function(){return this.cb(null)},
a_:function(a){var t,s
t=this.c
s=this.d
$.$get$eH().E(C.k,"Applying generator "+H.b(t)+"x"+H.b(s),null,null)
this.bj(a.br(t,s))}}
R.bD.prototype={
$1:function(a){return this.a.f.i(0,a)},
$S:function(){var t=this.a
return{func:1,ret:H.m(t,1),args:[H.m(t,0)]}}}
R.bE.prototype={
$1:function(a){var t,s
t=this.c.c
s=J.ah(t)
if(J.x(J.en(this.b.c,a),s.i(t,a)))t=null
else t=s.i(t,a)==null?null:this.a.f.i(0,s.i(t,a))
return t}}
A.V.prototype={
gj:function(a){return J.ak(this.c)},
i:function(a,b){return J.en(this.c,b)},
ce:function(a){var t,s,r,q,p,o
for(t=a.c,s=J.ah(t),r=s.gj(t),q=this.c,p=J.e6(q),o=0;o<r;++o)if(s.i(t,o)!=null)p.p(q,o,s.i(t,o))},
ae:function(a,b,c){var t
if(a<b)t=a+c
else t=a>=c?a-c:a
return t},
n:function(a,b,c,d){var t,s
if(c===!0){t=this.ae(a,0,this.a)
s=this.ae(b,0,this.b)}else{if(a<0||a>this.a-1||b<0||b>this.b-1)return d
s=b
t=a}return J.en(this.c,t+s*this.a)},
H:function(a,b){return this.n(a,b,null,null)},
bs:function(a,b,c){return this.n(a,b,c,null)},
t:function(a,b,c,d){var t,s
if(d===!0){t=this.ae(a,0,this.a)
s=this.ae(b,0,this.b)}else{if(a<0||a>this.a-1||b<0||b>this.b-1)return
s=b
t=a}J.h0(this.c,t+s*this.a,c)},
b8:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
r=A.an(t,s,!1,P.p)
for(q=c!=null,p=0;p<s;p=n)for(o=p-1,n=p+1,m=0;m<t;++m)if(C.b.M(a,this.n(m,p,b,null)))for(l=m-1,k=m+1,j=o;j<=n;++j)for(i=l;i<=k;++i)r.t(i,j,!0,b)
else if(q&&C.b.M(c,this.n(m,p,b,null)))r.t(m,p,!0,b)
return r},
aC:function(a,b){return this.b8(a,b,null,null)},
c9:function(a,b,c){return this.b8(a,b,c,null)},
bt:function(a,b,c,d,e){var t,s,r,q
switch(e){case"moore":default:t=a-1
s=b-1
r=a+1
q=b+1
return H.n([this.n(t,s,c,d),this.n(a,s,c,d),this.n(r,s,c,d),this.n(t,b,c,d),this.n(r,b,c,d),this.n(t,q,c,d),this.n(a,q,c,d),this.n(r,q,c,d)],this.$ti)}},
Y:function(a,b,c,d){return this.bt(a,b,c,d,"moore")}}
Y.aS.prototype={}
Y.bZ.prototype={
$1:function(a){return a}}
S.bI.prototype={}
K.u.prototype={
h:function(a){return this.b}}
K.cp.prototype={
br:function(a,b){var t,s,r,q,p,o,n,m
t=A.an(a,b,null,H.m(this,0))
s=-C.e.v(a/2)
r=-C.e.v(b/2)
for(q=this.c,p=this.b,o=0;o<a;++o)for(n=o+s,m=0;m<b;++m)t.t(o,m,$.$get$fd().i(0,this.a).$2(n,(m+r)*-1)?p:q,!0)
return t}}
K.cq.prototype={
$2:function(a,b){return C.o.aj(2)===0},
$S:0}
K.cr.prototype={
$2:function(a,b){return Math.cos(a*10)>Math.sin(b*10)},
$S:0}
K.cs.prototype={
$2:function(a,b){return b===0||C.a.I(a,b)===0},
$S:0}
K.ct.prototype={
$2:function(a,b){return b>0&&(C.a.I(a,b)&C.a.F((a^b)>>>0,32))>>>0>2},
$S:0}
K.cu.prototype={
$2:function(a,b){return C.a.I(C.a.F((a^b)>>>0,32),8)===0},
$S:0}
K.cv.prototype={
$2:function(a,b){return C.a.I(Math.abs(C.a.F((a^b)>>>0,32)),8)<4},
$S:0}
K.cw.prototype={
$2:function(a,b){return C.a.F((a^b)>>>0,32)>~a>>>0&&b<=0},
$S:0}
K.cx.prototype={
$2:function(a,b){return C.a.F((a^b)>>>0,32)+a>=0},
$S:0}
K.cy.prototype={
$2:function(a,b){return C.a.F((a^b)>>>0,32)+a-b===0},
$S:0}
K.cz.prototype={
$2:function(a,b){return C.a.I(C.a.F((a^b)>>>0,32)+a-b,1024)===0},
$S:0}
K.cA.prototype={
$2:function(a,b){var t=(a^b)>>>0
if(C.a.F(t,32)+b-a===0)return!0
return(t+b-a)%b===0},
$S:0}
E.b7.prototype={
h:function(a){return this.b}}
E.bJ.prototype={}
B.bK.prototype={
P:function(a){return A.an(a.a,a.b,!0,P.p)}}
K.I.prototype={
h:function(a){return this.b}}
K.bG.prototype={
P:function(a){var t=[K.I]
return a.c9(H.n([C.h],t),this.a,H.n([C.l],t))},
a0:function(a,b,c){var t,s
t=c.H(a,b)
s=c.Y(a,b,this.a,this.b)
switch(t){case C.h:return C.l
case C.f:if(J.x(C.b.ag(s,0,new K.bH(this),null),2))return C.h
break
case C.l:return C.f}return t}}
K.bH.prototype={
$2:function(a,b){return J.aI(a,this.a.d.i(0,b))},
$S:15}
X.y.prototype={
h:function(a){return this.b}}
X.bV.prototype={
P:function(a){return a.aC(H.n([C.m,C.j],[X.y]),this.a)},
a0:function(a,b,c){var t,s,r
t=c.H(a,b)
s=C.b.ag(c.Y(a,b,this.a,this.b),0,new X.bY(this),null)
switch(t){case C.j:case C.m:r=J.eK(s)
if(r.S(s,2))return C.p
if(C.b.M(H.n([2,3],[P.h]),s))return C.j
if(r.R(s,3))return C.q
break
case C.n:case C.p:case C.q:if(J.x(s,3))return C.m
break}return t}}
X.bY.prototype={
$2:function(a,b){return J.aI(a,this.a.d.i(0,b))},
$S:16}
L.bW.prototype={
P:function(a){return a.aC(H.n([!0],[P.p]),this.a)},
a0:function(a,b,c){var t,s
t=c.H(a,b)
s=C.b.ag(c.Y(a,b,this.a,this.b),0,new L.bX(),null)
if(t&&J.eQ(s,2))return!1
else if(t&&C.b.M(H.n([2,3],[P.h]),s))return!0
else if(t&&J.eP(s,3))return!1
else if(!t&&J.x(s,3))return!0
else return!1}}
L.bX.prototype={
$2:function(a,b){return J.aI(a,b?1:0)},
$S:17}
B.cj.prototype={
P:function(a){var t,s,r,q,p,o,n,m
t=a.a
s=a.b
r=A.an(t,s,!1,P.p)
for(q=0;q<s;q=o)for(p=q-1,o=q+1,n=0;n<t;n=m){m=n+1
if(!J.x(a.H(n,q),a.n(m,q,this.a,this.b))){r.t(n,q,!0,this.a)
r.t(m,p,!0,this.a)
r.t(n,q,!0,this.a)
r.t(m,q,!0,this.a)
r.t(n,o,!0,this.a)
r.t(m,o,!0,this.a)}}return r},
a0:function(a,b,c){var t,s,r,q,p
t=P.ca([!0,0,!1,0],P.p,P.h)
s=c.Y(a,b,this.a,this.b)
for(r=0;r<8;++r){q=s[r]
t.p(0,q,J.aI(t.i(0,q),1))}q=t.i(0,!1)
p=t.i(0,!0)
if(q==null?p==null:q===p)return C.o.aj(2)===1
else return J.eP(t.i(0,!0),t.i(0,!1))}}
Y.cg.prototype={
P:function(a){return a.aC(P.fa(this.f,new Y.ci(),!1,P.h),this.a)},
a0:function(a,b,c){var t,s,r
t=c.H(a,b)
s=C.b.ag(c.Y(a,b,!0,null),0,new Y.ch(),null)
switch(t){case 0:if(C.b.M(this.e,s))return 1
return 0
default:if(t===1&&C.b.M(this.d,s))return 1
r=t+1
if(r>=this.f)return 0
return r}}}
Y.ci.prototype={
$1:function(a){return a+1}}
Y.ch.prototype={
$2:function(a,b){return J.aI(a,b===1?1:0)},
$S:18}
T.b8.prototype={
h:function(a){return this.b}}
T.cN.prototype={
gX:function(){var t=this.a
t=t.ga4(t)
return t.gD(t).gX()},
Z:function(a,b){return this.bA(a,b)},
ao:function(a){return this.Z(a,null)},
bA:function(a,b){var t=0,s=P.e0(null),r=this
var $async$Z=P.e2(function(c,d){if(c===1)return P.dW(d,s)
while(true)switch(t){case 0:r.dx.C(0,++r.db)
t=2
return P.bs(P.f6(C.P,null,null),$async$Z)
case 2:t=3
return P.bs(r.aH(r.e,b),$async$Z)
case 3:r.b_()
return P.dX(null,s)}})
return P.dY($async$Z,s)},
T:function(a){var t=0,s=P.e0(P.k),r=this,q
var $async$T=P.e2(function(b,c){if(b===1)return P.dW(c,s)
while(true)switch(t){case 0:q=r.c
t=q!=null?2:3
break
case 2:t=4
return P.bs(q.a1(),$async$T)
case 4:r.c=null
case 3:return P.dX(null,s)}})
return P.dY($async$T,s)},
bX:function(a){var t,s,r
t=this.ch
if((t.b&1)!==0&&!0)t.C(0,this.bW())
else{s=this.cx
if((s.b&1)!==0||!1){r=this.aZ(!0)
if((t.b&1)!==0)t.C(0,r)
if((s.b&1)!==0)s.C(0,r)}}},
b_:function(){return this.bX(!1)},
aZ:function(a){var t,s,r,q,p
t=A.an(this.r,this.x,null,H.m(this,0))
s=this.a
s=s.ga4(s)
r=P.eB(s,!0,H.eM(s,"a6",0))
for(q=r.length,p=0;p<q;++p)t.ce(r[p].cA(a))
return t},
bW:function(){return this.aZ(!1)},
aH:function(a,b){return this.co(a,b)},
co:function(a,b){var t=0,s=P.e0(P.k),r=this,q
var $async$aH=P.e2(function(c,d){if(c===1)return P.dW(d,s)
while(true)switch(t){case 0:q=a==null?C.w:a
r.d=q
q=U.ig(q,null)
r.b=q
r.c=q.a3(new T.cR(r))
return P.dX(null,s)}})
return P.dY($async$aH,s)},
c7:function(){var t,s,r,q,p
t={}
s=this.a
if(s.gcr(s)){$.$get$bt().E(C.k,"Stopping due to zero automata.",null,null)
this.T(0)
return}s.a2(0,new T.cO())
this.b_()
r=Date.now()
q=this.y
if(q!=null){p=r-q
if(p>0)this.f=(this.f+1/(p/1000))/2}this.y=r
r=this.e
if(r!=null)if(this.d!=null){q=s.ga4(s)
r=C.a.I(q.gD(q).gX(),C.e.v(2000/C.a.L(r.a,1000)))===0}else r=!1
else r=!1
if(r){r=$.$get$bt()
q=s.ga4(s)
r.E(C.k,"Gen: "+q.gD(q).gX()+" | FPS: "+C.R.v(this.f)+"/"+C.e.v(1000/C.a.L(this.d.a,1000)),null,null)}r=s.ga4(s)
if(C.a.I(r.gD(r).gX(),20)===0){t.a=!0
s.a2(0,new T.cP(t))
if(t.a){++this.z
t.b=0
s.a2(0,new T.cQ(t))
s=t.b
if(s>=5)s=s<10&&this.z>5||this.z>8
else s=!0
if(s)this.cy.C(0,C.a_)
$.$get$bt().E(C.k,"Stable scene counter: x"+this.z+" World activity: "+t.b+"%",null,null)}else this.z=0}}}
T.cR.prototype={
$1:function(a){return this.a.c7()}}
T.cO.prototype={
$2:function(a,b){return b.ca()},
$S:19}
T.cP.prototype={
$2:function(a,b){if(!b.gcs())this.a.a=!1},
$S:8}
T.cQ.prototype={
$2:function(a,b){var t=this.a
if(b.gb9()>t.b)t.b=b.gb9()},
$S:8}
U.el.prototype={
$1:function(a){var t,s
t=this.a
s=++t.c
t.a.C(0,s)},
$S:6}
U.ej.prototype={
$0:function(){this.a.b=P.hw(this.b,this.c)}}
U.ek.prototype={
$0:function(){var t,s
t=this.a
s=t.b
if(s!=null){s.a1()
t.b=null}}}
S.aK.prototype={
bd:function(a,b,c,d,e){var t,s
t=this.a
s=this.b
$.$get$fB().E(C.u,"Canvas: "+t+"x"+s+" ("+H.b(c)+"x"+H.b(b)+"px)",null,null)
a.width=e?c:t
a.height=e?b:s
this.e=a
this.c=e?C.e.v(c/t):1
this.d=e?C.e.v(b/s):1
a.toString
this.f=a.getContext("2d")
switch(d){case C.N:t=a.style
C.i.az(t,(t&&C.i).a7(t,"image-rendering"),"pixelated","")
C.i.az(t,C.i.a7(t,"image-rendering"),"optimizespeed","")
s=H.b(c)+"px"
t.width=s
s=H.b(b)+"px"
t.height=s
break
case C.M:t=a.style
C.i.az(t,(t&&C.i).a7(t,"image-rendering"),"pixelated","")
t.width="100%"
t.height="100%"
t.position="fixed"
t.top="0px"
t.left="0px"
t.right="0px"
t.bottom="0px"
break}},
cn:function(a,b,c,d){return this.bd(a,b,c,d,!1)},
bk:function(a){var t,s,r,q,p,o,n
for(t=a.a,s=a.b,r=0;r<t;++r)for(q=0;q<s;++q){if(a.H(r,q)==null)continue
p=this.f
p.fillStyle=a.H(r,q)
o=this.c
n=this.d
p.fillRect(r*o,q*n,o,n)}},
cF:function(a){return this.bk(a,null)}}
N.ar.prototype={
gbc:function(){var t,s,r
t=this.b
s=t==null||t.a===""
r=this.a
return s?r:t.gbc()+"."+r},
gbh:function(){if($.e7){var t=this.c
if(t!=null)return t
t=this.b
if(t!=null)return t.gbh()}return $.fD},
cw:function(a,b,c,d,e){var t,s,r,q,p
t=a.b
if(t>=this.gbh().b){s=$.i9.b
if(t>=s){d=P.hu()
c="autogenerated stack trace for "+a.h(0)+" "+b}e=$.f
t=this.gbc()
s=Date.now()
r=$.fb
$.fb=r+1
q=new N.b_(a,b,null,t,new P.aN(s,!1),r,c,d,e)
if($.e7)for(p=this;p!=null;){t=p.f
if(t!=null){if(!t.gaa())H.C(t.a6())
t.J(q)}p=p.b}else $.$get$cf().bZ(q)}},
E:function(a,b,c,d){return this.cw(a,b,c,d,null)},
aV:function(){if($.e7||this.b==null){var t=this.f
if(t==null){t=new P.dQ(null,null,0,[N.b_])
this.f=t}return new P.dh(t,[H.m(t,0)])}else return $.$get$cf().aV()},
bZ:function(a){var t=this.f
if(t!=null){if(!t.gaa())H.C(t.a6())
t.J(a)}}}
N.ce.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
if(C.d.bB(t,"."))H.C(P.eq("name shouldn't start with a '.'"))
s=C.d.cu(t,".")
if(s===-1)r=t!==""?N.a8(""):null
else{r=N.a8(C.d.aq(t,0,s))
t=C.d.ap(t,s+1)}q=P.l
p=N.ar
o=new H.Y(0,0,[q,p])
q=new N.ar(t,r,o,new P.d5(o,[q,p]))
if(r!=null)r.d.p(0,t,q)
return q}}
N.Z.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof N.Z&&this.b===b.b},
S:function(a,b){return C.a.S(this.b,b.gcN(b))},
R:function(a,b){return C.a.R(this.b,b.gcN(b))},
gk:function(a){return this.b},
h:function(a){return this.a}}
N.b_.prototype={
h:function(a){return"["+this.a.a+"] "+this.d+": "+H.b(this.b)}}
N.ed.prototype={
$1:function(a){var t,s
t=a.a.a+": "
s=a.e
P.fX(t+H.ff(s)+":"+H.fg(s)+":"+H.fh(s)+": "+H.b(a.b))}}
N.ec.prototype={
$0:function(){var t,s,r
t=this.b
s=J.x(t.i(0,"display"),"fullscreen")?window.innerWidth:P.T(t.i(0,"width"),null,null)*this.c
r=this.a
r.a=s
r.b=J.x(t.i(0,"display"),"fullscreen")?window.innerHeight:P.T(t.i(0,"height"),null,null)*this.c
r.c=J.x(t.i(0,"display"),"fullscreen")?C.e.v(window.innerWidth/this.c):P.T(t.i(0,"width"),null,null)
r.d=J.x(t.i(0,"display"),"fullscreen")?C.e.v(window.innerHeight/this.c):P.T(t.i(0,"height"),null,null)}}
N.ee.prototype={
$1:function(a){var t,s,r
t=this.b.a
t.bb(0)
s=this.a
s=N.hU(this.c,s.c,s.d)
r="automaton:"+t.gj(t)
t.p(0,r,s)}}
N.ef.prototype={
$1:function(a){var t=this.a
t.T(0)
t.ao(0)}}
N.eg.prototype={
$1:function(a){return this.bq(a)},
bq:function(a){var t=0,s=P.e0(P.k),r=this,q,p,o,n
var $async$$1=P.e2(function(b,c){if(b===1)return P.dW(c,s)
while(true)switch(t){case 0:q=r.b
t=2
return P.bs(q.T(0),$async$$1)
case 2:q.a.bb(0)
r.c.$0()
p=window.innerWidth
o=window.innerHeight
t=3
return P.bs(P.f6(C.w,null,null),$async$$1)
case 3:n=window.innerWidth
if(p==null?n==null:p===n){n=window.innerHeight
n=o==null?n==null:o===n}else n=!1
if(n){n=r.a
q.r=n.c
q.x=n.d
q.ao(0)}return P.dX(null,s)}})
return P.dY($async$$1,s)}}
J.i.prototype.bE=J.i.prototype.h
J.ap.prototype.bF=J.ap.prototype.h
P.ab.prototype.bG=P.ab.prototype.a6
W.v.prototype.bD=W.v.prototype.aD;(function installTearOffs(){installTearOff(P,"hQ",1,0,0,null,["$1"],["hy"],3,0)
installTearOff(P,"hR",1,0,0,null,["$1"],["hz"],3,0)
installTearOff(P,"hS",1,0,0,null,["$1"],["hA"],3,0)
installTearOff(P,"fK",1,0,0,null,["$0"],["hO"],2,0)
installTearOff(P,"hT",1,0,0,null,["$2","$1"],["fC",function(a){return P.fC(a,null)}],1,0)
installTearOff(P,"fJ",1,0,0,null,["$0"],["hK"],2,0)
installTearOff(P.bg.prototype,"gci",0,0,0,null,["$2","$1"],["W","cj"],1,0)
installTearOff(P.bp.prototype,"gcf",0,1,0,null,["$1","$0"],["V","cg"],12,0)
installTearOff(P.o.prototype,"gbP",0,0,0,null,["$2","$1"],["B","bQ"],1,0)
installTearOff(P.bk.prototype,"gc1",0,0,0,null,["$0"],["c2"],2,0)
installTearOff(P,"fL",1,0,0,null,["$3$onError$radix","$1"],["T",function(a){return P.T(a,null,null)}],21,0)
installTearOff(S.aK.prototype,"gcE",0,0,0,null,["$1$1","$1"],["bk","cF"],20,0)})();(function inheritance(){inherit(P.j,null)
var t=P.j
inherit(H.ew,t)
inherit(J.i,t)
inherit(J.bC,t)
inherit(P.a6,t)
inherit(H.aZ,t)
inherit(P.c2,t)
inherit(H.aQ,t)
inherit(H.d3,t)
inherit(P.bm,t)
inherit(H.cL,t)
inherit(H.d_,t)
inherit(P.a5,t)
inherit(H.ao,t)
inherit(H.aL,t)
inherit(H.bn,t)
inherit(H.bc,t)
inherit(P.cm,t)
inherit(H.c7,t)
inherit(H.c9,t)
inherit(H.c4,t)
inherit(H.dE,t)
inherit(P.bq,t)
inherit(P.d9,t)
inherit(P.ba,t)
inherit(P.dj,t)
inherit(P.ab,t)
inherit(P.t,t)
inherit(P.bg,t)
inherit(P.bl,t)
inherit(P.o,t)
inherit(P.be,t)
inherit(P.cV,t)
inherit(P.dL,t)
inherit(P.dg,t)
inherit(P.dk,t)
inherit(P.dF,t)
inherit(P.bk,t)
inherit(P.dP,t)
inherit(P.cZ,t)
inherit(P.a3,t)
inherit(P.dV,t)
inherit(P.Q,t)
inherit(P.dU,t)
inherit(P.cn,t)
inherit(P.p,t)
inherit(P.aN,t)
inherit(P.U,t)
inherit(P.K,t)
inherit(P.b9,t)
inherit(P.dn,t)
inherit(P.bT,t)
inherit(P.aR,t)
inherit(P.z,t)
inherit(P.k,t)
inherit(P.D,t)
inherit(P.l,t)
inherit(P.ax,t)
inherit(W.bM,t)
inherit(P.dC,t)
inherit(R.N,t)
inherit(Y.aS,t)
inherit(S.bI,t)
inherit(K.u,t)
inherit(E.b7,t)
inherit(E.bJ,t)
inherit(B.bK,t)
inherit(K.I,t)
inherit(X.y,t)
inherit(T.b8,t)
inherit(T.cN,t)
inherit(N.ar,t)
inherit(N.Z,t)
inherit(N.b_,t)
t=J.i
inherit(J.c3,t)
inherit(J.aW,t)
inherit(J.ap,t)
inherit(J.O,t)
inherit(J.a7,t)
inherit(J.X,t)
inherit(H.au,t)
inherit(W.v,t)
inherit(W.bi,t)
inherit(W.bO,t)
inherit(W.aP,t)
inherit(W.a,t)
inherit(W.cd,t)
t=J.ap
inherit(J.cJ,t)
inherit(J.aa,t)
inherit(J.P,t)
inherit(J.ev,J.O)
t=J.a7
inherit(J.aV,t)
inherit(J.aU,t)
t=P.a6
inherit(H.r,t)
inherit(H.b0,t)
inherit(H.d7,t)
t=H.r
inherit(H.aq,t)
inherit(H.c8,t)
inherit(H.bR,H.b0)
t=P.c2
inherit(H.co,t)
inherit(H.d8,t)
inherit(H.as,H.aq)
inherit(P.cc,P.bm)
t=P.cc
inherit(H.bd,t)
inherit(A.V,t)
t=P.a5
inherit(H.cI,t)
inherit(H.c6,t)
inherit(H.d2,t)
inherit(H.cM,t)
inherit(P.av,t)
inherit(P.M,t)
inherit(P.d6,t)
inherit(P.d1,t)
inherit(P.E,t)
inherit(P.bL,t)
inherit(P.bN,t)
t=H.aL
inherit(H.em,t)
inherit(H.cY,t)
inherit(H.c0,t)
inherit(H.c5,t)
inherit(H.e8,t)
inherit(H.e9,t)
inherit(H.ea,t)
inherit(P.dd,t)
inherit(P.dc,t)
inherit(P.de,t)
inherit(P.df,t)
inherit(P.dT,t)
inherit(P.dS,t)
inherit(P.db,t)
inherit(P.da,t)
inherit(P.dZ,t)
inherit(P.e_,t)
inherit(P.e3,t)
inherit(P.dR,t)
inherit(P.bU,t)
inherit(P.dp,t)
inherit(P.dx,t)
inherit(P.dt,t)
inherit(P.du,t)
inherit(P.dv,t)
inherit(P.dr,t)
inherit(P.dw,t)
inherit(P.dq,t)
inherit(P.dA,t)
inherit(P.dB,t)
inherit(P.dz,t)
inherit(P.dy,t)
inherit(P.cW,t)
inherit(P.cX,t)
inherit(P.dN,t)
inherit(P.dM,t)
inherit(P.dG,t)
inherit(P.e1,t)
inherit(P.dJ,t)
inherit(P.dI,t)
inherit(P.dK,t)
inherit(P.cb,t)
inherit(P.cl,t)
inherit(P.bP,t)
inherit(P.bQ,t)
inherit(W.dm,t)
inherit(R.bD,t)
inherit(R.bE,t)
inherit(Y.bZ,t)
inherit(K.cq,t)
inherit(K.cr,t)
inherit(K.cs,t)
inherit(K.ct,t)
inherit(K.cu,t)
inherit(K.cv,t)
inherit(K.cw,t)
inherit(K.cx,t)
inherit(K.cy,t)
inherit(K.cz,t)
inherit(K.cA,t)
inherit(K.bH,t)
inherit(X.bY,t)
inherit(L.bX,t)
inherit(Y.ci,t)
inherit(Y.ch,t)
inherit(T.cR,t)
inherit(T.cO,t)
inherit(T.cP,t)
inherit(T.cQ,t)
inherit(U.el,t)
inherit(U.ej,t)
inherit(U.ek,t)
inherit(N.ce,t)
inherit(N.ed,t)
inherit(N.ec,t)
inherit(N.ee,t)
inherit(N.ef,t)
inherit(N.eg,t)
t=H.cY
inherit(H.cU,t)
inherit(H.al,t)
inherit(H.c1,H.c0)
inherit(P.ck,P.cm)
inherit(H.Y,P.ck)
inherit(H.b2,H.au)
t=H.b2
inherit(H.az,t)
inherit(H.aB,t)
inherit(H.aA,H.az)
inherit(H.at,H.aA)
inherit(H.aC,H.aB)
inherit(H.b3,H.aC)
t=H.b3
inherit(H.cC,t)
inherit(H.cD,t)
inherit(H.cE,t)
inherit(H.cF,t)
inherit(H.cG,t)
inherit(H.b4,t)
inherit(H.cH,t)
inherit(P.dO,P.ba)
inherit(P.S,P.dO)
inherit(P.dh,P.S)
inherit(P.bh,P.dj)
inherit(P.di,P.bh)
inherit(P.dQ,P.ab)
inherit(P.bp,P.bg)
inherit(P.bf,P.dL)
inherit(P.ay,P.dk)
inherit(P.bo,P.dF)
inherit(P.dH,P.dV)
inherit(P.d4,H.bd)
inherit(P.br,P.cn)
inherit(P.d5,P.br)
t=P.U
inherit(P.ag,t)
inherit(P.h,t)
t=P.M
inherit(P.aw,t)
inherit(P.c_,t)
t=W.v
inherit(W.A,t)
inherit(W.cB,t)
t=W.A
inherit(W.c,t)
inherit(W.W,t)
inherit(W.d,W.c)
t=W.d
inherit(W.bz,t)
inherit(W.bA,t)
inherit(W.bS,t)
inherit(W.cS,t)
inherit(W.a4,W.bi)
inherit(W.bj,W.aP)
inherit(W.dl,P.cV)
inherit(K.cp,S.bI)
t=B.bK
inherit(K.bG,t)
inherit(X.bV,t)
inherit(L.bW,t)
inherit(B.cj,t)
inherit(Y.cg,t)
inherit(S.aK,E.bJ)
mixin(H.bd,H.d3)
mixin(H.az,P.Q)
mixin(H.aA,H.aQ)
mixin(H.aB,P.Q)
mixin(H.aC,H.aQ)
mixin(P.bf,P.dg)
mixin(P.bm,P.Q)
mixin(P.br,P.dU)
mixin(W.bi,W.bM)})();(function constants(){C.i=W.a4.prototype
C.Q=J.i.prototype
C.b=J.O.prototype
C.e=J.aU.prototype
C.a=J.aV.prototype
C.t=J.aW.prototype
C.R=J.a7.prototype
C.d=J.X.prototype
C.Y=J.P.prototype
C.L=J.cJ.prototype
C.v=J.aa.prototype
C.f=new K.I(0,"BriansBrainStates.dead")
C.h=new K.I(1,"BriansBrainStates.living")
C.l=new K.I(2,"BriansBrainStates.dying")
C.o=new P.dC()
C.c=new P.dH()
C.O=new P.K(0)
C.P=new P.K(1e4)
C.w=new P.K(1e6)
C.j=new X.y(0,"GameOfLifeStates.alive")
C.m=new X.y(1,"GameOfLifeStates.aliveBorn")
C.n=new X.y(2,"GameOfLifeStates.dead")
C.p=new X.y(3,"GameOfLifeStates.deadUnderPopulated")
C.q=new X.y(4,"GameOfLifeStates.deadOverPopulated")
C.S=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.T=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.x=function(hooks) { return hooks; }

C.U=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.V=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.W=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.X=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=new N.Z("ALL",0)
C.u=new N.Z("FINE",500)
C.k=new N.Z("INFO",800)
C.Z=new N.Z("OFF",2000)
C.A=new K.u(0,"MathematicalGenerators.random")
C.B=new K.u(1,"MathematicalGenerators.cells")
C.D=new K.u(2,"MathematicalGenerators.xModY")
C.E=new K.u(3,"MathematicalGenerators.arcs")
C.F=new K.u(4,"MathematicalGenerators.diagonalStripes")
C.G=new K.u(5,"MathematicalGenerators.blocks")
C.H=new K.u(6,"MathematicalGenerators.blocks2")
C.I=new K.u(7,"MathematicalGenerators.chess")
C.J=new K.u(8,"MathematicalGenerators.endlessSierpinski")
C.K=new K.u(9,"MathematicalGenerators.sierpinskiLevel10")
C.C=new K.u(10,"MathematicalGenerators.sierpinskiMountains")
C.r=H.n(makeConstList([C.A,C.B,C.D,C.E,C.F,C.G,C.H,C.I,C.J,C.K,C.C]),[K.u])
C.M=new E.b7(0,"RendererDisplayMode.fullscreen")
C.N=new E.b7(1,"RendererDisplayMode.fixed")
C.a_=new T.b8(0,"SceneCompleteReason.stable")})();(function staticFields(){$.J=0
$.am=null
$.eS=null
$.fQ=null
$.fH=null
$.fY=null
$.e5=null
$.eb=null
$.eN=null
$.ad=null
$.aD=null
$.aE=null
$.eF=!1
$.f=C.c
$.f2=null
$.f1=null
$.f0=null
$.f_=null
$.e7=!1
$.i9=C.Z
$.fD=C.k
$.fb=0})();(function lazyInitializers(){lazy($,"eZ","$get$eZ",function(){return H.fP("_$dart_dartClosure")})
lazy($,"ex","$get$ex",function(){return H.fP("_$dart_js")})
lazy($,"fl","$get$fl",function(){return H.L(H.d0({
toString:function(){return"$receiver$"}}))})
lazy($,"fm","$get$fm",function(){return H.L(H.d0({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"fn","$get$fn",function(){return H.L(H.d0(null))})
lazy($,"fo","$get$fo",function(){return H.L(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"fs","$get$fs",function(){return H.L(H.d0(void 0))})
lazy($,"ft","$get$ft",function(){return H.L(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"fq","$get$fq",function(){return H.L(H.fr(null))})
lazy($,"fp","$get$fp",function(){return H.L(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"fv","$get$fv",function(){return H.L(H.fr(void 0))})
lazy($,"fu","$get$fu",function(){return H.L(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"eE","$get$eE",function(){return P.hx()})
lazy($,"et","$get$et",function(){return P.hC(null,C.c,P.k)})
lazy($,"aG","$get$aG",function(){return[]})
lazy($,"fz","$get$fz",function(){return new Error().stack!=void 0})
lazy($,"eY","$get$eY",function(){return{}})
lazy($,"eH","$get$eH",function(){return N.a8("cellular_automata.simulator")})
lazy($,"fA","$get$fA",function(){return N.a8("cellular_automata.generators.mathematical")})
lazy($,"fd","$get$fd",function(){return P.ca([C.A,new K.cq(),C.B,new K.cr(),C.D,new K.cs(),C.E,new K.ct(),C.F,new K.cu(),C.I,new K.cv(),C.G,new K.cw(),C.H,new K.cx(),C.J,new K.cy(),C.K,new K.cz(),C.C,new K.cA()],null,P.aR)})
lazy($,"bt","$get$bt",function(){return N.a8("cellular_automata.player")})
lazy($,"fB","$get$fB",function(){return N.a8("cellular_automata.renderers.canvas")})
lazy($,"cf","$get$cf",function(){return N.a8("")})
lazy($,"fc","$get$fc",function(){return P.eA(P.l,N.ar)})})()
var u={mangledGlobalNames:{h:"int",ag:"double",U:"num",l:"String",p:"bool",k:"Null",z:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.p,args:[P.h,P.h]},{func:1,ret:-1,args:[P.j],opt:[P.D]},{func:1,ret:-1},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.k,args:[,]},{func:1,ret:-1,args:[,]},{func:1,ret:P.k,args:[,,]},{func:1,ret:P.k,args:[P.l,[R.N,,,]]},{func:1,args:[,P.l]},{func:1,ret:P.k,args:[,P.D]},{func:1,ret:P.k,args:[P.h,,]},{func:1,ret:-1,opt:[P.j]},{func:1,ret:P.k,args:[,],opt:[,]},{func:1,ret:[P.o,,],args:[,]},{func:1,args:[,K.I]},{func:1,args:[,X.y]},{func:1,args:[,P.p]},{func:1,args:[,P.h]},{func:1,ret:-1,args:[P.l,[R.N,,,]]},{func:1,bounds:[P.j],ret:-1,args:[[A.V,,]]},{func:1,ret:P.h,args:[P.l],named:{onError:{func:1,ret:P.h,args:[P.l]},radix:P.h}}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(convertToFastObject(n))[0]}
u.getIsolateTag=function(a){return t("___dart_"+a+u.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
u.isolateTag=o
break}}u.dispatchPropertyName=u.getIsolateTag("dispatch_record")}()
setOrUpdateInterceptorsByTag({ArrayBuffer:J.i,Blob:J.i,CanvasGradient:J.i,CanvasPattern:J.i,CanvasRenderingContext2D:J.i,Client:J.i,DOMError:J.i,File:J.i,MediaError:J.i,Navigator:J.i,NavigatorConcurrentHardware:J.i,NavigatorUserMediaError:J.i,OverconstrainedError:J.i,PositionError:J.i,WindowClient:J.i,SVGAnimatedLength:J.i,SVGAnimatedLengthList:J.i,SVGAnimatedNumber:J.i,SVGAnimatedNumberList:J.i,SVGAnimatedString:J.i,SQLError:J.i,DataView:H.au,ArrayBufferView:H.au,Float32Array:H.at,Float64Array:H.at,Int16Array:H.cC,Int32Array:H.cD,Int8Array:H.cE,Uint16Array:H.cF,Uint32Array:H.cG,Uint8ClampedArray:H.b4,CanvasPixelArray:H.b4,Uint8Array:H.cH,HTMLAudioElement:W.d,HTMLBRElement:W.d,HTMLBaseElement:W.d,HTMLBodyElement:W.d,HTMLButtonElement:W.d,HTMLCanvasElement:W.d,HTMLContentElement:W.d,HTMLDListElement:W.d,HTMLDataElement:W.d,HTMLDataListElement:W.d,HTMLDetailsElement:W.d,HTMLDialogElement:W.d,HTMLDivElement:W.d,HTMLEmbedElement:W.d,HTMLFieldSetElement:W.d,HTMLHRElement:W.d,HTMLHeadElement:W.d,HTMLHeadingElement:W.d,HTMLHtmlElement:W.d,HTMLIFrameElement:W.d,HTMLImageElement:W.d,HTMLInputElement:W.d,HTMLLIElement:W.d,HTMLLabelElement:W.d,HTMLLegendElement:W.d,HTMLLinkElement:W.d,HTMLMapElement:W.d,HTMLMediaElement:W.d,HTMLMenuElement:W.d,HTMLMetaElement:W.d,HTMLMeterElement:W.d,HTMLModElement:W.d,HTMLOListElement:W.d,HTMLObjectElement:W.d,HTMLOptGroupElement:W.d,HTMLOptionElement:W.d,HTMLOutputElement:W.d,HTMLParagraphElement:W.d,HTMLParamElement:W.d,HTMLPictureElement:W.d,HTMLPreElement:W.d,HTMLProgressElement:W.d,HTMLQuoteElement:W.d,HTMLScriptElement:W.d,HTMLShadowElement:W.d,HTMLSlotElement:W.d,HTMLSourceElement:W.d,HTMLSpanElement:W.d,HTMLStyleElement:W.d,HTMLTableCaptionElement:W.d,HTMLTableCellElement:W.d,HTMLTableDataCellElement:W.d,HTMLTableHeaderCellElement:W.d,HTMLTableColElement:W.d,HTMLTableElement:W.d,HTMLTableRowElement:W.d,HTMLTableSectionElement:W.d,HTMLTemplateElement:W.d,HTMLTextAreaElement:W.d,HTMLTimeElement:W.d,HTMLTitleElement:W.d,HTMLTrackElement:W.d,HTMLUListElement:W.d,HTMLUnknownElement:W.d,HTMLVideoElement:W.d,HTMLDirectoryElement:W.d,HTMLFontElement:W.d,HTMLFrameElement:W.d,HTMLFrameSetElement:W.d,HTMLMarqueeElement:W.d,HTMLElement:W.d,HTMLAnchorElement:W.bz,HTMLAreaElement:W.bA,CDATASection:W.W,CharacterData:W.W,Comment:W.W,ProcessingInstruction:W.W,Text:W.W,CSSStyleDeclaration:W.a4,MSStyleCSSProperties:W.a4,CSS2Properties:W.a4,DOMException:W.bO,DOMRectReadOnly:W.aP,SVGAElement:W.c,SVGAnimateElement:W.c,SVGAnimateMotionElement:W.c,SVGAnimateTransformElement:W.c,SVGAnimationElement:W.c,SVGCircleElement:W.c,SVGClipPathElement:W.c,SVGDefsElement:W.c,SVGDescElement:W.c,SVGDiscardElement:W.c,SVGEllipseElement:W.c,SVGFEBlendElement:W.c,SVGFEColorMatrixElement:W.c,SVGFEComponentTransferElement:W.c,SVGFECompositeElement:W.c,SVGFEConvolveMatrixElement:W.c,SVGFEDiffuseLightingElement:W.c,SVGFEDisplacementMapElement:W.c,SVGFEDistantLightElement:W.c,SVGFEFloodElement:W.c,SVGFEFuncAElement:W.c,SVGFEFuncBElement:W.c,SVGFEFuncGElement:W.c,SVGFEFuncRElement:W.c,SVGFEGaussianBlurElement:W.c,SVGFEImageElement:W.c,SVGFEMergeElement:W.c,SVGFEMergeNodeElement:W.c,SVGFEMorphologyElement:W.c,SVGFEOffsetElement:W.c,SVGFEPointLightElement:W.c,SVGFESpecularLightingElement:W.c,SVGFESpotLightElement:W.c,SVGFETileElement:W.c,SVGFETurbulenceElement:W.c,SVGFilterElement:W.c,SVGForeignObjectElement:W.c,SVGGElement:W.c,SVGGeometryElement:W.c,SVGGraphicsElement:W.c,SVGImageElement:W.c,SVGLineElement:W.c,SVGLinearGradientElement:W.c,SVGMarkerElement:W.c,SVGMaskElement:W.c,SVGMetadataElement:W.c,SVGPathElement:W.c,SVGPatternElement:W.c,SVGPolygonElement:W.c,SVGPolylineElement:W.c,SVGRadialGradientElement:W.c,SVGRectElement:W.c,SVGScriptElement:W.c,SVGSetElement:W.c,SVGStopElement:W.c,SVGStyleElement:W.c,SVGElement:W.c,SVGSVGElement:W.c,SVGSwitchElement:W.c,SVGSymbolElement:W.c,SVGTSpanElement:W.c,SVGTextContentElement:W.c,SVGTextElement:W.c,SVGTextPathElement:W.c,SVGTextPositioningElement:W.c,SVGTitleElement:W.c,SVGUseElement:W.c,SVGViewElement:W.c,SVGGradientElement:W.c,SVGComponentTransferFunctionElement:W.c,SVGFEDropShadowElement:W.c,SVGMPathElement:W.c,Element:W.c,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,Event:W.a,InputEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,MediaStream:W.v,ServiceWorker:W.v,Window:W.v,DOMWindow:W.v,IDBOpenDBRequest:W.v,IDBVersionChangeRequest:W.v,IDBRequest:W.v,EventTarget:W.v,HTMLFormElement:W.bS,Location:W.cd,MessagePort:W.cB,Document:W.A,DocumentFragment:W.A,HTMLDocument:W.A,ShadowRoot:W.A,XMLDocument:W.A,Attr:W.A,DocumentType:W.A,Node:W.A,HTMLSelectElement:W.cS,ClientRect:W.bj,DOMRect:W.bj})
setOrUpdateLeafTags({ArrayBuffer:true,Blob:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,DOMError:true,File:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WindowClient:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,MediaStream:true,ServiceWorker:true,Window:true,DOMWindow:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,EventTarget:false,HTMLFormElement:true,Location:true,MessagePort:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,ClientRect:true,DOMRect:true})
H.b2.$nativeSuperclassTag="ArrayBufferView"
H.az.$nativeSuperclassTag="ArrayBufferView"
H.aA.$nativeSuperclassTag="ArrayBufferView"
H.at.$nativeSuperclassTag="ArrayBufferView"
H.aB.$nativeSuperclassTag="ArrayBufferView"
H.aC.$nativeSuperclassTag="ArrayBufferView"
H.b3.$nativeSuperclassTag="ArrayBufferView"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.fV,[])
else N.fV([])})})()
//# sourceMappingURL=cellular_automata.dart.js.map
