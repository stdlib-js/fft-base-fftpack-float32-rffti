"use strict";var T=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var k=T(function(G,j){
var M=require('@stdlib/math-base-special-sincosf/dist').assign,P=require('@stdlib/constants-float32-two-pi/dist'),u=require('@stdlib/number-float64-base-to-float32/dist'),_=require('@stdlib/array-uint32/dist'),S=require('@stdlib/fft-base-fftpack-float32-decompose/dist'),U=new _([4,2,3,5]);function w(a,r,v,n,e,f,h){var o,y,s,I,q,c,i,l,t,g,R,m,p,x,A,O,b;if(s=new _(e.buffer,e.byteOffset,e.length),c=S(a,4,U,1,0,s,f,h),c-1!==0)for(I=u(P/a),p=1,t=1,q=h+2*f,R=2*v,O=0;O<c-1;O++){for(o=s[q],l=o*t,x=a/l>>>0,g=0,b=1;b<o;b++){for(g+=t,y=u(g*I),i=1,m=n+p*v,A=2;A<x;A+=2)M(u(i*y),r,-v,m),i=u(i+1),m+=R;p+=x}t=l,q+=f}}j.exports=w
});var L=T(function(H,C){
var z=k();function B(a,r,v,n){var e,f;return a===1||(e=n+a*v,f=e+a*v,z(a,r,v,e,r,v,f)),r}C.exports=B
});var D=L();module.exports=D;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
