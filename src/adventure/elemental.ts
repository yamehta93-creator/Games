import * as T from 'three';
import type {Element} from './model';

const COLORS:Record<Element,number>={water:0x59d8ff,fire:0xff792e,wind:0xafffe0,earth:0xd9b46a};
const particleVertex=`
attribute float seed; uniform float time; uniform float progress; uniform float kind; uniform float size; varying float vAlpha; varying float vSeed;
void main(){
 float a=seed*6.2831853; float p=fract(seed*3.17+time*.55); vec3 pos;
 if(kind<.5){float r=(.8+progress*5.8)+sin(seed*81.)*.7;pos=vec3(cos(a+time*.4)*r, .2+sin(p*3.14159)*2.5*(1.-progress*.4),sin(a+time*.4)*r);}
 else if(kind<1.5){float r=(.3+p*2.4)*(.7+progress);pos=vec3(cos(a+time*2.)*r,p*5.5,sin(a+time*2.)*r);}
 else if(kind<2.5){float r=1.+p*3.5;pos=vec3(cos(a+time*3.)*r,p*4.5,sin(a+time*3.)*r);}
 else{float r=1.+seed*4.;pos=vec3(cos(a)*r,sin(p*3.14159)*2.4,sin(a)*r);}
 vec4 mv=modelViewMatrix*vec4(pos,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(size*(150./max(1.,-mv.z))*(.5+sin(seed*51.)*.25),2.,32.);vAlpha=sin(p*3.14159)*(1.-progress*.5);vSeed=seed;
}`;
const particleFragment=`uniform vec3 color; uniform float fade; varying float vAlpha; varying float vSeed;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float glow=pow(1.-d,1.4);gl_FragColor=vec4(mix(color,vec3(1.),glow*.65),glow*vAlpha*fade);}`;
const sheetVertex=`attribute float angle; attribute float height;uniform float progress;uniform float time;varying float vHeight;varying float vAngle;void main(){float r=.55+progress*6.;float curl=sin(height*3.14159)*.7;float wave=sin(angle*5.+time*6.)*.14;vec3 p=vec3(cos(angle)*(r+curl),.15+height*(1.2+sin(angle*3.+time*4.)*.3)*(1.-progress*.35)+wave*height,sin(angle)*(r+curl));vHeight=height;vAngle=angle;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`;
const sheetFragment=`uniform float fade;uniform float time;varying float vHeight;varying float vAngle;void main(){float lines=sin(vAngle*28.+vHeight*15.-time*9.);float foam=smoothstep(.72,.98,vHeight);vec3 color=mix(vec3(.015,.24,.65),vec3(.18,.8,1.),vHeight);color=mix(color,vec3(.85,1.,1.),foam*.9+pow(max(0.,lines),8.)*.25);gl_FragColor=vec4(color,(.4+foam*.48)*fade);}`;

