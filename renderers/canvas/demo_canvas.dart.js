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
a[c]=function(){a[c]=function(){H.hI(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+x+++"(x) {"+"if (c === null) c = "+"H.ek"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+x+++"() {"+"if (c === null) c = "+"H.ek"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t
return d?function(){if(t===void 0)t=H.ek(this,a,b,c,true,[],e).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={e3:function e3(a){this.a=a},
fV:function(a,b,c,d){if(!!a.$isp)return new H.bF(a,b,[c,d])
return new H.aR(a,b,[c,d])},
eE:function(){return new P.z("No element")},
fO:function(){return new P.z("Too few elements")},
p:function p(){},
aO:function aO(){},
aP:function aP(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aR:function aR(a,b,c){this.a=a
this.b=b
this.$ti=c},
bF:function bF(a,b,c){this.a=a
this.b=b
this.$ti=c},
c2:function c2(a,b){this.a=null
this.b=a
this.c=b},
c3:function c3(a,b,c){this.a=a
this.b=b
this.$ti=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
cO:function cO(a,b){this.a=a
this.b=b},
aH:function aH(){},
cJ:function cJ(){},
b1:function b1(){},
hv:function(a){return u.types[a]},
fq:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.o(a).$ise5},
d:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bo(a)
if(typeof t!=="string")throw H.e(H.bi(a))
return t},
h0:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.aK(t)
s=t[0]
r=t[1]
return new H.cp(a,t,(s&2)===2,s>>2,r>>1,(r&1)===1,t[2])},
a4:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
aV:function(a){var t,s,r,q,p,o,n,m,l
t=J.o(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.B||!!J.o(a).$isap){p=C.r(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.d.bz(q,0)===36)q=C.d.aB(q,1)
l=H.fr(H.ac(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
t:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fZ:function(a){return a.b?H.t(a).getUTCFullYear()+0:H.t(a).getFullYear()+0},
fY:function(a){return a.b?H.t(a).getUTCMonth()+1:H.t(a).getMonth()+1},
fW:function(a){return a.b?H.t(a).getUTCDate()+0:H.t(a).getDate()+0},
eN:function(a){return a.b?H.t(a).getUTCHours()+0:H.t(a).getHours()+0},
eO:function(a){return a.b?H.t(a).getUTCMinutes()+0:H.t(a).getMinutes()+0},
eP:function(a){return a.b?H.t(a).getUTCSeconds()+0:H.t(a).getSeconds()+0},
fX:function(a){return a.b?H.t(a).getUTCMilliseconds()+0:H.t(a).getMilliseconds()+0},
bk:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.H(!0,b,"index",null)
t=J.ae(a)
if(b<0||b>=t)return P.eC(b,a,"index",null,t)
return P.co(b,"index",null)},
bi:function(a){return new P.H(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.am()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.fw})
t.name=""}else t.toString=H.fw
return t},
fw:function(){return J.bo(this.dartException)},
N:function(a){throw H.e(a)},
hH:function(a){throw H.e(P.aE(a))},
E:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.w([],[P.n])
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.cF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
cG:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
eZ:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
eM:function(a,b){return new H.cm(a,b==null?null:b.method)},
e6:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.bR(a,s,t?null:b.receiver)},
B:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.dW(a)
if(a==null)return
if(a instanceof H.ah)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aY(r,16)&8191)===10)switch(q){case 438:return t.$1(H.e6(H.d(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.eM(H.d(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$eT()
o=$.$get$eU()
n=$.$get$eV()
m=$.$get$eW()
l=$.$get$f_()
k=$.$get$f0()
j=$.$get$eY()
$.$get$eX()
i=$.$get$f2()
h=$.$get$f1()
g=p.q(s)
if(g!=null)return t.$1(H.e6(s,g))
else{g=o.q(s)
if(g!=null){g.method="call"
return t.$1(H.e6(s,g))}else{g=n.q(s)
if(g==null){g=m.q(s)
if(g==null){g=l.q(s)
if(g==null){g=k.q(s)
if(g==null){g=j.q(s)
if(g==null){g=m.q(s)
if(g==null){g=i.q(s)
if(g==null){g=h.q(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.eM(s,g))}}return t.$1(new H.cI(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.aY()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.H(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.aY()
return a},
v:function(a){var t
if(a instanceof H.ah)return a.b
if(a==null)return new H.bb(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.bb(a)},
fi:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.v(0,a[s],a[r])}return b},
hA:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.d1("Unsupported number of arguments for wrapped closure"))},
aA:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hA)
a.$identity=t
return t},
fF:function(a,b,c,d,e,f,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.o(d).$isu){t.$reflectionInfo=d
r=H.h0(t).r}else r=d
q=e?Object.create(new H.cz().constructor.prototype):Object.create(new H.af(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(e)p=function(){this.$initialize()}
else{o=$.C
$.C=o+1
o=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")
p=o}q.constructor=p
p.prototype=q
if(!e){n=f.length==1&&!0
m=H.et(a,t,n)
m.$reflectionInfo=d}else{q.$static_name=a0
m=t
n=!1}if(typeof r=="number")l=function(a1,a2){return function(){return a1(a2)}}(H.hv,r)
else if(typeof r=="function")if(e)l=r
else{k=n?H.eq:H.e0
l=function(a1,a2){return function(){return a1.apply({$receiver:a2(this)},arguments)}}(r,k)}else throw H.e("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=m,i=1;i<o;++i){h=b[i]
g=h.$callName
if(g!=null){h=e?h:H.et(a,h,n)
q[g]=h}if(i===c){h.$reflectionInfo=d
j=h}}q["call*"]=j
q.$R=t.$R
q.$D=t.$D
return p},
fC:function(a,b,c,d){var t=H.e0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
et:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.fE(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.fC(s,!q,t,b)
if(s===0){q=$.C
$.C=q+1
o="self"+H.d(q)
q="return function(){var "+o+" = this."
p=$.ag
if(p==null){p=H.bu("self")
$.ag=p}return new Function(q+H.d(p)+";return "+o+"."+H.d(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.C
$.C=q+1
n+=H.d(q)
q="return function("+n+"){return this."
p=$.ag
if(p==null){p=H.bu("self")
$.ag=p}return new Function(q+H.d(p)+"."+H.d(t)+"("+n+");}")()},
fD:function(a,b,c,d){var t,s
t=H.e0
s=H.eq
switch(b?-1:a){case 0:throw H.e(H.h1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
fE:function(a,b){var t,s,r,q,p,o,n,m
t=$.ag
if(t==null){t=H.bu("self")
$.ag=t}s=$.ep
if(s==null){s=H.bu("receiver")
$.ep=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.fD(q,!o,r,b)
if(q===1){t="return function(){return this."+H.d(t)+"."+H.d(r)+"(this."+H.d(s)+");"
s=$.C
$.C=s+1
return new Function(t+H.d(s)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
t="return function("+m+"){return this."+H.d(t)+"."+H.d(r)+"(this."+H.d(s)+", "+m+");"
s=$.C
$.C=s+1
return new Function(t+H.d(s)+"}")()},
ek:function(a,b,c,d,e,f,g){var t,s
t=J.aK(b)
s=!!J.o(d).$isu?J.aK(d):d
return H.fF(a,t,c,s,!!e,f,g)},
e0:function(a){return a.a},
eq:function(a){return a.c},
bu:function(a){var t,s,r,q,p
t=new H.af("self","target","receiver","name")
s=J.aK(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
hz:function(a,b){var t=new H.bN(a,[b])
t.br(a)
return t},
fh:function(a){var t
if("$S" in a){t=a.$S
if(typeof t=="number")return u.types[t]
else return a.$S()}return},
bl:function(a,b){var t,s
if(a==null)return!1
if(typeof a=="function")return!0
t=H.fh(J.o(a))
if(t==null)return!1
s=H.fp(t,null,b,null)
return s},
hI:function(a){throw H.e(new P.bB(a))},
h1:function(a){return new H.cq(a)},
fl:function(a){return u.getIsolateTag(a)},
w:function(a,b){a.$ti=b
return a},
ac:function(a){if(a==null)return
return a.$ti},
hM:function(a,b,c){return H.ad(a["$as"+H.d(c)],H.ac(b))},
hu:function(a,b,c,d){var t=H.ad(a["$as"+H.d(c)],H.ac(b))
return t==null?null:t[d]},
fm:function(a,b,c){var t=H.ad(a["$as"+H.d(b)],H.ac(a))
return t==null?null:t[c]},
k:function(a,b){var t=H.ac(a)
return t==null?null:t[b]},
fv:function(a){var t=H.W(a,null)
return t},
W:function(a,b){if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].name+H.fr(a,1,b)
if(typeof a=="function")return a.name
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
return H.d(b[b.length-a-1])}if('func' in a)return H.he(a,b)
if('futureOr' in a)return"FutureOr<"+H.W("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
he:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if("bounds" in a){t=a.bounds
if(a0==null){a0=H.w([],[P.n])
s=null}else s=a0.length
r=a0.length
for(q=t.length,p=q;p>0;--p)a0.push("T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o=C.d.t(o+n,a0[a0.length-p-1])
m=t[p]
if(m!=null&&m!==P.h)o+=" extends "+H.W(m,a0)}o+=">"}else{o=""
s=null}l=!!a.v?"void":H.W(a.ret,a0)
if("args" in a){k=a.args
for(j=k.length,i="",h="",g=0;g<j;++g,h=", "){f=k[g]
i=i+h+H.W(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(j=e.length,h="",g=0;g<j;++g,h=", "){f=e[g]
i=i+h+H.W(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(j=H.hr(d),c=j.length,h="",g=0;g<c;++g,h=", "){b=j[g]
i=i+h+H.W(d[b],a0)+(" "+H.d(b))}i+="}"}if(s!=null)a0.length=s
return o+"("+i+") => "+l},
fr:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.ao("")
for(s=b,r="",q=!0,p="";s<a.length;++s,r=", "){t.a=p+r
o=a[s]
if(o!=null)q=!1
p=t.a+=H.W(o,c)}p="<"+t.h(0)+">"
return p},
ad:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bj:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ac(a)
s=J.o(a)
if(s[b]==null)return!1
return H.fe(H.ad(s[d],t),null,c,null)},
fe:function(a,b,c,d){var t,s
if(c==null)return!0
if(a==null){t=c.length
for(s=0;s<t;++s)if(!H.A(null,null,c[s],d))return!1
return!0}t=a.length
for(s=0;s<t;++s)if(!H.A(a[s],b,c[s],d))return!1
return!0},
hL:function(a,b,c){return a.apply(b,H.ad(J.o(b)["$as"+H.d(c)],H.ac(b)))},
A:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
if(a===c)return!0
if(c==null||c===-1||c.name==="h"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="h"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.A(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="j")return!0
if('func' in c)return H.fp(a,b,c,d)
if('func' in a)return c.name==="aI"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
if('futureOr' in c){r="type" in c?c.type:null
if('futureOr' in a)return H.A("type" in a?a.type:null,b,r,d)
else if(H.A(a,b,r,d))return!0
else{if(!('$is'+"x" in s.prototype))return!1
q=s.prototype["$as"+"x"]
p=H.ad(q,t?a.slice(1):null)
return H.A(typeof p==="object"&&p!==null&&p.constructor===Array?p[0]:null,b,r,d)}}o=typeof c==="object"&&c!==null&&c.constructor===Array
n=o?c[0]:c
if(n!==s){m=H.fv(n)
if(!('$is'+m in s.prototype))return!1
l=s.prototype["$as"+m]}else l=null
if(!o)return!0
t=t?a.slice(1):null
o=c.slice(1)
return H.fe(H.ad(l,t),b,o,d)},
fp:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
t=a.bounds
s=c.bounds
if(t.length!==s.length)return!1}else if("bounds" in c)return!1
if(!H.A(a.ret,b,c.ret,d))return!1
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
for(j=0;j<n;++j)if(!H.A(q[j],d,r[j],b))return!1
for(i=j,h=0;i<m;++h,++i)if(!H.A(q[i],d,p[h],b))return!1
for(i=0;i<k;++h,++i)if(!H.A(o[i],d,p[h],b))return!1
g=a.named
f=c.named
if(f==null)return!0
if(g==null)return!1
return H.hD(g,b,f,d)},
hD:function(a,b,c,d){var t,s,r,q
t=Object.getOwnPropertyNames(c)
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
if(!H.A(c[q],d,a[q],b))return!1}return!0},
fo:function(a,b){if(a==null)return
return H.fj(a,{func:1},b,0)},
fj:function(a,b,c,d){var t,s,r,q,p,o
if("v" in a)b.v=a.v
else if("ret" in a)b.ret=H.ej(a.ret,c,d)
if("args" in a)b.args=H.dC(a.args,c,d)
if("opt" in a)b.opt=H.dC(a.opt,c,d)
if("named" in a){t=a.named
s={}
r=Object.keys(t)
for(q=r.length,p=0;p<q;++p){o=r[p]
s[o]=H.ej(t[o],c,d)}b.named=s}return b},
ej:function(a,b,c){var t,s
if(a==null)return a
if(a===-1)return a
if(typeof a=="function")return a
if(typeof a==="number"){if(a<c)return a
return b[a-c]}if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.dC(a,b,c)
if('func' in a){t={func:1}
if("bounds" in a){s=a.bounds
c+=s.length
t.bounds=H.dC(s,b,c)}return H.fj(a,t,b,c)}throw H.e(P.e_("Unknown RTI format in bindInstantiatedType."))},
dC:function(a,b,c){var t,s,r
t=a.slice()
for(s=t.length,r=0;r<s;++r)t[r]=H.ej(t[r],b,c)
return t},
hB:function(a){var t,s,r,q,p,o
t=$.fn.$1(a)
s=$.dD[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.dJ[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.fd.$2(a,t)
if(t!=null){s=$.dD[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.dJ[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.dR(r)
$.dD[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.dJ[t]=r
return r}if(p==="-"){o=H.dR(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ft(a,r)
if(p==="*")throw H.e(P.f3(t))
if(u.leafTags[t]===true){o=H.dR(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ft(a,r)},
ft:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.em(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
dR:function(a){return J.em(a,!1,null,!!a.$ise5)},
hC:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.dR(t)
else return J.em(t,c,null,null)},
hx:function(){if(!0===$.el)return
$.el=!0
H.hy()},
hy:function(){var t,s,r,q,p,o,n,m
$.dD=Object.create(null)
$.dJ=Object.create(null)
H.hw()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.fu.$1(p)
if(o!=null){n=H.hC(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
hw:function(){var t,s,r,q,p,o,n
t=C.G()
t=H.a9(C.D,H.a9(C.I,H.a9(C.q,H.a9(C.q,H.a9(C.H,H.a9(C.E,H.a9(C.F(C.r),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.fn=new H.dG(p)
$.fd=new H.dH(o)
$.fu=new H.dI(n)},
a9:function(a,b){return a(b)||b},
hG:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
cp:function cp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
cF:function cF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cm:function cm(a,b){this.a=a
this.b=b},
bR:function bR(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a){this.a=a},
ah:function ah(a,b){this.a=a
this.b=b},
dW:function dW(a){this.a=a},
bb:function bb(a){this.a=a
this.b=null},
aD:function aD(){},
cD:function cD(){},
cz:function cz(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(){},
bN:function bN(a,b){this.a=a
this.$ti=b},
cq:function cq(a){this.a=a},
b0:function b0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
Q:function Q(a,b,c){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=null
_.r=b
_.$ti=c},
bQ:function bQ(a){this.a=a},
bS:function bS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bT:function bT(a,b){this.a=a
this.$ti=b},
bU:function bU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dG:function dG(a){this.a=a},
dH:function dH(a){this.a=a},
dI:function dI(a){this.a=a},
T:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bk(b,a))},
al:function al(){},
aS:function aS(){},
ak:function ak(){},
aT:function aT(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
aU:function aU(){},
cl:function cl(){},
as:function as(){},
at:function at(){},
au:function au(){},
av:function av(){},
hr:function(a){return J.eF(a?Object.keys(a):[],null)},
hE:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
o:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aM.prototype
return J.aL.prototype}if(typeof a=="string")return J.a1.prototype
if(a==null)return J.aN.prototype
if(typeof a=="boolean")return J.bP.prototype
if(a.constructor==Array)return J.J.prototype
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
return a}if(a instanceof P.h)return a
return J.bm(a)},
em:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bm:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.el==null){H.hx()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(P.f3("Return interceptor for "+H.d(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$e4()]
if(p!=null)return p
p=H.hB(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){Object.defineProperty(q,$.$get$e4(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
fP:function(a,b){if(a<0||a>4294967295)throw H.e(P.a5(a,0,4294967295,"length",null))
return J.eF(new Array(a),b)},
eF:function(a,b){return J.aK(H.w(a,[b]))},
aK:function(a){a.fixed$length=Array
return a},
hs:function(a){if(typeof a=="number")return J.a0.prototype
if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(a.constructor==Array)return J.J.prototype
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
return a}if(a instanceof P.h)return a
return J.bm(a)},
ab:function(a){if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(a.constructor==Array)return J.J.prototype
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
return a}if(a instanceof P.h)return a
return J.bm(a)},
dE:function(a){if(a==null)return a
if(a.constructor==Array)return J.J.prototype
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
return a}if(a instanceof P.h)return a
return J.bm(a)},
fk:function(a){if(typeof a=="number")return J.a0.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.ap.prototype
return a},
ht:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
return a}if(a instanceof P.h)return a
return J.bm(a)},
fx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hs(a).t(a,b)},
bn:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).u(a,b)},
fy:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.fk(a).K(a,b)},
dX:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fq(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ab(a).j(a,b)},
fz:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fq(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dE(a).v(a,b,c)},
fA:function(a,b,c,d){return J.ht(a).bu(a,b,c,d)},
dY:function(a,b,c){return J.ab(a).c3(a,b,c)},
fB:function(a,b){return J.dE(a).R(a,b)},
en:function(a){return J.o(a).gl(a)},
dZ:function(a){return J.dE(a).gp(a)},
ae:function(a){return J.ab(a).gi(a)},
bo:function(a){return J.o(a).h(a)},
i:function i(){},
bP:function bP(){},
aN:function aN(){},
ai:function ai(){},
cn:function cn(){},
ap:function ap(){},
K:function K(){},
J:function J(a){this.$ti=a},
e2:function e2(a){this.$ti=a},
br:function br(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
a0:function a0(){},
aM:function aM(){},
aL:function aL(){},
a1:function a1(){}},P={
h5:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.hn()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aA(new P.cT(t),1)).observe(s,{childList:true})
return new P.cS(t,s,r)}else if(self.setImmediate!=null)return P.ho()
return P.hp()},
h6:function(a){self.scheduleImmediate(H.aA(new P.cU(a),0))},
h7:function(a){self.setImmediate(H.aA(new P.cV(a),0))},
h8:function(a){P.e8(C.y,a)},
e8:function(a,b){var t=C.a.H(a.a,1000)
return P.ha(t<0?0:t,b)},
eS:function(a,b){var t=C.a.H(a.a,1000)
return P.hb(t<0?0:t,b)},
ha:function(a,b){var t=new P.be(!0,0)
t.bs(a,b)
return t},
hb:function(a,b){var t=new P.be(!1,0)
t.bt(a,b)
return t},
eh:function(a){return new P.cP(new P.bd(new P.m(0,$.f,[a]),[a]),!1,[a])},
ed:function(a,b){a.$2(0,null)
b.b=!0
return b.a.a},
ea:function(a,b){P.hc(a,b)},
ec:function(a,b){b.O(0,a)},
eb:function(a,b){b.P(H.B(a),H.v(a))},
hc:function(a,b){var t,s,r,q
t=new P.dy(b)
s=new P.dz(b)
r=J.o(a)
if(!!r.$ism)a.at(t,s,null)
else if(!!r.$isx)a.ae(t,s,null)
else{q=new P.m(0,$.f,[null])
q.a=4
q.c=a
q.at(t,null,null)}},
ei:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
return $.f.ay(new P.dB(t))},
fL:function(a,b,c){var t=new P.m(0,$.f,[c])
P.h3(a,new P.bH(t,b))
return t},
hd:function(a,b,c){$.f.toString
a.w(b,c)},
h9:function(a,b,c){var t=new P.m(0,b,[c])
t.a=4
t.c=a
return t},
f4:function(a,b){var t,s,r
b.a=1
try{a.ae(new P.d6(b),new P.d7(b),null)}catch(r){t=H.B(r)
s=H.v(r)
P.dS(new P.d8(b,t,s))}},
d5:function(a,b){var t,s
for(;t=a.a,t===2;)a=a.c
if(t>=4){s=b.a9()
b.a=a.a
b.c=a.c
P.a7(b,s)}else{s=b.c
b.a=2
b.c=a
a.aS(s)}},
a7:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=p.a
p=p.b
s.toString
P.ay(null,null,s,o,p)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.a7(t.a,b)}s=t.a
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
P.ay(null,null,s,p,o)
return}j=$.f
if(j==null?l!=null:j!==l)$.f=l
else j=null
s=b.c
if(s===8)new P.dd(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.dc(r,b,m).$0()}else if((s&2)!==0)new P.db(t,r,b).$0()
if(j!=null)$.f=j
s=r.b
if(!!J.o(s).$isx){if(s.a>=4){i=o.c
o.c=null
b=o.aa(i)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.d5(s,o)
return}}h=b.b
i=h.c
h.c=null
b=h.aa(i)
s=r.a
p=r.b
if(!s){h.a=4
h.c=p}else{h.a=8
h.c=p}t.a=h
s=h}},
hi:function(a,b){if(H.bl(a,{func:1,args:[P.h,P.y]}))return b.ay(a)
if(H.bl(a,{func:1,args:[P.h]}))return a
throw H.e(P.eo(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
hg:function(){var t,s
for(;t=$.a8,t!=null;){$.ax=null
s=t.b
$.a8=s
if(s==null)$.aw=null
t.a.$0()}},
hl:function(){$.ee=!0
try{P.hg()}finally{$.ax=null
$.ee=!1
if($.a8!=null)$.$get$e9().$1(P.fg())}},
fc:function(a){var t=new P.b2(a)
if($.a8==null){$.aw=t
$.a8=t
if(!$.ee)$.$get$e9().$1(P.fg())}else{$.aw.b=t
$.aw=t}},
hk:function(a){var t,s,r
t=$.a8
if(t==null){P.fc(a)
$.ax=$.aw
return}s=new P.b2(a)
r=$.ax
if(r==null){s.b=t
$.ax=s
$.a8=s}else{s.b=r.b
r.b=s
$.ax=s
if(s.b==null)$.aw=s}},
dS:function(a){var t=$.f
if(C.b===t){P.U(null,null,C.b,a)
return}t.toString
P.U(null,null,t,t.au(a))},
hK:function(a){return new P.dr(a,!1)},
b_:function(a,b,c,d,e,f){return new P.b3(0,b,c,d,a,[f])},
bh:function(a){var t,s,r,q
if(a==null)return
try{a.$0()}catch(r){t=H.B(r)
s=H.v(r)
q=$.f
q.toString
P.ay(null,null,q,t,s)}},
f8:function(a,b){var t=$.f
t.toString
P.ay(null,null,t,a,b)},
hh:function(){},
h3:function(a,b){var t=$.f
if(t===C.b){t.toString
return P.e8(a,b)}return P.e8(a,t.au(b))},
h4:function(a,b){var t,s
t=$.f
if(t===C.b){t.toString
return P.eS(a,b)}s=t.b2(b,P.cE)
$.f.toString
return P.eS(a,s)},
ay:function(a,b,c,d,e){var t={}
t.a=d
P.hk(new P.dA(t,e))},
fa:function(a,b,c,d){var t,s
s=$.f
if(s===c)return d.$0()
$.f=c
t=s
try{s=d.$0()
return s}finally{$.f=t}},
fb:function(a,b,c,d,e){var t,s
s=$.f
if(s===c)return d.$1(e)
$.f=c
t=s
try{s=d.$1(e)
return s}finally{$.f=t}},
hj:function(a,b,c,d,e,f){var t,s
s=$.f
if(s===c)return d.$2(e,f)
$.f=c
t=s
try{s=d.$2(e,f)
return s}finally{$.f=t}},
U:function(a,b,c,d){var t=C.b!==c
if(t)d=!(!t||!1)?c.au(d):c.bV(d)
P.fc(d)},
cT:function cT(a){this.a=a},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a){this.a=a},
cV:function cV(a){this.a=a},
be:function be(a,b){this.a=a
this.b=null
this.c=b},
dv:function dv(a,b){this.a=a
this.b=b},
du:function du(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cP:function cP(a,b,c){this.a=a
this.b=b
this.$ti=c},
cR:function cR(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a){this.a=a},
dz:function dz(a){this.a=a},
dB:function dB(a){this.a=a},
cX:function cX(a,b){this.a=a
this.$ti=b},
b4:function b4(a,b,c,d){var _=this
_.dx=a
_.fr=_.dy=null
_.x=b
_.c=_.b=_.a=null
_.d=c
_.e=d
_.r=_.f=null},
a6:function a6(){},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.r=_.f=_.e=_.d=null
_.$ti=d},
dt:function dt(a){this.a=a},
bH:function bH(a,b){this.a=a
this.b=b},
b6:function b6(){},
bd:function bd(a,b){this.a=a
this.$ti=b},
b9:function b9(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
m:function m(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
d2:function d2(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
d6:function d6(a){this.a=a},
d7:function d7(a){this.a=a},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
de:function de(a){this.a=a},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a
this.b=null},
aZ:function aZ(){},
cB:function cB(a,b){this.a=a
this.b=b},
cC:function cC(a,b){this.a=a
this.b=b},
cA:function cA(){},
dm:function dm(){},
dp:function dp(a){this.a=a},
dn:function dn(a){this.a=a},
cW:function cW(){},
b3:function b3(a,b,c,d,e,f){var _=this
_.a=null
_.b=a
_.c=null
_.d=b
_.e=c
_.f=d
_.r=e
_.$ti=f},
M:function M(a,b){this.a=a
this.$ti=b},
aq:function aq(a,b,c){var _=this
_.x=a
_.c=_.b=_.a=null
_.d=b
_.e=c
_.r=_.f=null},
b5:function b5(){},
dq:function dq(){},
cY:function cY(){},
ar:function ar(a){this.b=a
this.a=null},
dg:function dg(){},
dh:function dh(a,b){this.a=a
this.b=b},
bc:function bc(a){this.c=this.b=null
this.a=a},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
dr:function dr(a,b){this.a=null
this.b=a
this.c=b},
cE:function cE(){},
X:function X(a,b){this.a=a
this.b=b},
dx:function dx(){},
dA:function dA(a,b){this.a=a
this.b=b},
di:function di(){},
dk:function dk(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function(a,b,c,d,e){return new H.Q(0,0,[d,e])},
eH:function(a,b,c){return H.fi(a,new H.Q(0,0,[b,c]))},
eG:function(a,b){return new H.Q(0,0,[a,b])},
fS:function(a){return H.fi(a,new H.Q(0,0,[null,null]))},
fN:function(a,b,c){var t,s
if(P.ef(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$az()
s.push(a)
try{P.hf(a,t)}finally{s.pop()}s=P.eR(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eD:function(a,b,c){var t,s,r
if(P.ef(a))return b+"..."+c
t=new P.ao(b)
s=$.$get$az()
s.push(a)
try{r=t
r.a=P.eR(r.gL(),a,", ")}finally{s.pop()}s=t
s.a=s.gL()+c
s=t.gL()
return s.charCodeAt(0)==0?s:s},
ef:function(a){var t,s
for(t=0;s=$.$get$az(),t<s.length;++t)if(a===s[t])return!0
return!1},
hf:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gp(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.m())return
q=H.d(t.gk())
b.push(q)
s+=q.length+2;++r}if(!t.m()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gk();++r
if(!t.m()){if(r<=4){b.push(H.d(n))
return}p=H.d(n)
o=b.pop()
s+=p.length+2}else{m=t.gk();++r
for(;t.m();n=m,m=l){l=t.gk();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.d(n)
p=H.d(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
fR:function(a,b,c){var t=P.fQ(null,null,null,b,c)
a.S(0,new P.bV(t))
return t},
e7:function(a){var t,s,r
t={}
if(P.ef(a))return"{...}"
s=new P.ao("")
try{$.$get$az().push(a)
r=s
r.a=r.gL()+"{"
t.a=!0
a.S(0,new P.c_(t,s))
t=s
t.a=t.gL()+"}"}finally{$.$get$az().pop()}t=s.gL()
return t.charCodeAt(0)==0?t:t},
cK:function cK(a,b){this.a=a
this.$ti=b},
bV:function bV(a){this.a=a},
bW:function bW(){},
L:function L(){},
bZ:function bZ(){},
c_:function c_(a,b){this.a=a
this.b=b},
c0:function c0(){},
dw:function dw(){},
c1:function c1(){},
cL:function cL(a,b){this.a=a
this.$ti=b},
ba:function ba(){},
bf:function bf(){},
fK:function(a){var t=J.o(a)
if(!!t.$isaD)return t.h(a)
return"Instance of '"+H.aV(a)+"'"},
fT:function(a,b,c,d){var t,s,r
t=J.fP(a,d)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
eI:function(a,b,c){var t,s
t=H.w([],[c])
for(s=J.dZ(a);s.m();)t.push(s.gk())
return t},
eR:function(a,b,c){var t=J.dZ(b)
if(!t.m())return a
if(c.length===0){do a+=H.d(t.gk())
while(t.m())}else{a+=H.d(t.gk())
for(;t.m();)a=a+c+H.d(t.gk())}return a},
h2:function(){var t,s
if($.$get$f5())return H.v(new Error())
try{throw H.e("")}catch(s){H.B(s)
t=H.v(s)
return t}},
fG:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
fH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aG:function(a){if(a>=10)return""+a
return"0"+a},
fJ:function(a,b,c,d,e,f){return new P.D(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eB:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bo(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fK(a)},
e_:function(a){return new P.H(!1,null,null,a)},
eo:function(a,b,c){return new P.H(!0,a,b,c)},
h_:function(a){return new P.an(null,null,!1,null,null,a)},
co:function(a,b,c){return new P.an(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.an(b,c,!0,a,d,"Invalid value")},
eQ:function(a,b,c,d,e,f){if(a>c)throw H.e(P.a5(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.a5(b,a,c,"end",f))
return b},
eC:function(a,b,c,d,e){var t=e!=null?e:J.ae(b)
return new P.bL(b,t,!0,a,c,"Index out of range")},
G:function(a){return new P.cM(a)},
f3:function(a){return new P.cH(a)},
cy:function(a){return new P.z(a)},
aE:function(a){return new P.bz(a)},
fU:function(a,b,c,d){var t,s
t=H.w([],[d])
C.c.si(t,a)
for(s=0;s<a;++s)t[s]=b.$1(s)
return t},
V:function V(){},
aF:function aF(a,b){this.a=a
this.b=b},
aa:function aa(){},
D:function D(a){this.a=a},
bD:function bD(){},
bE:function bE(){},
Z:function Z(){},
am:function am(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
an:function an(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bL:function bL(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cM:function cM(a){this.a=a},
cH:function cH(a){this.a=a},
z:function z(a){this.a=a},
bz:function bz(a){this.a=a},
aY:function aY(){},
bB:function bB(a){this.a=a},
d1:function d1(a){this.a=a},
aI:function aI(){},
l:function l(){},
a_:function a_(){},
bO:function bO(){},
u:function u(){},
j:function j(){},
aB:function aB(){},
h:function h(){},
y:function y(){},
n:function n(){},
ao:function ao(a){this.a=a},
df:function df(){},
eA:function(){var t=$.ez
if(t==null){t=J.dY(window.navigator.userAgent,"Opera",0)
$.ez=t}return t},
fI:function(){var t,s
t=$.ew
if(t!=null)return t
s=$.ex
if(s==null){s=J.dY(window.navigator.userAgent,"Firefox",0)
$.ex=s}if(s)t="-moz-"
else{s=$.ey
if(s==null){s=!P.eA()&&J.dY(window.navigator.userAgent,"Trident/",0)
$.ey=s}if(s)t="-ms-"
else t=P.eA()?"-o-":"-webkit-"}$.ew=t
return t}},W={
d_:function(a,b,c,d){var t=W.hm(new W.d0(c),W.b)
t=new W.cZ(0,a,b,t,!1)
t.bQ()
return t},
hm:function(a,b){var t=$.f
if(t===C.b)return a
return t.b2(a,b)},
c:function c(){},
bp:function bp(){},
bq:function bq(){},
Y:function Y(){},
bA:function bA(){},
bC:function bC(){},
a:function a(){},
b:function b(){},
P:function P(){},
bG:function bG(){},
S:function S(){},
a3:function a3(){},
cx:function cx(){},
F:function F(){},
cZ:function cZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d0:function d0(a){this.a=a},
b7:function b7(){}},R={I:function I(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.$ti=g},bs:function bs(a){this.a=a},bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c}},A={
by:function(a,b,c,d){var t=P.fT(a*b,c,!1,d)
if(a===0)return new A.O(0,b,H.w([],[d]),[d])
return A.er(a,t,d)},
es:function(a,b,c){var t=P.eI(b,!0,c)
return A.er(a,new P.cK(t,[c]),c)},
er:function(a,b,c){var t=a>0&&b!=null
t=t?C.a.aD(J.ae(b),a):0
return new A.O(a,t,b,[c])},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fs:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=$.$get$bY()
t.toString
if($.dF&&t.b!=null)t.c=C.t
else{if(t.b!=null)H.N(P.G('Please set "hierarchicalLoggingEnabled" to true if you want to change the level on a non-root logger.'))
$.f9=C.t}t.aL().a_(new A.dK())
t=P.n
s=P.fR(P.fS([C.j,"#000",C.l,"#483D8B",C.m,"#00008B",C.i,"#FF69B4",C.f,"#FFC0CB"]),X.q,t)
r=[A.O,t]
q=P.b_(null,null,null,null,!1,r)
r=P.b_(null,null,null,null,!1,r)
p=P.b_(null,null,null,null,!1,T.aX)
o=P.b_(null,null,null,null,!1,P.l)
n=P.fJ(0,0,0,67,0,0)
m=new T.cr(P.eG(t,[R.I,,,]),n,0,128,128,0,null,q,r,p,0,o,[t])
$.$get$bg().B(C.o,"Max Age: null",null,null)
l=new S.aC(128,128)
t=document
r=t.querySelector("#canvas")
$.$get$f6().B(C.o,"Canvas: 128x128 (512x512px)",null,null)
r.width=512
r.height=512
l.e=r
l.c=4
l.d=4
r.toString
l.f=r.getContext("2d")
switch(C.w){case C.w:r=r.style
C.e.ar(r,(r&&C.e).ai(r,"image-rendering"),"pixelated","")
C.e.ar(r,C.e.ai(r,"image-rendering"),"optimizespeed","")
r.width="512px"
r.height="512px"
break
case C.V:r=r.style
C.e.ar(r,(r&&C.e).ai(r,"image-rendering"),"pixelated","")
r.width="100%"
r.height="100%"
r.position="fixed"
r.top="0px"
r.left="0px"
r.right="0px"
r.bottom="0px"
break}new P.M(o,[H.k(o,0)]).a_(new A.dL(m,128,128,s))
new P.M(q,[H.k(q,0)]).a_(H.hz(l.gcn(),null))
new P.M(p,[H.k(p,0)]).a_(new A.dM(m))
k=t.querySelector("#controls_back")
j=t.querySelector("#controls_pause")
i=t.querySelector("#controls_play")
h=t.querySelector("#controls_forward")
j.toString
W.d_(j,"click",new A.dN(m),!1)
i.toString
W.d_(i,"click",new A.dO(m),!1)
k.toString
W.d_(k,"click",new A.dP(m),!1)
h.toString
W.d_(h,"click",new A.dQ(m),!1)
m.aA(0)},
dK:function dK(){},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dM:function dM(a){this.a=a},
dN:function dN(a){this.a=a},
dO:function dO(a){this.a=a},
dP:function dP(a){this.a=a},
dQ:function dQ(a){this.a=a}},Y={
fM:function(a,b,c,d,e){var t=new H.cN(e,new Y.bK(),[H.k(e,0)])
return new Y.aJ(a,b,c,d,e,t.gi(t))},
aJ:function aJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bK:function bK(){}},S={bv:function bv(){},aC:function aC(a,b){var _=this
_.a=a
_.b=b
_.f=_.e=_.d=_.c=null}},K={r:function r(a,b){this.a=a
this.b=b},c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},c5:function c5(){},c6:function c6(){},c7:function c7(){},c8:function c8(){},c9:function c9(){},ca:function ca(){},cb:function cb(){},cc:function cc(){},cd:function cd(){},ce:function ce(){},cf:function cf(){}},E={aW:function aW(a,b){this.a=a
this.b=b},bw:function bw(){}},B={bx:function bx(){}},X={q:function q(a,b){this.a=a
this.b=b},bI:function bI(a){var _=this
_.d=a
_.c=_.b=_.a=null},bJ:function bJ(a){this.a=a}},T={aX:function aX(a,b){this.a=a
this.b=b},cr:function cr(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.$ti=m},cw:function cw(){},cv:function cv(a){this.a=a},cs:function cs(){},ct:function ct(a){this.a=a},cu:function cu(a){this.a=a}},U={
hJ:function(a,b){var t,s,r,q
t={}
t.a=null
t.b=null
t.c=0
s=new U.dT(t,a,new U.dV(t,b))
r=new U.dU(t)
q=P.b_(r,s,r,s,!1,P.l)
t.a=q
return new P.M(q,[H.k(q,0)])},
dV:function dV(a,b){this.a=a
this.b=b},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a){this.a=a}},N={
a2:function(a){return $.$get$eK().cl(a,new N.bX(a))},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=d
_.f=null},
bX:function bX(a){this.a=a},
R:function R(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i}}
var v=[C,H,J,P,W,R,A,Y,S,K,E,B,X,T,U,N]
setFunctionNamesIfNecessary(v)
var $={}
H.e3.prototype={}
J.i.prototype={
u:function(a,b){return a===b},
gl:function(a){return H.a4(a)},
h:function(a){return"Instance of '"+H.aV(a)+"'"}}
J.bP.prototype={
h:function(a){return String(a)},
gl:function(a){return a?519018:218159},
$isV:1}
J.aN.prototype={
u:function(a,b){return null==b},
h:function(a){return"null"},
gl:function(a){return 0},
$isj:1}
J.ai.prototype={
gl:function(a){return 0},
h:function(a){return String(a)}}
J.cn.prototype={}
J.ap.prototype={}
J.K.prototype={
h:function(a){var t=a[$.$get$ev()]
if(t==null)return this.bp(a)
return"JavaScript function for "+H.d(J.bo(t))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.J.prototype={
cc:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.d(a[s])
return t.join(b)},
c5:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.e(P.aE(a))}return s},
R:function(a,b){return a[b]},
bi:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.N(P.G("setRange"))
P.eQ(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
s=J.ab(d)
if(e+t>s.gi(d))throw H.e(H.fO())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.j(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.j(d,e+r)},
a4:function(a,b,c,d){return this.bi(a,b,c,d,0)},
b3:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bn(a[t],b))return!0
return!1},
h:function(a){return P.eD(a,"[","]")},
gp:function(a){return new J.br(a,a.length,0)},
gl:function(a){return H.a4(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.N(P.G("set length"))
if(b<0)throw H.e(P.a5(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.bk(a,b))
return a[b]},
v:function(a,b,c){if(!!a.immutable$list)H.N(P.G("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.bk(a,b))
if(b>=a.length||b<0)throw H.e(H.bk(a,b))
a[b]=c},
t:function(a,b){var t,s
t=C.a.t(a.length,C.n.gi(b))
s=H.w([],[H.k(a,0)])
this.si(s,t)
this.a4(s,0,a.length,a)
this.a4(s,a.length,t,b)
return s},
$isp:1,
$isu:1}
J.e2.prototype={}
J.br.prototype={
gk:function(){return this.d},
m:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.hH(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.a0.prototype={
T:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.G(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl:function(a){return a&0x1FFFFFFF},
t:function(a,b){if(typeof b!=="number")throw H.e(H.bi(b))
return a+b},
E:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aD:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.b_(a,b)},
H:function(a,b){return(a|0)===a?a/b|0:this.b_(a,b)},
b_:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(P.G("Result of truncating division is "+H.d(t)+": "+H.d(a)+" ~/ "+b))},
bj:function(a,b){if(b<0)throw H.e(H.bi(b))
return b>31?0:a<<b>>>0},
aY:function(a,b){var t
if(a>0)t=this.bN(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
bN:function(a,b){return b>31?0:a>>>b},
K:function(a,b){if(typeof b!=="number")throw H.e(H.bi(b))
return a<b},
V:function(a,b){if(typeof b!=="number")throw H.e(H.bi(b))
return a>b},
$isaB:1}
J.aM.prototype={
C:function(a,b){var t=this.bj(1,b-1)
return((a&t-1)>>>0)-((a&t)>>>0)},
$isl:1}
J.aL.prototype={}
J.a1.prototype={
bz:function(a,b){if(b>=a.length)throw H.e(H.bk(a,b))
return a.charCodeAt(b)},
t:function(a,b){if(typeof b!=="string")throw H.e(P.eo(b,null,null))
return a+b},
bm:function(a,b,c){var t
if(c>a.length)throw H.e(P.a5(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bl:function(a,b){return this.bm(a,b,0)},
aC:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.co(b,null,null))
if(b>c)throw H.e(P.co(b,null,null))
if(c>a.length)throw H.e(P.co(c,null,null))
return a.substring(b,c)},
aB:function(a,b){return this.aC(a,b,null)},
ce:function(a,b,c){var t
c=a.length
t=b.length
if(c+t>c)c-=t
return a.lastIndexOf(b,c)},
cd:function(a,b){return this.ce(a,b,null)},
c3:function(a,b,c){if(c>a.length)throw H.e(P.a5(c,0,a.length,null,null))
return H.hG(a,b,c)},
h:function(a){return a},
gl:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gi:function(a){return a.length},
$isn:1}
H.p.prototype={}
H.aO.prototype={
gp:function(a){return new H.aP(this,this.gi(this),0)},
gI:function(a){if(this.gi(this)===0)throw H.e(H.eE())
return this.R(0,0)}}
H.aP.prototype={
gk:function(){return this.d},
m:function(){var t,s,r,q
t=this.a
s=J.ab(t)
r=s.gi(t)
if(this.b!==r)throw H.e(P.aE(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.R(t,q);++this.c
return!0}}
H.aR.prototype={
gp:function(a){var t=this.a
return new H.c2(t.gp(t),this.b)},
gi:function(a){var t=this.a
return t.gi(t)},
gI:function(a){var t=this.a
return this.b.$1(t.gI(t))},
$asa_:function(a,b){return[b]}}
H.bF.prototype={$isp:1,
$asp:function(a,b){return[b]}}
H.c2.prototype={
m:function(){var t=this.b
if(t.m()){this.a=this.c.$1(t.gk())
return!0}this.a=null
return!1},
gk:function(){return this.a}}
H.c3.prototype={
gi:function(a){return J.ae(this.a)},
R:function(a,b){return this.b.$1(J.fB(this.a,b))},
$asp:function(a,b){return[b]},
$asaO:function(a,b){return[b]},
$asa_:function(a,b){return[b]}}
H.cN.prototype={
gp:function(a){return new H.cO(J.dZ(this.a),this.b)}}
H.cO.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(s.$1(t.gk()))return!0
return!1},
gk:function(){return this.a.gk()}}
H.aH.prototype={}
H.cJ.prototype={
v:function(a,b,c){throw H.e(P.G("Cannot modify an unmodifiable list"))}}
H.b1.prototype={}
H.cp.prototype={}
H.cF.prototype={
q:function(a){var t,s,r
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
H.cm.prototype={
h:function(a){var t=this.b
if(t==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.bR.prototype={
h:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.d(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.d(this.a)+")"}}
H.cI.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ah.prototype={}
H.dW.prototype={
$1:function(a){if(!!J.o(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:4}
H.bb.prototype={
h:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isy:1}
H.aD.prototype={
h:function(a){return"Closure '"+H.aV(this).trim()+"'"},
gcw:function(){return this},
$D:null}
H.cD.prototype={}
H.cz.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.af.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.af))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gl:function(a){var t,s
t=this.c
if(t==null)s=H.a4(this.a)
else s=typeof t!=="object"?J.en(t):H.a4(t)
return(s^H.a4(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.aV(t)+"'")}}
H.bM.prototype={
br:function(a){if(false)H.fo(0,0)},
h:function(a){var t="<"+C.c.cc([new H.b0(H.k(this,0))],", ")+">"
return H.d(this.a)+" with "+t}}
H.bN.prototype={
$1:function(a){return this.a.$1$1(a,this.$ti[0])},
$S:function(){return H.fo(H.fh(this.a),this.$ti)}}
H.cq.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.b0.prototype={
gab:function(){var t=this.b
if(t==null){t=H.fv(this.a)
this.b=t}return t},
h:function(a){var t=this.c
if(t==null){t=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.gab(),u.mangledGlobalNames)
this.c=t}return t},
gl:function(a){var t=this.d
if(t==null){t=C.d.gl(this.gab())
this.d=t}return t},
u:function(a,b){if(b==null)return!1
return b instanceof H.b0&&this.gab()===b.gab()}}
H.Q.prototype={
gi:function(a){return this.a},
gca:function(a){return this.a===0},
gb7:function(){return new H.bT(this,[H.k(this,0)])},
ga1:function(a){return H.fV(this.gb7(),new H.bQ(this),H.k(this,0),H.k(this,1))},
c4:function(a){var t=this.b
if(t==null)return!1
return this.bC(t,a)},
j:function(a,b){var t,s,r,q
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a7(t,b)
r=s==null?null:s.b
return r}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)return
s=this.a7(q,b)
r=s==null?null:s.b
return r}else return this.c8(b)},
c8:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aM(t,this.b5(a))
r=this.b6(s,a)
if(r<0)return
return s[r].b},
v:function(a,b,c){var t,s
if(typeof b==="string"){t=this.b
if(t==null){t=this.an()
this.b=t}this.aG(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.an()
this.c=s}this.aG(s,b,c)}else this.c9(b,c)},
c9:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=this.an()
this.d=t}s=this.b5(a)
r=this.aM(t,s)
if(r==null)this.as(t,s,[this.ao(a,b)])
else{q=this.b6(r,a)
if(q>=0)r[q].b=b
else r.push(this.ao(a,b))}},
cl:function(a,b){var t
if(this.c4(a))return this.j(0,a)
t=b.$0()
this.v(0,a,t)
return t},
bY:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aN()}},
S:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(P.aE(this))
t=t.c}},
aG:function(a,b,c){var t=this.a7(a,b)
if(t==null)this.as(a,b,this.ao(b,c))
else t.b=c},
aN:function(){this.r=this.r+1&67108863},
ao:function(a,b){var t,s
t=new H.bS(a,b)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aN()
return t},
b5:function(a){return J.en(a)&0x3ffffff},
b6:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bn(a[s].a,b))return s
return-1},
h:function(a){return P.e7(this)},
a7:function(a,b){return a[b]},
aM:function(a,b){return a[b]},
as:function(a,b,c){a[b]=c},
bD:function(a,b){delete a[b]},
bC:function(a,b){return this.a7(a,b)!=null},
an:function(){var t=Object.create(null)
this.as(t,"<non-identifier-key>",t)
this.bD(t,"<non-identifier-key>")
return t}}
H.bQ.prototype={
$1:function(a){return this.a.j(0,a)},
$S:function(){var t=this.a
return{func:1,ret:H.k(t,1),args:[H.k(t,0)]}}}
H.bS.prototype={}
H.bT.prototype={
gi:function(a){return this.a.a},
gp:function(a){var t,s
t=this.a
s=new H.bU(t,t.r)
s.c=t.e
return s}}
H.bU.prototype={
gk:function(){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.e(P.aE(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.dG.prototype={
$1:function(a){return this.a(a)},
$S:4}
H.dH.prototype={
$2:function(a,b){return this.a(a,b)},
$S:10}
H.dI.prototype={
$1:function(a){return this.a(a)}}
H.al.prototype={}
H.aS.prototype={
gi:function(a){return a.length},
$ise5:1,
$ase5:function(){}}
H.ak.prototype={
j:function(a,b){H.T(b,a,a.length)
return a[b]},
$isp:1,
$asp:function(){return[P.aa]},
$asL:function(){return[P.aa]},
$isu:1,
$asu:function(){return[P.aa]}}
H.aT.prototype={$isp:1,
$asp:function(){return[P.l]},
$asL:function(){return[P.l]},
$isu:1,
$asu:function(){return[P.l]}}
H.cg.prototype={
j:function(a,b){H.T(b,a,a.length)
return a[b]}}
H.ch.prototype={
j:function(a,b){H.T(b,a,a.length)
return a[b]}}
H.ci.prototype={
j:function(a,b){H.T(b,a,a.length)
return a[b]}}
H.cj.prototype={
j:function(a,b){H.T(b,a,a.length)
return a[b]}}
H.ck.prototype={
j:function(a,b){H.T(b,a,a.length)
return a[b]}}
H.aU.prototype={
gi:function(a){return a.length},
j:function(a,b){H.T(b,a,a.length)
return a[b]}}
H.cl.prototype={
gi:function(a){return a.length},
j:function(a,b){H.T(b,a,a.length)
return a[b]}}
H.as.prototype={}
H.at.prototype={}
H.au.prototype={}
H.av.prototype={}
P.cT.prototype={
$1:function(a){var t,s
t=this.a
s=t.a
t.a=null
s.$0()},
$S:5}
P.cS.prototype={
$1:function(a){var t,s
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)}}
P.cU.prototype={
$0:function(){this.a.$0()}}
P.cV.prototype={
$0:function(){this.a.$0()}}
P.be.prototype={
bs:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aA(new P.dv(this,b),0),a)
else throw H.e(P.G("`setTimeout()` not found."))},
bt:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aA(new P.du(this,a,Date.now(),b),0),a)
else throw H.e(P.G("Periodic timer."))},
Y:function(){if(self.setTimeout!=null){var t=this.b
if(t==null)return
if(this.a)self.clearTimeout(t)
else self.clearInterval(t)
this.b=null}else throw H.e(P.G("Canceling a timer."))}}
P.dv.prototype={
$0:function(){var t=this.a
t.b=null
t.c=1
this.b.$0()}}
P.du.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.c+1
r=this.b
if(r>0){q=Date.now()-this.c
if(q>(s+1)*r)s=C.a.aD(q,r)}t.c=s
this.d.$1(t)}}
P.cP.prototype={
O:function(a,b){var t
if(this.b)this.a.O(0,b)
else{t=H.bj(b,"$isx",this.$ti,"$asx")
if(t){t=this.a
b.ae(t.gc_(t),t.gc1(),-1)}else P.dS(new P.cR(this,b))}},
P:function(a,b){if(this.b)this.a.P(a,b)
else P.dS(new P.cQ(this,a,b))}}
P.cR.prototype={
$0:function(){this.a.a.O(0,this.b)}}
P.cQ.prototype={
$0:function(){this.a.a.P(this.b,this.c)}}
P.dy.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:6}
P.dz.prototype={
$2:function(a,b){this.a.$2(1,new H.ah(a,b))},
$S:11}
P.dB.prototype={
$2:function(a,b){this.a(a,b)},
$S:12}
P.cX.prototype={}
P.b4.prototype={
M:function(){},
N:function(){}}
P.a6.prototype={
ga8:function(){return this.c<4},
aW:function(a){var t,s
t=a.fr
s=a.dy
if(t==null)this.d=s
else t.dy=s
if(s==null)this.e=t
else s.fr=t
a.fr=a
a.dy=a},
aZ:function(a,b,c,d){var t,s,r
if((this.c&4)!==0){if(c==null)c=P.ff()
t=new P.b8($.f,0,c)
t.aX()
return t}t=$.f
s=new P.b4(0,this,t,d?1:0)
s.aE(a,b,c,d)
s.fr=s
s.dy=s
s.dx=this.c&1
r=this.e
this.e=s
s.dy=null
s.fr=r
if(r==null)this.d=s
else r.dy=s
if(this.d===s)P.bh(this.a)
return s},
aT:function(a){var t
if(a.dy===a)return
t=a.dx
if((t&2)!==0)a.dx=t|4
else{this.aW(a)
if((this.c&2)===0&&this.d==null)this.aj()}return},
aU:function(a){},
aV:function(a){},
a5:function(){if((this.c&4)!==0)return new P.z("Cannot add new events after calling close")
return new P.z("Cannot add new events while doing an addStream")},
bF:function(a){var t,s,r,q
t=this.c
if((t&2)!==0)throw H.e(P.cy("Cannot fire new event. Controller is already firing an event"))
s=this.d
if(s==null)return
r=t&1
this.c=t^3
for(;s!=null;){t=s.dx
if((t&1)===r){s.dx=t|2
a.$1(s)
t=s.dx^=1
q=s.dy
if((t&4)!==0)this.aW(s)
s.dx&=4294967293
s=q}else s=s.dy}this.c&=4294967293
if(this.d==null)this.aj()},
aj:function(){if((this.c&4)!==0&&this.r.a===0)this.r.aI(null)
P.bh(this.b)},
gG:function(){return this.c}}
P.ds.prototype={
ga8:function(){return P.a6.prototype.ga8.call(this)&&(this.c&2)===0},
a5:function(){if((this.c&2)!==0)return new P.z("Cannot fire new event. Controller is already firing an event")
return this.bq()},
F:function(a){var t=this.d
if(t==null)return
if(t===this.e){this.c|=2
t.aF(a)
this.c&=4294967293
if(this.d==null)this.aj()
return}this.bF(new P.dt(a))}}
P.dt.prototype={
$1:function(a){a.aF(this.a)}}
P.bH.prototype={
$0:function(){var t,s,r
try{this.a.a6(null)}catch(r){t=H.B(r)
s=H.v(r)
P.hd(this.a,t,s)}}}
P.b6.prototype={
P:function(a,b){if(a==null)a=new P.am()
if(this.a.a!==0)throw H.e(P.cy("Future already completed"))
$.f.toString
this.w(a,b)},
c2:function(a){return this.P(a,null)}}
P.bd.prototype={
O:function(a,b){var t=this.a
if(t.a!==0)throw H.e(P.cy("Future already completed"))
t.a6(b)},
c0:function(a){return this.O(a,null)},
w:function(a,b){this.a.w(a,b)}}
P.b9.prototype={
cg:function(a){if(this.c!==6)return!0
return this.b.b.az(this.d,a.a)},
c6:function(a){var t,s
t=this.e
s=this.b.b
if(H.bl(t,{func:1,args:[P.h,P.y]}))return s.cq(t,a.a,a.b)
else return s.az(t,a.a)}}
P.m.prototype={
ae:function(a,b,c){var t=$.f
if(t!==C.b){t.toString
if(b!=null)b=P.hi(b,t)}return this.at(a,b,c)},
cu:function(a,b){return this.ae(a,null,b)},
at:function(a,b,c){var t=new P.m(0,$.f,[c])
this.ah(new P.b9(t,b==null?1:3,a,b))
return t},
bf:function(a){var t,s
t=$.f
s=new P.m(0,t,this.$ti)
if(t!==C.b)t.toString
this.ah(new P.b9(s,8,a,null))
return s},
ah:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){t=this.c
s=t.a
if(s<4){t.ah(a)
return}this.a=s
this.c=t.c}t=this.b
t.toString
P.U(null,null,t,new P.d2(this,a))}},
aS:function(a){var t,s,r,q,p,o
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){s=this.c
o=s.a
if(o<4){s.aS(a)
return}this.a=o
this.c=s.c}t.a=this.aa(a)
s=this.b
s.toString
P.U(null,null,s,new P.da(t,this))}},
a9:function(){var t=this.c
this.c=null
return this.aa(t)},
aa:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
a6:function(a){var t,s,r
t=this.$ti
s=H.bj(a,"$isx",t,"$asx")
if(s){t=H.bj(a,"$ism",t,null)
if(t)P.d5(a,this)
else P.f4(a,this)}else{r=this.a9()
this.a=4
this.c=a
P.a7(this,r)}},
w:function(a,b){var t=this.a9()
this.a=8
this.c=new P.X(a,b)
P.a7(this,t)},
bB:function(a){return this.w(a,null)},
aI:function(a){var t=H.bj(a,"$isx",this.$ti,"$asx")
if(t){this.by(a)
return}this.a=1
t=this.b
t.toString
P.U(null,null,t,new P.d4(this,a))},
by:function(a){var t=H.bj(a,"$ism",this.$ti,null)
if(t){if(a.a===8){this.a=1
t=this.b
t.toString
P.U(null,null,t,new P.d9(this,a))}else P.d5(a,this)
return}P.f4(a,this)},
bv:function(a,b){var t
this.a=1
t=this.b
t.toString
P.U(null,null,t,new P.d3(this,a,b))},
$isx:1,
gG:function(){return this.a},
gbJ:function(){return this.c}}
P.d2.prototype={
$0:function(){P.a7(this.a,this.b)}}
P.da.prototype={
$0:function(){P.a7(this.b,this.a.a)}}
P.d6.prototype={
$1:function(a){var t=this.a
t.a=0
t.a6(a)},
$S:5}
P.d7.prototype={
$2:function(a,b){this.a.w(a,b)},
$1:function(a){return this.$2(a,null)},
$S:14}
P.d8.prototype={
$0:function(){this.a.w(this.b,this.c)}}
P.d4.prototype={
$0:function(){var t,s
t=this.a
s=t.a9()
t.a=4
t.c=this.b
P.a7(t,s)}}
P.d9.prototype={
$0:function(){P.d5(this.b,this.a)}}
P.d3.prototype={
$0:function(){this.a.w(this.b,this.c)}}
P.dd.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{q=this.c
t=q.b.b.bc(q.d)}catch(p){s=H.B(p)
r=H.v(p)
if(this.d){q=this.a.a.c.a
o=s
o=q==null?o==null:q===o
q=o}else q=!1
o=this.b
if(q)o.b=this.a.a.c
else o.b=new P.X(s,r)
o.a=!0
return}if(!!J.o(t).$isx){if(t instanceof P.m&&t.gG()>=4){if(t.gG()===8){q=this.b
q.b=t.gbJ()
q.a=!0}return}n=this.a.a
q=this.b
q.b=t.cu(new P.de(n),null)
q.a=!1}}}
P.de.prototype={
$1:function(a){return this.a},
$S:15}
P.dc.prototype={
$0:function(){var t,s,r,q
try{r=this.b
this.a.b=r.b.b.az(r.d,this.c)}catch(q){t=H.B(q)
s=H.v(q)
r=this.a
r.b=new P.X(t,s)
r.a=!0}}}
P.db.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.cg(t)&&q.e!=null){p=this.b
p.b=q.c6(t)
p.a=!1}}catch(o){s=H.B(o)
r=H.v(o)
q=this.a.a.c
p=q.a
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q
else m.b=new P.X(s,r)
m.a=!0}}}
P.b2.prototype={}
P.aZ.prototype={
gi:function(a){var t,s
t={}
s=new P.m(0,$.f,[P.l])
t.a=0
this.b9(new P.cB(t,this),!0,new P.cC(t,s),s.gbA())
return s}}
P.cB.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,ret:P.j,args:[H.fm(this.b,"aZ",0)]}}}
P.cC.prototype={
$0:function(){this.b.a6(this.a.a)}}
P.cA.prototype={}
P.dm.prototype={
gbH:function(){if((this.b&8)===0)return this.a
return this.a.gaf()},
bE:function(){var t,s
if((this.b&8)===0){t=this.a
if(t==null){t=new P.bc(0)
this.a=t}return t}s=this.a
s.gaf()
return s.gaf()},
gbO:function(){if((this.b&8)!==0)return this.a.gaf()
return this.a},
bw:function(){if((this.b&4)!==0)return new P.z("Cannot add event after closing")
return new P.z("Cannot add event while adding a stream")},
A:function(a,b){var t=this.b
if(t>=4)throw H.e(this.bw())
if((t&1)!==0)this.F(b)
else if((t&3)===0)this.bE().A(0,new P.ar(b))},
aZ:function(a,b,c,d){var t,s,r,q
if((this.b&3)!==0)throw H.e(P.cy("Stream has already been listened to."))
t=$.f
s=new P.aq(this,t,d?1:0)
s.aE(a,b,c,d)
r=this.gbH()
t=this.b|=1
if((t&8)!==0){q=this.a
q.saf(s)
q.ad()}else this.a=s
s.bM(r)
s.am(new P.dp(this))
return s},
aT:function(a){var t,s,r,q,p,o
t=null
if((this.b&8)!==0)t=this.a.Y()
this.a=null
this.b=this.b&4294967286|2
q=this.r
if(q!=null)if(t==null)try{t=q.$0()}catch(p){s=H.B(p)
r=H.v(p)
o=new P.m(0,$.f,[null])
o.bv(s,r)
t=o}else t=t.bf(q)
q=new P.dn(this)
if(t!=null)t=t.bf(q)
else q.$0()
return t},
aU:function(a){if((this.b&8)!==0)C.n.a0(this.a)
P.bh(this.e)},
aV:function(a){if((this.b&8)!==0)this.a.ad()
P.bh(this.f)},
gG:function(){return this.b}}
P.dp.prototype={
$0:function(){P.bh(this.a.d)}}
P.dn.prototype={
$0:function(){var t=this.a.c
if(t!=null&&t.a===0)t.aI(null)}}
P.cW.prototype={
F:function(a){this.gbO().aH(new P.ar(a))}}
P.b3.prototype={}
P.M.prototype={
gl:function(a){return(H.a4(this.a)^892482866)>>>0},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof P.M))return!1
return b.a===this.a}}
P.aq.prototype={
aO:function(){return this.x.aT(this)},
M:function(){this.x.aU(this)},
N:function(){this.x.aV(this)}}
P.b5.prototype={
aE:function(a,b,c,d){var t,s
t=this.d
t.toString
this.a=a
s=b==null?P.hq():b
if(H.bl(s,{func:1,ret:-1,args:[P.h,P.y]}))this.b=t.ay(s)
else if(H.bl(s,{func:1,ret:-1,args:[P.h]}))this.b=s
else H.N(P.e_("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
this.c=c==null?P.ff():c},
bM:function(a){if(a==null)return
this.r=a
if(a.c!=null){this.e=(this.e|64)>>>0
a.a2(this)}},
ax:function(a,b){var t,s,r
t=this.e
if((t&8)!==0)return
s=(t+128|4)>>>0
this.e=s
if(t<128&&this.r!=null){r=this.r
if(r.a===1)r.a=3}if((t&4)===0&&(s&32)===0)this.am(this.gap())},
a0:function(a){return this.ax(a,null)},
ad:function(){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128)if((t&64)!==0&&this.r.c!=null)this.r.a2(this)
else{t=(t&4294967291)>>>0
this.e=t
if((t&32)===0)this.am(this.gaq())}}},
Y:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.bx()
t=this.f
return t==null?$.$get$e1():t},
gZ:function(){return this.e>=128},
bx:function(){var t,s
t=(this.e|8)>>>0
this.e=t
if((t&64)!==0){s=this.r
if(s.a===1)s.a=3}if((t&32)===0)this.r=null
this.f=this.aO()},
aF:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.F(a)
else this.aH(new P.ar(a))},
M:function(){},
N:function(){},
aO:function(){return},
aH:function(a){var t,s
t=this.r
if(t==null){t=new P.bc(0)
this.r=t}t.A(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.a2(this)}},
F:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.be(this.a,a)
this.e=(this.e&4294967263)>>>0
this.aJ((t&4)!==0)},
am:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.aJ((t&4)!==0)},
aJ:function(a){var t,s,r
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
if(r)this.M()
else this.N()
t=(this.e&4294967263)>>>0
this.e=t}if((t&64)!==0&&t<128)this.r.a2(this)},
gG:function(){return this.e}}
P.dq.prototype={
b9:function(a,b,c,d){return this.a.aZ(a,d,c,!0===b)},
a_:function(a){return this.b9(a,null,null,null)}}
P.cY.prototype={
gaw:function(){return this.a},
saw:function(a){return this.a=a}}
P.ar.prototype={
ck:function(a){a.F(this.b)}}
P.dg.prototype={
a2:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.dS(new P.dh(this,a))
this.a=1},
gG:function(){return this.a}}
P.dh.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gaw()
t.b=q
if(q==null)t.c=null
r.ck(this.b)}}
P.bc.prototype={
A:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.saw(b)
this.c=b}}}
P.b8.prototype={
gZ:function(){return this.b>=4},
aX:function(){if((this.b&2)!==0)return
var t=this.a
t.toString
P.U(null,null,t,this.gbK())
this.b=(this.b|2)>>>0},
ax:function(a,b){this.b+=4},
a0:function(a){return this.ax(a,null)},
ad:function(){var t=this.b
if(t>=4){t-=4
this.b=t
if(t<4&&(t&1)===0)this.aX()}},
Y:function(){return $.$get$e1()},
bL:function(){var t=(this.b&4294967293)>>>0
this.b=t
if(t>=4)return
this.b=(t|1)>>>0
this.a.bd(this.c)},
gG:function(){return this.b}}
P.dr.prototype={}
P.cE.prototype={}
P.X.prototype={
h:function(a){return H.d(this.a)},
$isZ:1}
P.dx.prototype={}
P.dA.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.am()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.h(0)
throw r}}
P.di.prototype={
bd:function(a){var t,s,r
try{if(C.b===$.f){a.$0()
return}P.fa(null,null,this,a)}catch(r){t=H.B(r)
s=H.v(r)
P.ay(null,null,this,t,s)}},
ct:function(a,b){var t,s,r
try{if(C.b===$.f){a.$1(b)
return}P.fb(null,null,this,a,b)}catch(r){t=H.B(r)
s=H.v(r)
P.ay(null,null,this,t,s)}},
be:function(a,b){return this.ct(a,b,null)},
bW:function(a){return new P.dk(this,a)},
bV:function(a){return this.bW(a,null)},
au:function(a){return new P.dj(this,a)},
b2:function(a,b){return new P.dl(this,a,b)},
cp:function(a){if($.f===C.b)return a.$0()
return P.fa(null,null,this,a)},
bc:function(a){return this.cp(a,null)},
cs:function(a,b){if($.f===C.b)return a.$1(b)
return P.fb(null,null,this,a,b)},
az:function(a,b){return this.cs(a,b,null,null)},
cr:function(a,b,c){if($.f===C.b)return a.$2(b,c)
return P.hj(null,null,this,a,b,c)},
cq:function(a,b,c){return this.cr(a,b,c,null,null,null)},
cm:function(a){return a},
ay:function(a){return this.cm(a,null,null,null)}}
P.dk.prototype={
$0:function(){return this.a.bc(this.b)}}
P.dj.prototype={
$0:function(){return this.a.bd(this.b)}}
P.dl.prototype={
$1:function(a){return this.a.be(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.cK.prototype={
gi:function(a){return this.a.length},
j:function(a,b){return this.a[b]}}
P.bV.prototype={
$2:function(a,b){this.a.v(0,a,b)},
$S:7}
P.bW.prototype={$isp:1,$isu:1}
P.L.prototype={
gp:function(a){return new H.aP(a,this.gi(a),0)},
R:function(a,b){return this.j(a,b)},
t:function(a,b){var t=H.w([],[H.hu(this,a,"L",0)])
C.c.si(t,C.a.t(this.gi(a),C.n.gi(b)))
C.c.a4(t,0,this.gi(a),a)
C.c.a4(t,this.gi(a),t.length,b)
return t},
h:function(a){return P.eD(a,"[","]")}}
P.bZ.prototype={}
P.c_.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.d(a)
t.a=s+": "
t.a+=H.d(b)},
$S:7}
P.c0.prototype={
gi:function(a){var t=this.gb7()
return t.gi(t)},
h:function(a){return P.e7(this)}}
P.dw.prototype={}
P.c1.prototype={
gi:function(a){var t=this.a
return t.gi(t)},
h:function(a){return P.e7(this.a)}}
P.cL.prototype={}
P.ba.prototype={}
P.bf.prototype={}
P.V.prototype={}
P.aF.prototype={
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aF))return!1
return this.a===b.a&&this.b===b.b},
gl:function(a){var t=this.a
return(t^C.a.aY(t,30))&1073741823},
h:function(a){var t,s,r,q,p,o,n
t=P.fG(H.fZ(this))
s=P.aG(H.fY(this))
r=P.aG(H.fW(this))
q=P.aG(H.eN(this))
p=P.aG(H.eO(this))
o=P.aG(H.eP(this))
n=P.fH(H.fX(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n}}
P.aa.prototype={}
P.D.prototype={
t:function(a,b){return new P.D(C.a.t(this.a,b.gaK()))},
K:function(a,b){return C.a.K(this.a,b.gaK())},
V:function(a,b){return C.a.V(this.a,b.gaK())},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.D))return!1
return this.a===b.a},
gl:function(a){return this.a&0x1FFFFFFF},
h:function(a){var t,s,r,q,p
t=new P.bE()
s=this.a
if(s<0)return"-"+new P.D(0-s).h(0)
r=t.$1(C.a.H(s,6e7)%60)
q=t.$1(C.a.H(s,1e6)%60)
p=new P.bD().$1(s%1e6)
return""+C.a.H(s,36e8)+":"+H.d(r)+":"+H.d(q)+"."+H.d(p)}}
P.bD.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.bE.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.Z.prototype={}
P.am.prototype={
h:function(a){return"Throw of null."}}
P.H.prototype={
gal:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gak:function(){return""},
h:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gal()+s+r
if(!this.a)return q
p=this.gak()
o=P.eB(this.b)
return q+p+": "+H.d(o)}}
P.an.prototype={
gal:function(){return"RangeError"},
gak:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.d(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.d(t)
else if(r>t)s=": Not in range "+H.d(t)+".."+H.d(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.d(t)}return s}}
P.bL.prototype={
gal:function(){return"RangeError"},
gak:function(){if(J.fy(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gi:function(a){return this.f}}
P.cM.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.cH.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.z.prototype={
h:function(a){return"Bad state: "+this.a}}
P.bz.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.eB(t))+"."}}
P.aY.prototype={
h:function(a){return"Stack Overflow"},
$isZ:1}
P.bB.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.d1.prototype={
h:function(a){return"Exception: "+this.a}}
P.aI.prototype={}
P.l.prototype={}
P.a_.prototype={
gi:function(a){var t,s
t=this.gp(this)
for(s=0;t.m();)++s
return s},
gI:function(a){var t=this.gp(this)
if(!t.m())throw H.e(H.eE())
return t.gk()},
R:function(a,b){var t,s,r
if(b<0)H.N(P.a5(b,0,null,"index",null))
for(t=this.gp(this),s=0;t.m();){r=t.gk()
if(b===s)return r;++s}throw H.e(P.eC(b,this,"index",null,s))},
h:function(a){return P.fN(this,"(",")")}}
P.bO.prototype={}
P.u.prototype={$isp:1}
P.j.prototype={
gl:function(a){return P.h.prototype.gl.call(this,this)},
h:function(a){return"null"}}
P.aB.prototype={}
P.h.prototype={constructor:P.h,$ish:1,
u:function(a,b){return this===b},
gl:function(a){return H.a4(this)},
h:function(a){return"Instance of '"+H.aV(this)+"'"},
toString:function(){return this.h(this)}}
P.y.prototype={}
P.n.prototype={}
P.ao.prototype={
gi:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gL:function(){return this.a}}
W.c.prototype={}
W.bp.prototype={
h:function(a){return String(a)}}
W.bq.prototype={
h:function(a){return String(a)}}
W.Y.prototype={
ai:function(a,b){var t,s
t=$.$get$eu()
s=t[b]
if(typeof s==="string")return s
s=this.bP(a,b)
t[b]=s
return s},
bP:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.fI()+b
if(t in a)return t
return b},
ar:function(a,b,c,d){a.setProperty(b,c,d)},
gi:function(a){return a.length}}
W.bA.prototype={}
W.bC.prototype={
h:function(a){return String(a)}}
W.a.prototype={
h:function(a){return a.localName}}
W.b.prototype={$isb:1}
W.P.prototype={
bu:function(a,b,c,d){return a.addEventListener(b,H.aA(c,1),!1)}}
W.bG.prototype={
gi:function(a){return a.length}}
W.S.prototype={$isS:1}
W.a3.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.bo(a):t}}
W.cx.prototype={
gi:function(a){return a.length}}
W.F.prototype={}
W.cZ.prototype={
bQ:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.fA(r,this.c,t,!1)}}}
W.d0.prototype={
$1:function(a){return this.a.$1(a)}}
W.b7.prototype={}
P.df.prototype={
ci:function(a){if(a<=0||a>4294967296)throw H.e(P.h_("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
R.I.prototype={
gU:function(){return this.a.length===0?0:this.D(0).a},
gcb:function(){var t,s,r
if(this.a.length>60)for(t=1;t<=30;++t){r=0
while(!0){if(!(r<2)){s=!0
break}if(this.D(r).f!==this.D(r+t*r).f){s=!1
break}++r}if(s){$.$get$eg().B(C.h,"Stable scene detected! Repeating pattern "+t,null,null)
return!0}}return!1},
gb1:function(){if(this.a.length===0)return 100
if(this.D(0).f===0)return 0
return C.k.T(this.D(0).f/(this.c*this.d)*100)},
D:function(a){var t,s
t=this.a
s=t.length-1
if(s<a)return
return t[s-a]},
J:function(){return this.D(0)},
cj:function(a){var t,s,r,q
if(this.a.length<2||a){t=this.J().d
s=H.k(this,1)
return A.es(this.c,new H.c3(t,new R.bs(this),[H.k(t,0),s]),s)}r=this.J().d
q=this.D(1).d
t=H.k(this,1)
return A.es(this.c,P.fU(J.ae(q.c),new R.bt(this,q,r),!0,t),t)},
ba:function(a){var t,s
t=this.J()
t=t==null?null:t.a
if(t==null)t=0
s=this.a
s.push(Y.fM(t+1,this.c,this.d,a,a.bS(H.w([C.f,C.i],[X.q]),this.e.a)))
t=s.length
if(t>this.b){P.eQ(0,1,t,null,null,null)
s.splice(0,1)}return},
bU:function(a){var t,s,r,q,p,o
t=this.c
s=this.d
r=A.by(t,s,null,H.k(this,0))
for(q=this.e,p=0;p<t;++p)for(o=0;o<s;++o)if(this.J().e.bh(p,o,q.a))r.a3(p,o,q.bX(p,o,this.J().d),q.a)
else r.a3(p,o,this.J().d.n(p,o,q.a,null),q.a)
this.ba(r)},
bT:function(){return this.bU(null)}}
R.bs.prototype={
$1:function(a){return this.a.f.j(0,a)},
$S:function(){var t=this.a
return{func:1,ret:H.k(t,1),args:[H.k(t,0)]}}}
R.bt.prototype={
$1:function(a){var t,s
t=this.c.c
s=J.ab(t)
if(J.bn(J.dX(this.b.c,a),s.j(t,a)))t=null
else t=s.j(t,a)==null?null:this.a.f.j(0,s.j(t,a))
return t}}
A.O.prototype={
gi:function(a){return J.ae(this.c)},
j:function(a,b){return J.dX(this.c,b)},
bZ:function(a){var t,s,r,q,p,o
for(t=a.c,s=J.ab(t),r=s.gi(t),q=this.c,p=J.dE(q),o=0;o<r;++o)if(s.j(t,o)!=null)p.v(q,o,s.j(t,o))},
ac:function(a,b,c){var t
if(a<b)t=a+c
else t=a>=c?a-c:a
return t},
n:function(a,b,c,d){var t,s
if(c===!0){t=this.ac(a,0,this.a)
s=this.ac(b,0,this.b)}else{if(a<0||a>this.a-1||b<0||b>this.b-1)return d
s=b
t=a}return J.dX(this.c,t+s*this.a)},
bh:function(a,b,c){return this.n(a,b,c,null)},
ag:function(a,b){return this.n(a,b,null,null)},
a3:function(a,b,c,d){var t,s
if(d===!0){t=this.ac(a,0,this.a)
s=this.ac(b,0,this.b)}else{if(a<0||a>this.a-1||b<0||b>this.b-1)return
s=b
t=a}J.fz(this.c,t+s*this.a,c)},
bR:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=this.a
s=this.b
r=A.by(t,s,!1,P.V)
for(q=0;q<s;q=o)for(p=q-1,o=q+1,n=0;n<t;++n)if(C.c.b3(a,this.n(n,q,b,null)))for(m=n-1,l=n+1,k=p;k<=o;++k)for(j=m;j<=l;++j)r.a3(j,k,!0,b)
return r},
bS:function(a,b){return this.bR(a,b,null,null)}}
Y.aJ.prototype={}
Y.bK.prototype={
$1:function(a){return a}}
S.bv.prototype={}
K.r.prototype={
h:function(a){return this.b}}
K.c4.prototype={
bg:function(a,b){var t,s,r,q,p,o,n,m
t=A.by(a,b,null,H.k(this,0))
s=-C.k.T(a/2)
r=-C.k.T(b/2)
for(q=this.c,p=this.b,o=0;o<a;++o)for(n=o+s,m=0;m<b;++m)t.a3(o,m,$.$get$eL().j(0,this.a).$2(n,(m+r)*-1)?p:q,!0)
return t}}
K.c5.prototype={
$2:function(a,b){return C.x.ci(2)===0},
$S:0}
K.c6.prototype={
$2:function(a,b){return Math.cos(a*10)>Math.sin(b*10)},
$S:0}
K.c7.prototype={
$2:function(a,b){return b===0||C.a.E(a,b)===0},
$S:0}
K.c8.prototype={
$2:function(a,b){return b>0&&(C.a.E(a,b)&C.a.C((a^b)>>>0,32))>>>0>2},
$S:0}
K.c9.prototype={
$2:function(a,b){return C.a.E(C.a.C((a^b)>>>0,32),8)===0},
$S:0}
K.ca.prototype={
$2:function(a,b){return C.a.E(Math.abs(C.a.C((a^b)>>>0,32)),8)<4},
$S:0}
K.cb.prototype={
$2:function(a,b){return C.a.C((a^b)>>>0,32)>~a>>>0&&b<=0},
$S:0}
K.cc.prototype={
$2:function(a,b){return C.a.C((a^b)>>>0,32)+a>=0},
$S:0}
K.cd.prototype={
$2:function(a,b){return C.a.C((a^b)>>>0,32)+a-b===0},
$S:0}
K.ce.prototype={
$2:function(a,b){return C.a.E(C.a.C((a^b)>>>0,32)+a-b,1024)===0},
$S:0}
K.cf.prototype={
$2:function(a,b){var t=(a^b)>>>0
if(C.a.C(t,32)+b-a===0)return!0
return(t+b-a)%b===0},
$S:0}
E.aW.prototype={
h:function(a){return this.b}}
E.bw.prototype={}
B.bx.prototype={}
X.q.prototype={
h:function(a){return this.b}}
X.bI.prototype={
bX:function(a,b,c){var t,s,r,q,p,o,n,m
t=c.ag(a,b)
s=this.a
r=this.b
switch("moore"){case"moore":default:q=a-1
p=b-1
o=a+1
n=b+1}m=C.c.c5(H.w([c.n(q,p,s,r),c.n(a,p,s,r),c.n(o,p,s,r),c.n(q,b,s,r),c.n(o,b,s,r),c.n(q,n,s,r),c.n(a,n,s,r),c.n(o,n,s,r)],[H.k(c,0)]),0,new X.bJ(this),null)
switch(t){case C.i:case C.f:s=J.fk(m)
if(s.K(m,2))return C.l
if(C.c.b3(H.w([2,3],[P.l]),m))return C.i
if(s.V(m,3))return C.m
break
case C.j:case C.l:case C.m:if(J.bn(m,3))return C.f
break}return t}}
X.bJ.prototype={
$2:function(a,b){return J.fx(a,this.a.d.j(0,b))},
$S:16}
T.aX.prototype={
h:function(a){return this.b}}
T.cr.prototype={
gU:function(){var t=this.a
t=t.ga1(t)
return t.gI(t).gU()},
W:function(a,b){return this.bk(a,b)},
aA:function(a){return this.W(a,null)},
bk:function(a,b){var t=0,s=P.eh(null),r=this
var $async$W=P.ei(function(c,d){if(c===1)return P.eb(d,s)
while(true)switch(t){case 0:r.dx.A(0,++r.db)
t=2
return P.ea(P.fL(C.z,null,null),$async$W)
case 2:t=3
return P.ea(r.av(r.e,b),$async$W)
case 3:r.aQ()
return P.ec(null,s)}})
return P.ed($async$W,s)},
X:function(a){var t=0,s=P.eh(P.j),r=this,q
var $async$X=P.ei(function(b,c){if(b===1)return P.eb(c,s)
while(true)switch(t){case 0:q=r.c
t=q!=null?2:3
break
case 2:t=4
return P.ea(q.Y(),$async$X)
case 4:r.c=null
case 3:return P.ec(null,s)}})
return P.ed($async$X,s)},
bn:function(){if(!this.c.gZ())this.c.a0(0)
this.a.S(0,new T.cw())
this.aR(!0)},
aR:function(a){var t,s,r
t=this.ch
if((t.b&1)!==0&&!a)t.A(0,this.bG())
else{s=this.cx
if((s.b&1)!==0||a){r=this.aP(!0)
if((t.b&1)!==0)t.A(0,r)
if((s.b&1)!==0)s.A(0,r)}}},
aQ:function(){return this.aR(!1)},
aP:function(a){var t,s,r,q,p
t=A.by(this.r,this.x,null,H.k(this,0))
s=this.a
s=s.ga1(s)
r=P.eI(s,!0,H.fm(s,"a_",0))
for(q=r.length,p=0;p<q;++p)t.bZ(r[p].cj(a))
return t},
bG:function(){return this.aP(!1)},
av:function(a,b){return this.c7(a,b)},
c7:function(a,b){var t=0,s=P.eh(P.j),r=this,q
var $async$av=P.ei(function(c,d){if(c===1)return P.eb(d,s)
while(true)switch(t){case 0:q=a==null?C.A:a
r.d=q
q=U.hJ(q,null)
r.b=q
r.c=q.a_(new T.cv(r))
return P.ec(null,s)}})
return P.ed($async$av,s)},
b0:function(){var t,s,r,q,p
t={}
s=this.a
if(s.gca(s)){$.$get$bg().B(C.h,"Stopping due to zero automata.",null,null)
this.X(0)
return}s.S(0,new T.cs())
this.aQ()
r=Date.now()
q=this.y
if(q!=null){p=r-q
if(p>0)this.f=(this.f+1/(p/1000))/2}this.y=r
r=this.e
if(r!=null)if(this.d!=null){q=s.ga1(s)
r=C.a.E(q.gI(q).gU(),C.k.T(2000/C.a.H(r.a,1000)))===0}else r=!1
else r=!1
if(r){r=$.$get$bg()
q=s.ga1(s)
r.B(C.h,"Gen: "+q.gI(q).gU()+" | FPS: "+C.C.T(this.f)+"/"+C.k.T(1000/C.a.H(this.d.a,1000)),null,null)}r=s.ga1(s)
if(C.a.E(r.gI(r).gU(),20)===0){t.a=!0
s.S(0,new T.ct(t))
if(t.a){++this.z
t.b=0
s.S(0,new T.cu(t))
s=t.b
if(s>=5)s=s<10&&this.z>5||this.z>8
else s=!0
if(s)this.cy.A(0,C.W)
$.$get$bg().B(C.h,"Stable scene counter: x"+this.z+" World activity: "+t.b+"%",null,null)}else this.z=0}}}
T.cw.prototype={
$2:function(a,b){var t=b.a
if(t.length>1)t.pop()
return},
$S:8}
T.cv.prototype={
$1:function(a){return this.a.b0()}}
T.cs.prototype={
$2:function(a,b){return b.bT()},
$S:8}
T.ct.prototype={
$2:function(a,b){if(!b.gcb())this.a.a=!1},
$S:9}
T.cu.prototype={
$2:function(a,b){var t=this.a
if(b.gb1()>t.b)t.b=b.gb1()},
$S:9}
U.dV.prototype={
$1:function(a){var t,s
t=this.a
s=++t.c
t.a.A(0,s)},
$S:6}
U.dT.prototype={
$0:function(){this.a.b=P.h4(this.b,this.c)}}
U.dU.prototype={
$0:function(){var t,s
t=this.a
s=t.b
if(s!=null){s.Y()
t.b=null}}}
S.aC.prototype={
bb:function(a){var t,s,r,q,p,o,n
for(t=a.a,s=a.b,r=0;r<t;++r)for(q=0;q<s;++q){if(a.ag(r,q)==null)continue
p=this.f
p.fillStyle=a.ag(r,q)
o=this.c
n=this.d
p.fillRect(r*o,q*n,o,n)}},
co:function(a){return this.bb(a,null)}}
N.aj.prototype={
gb4:function(){var t,s,r
t=this.b
s=t==null||t.a===""
r=this.a
return s?r:t.gb4()+"."+r},
gb8:function(){if($.dF){var t=this.c
if(t!=null)return t
t=this.b
if(t!=null)return t.gb8()}return $.f9},
cf:function(a,b,c,d,e){var t,s,r,q,p
t=a.b
if(t>=this.gb8().b){s=$.hF.b
if(t>=s){d=P.h2()
c="autogenerated stack trace for "+a.h(0)+" "+b}e=$.f
t=this.gb4()
s=Date.now()
r=$.eJ
$.eJ=r+1
q=new N.aQ(a,b,null,t,new P.aF(s,!1),r,c,d,e)
if($.dF)for(p=this;p!=null;){t=p.f
if(t!=null){if(!t.ga8())H.N(t.a5())
t.F(q)}p=p.b}else $.$get$bY().bI(q)}},
B:function(a,b,c,d){return this.cf(a,b,c,d,null)},
aL:function(){if($.dF||this.b==null){var t=this.f
if(t==null){t=new P.ds(null,null,0,[N.aQ])
this.f=t}return new P.cX(t,[H.k(t,0)])}else return $.$get$bY().aL()},
bI:function(a){var t=this.f
if(t!=null){if(!t.ga8())H.N(t.a5())
t.F(a)}}}
N.bX.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
if(C.d.bl(t,"."))H.N(P.e_("name shouldn't start with a '.'"))
s=C.d.cd(t,".")
if(s===-1)r=t!==""?N.a2(""):null
else{r=N.a2(C.d.aC(t,0,s))
t=C.d.aB(t,s+1)}q=P.n
p=N.aj
o=new H.Q(0,0,[q,p])
q=new N.aj(t,r,o,new P.cL(o,[q,p]))
if(r!=null)r.d.v(0,t,q)
return q}}
N.R.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof N.R&&this.b===b.b},
K:function(a,b){return C.a.K(this.b,b.gcv(b))},
V:function(a,b){return C.a.V(this.b,b.gcv(b))},
gl:function(a){return this.b},
h:function(a){return this.a}}
N.aQ.prototype={
h:function(a){return"["+this.a.a+"] "+this.d+": "+H.d(this.b)}}
A.dK.prototype={
$1:function(a){var t,s
t=a.a.a+": "
s=a.e
H.hE(t+H.eN(s)+":"+H.eO(s)+":"+H.eP(s)+": "+H.d(a.b))}}
A.dL.prototype={
$1:function(a){var t,s,r,q,p,o
t=this.a.a
t.bY(0)
s=this.b
r=this.c
q=X.q
p=new X.bI(P.eH([C.i,1,C.f,1,C.j,0,C.l,0,C.m,0],q,P.l))
o=new R.I(H.w([],[[Y.aJ,X.q]]),62,s,r,p,this.d,[q,P.n])
p.a=!0
p.b=C.j
$.$get$f7().B(C.o,"Generator: MathematicalGenerators.random",null,null)
$.$get$eg().B(C.h,"Applying generator "+s+"x"+r,null,null)
o.ba(new K.c4(C.u,C.f,C.j,[q]).bg(s,r))
s="automaton:"+t.gi(t)
t.v(0,s,o)}}
A.dM.prototype={
$1:function(a){var t=this.a
t.X(0)
t.aA(0)}}
A.dN.prototype={
$1:function(a){var t=this.a
return!t.c.gZ()?t.c.a0(0):null}}
A.dO.prototype={
$1:function(a){var t=this.a
return t.c.gZ()?t.c.ad():null}}
A.dP.prototype={
$1:function(a){return this.a.bn()}}
A.dQ.prototype={
$1:function(a){var t,s
t=this.a
s=t.c
if(s!=null&&!s.gZ())t.c.a0(0)
return t.b0()}}
J.i.prototype.bo=J.i.prototype.h
J.ai.prototype.bp=J.ai.prototype.h
P.a6.prototype.bq=P.a6.prototype.a5;(function installTearOffs(){installTearOff(P,"hn",1,0,0,null,["$1"],["h6"],3,0)
installTearOff(P,"ho",1,0,0,null,["$1"],["h7"],3,0)
installTearOff(P,"hp",1,0,0,null,["$1"],["h8"],3,0)
installTearOff(P,"fg",1,0,0,null,["$0"],["hl"],1,0)
installTearOff(P,"hq",1,0,0,null,["$2","$1"],["f8",function(a){return P.f8(a,null)}],2,0)
installTearOff(P,"ff",1,0,0,null,["$0"],["hh"],1,0)
var t
installTearOff(t=P.b4.prototype,"gap",0,0,0,null,["$0"],["M"],1,0)
installTearOff(t,"gaq",0,0,0,null,["$0"],["N"],1,0)
installTearOff(P.b6.prototype,"gc1",0,0,0,null,["$2","$1"],["P","c2"],2,0)
installTearOff(P.bd.prototype,"gc_",0,1,0,null,["$1","$0"],["O","c0"],13,0)
installTearOff(P.m.prototype,"gbA",0,0,0,null,["$2","$1"],["w","bB"],2,0)
installTearOff(t=P.aq.prototype,"gap",0,0,0,null,["$0"],["M"],1,0)
installTearOff(t,"gaq",0,0,0,null,["$0"],["N"],1,0)
installTearOff(t=P.b5.prototype,"gap",0,0,0,null,["$0"],["M"],1,0)
installTearOff(t,"gaq",0,0,0,null,["$0"],["N"],1,0)
installTearOff(P.b8.prototype,"gbK",0,0,0,null,["$0"],["bL"],1,0)
installTearOff(S.aC.prototype,"gcn",0,0,0,null,["$1$1","$1"],["bb","co"],17,0)})();(function inheritance(){inherit(P.h,null)
var t=P.h
inherit(H.e3,t)
inherit(J.i,t)
inherit(J.br,t)
inherit(P.a_,t)
inherit(H.aP,t)
inherit(P.bO,t)
inherit(H.aH,t)
inherit(H.cJ,t)
inherit(P.ba,t)
inherit(H.cp,t)
inherit(H.cF,t)
inherit(P.Z,t)
inherit(H.ah,t)
inherit(H.aD,t)
inherit(H.bb,t)
inherit(H.b0,t)
inherit(P.c0,t)
inherit(H.bS,t)
inherit(H.bU,t)
inherit(P.be,t)
inherit(P.cP,t)
inherit(P.aZ,t)
inherit(P.b5,t)
inherit(P.a6,t)
inherit(P.b6,t)
inherit(P.b9,t)
inherit(P.m,t)
inherit(P.b2,t)
inherit(P.cA,t)
inherit(P.dm,t)
inherit(P.cW,t)
inherit(P.cY,t)
inherit(P.dg,t)
inherit(P.b8,t)
inherit(P.dr,t)
inherit(P.cE,t)
inherit(P.X,t)
inherit(P.dx,t)
inherit(P.L,t)
inherit(P.dw,t)
inherit(P.c1,t)
inherit(P.V,t)
inherit(P.aF,t)
inherit(P.aB,t)
inherit(P.D,t)
inherit(P.aY,t)
inherit(P.d1,t)
inherit(P.aI,t)
inherit(P.u,t)
inherit(P.j,t)
inherit(P.y,t)
inherit(P.n,t)
inherit(P.ao,t)
inherit(W.bA,t)
inherit(P.df,t)
inherit(R.I,t)
inherit(Y.aJ,t)
inherit(S.bv,t)
inherit(K.r,t)
inherit(E.aW,t)
inherit(E.bw,t)
inherit(B.bx,t)
inherit(X.q,t)
inherit(T.aX,t)
inherit(T.cr,t)
inherit(N.aj,t)
inherit(N.R,t)
inherit(N.aQ,t)
t=J.i
inherit(J.bP,t)
inherit(J.aN,t)
inherit(J.ai,t)
inherit(J.J,t)
inherit(J.a0,t)
inherit(J.a1,t)
inherit(H.al,t)
inherit(W.P,t)
inherit(W.b7,t)
inherit(W.bC,t)
inherit(W.b,t)
t=J.ai
inherit(J.cn,t)
inherit(J.ap,t)
inherit(J.K,t)
inherit(J.e2,J.J)
t=J.a0
inherit(J.aM,t)
inherit(J.aL,t)
t=P.a_
inherit(H.p,t)
inherit(H.aR,t)
inherit(H.cN,t)
t=H.p
inherit(H.aO,t)
inherit(H.bT,t)
inherit(H.bF,H.aR)
t=P.bO
inherit(H.c2,t)
inherit(H.cO,t)
inherit(H.c3,H.aO)
inherit(P.bW,P.ba)
t=P.bW
inherit(H.b1,t)
inherit(A.O,t)
t=P.Z
inherit(H.cm,t)
inherit(H.bR,t)
inherit(H.cI,t)
inherit(H.cq,t)
inherit(P.am,t)
inherit(P.H,t)
inherit(P.cM,t)
inherit(P.cH,t)
inherit(P.z,t)
inherit(P.bz,t)
inherit(P.bB,t)
t=H.aD
inherit(H.dW,t)
inherit(H.cD,t)
inherit(H.bM,t)
inherit(H.bQ,t)
inherit(H.dG,t)
inherit(H.dH,t)
inherit(H.dI,t)
inherit(P.cT,t)
inherit(P.cS,t)
inherit(P.cU,t)
inherit(P.cV,t)
inherit(P.dv,t)
inherit(P.du,t)
inherit(P.cR,t)
inherit(P.cQ,t)
inherit(P.dy,t)
inherit(P.dz,t)
inherit(P.dB,t)
inherit(P.dt,t)
inherit(P.bH,t)
inherit(P.d2,t)
inherit(P.da,t)
inherit(P.d6,t)
inherit(P.d7,t)
inherit(P.d8,t)
inherit(P.d4,t)
inherit(P.d9,t)
inherit(P.d3,t)
inherit(P.dd,t)
inherit(P.de,t)
inherit(P.dc,t)
inherit(P.db,t)
inherit(P.cB,t)
inherit(P.cC,t)
inherit(P.dp,t)
inherit(P.dn,t)
inherit(P.dh,t)
inherit(P.dA,t)
inherit(P.dk,t)
inherit(P.dj,t)
inherit(P.dl,t)
inherit(P.bV,t)
inherit(P.c_,t)
inherit(P.bD,t)
inherit(P.bE,t)
inherit(W.d0,t)
inherit(R.bs,t)
inherit(R.bt,t)
inherit(Y.bK,t)
inherit(K.c5,t)
inherit(K.c6,t)
inherit(K.c7,t)
inherit(K.c8,t)
inherit(K.c9,t)
inherit(K.ca,t)
inherit(K.cb,t)
inherit(K.cc,t)
inherit(K.cd,t)
inherit(K.ce,t)
inherit(K.cf,t)
inherit(X.bJ,t)
inherit(T.cw,t)
inherit(T.cv,t)
inherit(T.cs,t)
inherit(T.ct,t)
inherit(T.cu,t)
inherit(U.dV,t)
inherit(U.dT,t)
inherit(U.dU,t)
inherit(N.bX,t)
inherit(A.dK,t)
inherit(A.dL,t)
inherit(A.dM,t)
inherit(A.dN,t)
inherit(A.dO,t)
inherit(A.dP,t)
inherit(A.dQ,t)
t=H.cD
inherit(H.cz,t)
inherit(H.af,t)
inherit(H.bN,H.bM)
inherit(P.bZ,P.c0)
inherit(H.Q,P.bZ)
inherit(H.aS,H.al)
t=H.aS
inherit(H.as,t)
inherit(H.au,t)
inherit(H.at,H.as)
inherit(H.ak,H.at)
inherit(H.av,H.au)
inherit(H.aT,H.av)
t=H.aT
inherit(H.cg,t)
inherit(H.ch,t)
inherit(H.ci,t)
inherit(H.cj,t)
inherit(H.ck,t)
inherit(H.aU,t)
inherit(H.cl,t)
inherit(P.dq,P.aZ)
inherit(P.M,P.dq)
inherit(P.cX,P.M)
inherit(P.aq,P.b5)
inherit(P.b4,P.aq)
inherit(P.ds,P.a6)
inherit(P.bd,P.b6)
inherit(P.b3,P.dm)
inherit(P.ar,P.cY)
inherit(P.bc,P.dg)
inherit(P.di,P.dx)
inherit(P.cK,H.b1)
inherit(P.bf,P.c1)
inherit(P.cL,P.bf)
t=P.aB
inherit(P.aa,t)
inherit(P.l,t)
t=P.H
inherit(P.an,t)
inherit(P.bL,t)
inherit(W.a3,W.P)
inherit(W.a,W.a3)
inherit(W.c,W.a)
t=W.c
inherit(W.bp,t)
inherit(W.bq,t)
inherit(W.bG,t)
inherit(W.cx,t)
inherit(W.Y,W.b7)
inherit(W.F,W.b)
inherit(W.S,W.F)
inherit(W.cZ,P.cA)
inherit(K.c4,S.bv)
inherit(X.bI,B.bx)
inherit(S.aC,E.bw)
mixin(H.b1,H.cJ)
mixin(H.as,P.L)
mixin(H.at,H.aH)
mixin(H.au,P.L)
mixin(H.av,H.aH)
mixin(P.b3,P.cW)
mixin(P.ba,P.L)
mixin(P.bf,P.dw)
mixin(W.b7,W.bA)})();(function constants(){C.e=W.Y.prototype
C.B=J.i.prototype
C.c=J.J.prototype
C.k=J.aL.prototype
C.a=J.aM.prototype
C.n=J.aN.prototype
C.C=J.a0.prototype
C.d=J.a1.prototype
C.J=J.K.prototype
C.v=J.cn.prototype
C.p=J.ap.prototype
C.x=new P.df()
C.b=new P.di()
C.y=new P.D(0)
C.z=new P.D(1e4)
C.A=new P.D(1e6)
C.i=new X.q(0,"GameOfLifeStates.alive")
C.f=new X.q(1,"GameOfLifeStates.aliveBorn")
C.j=new X.q(2,"GameOfLifeStates.dead")
C.l=new X.q(3,"GameOfLifeStates.deadUnderPopulated")
C.m=new X.q(4,"GameOfLifeStates.deadOverPopulated")
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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
C.q=function(hooks) { return hooks; }

C.F=function(getTagFallback) {
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
C.G=function() {
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
C.H=function(hooks) {
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
C.I=function(hooks) {
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
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.t=new N.R("ALL",0)
C.o=new N.R("FINE",500)
C.h=new N.R("INFO",800)
C.K=new N.R("OFF",2000)
C.u=new K.r(0,"MathematicalGenerators.random")
C.L=new K.r(1,"MathematicalGenerators.cells")
C.M=new K.r(10,"MathematicalGenerators.sierpinskiMountains")
C.N=new K.r(2,"MathematicalGenerators.xModY")
C.O=new K.r(3,"MathematicalGenerators.arcs")
C.P=new K.r(4,"MathematicalGenerators.diagonalStripes")
C.Q=new K.r(5,"MathematicalGenerators.blocks")
C.R=new K.r(6,"MathematicalGenerators.blocks2")
C.S=new K.r(7,"MathematicalGenerators.chess")
C.T=new K.r(8,"MathematicalGenerators.endlessSierpinski")
C.U=new K.r(9,"MathematicalGenerators.sierpinskiLevel10")
C.V=new E.aW(0,"RendererDisplayMode.fullscreen")
C.w=new E.aW(1,"RendererDisplayMode.fixed")
C.W=new T.aX(0,"SceneCompleteReason.stable")})();(function staticFields(){$.C=0
$.ag=null
$.ep=null
$.fn=null
$.fd=null
$.fu=null
$.dD=null
$.dJ=null
$.el=null
$.a8=null
$.aw=null
$.ax=null
$.ee=!1
$.f=C.b
$.ez=null
$.ey=null
$.ex=null
$.ew=null
$.dF=!1
$.hF=C.K
$.f9=C.h
$.eJ=0})();(function lazyInitializers(){lazy($,"ev","$get$ev",function(){return H.fl("_$dart_dartClosure")})
lazy($,"e4","$get$e4",function(){return H.fl("_$dart_js")})
lazy($,"eT","$get$eT",function(){return H.E(H.cG({
toString:function(){return"$receiver$"}}))})
lazy($,"eU","$get$eU",function(){return H.E(H.cG({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"eV","$get$eV",function(){return H.E(H.cG(null))})
lazy($,"eW","$get$eW",function(){return H.E(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"f_","$get$f_",function(){return H.E(H.cG(void 0))})
lazy($,"f0","$get$f0",function(){return H.E(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"eY","$get$eY",function(){return H.E(H.eZ(null))})
lazy($,"eX","$get$eX",function(){return H.E(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"f2","$get$f2",function(){return H.E(H.eZ(void 0))})
lazy($,"f1","$get$f1",function(){return H.E(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"e9","$get$e9",function(){return P.h5()})
lazy($,"e1","$get$e1",function(){return P.h9(null,C.b,P.j)})
lazy($,"az","$get$az",function(){return[]})
lazy($,"f5","$get$f5",function(){return new Error().stack!=void 0})
lazy($,"eu","$get$eu",function(){return{}})
lazy($,"eg","$get$eg",function(){return N.a2("cellular_automata.simulator")})
lazy($,"f7","$get$f7",function(){return N.a2("cellular_automata.generators.mathematical")})
lazy($,"eL","$get$eL",function(){return P.eH([C.u,new K.c5(),C.L,new K.c6(),C.N,new K.c7(),C.O,new K.c8(),C.P,new K.c9(),C.S,new K.ca(),C.Q,new K.cb(),C.R,new K.cc(),C.T,new K.cd(),C.U,new K.ce(),C.M,new K.cf()],null,P.aI)})
lazy($,"bg","$get$bg",function(){return N.a2("cellular_automata.player")})
lazy($,"f6","$get$f6",function(){return N.a2("cellular_automata.renderers.canvas")})
lazy($,"bY","$get$bY",function(){return N.a2("")})
lazy($,"eK","$get$eK",function(){return P.eG(P.n,N.aj)})})()
var u={mangledGlobalNames:{l:"int",aa:"double",aB:"num",n:"String",V:"bool",j:"Null",u:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.V,args:[P.l,P.l]},{func:1,ret:-1},{func:1,ret:-1,args:[P.h],opt:[P.y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.j,args:[,]},{func:1,ret:-1,args:[,]},{func:1,ret:P.j,args:[,,]},{func:1,ret:-1,args:[P.n,[R.I,,,]]},{func:1,ret:P.j,args:[P.n,[R.I,,,]]},{func:1,args:[,P.n]},{func:1,ret:P.j,args:[,P.y]},{func:1,ret:P.j,args:[P.l,,]},{func:1,ret:-1,opt:[P.h]},{func:1,ret:P.j,args:[,],opt:[,]},{func:1,ret:[P.m,,],args:[,]},{func:1,args:[,X.q]},{func:1,bounds:[P.h],ret:-1,args:[[A.O,,]]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var t=function(a){var n={}
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
setOrUpdateInterceptorsByTag({ArrayBuffer:J.i,Blob:J.i,CanvasGradient:J.i,CanvasPattern:J.i,CanvasRenderingContext2D:J.i,DOMError:J.i,File:J.i,MediaError:J.i,Navigator:J.i,NavigatorConcurrentHardware:J.i,NavigatorUserMediaError:J.i,OverconstrainedError:J.i,PositionError:J.i,SVGAnimatedLength:J.i,SVGAnimatedNumberList:J.i,SVGAnimatedString:J.i,SQLError:J.i,DataView:H.al,ArrayBufferView:H.al,Float32Array:H.ak,Float64Array:H.ak,Int16Array:H.cg,Int32Array:H.ch,Int8Array:H.ci,Uint16Array:H.cj,Uint32Array:H.ck,Uint8ClampedArray:H.aU,CanvasPixelArray:H.aU,Uint8Array:H.cl,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.bp,HTMLAreaElement:W.bq,CSSStyleDeclaration:W.Y,MSStyleCSSProperties:W.Y,CSS2Properties:W.Y,DOMException:W.bC,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,AbortPaymentEvent:W.b,AnimationEvent:W.b,AnimationPlaybackEvent:W.b,ApplicationCacheErrorEvent:W.b,BackgroundFetchClickEvent:W.b,BackgroundFetchEvent:W.b,BackgroundFetchFailEvent:W.b,BackgroundFetchedEvent:W.b,BeforeInstallPromptEvent:W.b,BeforeUnloadEvent:W.b,BlobEvent:W.b,CanMakePaymentEvent:W.b,ClipboardEvent:W.b,CloseEvent:W.b,CustomEvent:W.b,DeviceMotionEvent:W.b,DeviceOrientationEvent:W.b,ErrorEvent:W.b,ExtendableEvent:W.b,ExtendableMessageEvent:W.b,FetchEvent:W.b,FontFaceSetLoadEvent:W.b,ForeignFetchEvent:W.b,GamepadEvent:W.b,HashChangeEvent:W.b,InstallEvent:W.b,MediaEncryptedEvent:W.b,MediaKeyMessageEvent:W.b,MediaQueryListEvent:W.b,MediaStreamEvent:W.b,MediaStreamTrackEvent:W.b,MessageEvent:W.b,MIDIConnectionEvent:W.b,MIDIMessageEvent:W.b,MutationEvent:W.b,NotificationEvent:W.b,PageTransitionEvent:W.b,PaymentRequestEvent:W.b,PaymentRequestUpdateEvent:W.b,PopStateEvent:W.b,PresentationConnectionAvailableEvent:W.b,PresentationConnectionCloseEvent:W.b,ProgressEvent:W.b,PromiseRejectionEvent:W.b,PushEvent:W.b,RTCDataChannelEvent:W.b,RTCDTMFToneChangeEvent:W.b,RTCPeerConnectionIceEvent:W.b,RTCTrackEvent:W.b,SecurityPolicyViolationEvent:W.b,SensorErrorEvent:W.b,SpeechRecognitionError:W.b,SpeechRecognitionEvent:W.b,SpeechSynthesisEvent:W.b,StorageEvent:W.b,SyncEvent:W.b,TrackEvent:W.b,TransitionEvent:W.b,WebKitTransitionEvent:W.b,VRDeviceEvent:W.b,VRDisplayEvent:W.b,VRSessionEvent:W.b,MojoInterfaceRequestEvent:W.b,ResourceProgressEvent:W.b,USBConnectionEvent:W.b,IDBVersionChangeEvent:W.b,AudioProcessingEvent:W.b,OfflineAudioCompletionEvent:W.b,WebGLContextEvent:W.b,Event:W.b,InputEvent:W.b,MediaStream:W.P,Window:W.P,DOMWindow:W.P,EventTarget:W.P,HTMLFormElement:W.bG,MouseEvent:W.S,DragEvent:W.S,PointerEvent:W.S,WheelEvent:W.S,Document:W.a3,HTMLDocument:W.a3,Node:W.a3,HTMLSelectElement:W.cx,CompositionEvent:W.F,FocusEvent:W.F,KeyboardEvent:W.F,TextEvent:W.F,TouchEvent:W.F,UIEvent:W.F})
setOrUpdateLeafTags({ArrayBuffer:true,Blob:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,DOMError:true,File:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SVGAnimatedLength:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MediaStream:true,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false})
H.aS.$nativeSuperclassTag="ArrayBufferView"
H.as.$nativeSuperclassTag="ArrayBufferView"
H.at.$nativeSuperclassTag="ArrayBufferView"
H.ak.$nativeSuperclassTag="ArrayBufferView"
H.au.$nativeSuperclassTag="ArrayBufferView"
H.av.$nativeSuperclassTag="ArrayBufferView"
H.aT.$nativeSuperclassTag="ArrayBufferView"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(A.fs,[])
else A.fs([])})})()
//# sourceMappingURL=demo_canvas.dart.js.map
