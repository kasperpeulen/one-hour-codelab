// Generated by dart2js, the Dart to JavaScript compiler.
(function($){
function dart(){this.x=0
delete this.x
}var A=new dart
var B=new dart
var C=new dart
var D=new dart
var E=new dart
var F=new dart
var G=new dart
var H=new dart
var J=new dart
var K=new dart
var L=new dart
var M=new dart
var N=new dart
var O=new dart
var P=new dart
var Q=new dart
var R=new dart
var S=new dart
var T=new dart
var U=new dart
var V=new dart
var W=new dart
var X=new dart
var Y=new dart
var Z=new dart
function I(){}
init()
$=I.p
;(function(a){"use strict"
function map(b){b=Object.create(null)
b.x=0
delete b.x
return b}function processStatics(a3){for(var h in a3){if(!u.call(a3,h))continue
if(h==="^")continue
var g=a3[h]
var f=h.substring(0,1)
var e
if(f==="+"){v[e]=h.substring(1)
var d=a3[h]
if(d>0)a3[e].$reflectable=d
if(g&&g.length)init.typeInformation[e]=g}else if(f==="@"){h=h.substring(1)
$[h]["@"]=g}else if(f==="*"){n[e].$defaultValues=g
var c=a3.$methodsWithOptionalArguments
if(!c){a3.$methodsWithOptionalArguments=c={}}c[h]=e}else if(typeof g==="function"){n[e=h]=g
i.push(h)
init.globalFunctions[h]=g}else if(g.constructor===Array){addStubs(n,g,h,true,a3,i)}else{e=h
var b={}
var a0
for(var a1 in g){if(!u.call(g,a1))continue
f=a1.substring(0,1)
if(a1==="static"){processStatics(init.statics[h]=g[a1])}else if(f==="+"){w[a0]=a1.substring(1)
var d=g[a1]
if(d>0)g[a0].$reflectable=d}else if(f==="@"&&a1!=="@"){b[a1.substring(1)]["@"]=g[a1]}else if(f==="*"){b[a0].$defaultValues=g[a1]
var c=b.$methodsWithOptionalArguments
if(!c){b.$methodsWithOptionalArguments=c={}}c[a1]=a0}else{var a2=g[a1]
if(a1!=="^"&&a2!=null&&a2.constructor===Array&&a1!=="<>"){addStubs(b,a2,a1,false,g,[])}else{b[a0=a1]=a2}}}$$[h]=[n,b]
j.push(h)}}}function addStubs(b3,b4,b5,b6,b7,b8){var h,g=[b7[b5]=b3[b5]=h=b4[0]]
h.$stubName=b5
b8.push(b5)
for(var f=0;f<b4.length;f+=2){h=b4[f+1]
if(typeof h!="function")break
h.$stubName=b4[f+2]
g.push(h)
if(h.$stubName){b7[h.$stubName]=b3[h.$stubName]=h
b8.push(h.$stubName)}}for(var e=0;e<g.length;f++,e++){g[e].$callName=b4[f+1]}var d=b4[++f]
b4=b4.slice(++f)
var c=b4[0]
var b=c>>1
var a0=(c&1)===1
var a1=c===3
var a2=c===1
var a3=b4[1]
var a4=a3>>1
var a5=(a3&1)===1
var a6=b+a4!=g[0].length
var a7=b4[2]
var a8=2*a4+b+3
var a9=b4.length>a8
if(d){h=tearOff(g,b4,b6,b5,a6)
b3[b5].$getter=h
h.$getterStub=true
if(b6)init.globalFunctions[b5]=h
b7[d]=b3[d]=h
g.push(h)
if(d)b8.push(d)
h.$stubName=d
h.$callName=null
if(a6)init.interceptedNames[d]=true}if(a9){for(var e=0;e<g.length;e++){g[e].$reflectable=1
g[e].$reflectionInfo=b4}var b0=b6?init.mangledGlobalNames:init.mangledNames
var b1=b4[a8]
var b2=b1
if(d)b0[d]=b2
if(a1){b2+="="}else if(!a2){b2+=":"+b+":"+a4}b0[b5]=b2
g[0].$reflectionName=b2
g[0].$metadataIndex=a8+1
if(a4)b3[b1+"*"]=g[0]}}function tearOffGetterNoCsp(b,c,d,e){return e?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+d+z+++"(x) {"+"if (c === null) c = H.qm("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(b,c,d,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+d+z+++"() {"+"if (c === null) c = H.qm("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(b,c,d,H,null)}function tearOffGetterCsp(b,c,d,e){var h=null
return e?function(f){if(h===null)h=H.qm(this,b,c,false,[f],d)
return new h(this,b[0],f,d)}:function(){if(h===null)h=H.qm(this,b,c,false,[],d)
return new h(this,b[0],null,d)}}function tearOff(b,c,d,e,f){var h
return d?function(){if(h===void 0)h=H.qm(this,b,c,true,[],e).prototype
return h}:y(b,c,e,f)}var z=0
var y=typeof dart_precompiled=="function"?tearOffGetterCsp:tearOffGetterNoCsp
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
if(!init.globalFunctions)init.globalFunctions=map()
if(!init.interceptedNames)init.interceptedNames=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
for(var s=0;s<t;s++){var r=a[s]
var q=r[0]
var p=r[1]
var o=r[2]
var n=r[3]
var m=r[4]
var l=!!r[5]
var k=m&&m["^"]
if(k instanceof Array)k=k[0]
var j=[]
var i=[]
processStatics(m)
x.push([q,p,j,i,o,k,l,n])}})([["","",,A,{
"^":"",
E2:function(){}},1],])
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers[a]}
init.initializeLoadedHunk=function(a){$dart_deferred_initializers[a](S0,$)}
init.deferredLibraryUris={}
init.deferredLibraryHashes={}
$.yj=0
$.mJ=null
$.P4=null

init.metadata=[];$=null
I = I.$finishIsolateConstructor(I)
$=new I()
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}
A = convertToFastObject(A)
B = convertToFastObject(B)
C = convertToFastObject(C)
D = convertToFastObject(D)
E = convertToFastObject(E)
F = convertToFastObject(F)
G = convertToFastObject(G)
H = convertToFastObject(H)
J = convertToFastObject(J)
K = convertToFastObject(K)
L = convertToFastObject(L)
M = convertToFastObject(M)
N = convertToFastObject(N)
O = convertToFastObject(O)
P = convertToFastObject(P)
Q = convertToFastObject(Q)
R = convertToFastObject(R)
S = convertToFastObject(S)
T = convertToFastObject(T)
U = convertToFastObject(U)
V = convertToFastObject(V)
W = convertToFastObject(W)
X = convertToFastObject(X)
Y = convertToFastObject(Y)
Z = convertToFastObject(Z)
function init(){I.p=Object.create(null)
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[c]=d
var z={}
var y={}
a[c]=z
a[d]=function(){var x=$[c]
try{if(x===z){$[c]=y
try{x=$[c]=e()}finally{if(x===z)$[c]=null}}else{if(x===y)H.eQ(b)}return x}finally{$[d]=function(){return this[c]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.prototype.hasOwnProperty
for(var x in z)if(y.call(z,x))this[x]=z[x]
var w=init.lazies
for(var v in w){this[w[v]]=null}function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var v in w){var u=w[v]
this[u]=z[u]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
return Isolate}}
;(function(a){if(typeof document==="undefined"){a(null)
return}if(document.currentScript){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x){z[x].removeEventListener("load",onLoad,false)}a(b.target)}for(var y=0;y<z.length;++y){z[y].addEventListener("load",onLoad,false)}})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function"){dartMainRunner(A.E2,[])}else{A.E2([])}})
})()