/** Bounded, disposable 3D spell with a shared time-based animation contract. */
export class ElementalBurst {
 group=new T.Group();time=0;duration:number;private materials:T.Material[]=[];private uniforms:{time:{value:number};progress:{value:number};fade:{value:number}}[]=[];private stones:T.Mesh[]=[];private ribbons:T.Mesh[]=[];
 constructor(public element:Element,public special:boolean,x:number,z:number,heading=0){
 this.duration=special?2.15:.62;this.group.position.set(x,0,z);this.group.rotation.y=heading;this.group.userData.element=element;
 const uniforms={time:{value:0},progress:{value:0},fade:{value:1}};this.uniforms.push(uniforms);
 const geo=new T.BufferGeometry();const count=special?210:55;geo.setAttribute('position',new T.BufferAttribute(new Float32Array(count*3),3));geo.setAttribute('seed',new T.BufferAttribute(Float32Array.from({length:count},(_,i)=>i/count),1));
 const pm=new T.ShaderMaterial({vertexShader:particleVertex,fragmentShader:particleFragment,uniforms:{...uniforms,color:{value:new T.Color(COLORS[element])},kind:{value:['water','fire','wind','earth'].indexOf(element)},size:{value:special?4:2.5}},transparent:true,depthWrite:false,blending:T.AdditiveBlending});const particles=new T.Points(geo,pm);particles.frustumCulled=false;this.group.add(particles);this.materials.push(pm);
 if(element==='water')this.water(uniforms);
 if(element==='fire')this.fire();
 if(element==='wind')this.wind();
 if(element==='earth')this.earth();
 if(!special)this.group.scale.setScalar(.47);
 }
 private standard(color:number,opacity=.8){const m=new T.MeshStandardMaterial({color,emissive:color,emissiveIntensity:.7,roughness:.22,metalness:.15,transparent:true,opacity,depthWrite:false,side:T.DoubleSide});this.materials.push(m);return m;}
 private water(uniforms:ElementalBurst['uniforms'][number]){
 const segments=96,rows=8,positions:number[]=[],angles:number[]=[],heights:number[]=[],indices:number[]=[];
 for(let j=0;j<=rows;j++)for(let i=0;i<=segments;i++){positions.push(0,0,0);angles.push(i/segments*Math.PI*2);heights.push(j/rows);if(j<rows&&i<segments){const a=j*(segments+1)+i,b=a+segments+1;indices.push(a,b,a+1,a+1,b,b+1);}}
 const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setAttribute('angle',new T.Float32BufferAttribute(angles,1));geo.setAttribute('height',new T.Float32BufferAttribute(heights,1));geo.setIndex(indices);
 const m=new T.ShaderMaterial({vertexShader:sheetVertex,fragmentShader:sheetFragment,uniforms,transparent:true,side:T.DoubleSide,depthWrite:false});const wave=new T.Mesh(geo,m);wave.frustumCulled=false;this.group.add(wave);this.materials.push(m);
 for(let k=0;k<3;k++){const points:T.Vector3[]=[];for(let i=0;i<=48;i++){const t=i/48,a=t*Math.PI*2+k*Math.PI*2/3,r=.7+t*3.8;points.push(new T.Vector3(Math.cos(a)*r,.55+Math.sin(t*Math.PI)*2.5,Math.sin(a)*r));}const waterMaterial=new T.MeshPhysicalMaterial({color:k===0?0x208cca:0x7bd8ee,roughness:.1,metalness:.12,clearcoat:1,clearcoatRoughness:.08,transparent:true,opacity:.7,depthWrite:false,side:T.DoubleSide});this.materials.push(waterMaterial);const tube=new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points),56,k===0?.17:.1,8,false),waterMaterial);this.ribbons.push(tube);this.group.add(tube);}
 }
 private fire(){const u=this.uniforms[0];for(let k=0;k<9;k++){const flameMaterial=new T.ShaderMaterial({uniforms:{...u,seed:{value:k}},transparent:true,depthWrite:false,side:T.DoubleSide,blending:T.AdditiveBlending,vertexShader:`uniform float time;uniform float seed;varying float h;varying vec3 p;void main(){h=(position.y+1.)*.5;vec3 v=position;float bend=sin(h*7.-time*9.+seed);v.xz*=max(.04,1.-h*.85);v.x+=bend*h*.22;v.z+=cos(h*6.-time*7.+seed)*h*.16;v.y=(position.y+1.)*.85;p=v;gl_Position=projectionMatrix*modelViewMatrix*vec4(v,1.);}`,fragmentShader:`uniform float fade;uniform float time;varying float h;varying vec3 p;void main(){float flicker=.8+.2*sin(p.y*14.-time*12.+p.x*7.);vec3 color=mix(vec3(1.,.76,.14),vec3(1.,.12,.005),h);float alpha=(1.-h)*.68*flicker*fade;gl_FragColor=vec4(color,alpha);}`});this.materials.push(flameMaterial);const flame=new T.Mesh(new T.SphereGeometry(1,20,16),flameMaterial);const angle=k/9*Math.PI*2;flame.position.set(Math.cos(angle)*(k%3?1.8:.6),.6,Math.sin(angle)*(k%3?1.8:.6));flame.scale.set(.5,1.6,.5);flame.userData.seed=k;this.ribbons.push(flame);this.group.add(flame);}const core=new T.Mesh(new T.SphereGeometry(.9,20,14),this.standard(0xffdb8a,.7));core.position.y=.7;this.group.add(core);this.ribbons.push(core);}
 private wind(){for(let k=0;k<4;k++){const points:T.Vector3[]=[];for(let i=0;i<=64;i++){const t=i/64,a=t*Math.PI*3+k*Math.PI/2,r=1.4+Math.sin(t*Math.PI)*2;points.push(new T.Vector3(Math.cos(a)*r,.2+t*4.4,Math.sin(a)*r));}const ribbon=new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points),72,k%2?.035:.065,5,false),this.standard(k%2?0xdbfff2:0x71deb9,.65));this.group.add(ribbon);this.ribbons.push(ribbon);}}
 private earth(){for(let k=0;k<7;k++){const a=k/7*Math.PI*2;const stone=new T.Mesh(new T.DodecahedronGeometry(.7,0),new T.MeshStandardMaterial({color:k%2?0xa78a61:0x746551,roughness:.7,metalness:.15}));stone.position.set(Math.cos(a)*3.2,-1,Math.sin(a)*3.2);stone.scale.set(.8,1.6+(k%3)*.4,.9);stone.rotation.set(.15,k*.7,.1);stone.userData.seed=k;this.stones.push(stone);this.group.add(stone);this.materials.push(stone.material);const vein=new T.Mesh(new T.BoxGeometry(.035,1.5,.04),this.standard(0xffd38b));vein.position.set(.17,.05,.5);stone.add(vein);}
 const shield=new T.Mesh(new T.SphereGeometry(3.5,32,16,0,Math.PI*2,0,Math.PI/2),new T.MeshBasicMaterial({color:0xf6d395,transparent:true,opacity:.075,wireframe:true,depthWrite:false}));this.group.add(shield);this.materials.push(shield.material);
 }
 update(dt:number){this.time+=dt;const p=Math.min(1,this.time/this.duration),fade=Math.min(1,(1-p)*4);for(const u of this.uniforms){u.time.value=this.time;u.progress.value=p;u.fade.value=fade;}
 this.ribbons.forEach((r,i)=>{if(this.element==='water'){r.rotation.y=this.time*(i%2?-.6:.8);r.scale.setScalar(.3+Math.sin(p*Math.PI*.7)*.8);}if(this.element==='wind'){r.rotation.y=this.time*1.8;r.scale.setScalar(.65+Math.sin(p*Math.PI)*.35);}if(this.element==='fire'){const seed=r.userData.seed??i;r.scale.y=1+Math.sin(this.time*12+seed)*.35+(1-p);r.rotation.z=Math.sin(this.time*8+seed)*.18;r.position.y=.6+p*1.7;}});
 this.stones.forEach((s,i)=>{const rise=Math.min(1,this.time*5-i*.05),sink=Math.max(0,(p-.68)/.32);s.position.y=-1+Math.max(0,rise)*1.9-sink*2;s.rotation.y+=dt*.12;});
 for(const m of this.materials)if(!(m instanceof T.ShaderMaterial)&&m.transparent)m.opacity=(m instanceof T.MeshBasicMaterial ? .075 : .78)*fade;
 return p<1;
 }
 dispose(){this.group.traverse(o=>{if(o instanceof T.Mesh||o instanceof T.Points)o.geometry.dispose();});this.materials.forEach(m=>m.dispose());}
}
