var mc=Object.defineProperty;var gc=(i,e,t)=>e in i?mc(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Pe=(i,e,t)=>gc(i,typeof e!="symbol"?e+"":e,t);import{u as lo,s as si,c as _c,j as I,r as Sn}from"./audio-tN9R3S_t.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="187",xc=0,co=1,vc=2,Cs=1,pl=2,Oi=3,ti=0,kt=1,It=2,Mi=0,zi=1,Fs=2,ho=3,uo=4,Mc=5,_i=100,Sc=101,yc=102,Ec=103,bc=104,Tc=200,Ac=201,wc=202,Rc=203,ml=204,gl=205,Cc=206,Pc=207,Lc=208,Nc=209,Dc=210,Ic=211,Uc=212,Fc=213,Oc=214,Or=0,Br=1,zr=2,ki=3,Hr=4,Gr=5,kr=6,Vr=7,_l=0,Bc=1,zc=2,Pn=0,xl=1,vl=2,Ml=3,Da=4,Sl=5,yl=6,El=7,bl=300,yi=301,Vi=302,nr=303,ir=304,Os=1e3,Rn=1001,Wr=1002,Ct=1003,Hc=1004,ns=1005,Ot=1006,sr=1007,Cn=1008,Xt=1009,Tl=1010,Al=1011,Wi=1012,Ia=1013,xn=1014,pn=1015,vn=1016,Ua=1017,Fa=1018,Ei=1020,wl=35902,Rl=35899,Cl=1021,Pl=1022,on=1023,Wn=1026,Vn=1027,Ll=1028,Oa=1029,ni=1030,Ba=1031,za=1033,Ps=33776,Ls=33777,Ns=33778,Ds=33779,Xr=35840,qr=35841,Yr=35842,Kr=35843,Jr=36196,Zr=37492,$r=37496,jr=37488,Qr=37489,Bs=37490,ea=37491,ta=37808,na=37809,ia=37810,sa=37811,ra=37812,aa=37813,oa=37814,la=37815,ca=37816,ha=37817,ua=37818,da=37819,fa=37820,pa=37821,ma=36492,ga=36494,_a=36495,xa=36283,va=36284,zs=36285,Ma=36286,Gc=3200,Sa=0,kc=1,kn="",Gt="srgb",Hs="srgb-linear",Gs="linear",Qe="srgb",rr=7680,Vc=519,Wc=512,Xc=513,qc=514,Nl=515,Yc=516,Kc=517,Dl=518,Il=519,Jc=35044,fo="300 es",ln=2e3,Xi=2001;function Zc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $c(){const i=ks("canvas");return i.style.display="block",i}const po={};function mo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ul(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=Ul(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Ul(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Is(...i){const e=i.join(" ");e in po||(po[e]=!0,Le(...i))}function jc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Qc={[Or]:Or,[zr]:kr,[Hr]:Hr,[ki]:Gr,[Br]:Br,[kr]:zr,[Vr]:Vr,[Gr]:ki};class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ar=Math.PI/180,ya=180/Math.PI;function Ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function eh(i,e){return(i%e+e)%e}function or(i,e,t){return(1-t)*i+t*e}function th(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ha(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nh(i,e){if(e.constructor===Float32Array)return i;const t=Ha(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function ih(i,e){if(e.constructor===Float32Array)return i;const t=Ha(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Ya=class Ya{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ya.prototype.isVector2=!0;let ye=Ya;class Ri{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3],f=r[a+0],u=r[a+1],_=r[a+2],b=r[a+3];if(h!==b||l!==f||c!==u||d!==_){let m=l*f+c*u+d*_+h*b;m<0&&(f=-f,u=-u,_=-_,b=-b,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),x=Math.sin(M);p=Math.sin(p*M)/x,o=Math.sin(o*M)/x,l=l*p+f*o,c=c*p+u*o,d=d*p+_*o,h=h*p+b*o}else{l=l*p+f*o,c=c*p+u*o,d=d*p+_*o,h=h*p+b*o;const M=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=M,c*=M,d*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],f=r[a+1],u=r[a+2],_=r[a+3];return e[t]=o*_+d*h+l*u-c*f,e[t+1]=l*_+d*f+c*h-o*u,e[t+2]=c*_+d*u+o*f-l*h,e[t+3]=d*_-o*h-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),f=l(n/2),u=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*d*h+c*u*_,this._y=c*u*h-f*d*_,this._z=c*d*_+f*u*h,this._w=c*d*h-f*u*_;break;case"YXZ":this._x=f*d*h+c*u*_,this._y=c*u*h-f*d*_,this._z=c*d*_-f*u*h,this._w=c*d*h+f*u*_;break;case"ZXY":this._x=f*d*h-c*u*_,this._y=c*u*h+f*d*_,this._z=c*d*_+f*u*h,this._w=c*d*h-f*u*_;break;case"ZYX":this._x=f*d*h-c*u*_,this._y=c*u*h+f*d*_,this._z=c*d*_-f*u*h,this._w=c*d*h+f*u*_;break;case"YZX":this._x=f*d*h+c*u*_,this._y=c*u*h+f*d*_,this._z=c*d*_-f*u*h,this._w=c*d*h-f*u*_;break;case"XZY":this._x=f*d*h-c*u*_,this._y=c*u*h-f*d*_,this._z=c*d*_+f*u*h,this._w=c*d*h+f*u*_;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=n+o+h;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(d-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>h){const u=2*Math.sqrt(1+n-o-h);this._w=(d-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>h){const u=2*Math.sqrt(1+o-n-h);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+d)/u}else{const u=2*Math.sqrt(1+h-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ka=class Ka{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(go.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(go.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lr.copy(this).projectOnVector(e),this.sub(lr)}reflect(e){return this.sub(lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ka.prototype.isVector3=!0;let D=Ka;const lr=new D,go=new Ri,Ja=class Ja{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],f=n[2],u=n[5],_=n[8],b=s[0],m=s[3],p=s[6],M=s[1],x=s[4],S=s[7],w=s[2],T=s[5],g=s[8];return r[0]=a*b+o*M+l*w,r[3]=a*m+o*x+l*T,r[6]=a*p+o*S+l*g,r[1]=c*b+d*M+h*w,r[4]=c*m+d*x+h*T,r[7]=c*p+d*S+h*g,r[2]=f*b+u*M+_*w,r[5]=f*m+u*x+_*T,r[8]=f*p+u*S+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*r,u=c*r-a*l,_=t*h+n*f+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return e[0]=h*b,e[1]=(s*c-d*n)*b,e[2]=(o*n-s*a)*b,e[3]=f*b,e[4]=(d*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=u*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cr.makeScale(e,t)),this}rotate(e){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cr.makeRotation(-e)),this}translate(e,t){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ja.prototype.isMatrix3=!0;let De=Ja;const cr=new De,_o=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xo=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sh(){const i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:e,whitePoint:n,transfer:Gs,toXYZ:_o,fromXYZ:xo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:_o,fromXYZ:xo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const qe=sh();function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class rh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ri===void 0&&(ri=ks("canvas")),ri.width=e.width,ri.height=e.height;const s=ri.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ah=0;class Ga{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hr(s[a].image)):r.push(hr(s[a]))}else r=hr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function hr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let oh=0;const ur=new D;class Bt extends ii{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Rn,s=Rn,r=Ot,a=Cn,o=on,l=Xt,c=Bt.DEFAULT_ANISOTROPY,d=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Ki(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ur).x}get height(){return this.source.getSize(ur).y}get depth(){return this.source.getSize(ur).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=bl;Bt.DEFAULT_ANISOTROPY=1;const Za=class Za{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],u=l[5],_=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-b)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+b)<.1&&Math.abs(_+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(u+1)/2,w=(p+1)/2,T=(d+f)/4,g=(h+b)/4,E=(_+m)/4;return x>S&&x>w?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=g/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=E/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=g/r,s=E/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-_)*(m-_)+(h-b)*(h-b)+(f-d)*(f-d));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-b)/M,this.z=(f-d)/M,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Za.prototype.isVector4=!0;let lt=Za;class lh extends ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Bt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ga(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends lh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fl extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ch extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ys=class Ys{constructor(e,t,n,s,r,a,o,l,c,d,h,f,u,_,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,h,f,u,_,b,m)}set(e,t,n,s,r,a,o,l,c,d,h,f,u,_,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=f,p[3]=u,p[7]=_,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ys().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*d,u=a*h,_=o*d,b=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=u+_*c,t[5]=f-b*c,t[9]=-o*l,t[2]=b-f*c,t[6]=_+u*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*d,u=l*h,_=c*d,b=c*h;t[0]=f+b*o,t[4]=_*o-u,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=u*o-_,t[6]=b+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*d,u=l*h,_=c*d,b=c*h;t[0]=f-b*o,t[4]=-a*h,t[8]=_+u*o,t[1]=u+_*o,t[5]=a*d,t[9]=b-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*d,u=a*h,_=o*d,b=o*h;t[0]=l*d,t[4]=_*c-u,t[8]=f*c+b,t[1]=l*h,t[5]=b*c+f,t[9]=u*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,u=a*c,_=o*l,b=o*c;t[0]=l*d,t[4]=b-f*h,t[8]=_*h+u,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=u*h+_,t[10]=f-b*h}else if(e.order==="XZY"){const f=a*l,u=a*c,_=o*l,b=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+b,t[5]=a*d,t[9]=u*h-_,t[2]=_*h-u,t[6]=o*d,t[10]=b*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hh,e,uh)}lookAt(e,t,n){const s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Fn.crossVectors(n,Vt),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Fn.crossVectors(n,Vt)),Fn.normalize(),is.crossVectors(Vt,Fn),s[0]=Fn.x,s[4]=is.x,s[8]=Vt.x,s[1]=Fn.y,s[5]=is.y,s[9]=Vt.y,s[2]=Fn.z,s[6]=is.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],f=n[9],u=n[13],_=n[2],b=n[6],m=n[10],p=n[14],M=n[3],x=n[7],S=n[11],w=n[15],T=s[0],g=s[4],E=s[8],N=s[12],C=s[1],F=s[5],O=s[9],W=s[13],P=s[2],V=s[6],Y=s[10],k=s[14],ne=s[3],q=s[7],Q=s[11],ee=s[15];return r[0]=a*T+o*C+l*P+c*ne,r[4]=a*g+o*F+l*V+c*q,r[8]=a*E+o*O+l*Y+c*Q,r[12]=a*N+o*W+l*k+c*ee,r[1]=d*T+h*C+f*P+u*ne,r[5]=d*g+h*F+f*V+u*q,r[9]=d*E+h*O+f*Y+u*Q,r[13]=d*N+h*W+f*k+u*ee,r[2]=_*T+b*C+m*P+p*ne,r[6]=_*g+b*F+m*V+p*q,r[10]=_*E+b*O+m*Y+p*Q,r[14]=_*N+b*W+m*k+p*ee,r[3]=M*T+x*C+S*P+w*ne,r[7]=M*g+x*F+S*V+w*q,r[11]=M*E+x*O+S*Y+w*Q,r[15]=M*N+x*W+S*k+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],u=e[14],_=e[3],b=e[7],m=e[11],p=e[15],M=l*u-c*f,x=o*u-c*h,S=o*f-l*h,w=a*u-c*d,T=a*f-l*d,g=a*h-o*d;return t*(b*M-m*x+p*S)-n*(_*M-m*w+p*T)+s*(_*x-b*w+p*g)-r*(_*S-b*T+m*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],u=e[11],_=e[12],b=e[13],m=e[14],p=e[15],M=t*o-n*a,x=t*l-s*a,S=t*c-r*a,w=n*l-s*o,T=n*c-r*o,g=s*c-r*l,E=d*b-h*_,N=d*m-f*_,C=d*p-u*_,F=h*m-f*b,O=h*p-u*b,W=f*p-u*m,P=M*W-x*O+S*F+w*C-T*N+g*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/P;return e[0]=(o*W-l*O+c*F)*V,e[1]=(s*O-n*W-r*F)*V,e[2]=(b*g-m*T+p*w)*V,e[3]=(f*T-h*g-u*w)*V,e[4]=(l*C-a*W-c*N)*V,e[5]=(t*W-s*C+r*N)*V,e[6]=(m*S-_*g-p*x)*V,e[7]=(d*g-f*S+u*x)*V,e[8]=(a*O-o*C+c*E)*V,e[9]=(n*C-t*O-r*E)*V,e[10]=(_*T-b*S+p*M)*V,e[11]=(h*S-d*T-u*M)*V,e[12]=(o*N-a*F-l*E)*V,e[13]=(t*F-n*N+s*E)*V,e[14]=(b*x-_*w-m*M)*V,e[15]=(d*w-h*x+f*M)*V,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,h=o+o,f=r*c,u=r*d,_=r*h,b=a*d,m=a*h,p=o*h,M=l*c,x=l*d,S=l*h,w=n.x,T=n.y,g=n.z;return s[0]=(1-(b+p))*w,s[1]=(u+S)*w,s[2]=(_-x)*w,s[3]=0,s[4]=(u-S)*T,s[5]=(1-(f+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(_+x)*g,s[9]=(m-M)*g,s[10]=(1-(f+b))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ai.set(s[0],s[1],s[2]).length();const o=ai.set(s[4],s[5],s[6]).length(),l=ai.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qt.copy(this);const c=1/a,d=1/o,h=1/l;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=d,Qt.elements[5]*=d,Qt.elements[6]*=d,Qt.elements[8]*=h,Qt.elements[9]*=h,Qt.elements[10]*=h,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=ln,l=!1){const c=this.elements,d=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s);let _,b;if(l)_=r/(a-r),b=a*r/(a-r);else if(o===ln)_=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Xi)_=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ln,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),u=-(n+s)/(n-s);let _,b;if(l)_=1/(a-r),b=a/(a-r);else if(o===ln)_=-2/(a-r),b=-(a+r)/(a-r);else if(o===Xi)_=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ys.prototype.isMatrix4=!0;let it=Ys;const ai=new D,Qt=new it,hh=new D(0,0,0),uh=new D(1,1,1),Fn=new D,is=new D,Vt=new D,vo=new it,Mo=new Ri;class Xn{constructor(e=0,t=0,n=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mo.setFromEuler(this),this.setFromQuaternion(Mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dh=0;const So=new D,oi=new Ri,yn=new it,ss=new D,Ni=new D,fh=new D,ph=new Ri,yo=new D(1,0,0),Eo=new D(0,1,0),bo=new D(0,0,1),To={type:"added"},mh={type:"removed"},li={type:"childadded",child:null},dr={type:"childremoved",child:null};class Tt extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new D,t=new Xn,n=new Ri,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new De}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(yo,e)}rotateY(e){return this.rotateOnAxis(Eo,e)}rotateZ(e){return this.rotateOnAxis(bo,e)}translateOnAxis(e,t){return So.copy(e).applyQuaternion(this.quaternion),this.position.add(So.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yo,e)}translateY(e){return this.translateOnAxis(Eo,e)}translateZ(e){return this.translateOnAxis(bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ss.copy(e):ss.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Ni,ss,this.up):yn.lookAt(ss,Ni,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(yn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(To),li.child=e,this.dispatchEvent(li),li.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mh),dr.child=e,this.dispatchEvent(dr),dr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(To),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,fh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,ph,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),u=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tt.DEFAULT_UP=new D(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ht extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gh={type:"move"};class fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),u=.02,_=.005;c.inputState.pinching&&f>u+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},rs={h:0,s:0,l:0};function pr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=eh(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=pr(a,r,e+1/3),this.g=pr(a,r,e),this.b=pr(a,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=Bl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return qe.workingToColorSpace(Dt.copy(this),e),Math.round(Ge(Dt.r*255,0,255))*65536+Math.round(Ge(Dt.g*255,0,255))*256+Math.round(Ge(Dt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Gt){qe.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,s=Dt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(rs);const n=or(On.h,rs.h,t),s=or(On.s,rs.s,t),r=or(On.l,rs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new He;He.NAMES=Bl;class Vs{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new Vs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _h extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const en=new D,En=new D,mr=new D,bn=new D,ci=new D,hi=new D,Ao=new D,gr=new D,_r=new D,xr=new D,vr=new lt,Mr=new lt,Sr=new lt;class an{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),en.subVectors(e,t),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){en.subVectors(s,t),En.subVectors(n,t),mr.subVectors(e,t);const a=en.dot(en),o=en.dot(En),l=en.dot(mr),c=En.dot(En),d=En.dot(mr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,u=(c*l-o*d)*f,_=(a*d-o*l)*f;return r.set(1-u-_,_,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return vr.setScalar(0),Mr.setScalar(0),Sr.setScalar(0),vr.fromBufferAttribute(e,t),Mr.fromBufferAttribute(e,n),Sr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(vr,r.x),a.addScaledVector(Mr,r.y),a.addScaledVector(Sr,r.z),a}static isFrontFacing(e,t,n,s){return en.subVectors(n,t),En.subVectors(e,t),en.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),En.subVectors(this.a,this.b),en.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ci.subVectors(s,n),hi.subVectors(r,n),gr.subVectors(e,n);const l=ci.dot(gr),c=hi.dot(gr);if(l<=0&&c<=0)return t.copy(n);_r.subVectors(e,s);const d=ci.dot(_r),h=hi.dot(_r);if(d>=0&&h<=d)return t.copy(s);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),t.copy(n).addScaledVector(ci,a);xr.subVectors(e,r);const u=ci.dot(xr),_=hi.dot(xr);if(_>=0&&u<=_)return t.copy(r);const b=u*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(hi,o);const m=d*_-u*h;if(m<=0&&h-d>=0&&u-_>=0)return Ao.subVectors(r,s),o=(h-d)/(h-d+(u-_)),t.copy(s).addScaledVector(Ao,o);const p=1/(m+b+f);return a=b*p,o=f*p,t.copy(n).addScaledVector(ci,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ji{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(e.matrixWorld),this.union(as)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),os.subVectors(this.max,Di),ui.subVectors(e.a,Di),di.subVectors(e.b,Di),fi.subVectors(e.c,Di),Bn.subVectors(di,ui),zn.subVectors(fi,di),Zn.subVectors(ui,fi);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Zn.z,Zn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Zn.z,0,-Zn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Zn.y,Zn.x,0];return!yr(t,ui,di,fi,os)||(t=[1,0,0,0,1,0,0,0,1],!yr(t,ui,di,fi,os))?!1:(ls.crossVectors(Bn,zn),t=[ls.x,ls.y,ls.z],yr(t,ui,di,fi,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tn=[new D,new D,new D,new D,new D,new D,new D,new D],tn=new D,as=new Ji,ui=new D,di=new D,fi=new D,Bn=new D,zn=new D,Zn=new D,Di=new D,os=new D,ls=new D,$n=new D;function yr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);const o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),d=n.dot($n);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const ft=new D,cs=new ye;let xh=0;class _n extends ii{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=pn,this.version=0,this._normalizationScale=e!==void 0?Ha(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):nh(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):ih(e,this.array)}}class zl extends _n{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hl extends _n{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ke extends _n{constructor(e,t,n){super(new Float32Array(e),t,n)}}const vh=new Ji,Ii=new D,Er=new D;class Ks{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ii,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Er.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(Er)),this.expandByPoint(Ii.copy(e.center).sub(Er))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Mh=0;const $t=new it,br=new Tt,pi=new D,Wt=new Ji,Ui=new Ji,Et=new D;class mt extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zc(e)?Hl:zl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return br.lookAt(e),br.updateMatrix(),this.applyMatrix4(br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ke(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Wt.min,Ui.min),Wt.expandByPoint(Et),Et.addVectors(Wt.max,Ui.max),Wt.expandByPoint(Et)):(Wt.expandByPoint(Ui.min),Wt.expandByPoint(Ui.max))}Wt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Et.fromBufferAttribute(o,c),l&&(pi.fromBufferAttribute(e,c),Et.add(pi)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new _n(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new D,l[N]=new D;const d=new D,h=new D,f=new D,u=new ye,_=new ye,b=new ye,m=new D,p=new D;function M(N,C,F){c[N]=c[C]=c[F]=1,d.fromBufferAttribute(n,N),h.fromBufferAttribute(n,C),f.fromBufferAttribute(n,F),u.fromBufferAttribute(r,N),_.fromBufferAttribute(r,C),b.fromBufferAttribute(r,F),h.sub(d),f.sub(d),_.sub(u),b.sub(u);const O=1/(_.x*b.y-b.x*_.y);isFinite(O)&&(m.copy(h).multiplyScalar(b.y).addScaledVector(f,-_.y).multiplyScalar(O),p.copy(f).multiplyScalar(_.x).addScaledVector(h,-b.x).multiplyScalar(O),o[N].add(m),o[C].add(m),o[F].add(m),l[N].add(p),l[C].add(p),l[F].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let N=0,C=x.length;N<C;++N){const F=x[N],O=F.start,W=F.count;for(let P=O,V=O+W;P<V;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const S=new D,w=new D,T=new D,g=new D;function E(N){T.fromBufferAttribute(s,N),g.copy(T);const C=o[N];S.copy(C),S.sub(T.multiplyScalar(T.dot(C))).normalize(),w.crossVectors(g,C);const O=w.dot(l[N])<0?-1:1;a.setXYZW(N,S.x,S.y,S.z,O)}for(let N=0,C=n.count;N<C;++N)c[N]&&E(N);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,d=new D,h=new D;if(e)for(let f=0,u=e.count;f<u;f+=3){const _=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let u=0,_=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?u=l[b]*o.data.stride+o.offset:u=l[b]*d;for(let p=0;p<d;p++)f[_++]=c[u++]}return new _n(f,d,h)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],u=e(f,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const u=c[h];d.push(u.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let f=0,u=h.length;f<u;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tr=new D,Sh=new D,yh=new De;class Gn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Tr.subVectors(n,t).cross(Sh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Tr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yh.getNormalMatrix(e),s=this.coplanarPoint(Tr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Eh=0;class Ci extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=zi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const An=new D,Ar=new D,hs=new D,us=new D;class Gl{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ar.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),us.copy(this.origin).sub(Ar);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hs),o=us.dot(this.direction),l=-us.dot(hs),c=us.lengthSq(),d=Math.abs(1-a*a);let h,f,u,_;if(d>0)if(h=a*l-o,f=a*o-l,_=r*d,h>=0)if(f>=-_)if(f<=_){const b=1/d;h*=b,f*=b,u=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),u=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),u=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),u=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),u=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),u=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ar).addScaledVector(hs,f),u}intersectSphere(e,t){if(e.radius<0)return null;An.subVectors(e.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=e.x-a.x,f=e.y-a.y,u=e.z-a.z,_=t.x-a.x,b=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,x=n.z-a.z,S=Math.abs(l),w=Math.abs(c),T=Math.abs(d);let g,E,N,C,F,O,W,P,V,Y,k,ne;if(S>=w&&S>=T?(N=l,O=h,V=_,ne=p,l>=0?(g=c,E=d,C=f,F=u,W=b,P=m,Y=M,k=x):(g=d,E=c,C=u,F=f,W=m,P=b,Y=x,k=M)):w>=T?(N=c,O=f,V=b,ne=M,c>=0?(g=d,E=l,C=u,F=h,W=m,P=_,Y=x,k=p):(g=l,E=d,C=h,F=u,W=_,P=m,Y=p,k=x)):(N=d,O=u,V=m,ne=x,d>=0?(g=l,E=c,C=h,F=f,W=_,P=b,Y=p,k=M):(g=c,E=l,C=f,F=h,W=b,P=_,Y=M,k=p)),N===0)return null;const q=g/N,Q=E/N,ee=1/N,Ee=C-q*O,Ie=F-Q*O,Z=W-q*V,me=P-Q*V,ve=Y-q*ne,we=k-Q*ne,ge=ve*me-we*Z,Fe=Ee*we-Ie*ve,ut=Z*Ie-me*Ee;if(s){if(ge<0||Fe<0||ut<0)return null}else if((ge<0||Fe<0||ut<0)&&(ge>0||Fe>0||ut>0))return null;const Ce=ge+Fe+ut;if(Ce===0)return null;const $e=ee*(ge*O+Fe*V+ut*ne);return(Ce>0?$e<0:$e>0)?null:this.at($e/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ea extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wo=new it,jn=new Gl,ds=new Ks,Ro=new D,fs=new D,ps=new D,ms=new D,wr=new D,gs=new D,Co=new D,_s=new D;class ct extends Tt{constructor(e=new mt,t=new Ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){gs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(wr.fromBufferAttribute(h,e),a?gs.addScaledVector(wr,d):gs.addScaledVector(wr.sub(t),d))}t.add(gs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(r),jn.copy(e.ray).recast(e.near),!(ds.containsPoint(jn.origin)===!1&&(jn.intersectSphere(ds,Ro)===null||jn.origin.distanceToSquared(Ro)>(e.far-e.near)**2))&&(wo.copy(r).invert(),jn.copy(e.ray).applyMatrix4(wo),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=f.length;_<b;_++){const m=f[_],p=a[m.materialIndex],M=Math.max(m.start,u.start),x=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let S=M,w=x;S<w;S+=3){const T=o.getX(S),g=o.getX(S+1),E=o.getX(S+2);s=xs(this,p,e,n,c,d,h,T,g,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,u.start),b=Math.min(o.count,u.start+u.count);for(let m=_,p=b;m<p;m+=3){const M=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);s=xs(this,a,e,n,c,d,h,M,x,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,b=f.length;_<b;_++){const m=f[_],p=a[m.materialIndex],M=Math.max(m.start,u.start),x=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let S=M,w=x;S<w;S+=3){const T=S,g=S+1,E=S+2;s=xs(this,p,e,n,c,d,h,T,g,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,u.start),b=Math.min(l.count,u.start+u.count);for(let m=_,p=b;m<p;m+=3){const M=m,x=m+1,S=m+2;s=xs(this,a,e,n,c,d,h,M,x,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function bh(i,e,t,n,s,r,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ti,o),l===null)return null;_s.copy(o),_s.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(_s);return c<t.near||c>t.far?null:{distance:c,point:_s.clone(),object:i}}function xs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,fs),i.getVertexPosition(l,ps),i.getVertexPosition(c,ms);const d=bh(i,e,t,n,fs,ps,ms,Co);if(d){const h=new D;an.getBarycoord(Co,fs,ps,ms,h),s&&(d.uv=an.getInterpolatedAttribute(s,o,l,c,h,new ye)),r&&(d.uv1=an.getInterpolatedAttribute(r,o,l,c,h,new ye)),a&&(d.normal=an.getInterpolatedAttribute(a,o,l,c,h,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};an.getNormal(fs,ps,ms,f.normal),d.face=f,d.barycoord=h}return d}class kl extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ct,d=Ct,h,f){super(null,a,o,l,c,d,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qn=new Ks,Th=new ye(.5,.5),vs=new D;class qi{constructor(e=new Gn,t=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],f=r[6],u=r[7],_=r[8],b=r[9],m=r[10],p=r[11],M=r[12],x=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-a,u-d,p-_,w-M).normalize(),s[1].setComponents(c+a,u+d,p+_,w+M).normalize(),s[2].setComponents(c+o,u+h,p+b,w+x).normalize(),s[3].setComponents(c-o,u-h,p-b,w-x).normalize(),n)s[4].setComponents(l,f,m,S).normalize(),s[5].setComponents(c-l,u-f,p-m,w-S).normalize();else if(s[4].setComponents(c-l,u-f,p-m,w-S).normalize(),t===ln)s[5].setComponents(c+l,u+f,p+m,w+S).normalize();else if(t===Xi)s[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);const t=Th.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(vs.x=s.normal.x>0?e.max.x:e.min.x,vs.y=s.normal.y>0?e.max.y:e.min.y,vs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Po=new it;class ka{constructor(){this.coordinateSystem=ln,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Po.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new qi),n[s].setFromProjectionMatrix(Po,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new qi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new ka().copy(this)}}class Vl extends Ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lo=new it,ba=new Gl,Ms=new Ks,Ss=new D;class Ta extends Tt{constructor(e=new mt,t=new Vl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(s),Ms.radius+=r,e.ray.intersectsSphere(Ms)===!1)return;Lo.copy(s).invert(),ba.copy(e.ray).applyMatrix4(Lo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let _=f,b=u;_<b;_++){const m=c.getX(_);Ss.fromBufferAttribute(h,m),No(Ss,m,l,s,e,t,this)}}else{const f=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);for(let _=f,b=u;_<b;_++)Ss.fromBufferAttribute(h,_),No(Ss,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function No(i,e,t,n,s,r,a){const o=ba.distanceSqToPoint(i);if(o<t){const l=new D;ba.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Wl extends Bt{constructor(e=[],t=yi,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bi extends Bt{constructor(e,t,n=xn,s,r,a,o=Ct,l=Ct,c,d=Wn,h=1){if(d!==Wn&&d!==Vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Xl extends bi{constructor(e,t=xn,n=yi,s,r,a=Ct,o=Ct,l,c=Wn){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ql extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qn extends mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,u=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(h,2));function _(b,m,p,M,x,S,w,T,g,E,N){const C=S/g,F=w/E,O=S/2,W=w/2,P=T/2,V=g+1,Y=E+1;let k=0,ne=0;const q=new D;for(let Q=0;Q<Y;Q++){const ee=Q*F-W;for(let Ee=0;Ee<V;Ee++){const Ie=Ee*C-O;q[b]=Ie*M,q[m]=ee*x,q[p]=P,c.push(q.x,q.y,q.z),q[b]=0,q[m]=0,q[p]=T>0?1:-1,d.push(q.x,q.y,q.z),h.push(Ee/g),h.push(1-Q/E),k+=1}}for(let Q=0;Q<E;Q++)for(let ee=0;ee<g;ee++){const Ee=f+ee+V*Q,Ie=f+ee+V*(Q+1),Z=f+(ee+1)+V*(Q+1),me=f+(ee+1)+V*Q;l.push(Ee,Ie,me),l.push(Ie,Z,me),ne+=6}o.addGroup(u,ne,N),u+=ne,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Js extends mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new D,d=new ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const u=n+h/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[f]/e+1)/2,d.y=(a[f+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zi extends mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],f=[],u=[];let _=0;const b=[],m=n/2;let p=0;M(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(u,2));function M(){const S=new D,w=new D;let T=0;const g=(t-e)/n;for(let E=0;E<=r;E++){const N=[],C=E/r,F=C*(t-e)+e;for(let O=0;O<=s;O++){const W=O/s,P=W*l+o,V=Math.sin(P),Y=Math.cos(P);w.x=F*V,w.y=-C*n+m,w.z=F*Y,h.push(w.x,w.y,w.z),S.set(V,g,Y).normalize(),f.push(S.x,S.y,S.z),u.push(W,1-C),N.push(_++)}b.push(N)}for(let E=0;E<s;E++)for(let N=0;N<r;N++){const C=b[N][E],F=b[N+1][E],O=b[N+1][E+1],W=b[N][E+1];(e>0||N!==0)&&(d.push(C,F,W),T+=3),(t>0||N!==r-1)&&(d.push(F,O,W),T+=3)}c.addGroup(p,T,0),p+=T}function x(S){const w=_,T=new ye,g=new D;let E=0;const N=S===!0?e:t,C=S===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*C,0),f.push(0,C,0),u.push(.5,.5),_++;const F=_;for(let O=0;O<=s;O++){const P=O/s*l+o,V=Math.cos(P),Y=Math.sin(P);g.x=N*Y,g.y=m*C,g.z=N*V,h.push(g.x,g.y,g.z),f.push(0,C,0),T.x=V*.5+.5,T.y=Y*.5*C+.5,u.push(T.x,T.y),_++}for(let O=0;O<s;O++){const W=w+O,P=F+O;S===!0?d.push(P,P+1,W):d.push(P+1,P,W),E+=3}c.addGroup(p,E,S===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nn extends Zi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Nn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $i extends mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new D,S=new D,w=new D;for(let T=0;T<t.length;T+=3)u(t[T+0],x),u(t[T+1],S),u(t[T+2],w),l(x,S,w,M)}function l(M,x,S,w){const T=w+1,g=[];for(let E=0;E<=T;E++){g[E]=[];const N=M.clone().lerp(S,E/T),C=x.clone().lerp(S,E/T),F=T-E;for(let O=0;O<=F;O++)O===0&&E===T?g[E][O]=N:g[E][O]=N.clone().lerp(C,O/F)}for(let E=0;E<T;E++)for(let N=0;N<2*(T-E)-1;N++){const C=Math.floor(N/2);N%2===0?(f(g[E][C+1]),f(g[E+1][C]),f(g[E][C])):(f(g[E][C+1]),f(g[E+1][C+1]),f(g[E+1][C]))}}function c(M){const x=new D;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(M),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function d(){const M=new D;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const S=m(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;a.push(S,1-w)}_(),h()}function h(){for(let M=0;M<a.length;M+=6){const x=a[M+0],S=a[M+2],w=a[M+4],T=Math.max(x,S,w),g=Math.min(x,S,w);T>.9&&g<.1&&(x<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function u(M,x){const S=M*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function _(){const M=new D,x=new D,S=new D,w=new D,T=new ye,g=new ye,E=new ye;for(let N=0,C=0;N<r.length;N+=9,C+=6){M.set(r[N+0],r[N+1],r[N+2]),x.set(r[N+3],r[N+4],r[N+5]),S.set(r[N+6],r[N+7],r[N+8]),T.set(a[C+0],a[C+1]),g.set(a[C+2],a[C+3]),E.set(a[C+4],a[C+5]),w.copy(M).add(x).add(S).divideScalar(3);const F=m(w);b(T,C+0,M,F),b(g,C+2,x,F),b(E,C+4,S,F)}}function b(M,x,S,w){w<0&&M.x===1&&(a[x]=M.x-1),S.x===0&&S.z===0&&(a[x]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.vertices,e.indices,e.radius,e.detail)}}class Zs extends $i{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zs(e.radius,e.detail)}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const d=n[s],f=n[s+1]-d,u=(a-d)/f;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ye:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,s=[],r=[],a=[],o=new D,l=new it;for(let u=0;u<=e;u++){const _=u/e;s[u]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ge(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,_))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Ge(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],u*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Yl extends Dn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ye){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*d-u*h+this.aX,c=f*h+u*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ah extends Yl{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Va(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,h){let f=(a-r)/c-(o-r)/(c+d)+(o-a)/d,u=(o-a)/d-(l-a)/(d+h)+(l-o)/h;f*=d,u*=d,s(a,o,f,u)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Do=new D,Io=new D,Rr=new Va,Cr=new Va,Pr=new Va;class Ws extends Dn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(Io.subVectors(s[0],s[1]).add(s[0]),c=Io);const h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Do.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Do),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),u),b=Math.pow(h.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(d),u);b<1e-4&&(b=1),_<1e-4&&(_=b),m<1e-4&&(m=b),Rr.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,_,b,m),Cr.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,_,b,m),Pr.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,_,b,m)}else this.curveType==="catmullrom"&&(Rr.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),Cr.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),Pr.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return n.set(Rr.calc(l),Cr.calc(l),Pr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uo(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function wh(i,e){const t=1-i;return t*t*e}function Rh(i,e){return 2*(1-i)*i*e}function Ch(i,e){return i*i*e}function Hi(i,e,t,n){return wh(i,e)+Rh(i,t)+Ch(i,n)}function Ph(i,e){const t=1-i;return t*t*t*e}function Lh(i,e){const t=1-i;return 3*t*t*i*e}function Nh(i,e){return 3*(1-i)*i*i*e}function Dh(i,e){return i*i*i*e}function Gi(i,e,t,n,s){return Ph(i,e)+Lh(i,t)+Nh(i,n)+Dh(i,s)}class Ih extends Dn{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gi(e,s.x,r.x,a.x,o.x),Gi(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uh extends Dn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gi(e,s.x,r.x,a.x,o.x),Gi(e,s.y,r.y,a.y,o.y),Gi(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fh extends Dn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oh extends Dn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bh extends Dn{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Hi(e,s.x,r.x,a.x),Hi(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kl extends Dn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Hi(e,s.x,r.x,a.x),Hi(e,s.y,r.y,a.y),Hi(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zh extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Uo(o,l.x,c.x,d.x,h.x),Uo(o,l.y,c.y,d.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ye().fromArray(s))}return this}}var Hh=Object.freeze({__proto__:null,ArcCurve:Ah,CatmullRomCurve3:Ws,CubicBezierCurve:Ih,CubicBezierCurve3:Uh,EllipseCurve:Yl,LineCurve:Fh,LineCurve3:Oh,QuadraticBezierCurve:Bh,QuadraticBezierCurve3:Kl,SplineCurve:zh});class ji extends $i{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ji(e.radius,e.detail)}}class Wa extends mt{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ge(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],d=1/t,h=new D,f=new ye,u=new D,_=new D,b=new D;let m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,u.x=p*1,u.y=-m,u.z=p*0,b.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:b.normalize(),l.push(b.x,b.y,b.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,u.x=p*1,u.y=-m,u.z=p*0,_.copy(u),u.x+=b.x,u.y+=b.y,u.z+=b.z,u.normalize(),l.push(u.x,u.y,u.z),b.copy(_)}for(let M=0;M<=t;M++){const x=n+M*d*s,S=Math.sin(x),w=Math.cos(x);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*S,h.y=e[T].y,h.z=e[T].x*w,a.push(h.x,h.y,h.z),f.x=M/t,f.y=T/(e.length-1),o.push(f.x,f.y);const g=l[3*T+0]*S,E=l[3*T+1],N=l[3*T+0]*w;c.push(g,E,N)}}for(let M=0;M<t;M++)for(let x=0;x<e.length-1;x++){const S=x+M*e.length,w=S,T=S+e.length,g=S+e.length+1,E=S+1;r.push(w,T,E),r.push(g,E,T)}this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.points,e.segments,e.phiStart,e.phiLength)}}class Xa extends $i{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xa(e.radius,e.detail)}}class Ti extends mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=e/o,f=t/l,u=[],_=[],b=[],m=[];for(let p=0;p<d;p++){const M=p*f-a;for(let x=0;x<c;x++){const S=x*h-r;_.push(S,-M,0),b.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const x=M+c*p,S=M+c*(p+1),w=M+1+c*(p+1),T=M+1+c*p;u.push(x,S,T),u.push(S,w,T)}this.setIndex(u),this.setAttribute("position",new ke(_,3)),this.setAttribute("normal",new ke(b,3)),this.setAttribute("uv",new ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xs extends mt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let h=e;const f=(t-e)/s,u=new D,_=new ye;for(let b=0;b<=s;b++){for(let m=0;m<=n;m++){const p=r+m/n*a;u.x=h*Math.cos(p),u.y=h*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),_.x=(u.x/t+1)/2,_.y=(u.y/t+1)/2,d.push(_.x,_.y)}h+=f}for(let b=0;b<s;b++){const m=b*(n+1);for(let p=0;p<n;p++){const M=p+m,x=M,S=M+n+1,w=M+n+2,T=M+1;o.push(x,S,T),o.push(S,w,T)}}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ei extends mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new D,f=new D,u=[],_=[],b=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n,S=a+x*o,w=e*Math.cos(S),T=Math.sqrt(e*e-w*w);let g=0;p===0&&a===0?g=.5/t:p===n&&l===Math.PI&&(g=-.5/t);for(let E=0;E<=t;E++){const N=E/t,C=s+N*r;h.x=-T*Math.cos(C),h.y=w,h.z=T*Math.sin(C),_.push(h.x,h.y,h.z),f.copy(h).normalize(),b.push(f.x,f.y,f.z),m.push(N+g,1-x),M.push(c++)}d.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const x=d[p][M+1],S=d[p][M],w=d[p+1][M],T=d[p+1][M+1];(p!==0||a>0)&&u.push(x,S,T),(p!==n-1||l<Math.PI)&&u.push(S,w,T)}this.setIndex(u),this.setAttribute("position",new ke(_,3)),this.setAttribute("normal",new ke(b,3)),this.setAttribute("uv",new ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $s extends mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],d=[],h=[],f=new D,u=new D,_=new D;for(let b=0;b<=n;b++){const m=a+b/n*o;for(let p=0;p<=s;p++){const M=p/s*r;u.x=(e+t*Math.cos(m))*Math.cos(M),u.y=(e+t*Math.cos(m))*Math.sin(M),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),_.subVectors(u,f).normalize(),d.push(_.x,_.y,_.z),h.push(p/s),h.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=s;m++){const p=(s+1)*b+m-1,M=(s+1)*(b-1)+m-1,x=(s+1)*(b-1)+m,S=(s+1)*b+m;l.push(p,M,S),l.push(M,x,S)}this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Yi extends mt{constructor(e=new Kl(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new ye;let d=new D;const h=[],f=[],u=[],_=[];b(),this.setIndex(_),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(u,2));function b(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),M(),p()}function m(x){d=e.getPointAt(x/t,d);const S=a.normals[x],w=a.binormals[x];for(let T=0;T<=s;T++){const g=T/s*Math.PI*2,E=Math.sin(g),N=-Math.cos(g);l.x=N*S.x+E*w.x,l.y=N*S.y+E*w.y,l.z=N*S.z+E*w.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let S=1;S<=s;S++){const w=(s+1)*(x-1)+(S-1),T=(s+1)*x+(S-1),g=(s+1)*x+S,E=(s+1)*(x-1)+S;_.push(w,T,E),_.push(T,g,E)}}function M(){for(let x=0;x<=t;x++)for(let S=0;S<=s;S++)c.x=x/t,c.y=S/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Yi(new Hh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ai(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Fo(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Fo(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Ai(i[t]);for(const s in n)e[s]=n[s]}return e}function Fo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const kh={clone:Ai,merge:Ft};var Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qt extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=Gh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new it().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Xh extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wi extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qh extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yh extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zl extends Tt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Kh extends Zl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Lr=new it,Oo=new D,Bo=new D;class Jh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=Xt,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Oo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oo),Bo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Lr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Lr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Xi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Lr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ys=new D,Es=new Ri,hn=new D;class $l extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ys,Es,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ys,Es,hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ys,Es,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ys,Es,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new D,zo=new ye,Ho=new ye;class sn extends $l{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,zo,Ho),t.subVectors(Ho,zo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class jl extends $l{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zh extends Jh{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $h extends Zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Zh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const mi=-90,gi=1;class Aa extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(mi,gi,e,t);s.layers=this.layers,this.add(s);const r=new sn(mi,gi,e,t);r.layers=this.layers,this.add(r);const a=new sn(mi,gi,e,t);a.layers=this.layers,this.add(a);const o=new sn(mi,gi,e,t);o.layers=this.layers,this.add(o);const l=new sn(mi,gi,e,t);l.layers=this.layers,this.add(l);const c=new sn(mi,gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,f,u),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class jh extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Go(i,e,t,n){const s=Qh(n);switch(t){case Cl:return i*e;case Ll:return i*e/s.components*s.byteLength;case Oa:return i*e/s.components*s.byteLength;case ni:return i*e*2/s.components*s.byteLength;case Ba:return i*e*2/s.components*s.byteLength;case Pl:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case za:return i*e*4/s.components*s.byteLength;case Ps:case Ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ns:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qr:case Kr:return Math.max(i,16)*Math.max(e,8)/4;case Xr:case Yr:return Math.max(i,8)*Math.max(e,8)/2;case Jr:case Zr:case jr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $r:case Bs:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ma:case ga:case _a:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xa:case va:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zs:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qh(i){switch(i){case Xt:case Tl:return{byteLength:1,components:1};case Wi:case Al:case vn:return{byteLength:2,components:1};case Ua:case Fa:return{byteLength:2,components:4};case xn:case Ia:case pn:return{byteLength:4,components:1};case wl:case Rl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ql(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function eu(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((u,_)=>u.start-_.start);let f=0;for(let u=1;u<h.length;u++){const _=h[f],b=h[u];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++f,h[f]=b)}h.length=f+1;for(let u=0,_=h.length;u<_;u++){const b=h[u];i.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var tu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Su=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Eu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ku=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$u=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ju=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ed=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,td=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pd=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ud=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ef=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Af=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Df=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:tu,alphahash_pars_fragment:nu,alphamap_fragment:iu,alphamap_pars_fragment:su,alphatest_fragment:ru,alphatest_pars_fragment:au,aomap_fragment:ou,aomap_pars_fragment:lu,batching_pars_vertex:cu,batching_vertex:hu,begin_vertex:uu,beginnormal_vertex:du,bsdfs:fu,iridescence_fragment:pu,bumpmap_pars_fragment:mu,clipping_planes_fragment:gu,clipping_planes_pars_fragment:_u,clipping_planes_pars_vertex:xu,clipping_planes_vertex:vu,color_fragment:Mu,color_pars_fragment:Su,color_pars_vertex:yu,color_vertex:Eu,common:bu,defaultnormal_vertex:Tu,displacementmap_pars_vertex:Au,displacementmap_vertex:wu,emissivemap_fragment:Ru,emissivemap_pars_fragment:Cu,colorspace_fragment:Pu,colorspace_pars_fragment:Lu,envmap_fragment:Nu,envmap_common_pars_fragment:Du,envmap_pars_fragment:Iu,envmap_pars_vertex:Uu,envmap_physical_pars_fragment:qu,envmap_vertex:Fu,fog_vertex:Ou,fog_pars_vertex:Bu,fog_fragment:zu,fog_pars_fragment:Hu,gradientmap_pars_fragment:Gu,lightmap_pars_fragment:ku,lights_lambert_fragment:Vu,lights_lambert_pars_fragment:Wu,lights_pars_begin:Xu,lights_toon_fragment:Yu,lights_toon_pars_fragment:Ku,lights_phong_fragment:Ju,lights_phong_pars_fragment:Zu,lights_physical_fragment:$u,lights_physical_pars_fragment:ju,lights_fragment_begin:Qu,lights_fragment_maps:ed,lights_fragment_end:td,lightprobes_pars_fragment:nd,logdepthbuf_fragment:id,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:ad,map_fragment:od,map_pars_fragment:ld,map_particle_fragment:cd,map_particle_pars_fragment:hd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:dd,morphinstance_vertex:fd,morphcolor_vertex:pd,morphnormal_vertex:md,morphtarget_pars_vertex:gd,morphtarget_vertex:_d,normal_fragment_begin:xd,normal_fragment_maps:vd,normal_pars_fragment:Md,normal_pars_vertex:Sd,normal_vertex:yd,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:bd,clearcoat_normal_fragment_maps:Td,clearcoat_pars_fragment:Ad,iridescence_pars_fragment:wd,opaque_fragment:Rd,packing:Cd,premultiplied_alpha_fragment:Pd,project_vertex:Ld,dithering_fragment:Nd,dithering_pars_fragment:Dd,roughnessmap_fragment:Id,roughnessmap_pars_fragment:Ud,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Od,shadowmap_vertex:Bd,shadowmask_pars_fragment:zd,skinbase_vertex:Hd,skinning_pars_vertex:Gd,skinning_vertex:kd,skinnormal_vertex:Vd,specularmap_fragment:Wd,specularmap_pars_fragment:Xd,tonemapping_fragment:qd,tonemapping_pars_fragment:Yd,transmission_fragment:Kd,transmission_pars_fragment:Jd,uv_pars_fragment:Zd,uv_pars_vertex:$d,uv_vertex:jd,worldpos_vertex:Qd,background_vert:ef,background_frag:tf,backgroundCube_vert:nf,backgroundCube_frag:sf,cube_vert:rf,cube_frag:af,depth_vert:of,depth_frag:lf,distance_vert:cf,distance_frag:hf,equirect_vert:uf,equirect_frag:df,linedashed_vert:ff,linedashed_frag:pf,meshbasic_vert:mf,meshbasic_frag:gf,meshlambert_vert:_f,meshlambert_frag:xf,meshmatcap_vert:vf,meshmatcap_frag:Mf,meshnormal_vert:Sf,meshnormal_frag:yf,meshphong_vert:Ef,meshphong_frag:bf,meshphysical_vert:Tf,meshphysical_frag:Af,meshtoon_vert:wf,meshtoon_frag:Rf,points_vert:Cf,points_frag:Pf,shadow_vert:Lf,shadow_frag:Nf,sprite_vert:Df,sprite_frag:If},pe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},fn={basic:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ft([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ft([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ft([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ft([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ft([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ft([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ft([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ft([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Ft([pe.common,pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Ft([pe.lights,pe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};fn.physical={uniforms:Ft([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const bs={r:0,b:0,g:0},Uf=new it,ec=new De;ec.set(-1,0,0,0,1,0,0,0,1);function Ff(i,e,t,n,s,r){const a=new He(0);let o=s===!0?0:1,l,c,d=null,h=0,f=null;function u(M){let x=M.isScene===!0?M.background:null;if(x&&x.isTexture){const S=M.backgroundBlurriness>0;x=e.get(x,S)}return x}function _(M){let x=!1;const S=u(M);S===null?m(a,o):S&&S.isColor&&(m(S,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(M,x){const S=u(x);S&&S.isCubeTexture?(c===void 0&&(c=new ct(new qn(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:Ai(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Uf.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ec),c.material.toneMapped=qe.getTransfer(S.colorSpace)!==Qe,(d!==S||h!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ct(new Ti(2,2),new qt({name:"BackgroundMaterial",uniforms:Ai(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=qe.getTransfer(S.colorSpace)!==Qe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,h=S.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,x){M.getRGB(bs,Jl(i)),t.buffers.color.setClear(bs.r,bs.g,bs.b,x,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),o=x,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:_,addToRenderList:b,dispose:p}}function Of(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(F,O,W,P,V){let Y=!1;const k=h(F,P,W,O);r!==k&&(r=k,c(r.object)),Y=u(F,P,W,V),Y&&_(F,P,W,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(F,O,W,P),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function d(F){return i.deleteVertexArray(F)}function h(F,O,W,P){const V=P.wireframe===!0;let Y=n[O.id];Y===void 0&&(Y={},n[O.id]=Y);const k=F.isInstancedMesh===!0?F.id:0;let ne=Y[k];ne===void 0&&(ne={},Y[k]=ne);let q=ne[W.id];q===void 0&&(q={},ne[W.id]=q);let Q=q[V];return Q===void 0&&(Q=f(l()),q[V]=Q),Q}function f(F){const O=[],W=[],P=[];for(let V=0;V<t;V++)O[V]=0,W[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:P,object:F,attributes:{},index:null}}function u(F,O,W,P){const V=r.attributes,Y=O.attributes;let k=0;const ne=W.getAttributes();for(const q in ne)if(ne[q].location>=0){const ee=V[q];let Ee=Y[q];if(Ee===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(Ee=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(Ee=F.instanceColor)),ee===void 0||ee.attribute!==Ee||Ee&&ee.data!==Ee.data)return!0;k++}return r.attributesNum!==k||r.index!==P}function _(F,O,W,P){const V={},Y=O.attributes;let k=0;const ne=W.getAttributes();for(const q in ne)if(ne[q].location>=0){let ee=Y[q];ee===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor));const Ee={};Ee.attribute=ee,ee&&ee.data&&(Ee.data=ee.data),V[q]=Ee,k++}r.attributes=V,r.attributesNum=k,r.index=P}function b(){const F=r.newAttributes;for(let O=0,W=F.length;O<W;O++)F[O]=0}function m(F){p(F,0)}function p(F,O){const W=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;W[F]=1,P[F]===0&&(i.enableVertexAttribArray(F),P[F]=1),V[F]!==O&&(i.vertexAttribDivisor(F,O),V[F]=O)}function M(){const F=r.newAttributes,O=r.enabledAttributes;for(let W=0,P=O.length;W<P;W++)O[W]!==F[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function x(F,O,W,P,V,Y,k){k===!0?i.vertexAttribIPointer(F,O,W,V,Y):i.vertexAttribPointer(F,O,W,P,V,Y)}function S(F,O,W,P){b();const V=P.attributes,Y=W.getAttributes(),k=O.defaultAttributeValues;for(const ne in Y){const q=Y[ne];if(q.location>=0){let Q=V[ne];if(Q===void 0&&(ne==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),ne==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){const ee=Q.normalized,Ee=Q.itemSize,Ie=e.get(Q);if(Ie===void 0)continue;const Z=Ie.buffer,me=Ie.type,ve=Ie.bytesPerElement,we=me===i.INT||me===i.UNSIGNED_INT||Q.gpuType===Ia;if(Q.isInterleavedBufferAttribute){const ge=Q.data,Fe=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,ut=Q.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Ce=0;Ce<q.locationSize;Ce++)p(q.location+Ce,ge.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ce=0;Ce<q.locationSize;Ce++)m(q.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ce=0;Ce<q.locationSize;Ce++)x(q.location+Ce,Ee/q.locationSize,me,ee,Fe*ve,(ut+Ee/q.locationSize*Ce)*ve,we)}else{if(Q.isInstancedBufferAttribute){for(let ge=0;ge<q.locationSize;ge++)p(q.location+ge,Q.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ge=0;ge<q.locationSize;ge++)m(q.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ge=0;ge<q.locationSize;ge++)x(q.location+ge,Ee/q.locationSize,me,ee,Ee*ve,Ee/q.locationSize*ge*ve,we)}}else if(k!==void 0){const ee=k[ne];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(q.location,ee);break;case 3:i.vertexAttrib3fv(q.location,ee);break;case 4:i.vertexAttrib4fv(q.location,ee);break;default:i.vertexAttrib1fv(q.location,ee)}}}}M()}function w(){N();for(const F in n){const O=n[F];for(const W in O){const P=O[W];for(const V in P){const Y=P[V];for(const k in Y)d(Y[k].object),delete Y[k];delete P[V]}}delete n[F]}}function T(F){if(n[F.id]===void 0)return;const O=n[F.id];for(const W in O){const P=O[W];for(const V in P){const Y=P[V];for(const k in Y)d(Y[k].object),delete Y[k];delete P[V]}}delete n[F.id]}function g(F){for(const O in n){const W=n[O];for(const P in W){const V=W[P];if(V[F.id]===void 0)continue;const Y=V[F.id];for(const k in Y)d(Y[k].object),delete Y[k];delete V[F.id]}}}function E(F){for(const O in n){const W=n[O],P=F.isInstancedMesh===!0?F.id:0,V=W[P];if(V!==void 0){for(const Y in V){const k=V[Y];for(const ne in k)d(k[ne].object),delete k[ne];delete V[Y]}delete W[P],Object.keys(W).length===0&&delete n[O]}}}function N(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:g,initAttributes:b,enableAttribute:m,disableUnusedAttributes:M}}function Bf(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let f=0;for(let u=0;u<d;u++)f+=c[u];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==on&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const E=g===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Xt&&g!==pn&&!E&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Le("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:S,maxSamples:w,samples:T}}function Hf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Gn,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const u=h.length!==0||f||n!==0||s;return s=f,n=h.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,u){const _=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?d(null):c();else{const M=r?0:n,x=M*4;let S=p.clippingState||null;l.value=S,S=d(_,f,x,u);for(let w=0;w!==x;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,u,_){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=l.value,_!==!0||m===null){const p=u+b*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=u;x!==b;++x,S+=4)a.copy(h[x]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}class qa extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qn(5,5,5),r=new qt({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Mi});r.uniforms.tEquirect.value=t;const a=new ct(s,r),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Ot),new Aa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const ko=256,Gf=3,kf=20,tc=256,nc=16,Vf=3,Wf=new D,Xf=new He;class qs{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Aa(1,10,null),this._boxMesh=new ct(new qn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Wf}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,_=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(Xf));const m=new Aa(n,s,d);return m.position.copy(o),m.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=_,e.background=b,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ko,th(e))}_fromTexture(e,t){e.mapping===yi||e.mapping===Vi?this._setSize(e.image.length===0?ko:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Vo(e,!1,!1),n=Math.log2(e)-Gf;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vo(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===yi||e.mapping===Vi?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=qf(),this._integrationMaterial=Yf());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/nc);for(let a=0;a<=n;a++){const o=qs.lodToRoughness(a,n);if(a>n-Vf)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(tc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Kf());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Vo(i,e,t){return new qa(i,{minFilter:Cn,generateMipmaps:e,type:vn,colorSpace:Hs,depthBuffer:t})}function Qi(i,e,t){return new qt({name:i,uniforms:e,vertexShader:ze.cube_vert,fragmentShader:t,side:kt,blending:Mi,depthTest:!1,depthWrite:!1})}function qf(){return Qi("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Yf(){return Qi("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:nc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Kf(){return Qi("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${kf}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Wo(){return Qi("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Xo(){return Qi("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jf(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===nr||u===ir)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const b=new qa(_.height);return b.fromEquirectangularTexture(i,f),e.set(f,b),f.addEventListener("dispose",c),o(b.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,_=u===nr||u===ir,b=u===yi||u===Vi;if(_||b){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new qs(i)),m=_?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const M=f.image;return _&&M&&M.height>0||b&&M&&l(M)?(n===null&&(n=new qs(i)),m=_?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function o(f,u){return u===nr?f.mapping=yi:u===ir&&(f.mapping=Vi),f}function l(f){let u=0;const _=6;for(let b=0;b<_;b++)f[b]!==void 0&&u++;return u===_}function c(f){const u=f.target;u.removeEventListener("dispose",c);const _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function d(f){const u=f.target;u.removeEventListener("dispose",d);const _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Zf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Is("WebGLRenderer: "+n+" extension not supported."),s}}}function $f(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);const b=r.get(_);b&&(e.remove(b),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function d(_){const b=_.attributes;for(const m in b)e.update(b[m],i.ARRAY_BUFFER)}function h(_){const b=_.index,m=_.attributes.position;let p=0;if(m===void 0)return;const M=b!==null?b.array.length:m.array.length/3-1,x=m.count>=65535?Hl:zl,S=new x(Math.ceil(M/3)*6,1),w=S.array;if(b!==null){const g=b.array;p=b.version;for(let E=0,N=0;E<M;E+=3){const C=g[E+0],F=g[E+1],O=g[E+2];w[N++]=C,w[N++]=F,w[N++]=F,w[N++]=O,w[N++]=O,w[N++]=C}}else{p=m.version;for(let g=0,E=0;g<M;g+=3){const N=g+0,C=g+1,F=g+2;w[E++]=N,w[E++]=C,w[E++]=C,w[E++]=F,w[E++]=F,w[E++]=N}}S.version=p;const T=r.get(_);T&&e.remove(T),r.set(_,S)}function f(_){const b=r.get(_);if(b){const m=_.index;m!==null&&b.version<m.version&&h(_)}else h(_);return r.get(_)}function u(){for(const _ in s){const b=s[_].deref();b!==void 0&&l(b)}}return{get:c,update:d,getWireframeAttribute:f,dispose:u}}function jf(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function c(h,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,h*a,u),t.update(f,n,u))}function d(h,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,u);let b=0;for(let m=0;m<u;m++)b+=f[m];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Qf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ep(i,e,t){const n=new WeakMap,s=new lt;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let N=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();const u=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;u===!0&&(x=1),_===!0&&(x=2),b===!0&&(x=3);let S=o.attributes.position.count*x,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*w*4*h),g=new Fl(T,S,w,h);g.type=pn,g.needsUpdate=!0;const E=x*4;for(let C=0;C<h;C++){const F=m[C],O=p[C],W=M[C],P=S*w*4*C;for(let V=0;V<F.count;V++){const Y=V*E;u===!0&&(s.fromBufferAttribute(F,V),T[P+Y+0]=s.x,T[P+Y+1]=s.y,T[P+Y+2]=s.z,T[P+Y+3]=0),_===!0&&(s.fromBufferAttribute(O,V),T[P+Y+4]=s.x,T[P+Y+5]=s.y,T[P+Y+6]=s.z,T[P+Y+7]=0),b===!0&&(s.fromBufferAttribute(W,V),T[P+Y+8]=s.x,T[P+Y+9]=s.y,T[P+Y+10]=s.z,T[P+Y+11]=W.itemSize===4?s.w:1)}}f={count:h,texture:g,size:new ye(S,w)},n.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let b=0;b<c.length;b++)u+=c[b];const _=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function tp(i,e,t,n,s){let r=new WeakMap;function a(c){const d=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return f}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const np={[xl]:"LINEAR_TONE_MAPPING",[vl]:"REINHARD_TONE_MAPPING",[Ml]:"CINEON_TONE_MAPPING",[Da]:"ACES_FILMIC_TONE_MAPPING",[yl]:"AGX_TONE_MAPPING",[El]:"NEUTRAL_TONE_MAPPING",[Sl]:"CUSTOM_TONE_MAPPING"};function ip(i,e,t,n,s,r){const a=new gn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const d=new mt;d.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ke([0,2,0,0,2,0],2));const h=new Xh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ct(d,h),u=new jl(-1,1,1,-1,0,1);let _=null,b=null,m=!1,p,M=null,x=[],S=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let g=0;g<x.length;g++){const E=x[g];E.setSize&&E.setSize(w,T)}},this.setEffects=function(w){x=w,S=x.length>0&&x[0].isRenderPass===!0;const T=a.width,g=a.height;x.length>0&&o===null&&(o=new gn(T,g,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new gn(T,g,{type:vn,depthBuffer:!1,stencilBuffer:!1}));const E=s===!0&&x.some(N=>N.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new bi(T,g),r===!0&&(c.format=Vn,c.type=Ei)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let N=0;N<x.length;N++){const C=x[N];C.setSize&&C.setSize(T,g),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,T){if(m||w.toneMapping===Pn&&x.length===0)return!1;if(M=T,T!==null){const g=T.width,E=T.height;(a.width!==g||a.height!==E)&&this.setSize(g,E)}return S===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=Pn,!0},this.hasRenderPass=function(){return S},this.end=function(w,T){w.toneMapping=p,m=!0;let g=a,E=o;for(let N=0;N<x.length;N++){const C=x[N];C.enabled!==!1&&(C.render(w,E,g,T),C.needsSwap!==!1&&(g=E,E=E===o?l:o))}if(_!==w.outputColorSpace||b!==w.toneMapping){_=w.outputColorSpace,b=w.toneMapping,h.defines={},qe.getTransfer(_)===Qe&&(h.defines.SRGB_TRANSFER="");const N=np[b];N&&(h.defines[N]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(M),w.render(f,u),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),h.dispose()}}const ic=new Bt,sc=new bi(1,1),rc=new Xl(1),ac=new Fl,oc=new ch,lc=new Wl,qo=[],Yo=[],Ko=new Float32Array(16),Jo=new Float32Array(9),Zo=new Float32Array(4);function Pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=qo[s];if(r===void 0&&(r=new Float32Array(s),qo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function js(i,e){let t=Yo[e];t===void 0&&(t=new Int32Array(e),Yo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function lp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Zo.set(n),i.uniformMatrix2fv(this.addr,!1,Zo),vt(t,n)}}function cp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Jo.set(n),i.uniformMatrix3fv(this.addr,!1,Jo),vt(t,n)}}function hp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Ko.set(n),i.uniformMatrix4fv(this.addr,!1,Ko),vt(t,n)}}function up(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function mp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function _p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function Qs(i){return i.version===0&&(i.compareFunction=Il,i.needsUpdate=!0),i}function vp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Qs(sc):r=ic,t.setTexture2D(e||r,s)}function Mp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||oc,s)}function Sp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Qs(rc):r=lc,t.setTextureCube(e||r,s)}function yp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ac,s)}function Ep(i){switch(i){case 5126:return sp;case 35664:return rp;case 35665:return ap;case 35666:return op;case 35674:return lp;case 35675:return cp;case 35676:return hp;case 5124:case 35670:return up;case 35667:case 35671:return dp;case 35668:case 35672:return fp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return gp;case 36295:return _p;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return vp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return yp}}function bp(i,e){i.uniform1fv(this.addr,e)}function Tp(i,e){const t=Pi(e,this.size,2);i.uniform2fv(this.addr,t)}function Ap(i,e){const t=Pi(e,this.size,3);i.uniform3fv(this.addr,t)}function wp(i,e){const t=Pi(e,this.size,4);i.uniform4fv(this.addr,t)}function Rp(i,e){const t=Pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cp(i,e){const t=Pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pp(i,e){const t=Pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lp(i,e){i.uniform1iv(this.addr,e)}function Np(i,e){i.uniform2iv(this.addr,e)}function Dp(i,e){i.uniform3iv(this.addr,e)}function Ip(i,e){i.uniform4iv(this.addr,e)}function Up(i,e){i.uniform1uiv(this.addr,e)}function Fp(i,e){i.uniform2uiv(this.addr,e)}function Op(i,e){i.uniform3uiv(this.addr,e)}function Bp(i,e){i.uniform4uiv(this.addr,e)}function zp(i,e,t){const n=this.cache,s=e.length,r=js(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Qs(sc):a=ic;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Hp(i,e,t){const n=this.cache,s=e.length,r=js(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||oc,r[a])}function Gp(i,e,t){const n=this.cache,s=e.length,r=js(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Qs(rc):a=lc;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function kp(i,e,t){const n=this.cache,s=e.length,r=js(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ac,r[a])}function Vp(i){switch(i){case 5126:return bp;case 35664:return Tp;case 35665:return Ap;case 35666:return wp;case 35674:return Rp;case 35675:return Cp;case 35676:return Pp;case 5124:case 35670:return Lp;case 35667:case 35671:return Np;case 35668:case 35672:return Dp;case 35669:case 35673:return Ip;case 5125:return Up;case 36294:return Fp;case 36295:return Op;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return kp}}class Wp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ep(t.type)}}class Xp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vp(t.type)}}class qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Nr=/(\w+)(\])?(\[|\.)?/g;function $o(i,e){i.seq.push(e),i.map[e.id]=e}function Yp(i,e,t){const n=i.name,s=n.length;for(Nr.lastIndex=0;;){const r=Nr.exec(n),a=Nr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$o(t,c===void 0?new Wp(o,i,e):new Xp(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new qp(o),$o(t,h)),t=h}}}class Us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Yp(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function jo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Kp=37297;let Jp=0;function Zp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Qo=new De;function $p(i){qe._getMatrix(Qo,qe.workingColorSpace,i);const e=`mat3( ${Qo.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case Gs:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function el(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Zp(i.getShaderSource(e),o)}else return r}function jp(i,e){const t=$p(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Qp={[xl]:"Linear",[vl]:"Reinhard",[Ml]:"Cineon",[Da]:"ACESFilmic",[yl]:"AgX",[El]:"Neutral",[Sl]:"Custom"};function em(i,e){const t=Qp[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ts=new D;function tm(){qe.getLuminanceCoefficients(Ts);const i=Ts.x.toFixed(4),e=Ts.y.toFixed(4),t=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function im(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Bi(i){return i!==""}function tl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function nl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(i){return i.replace(rm,am)}function am(i,e){const t=ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return wa(t)}const om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function il(i){return i.replace(om,lm)}function lm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cm={[Cs]:"SHADOWMAP_TYPE_PCF",[Oi]:"SHADOWMAP_TYPE_VSM"};function hm(i){return cm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const um={[Vi]:"ENVMAP_MODE_REFRACTION"};function dm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":um[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fm={[_l]:"ENVMAP_BLENDING_MULTIPLY",[Bc]:"ENVMAP_BLENDING_MIX",[zc]:"ENVMAP_BLENDING_ADD"};function pm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fm[i.combine]||"ENVMAP_BLENDING_NONE"}function mm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=hm(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=dm(t),h=pm(t),f=nm(t),u=im(r),_=s.createProgram();let b,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Bi).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Bi).join(`
`),m.length>0&&(m+=`
`)):(b=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),m=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Pn?em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,jp("linearToOutputTexel",t.outputColorSpace),tm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bi).join(`
`)),a=wa(a),a=tl(a,t),a=nl(a,t),o=wa(o),o=tl(o,t),o=nl(o,t),a=il(a),o=il(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,b=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",t.glslVersion===fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=p+b+a,x=p+m+o,S=jo(s,s.VERTEX_SHADER,M),w=jo(s,s.FRAGMENT_SHADER,x);s.attachShader(_,S),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(S)||"",W=s.getShaderInfoLog(w)||"",P=F.trim(),V=O.trim(),Y=W.trim();let k=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,w);else{const q=el(s,S,"vertex"),Q=el(s,w,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+q+`
`+Q)}else P!==""?Le("WebGLProgram: Program Info Log:",P):(V===""||Y==="")&&(ne=!1);ne&&(C.diagnostics={runnable:k,programLog:P,vertexShader:{log:V,prefix:b},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(S),s.deleteShader(w),g=new Us(s,_),E=sm(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,Kp)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let gm=0;class _m{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xm(e),t.set(e,n)),n}}class xm{constructor(e){this.id=gm++,this.code=e,this.usedTimes=0}}function vm(i){return i===ni||i===Bs||i===zs}function Mm(i,e,t,n,s,r){const a=new Ol,o=new _m,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,E,N,C,F,O){const W=C.fog,P=F.geometry,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,k=e.get(g.envMap||V,Y),ne=f[g.type];let q=n.precision;g.precision!==null&&(q=n.getMaxPrecision(g.precision),q!==g.precision&&Le("WebGLProgram.getParameters:",g.precision,"not supported, using",q,"instead."));const Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ee=Q!==void 0?Q.length:0;let Ee=0;P.morphAttributes.position!==void 0&&(Ee=1),P.morphAttributes.normal!==void 0&&(Ee=2),P.morphAttributes.color!==void 0&&(Ee=3);let Ie,Z,me,ve;if(ne){const fe=fn[ne];Ie=fe.vertexShader,Z=fe.fragmentShader}else{Ie=g.vertexShader,Z=g.fragmentShader;const fe=o.getVertexShaderStage(g),je=o.getFragmentShaderStage(g);o.update(g,fe,je),me=fe.id,ve=je.id}const we=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Fe=F.isInstancedMesh===!0,ut=F.isBatchedMesh===!0,Ce=!!g.map,$e=!!g.matcap,et=!!k,Ve=et&&k.isPMREMTexture===!0,At=!!g.aoMap,gt=!!g.lightMap,zt=!!g.bumpMap&&g.wireframe===!1,at=!!g.normalMap,cn=!!g.displacementMap,Mt=!!g.emissiveMap,Yt=!!g.metalnessMap,Kt=!!g.roughnessMap,Jt=g.anisotropy>0,U=g.clearcoat>0,Zt=g.diffuseRoughness>0,st=g.dispersion>0,rt=g.retroreflectivity>0,de=g.iridescence>0,_t=g.sheen>0,Re=g.transmission>0,Ne=Jt&&!!g.anisotropyMap,A=U&&!!g.clearcoatMap,v=U&&!!g.clearcoatNormalMap,z=U&&!!g.clearcoatRoughnessMap,te=Zt&&!!g.diffuseRoughnessMap,j=de&&!!g.iridescenceMap,re=de&&!!g.iridescenceThicknessMap,he=_t&&!!g.sheenColorMap,K=_t&&!!g.sheenRoughnessMap,J=!!g.specularMap,oe=!!g.specularColorMap,R=!!g.specularIntensityMap,$=Re&&!!g.transmissionMap,X=Re&&!!g.thicknessMap,le=!!g.gradientMap,se=!!g.alphaMap,ae=g.alphaTest>0,Te=!!g.alphaHash,Be=!!g.extensions;let ie=Pn;g.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(ie=i.toneMapping);const Ae=Ve?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Oe={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:Ie,fragmentShader:Z,defines:g.defines,customVertexShaderID:me,customFragmentShaderID:ve,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:q,batching:ut,batchingColor:ut&&F._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&F.instanceColor!==null,instancingMorph:Fe&&F.morphTexture!==null,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ce,matcap:$e,envMap:et,envMapMode:et&&k.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Ae.length-1:null,envMapSize:Ve?Ae[0].width:null,aoMap:At,lightMap:gt,bumpMap:zt,normalMap:at,displacementMap:cn,emissiveMap:Mt,normalMapObjectSpace:at&&g.normalMapType===kc,normalMapTangentSpace:at&&g.normalMapType===Sa,packedNormalMap:at&&g.normalMapType===Sa&&vm(g.normalMap.format),metalnessMap:Yt,roughnessMap:Kt,anisotropy:Jt,anisotropyMap:Ne,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:z,diffuseRoughness:Zt,diffuseRoughnessMap:te,dispersion:st,retroreflection:rt,iridescence:de,iridescenceMap:j,iridescenceThicknessMap:re,sheen:_t,sheenColorMap:he,sheenRoughnessMap:K,specularMap:J,specularColorMap:oe,specularIntensityMap:R,transmission:Re,transmissionMap:$,thicknessMap:X,gradientMap:le,opaque:g.transparent===!1&&g.blending===zi&&g.alphaToCoverage===!1,alphaMap:se,alphaTest:ae,alphaHash:Te,combine:g.combine,mapUv:Ce&&u(g.map.channel),aoMapUv:At&&u(g.aoMap.channel),lightMapUv:gt&&u(g.lightMap.channel),bumpMapUv:zt&&u(g.bumpMap.channel),normalMapUv:at&&u(g.normalMap.channel),displacementMapUv:cn&&u(g.displacementMap.channel),emissiveMapUv:Mt&&u(g.emissiveMap.channel),metalnessMapUv:Yt&&u(g.metalnessMap.channel),roughnessMapUv:Kt&&u(g.roughnessMap.channel),anisotropyMapUv:Ne&&u(g.anisotropyMap.channel),clearcoatMapUv:A&&u(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&u(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&u(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&u(g.diffuseRoughnessMap.channel),iridescenceMapUv:j&&u(g.iridescenceMap.channel),iridescenceThicknessMapUv:re&&u(g.iridescenceThicknessMap.channel),sheenColorMapUv:he&&u(g.sheenColorMap.channel),sheenRoughnessMapUv:K&&u(g.sheenRoughnessMap.channel),specularMapUv:J&&u(g.specularMap.channel),specularColorMapUv:oe&&u(g.specularColorMap.channel),specularIntensityMapUv:R&&u(g.specularIntensityMap.channel),transmissionMapUv:$&&u(g.transmissionMap.channel),thicknessMapUv:X&&u(g.thicknessMap.channel),alphaMapUv:se&&u(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(at||Jt),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!P.attributes.uv&&(Ce||se),fog:!!W,useFog:g.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&at===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ee,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.filter(fe=>fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ce&&g.map.isVideoTexture===!0&&qe.getTransfer(g.map.colorSpace)===Qe,decodeVideoTextureEmissive:Mt&&g.emissiveMap.isVideoTexture===!0&&qe.getTransfer(g.emissiveMap.colorSpace)===Qe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===It,flipSided:g.side===kt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Be&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&g.extensions.multiDraw===!0||ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function b(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const N in g.defines)E.push(N),E.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(m(E,g),p(E,g),E.push(i.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function m(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapPMREM),g.push(E.envMapMaxLod),g.push(E.envMapSize),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.diffuseRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.numSunLights),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numSunLightShadows),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.numLightProbeGrids),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function p(g,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){const E=f[g.type];let N;if(E){const C=fn[E];N=kh.clone(C.uniforms)}else N=g.uniforms;return N}function x(g,E){let N=d.get(E);return N!==void 0?++N.usedTimes:(N=new mm(i,E,g,s),c.push(N),d.set(E,N)),N}function S(g){if(--g.usedTimes===0){const E=c.indexOf(g);c[E]=c[c.length-1],c.pop(),d.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:b,getUniforms:M,acquireProgram:x,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:T}}function Sm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ym(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function al(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,_,b,m,p){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:u,material:_,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:m,group:p},i[e]=M):(M.id=f.id,M.object=f,M.geometry=u,M.material=_,M.materialVariant=a(f),M.groupOrder=b,M.renderOrder=f.renderOrder,M.z=m,M.group=p),e++,M}function l(f,u,_,b,m,p,M){M.reversedDepth===!0&&(m=-m);const x=o(f,u,_,b,m,p);_.transmission>0?n.push(x):_.transparent===!0?s.push(x):t.push(x)}function c(f,u,_,b,m,p){const M=o(f,u,_,b,m,p);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):t.unshift(M)}function d(f,u){t.length>1&&t.sort(f||ym),n.length>1&&n.sort(u||rl),s.length>1&&s.sort(u||rl)}function h(){for(let f=e,u=i.length;f<u;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function Em(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new al,i.set(n,[a])):s>=r.length?(a=new al,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function bm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new He};break;case"SpotLight":t={position:new D,direction:new D,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Tm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Am=0;function wm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Rm(i){const e=new bm,t=Tm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new it,a=new it;function o(c){let d=0,h=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let u=0,_=0,b=0,m=0,p=0,M=0,x=0,S=0,w=0,T=0,g=0,E=0,N=0,C=0;c.sort(wm);for(let O=0,W=c.length;O<W;O++){const P=c[O],V=P.color,Y=P.intensity,k=P.distance;let ne=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ni?ne=P.shadow.map.texture:ne=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=V.r*Y,h+=V.g*Y,f+=V.b*Y;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],Y);C++}else if(P.isSunLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=ee,n.sunShadowMap[_]=ne;const Ee=Q.getViewportCount();for(let Ie=0;Ie<Ee;Ie++)n.sunShadowMatrix[b+Ie]=Q.getMatrix(Ie),n.sunShadowCascade[b+Ie]=Q._cascadeData[Ie];b+=Ee,_++}n.sun[u]=q,u++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=P.shadow.matrix,w++}n.directional[m]=q,m++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(V).multiplyScalar(Y),q.distance=k,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[M]=q;const Q=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,Q.updateMatrices(P),P.castShadow&&N++),n.spotLightMatrix[M]=Q.matrix,P.castShadow){const ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[M]=ee,n.spotShadowMap[M]=ne,g++}M++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(V).multiplyScalar(Y),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[x]=q,x++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=P.shadow.matrix,T++}n.point[p]=q,p++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(Y),q.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[S]=q,S++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const F=n.hash;(F.sunLength!==u||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==M||F.rectAreaLength!==x||F.hemiLength!==S||F.numSunShadows!==_||F.numDirectionalShadows!==w||F.numPointShadows!==T||F.numSpotShadows!==g||F.numSpotMaps!==E||F.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=m,n.spot.length=M,n.rectArea.length=x,n.point.length=p,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+E-N,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,F.sunLength=u,F.directionalLength=m,F.pointLength=p,F.spotLength=M,F.rectAreaLength=x,F.hemiLength=S,F.numSunShadows=_,F.numDirectionalShadows=w,F.numPointShadows=T,F.numSpotShadows=g,F.numSpotMaps=E,F.numLightProbes=C,n.version=Am++)}function l(c,d){let h=0,f=0,u=0,_=0,b=0,m=0;const p=d.matrixWorldInverse;for(let M=0,x=c.length;M<x;M++){const S=c[M];if(S.isSunLight){const w=n.sun[h];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),h++}else if(S.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(S.isSpotLight){const w=n.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),_++}else if(S.isRectAreaLight){const w=n.rectArea[b];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),b++}else if(S.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),u++}else if(S.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function ol(i){const e=new Rm(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){n.push(h)}function l(){e.setup(t),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Cm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ol(i),e.set(s,[o])):r>=a.length?(o=new ol(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Nm=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Dm=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ll=new it,Fi=new D,Dr=new D;function Im(i,e,t){let n=new qi;const s=new ye,r=new ye,a=new lt,o=new qh,l=new Yh,c={},d=t.maxTextureSize,h={[ti]:kt,[kt]:ti,[It]:It},f=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:Pm,fragmentShader:Lm}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const _=new mt;_.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ct(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let p=this.type;this.render=function(T,g,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===pl&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cs);const N=i.getRenderTarget(),C=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Mi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=p!==this.type;W&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=T.length;P<V;P++){const Y=T[P],k=Y.shadow;if(k===void 0){Le("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ne=k.getFrameExtents();s.multiply(ne),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ne.x),s.x=r.x*ne.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ne.y),s.y=r.y*ne.y,k.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Oi){if(Y.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new gn(s.x,s.y,{format:ni,type:vn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),k.map.texture.name=Y.name+".shadowMap",k.map.depthTexture=new bi(s.x,s.y,pn),k.map.depthTexture.name=Y.name+".shadowMapDepth",k.map.depthTexture.format=Wn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ct,k.map.depthTexture.magFilter=Ct}else Y.isPointLight?(k.map=new qa(s.x),k.map.depthTexture=new Xl(s.x,xn)):(k.map=new gn(s.x,s.y),k.map.depthTexture=new bi(s.x,s.y,xn)),k.map.depthTexture.name=Y.name+".shadowMap",k.map.depthTexture.format=Wn,this.type===Cs?(k.map.depthTexture.compareFunction=q?Dl:Nl,k.map.depthTexture.minFilter=Ot,k.map.depthTexture.magFilter=Ot):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ct,k.map.depthTexture.magFilter=Ct);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const Q=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Y.isPointLight!==!0&&k.updateMatrices(Y,E);const ee=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:E.layers;for(let Ee=0;Ee<Q;Ee++){const Ie=k.getCamera(Ee);if(Y.isPointLight){const Z=k.camera,me=k.matrix,ve=Y.distance||Z.far;ve!==Z.far&&(Z.far=ve,Z.updateProjectionMatrix()),Fi.setFromMatrixPosition(Y.matrixWorld),Z.position.copy(Fi),Dr.copy(Z.position),Dr.add(Nm[Ee]),Z.up.copy(Dm[Ee]),Z.lookAt(Dr),Z.updateMatrixWorld(),me.makeTranslation(-Fi.x,-Fi.y,-Fi.z),ll.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ll,Z.coordinateSystem,Z.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(k.map),i.clear());const Z=k.getViewport(Ee);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),O.viewport(a)}n=k.getFrustum(Ee),S(g,E,Ie,Y,ee,this.type)}k.isPointLightShadow!==!0&&this.type===Oi&&M(k,E),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(N,C,F)};function M(T,g){const E=e.update(b);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new gn(s.x,s.y,{format:ni,type:vn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,E,f,b,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,E,u,b,null)}function x(T,g,E,N){let C=null;const F=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)C=F;else if(C=E.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const O=C.uuid,W=g.uuid;let P=c[O];P===void 0&&(P={},c[O]=P);let V=P[W];V===void 0&&(V=C.clone(),P[W]=V,g.addEventListener("dispose",w)),C=V}if(C.visible=g.visible,C.wireframe=g.wireframe,N===Oi?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:h[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const O=i.properties.get(C);O.light=E}return C}function S(T,g,E,N,C,F){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===Oi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const P=e.update(T),V=T.material;if(Array.isArray(V)){const Y=P.groups;for(let k=0,ne=Y.length;k<ne;k++){const q=Y[k],Q=V[q.materialIndex];if(Q&&Q.visible){const ee=x(T,Q,N,F);T.onBeforeShadow(i,T,g,E,P,ee,q),i.renderBufferDirect(E,null,P,ee,T,q),T.onAfterShadow(i,T,g,E,P,ee,q)}}}else if(V.visible){const Y=x(T,V,N,F);T.onBeforeShadow(i,T,g,E,P,Y,null),i.renderBufferDirect(E,null,P,Y,T,null),T.onAfterShadow(i,T,g,E,P,Y,null)}}const W=T.children;for(let P=0,V=W.length;P<V;P++)S(W[P],g,E,N,C,F)}function w(T){T.target.removeEventListener("dispose",w);for(const E in c){const N=c[E],C=T.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function Um(i,e){function t(){let R=!1;const $=new lt;let X=null;const le=new lt(0,0,0,0);return{setMask:function(se){X!==se&&!R&&(i.colorMask(se,se,se,se),X=se)},setLocked:function(se){R=se},setClear:function(se,ae,Te,Be,ie){ie===!0&&(se*=Be,ae*=Be,Te*=Be),$.set(se,ae,Te,Be),le.equals($)===!1&&(i.clearColor(se,ae,Te,Be),le.copy($))},reset:function(){R=!1,X=null,le.set(-1,0,0,0)}}}function n(){let R=!1,$=!1,X=null,le=null,se=null;return{setReversed:function(ae){if($!==ae){const Te=e.get("EXT_clip_control");ae?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),$=ae;const Be=se;se=null,this.setClear(Be)}},getReversed:function(){return $},setTest:function(ae){ae?ge(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(ae){X!==ae&&!R&&(i.depthMask(ae),X=ae)},setFunc:function(ae){if($&&(ae=Qc[ae]),le!==ae){switch(ae){case Or:i.depthFunc(i.NEVER);break;case Br:i.depthFunc(i.ALWAYS);break;case zr:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case Hr:i.depthFunc(i.EQUAL);break;case Gr:i.depthFunc(i.GEQUAL);break;case kr:i.depthFunc(i.GREATER);break;case Vr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ae}},setLocked:function(ae){R=ae},setClear:function(ae){se!==ae&&(se=ae,$&&(ae=1-ae),i.clearDepth(ae))},reset:function(){R=!1,X=null,le=null,se=null,$=!1}}}function s(){let R=!1,$=null,X=null,le=null,se=null,ae=null,Te=null,Be=null,ie=null;return{setTest:function(Ae){R||(Ae?ge(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(Ae){$!==Ae&&!R&&(i.stencilMask(Ae),$=Ae)},setFunc:function(Ae,Oe,fe){(X!==Ae||le!==Oe||se!==fe)&&(i.stencilFunc(Ae,Oe,fe),X=Ae,le=Oe,se=fe)},setOp:function(Ae,Oe,fe){(ae!==Ae||Te!==Oe||Be!==fe)&&(i.stencilOp(Ae,Oe,fe),ae=Ae,Te=Oe,Be=fe)},setLocked:function(Ae){R=Ae},setClear:function(Ae){ie!==Ae&&(i.clearStencil(Ae),ie=Ae)},reset:function(){R=!1,$=null,X=null,le=null,se=null,ae=null,Te=null,Be=null,ie=null}}}const r=new t,a=new n,o=new s;let l={};const c=new WeakMap;let d={},h={},f={},u=new WeakMap,_=[],b=null,m=!1,p=null,M=null,x=null,S=null,w=null,T=null,g=null,E=new He(0,0,0),N=0,C=!1,F=null,O=null,W=null,P=null,V=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ne=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=ne>=2);let Q=null,ee={};const Ee=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),Z=new lt().fromArray(Ee),me=new lt().fromArray(Ie);function ve(R,$,X,le){const se=new Uint8Array(4),ae=i.createTexture();i.bindTexture(R,ae),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<X;Te++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D($+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ae}const we={};we[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),a.setFunc(ki),zt(!1),at(co),ge(i.CULL_FACE),At(Mi);function ge(R){d[R]!==!0&&(i.enable(R),d[R]=!0)}function Fe(R){d[R]!==!1&&(i.disable(R),d[R]=!1)}function ut(R,$){return f[R]!==$?(i.bindFramebuffer(R,$),f[R]=$,R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=$),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Ce(R,$){let X=_,le=!1;if(R){X=u.get($),X===void 0&&(X=[],u.set($,X));const se=R.textures;if(X.length!==se.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Te=se.length;ae<Te;ae++)X[ae]=i.COLOR_ATTACHMENT0+ae;X.length=se.length,le=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,le=!0);le&&i.drawBuffers(X)}function $e(R){return b!==R?(i.useProgram(R),b=R,!0):!1}const et={[_i]:i.FUNC_ADD,[Sc]:i.FUNC_SUBTRACT,[yc]:i.FUNC_REVERSE_SUBTRACT};et[Ec]=i.MIN,et[bc]=i.MAX;const Ve={[Tc]:i.ZERO,[Ac]:i.ONE,[wc]:i.SRC_COLOR,[ml]:i.SRC_ALPHA,[Dc]:i.SRC_ALPHA_SATURATE,[Lc]:i.DST_COLOR,[Cc]:i.DST_ALPHA,[Rc]:i.ONE_MINUS_SRC_COLOR,[gl]:i.ONE_MINUS_SRC_ALPHA,[Nc]:i.ONE_MINUS_DST_COLOR,[Pc]:i.ONE_MINUS_DST_ALPHA,[Ic]:i.CONSTANT_COLOR,[Uc]:i.ONE_MINUS_CONSTANT_COLOR,[Fc]:i.CONSTANT_ALPHA,[Oc]:i.ONE_MINUS_CONSTANT_ALPHA};function At(R,$,X,le,se,ae,Te,Be,ie,Ae){if(R===Mi){m===!0&&(Fe(i.BLEND),m=!1);return}if(m===!1&&(ge(i.BLEND),m=!0),R!==Mc){if(R!==p||Ae!==C){if((M!==_i||w!==_i)&&(i.blendEquation(i.FUNC_ADD),M=_i,w=_i),Ae)switch(R){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fs:i.blendFunc(i.ONE,i.ONE);break;case ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",R);break}else switch(R){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ho:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uo:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",R);break}x=null,S=null,T=null,g=null,E.set(0,0,0),N=0,p=R,C=Ae}return}se=se||$,ae=ae||X,Te=Te||le,($!==M||se!==w)&&(i.blendEquationSeparate(et[$],et[se]),M=$,w=se),(X!==x||le!==S||ae!==T||Te!==g)&&(i.blendFuncSeparate(Ve[X],Ve[le],Ve[ae],Ve[Te]),x=X,S=le,T=ae,g=Te),(Be.equals(E)===!1||ie!==N)&&(i.blendColor(Be.r,Be.g,Be.b,ie),E.copy(Be),N=ie),p=R,C=!1}function gt(R,$){R.side===It?Fe(i.CULL_FACE):ge(i.CULL_FACE);let X=R.side===kt;$&&(X=!X),zt(X),R.blending===zi&&R.transparent===!1?At(Mi):At(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const le=R.stencilWrite;o.setTest(le),le&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Mt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(R){F!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),F=R)}function at(R){R!==xc?(ge(i.CULL_FACE),R!==O&&(R===co?i.cullFace(i.BACK):R===vc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),O=R}function cn(R){R!==W&&(k&&i.lineWidth(R),W=R)}function Mt(R,$,X){R?(ge(i.POLYGON_OFFSET_FILL),(P!==$||V!==X)&&(P=$,V=X,a.getReversed()&&($=-$,X=-X),i.polygonOffset($,X))):Fe(i.POLYGON_OFFSET_FILL)}function Yt(R){R?ge(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function Kt(R){R===void 0&&(R=i.TEXTURE0+Y-1),Q!==R&&(i.activeTexture(R),Q=R)}function Jt(R,$,X){X===void 0&&(Q===null?X=i.TEXTURE0+Y-1:X=Q);let le=ee[X];le===void 0&&(le={type:void 0,texture:void 0},ee[X]=le),(le.type!==R||le.texture!==$)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(R,$||we[R]),le.type=R,le.texture=$)}function U(){const R=ee[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Zt(){try{i.compressedTexImage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function st(){try{i.compressedTexImage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function rt(){try{i.texSubImage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function de(){try{i.texSubImage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function _t(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function Ne(){try{i.texStorage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function A(){try{i.texStorage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function v(){try{i.texImage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function z(){try{i.texImage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function te(R){return h[R]!==void 0?h[R]:i.getParameter(R)}function j(R,$){h[R]!==$&&(i.pixelStorei(R,$),h[R]=$)}function re(R){Z.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function he(R){me.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),me.copy(R))}function K(R,$){let X=c.get($);X===void 0&&(X=new WeakMap,c.set($,X));let le=X.get(R);le===void 0&&(le=i.getUniformBlockIndex($,R.name),i.uniformBlockBinding($,le,le),X.set(R,le))}function J(R,$,X){const se=c.get($).get(R);l[se]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,X),l[se]=X)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},Q=null,ee={},f={},l={},u=new WeakMap,_=[],b=null,m=!1,p=null,M=null,x=null,S=null,w=null,T=null,g=null,E=new He(0,0,0),N=0,C=!1,F=null,O=null,W=null,P=null,V=null,Z.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:Fe,bindFramebuffer:ut,drawBuffers:Ce,useProgram:$e,setBlending:At,setMaterial:gt,setFlipSided:zt,setCullFace:at,setLineWidth:cn,setPolygonOffset:Mt,setScissorTest:Yt,activeTexture:Kt,bindTexture:Jt,unbindTexture:U,compressedTexImage2D:Zt,compressedTexImage3D:st,texImage2D:v,texImage3D:z,pixelStorei:j,getParameter:te,updateUBOMapping:K,uniformBlockBinding:J,texStorage2D:Ne,texStorage3D:A,texSubImage2D:rt,texSubImage3D:de,compressedTexSubImage2D:_t,compressedTexSubImage3D:Re,scissor:re,viewport:he,reset:oe}}function Fm(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,d=new WeakMap,h=new Set;let f;const u=new WeakMap,_=new Set,b=new FinalizationRegistry(A=>_.delete(A));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,v){return m?new OffscreenCanvas(A,v):ks("canvas")}function M(A,v,z){let te=1;const j=Ne(A);if((j.width>z||j.height>z)&&(te=z/Math.max(j.width,j.height)),te<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const re=Math.floor(te*j.width),he=Math.floor(te*j.height);f===void 0&&(f=p(re,he));const K=v?p(re,he):f;return K.width=re,K.height=he,K.getContext("2d").drawImage(A,0,0,re,he),Le("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+re+"x"+he+")."),K}else return"data"in A&&Le("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function x(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,v,z,te,j,re=!1){if(A!==null){if(i[A]!==void 0)return i[A];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let he;te&&(he=e.get("EXT_texture_norm16"),he||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8),z===i.UNSIGNED_SHORT&&he&&(K=he.R16_EXT),z===i.SHORT&&he&&(K=he.R16_SNORM_EXT)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),v===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8),z===i.UNSIGNED_SHORT&&he&&(K=he.RG16_EXT),z===i.SHORT&&he&&(K=he.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_SHORT&&he&&(K=he.RGB16_EXT),z===i.SHORT&&he&&(K=he.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),v===i.RGBA){const J=re?Gs:qe.getTransfer(j);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=J===Qe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&he&&(K=he.RGBA16_EXT),z===i.SHORT&&he&&(K=he.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function g(A,v){let z;return A?v===null||v===xn||v===Ei?z=i.DEPTH24_STENCIL8:v===pn?z=i.DEPTH32F_STENCIL8:v===Wi&&(z=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===xn||v===Ei?z=i.DEPTH_COMPONENT24:v===pn?z=i.DEPTH_COMPONENT32F:v===Wi&&(z=i.DEPTH_COMPONENT16),z}function E(A,v){return x(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ct&&A.minFilter!==Ot?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function N(A){const v=new WeakRef(A);n.get(A).__ref=v,_.add(v),b.register(A,v,v)}function C(A){const v=n.get(A).__ref;v!==void 0&&(_.delete(v),b.unregister(v))}function F(A){W(A.target)}function O(A){P(A.target)}function W(A){A.removeEventListener("dispose",F),C(A),Y(A),A.isVideoTexture&&d.delete(A),A.isHTMLTexture&&h.delete(A)}function P(A){A.removeEventListener("dispose",O),C(A),ne(A)}function V(){for(const A of _){const v=A.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):W(v))}_.clear(),h.clear()}function Y(A){const v=n.get(A);if(v.__webglInit===void 0)return;const z=A.source,te=u.get(z);if(te){const j=te[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&k(A),Object.keys(te).length===0&&u.delete(z)}n.remove(A)}function k(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const z=A.source,te=u.get(z);delete te[v.__cacheKey],a.memory.textures--}function ne(A){const v=n.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();const z=A.depthTexture;if(z&&z.renderTarget===A&&W(z),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let re=0;re<v.__webglFramebuffer[j].length;re++)i.deleteFramebuffer(v.__webglFramebuffer[j][re]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const te=A.textures;for(let j=0,re=te.length;j<re;j++){const he=n.get(te[j]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(te[j])}n.remove(A)}let q=0;function Q(){q=0}function ee(){return q}function Ee(A){q=A}function Ie(){const A=q;return A>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,A}function Z(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function me(A,v){const z=n.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const te=A.image;if(te===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(z,A,v);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function ve(A,v){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){gt(z,A,v);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function we(A,v){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){gt(z,A,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function ge(A,v){const z=n.get(A);if(A.version>0&&z.__version!==A.version){zt(z,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}const Fe={[Os]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Wr]:i.MIRRORED_REPEAT},ut={[Ct]:i.NEAREST,[Hc]:i.NEAREST_MIPMAP_NEAREST,[ns]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[sr]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},Ce={[Wc]:i.NEVER,[Il]:i.ALWAYS,[Xc]:i.LESS,[Nl]:i.LEQUAL,[qc]:i.EQUAL,[Dl]:i.GEQUAL,[Yc]:i.GREATER,[Kc]:i.NOTEQUAL};function $e(A,v){if(v.type===pn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ot||v.magFilter===sr||v.magFilter===ns||v.magFilter===Cn||v.minFilter===Ot||v.minFilter===sr||v.minFilter===ns||v.minFilter===Cn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Fe[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Fe[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Fe[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ut[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ct||v.minFilter!==ns&&v.minFilter!==Cn||v.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function et(A,v){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",F),N(v));const te=v.source;let j=u.get(te);j===void 0&&(j={},u.set(te,j));const re=Z(v);if(re!==A.__cacheKey){j[re]===void 0&&(j[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[re].usedTimes++;const he=j[A.__cacheKey];he!==void 0&&(j[A.__cacheKey].usedTimes--,he.usedTimes===0&&k(v)),A.__cacheKey=re,A.__webglTexture=j[re].texture}return z}function Ve(A,v,z){return Math.floor(Math.floor(A/z)/v)}function At(A,v,z,te){const re=A.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,te,v.data);else{re.sort((R,$)=>R.start-$.start);let he=0;for(let R=1;R<re.length;R++){const $=re[he],X=re[R],le=$.start+$.count,se=Ve(X.start,v.width,4),ae=Ve($.start,v.width,4);X.start<=le+1&&se===ae&&Ve(X.start+X.count-1,v.width,4)===se?$.count=Math.max($.count,X.start+X.count-$.start):(++he,re[he]=X)}re.length=he+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let R=0,$=re.length;R<$;R++){const X=re[R],le=Math.floor(X.start/4),se=Math.ceil(X.count/4),ae=le%v.width,Te=Math.floor(le/v.width),Be=se,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te),t.texSubImage2D(i.TEXTURE_2D,0,ae,Te,Be,ie,z,te,v.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function gt(A,v,z){let te=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(te=i.TEXTURE_3D);const j=et(A,v),re=v.source;t.bindTexture(te,A.__webglTexture,i.TEXTURE0+z);const he=n.get(re);if(re.version!==he.__version||j===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ie=qe.getPrimaries(qe.workingColorSpace),Ae=v.colorSpace===kn?null:qe.getPrimaries(v.colorSpace),Oe=v.colorSpace===kn||ie===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let J=M(v.image,!1,s.maxTextureSize);J=Re(v,J);const oe=r.convert(v.format,v.colorSpace),R=r.convert(v.type);let $=T(v.internalFormat,oe,R,v.normalized,v.colorSpace,v.isVideoTexture);$e(te,v);let X;const le=v.mipmaps,se=v.isVideoTexture!==!0,ae=he.__version===void 0||j===!0,Te=re.dataReady,Be=E(v,J);if(v.isDepthTexture)$=g(v.format===Vn,v.type),ae&&(se?t.texStorage2D(i.TEXTURE_2D,1,$,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,oe,R,null));else if(v.isDataTexture)if(le.length>0){se&&ae&&t.texStorage2D(i.TEXTURE_2D,Be,$,le[0].width,le[0].height);for(let ie=0,Ae=le.length;ie<Ae;ie++)X=le[ie],se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,X.width,X.height,oe,R,X.data):t.texImage2D(i.TEXTURE_2D,ie,$,X.width,X.height,0,oe,R,X.data);v.generateMipmaps=!1}else se?(ae&&t.texStorage2D(i.TEXTURE_2D,Be,$,J.width,J.height),Te&&At(v,J,oe,R)):t.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,oe,R,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){se&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,$,le[0].width,le[0].height,J.depth);for(let ie=0,Ae=le.length;ie<Ae;ie++)if(X=le[ie],v.format!==on)if(oe!==null)if(se){if(Te)if(v.layerUpdates.size>0){const Oe=Go(X.width,X.height,v.format,v.type);for(const fe of v.layerUpdates){const je=X.data.subarray(fe*Oe/X.data.BYTES_PER_ELEMENT,(fe+1)*Oe/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,fe,X.width,X.height,1,oe,je)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,X.width,X.height,J.depth,oe,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,$,X.width,X.height,J.depth,0,X.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,X.width,X.height,J.depth,oe,R,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,$,X.width,X.height,J.depth,0,oe,R,X.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{se&&ae&&t.texStorage2D(i.TEXTURE_2D,Be,$,le[0].width,le[0].height);for(let ie=0,Ae=le.length;ie<Ae;ie++)X=le[ie],v.format!==on?oe!==null?se?Te&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,X.width,X.height,oe,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,$,X.width,X.height,0,X.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,X.width,X.height,oe,R,X.data):t.texImage2D(i.TEXTURE_2D,ie,$,X.width,X.height,0,oe,R,X.data)}else if(v.isDataArrayTexture)if(se){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,$,J.width,J.height,J.depth),Te)if(v.layerUpdates.size>0){const ie=Go(J.width,J.height,v.format,v.type);for(const Ae of v.layerUpdates){const Oe=J.data.subarray(Ae*ie/J.data.BYTES_PER_ELEMENT,(Ae+1)*ie/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,J.width,J.height,1,oe,R,Oe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,oe,R,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$,J.width,J.height,J.depth,0,oe,R,J.data);else if(v.isData3DTexture)se?(ae&&t.texStorage3D(i.TEXTURE_3D,Be,$,J.width,J.height,J.depth),Te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,oe,R,J.data)):t.texImage3D(i.TEXTURE_3D,0,$,J.width,J.height,J.depth,0,oe,R,J.data);else if(v.isFramebufferTexture){if(ae)if(se)t.texStorage2D(i.TEXTURE_2D,Be,$,J.width,J.height);else{let ie=J.width,Ae=J.height;for(let Oe=0;Oe<Be;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,$,ie,Ae,0,oe,R,null),ie>>=1,Ae>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),J.parentNode!==ie){ie.appendChild(J),h.add(v),ie.onpaint=Ae=>{const Oe=Ae.changedElements;for(const fe of h)Oe.includes(fe.image)&&(fe.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const Oe=i.RGBA,fe=i.RGBA,je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,fe,je,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(se&&ae){const ie=Ne(le[0]);t.texStorage2D(i.TEXTURE_2D,Be,$,ie.width,ie.height)}for(let ie=0,Ae=le.length;ie<Ae;ie++)X=le[ie],se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,oe,R,X):t.texImage2D(i.TEXTURE_2D,ie,$,oe,R,X);v.generateMipmaps=!1}else if(se){if(ae){const ie=Ne(J);t.texStorage2D(i.TEXTURE_2D,Be,$,ie.width,ie.height)}Te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,R,J)}else t.texImage2D(i.TEXTURE_2D,0,$,oe,R,J);x(v)&&v.mipmapsAutoUpdate===!0&&S(te),he.__version=re.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function zt(A,v,z){if(v.image.length!==6)return;const te=et(A,v),j=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const re=n.get(j);if(j.version!==re.__version||te===!0){t.activeTexture(i.TEXTURE0+z);const he=qe.getPrimaries(qe.workingColorSpace),K=v.colorSpace===kn?null:qe.getPrimaries(v.colorSpace),J=v.colorSpace===kn||he===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const oe=v.isCompressedTexture||v.image[0].isCompressedTexture,R=v.image[0]&&v.image[0].isDataTexture,$=[];for(let fe=0;fe<6;fe++)!oe&&!R?$[fe]=M(v.image[fe],!0,s.maxCubemapSize):$[fe]=R?v.image[fe].image:v.image[fe],$[fe]=Re(v,$[fe]);const X=$[0],le=r.convert(v.format,v.colorSpace),se=r.convert(v.type);let ae=T(v.internalFormat,le,se,v.normalized,v.colorSpace);const Te=v.isVideoTexture!==!0,Be=re.__version===void 0||te===!0,ie=j.dataReady;let Ae=E(v,X);$e(i.TEXTURE_CUBE_MAP,v);let Oe;if(v.isDepthTexture){if(ae=g(v.format===Vn,v.type),Be)if(Te)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ae,X.width,X.height);else for(let fe=0;fe<6;fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ae,X.width,X.height,0,le,se,null)}else if(oe){Te&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ae,X.width,X.height);for(let fe=0;fe<6;fe++){Oe=$[fe].mipmaps;for(let je=0;je<Oe.length;je++){const St=Oe[je];v.format!==on?le!==null?Te?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je,0,0,St.width,St.height,le,St.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je,ae,St.width,St.height,0,St.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je,0,0,St.width,St.height,le,se,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je,ae,St.width,St.height,0,le,se,St.data)}}}else{if(Oe=v.mipmaps,Te&&Be){Oe.length>0&&Ae++;const fe=Ne($[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ae,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(R){Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,$[fe].width,$[fe].height,le,se,$[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ae,$[fe].width,$[fe].height,0,le,se,$[fe].data);for(let je=0;je<Oe.length;je++){const In=Oe[je].image[fe].image;Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je+1,0,0,In.width,In.height,le,se,In.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je+1,ae,In.width,In.height,0,le,se,In.data)}}else{Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,le,se,$[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ae,le,se,$[fe]);for(let je=0;je<Oe.length;je++){const St=Oe[je];Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je+1,0,0,le,se,St.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je+1,ae,le,se,St.image[fe])}}}x(v)&&v.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),re.__version=j.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function at(A,v,z,te,j,re){const he=r.convert(z.format,z.colorSpace),K=r.convert(z.type),J=T(z.internalFormat,he,K,z.normalized,z.colorSpace),oe=n.get(v),R=n.get(z);if(R.__renderTarget=v,!oe.__hasExternalTextures){const $=Math.max(1,v.width>>re),X=Math.max(1,v.height>>re);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,re,J,$,X,v.depth,0,he,K,null):t.texImage2D(j,re,J,$,X,0,he,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,j,R.__webglTexture,0,rt(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,j,R.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function cn(A,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const te=v.depthTexture,j=te&&te.isDepthTexture?te.type:null,re=g(v.stencilBuffer,j),he=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(v),re,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(v),re,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,re,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,A)}else{const te=v.textures;for(let j=0;j<te.length;j++){const re=te[j],he=r.convert(re.format,re.colorSpace),K=r.convert(re.type),J=T(re.internalFormat,he,K,re.normalized,re.colorSpace);de(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(v),J,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(v),J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(A,v,z){const te=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(v.depthTexture);j.__renderTarget=v;const re=te?v.depthTexture.image[0]:v.depthTexture.image;(!j.__webglTexture||re.width!==v.width||re.height!==v.height)&&(re.width=v.width,re.height=v.height,v.depthTexture.needsUpdate=!0),te?ge(v.depthTexture,0):me(v.depthTexture,0);const he=j.__webglTexture,K=rt(v),J=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,oe=v.depthTexture.format===Vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Wn)de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,J,he,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,oe,J,he,0);else if(v.depthTexture.format===Vn)de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,J,he,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,oe,J,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(A){const v=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const te=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),te){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,te.removeEventListener("dispose",j)};te.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=te}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let te=0;te<6;te++)Mt(v.__webglFramebuffer[te],A,te);else A.texture.mipmaps.length>0?Mt(v.__webglFramebuffer[0],A,0):Mt(v.__webglFramebuffer,A,0);else if(z){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]===void 0)v.__webglDepthbuffer[te]=i.createRenderbuffer(),cn(v.__webglDepthbuffer[te],A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,re)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),cn(v.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(A,v,z){const te=n.get(A);v!==void 0&&at(te.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Yt(A)}function Jt(A){const v=A.texture,z=n.get(A),te=n.get(v);A.addEventListener("dispose",O),N(A);const j=A.textures,re=A.isWebGLCubeRenderTarget===!0,he=j.length>1;if(he||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=v.version,a.memory.textures++),re){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let J=0;J<v.mipmaps.length;J++)z.__webglFramebuffer[K][J]=i.createFramebuffer()}else z.__webglFramebuffer[K]=i.createFramebuffer()}else{if(v.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)z.__webglFramebuffer[K]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(he)for(let K=0,J=j.length;K<J;K++){const oe=n.get(j[K]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&de(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){const J=j[K];z.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[K]);const oe=r.convert(J.format,J.colorSpace),R=r.convert(J.type),$=T(J.internalFormat,oe,R,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),X=rt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,$,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,z.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),cn(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),$e(i.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)at(z.__webglFramebuffer[K][J],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else at(z.__webglFramebuffer[K],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);x(v)?S(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(he){for(let K=0,J=j.length;K<J;K++){const oe=j[K],R=n.get(oe);let $=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,R.__webglTexture),$e($,oe),at(z.__webglFramebuffer,A,oe,i.COLOR_ATTACHMENT0+K,$,0),x(oe)&&S($)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,te.__webglTexture),$e(K,v),v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)at(z.__webglFramebuffer[J],A,v,i.COLOR_ATTACHMENT0,K,J);else at(z.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,K,0);x(v)?S(K):v.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Yt(A)}function U(A){const v=A.textures;for(let z=0,te=v.length;z<te;z++){const j=v[z];if(x(j)&&j.mipmapsAutoUpdate===!0){const re=w(A),he=n.get(j).__webglTexture;t.bindTexture(re,he),S(re),t.unbindTexture()}}}const Zt=[];function st(A){if(A.samples>0){if(de(A)===!1){const v=A.textures,z=A.width,te=A.height;let j=i.COLOR_BUFFER_BIT;const re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(A),K=v.length>1;if(K)for(let oe=0;oe<v.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let oe=0;oe<v.length;oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);const R=n.get(v[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,z,te,0,0,z,te,j,i.NEAREST),l===!0&&(Zt.length=0,Zt.push(i.COLOR_ATTACHMENT0+oe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Zt.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let oe=0;oe<v.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);const R=n.get(v[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function rt(A){return Math.min(s.maxSamples,A.samples)}function de(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function _t(A){const v=a.render.frame;d.get(A)!==v&&(d.set(A,v),A.update())}function Re(A,v){const z=A.colorSpace,te=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Hs&&z!==kn&&(qe.getTransfer(z)===Qe?(te!==on||j!==Xt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",z)),v}function Ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ie,this.resetTextureUnits=Q,this.getTextureUnits=ee,this.setTextureUnits=Ee,this.setTexture2D=me,this.setTexture2DArray=ve,this.setTexture3D=we,this.setTextureCube=ge,this.rebindTextures=Kt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=de,this.dispose=V}function Om(i,e){function t(n,s=kn){let r;const a=qe.getTransfer(s);if(n===Xt)return i.UNSIGNED_BYTE;if(n===Ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tl)return i.BYTE;if(n===Al)return i.SHORT;if(n===Wi)return i.UNSIGNED_SHORT;if(n===Ia)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===Cl)return i.ALPHA;if(n===Pl)return i.RGB;if(n===on)return i.RGBA;if(n===Wn)return i.DEPTH_COMPONENT;if(n===Vn)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Oa)return i.RED_INTEGER;if(n===ni)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===za)return i.RGBA_INTEGER;if(n===Ps||n===Ls||n===Ns||n===Ds)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xr||n===qr||n===Yr||n===Kr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jr||n===Zr||n===$r||n===jr||n===Qr||n===Bs||n===ea)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jr||n===Zr)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$r)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jr)return r.COMPRESSED_R11_EAC;if(n===Qr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Bs)return r.COMPRESSED_RG11_EAC;if(n===ea)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ta)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===aa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===la)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===ga||n===_a)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ma)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xa||n===va||n===zs||n===Ma)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ql(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qt({vertexShader:Bm,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gm extends ii{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,u=null,_=null;const b=typeof XRWebGLBinding<"u",m=new Hm,p={},M=t.getContextAttributes();let x=null,S=null;const w=[],T=[],g=new ye;let E=null,N=null;const C=new sn;C.viewport=new lt;const F=new sn;F.viewport=new lt;const O=[C,F],W=new jh;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let me=w[Z];return me===void 0&&(me=new fr,w[Z]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Z){let me=w[Z];return me===void 0&&(me=new fr,w[Z]=me),me.getGripSpace()},this.getHand=function(Z){let me=w[Z];return me===void 0&&(me=new fr,w[Z]=me),me.getHandSpace()};function Y(Z){const me=T.indexOf(Z.inputSource);if(me===-1)return;const ve=w[me];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<w.length;Z++){const me=T[Z];me!==null&&(T[Z]=null,w[Z].disconnect(me))}P=null,V=null,m.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(x),u=null,f=null,h=null,s=null,S=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(g.width,g.height,!1),N!==null){const Z=N.camera;Z.fov=N.fov,Z.zoom=N.zoom,Z.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(g),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,we=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?Vn:Wn,we=M.stencil?Ei:xn);const Fe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new gn(f.textureWidth,f.textureHeight,{format:on,type:Xt,depthTexture:new bi(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new gn(u.framebufferWidth,u.framebufferHeight,{format:on,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(Z){for(let me=0;me<Z.removed.length;me++){const ve=Z.removed[me],we=T.indexOf(ve);we>=0&&(T[we]=null,w[we].disconnect(ve))}for(let me=0;me<Z.added.length;me++){const ve=Z.added[me];let we=T.indexOf(ve);if(we===-1){for(let Fe=0;Fe<w.length;Fe++)if(Fe>=T.length){T.push(ve),we=Fe;break}else if(T[Fe]===null){T[Fe]=ve,we=Fe;break}if(we===-1)break}const ge=w[we];ge&&ge.connect(ve)}}function q(Z,me){me===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(me.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let me=Z.near,ve=Z.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),W.near=F.near=C.near=me,W.far=F.far=C.far=ve,(P!==W.near||V!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),P=W.near,V=W.far),W.layers.mask=Z.layers.mask|6,C.layers.mask=W.layers.mask&-5,F.layers.mask=W.layers.mask&-3;const we=Z.parent,ge=W.cameras;q(W,we);for(let Fe=0;Fe<ge.length;Fe++)q(ge[Fe],we);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&Z.isPerspectiveCamera&&(N={camera:Z,fov:Z.fov,zoom:Z.zoom}),Q(Z,W,we)};function Q(Z,me,ve){ve===null?Z.matrix.copy(me.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(me.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(me.projectionMatrix),Z.projectionMatrixInverse.copy(me.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ya*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(Z){return p[Z]};let ee=null;function Ee(Z,me){if(d=me.getViewerPose(c||a),_=me,d!==null){const ve=d.views;u!==null&&(e.setRenderTargetFramebuffer(S,u.framebuffer),e.setRenderTarget(S));let we=!1;ve.length!==W.cameras.length&&(W.cameras.length=0,we=!0);for(let Ce=0;Ce<ve.length;Ce++){const $e=ve[Ce];let et=null;if(u!==null)et=u.getViewport($e);else{const At=h.getViewSubImage(f,$e);et=At.viewport,Ce===0&&(e.setRenderTargetTextures(S,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(S))}let Ve=O[Ce];Ve===void 0&&(Ve=new sn,Ve.layers.enable(Ce),Ve.viewport=new lt,O[Ce]=Ve),Ve.matrix.fromArray($e.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray($e.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(et.x,et.y,et.width,et.height),Ce===0&&(W.matrix.copy(Ve.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),we===!0&&W.cameras.push(Ve)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){h=n.getBinding();const Ce=h.getDepthInformation(ve[0]);Ce&&Ce.isValid&&Ce.texture&&m.init(Ce,s.renderState)}if(ge&&ge.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let Ce=0;Ce<ve.length;Ce++){const $e=ve[Ce].camera;if($e){let et=p[$e];et||(et=new ql,p[$e]=et);const Ve=h.getCameraImage($e);et.sourceTexture=Ve}}}}for(let ve=0;ve<w.length;ve++){const we=T[ve],ge=w[ve];we!==null&&ge!==void 0&&ge.update(we,me,c||a)}ee&&ee(Z,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),_=null}const Ie=new Ql;Ie.setAnimationLoop(Ee),this.setAnimationLoop=function(Z){ee=Z},this.dispose=function(){}}}const km=new it,cc=new De;cc.set(-1,0,0,0,1,0,0,0,1);function Vm(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,S=M.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(km.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(cc),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,M){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wm(i,e,t,n){let s={},r={};function a(M,x){const S=x.program;n.uniformBlockBinding(M,S,s[M.id])}function o(M,x){let S=s[M.id];S===void 0&&(_(M),S=l(M),s[M.id]=S,M.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(M,w);const T=e.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){const x=i.createBuffer(),S=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),x}function c(M){const x=s[M.id],S=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,g=S.length;T<g;T++){const E=S[T];if(Array.isArray(E))for(let N=0,C=E.length;N<C;N++)d(E[N],T,N,w);else d(E,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,x,S,w){if(f(M,x,S,w)===!0){const T=M.__offset,g=M.value;if(Array.isArray(g)){let E=0;for(let N=0;N<g.length;N++){const C=g[N],F=b(C,!0);h(C,M.__data,E),E+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else h(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function h(M,x,S){typeof M=="number"||typeof M=="boolean"?x[S]=M:M.isMatrix3?(x[S]=M.elements[0],x[S+1]=M.elements[1],x[S+2]=M.elements[2],x[S+3]=0,x[S+4]=M.elements[3],x[S+5]=M.elements[4],x[S+6]=M.elements[5],x[S+7]=0,x[S+8]=M.elements[6],x[S+9]=M.elements[7],x[S+10]=M.elements[8],x[S+11]=0):ArrayBuffer.isView(M)?x.set(M.subarray(0,x.length-S),S):M.toArray(x,S)}function f(M,x,S,w){const T=M.value,g=x+"_"+S;if(Array.isArray(T)){w[g]===void 0&&(w[g]=[]);const E=w[g];let N=!1;for(let C=0;C<T.length;C++)u(T[C],E,C)===!0&&(N=!0);return N}return u(T,w,g)}function u(M,x,S){if(x[S]===void 0)return typeof M=="number"||typeof M=="boolean"?x[S]=M:ArrayBuffer.isView(M)?x[S]=M.slice():x[S]=M.clone(),!0;{const w=x[S];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return x[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function _(M){const x=M.uniforms;let S=0;const w=16;for(let g=0,E=x.length;g<E;g++){const N=Array.isArray(x[g])?x[g]:[x[g]];for(let C=0,F=N.length;C<F;C++){const O=N[C],W=Array.isArray(O.value)?O.value:[O.value],P=Array.isArray(x[g])||Array.isArray(O.value);let V=S;for(let k=0,ne=W.length;k<ne;k++){const q=W[k],Q=b(q,P),ee=S%w,Ee=ee%Q.boundary,Ie=ee+Ee;S+=Ee,Ie!==0&&w-Ie<Q.storage&&(S+=w-Ie),k===0&&(V=S),S+=Q.storage}const Y=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Y((S-V)/Float32Array.BYTES_PER_ELEMENT),O.__offset=V}}const T=S%w;return T>0&&(S+=w-T),M.__size=S,M.__cache={},this}function b(M,x){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",M),x===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(M){const x=M.target;x.removeEventListener("dispose",m),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:p}}const Xm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function qm(){return un===null&&(un=new kl(Xm,16,16,ni,vn),un.name="DFG_LUT",un.minFilter=Ot,un.magFilter=Ot,un.wrapS=Rn,un.wrapT=Rn,un.generateMipmaps=!1,un.needsUpdate=!0),un}class Ym{constructor(e={}){const{canvas:t=$c(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Xt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const b=u,m=new Set([za,Ba,Oa]),p=new Set([Xt,xn,Wi,Ei,Ua,Fa]),M=new Uint32Array(4),x=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let w=null,T=null;const g=[],E=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let F=!1,O=null,W=null,P=null,V=null;this._outputColorSpace=Gt;let Y=0,k=0,ne=null,q=-1,Q=null;const ee=new lt,Ee=new lt;let Ie=null;const Z=new He(0);let me=0,ve=t.width,we=t.height,ge=1,Fe=null,ut=null;const Ce=new lt(0,0,ve,we),$e=new lt(0,0,ve,we);let et=!1;const Ve=new qi,At=new ka;let gt=!1,zt=!1;const at=new it,cn=new D,Mt=new lt,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function Jt(){return ne===null?ge:1}let U=n;function Zt(y,L){return t.getContext(y,L)}let st,rt,de,_t,Re,Ne,A,v,z,te,j,re,he,K,J,oe,R,$,X,le,se,ae,Te;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",fe,!1),U===null){const L="webgl2";if(U=Zt(L,y),U===null)throw Zt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(y){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ze("WebGLRenderer: "+y.message),y}function Be(){st=new Zf(U),st.init(),se=new Om(U,st),rt=new zf(U,st,e,se),de=new Um(U,st),rt.reversedDepthBuffer&&f&&de.buffers.depth.setReversed(!0),W=U.createFramebuffer(),P=U.createFramebuffer(),V=U.createFramebuffer(),_t=new Qf(U),Re=new Sm,Ne=new Fm(U,st,de,Re,rt,se,_t),A=new Jf(C),v=new eu(U),ae=new Of(U,v),z=new $f(U,v,_t,ae),te=new tp(U,z,v,ae,_t),$=new ep(U,rt,Ne),J=new Hf(Re),j=new Mm(C,A,st,rt,ae,J),re=new Vm(C,Re),he=new Em,K=new Cm(st),R=new Ff(C,A,de,te,_,l),oe=new Im(C,te,rt),Te=new Wm(U,_t,rt,de),X=new Bf(U,st,_t),le=new jf(U,st,_t),_t.programs=j.programs,C.capabilities=rt,C.extensions=st,C.properties=Re,C.renderLists=he,C.shadowMap=oe,C.state=de,C.info=_t}b!==Xt&&(N=new ip(b,t.width,t.height,o,s,r));const ie=new Gm(C,U);this.xr=ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=st.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=st.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(y){y!==void 0&&(ge=y,this.setSize(ve,we,!1))},this.getSize=function(y){return y.set(ve,we)},this.setSize=function(y,L,G=!0){if(ie.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=y,we=L,t.width=Math.floor(y*ge),t.height=Math.floor(L*ge),G===!0&&(t.style.width=y+"px",t.style.height=L+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(ve*ge,we*ge).floor()},this.setDrawingBufferSize=function(y,L,G){ve=y,we=L,ge=G,t.width=Math.floor(y*G),t.height=Math.floor(L*G),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(b===Xt){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ee)},this.getViewport=function(y){return y.copy(Ce)},this.setViewport=function(y,L,G,B){y.isVector4?Ce.set(y.x,y.y,y.z,y.w):Ce.set(y,L,G,B),de.viewport(ee.copy(Ce).multiplyScalar(Jt()).round())},this.getScissor=function(y){return y.copy($e)},this.setScissor=function(y,L,G,B){y.isVector4?$e.set(y.x,y.y,y.z,y.w):$e.set(y,L,G,B),de.scissor(Ee.copy($e).multiplyScalar(Jt()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(y){de.setScissorTest(et=y)},this.setOpaqueSort=function(y){Fe=y},this.setTransparentSort=function(y){ut=y},this.getClearColor=function(y){return y.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,G=!0){let B=0;if(y){let H=!1;if(ne!==null){const ue=ne.texture.format;H=m.has(ue)}if(H){const ue=ne.texture.type,xe=p.has(ue),ce=R.getClearColor(),_e=R.getClearAlpha(),be=ce.r,Ue=ce.g,We=ce.b;xe?(M[0]=be,M[1]=Ue,M[2]=We,M[3]=_e,U.clearBufferuiv(U.COLOR,0,M)):(x[0]=be,x[1]=Ue,x[2]=We,x[3]=_e,U.clearBufferiv(U.COLOR,0,x))}else B|=U.COLOR_BUFFER_BIT}L&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),R.dispose(),he.dispose(),K.dispose(),Ne.dispose(),Re.dispose(),A.dispose(),te.dispose(),z.dispose(),ae.dispose(),Te.dispose(),j.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ja),ie.removeEventListener("sessionend",Qa),Yn.stop()};function Ae(y){y.preventDefault(),mo("WebGLRenderer: Context Lost."),F=!0}function Oe(){mo("WebGLRenderer: Context Restored."),F=!1;const y=_t.autoReset,L=oe.enabled,G=oe.autoUpdate,B=oe.needsUpdate,H=oe.type;Be(),_t.autoReset=y,oe.enabled=L,oe.autoUpdate=G,oe.needsUpdate=B,oe.type=H}function fe(y){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function je(y){const L=y.target;L.removeEventListener("dispose",je),St(L)}function St(y){In(y),Re.remove(y)}function In(y){const L=Re.get(y).programs;L!==void 0&&(L.forEach(function(G){j.releaseProgram(G)}),y.isShaderMaterial&&j.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,G,B,H,ue){L===null&&(L=Yt);const xe=H.isMesh&&H.matrixWorld.determinantAffine()<0,ce=dc(y,L,G,B,H);de.setMaterial(B,xe);let _e=G.index,be=1;if(B.wireframe===!0){if(_e=z.getWireframeAttribute(G),_e===void 0)return;be=2}const Ue=G.drawRange,We=G.attributes.position;let Me=Ue.start*be,Xe=(Ue.start+Ue.count)*be;ue!==null&&(Me=Math.max(Me,ue.start*be),Xe=Math.min(Xe,(ue.start+ue.count)*be)),_e!==null?(Me=Math.max(Me,0),Xe=Math.min(Xe,_e.count)):We!=null&&(Me=Math.max(Me,0),Xe=Math.min(Xe,We.count));const dt=Xe-Me;if(dt<0||dt===1/0)return;ae.setup(H,B,ce,G,_e);let nt,tt=X;if(_e!==null&&(nt=v.get(_e),tt=le,tt.setIndex(nt)),H.isMesh)B.wireframe===!0?(de.setLineWidth(B.wireframeLinewidth*Jt()),tt.setMode(U.LINES)):tt.setMode(U.TRIANGLES);else if(H.isLine){let Pt=B.linewidth;Pt===void 0&&(Pt=1),de.setLineWidth(Pt*Jt()),H.isLineSegments?tt.setMode(U.LINES):H.isLineLoop?tt.setMode(U.LINE_LOOP):tt.setMode(U.LINE_STRIP)}else H.isPoints?tt.setMode(U.POINTS):H.isSprite&&tt.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(st.get("WEBGL_multi_draw"))tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Pt=H._multiDrawStarts,Se=H._multiDrawCounts,Ut=H._multiDrawCount,Je=_e?v.get(_e).bytesPerElement:1,Kn=Re.get(B).currentProgram.getUniforms();for(let Lt=0;Lt<Ut;Lt++)Kn.setValue(U,"_gl_DrawID",Lt),tt.render(Pt[Lt]/Je,Se[Lt])}else if(H.isInstancedMesh)tt.renderInstances(Me,dt,H.count);else if(G.isInstancedBufferGeometry){const Pt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Se=Math.min(G.instanceCount,Pt);tt.renderInstances(Me,dt,Se)}else tt.render(Me,dt)};function $a(y,L,G,B){O!==null&&y.isNodeMaterial&&O.setObject(B,y),gt===!0&&J.setState(y,G,!1),y.transparent===!0&&y.side===It&&y.forceSinglePass===!1?(y.side=kt,y.needsUpdate=!0,Li(y,L,B),y.side=ti,y.needsUpdate=!0,Li(y,L,B),y.side=It):Li(y,L,B)}this.compile=function(y,L,G=null){G===null&&(G=y),O!==null&&O.renderStart(y,L,G),T=K.get(G),T.init(L),E.push(T),G.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),y!==G&&y.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),zt=this.localClippingEnabled,gt=J.init(this.clippingPlanes,zt),gt===!0&&J.setGlobalState(this.clippingPlanes,L),O!==null&&oe.render(T.state.shadowsArray,G,L);const B=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ue=H.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const ce=ue[xe];$a(ce,G,L,H),B.add(ce)}else $a(ue,G,L,H),B.add(ue)}),T=E.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(y,L,G=null){const B=this.compile(y,L,G);return new Promise(H=>{function ue(){if(B.forEach(function(xe){const _e=Re.get(xe).currentProgram;(_e===void 0||_e.isReady())&&B.delete(xe)}),B.size===0){H(y);return}setTimeout(ue,10)}st.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let er=null;function hc(y){er&&er(y)}function ja(){Yn.stop()}function Qa(){Yn.start()}const Yn=new Ql;Yn.setAnimationLoop(hc),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(y){er=y,ie.setAnimationLoop(y),y===null?Yn.stop():Yn.start()},ie.addEventListener("sessionstart",ja),ie.addEventListener("sessionend",Qa),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;O!==null&&O.renderStart(y,L);const G=ie.enabled===!0&&ie.isPresenting===!0,B=N!==null&&(ne===null||G)&&N.begin(C,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(L),L=ie.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,L,ne),T=K.get(y,E.length),T.init(L),T.state.textureUnits=Ne.getTextureUnits(),E.push(T),at.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?At.setFromArrayCamera(L):Ve.setFromProjectionMatrix(at,ln,L.reversedDepth),zt=this.localClippingEnabled,gt=J.init(this.clippingPlanes,zt),w=he.get(y,g.length),w.init(),g.push(w),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){const xe=C.xr.getDepthSensingMesh();xe!==null&&tr(xe,L,-1/0,C.sortObjects)}tr(y,L,0,C.sortObjects),w.finish(),O!==null&&O.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(Fe,ut),Kt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Kt&&R.addToRenderList(w,y),this.info.autoReset===!0&&this.info.reset(),gt===!0&&J.beginShadows();const H=T.state.shadowsArray;if(oe.render(H,y,L),gt===!0&&J.endShadows(),(B&&N.hasRenderPass())===!1){const xe=w.opaque,ce=w.transmissive;if(T.setupLights(),L.isArrayCamera){const _e=L.cameras;if(ce.length>0)for(let be=0,Ue=_e.length;be<Ue;be++){const We=_e[be];to(xe,ce,y,We)}Kt&&R.render(y);for(let be=0,Ue=_e.length;be<Ue;be++){const We=_e[be];eo(w,y,We,We.viewport)}}else ce.length>0&&to(xe,ce,y,L),Kt&&R.render(y),eo(w,y,L)}ne!==null&&k===0&&(Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne)),B&&N.end(C),y.isScene===!0&&y.onAfterRender(C,y,L),ae.resetDefaultState(),q=-1,Q=null,E.pop(),E.length>0?(T=E[E.length-1],Ne.setTextureUnits(T.state.textureUnits),gt===!0&&J.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,O!==null&&O.renderEnd()};function tr(y,L,G,B){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){const xe=L.isArrayCamera?At:Ve;if(!y.frustumCulled||y.intersectsFrustum(xe)){B&&Mt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(at);const ce=te.update(y),_e=y.material;_e.visible&&w.push(y,ce,_e,G,Mt.z,null,L)}}else if(y.isMesh||y.isLine||y.isPoints){const xe=L.isArrayCamera?At:Ve;if(!y.frustumCulled||y.intersectsFrustum(xe)){const ce=te.update(y),_e=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Mt.copy(y.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Mt.copy(ce.boundingSphere.center)),Mt.applyMatrix4(y.matrixWorld).applyMatrix4(at)),Array.isArray(_e)){const be=ce.groups;for(let Ue=0,We=be.length;Ue<We;Ue++){const Me=be[Ue],Xe=_e[Me.materialIndex];Xe&&Xe.visible&&w.push(y,ce,Xe,G,Mt.z,Me,L)}}else _e.visible&&w.push(y,ce,_e,G,Mt.z,null,L)}}}const ue=y.children;for(let xe=0,ce=ue.length;xe<ce;xe++)tr(ue[xe],L,G,B)}function eo(y,L,G,B){const{opaque:H,transmissive:ue,transparent:xe}=y;T.setupLightsView(G),gt===!0&&J.setGlobalState(C.clippingPlanes,G),B&&de.viewport(ee.copy(B)),H.length>0&&es(H,L,G),ue.length>0&&es(ue,L,G),xe.length>0&&es(xe,L,G),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function to(y,L,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){const Me=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new gn(1,1,{generateMipmaps:!0,type:Me?vn:Xt,minFilter:Cn,samples:Math.max(4,rt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const ue=T.state.transmissionRenderTarget[B.id],xe=B.viewport||ee;ue.setSize(xe.z*C.transmissionResolutionScale,xe.w*C.transmissionResolutionScale);const ce=C.getRenderTarget(),_e=C.getActiveCubeFace(),be=C.getActiveMipmapLevel();C.setRenderTarget(ue),C.getClearColor(Z),me=C.getClearAlpha(),me<1&&C.setClearColor(16777215,.5),C.clear(),Kt&&R.render(G);const Ue=C.toneMapping;C.toneMapping=Pn;const We=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),gt===!0&&J.setGlobalState(C.clippingPlanes,B),es(y,G,B),Ne.updateMultisampleRenderTarget(ue),Ne.updateRenderTargetMipmap(ue),st.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Xe=0,dt=L.length;Xe<dt;Xe++){const nt=L[Xe],{object:tt,geometry:Pt,material:Se,group:Ut}=nt;if(Se.side===It&&tt.layers.test(B.layers)){const Je=Se.side;Se.side=kt,Se.needsUpdate=!0,no(tt,G,B,Pt,Se,Ut),Se.side=Je,Se.needsUpdate=!0,Me=!0}}Me===!0&&(Ne.updateMultisampleRenderTarget(ue),Ne.updateRenderTargetMipmap(ue))}C.setRenderTarget(ce,_e,be),C.setClearColor(Z,me),We!==void 0&&(B.viewport=We),C.toneMapping=Ue}function es(y,L,G){const B=L.isScene===!0?L.overrideMaterial:null;for(let H=0,ue=y.length;H<ue;H++){const xe=y[H],{object:ce,geometry:_e,group:be}=xe;let Ue=xe.material;Ue.allowOverride===!0&&B!==null&&(Ue=B),ce.layers.test(G.layers)&&no(ce,L,G,_e,Ue,be)}}function no(y,L,G,B,H,ue){O!==null&&H.isNodeMaterial&&O.setObject(y,H),y.onBeforeRender(C,L,G,B,H,ue),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(C,L,G,B,y,ue),H.transparent===!0&&H.side===It&&H.forceSinglePass===!1?(H.side=kt,H.needsUpdate=!0,C.renderBufferDirect(G,L,B,H,y,ue),H.side=ti,H.needsUpdate=!0,C.renderBufferDirect(G,L,B,H,y,ue),H.side=It):C.renderBufferDirect(G,L,B,H,y,ue),y.onAfterRender(C,L,G,B,H,ue)}function io(y){let L=0;for(const G of y)G.texture!==null&&L++;return L}function Li(y,L,G){L.isScene!==!0&&(L=Yt);const B=Re.get(y),H=T.state.lights,ue=T.state.shadowsArray,xe=H.state.version,ce=j.getParameters(y,H.state,ue,L,G,T.state.lightProbeGridArray),_e=j.getProgramCacheKey(ce);let be=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;const Ue=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=A.get(y.envMap||B.environment,Ue),B.envMapRotation=B.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,be===void 0&&(y.addEventListener("dispose",je),be=new Map,B.programs=be,B.programVariants=new Map);let We=be.get(_e);if(We!==void 0){if(B.currentProgram===We&&B.lightsStateVersion===xe)return ro(y,ce),We}else ce.uniforms=j.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,G,ce),y.onBeforeCompile(ce,C),We=j.acquireProgram(ce,_e),be.set(_e,We),B.uniforms=ce.uniforms;const Me=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Me.clippingPlanes=J.uniform),ro(y,ce),B.needsLights=pc(y),B.lightsStateVersion=xe,B.needsLights&&(Me.ambientLightColor.value=H.state.ambient,Me.lightProbe.value=H.state.probe,Me.sunLights.value=H.state.sun,Me.sunLightShadows.value=H.state.sunShadow,Me.directionalLights.value=H.state.directional,Me.directionalLightShadows.value=H.state.directionalShadow,Me.spotLights.value=H.state.spot,Me.spotLightShadows.value=H.state.spotShadow,Me.rectAreaLights.value=H.state.rectArea,Me.ltc_1.value=H.state.rectAreaLTC1,Me.ltc_2.value=H.state.rectAreaLTC2,Me.pointLights.value=H.state.point,Me.pointLightShadows.value=H.state.pointShadow,Me.hemisphereLights.value=H.state.hemi,Me.sunShadowMatrix.value=H.state.sunShadowMatrix,Me.sunShadowCascade.value=H.state.sunShadowCascade,Me.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Me.spotLightMatrix.value=H.state.spotLightMatrix,Me.spotLightMap.value=H.state.spotLightMap,Me.pointShadowMatrix.value=H.state.pointShadowMatrix),B.numLightProbeGrids=io(T.state.lightProbeGridArray),B.currentProgram=We,B.uniformsList=null,We}function uc(y,L,G,B,H){const ue=Re.get(y),xe=ue.currentProgram.id+","+B+","+H;let ce=ue.programVariants.get(xe);return ce===void 0?(ce=Li(y,L,G),ue.programVariants.set(xe,ce)):(ue.currentProgram=ce,ue.uniformsList=null,ue.outputColorSpace=B,ue.toneMapping=H),ce}function so(y){if(y.uniformsList===null){const L=y.currentProgram.getUniforms();y.uniformsList=Us.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function ro(y,L){const G=Re.get(y);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function dc(y,L,G,B,H){L.isScene!==!0&&(L=Yt),Ne.resetTextureUnits();const ue=L.fog,xe=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,ce=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:qe.workingColorSpace,_e=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,be=A.get(B.envMap||xe,_e),Ue=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,We=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!G.morphAttributes.position,Xe=!!G.morphAttributes.normal,dt=!!G.morphAttributes.color;let nt=Pn;B.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(nt=C.toneMapping);const tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Pt=tt!==void 0?tt.length:0,Se=Re.get(B),Ut=T.state.lights;if(gt===!0&&(zt===!0||y!==Q)){const ot=y===Q&&B.id===q;J.setState(B,y,ot)}let Je=!1,Kn=!1;B.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Ut.state.version||H.isBatchedMesh&&Se.batching===!1||!H.isBatchedMesh&&Se.batching===!0||H.isBatchedMesh&&Se.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Se.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Se.instancing===!1||!H.isInstancedMesh&&Se.instancing===!0||H.isSkinnedMesh&&Se.skinning===!1||!H.isSkinnedMesh&&Se.skinning===!0||H.isInstancedMesh&&Se.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Se.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Se.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Se.instancingMorph===!1&&H.morphTexture!==null||Se.envMap!==be||B.fog===!0&&Se.fog!==ue||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==J.numPlanes||Se.numIntersection!==J.numIntersection)||Se.vertexAlphas!==Ue||Se.vertexTangents!==We||Se.morphTargets!==Me||Se.morphNormals!==Xe||Se.morphColors!==dt||Se.morphTargetsCount!==Pt||Se.numLightProbeGrids!==io(T.state.lightProbeGridArray)?Je=!0:(Se.outputColorSpace!==ce||Se.toneMapping!==nt)&&(Kn=!0):(Je=!0,Se.__version=B.version);let Lt=Se.currentProgram;(Je===!0||Kn===!0)&&(Lt=Kn===!0?uc(B,L,H,ce,nt):Li(B,L,H),O&&B.isNodeMaterial&&O.onUpdateProgram(B,Lt,Se));let ts=!1,Un=!1,Jn=!1;const Ye=Lt.getUniforms(),wt=Se.uniforms;if(de.useProgram(Lt.program)&&(ts=!0,Un=!0,Jn=!0),B.id!==q&&(q=B.id,Un=!0),ts||Q!==y){de.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ye.setValue(U,"projectionMatrix",y.projectionMatrix),Ye.setValue(U,"viewMatrix",y.matrixWorldInverse);const yt=Ye.map.cameraPosition;yt!==void 0&&yt.setValue(U,cn.setFromMatrixPosition(y.matrixWorld)),rt.logarithmicDepthBuffer&&Ye.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ye.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Un=!0,Jn=!0)}if(Se.needsLights&&(Ut.state.sunShadowMap.length>0&&Ye.setValue(U,"sunShadowMap",Ut.state.sunShadowMap,Ne),Ut.state.directionalShadowMap.length>0&&Ye.setValue(U,"directionalShadowMap",Ut.state.directionalShadowMap,Ne),Ut.state.spotShadowMap.length>0&&Ye.setValue(U,"spotShadowMap",Ut.state.spotShadowMap,Ne),Ut.state.pointShadowMap.length>0&&Ye.setValue(U,"pointShadowMap",Ut.state.pointShadowMap,Ne)),H.isSkinnedMesh){Ye.setOptional(U,H,"bindMatrix"),Ye.setOptional(U,H,"bindMatrixInverse");const ot=H.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),Ye.setValue(U,"boneTexture",ot.boneTexture,Ne))}H.isBatchedMesh&&(Ye.setOptional(U,H,"batchingTexture"),Ye.setValue(U,"batchingTexture",H._matricesTexture,Ne),Ye.setOptional(U,H,"batchingIdTexture"),Ye.setValue(U,"batchingIdTexture",H._indirectTexture,Ne),Ye.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&Ye.setValue(U,"batchingColorTexture",H._colorsTexture,Ne));const jt=G.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&$.update(H,G,Lt),(Un||Se.receiveShadow!==H.receiveShadow)&&(Se.receiveShadow=H.receiveShadow,Ye.setValue(U,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(wt.envMapIntensity.value=L.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=qm()),Un){if(Ye.setValue(U,"toneMappingExposure",C.toneMappingExposure),Se.needsLights&&fc(wt,Jn),ue&&B.fog===!0&&re.refreshFogUniforms(wt,ue),re.refreshMaterialUniforms(wt,B,ge,we,T.state.transmissionRenderTarget[y.id]),Se.needsLights&&Se.numLightProbeGrids>0){const ot=S;let yt=0;for(const Mn of T.state.lightProbeGridArray)Mn.texture!==null&&(ot.textures[yt]=Mn.texture,ot.min[yt]=Mn.boundingBox.min,ot.max[yt]=Mn.boundingBox.max,ot.resolution[yt]=Mn.resolution,yt++);for(const Mn in ot)ot[Mn].length=yt;wt.probesSH.value=ot.textures,wt.probesMin.value=ot.min,wt.probesMax.value=ot.max,wt.probesResolution.value=ot.resolution}Us.upload(U,so(Se),wt,Ne)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Us.upload(U,so(Se),wt,Ne),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ye.setValue(U,"center",H.center),Ye.setValue(U,"modelViewMatrix",H.modelViewMatrix),Ye.setValue(U,"normalMatrix",H.normalMatrix),Ye.setValue(U,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){const ot=B.uniformsGroups;for(let yt=0,Mn=ot.length;yt<Mn;yt++){const oo=ot[yt];Te.update(oo,Lt),Te.bind(oo,Lt)}}return Lt}function fc(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.sunLights.needsUpdate=L,y.sunLightShadows.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function pc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,L,G){const B=Re.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Re.get(y.texture).__webglTexture=L,Re.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){const G=Re.get(y);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,G=0){ne=y,Y=L,k=G;let B=null,H=!1,ue=!1;if(y){const ce=Re.get(y);if(ce.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(U.FRAMEBUFFER,ce.__webglFramebuffer),ee.copy(y.viewport),Ee.copy(y.scissor),Ie=y.scissorTest,de.viewport(ee),de.scissor(Ee),de.setScissorTest(Ie),q=-1;return}else if(ce.__webglFramebuffer===void 0)Ne.setupRenderTarget(y);else if(ce.__hasExternalTextures)Ne.rebindTextures(y,Re.get(y.texture).__webglTexture,Re.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ue=y.depthTexture;if(ce.__boundDepthTexture!==Ue){if(Ue!==null&&Re.has(Ue)&&(y.width!==Ue.image.width||y.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(y)}}const _e=y.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ue=!0);const be=Re.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(be[L])?B=be[L][G]:B=be[L],H=!0):y.samples>0&&Ne.useMultisampledRTT(y)===!1?B=Re.get(y).__webglMultisampledFramebuffer:Array.isArray(be)?B=be[G]:B=be,ee.copy(y.viewport),Ee.copy(y.scissor),Ie=y.scissorTest}else ee.copy(Ce).multiplyScalar(ge).floor(),Ee.copy($e).multiplyScalar(ge).floor(),Ie=et;if(G!==0&&(B=W),de.bindFramebuffer(U.FRAMEBUFFER,B)&&de.drawBuffers(y,B),de.viewport(ee),de.scissor(Ee),de.setScissorTest(Ie),H){const ce=Re.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,ce.__webglTexture,G)}else if(ue){const ce=L;for(let _e=0;_e<y.textures.length;_e++){const be=Re.get(y.textures[_e]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+_e,be.__webglTexture,G,ce)}}else if(y!==null&&G!==0){const ce=Re.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ce.__webglTexture,G)}q=-1};function ao(y){const L=Re.get(y);return(L.__readFormat!==y.format||L.__readType!==y.type)&&(L.__readFormat=y.format,L.__readType=y.type,L.__formatReadable=rt.textureFormatReadable(y.format),L.__typeReadable=rt.textureTypeReadable(y.type)),L}this.readRenderTargetPixels=function(y,L,G,B,H,ue,xe,ce=0){if(!(y&&y.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(_e=_e[xe],Array.isArray(_e)&&(_e=_e[0])),_e){de.bindFramebuffer(U.FRAMEBUFFER,_e);try{const be=y.textures[ce],Ue=be.format,We=be.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ce);const Me=ao(be);if(Me.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-B&&G>=0&&G<=y.height-H&&U.readPixels(L,G,B,H,se.convert(Ue),se.convert(We),ue)}finally{const be=ne!==null?Re.get(ne).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(y,L,G,B,H,ue,xe,ce=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(_e=_e[xe],Array.isArray(_e)&&(_e=_e[0])),_e)if(L>=0&&L<=y.width-B&&G>=0&&G<=y.height-H){de.bindFramebuffer(U.FRAMEBUFFER,_e);const be=y.textures[ce],Ue=be.format,We=be.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ce);const Me=ao(be);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(L,G,B,H,se.convert(Ue),se.convert(We),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const dt=ne!==null?Re.get(ne).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,dt);const nt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await jc(U,nt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Xe),U.deleteSync(nt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,G=0){const B=Math.pow(2,-G),H=Math.floor(y.image.width*B),ue=Math.floor(y.image.height*B),xe=L!==null?L.x:0,ce=L!==null?L.y:0;Ne.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,xe,ce,H,ue),de.unbindTexture()},this.copyTextureToTexture=function(y,L,G=null,B=null,H=0,ue=0){let xe,ce,_e,be,Ue,We,Me,Xe,dt;const nt=y.isCompressedTexture?y.mipmaps[ue]:y.image;if(G!==null)xe=G.max.x-G.min.x,ce=G.max.y-G.min.y,_e=G.isBox3?G.max.z-G.min.z:1,be=G.min.x,Ue=G.min.y,We=G.isBox3?G.min.z:0;else{const Ye=Math.pow(2,-H);xe=Math.floor(nt.width*Ye),ce=Math.floor(nt.height*Ye),y.isDataArrayTexture?_e=nt.depth:y.isData3DTexture?_e=Math.floor(nt.depth*Ye):_e=1,be=0,Ue=0,We=0}B!==null?(Me=B.x,Xe=B.y,dt=B.z):(Me=0,Xe=0,dt=0);const tt=se.convert(L.format),Pt=se.convert(L.type);let Se;L.isData3DTexture?(Ne.setTexture3D(L,0),Se=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ne.setTexture2DArray(L,0),Se=U.TEXTURE_2D_ARRAY):(Ne.setTexture2D(L,0),Se=U.TEXTURE_2D),de.activeTexture(U.TEXTURE0),de.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),de.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),de.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const Ut=de.getParameter(U.UNPACK_ROW_LENGTH),Je=de.getParameter(U.UNPACK_IMAGE_HEIGHT),Kn=de.getParameter(U.UNPACK_SKIP_PIXELS),Lt=de.getParameter(U.UNPACK_SKIP_ROWS),ts=de.getParameter(U.UNPACK_SKIP_IMAGES);de.pixelStorei(U.UNPACK_ROW_LENGTH,nt.width),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nt.height),de.pixelStorei(U.UNPACK_SKIP_PIXELS,be),de.pixelStorei(U.UNPACK_SKIP_ROWS,Ue),de.pixelStorei(U.UNPACK_SKIP_IMAGES,We);const Un=y.isDataArrayTexture||y.isData3DTexture,Jn=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){const Ye=Re.get(y),wt=Re.get(L),jt=Re.get(Ye.__renderTarget),ot=Re.get(wt.__renderTarget);de.bindFramebuffer(U.READ_FRAMEBUFFER,jt.__webglFramebuffer),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let yt=0;yt<_e;yt++)Un&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(y).__webglTexture,H,We+yt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(L).__webglTexture,ue,dt+yt)),U.blitFramebuffer(be,Ue,be+xe,Ue+ce,Me,Xe,Me+xe,Xe+ce,U.DEPTH_BUFFER_BIT,U.NEAREST);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||Re.has(y)){const Ye=Re.get(y),wt=Re.get(L);de.bindFramebuffer(U.READ_FRAMEBUFFER,P),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let jt=0;jt<_e;jt++)Un?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ye.__webglTexture,H,We+jt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ye.__webglTexture,H),Jn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,ue,dt+jt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wt.__webglTexture,ue),H!==0?U.blitFramebuffer(be,Ue,be+xe,Ue+ce,Me,Xe,Me+xe,Xe+ce,U.COLOR_BUFFER_BIT,U.NEAREST):Jn?U.copyTexSubImage3D(Se,ue,Me,Xe,dt+jt,be,Ue,xe,ce):U.copyTexSubImage2D(Se,ue,Me,Xe,be,Ue,xe,ce);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Jn?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Se,ue,Me,Xe,dt,xe,ce,_e,tt,Pt,nt.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Se,ue,Me,Xe,dt,xe,ce,_e,tt,nt.data):U.texSubImage3D(Se,ue,Me,Xe,dt,xe,ce,_e,tt,Pt,nt):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,Me,Xe,xe,ce,tt,Pt,nt.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,Me,Xe,nt.width,nt.height,tt,nt.data):U.texSubImage2D(U.TEXTURE_2D,ue,Me,Xe,xe,ce,tt,Pt,nt);de.pixelStorei(U.UNPACK_ROW_LENGTH,Ut),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je),de.pixelStorei(U.UNPACK_SKIP_PIXELS,Kn),de.pixelStorei(U.UNPACK_SKIP_ROWS,Lt),de.pixelStorei(U.UNPACK_SKIP_IMAGES,ts),ue===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&U.generateMipmap(Se),de.unbindTexture()},this.initRenderTarget=function(y){Re.get(y).__webglFramebuffer===void 0&&Ne.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ne.setTextureCube(y,0):y.isData3DTexture?Ne.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ne.setTexture2DArray(y,0):Ne.setTexture2D(y,0),de.unbindTexture()},this.resetState=function(){Y=0,k=0,ne=null,de.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Km={water:5888255,fire:16742702,wind:11534304,earth:14267498},Jm=`
attribute float seed; uniform float time; uniform float progress; uniform float kind; uniform float size; varying float vAlpha; varying float vSeed;
void main(){
 float a=seed*6.2831853; float p=fract(seed*3.17+time*.55); vec3 pos;
 if(kind<.5){float r=(.8+progress*5.8)+sin(seed*81.)*.7;pos=vec3(cos(a+time*.4)*r, .2+sin(p*3.14159)*2.5*(1.-progress*.4),sin(a+time*.4)*r);}
 else if(kind<1.5){float r=(.3+p*2.4)*(.7+progress);pos=vec3(cos(a+time*2.)*r,p*5.5,sin(a+time*2.)*r);}
 else if(kind<2.5){float r=1.+p*3.5;pos=vec3(cos(a+time*3.)*r,p*4.5,sin(a+time*3.)*r);}
 else{float r=1.+seed*4.;pos=vec3(cos(a)*r,sin(p*3.14159)*2.4,sin(a)*r);}
 vec4 mv=modelViewMatrix*vec4(pos,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(size*(150./max(1.,-mv.z))*(.5+sin(seed*51.)*.25),2.,32.);vAlpha=sin(p*3.14159)*(1.-progress*.5);vSeed=seed;
}`,Zm="uniform vec3 color; uniform float fade; varying float vAlpha; varying float vSeed;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float glow=pow(1.-d,1.4);gl_FragColor=vec4(mix(color,vec3(1.),glow*.65),glow*vAlpha*fade);}",$m="attribute float angle; attribute float height;uniform float progress;uniform float time;varying float vHeight;varying float vAngle;void main(){float r=.55+progress*6.;float curl=sin(height*3.14159)*.7;float wave=sin(angle*5.+time*6.)*.14;vec3 p=vec3(cos(angle)*(r+curl),.15+height*(1.2+sin(angle*3.+time*4.)*.3)*(1.-progress*.35)+wave*height,sin(angle)*(r+curl));vHeight=height;vAngle=angle;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",jm="uniform float fade;uniform float time;varying float vHeight;varying float vAngle;void main(){float lines=sin(vAngle*28.+vHeight*15.-time*9.);float foam=smoothstep(.72,.98,vHeight);vec3 color=mix(vec3(.015,.24,.65),vec3(.18,.8,1.),vHeight);color=mix(color,vec3(.85,1.,1.),foam*.9+pow(max(0.,lines),8.)*.25);gl_FragColor=vec4(color,(.4+foam*.48)*fade);}";class Qm{constructor(e,t,n,s,r=0){Pe(this,"group",new ht);Pe(this,"time",0);Pe(this,"duration");Pe(this,"materials",[]);Pe(this,"uniforms",[]);Pe(this,"stones",[]);Pe(this,"ribbons",[]);this.element=e,this.special=t,this.duration=t?2.15:.62,this.group.position.set(n,0,s),this.group.rotation.y=r,this.group.userData.element=e;const a={time:{value:0},progress:{value:0},fade:{value:1}};this.uniforms.push(a);const o=new mt,l=t?210:55;o.setAttribute("position",new _n(new Float32Array(l*3),3)),o.setAttribute("seed",new _n(Float32Array.from({length:l},(h,f)=>f/l),1));const c=new qt({vertexShader:Jm,fragmentShader:Zm,uniforms:{...a,color:{value:new He(Km[e])},kind:{value:["water","fire","wind","earth"].indexOf(e)},size:{value:t?4:2.5}},transparent:!0,depthWrite:!1,blending:Fs}),d=new Ta(o,c);d.frustumCulled=!1,this.group.add(d),this.materials.push(c),e==="water"&&this.water(a),e==="fire"&&this.fire(),e==="wind"&&this.wind(),e==="earth"&&this.earth(),t||this.group.scale.setScalar(.47)}standard(e,t=.8){const n=new wi({color:e,emissive:e,emissiveIntensity:.7,roughness:.22,metalness:.15,transparent:!0,opacity:t,depthWrite:!1,side:It});return this.materials.push(n),n}water(e){const s=[],r=[],a=[],o=[];for(let h=0;h<=8;h++)for(let f=0;f<=96;f++)if(s.push(0,0,0),r.push(f/96*Math.PI*2),a.push(h/8),h<8&&f<96){const u=h*97+f,_=u+96+1;o.push(u,_,u+1,u+1,_,_+1)}const l=new mt;l.setAttribute("position",new ke(s,3)),l.setAttribute("angle",new ke(r,1)),l.setAttribute("height",new ke(a,1)),l.setIndex(o);const c=new qt({vertexShader:$m,fragmentShader:jm,uniforms:e,transparent:!0,side:It,depthWrite:!1}),d=new ct(l,c);d.frustumCulled=!1,this.group.add(d),this.materials.push(c);for(let h=0;h<3;h++){const f=[];for(let _=0;_<=48;_++){const b=_/48,m=b*Math.PI*2+h*Math.PI*2/3,p=.7+b*3.8;f.push(new D(Math.cos(m)*p,.55+Math.sin(b*Math.PI)*2.5,Math.sin(m)*p))}const u=new ct(new Yi(new Ws(f),56,h===0?.17:.1,8,!1),this.standard(h===0?2599410:11270655,.78));this.ribbons.push(u),this.group.add(u)}}fire(){const e=this.uniforms[0];for(let n=0;n<9;n++){const s=new qt({uniforms:{...e,seed:{value:n}},transparent:!0,depthWrite:!1,side:It,blending:Fs,vertexShader:"uniform float time;uniform float seed;varying float h;varying vec3 p;void main(){h=(position.y+1.)*.5;vec3 v=position;float bend=sin(h*7.-time*9.+seed);v.xz*=max(.04,1.-h*.85);v.x+=bend*h*.22;v.z+=cos(h*6.-time*7.+seed)*h*.16;v.y=(position.y+1.)*.85;p=v;gl_Position=projectionMatrix*modelViewMatrix*vec4(v,1.);}",fragmentShader:"uniform float fade;uniform float time;varying float h;varying vec3 p;void main(){float flicker=.8+.2*sin(p.y*14.-time*12.+p.x*7.);vec3 color=mix(vec3(1.,.76,.14),vec3(1.,.12,.005),h);float alpha=(1.-h)*.68*flicker*fade;gl_FragColor=vec4(color,alpha);}"});this.materials.push(s);const r=new ct(new ei(1,20,16),s),a=n/9*Math.PI*2;r.position.set(Math.cos(a)*(n%3?1.8:.6),.6,Math.sin(a)*(n%3?1.8:.6)),r.scale.set(.5,1.6,.5),r.userData.seed=n,this.ribbons.push(r),this.group.add(r)}const t=new ct(new ei(.9,20,14),this.standard(16767882,.7));t.position.y=.7,this.group.add(t),this.ribbons.push(t)}wind(){for(let e=0;e<4;e++){const t=[];for(let s=0;s<=64;s++){const r=s/64,a=r*Math.PI*3+e*Math.PI/2,o=1.4+Math.sin(r*Math.PI)*2;t.push(new D(Math.cos(a)*o,.2+r*4.4,Math.sin(a)*o))}const n=new ct(new Yi(new Ws(t),72,e%2?.035:.065,5,!1),this.standard(e%2?14417906:7462585,.65));this.group.add(n),this.ribbons.push(n)}}earth(){for(let t=0;t<7;t++){const n=t/7*Math.PI*2,s=new ct(new Zs(.7,0),new wi({color:t%2?10979937:7628113,roughness:.7,metalness:.15}));s.position.set(Math.cos(n)*3.2,-1,Math.sin(n)*3.2),s.scale.set(.8,1.6+t%3*.4,.9),s.rotation.set(.15,t*.7,.1),s.userData.seed=t,this.stones.push(s),this.group.add(s),this.materials.push(s.material);const r=new ct(new qn(.035,1.5,.04),this.standard(16765835));r.position.set(.17,.05,.5),s.add(r)}const e=new ct(new ei(3.5,32,16,0,Math.PI*2,0,Math.PI/2),new Ea({color:16176021,transparent:!0,opacity:.075,wireframe:!0,depthWrite:!1}));this.group.add(e),this.materials.push(e.material)}update(e){this.time+=e;const t=Math.min(1,this.time/this.duration),n=Math.min(1,(1-t)*4);for(const s of this.uniforms)s.time.value=this.time,s.progress.value=t,s.fade.value=n;this.ribbons.forEach((s,r)=>{if(this.element==="water"&&(s.rotation.y=this.time*(r%2?-.6:.8),s.scale.setScalar(.3+Math.sin(t*Math.PI*.7)*.8)),this.element==="wind"&&(s.rotation.y=this.time*1.8,s.scale.setScalar(.65+Math.sin(t*Math.PI)*.35)),this.element==="fire"){const a=s.userData.seed??r;s.scale.y=1+Math.sin(this.time*12+a)*.35+(1-t),s.rotation.z=Math.sin(this.time*8+a)*.18,s.position.y=.6+t*1.7}}),this.stones.forEach((s,r)=>{const a=Math.min(1,this.time*5-r*.05),o=Math.max(0,(t-.68)/.32);s.position.y=-1+Math.max(0,a)*1.9-o*2,s.rotation.y+=e*.12});for(const s of this.materials)!(s instanceof qt)&&s.transparent&&(s.opacity=(s instanceof Ea?.075:.78)*n);return t<1}dispose(){this.group.traverse(e=>{(e instanceof ct||e instanceof Ta)&&e.geometry.dispose()}),this.materials.forEach(e=>e.dispose())}}const dn=[{name:"Omi",species:"Human",element:"Water",color:"#81ddff",title:"Keeper of the flowing tide",description:"A young human monk with an unshakable spirit. His water ribbons rise into a sweeping tidal surge."},{name:"Kimi",species:"Lizard",element:"Fire",color:"#ffad69",title:"Heart of the living flame",description:"A quick-footed lizard with a golden crest and an ember-red cloak. Her fire blossoms scorch groups of foes."},{name:"Raimundo",species:"Dragon",element:"Wind",color:"#9ef5d1",title:"Wings of the wandering sky",description:"An emerald dragon with luminous wing membranes and sweeping horns. His spiraling wind restores his allies."},{name:"Clay",species:"Cat",element:"Earth",color:"#f3d58f",title:"The mountain with a gentle heart",description:"A sturdy tabby cat with bright eyes and a curling tail. Stone pillars rise at his command to shelter the team."}];function e0(i,e=.48,t=0){return new wi({color:i,roughness:e,metalness:t})}function mn(i,e,t,n=0,s=0,r=0){const a=new ct(e,e0(t));return a.position.set(n,s,r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function Ke(i,e,t,n,s,r,a=r,o=r){const l=mn(i,new ei(1,24,16),e,t,n,s);return l.scale.set(r,a,o),l}function xi(i,e,t,n,s,r,a,o){return mn(i,new Zi(r,a,o,20),e,t,n,s)}function Ht(i,e,t,n=.025){return mn(i,new Yi(new Ws(t.map(s=>new D(...s))),24,n,6,!1),e)}function Ra(i,e,t,n=!0){const s=new mt;s.setAttribute("position",new ke(t,3)),s.computeVertexNormals();const r=mn(i,s,e);return n&&(r.material.side=It),r}function As(i,e,t,n,s,r){Ke(i,16774617,e,t,n,.145,.17,.07),Ke(i,r,e,t,n+.055,.085,.115,.03),Ke(i,1387569,e,t,n+.08,s?.022:.049,.09,.019),Ke(i,16777215,e-.027,t+.046,n+.1,.022,.028,.012)}function t0(i,e,t,n){const s=[];for(let a=0;a<15;a++){const o=a/14;s.push(new ye(.34+.15*(1-o)+Math.sin(o*Math.PI)*.05,.62+o*.85))}const r=mn(i,new Wa(s,32),e);if(r.name="robe",xi(i,t,0,.77,0,.47,.49,.09),xi(i,5258550,0,1.1,0,.43,.43,.11),Ke(i,t,0,1.1,.43,.1,.12,.045),Ht(i,t,[[-.29,1.48,.25],[-.1,1.3,.41],[.17,1.16,.42]],.035),n===0){const a=mn(i,new qn(.19,.57,.045),15115597,.16,.75,.43);a.rotation.z=.1}for(const a of[-1,1]){const o=new ht;o.position.set(a*.46,1.46,0),i.add(o),o.name=a<0?"leftArm":"rightArm",Ke(o,e,0,-.11,0,.18,.26,.19),xi(o,t,0,-.33,0,.16,.155,.1);const l=[15317381,7972450,5414809,14064472][n];Ke(o,l,0,-.51,.04,.13,.2,.14),xi(o,n===2?3235424:6048575,0,-.52,0,.14,.14,.17),Ke(o,l,0,-.7,.05,.14,.14,.13);const c=new ht;c.name=a<0?"leftLeg":"rightLeg",c.position.set(a*.21,.6,0),i.add(c),Ke(c,3753028,0,-.19,0,.145,.27,.15),Ke(c,n===3?14662796:3358012,0,-.48,.12,.18,.16,.31),xi(c,t,0,-.31,0,.15,.15,.07)}}function cl(i,e){const t=new ht;t.name=e<0?"leftWing":"rightWing",t.position.set(e*.3,1.48,-.2),i.add(t);const n=[[0,0,0],[e*.7,1.5,-.65],[e*1.72,.65,-.45],[e*1.38,-.1,-.24],[e*.83,.12,-.2],[e*.5,-.45,-.08]],s=[];for(let a=1;a<n.length-1;a++)s.push(...n[0],...n[a],...n[a+1]);const r=Ra(t,7195066,s);r.material.roughness=.32,r.material.emissive.set(1064762),r.material.emissiveIntensity=.35,Ht(t,2847853,[n[0],n[1],n[2],n[3]],.055);for(const a of[2,3,5])Ht(t,12769709,[n[0],n[a]],.024)}function n0(i){const e=new ht,t=new ht;e.add(t),e.userData.hero=!0,e.userData.species=dn[i].species;const n=[11285817,11092014,2707041,7430465],s=[15121254,15252577,11919045,13873516];t0(t,n[i],s[i],i),xi(t,[15317381,7972450,5414809,14064472][i],0,1.62,0,.18,.2,.36);const r=new ht;if(r.name="head",r.position.set(0,2,0),t.add(r),i===0){Ke(r,15778449,0,.08,0,.47,.53,.43);for(const o of[-1,1])Ke(r,15118720,o*.46,.02,0,.11,.17,.09),As(r,o*.17,.08,.37,!1,7754039),Ht(r,7031094,[[o*.08,.27,.39],[o*.17,.3,.4],[o*.27,.25,.34]],.025);Ke(r,14393454,0,-.045,.42,.065,.09,.08),Ht(r,9590082,[[-.1,-.2,.37],[0,-.22,.4],[.1,-.2,.37]],.015);for(let o=0;o<6;o++)Ke(r,10910533,(o%3-1)*.1,.36+Math.floor(o/3)*.09,.36,.021,.022,.014);for(let o=0;o<11;o++){const l=o/10*Math.PI;Ke(t,o%2?7360050:10910535,Math.cos(l)*.3,1.5-Math.sin(l)*.2,.32+Math.sin(l)*.05,.052)}}if(i===1){Ke(r,7775845,0,.08,-.02,.45,.47,.43),Ke(r,9288563,0,-.12,.34,.37,.22,.36),Ke(r,13359518,0,-.24,.39,.28,.08,.27);for(const o of[-1,1]){As(r,o*.23,.19,.31,!0,15319133),Ke(r,4419397,o*.17,-.06,.65,.035,.025,.015);for(let l=0;l<3;l++)Ke(r,5406280,o*(.33+l*.02),-.04+l*.13,.29,.055,.04,.03)}for(let o=0;o<5;o++){const l=mn(r,new Nn(.11,.3-o*.015,5),14727509,0,.49-o*.08,-.28+o*.09);l.rotation.x=-.25}Ht(t,7314520,[[0,.8,-.25],[.22,.6,-.7],[.52,.42,-1.2],[.6,.57,-1.55],[.37,.74,-1.7]],.145).name="tail";for(let o=0;o<4;o++)Ke(t,13154138,o*.12,.73-o*.045,-.55-o*.23,.065,.12,.065);Ht(r,4288329,[[-.23,-.17,.61],[0,-.2,.67],[.23,-.17,.61]],.012)}if(i===2){Ke(r,5217170,0,.08,0,.45,.46,.44),Ke(r,8172960,0,-.12,.34,.32,.24,.4),Ke(r,13819826,0,-.25,.37,.25,.09,.28);for(const o of[-1,1])As(r,o*.23,.18,.33,!0,14075521),Ke(r,3236956,o*.15,-.02,.7,.03,.025,.014),Ht(r,14931883,[[o*.31,.35,-.08],[o*.46,.6,-.14],[o*.5,.85,-.35]],.075),Ra(r,7453094,[o*.31,.2,-.1,o*.8,.4,-.33,o*.54,-.14,-.14]);for(let o=0;o<4;o++){const l=mn(t,new Nn(.1,.32,6),14469511,0,1.9-o*.25,-.42);l.rotation.x=-.5}cl(t,-1),cl(t,1),Ht(t,4889485,[[0,.75,-.3],[-.25,.45,-.9],[-.6,.55,-1.5],[-.9,.9,-1.7]],.16).name="tail",Ke(t,14144912,-.9,.95,-1.7,.18,.1,.24),Ht(r,2778717,[[-.2,-.16,.65],[0,-.2,.7],[.2,-.16,.65]],.012)}if(i===3){Ke(r,14327649,0,.1,0,.47,.45,.42);for(const l of[-1,1]){const c=new ht;c.position.set(l*.32,.38,-.03),r.add(c);const d=mn(c,new Nn(.23,.48,3),13274449,0,.13,0);d.rotation.y=l*.18,Ra(c,15313568,[-.13,.06,.12,.13,.06,.12,0,.36,.08]),As(r,l*.19,.16,.34,!0,9550987),Ke(r,15784635,l*.15,-.11,.38,.2,.15,.13);for(let h=0;h<3;h++)Ht(r,16049349,[[l*.16,-.11,.49],[l*.43,-.08+h*.06,.43],[l*.68,-.04+h*.09,.33]],.009);for(let h=0;h<2;h++){const f=Ke(r,9265214,l*.37,.2-h*.14,.23,.11,.025,.04);f.rotation.z=l*.3}}Ke(r,10968152,0,-.075,.51,.075,.045,.035),Ht(r,7951683,[[0,-.1,.5],[0,-.17,.49],[-.08,-.19,.46]],.012),Ht(r,7951683,[[0,-.17,.49],[.08,-.19,.46]],.012);for(const l of[-.14,0,.14])Ke(r,10184510,l,.43,.18,.027,.14,.055);const o=new ht;o.name="tail",t.add(o),Ht(o,13934956,[[0,.8,-.22],[.3,.65,-.75],[.65,.9,-1.05],[.7,1.3,-1.1],[.5,1.5,-1]],.14),Ke(o,15783854,.5,1.5,-1,.15)}const a=mn(e,new $s(.63,.022,6,40),[9626874,16759680,11331275,14796174][i],0,.04,0);return a.rotation.x=-Math.PI/2,a.castShadow=!1,a.material.emissive.copy(a.material.color),a.material.emissiveIntensity=.5,e}function i0(i,e,t){const n=i.children[0];for(const a of["leftWing","rightWing"]){const o=n.getObjectByName(a);o&&(o.rotation.y=(a==="leftWing"?1:-1)*(.12+Math.sin(e*2.5)*.16+t*.6))}const s=n.getObjectByName("tail");s&&(s.rotation.y=Math.sin(e*2)*.12);const r=n.getObjectByName("head");r&&(r.rotation.y=Math.sin(e*.8)*.055)}const Ca=(i,e={})=>new wi({color:i,roughness:.64,...e});function Rt(i,e,t,n=0,s=0,r=0,a={}){const o=new ct(i,Ca(e,a));return o.position.set(n,s,r),o.castShadow=!0,o.receiveShadow=!0,t.add(o),o}function bt(i,e,t,n,s,r,a,o){return Rt(new qn(r,a,o),e,i,t,n,s)}function wn(i,e,t,n,s,r){return Rt(new ei(r,20,14),e,i,t,n,s)}function rn(i,e,t,n,s,r,a,o){return Rt(new Zi(r,a,o,10),e,i,t,n,s)}function hl(i,e=!1,t=!1){if(!e)return n0(i);const n=new ht,s=new ht;n.add(s);const r=e?t?4337742:5391452:[12925234,10367040,3574134,13083734][i],a=e?10658479:i===0?15846741:15118984,o=rn(s,r,0,.95,0,.4,.5,.9);o.name="robe",rn(s,e?2107960:15847303,0,.65,0,.43,.43,.1);const l=wn(s,a,0,1.83,0,i===0&&!e?.53:.42);if(l.name="head",n.userData.hero=!e,!e&&i!==0&&(wn(s,i===2?4729893:2367272,0,2.04,-.08,.43),i===1&&(wn(s,2104868,-.43,2.09,-.05,.2),wn(s,2104868,.43,2.09,-.05,.2)),i===3&&(rn(s,6702380,0,2.23,0,.63,.63,.08),rn(s,6702380,0,2.34,0,.31,.4,.22))),e&&(l.scale.set(1,.85,1),bt(s,2105388,0,1.84,.36,.6,.22,.12),t))for(const d of[-1,1]){const h=Rt(new Nn(.15,.8,5),14203507,s,d*.36,2.3,0);h.rotation.z=-d*.5}for(const d of[-1,1]){wn(s,e?16672872:2959658,d*.17,1.88,.39,.045);const h=new ht;h.position.set(d*.5,1.25,0),rn(h,r,0,-.18,0,.13,.14,.55),wn(h,a,0,-.48,0,.14),h.name=d<0?"leftArm":"rightArm",s.add(h);const f=rn(s,3157043,d*.2,.29,0,.13,.15,.5);f.name=d<0?"leftLeg":"rightLeg",bt(s,2368813,d*.2,.07,.1,.29,.17,.42)}if(i===0&&!e){for(let d=0;d<9;d++){const h=d/8*Math.PI;wn(s,5588268,Math.cos(h)*.3,1.4-Math.sin(h)*.12,.3,.055)}for(let d=0;d<6;d++)wn(s,7822898,(d%3-1)*.11,2.06+Math.floor(d/3)*.1,.43,.026)}const c=Rt(new Js(.58,24),1060396,n,0,.025,0,{transparent:!0,opacity:.22,depthWrite:!1});return c.rotation.x=-Math.PI/2,c.castShadow=!1,t&&n.scale.setScalar(2.15),n}function Ir(i,e,t,n,s){i.userData.hero&&i0(i,e,n);const r=i.children[0];if(r.scale.setScalar(s?1.3:1),i.userData.hero){const a=r.getObjectByName("head");a&&a.scale.setScalar(s?.88:1)}r.position.y=t?Math.abs(Math.sin(e*11))*.09:Math.sin(e*2)*.025;for(const a of["leftArm","rightArm","leftLeg","rightLeg"]){const o=r.getObjectByName(a);o&&(o.rotation.x=t?Math.sin(e*11+(a.startsWith("left")?0:Math.PI))*.55:0,n>0&&a.endsWith("Arm")&&(o.rotation.x=-1.2-Math.sin(n*20)*.7))}}function s0(i,e,t,n,s=1){const r=new ht;if(r.position.set(e,0,t),r.scale.setScalar(s),i.add(r),rn(r,6837314,0,1.6,0,.15,.3,3.2),n)for(let a=0;a<5;a++){const o=a*2.4;wn(r,[15382205,15246263,15779779][a%3],Math.sin(o)*1.1,3.2+Math.cos(o)*.4,Math.cos(o)*.9,1.35)}else for(let a=0;a<4;a++){const o=a*2.4;Rt(new ji(1.45,2),[3235406,4357724,5935974,4684370][a],r,Math.sin(o)*.6,3+a*.36,Math.cos(o)*.6).scale.set(1.15,.8,1)}}function ul(i,e,t){const n=new ht;n.position.set(e,0,t),i.add(n);for(const s of[-1,1])rn(n,10176574,s*3.4,2.8,0,.23,.32,5.6),bt(n,7420467,s*3.4,.4,0,.8,.8,.8);bt(n,11358532,0,4.8,0,8.6,.35,.5),bt(n,2571066,0,5.7,0,9.8,.35,.8),bt(n,11358532,0,5.4,0,9.2,.35,.6),bt(n,14005879,0,5,0,.6,1.2,.12)}function ws(i,e,t){const n=new ht;n.position.set(e,0,t),i.add(n),rn(n,7174512,0,.25,0,.5,.6,.5),rn(n,9279888,0,.9,0,.2,.3,1.2),bt(n,15388038,0,1.7,0,.65,.65,.65),Rt(new Nn(.65,.4,4),5335908,n,0,2.18,0)}function r0(i,e,t){const n=new ht;n.position.set(e,0,t),i.add(n),bt(n,8031873,0,.35,0,12,.7,8),bt(n,13412216,0,2,0,10,3,6);for(let s=-4;s<=4;s+=2)bt(n,8601141,s,2.2,3.1,.25,3.2,.3);bt(n,5320489,0,1.8,3.15,2,2.8,.15);for(let s=0;s<2;s++){const r=Rt(new Nn(8-s*1.7,2,4),4089441,n,0,4.5+s*1.7,0);r.rotation.y=Math.PI/4,r.scale.z=.75,bt(n,10377540,0,4.8+s*1.7,0,7-s*2,1,4-s)}}function dl(i){const e=new ht,t=[6583118,9203019,5461103][i],n=[6787941,10190929,6450567][i];bt(e,t,0,-1.2,0,65,2.4,90);const s=Rt(new Ti(65,90),n,e,0,.01,0);s.rotation.x=-Math.PI/2;const r=s.material;r.map=fl("grass"),r.roughness=.94,bt(e,11908512,0,.03,0,8,.06,65);for(let h=0;h<24;h++){const f=bt(e,[13026991,12041125,13684148][h%3],h%2?2:-2,.08,29-h*2.6,3.6,.1,2.3);f.rotation.y=Math.sin(h)*.045,f.material.map=fl("stone")}const a=Rt(new Ti(7,85,1,1),2456985,e,-18,.08,-1,{roughness:.16,metalness:.45,emissive:535096,emissiveIntensity:.35});a.rotation.x=-Math.PI/2,a.name="river";const o=new qt({uniforms:{time:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;uniform float time;void main(){float w=sin(vUv.y*220.-time*2.+sin(vUv.x*30.+time)*2.);float foam=pow(max(0.,w),14.);vec3 c=mix(vec3(.015,.24,.34),vec3(.09,.58,.65),vUv.x);gl_FragColor=vec4(c+vec3(.18,.3,.3)*foam,1.);}"});a.material.dispose(),a.material=o;for(let h=0;h<28;h++){const f=Rt(new Zs(.7+h%3*.3),8361356,e,-13.9+Math.sin(h)*.4,.2,39-h*3);f.scale.y=.65}for(const h of[17,-14]){bt(e,11377011,-17,.3,h,10,.5,3);for(const f of[-21,-13])bt(e,7297349,f,1,h,.2,1.5,3.7)}ul(e,0,18),ul(e,0,-18),r0(e,0,-39),ws(e,-5,15),ws(e,5,15),ws(e,-5,-20),ws(e,5,-20);for(let h=0;h<65;h++){const u=(h%2?1:-1)*(9+h*7.31%17),_=-40+h*13.17%80;s0(e,u,_,h%4===0||i===2,.65+h%5*.14)}for(let h=0;h<18;h++)Rt(new ji(3+h%5,0),[7443852,6720390,8693659][h%3],e,(h%2?1:-1)*(35+h%4*4),2,-47+h*7).scale.set(1,2+h%3,1.4);for(let h=0;h<110;h++){const f=Math.sin(h*77)*29,u=Math.cos(h*31)*40;if(Math.abs(f)<5||f<-14&&f>-22)continue;const _=Rt(new Nn(.18,.65,3),h%7===0?16046255:7248504,e,f,.25,u);_.rotation.z=Math.sin(h)*.2}for(let h=0;h<6;h++){const f=h*Math.PI/3,u=rn(e,7571583,Math.cos(f)*8,.7,-28+Math.sin(f)*8,.45,.65,1.4);i===2&&(u.scale.y=2)}const l=new ht;l.position.set(0,2.2,-31),e.add(l);const c=Rt(new $s(2,.16,8,48),15123061,l,0,0,0,{emissive:12618552,emissiveIntensity:.5});c.name="gateRing";const d=Rt(new Js(1.84,48),7982266,l,0,0,0,{transparent:!0,opacity:.45,side:It,emissive:6601898,emissiveIntensity:.6});return d.name="gateInside",l.name="portal",e}function nn(i){i.traverse(e=>{var t;e instanceof ct&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):(e.material instanceof wi&&((t=e.material.map)==null||t.dispose()),e.material.dispose()))})}function fl(i){const t=new Uint8Array(16384);for(let s=0;s<64;s++)for(let r=0;r<64;r++){const a=Math.sin(r*127.1+s*311.7)*43758.5453%1,o=Math.sin(r*.35+Math.sin(s*.23)*3),l=i==="grass"?190+a*26+Math.sin(r*.8+s*.4)*9:210+a*15+o*14,c=(s*64+r)*4;t[c]=l,t[c+1]=l+(i==="grass"?9:0),t[c+2]=l-(i==="grass"?15:4),t[c+3]=255}const n=new kl(t,64,64,on);return n.wrapS=n.wrapT=Os,n.repeat.set(i==="grass"?20:2,i==="grass"?28:2),n.magFilter=Ot,n.minFilter=Cn,n.generateMipmaps=!0,n.needsUpdate=!0,n.colorSpace=Gt,n}const vi=[{title:"The Jade Awakening",age:"Young trainees",location:"Jade Monastery",objective:"Defeat the raiders, reclaim the relic, then enter the spirit gate.",boss:"The Iron Warden",palette:11982778,relic:"The Orb of Tides",enemies:7},{title:"Guardians of the Ember",age:"Adult guardians",location:"Ember Highlands",objective:"Break the siege and defeat the Ash Sentinel. Your team has grown.",boss:"The Ash Sentinel",palette:14989472,relic:"The Phoenix Seal",enemies:10},{title:"The Last Showdown",age:"Elemental masters",location:"The Celestial Threshold",objective:"Unite the four elements. Defeat the Eclipse Sovereign.",boss:"The Eclipse Sovereign",palette:11448534,relic:"The Heart of Balance",enemies:12}];function Pa(){return[{name:"Omi",element:"water",color:"#7bdaf3"},{name:"Kimi",element:"fire",color:"#ff9b70"},{name:"Raimundo",element:"wind",color:"#b3df99"},{name:"Clay",element:"earth",color:"#f3cf7c"}].map(i=>({...i,hp:100,maxHp:100,power:1,mastery:0,rank:1,upgrades:{power:0,vitality:0,mastery:0}}))}function La(i,e){return 2+i.upgrades[e]}function a0(i,e,t){const n=La(i,e);return t<n||i.upgrades[e]>=4?null:(i.upgrades[e]++,i.rank++,e==="power"&&(i.power+=.35),e==="vitality"&&(i.maxHp+=30,i.hp=Math.min(i.maxHp,i.hp+50)),e==="mastery"&&i.mastery++,t-n)}function o0(i){for(const e of i)e.maxHp+=35,e.hp=e.maxHp,e.power+=.3}function l0(i,e=!1){return(e?36:15)*i.power}function c0(i){return Math.max(3,8-i.mastery)}function pt(i,e){return Math.hypot(i.x-e.x,i.z-e.z)}function Rs(i,e,t){return Math.max(e,Math.min(t,i))}class h0{constructor(e,t){Pe(this,"renderer");Pe(this,"scene",new _h);Pe(this,"camera",new sn(43,1,.1,220));Pe(this,"terrain");Pe(this,"spells",[]);Pe(this,"showcase",0);Pe(this,"team",Pa());Pe(this,"heroes",[]);Pe(this,"enemies",[]);Pe(this,"effects",[]);Pe(this,"drops",[]);Pe(this,"petals");Pe(this,"keys",new Set);Pe(this,"stick",{x:0,y:0});Pe(this,"heldAttack",!1);Pe(this,"mode","title");Pe(this,"chapter",0);Pe(this,"shards",6);Pe(this,"kills",0);Pe(this,"total",0);Pe(this,"special",0);Pe(this,"dashCD",0);Pe(this,"dashTime",0);Pe(this,"invincible",0);Pe(this,"facing",{x:0,z:-1});Pe(this,"relic",!1);Pe(this,"clock",0);Pe(this,"playTime",0);Pe(this,"message","Four elements. One destiny.");Pe(this,"messageTime",0);Pe(this,"formation","balanced");Pe(this,"muted",!1);Pe(this,"frame",0);Pe(this,"last",0);Pe(this,"notifyTime",0);Pe(this,"sun");Pe(this,"resizeObserver");Pe(this,"disposed",!1);Pe(this,"loop",e=>{if(this.disposed)return;const t=Math.min(.04,Math.max(0,(e-this.last)/1e3));this.last=e,this.clock+=t,this.update(t);for(const o of[...this.spells])o.update(t)||(this.scene.remove(o.group),o.dispose(),this.spells.splice(this.spells.indexOf(o),1));const n=this.terrain.getObjectByName("river");if(n&&n.material instanceof qt&&(n.material.uniforms.time.value=this.clock),this.mode==="title"||this.mode==="studio")for(const o of this.heroes)o.attack=Math.max(0,o.attack-t),Ir(o.object,this.clock+o.index,!1,o.attack,!1);for(const o of[...this.effects]){if(o.life-=t,o.life<=0){this.scene.remove(o.object),nn(o.object),this.effects.splice(this.effects.indexOf(o),1);continue}o.object.position.addScaledVector(o.velocity,t),o.grow&&o.object.scale.multiplyScalar(1+t*3);const l=o.object.material;l.opacity=o.life/o.max}const s=this.petals.geometry.attributes.position;for(let o=0;o<s.count;o++){let l=s.getY(o)-t*.45;l<.2&&(l=13),s.setY(o,l),s.setX(o,s.getX(o)+Math.sin(this.clock*.5+o)*t*.1)}s.needsUpdate=!0;const r=this.heroes[0];if(this.mode==="studio"){const o=this.heroes[this.showcase];this.camera.position.lerp(new D(o.x+4,3.8,o.z+7.5),1-Math.exp(-t*5)),this.camera.lookAt(o.x-(this.camera.aspect<.8?0:1.3),this.camera.aspect<.8?-.4:1.45,o.z),o.object.rotation.y=-.1}else if(this.mode==="title")this.camera.position.set(21+Math.sin(this.clock*.08)*4,18,43),this.camera.lookAt(0,1,13);else{const o=new D(r.x+11,15,r.z+19);this.camera.position.lerp(o,1-Math.exp(-t*4)),this.camera.lookAt(r.x,1,r.z-3),this.sun.position.set(r.x-20,35,r.z+15),this.sun.target.position.set(r.x,0,r.z-5)}const a=this.terrain.getObjectByName("gateInside");a&&(a.material.opacity=this.kills===this.total&&this.mode!=="title"?.6+Math.sin(this.clock*2)*.2:.12,a.rotation.z=this.clock*.2),this.renderer.render(this.scene,this.camera),this.notifyTime+=t,this.notifyTime>.12&&(this.notifyTime=0,this.emit()),this.frame=requestAnimationFrame(this.loop)});this.container=e,this.onChange=t,this.renderer=new Ym({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=pl,this.renderer.outputColorSpace=Gt,this.renderer.toneMapping=Da,this.renderer.toneMappingExposure=1.05,e.appendChild(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-label","3D adventure arena"),this.scene.background=new He(11982778),this.scene.fog=new Vs(11982778,.008),this.scene.add(new Kh(13100031,3428156,1.3)),this.sun=new $h(16768944,3.4),this.sun.position.set(-20,35,15),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:100}),this.sun.shadow.camera.updateProjectionMatrix(),this.sun.shadow.bias=-.001,this.sun.shadow.normalBias=.04,this.scene.add(this.sun),this.scene.add(this.sun.target),this.terrain=dl(0),this.scene.add(this.terrain);const n=new Float32Array(540);for(let r=0;r<180;r++)n[r*3]=Math.random()*70-35,n[r*3+1]=Math.random()*13+1,n[r*3+2]=Math.random()*85-42;const s=new mt;s.setAttribute("position",new _n(n,3)),this.petals=new Ta(s,new Vl({color:16769481,size:.12,transparent:!0,opacity:.7})),this.scene.add(this.petals),this.makeHeroes(),this.camera.position.set(24,19,44),this.camera.lookAt(0,1,12),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.loop(0),this.emit()}makeHeroes(){for(const e of this.heroes)this.scene.remove(e.object),nn(e.object);this.heroes=this.team.map((e,t)=>{const n=hl(t),s=[0,-2.8,2.8,0][t],r=24+(t===0?0:t===3?4:2);return n.position.set(s,0,r),this.scene.add(n),{object:n,x:s,z:r,hp:e.hp,maxHp:e.maxHp,cooldown:0,attack:0,hurt:0,down:0,index:t}})}resize(){const{width:e,height:t}=this.container.getBoundingClientRect();this.renderer.setSize(e,t),this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix()}snapshot(){const e=this.enemies.find(t=>t.boss);return{mode:this.mode,chapter:this.chapter,team:this.team.map(t=>({...t,upgrades:{...t.upgrades}})),shards:this.shards,kills:this.kills,total:this.total,bossHp:(e==null?void 0:e.hp)??0,bossMax:(e==null?void 0:e.maxHp)??1,bossName:vi[this.chapter].boss,special:this.special,dash:this.dashCD,message:this.message,formation:this.formation,time:this.playTime,relic:this.relic,showcase:this.showcase}}emit(){this.onChange(this.snapshot())}toast(e){this.message=e,this.messageTime=5,this.emit()}start(){try{lo()}catch{}this.team=Pa(),this.chapter=0,this.shards=6,this.playTime=0,this.special=0,this.dashCD=0,this.loadChapter(),this.toast("The monastery is under attack. Stay together and recover the relic.")}clearBattle(){for(const e of this.spells)this.scene.remove(e.group),e.dispose();this.spells=[];for(const e of this.enemies)this.scene.remove(e.object,e.warn),nn(e.object),nn(e.warn);this.enemies=[];for(const e of this.effects)this.scene.remove(e.object),nn(e.object);this.effects=[];for(const e of this.drops)this.scene.remove(e.object),nn(e.object);this.drops=[]}loadChapter(){this.clearBattle(),this.scene.remove(this.terrain),nn(this.terrain),this.terrain=dl(this.chapter),this.scene.add(this.terrain),this.scene.background=new He(vi[this.chapter].palette),this.scene.fog=new Vs(vi[this.chapter].palette,.008),this.makeHeroes(),this.kills=0,this.relic=!1,this.special=0,this.dashCD=0,this.invincible=1.5,this.mode="playing",this.releaseControls();const e=vi[this.chapter].enemies;for(let t=0;t<e;t++){const n=10-Math.floor(t/3)*11;this.spawnEnemy((t%3-1)*5+t%2*1.5,n,!1)}this.spawnEnemy(0,-25,!0),this.total=this.enemies.length,this.camera.position.set(14,20,45),this.emit()}spawnEnemy(e,t,n){const s=hl(0,!0,n);s.position.set(e,0,t),this.scene.add(s);const r=n?360+this.chapter*180:58+this.chapter*24,a=new ct(new Xs(.88,1,40),Ca(16148814,{transparent:!0,opacity:0,side:It,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.08,this.scene.add(a),this.enemies.push({object:s,x:e,z:t,hp:r,maxHp:r,cooldown:1.5,attack:0,hurt:0,down:0,index:0,boss:n,charge:0,warn:a,origin:{x:e,z:t},slow:0})}releaseControls(){this.keys.clear(),this.stick={x:0,y:0},this.heldAttack=!1}togglePause(){this.mode==="playing"?(this.mode="paused",this.releaseControls()):this.mode==="paused"&&(this.mode="playing"),this.emit()}openUpgrades(){(this.mode==="playing"||this.mode==="chapter")&&(this.mode="upgrades",this.releaseControls(),this.emit())}closeUpgrades(){this.mode==="upgrades"&&(this.mode=this.relic?"chapter":"playing",this.emit())}upgrade(e,t){const n=a0(this.team[e],t,this.shards);if(n===null)return;this.shards=n;const s=this.heroes[e];s.hp=this.team[e].hp,s.maxHp=this.team[e].maxHp,this.emit()}nextChapter(){if(!(this.mode!=="chapter"&&this.mode!=="upgrades")){if(this.chapter===2){this.mode="victory",this.emit();return}this.chapter++,o0(this.team),this.shards+=6,this.loadChapter(),this.toast(this.chapter===1?"Years of training have passed. Your team returns as adult guardians.":"The four elements awaken. The final showdown begins.")}}setFormation(e){this.formation=e,this.emit()}effect(e,t,n,s=3,r=.45){const a=new ct(new Xs(.8,1,48),Ca(n,{transparent:!0,opacity:.85,side:It,depthWrite:!1,emissive:n,emissiveIntensity:.8}));a.rotation.x=-Math.PI/2,a.position.set(e,.18,t),a.scale.setScalar(s*.4),this.scene.add(a),this.effects.push({object:a,life:r,max:r,velocity:new D,grow:!0})}sparks(e,t,n,s=8){for(let r=0;r<s;r++){const a=Rt(new ji(.1,0),n,this.scene,e,1,t,{emissive:n,emissiveIntensity:.6}),o=Math.random()*Math.PI*2;this.effects.push({object:a,life:.5,max:.5,velocity:new D(Math.cos(o)*4,Math.random()*5,Math.sin(o)*4),grow:!1})}}hitEnemy(e,t,n){if(e.hp<=0)return;const s=e.hp;e.hp=Math.max(0,e.hp-t),e.boss&&s>e.maxHp/2&&e.hp<=e.maxHp/2&&e.hp>0&&this.toast(`${vi[this.chapter].boss} is enraged. Watch the ground and keep moving!`),e.hurt=.2;const r=e.x-n.x,a=e.z-n.z,o=Math.hypot(r,a)||1;if(e.x+=r/o*(e.boss?.15:.5),e.z+=a/o*(e.boss?.15:.5),this.sparks(e.x,e.z,16767377,4),e.hp===0){this.kills++,this.shards+=e.boss?5:1;const l=Rt(new Xa(.3),11396811,this.scene,e.x,.6,e.z,{emissive:6597523,emissiveIntensity:.7});this.drops.push({object:l,x:e.x,z:e.z,value:e.boss?20:6}),this.effect(e.x,e.z,16176523,2),this.scene.remove(e.object,e.warn),nn(e.object),nn(e.warn),e.boss&&(this.toast("The guardian falls. Clear the remaining raiders, then enter the golden gate."),si("level",this.muted)),this.kills===this.total&&this.toast("The relic is restored. Lead Omi into the spirit gate to continue.")}}attack(e=0,t=!1){if(this.mode!=="playing")return;const n=this.heroes[e],s=this.team[e];if(s.hp<=0)return;if(t){if(e===0&&this.special>0)return}else if(n.cooldown>0)return;const r=this.enemies.filter(l=>l.hp>0&&pt(n,l)<(t?7:4.1)),a=r.sort((l,c)=>pt(n,l)-pt(n,c))[0];a&&(n.object.rotation.y=Math.atan2(a.x-n.x,a.z-n.z),e===0&&(this.facing={x:Math.sin(n.object.rotation.y),z:Math.cos(n.object.rotation.y)})),n.cooldown=t?.8:e===0?.42:.8,n.attack=.32,s.color,this.castElement(e,t),e===0&&si(t?"level":"collect",this.muted);const o=l0(s,t)*(e===0?1:this.formation==="assault"?1.2:.8);for(const l of r)if(this.hitEnemy(l,o*(s.element==="fire"&&l.slow>0?1.35:1),n),t&&s.element==="water"&&(l.slow=3+s.mastery*.6),!t&&s.element!=="fire")break;if(t){if(e===0&&(this.special=c0(s),this.invincible=.7,this.heal(0,12+s.mastery*4)),s.element==="wind")for(let l=0;l<4;l++)pt(n,this.heroes[l])<12&&this.heal(l,12+s.mastery*6);if(s.element==="earth")for(const l of this.heroes)pt(l,n)<10&&(l.hurt=-3-s.mastery)}}castElement(e,t){const n=this.heroes[e],s=new Qm(this.team[e].element,t,n.x,n.z,n.object.rotation.y);this.spells.push(s),this.scene.add(s.group)}openStudio(){this.mode==="title"&&(this.mode="studio",this.selectGuardian(0))}selectGuardian(e){if(this.mode==="studio"){for(const t of this.spells)this.scene.remove(t.group),t.dispose();this.spells=[],this.showcase=e;for(const t of this.heroes)t.object.visible=t.index===e,t.index===e&&(t.x=0,t.z=24,t.object.position.set(0,0,24),t.object.rotation.y=0);this.emit()}}previewPower(){if(!(this.mode!=="studio"||this.spells.length>2)){try{lo()}catch{}this.heroes[this.showcase].attack=.55,this.castElement(this.showcase,!0),si("level",this.muted)}}closeStudio(){this.mode==="studio"&&(this.clearBattle(),this.makeHeroes(),this.mode="title",this.emit())}heal(e,t){this.team[e].hp>0&&(this.team[e].hp=Math.min(this.team[e].maxHp,this.team[e].hp+t),this.heroes[e].hp=this.team[e].hp)}dash(){this.mode!=="playing"||this.dashCD>0||(this.dashCD=2.2,this.dashTime=.3,this.invincible=.6,this.effect(this.heroes[0].x,this.heroes[0].z,10216936,2),si("dash",this.muted))}hurtHero(e,t){const n=this.team[e],s=this.heroes[e];if(n.hp<=0||s.hurt>0||e===0&&this.invincible>0)return;const r=this.heroes[3],a=this.team[3].hp>0&&pt(s,r)<7?this.formation==="guard"?.55:.8:1,o=s.hurt<0?.5:1;n.hp=Math.max(0,n.hp-t*a*o),s.hp=n.hp,s.hurt=.55,this.sparks(s.x,s.z,16748149,8),e===0&&(si("hit",this.muted),n.hp<=0&&(this.mode="defeat",this.releaseControls(),this.emit()))}move(e,t,n,s,r){const a=Math.hypot(t,n);if(a<.05)return;const o=e.x,l=e.z;e.x=Rs(e.x+t/a*s*r,-12,12),e.z=Rs(e.z+n/a*s*r,-34,31),e.index===0&&e===this.heroes[0]&&(this.facing={x:t/a,z:n/a}),e.object.rotation.y=Math.atan2(e.x-o,e.z-l)}update(e){if(this.mode!=="playing")return;this.playTime+=e,this.special=Math.max(0,this.special-e),this.dashCD=Math.max(0,this.dashCD-e),this.dashTime=Math.max(0,this.dashTime-e),this.invincible=Math.max(0,this.invincible-e),this.messageTime-=e,this.messageTime<=0&&(this.message="");const t=this.heroes[0];let n=Number(this.keys.has("d")||this.keys.has("ArrowRight"))-Number(this.keys.has("a")||this.keys.has("ArrowLeft"))+this.stick.x,s=Number(this.keys.has("s")||this.keys.has("ArrowDown"))-Number(this.keys.has("w")||this.keys.has("ArrowUp"))+this.stick.y;const r=n*.857+s*.515,a=-n*.515+s*.857;n=r,s=a,this.dashTime>0&&(n=this.facing.x,s=this.facing.z),this.move(t,n,s,this.dashTime>0?23:7.5,e),(this.keys.has("j")||this.heldAttack)&&this.attack();const o=this.enemies.filter(l=>l.hp>0);for(let l=0;l<4;l++){const c=this.heroes[l],d=this.team[l];if(c.cooldown=Math.max(0,c.cooldown-e),c.attack=Math.max(0,c.attack-e),c.hurt>0?c.hurt=Math.max(0,c.hurt-e):c.hurt=Math.min(0,c.hurt+e),d.hp<=0){c.object.rotation.z=Math.PI/2,c.object.position.y=.3,l>0&&pt(t,c)<3.5?(c.down+=e,c.down>3&&(d.hp=d.maxHp*.4,c.hp=d.hp,c.down=0,this.toast(`${d.name} is back in the fight.`))):c.down=0;continue}if(c.object.rotation.z=0,c.object.position.set(c.x,0,c.z),l>0){const h=this.formation==="assault"?15:this.formation==="guard"?7:11,u=o.filter(M=>pt(M,t)<h).sort((M,x)=>pt(M,this.heroes[l])-pt(x,this.heroes[l]))[0],_=[0,-2.7,2.7,0];let b=t.x+_[l],m=t.z+(l===3?3:1.5);if(u&&(b=u.x,m=u.z+(l===2?3:1.5)),Math.hypot(b-c.x,m-c.z)>(u?2.6:1.2)&&this.move(c,b-c.x,m-c.z,7.1,e),u&&pt(c,u)<4&&c.cooldown<=0){const M=Math.floor(this.playTime+l*2)%Math.max(4,9-d.mastery)===0;this.attack(l,M)}if(l===2&&d.mastery>0&&Math.sin(this.playTime*2)>.98)for(let M=0;M<4;M++)pt(c,this.heroes[M])<8&&this.heal(M,e*(3+d.mastery*3));pt(c,t)>22&&(c.x=t.x+_[l],c.z=t.z+2)}Ir(c.object,this.clock+l,l===0?Math.hypot(n,s)>.1:Math.sin(this.clock*3+l)>.1,c.attack,this.chapter>0),c.object.traverse(h=>{h instanceof ct&&h.material instanceof wi&&(h.userData.baseEmissive===void 0&&(h.userData.baseEmissive=h.material.emissive.getHex()),h.material.emissive.set(c.hurt>0?6828578:h.userData.baseEmissive))})}for(const l of o){if(l.hp<=0)continue;if(l.slow>0){l.slow=Math.max(0,l.slow-e),l.object.position.y=.06+Math.sin(this.clock*4)*.04;continue}l.cooldown-=e,l.hurt=Math.max(0,l.hurt-e),l.slow=Math.max(0,l.slow-e);const d=this.heroes.filter(u=>this.team[u.index].hp>0).sort((u,_)=>pt(u,l)-pt(_,l))[0];if(!d)continue;const h=pt(l,d),f=pt(l,t)<(l.boss?19:16)||l.hp<l.maxHp;if(f){if(l.charge>0){l.charge-=e;const u=l.warn.material;if(u.opacity=.35+(Math.sin(this.clock*20)+1)*.2,l.charge<=0){this.effect(l.origin.x,l.origin.z,16745061,l.boss?7:3,.5);for(let _=0;_<4;_++)pt(this.heroes[_],l.origin)<(l.boss?5.7:2.8)&&this.hurtHero(_,(l.boss?25:12)+this.chapter*5);l.cooldown=l.boss?l.hp<l.maxHp/2?1.3:2.2:1.7,u.opacity=0}}else if(h<(l.boss?6:3)&&l.cooldown<=0)l.charge=l.boss?1.15:.7,l.origin={x:d.x,z:d.z},l.warn.position.set(d.x,.1,d.z),l.warn.scale.setScalar(l.boss?5.7:2.8);else if(h>(l.boss?3:1.9)){const u=(l.boss?2.5:3.4)*(l.slow>0?.35:1),_=h||1;l.x=Rs(l.x+(d.x-l.x)/_*u*e,-12,12),l.z=Rs(l.z+(d.z-l.z)/_*u*e,-34,31),l.object.rotation.y=Math.atan2(d.x-l.x,d.z-l.z)}}l.object.position.set(l.x,0,l.z),Ir(l.object,this.clock,f&&l.charge===0,l.charge,this.chapter>0),l.slow>0&&(l.object.position.y=.1+Math.sin(this.clock*5)*.08)}for(const l of[...this.drops])if(l.object.rotation.y+=e,l.object.position.y=.8+Math.sin(this.clock*3)*.15,pt(l,t)<3){for(let c=0;c<4;c++)this.heal(c,l.value);this.scene.remove(l.object),nn(l.object),this.drops.splice(this.drops.indexOf(l),1)}this.kills===this.total&&pt(t,{x:0,z:-31})<3&&(this.relic=!0,this.shards+=5,this.mode=this.chapter===2?"victory":"chapter",this.releaseControls(),si("level",this.muted),this.emit())}dispose(){for(const e of this.spells)e.dispose();this.disposed=!0,cancelAnimationFrame(this.frame),this.resizeObserver.disconnect(),nn(this.scene),this.petals.geometry.dispose(),this.petals.material.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const u0={mode:"title",chapter:0,team:Pa(),shards:6,kills:0,total:8,bossHp:360,bossMax:360,bossName:"The Iron Warden",special:0,dash:0,message:"",formation:"balanced",time:0,relic:!1,showcase:0},Ur=["≋","♨","彡","◇"],Fr={power:{name:"Elemental force",detail:"+35% base attack damage",icon:"✧"},vitality:{name:"Living spirit",detail:"+30 max health · restore 50 HP",icon:"♡"},mastery:{name:"Ancient technique",detail:"Improve your unique elemental gift",icon:"◈"}};function d0(){const i=Sn.useRef(null),e=Sn.useRef(null),[t,n]=Sn.useState(u0),[s,r]=Sn.useState(""),[a,o]=Sn.useState(0),[l,c]=Sn.useState(!1),[d,h]=Sn.useState({x:0,y:0});Sn.useEffect(()=>{let x;try{x=new h0(i.current,n),e.current=x}catch(E){r("Your browser could not start WebGL. Try Chrome, Edge, or Safari with hardware acceleration enabled."),console.error(E);return}const S=E=>{if(E.target.tagName==="BUTTON"&&E.code==="Space")return;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(E.code)&&E.preventDefault();const N=E.key.length===1?E.key.toLowerCase():E.key;x.keys.add(N),!E.repeat&&(E.code==="Space"&&x.dash(),N==="e"&&x.attack(0,!0),(N==="Escape"||N==="p")&&x.togglePause(),N==="u"&&x.openUpgrades(),N==="1"&&x.setFormation("balanced"),N==="2"&&x.setFormation("assault"),N==="3"&&x.setFormation("guard"))},w=E=>{x.keys.delete(E.key),x.keys.delete(E.key.toLowerCase())},T=()=>{x.releaseControls(),h({x:0,y:0}),x.mode==="playing"&&x.togglePause()},g=()=>{document.hidden&&T()};return window.addEventListener("keydown",S),window.addEventListener("keyup",w),window.addEventListener("blur",T),document.addEventListener("visibilitychange",g),()=>{window.removeEventListener("keydown",S),window.removeEventListener("keyup",w),window.removeEventListener("blur",T),document.removeEventListener("visibilitychange",g),x.dispose()}},[]),Sn.useEffect(()=>{e.current&&(e.current.muted=l)},[l]);const f=vi[t.chapter],u=t.mode==="playing",_=t.mode!=="title"&&t.mode!=="studio",b=t.team[a];function m(x){const S=x.currentTarget.getBoundingClientRect(),w=(x.clientX-S.left-S.width/2)/(S.width*.32),T=(x.clientY-S.top-S.height/2)/(S.height*.32),g=Math.max(1,Math.hypot(w,T)),E={x:w/g,y:T/g};h(E),e.current&&(e.current.stick=E)}function p(){h({x:0,y:0}),e.current&&(e.current.stick={x:0,y:0})}function M(){var x,S;document.fullscreenElement?document.exitFullscreen():(S=(x=document.documentElement).requestFullscreen)==null||S.call(x).catch(()=>{})}return I.jsxs("div",{className:"adventure-app",children:[I.jsx("div",{ref:i,className:"world-canvas"}),I.jsx("div",{className:"vignette"}),I.jsxs("header",{className:"topbar",children:[I.jsxs("a",{className:"game-brand",href:"./",children:[I.jsx("span",{className:"brand-seal",children:"四"}),I.jsxs("span",{children:["LEGENDS ",I.jsx("small",{children:"OF THE ELEMENTS"})]})]}),I.jsxs("div",{className:"top-actions",children:[I.jsx("span",{className:"edition",children:"FOUR GUARDIANS · CHARACTER UPDATE"}),I.jsx("button",{onClick:()=>c(!l),"aria-label":l?"Enable sound":"Mute sound",children:l?"♪ OFF":"♪ ON"}),I.jsx("button",{onClick:M,"aria-label":"Toggle fullscreen",children:"⛶"}),_&&I.jsx("button",{onClick:()=>{var x;return(x=e.current)==null?void 0:x.togglePause()},disabled:t.mode!=="playing"&&t.mode!=="paused","aria-label":"Pause adventure",children:"Ⅱ"})]})]}),s?I.jsx("div",{className:"modal-backdrop",children:I.jsxs("div",{className:"dialog",children:[I.jsx("h1",{children:"A little more power."}),I.jsx("p",{children:s}),I.jsx("a",{href:"./arcade.html",children:"Play Lumen Drift instead →"})]})}):null,t.mode==="title"&&!s&&I.jsxs("section",{className:"welcome",children:[I.jsxs("div",{className:"welcome-copy",children:[I.jsxs("div",{className:"chapter-label",children:[I.jsx("span",{})," THE JOURNEY BEGINS WITH FOUR"]}),I.jsxs("h1",{children:["Small heroes.",I.jsx("br",{}),"Ancient powers.",I.jsx("br",{}),I.jsx("em",{children:"One destiny."})]}),I.jsx("p",{children:"Lead Omi and his companions beyond the monastery. Master the elements, shape your team, and grow into the guardians you were meant to become."}),I.jsxs("button",{className:"gold-button begin",onClick:()=>{var x;return(x=e.current)==null?void 0:x.start()},children:["Begin your journey ",I.jsx("span",{children:"→"})]}),I.jsxs("button",{className:"studio-open",onClick:()=>{var x;return(x=e.current)==null?void 0:x.openStudio()},children:["Meet the guardians & preview powers ",I.jsx("span",{children:"◇"})]}),I.jsxs("div",{className:"welcome-features",children:[I.jsx("span",{children:"REAL-TIME 3D COMBAT"}),I.jsx("i",{})," ",I.jsx("span",{children:"AI COMPANIONS"}),I.jsx("i",{})," ",I.jsx("span",{children:"3 CHAPTERS"})]}),I.jsx("a",{className:"arcade-link",href:"./arcade.html",children:"← Visit the Lumen Drift arcade"})]}),I.jsxs("div",{className:"title-chapter",children:[I.jsx("span",{children:"01 / JADE MONASTERY"}),I.jsxs("h2",{children:["Where legends",I.jsx("br",{}),"learn to stand."]}),I.jsx("p",{children:"Every master was once a beginner."})]}),I.jsxs("div",{className:"landing-bottom",children:[I.jsx("span",{children:"WATER · FIRE · WIND · EARTH"}),I.jsxs("span",{children:["PLAY WITH KEYBOARD OR TOUCH ",I.jsx("b",{children:"✧"})]})]})]}),t.mode==="studio"&&I.jsxs("section",{className:"character-studio",style:{"--guardian":dn[t.showcase].color},children:[I.jsxs("div",{className:"studio-copy",children:[I.jsx("button",{className:"studio-back",onClick:()=>{var x;return(x=e.current)==null?void 0:x.closeStudio()},children:"← Back to the monastery"}),I.jsxs("div",{className:"chapter-label",children:["CHARACTER STUDIO / 0",t.showcase+1]}),I.jsxs("h1",{children:[dn[t.showcase].name,I.jsxs("span",{children:[dn[t.showcase].species," · ",dn[t.showcase].element]})]}),I.jsx("h2",{children:dn[t.showcase].title}),I.jsx("p",{children:dn[t.showcase].description}),I.jsx("div",{className:"studio-select",children:dn.map((x,S)=>I.jsxs("button",{"aria-label":`${x.name} ${x.species}`,className:t.showcase===S?"active":"",onClick:()=>{var w;return(w=e.current)==null?void 0:w.selectGuardian(S)},style:{"--guardian":x.color},children:[I.jsx("b",{children:Ur[S]}),I.jsxs("span",{children:[x.name,I.jsx("small",{children:x.species})]})]},x.name))}),I.jsxs("button",{className:"gold-button preview-power",onClick:()=>{var x;return(x=e.current)==null?void 0:x.previewPower()},children:["Unleash ",["Water surge","Ember bloom","Healing tempest","Stone sanctuary"][t.showcase]," ",I.jsx("span",{children:"✧"})]}),I.jsx("small",{className:"studio-note",children:"Live 3D preview · Powers also appear in combat"})]}),I.jsxs("div",{className:"studio-caption",children:[I.jsxs("span",{children:["THE ",dn[t.showcase].element.toUpperCase()," GUARDIAN"]}),I.jsx("p",{children:"Different forms. A shared destiny."})]})]}),_&&I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"mission",children:[I.jsxs("div",{className:"chapter-label",children:["CHAPTER 0",t.chapter+1," ",I.jsx("span",{className:"line"})," ",f.age.toUpperCase()]}),I.jsx("h2",{children:f.title}),I.jsx("p",{children:t.kills===t.total?"✧ Enter the spirit gate at the north end of the path":`Defeat the raiders and their guardian · ${t.kills} / ${t.total}`}),I.jsx("div",{className:"mission-track",children:I.jsx("i",{style:{width:`${t.kills/t.total*100}%`}})})]}),I.jsxs("div",{className:"journey-status",children:[I.jsx("span",{className:"shard-icon",children:"✧"}),I.jsx("strong",{children:t.shards}),I.jsx("small",{children:"SPIRIT SHARDS"}),I.jsxs("button",{onClick:()=>{var x;return(x=e.current)==null?void 0:x.openUpgrades()},disabled:!u&&t.mode!=="chapter",children:["Upgrade team ",I.jsx("kbd",{children:"U"})]})]}),I.jsx("div",{className:"party","aria-label":"Team health",children:t.team.map((x,S)=>I.jsxs("button",{className:`party-card ${S===0?"player-card":""} ${x.hp<=0?"downed":""}`,style:{"--element":x.color},onClick:()=>{var w;o(S),(w=e.current)==null||w.openUpgrades()},disabled:!u&&t.mode!=="chapter",children:[I.jsx("span",{className:"hero-glyph",children:Ur[S]}),I.jsxs("div",{className:"party-info",children:[I.jsxs("div",{children:[I.jsx("strong",{children:x.name}),I.jsx("span",{children:S===0?"YOU":x.hp<=0?"DOWN":"AI"})]}),I.jsx("div",{className:"hp-track",children:I.jsx("i",{style:{width:`${x.hp/x.maxHp*100}%`}})}),I.jsxs("small",{children:[Math.ceil(x.hp)," / ",x.maxHp," ",I.jsxs("span",{children:[x.element.toUpperCase()," · RANK ",x.rank]})]})]})]},x.name))}),u&&t.message&&I.jsx("div",{className:"world-message",children:t.message},t.message),u&&t.bossHp>0&&I.jsxs("div",{className:"boss-meter",children:[I.jsx("span",{children:f.boss.toUpperCase()}),I.jsx("div",{children:I.jsx("i",{style:{width:`${t.bossHp/t.bossMax*100}%`}})})]}),I.jsxs("div",{className:"play-bottom",children:[I.jsxs("div",{className:"formation",children:[I.jsx("span",{children:"TEAM TACTIC"}),I.jsx("div",{children:["balanced","assault","guard"].map((x,S)=>I.jsxs("button",{className:t.formation===x?"chosen":"",onClick:()=>{var w;return(w=e.current)==null?void 0:w.setFormation(x)},children:[I.jsx("kbd",{children:S+1}),x]},x))})]}),I.jsxs("div",{className:"combat-buttons",children:[I.jsxs("button",{className:"ability attack",disabled:!u,onPointerDown:x=>{var S;x.preventDefault(),x.currentTarget.setPointerCapture(x.pointerId),e.current&&(e.current.heldAttack=!0),(S=e.current)==null||S.attack()},onPointerUp:()=>{e.current&&(e.current.heldAttack=!1)},onPointerCancel:()=>{e.current&&(e.current.heldAttack=!1)},children:[I.jsx("span",{children:"✧"}),I.jsx("strong",{children:"Strike"}),I.jsx("kbd",{children:"J"})]}),I.jsxs("button",{className:"ability water",disabled:!u||t.special>0,onClick:()=>{var x;return(x=e.current)==null?void 0:x.attack(0,!0)},children:[I.jsx("span",{children:"≋"}),I.jsx("strong",{children:t.special>0?`${t.special.toFixed(1)}s`:"Water surge"}),I.jsx("kbd",{children:"E"})]}),I.jsxs("button",{className:"ability dodge",disabled:!u||t.dash>0,onClick:()=>{var x;return(x=e.current)==null?void 0:x.dash()},children:[I.jsx("span",{children:"➶"}),I.jsx("strong",{children:t.dash>0?`${t.dash.toFixed(1)}s`:"Dodge"}),I.jsx("kbd",{children:"SPACE"})]})]})]}),I.jsxs("div",{className:"keyboard-hint",children:[I.jsx("kbd",{children:"W A S D"})," / ",I.jsx("kbd",{children:"↑ ↓ ← →"})," MOVE ",I.jsx("span",{children:"·"})," HOLD ",I.jsx("kbd",{children:"J"})," STRIKE ",I.jsx("span",{children:"·"})," ",I.jsx("kbd",{children:"P"})," PAUSE ",I.jsx("span",{children:"·"})," STAND NEAR FALLEN ALLIES TO REVIVE"]}),u&&I.jsx("div",{className:"joystick","aria-label":"Touch movement control",onPointerDown:x=>{x.currentTarget.setPointerCapture(x.pointerId),m(x)},onPointerMove:x=>{x.buttons&&m(x)},onPointerUp:p,onPointerCancel:p,children:I.jsx("span",{style:{transform:`translate(${d.x*26}px,${d.y*26}px)`}})})]}),t.mode==="upgrades"&&I.jsx("div",{className:"modal-backdrop",children:I.jsxs("section",{className:"upgrade-dialog dialog",children:[I.jsxs("div",{className:"dialog-header",children:[I.jsxs("div",{children:[I.jsx("div",{className:"chapter-label",children:"THE FOUR GROW AS ONE"}),I.jsx("h2",{children:"Shape your guardians."})]}),I.jsx("button",{className:"close","aria-label":"Close upgrades",onClick:()=>{var x;return(x=e.current)==null?void 0:x.closeUpgrades()},children:"×"})]}),I.jsxs("div",{className:"upgrade-shards",children:["✧ ",t.shards," ",I.jsx("span",{children:"SPIRIT SHARDS AVAILABLE"})]}),I.jsx("div",{className:"hero-tabs",children:t.team.map((x,S)=>I.jsxs("button",{className:a===S?"selected":"",onClick:()=>o(S),style:{"--element":x.color},children:[I.jsx("span",{children:Ur[S]}),x.name,I.jsxs("small",{children:[dn[S].species," · ",x.element]})]},x.name))}),I.jsxs("div",{className:"hero-description",children:[I.jsxs("h3",{children:[b.name," ",I.jsxs("span",{children:["RANK ",b.rank," · ",b.hp<=0?"FALLEN":`${Math.ceil(b.hp)} / ${b.maxHp} HP`]})]}),I.jsx("p",{children:["Water surge freezes nearby enemies and restores Omi’s health. Mastery lowers its cooldown and increases healing.","Fire attacks hit every enemy in range and deal 35% more damage to water-frozen foes. Mastery makes her bursts more frequent.","Wind bursts heal nearby allies. Mastery adds a passive healing breeze and stronger recovery.","Clay protects nearby allies from damage. Mastery increases the duration of his team shield."][a]})]}),I.jsx("div",{className:"upgrade-options",children:["power","vitality","mastery"].map(x=>I.jsxs("button",{disabled:b.upgrades[x]>=4||t.shards<La(b,x),onClick:()=>{var S;return(S=e.current)==null?void 0:S.upgrade(a,x)},children:[I.jsx("span",{className:"upgrade-icon",children:Fr[x].icon}),I.jsxs("div",{children:[I.jsx("strong",{children:Fr[x].name}),I.jsx("small",{children:Fr[x].detail}),I.jsxs("span",{className:"pips",children:["●".repeat(b.upgrades[x]),"○".repeat(4-b.upgrades[x])]})]}),I.jsx("b",{children:b.upgrades[x]>=4?"MAX":`✧ ${La(b,x)}`})]},x))}),I.jsxs("div",{className:"upgrade-footer",children:[I.jsx("span",{children:"World paused · Upgrades last for this journey"}),I.jsx("button",{className:"gold-button",onClick:()=>{var x;return(x=e.current)==null?void 0:x.closeUpgrades()},children:"Return to the journey →"})]})]})}),t.mode==="paused"&&I.jsx("div",{className:"modal-backdrop",children:I.jsxs("section",{className:"dialog small-dialog",children:[I.jsx("div",{className:"dialog-emblem",children:"☯"}),I.jsx("div",{className:"chapter-label",children:"FIND YOUR BALANCE"}),I.jsx("h2",{children:"A moment of stillness."}),I.jsx("p",{children:"Move with WASD or arrows. Hold J to strike, E to unleash water, and Space to dodge. Stay close to downed allies to revive them."}),I.jsx("button",{className:"gold-button",onClick:()=>{var x;return(x=e.current)==null?void 0:x.togglePause()},children:"Continue the journey →"}),I.jsx("button",{className:"text-button",onClick:()=>{var x,S;(x=e.current)==null||x.togglePause(),(S=e.current)==null||S.openUpgrades()},children:"Manage team upgrades"})]})}),t.mode==="chapter"&&I.jsx("div",{className:"modal-backdrop",children:I.jsxs("section",{className:"dialog chapter-dialog",children:[I.jsx("div",{className:"dialog-emblem",children:"✧"}),I.jsxs("div",{className:"chapter-label",children:["RELIC RECLAIMED · ",f.relic.toUpperCase()]}),I.jsx("h2",{children:t.chapter===0?"The children become guardians.":"The elements become one."}),I.jsx("p",{children:t.chapter===0?"Years of training turn your young team into adult guardians. Health and power increase for everyone. Your upgrade choices carry forward.":"With two relics restored, the team is ready to face the Eclipse Sovereign. Prepare each guardian for the final showdown."}),I.jsxs("div",{className:"chapter-rewards",children:[I.jsx("span",{children:"✧ +5 RELIC SHARDS"}),I.jsx("span",{children:"♡ FULL TEAM RECOVERY NEXT CHAPTER"})]}),I.jsxs("button",{className:"gold-button",onClick:()=>{var x;return(x=e.current)==null?void 0:x.nextChapter()},children:["Enter chapter 0",t.chapter+2," →"]}),I.jsx("button",{className:"text-button",onClick:()=>{var x;return(x=e.current)==null?void 0:x.openUpgrades()},children:"Spend shards & prepare the team"})]})}),t.mode==="defeat"&&I.jsx("div",{className:"modal-backdrop",children:I.jsxs("section",{className:"dialog small-dialog",children:[I.jsx("div",{className:"dialog-emblem",children:"◌"}),I.jsx("div",{className:"chapter-label",children:"EVEN MASTERS MUST BEGIN AGAIN"}),I.jsx("h2",{children:"A lesson, not an ending."}),I.jsx("p",{children:"Omi has fallen. Use water surge to heal, dodge the red warning circles, and keep Clay nearby for protection."}),I.jsx("button",{className:"gold-button",onClick:()=>{var x;return(x=e.current)==null?void 0:x.start()},children:"Begin a new journey →"}),I.jsx("p",{className:"fine-print",children:"A new journey resets your team and shards."})]})}),t.mode==="victory"&&I.jsx("div",{className:"modal-backdrop",children:I.jsxs("section",{className:"dialog chapter-dialog",children:[I.jsx("div",{className:"dialog-emblem",children:"☯"}),I.jsx("div",{className:"chapter-label",children:"THREE CHAPTERS · FOUR GUARDIANS · ONE DESTINY"}),I.jsx("h2",{children:"Balance is restored."}),I.jsx("p",{children:"From monastery children to elemental masters. Omi, Kimi, Raimundo, and Clay have reclaimed all three relics and defeated the Eclipse Sovereign."}),I.jsxs("div",{className:"chapter-rewards",children:[I.jsxs("span",{children:[Math.floor(t.time/60),"m ",Math.floor(t.time%60),"s JOURNEY"]}),I.jsxs("span",{children:["TEAM RANK ",t.team.reduce((x,S)=>x+S.rank,0)]})]}),I.jsx("button",{className:"gold-button",onClick:()=>{var x;return(x=e.current)==null?void 0:x.start()},children:"Try a different team build →"}),I.jsx("a",{className:"text-button",href:"./arcade.html",children:"Visit Lumen Drift"})]})})]})}_c.createRoot(document.getElementById("root")).render(I.jsx(d0,{}));
