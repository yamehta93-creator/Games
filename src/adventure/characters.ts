import * as T from 'three';

export const GUARDIANS = [{name:'Omi',species:'Human',element:'Water',color:'#81ddff',title:'The way of living water',description:'A human child monk learning to master the tide. Study his water technique here, then test it in the monastery trials.'}] as const;
function mat(color:T.ColorRepresentation,roughness=.48,metalness=0){return new T.MeshStandardMaterial({color,roughness,metalness});}
function add(parent:T.Object3D,geometry:T.BufferGeometry,color:T.ColorRepresentation,x=0,y=0,z=0){const m=new T.Mesh(geometry,mat(color));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function orb(p:T.Object3D,c:T.ColorRepresentation,x:number,y:number,z:number,rx:number,ry=rx,rz=rx){const m=add(p,new T.SphereGeometry(1,24,16),c,x,y,z);m.scale.set(rx,ry,rz);return m;}
function rod(p:T.Object3D,c:T.ColorRepresentation,x:number,y:number,z:number,rt:number,rb:number,h:number){return add(p,new T.CylinderGeometry(rt,rb,h,20),c,x,y,z);}
function line(p:T.Object3D,c:T.ColorRepresentation,points:number[][],radius=.025){return add(p,new T.TubeGeometry(new T.CatmullRomCurve3(points.map(v=>new T.Vector3(...v as [number,number,number]))),24,radius,6,false),c);}
function triangle(p:T.Object3D,c:T.ColorRepresentation,vertices:number[],double=true){const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(vertices,3));g.computeVertexNormals();const m=add(p,g,c);if(double)(m.material as T.MeshStandardMaterial).side=T.DoubleSide;return m;}
function eye(p:T.Object3D,x:number,y:number,z:number,slit:boolean,iris:T.ColorRepresentation){orb(p,0xfff5d9,x,y,z,.145,.17,.07);orb(p,iris,x,y,z+.055,.085,.115,.03);orb(p,0x152c31,x,y,z+.08,slit?.022:.049,.09,.019);orb(p,0xffffff,x-.027,y+.046,z+.1,.022,.028,.012);}
function clothing(body:T.Group,color:number,trim:number,index:number){
 const pts:Array<T.Vector2>=[];for(let i=0;i<15;i++){const t=i/14;pts.push(new T.Vector2(.34+.15*(1-t)+Math.sin(t*Math.PI)*.05,.62+t*.85));}const robe=add(body,new T.LatheGeometry(pts,32),color);robe.name='robe';
 rod(body,trim,0,.77,0,.47,.49,.09);rod(body,0x503d36,0,1.1,0,.43,.43,.11);orb(body,trim,0,1.1,.43,.1,.12,.045);
 line(body,trim,[[-.29,1.48,.25],[-.1,1.3,.41],[.17,1.16,.42]],.035);
 if(index===0){const sash=add(body,new T.BoxGeometry(.19,.57,.045),0xe6a54d,.16,.75,.43);sash.rotation.z=.1;}
 for(const side of [-1,1]){const arm=new T.Group();arm.position.set(side*.46,1.46,0);body.add(arm);arm.name=side<0?'leftArm':'rightArm';orb(arm,color,0,-.11,0,.15,.24,.16);rod(arm,trim,0,-.33,0,.16,.155,.1);const skin=[0xe9b985,0x79a662,0x529f99,0xd69b58][index];orb(arm,skin,0,-.51,.04,.13,.2,.14);rod(arm,index===2?0x315e60:0x5c4b3f,0,-.52,0,.14,.14,.17);orb(arm,skin,0,-.7,.05,.14,.14,.13);
 const leg=new T.Group();leg.name=side<0?'leftLeg':'rightLeg';leg.position.set(side*.21,.6,0);body.add(leg);orb(leg,0x394444,0,-.19,0,.145,.27,.15);orb(leg,index===3?0xdfbc8c:0x333d3c,0,-.48,.12,.18,.16,.31);rod(leg,trim,0,-.31,0,.15,.15,.07);}
}
function wing(body:T.Group,side:number){const rig=new T.Group();rig.name=side<0?'leftWing':'rightWing';rig.position.set(side*.3,1.48,-.2);body.add(rig);
 const v=[[0,0,0],[side*.7,1.5,-.65],[side*1.72,.65,-.45],[side*1.38,-.1,-.24],[side*.83,.12,-.2],[side*.5,-.45,-.08]];
 const vertices:number[]=[];for(let i=1;i<v.length-1;i++)vertices.push(...v[0],...v[i],...v[i+1]);const membrane=triangle(rig,0x6dc9ba,vertices);(membrane.material as T.MeshStandardMaterial).roughness=.32;(membrane.material as T.MeshStandardMaterial).emissive.set(0x103f3a);(membrane.material as T.MeshStandardMaterial).emissiveIntensity=.35;
 line(rig,0x2b746d,[v[0],v[1],v[2],v[3]],.055);for(const i of [2,3,5])line(rig,0xc2d9ad,[v[0],v[i]],.024);}
export function guardian(index:number){const root=new T.Group(),body=new T.Group();root.add(body);root.userData.hero=true;root.userData.species='Human';root.userData.headScale=.72;
 const robes=[0xac3539,0xa9402e,0x294e61,0x716141],trims=[0xe6bb66,0xe8bc61,0xb5dec5,0xd3b16c];clothing(body,robes[index],trims[index],index);
 rod(body,[0xe9b985,0x79a662,0x529f99,0xd69b58][index],0,1.55,0,.14,.17,.2);const head=new T.Group();head.name='head';head.position.set(0,1.8,0);body.add(head);
 if(index===0){
 orb(head,0xd9ad8b,0,.08,0,.38,.48,.32);
 for(const side of [-1,1]){orb(head,0xc89576,side*.37,.015,0,.075,.12,.06);orb(head,0xb78069,side*.395,.025,.02,.027,.066,.025);
 orb(head,0xeee2d0,side*.14,.105,.298,.083,.049,.029);orb(head,0x594735,side*.14,.1,.325,.035,.039,.012);orb(head,0x171e1e,side*.14,.1,.336,.017,.025,.009);orb(head,0xfff5df,side*.128,.113,.345,.007);
 line(head,0x996d54,[[side*.062,.117,.315],[side*.14,.16,.32],[side*.216,.12,.283]],.012);line(head,0x5b4134,[[side*.065,.235,.3],[side*.14,.258,.315],[side*.225,.22,.268]],.018);}
 orb(head,0xd0a17f,0,.02,.313,.043,.105,.046);orb(head,0xc89576,0,-.045,.355,.063,.045,.055);for(const side of [-1,1])orb(head,0x92654e,side*.037,-.06,.374,.015,.009,.008);
 line(head,0x9a665b,[[-.078,-.157,.31],[0,-.15,.335],[.078,-.157,.31]],.009);line(head,0xc08c7b,[[-.068,-.169,.31],[0,-.18,.33],[.068,-.169,.31]],.012);
 for(let i=0;i<6;i++)orb(head,0x94754f,(i%3-1)*.07,.33+Math.floor(i/3)*.075,.255,.014,.017,.008);
 for(let i=0;i<11;i++){const a=i/10*Math.PI;orb(body,i%2?0x704e32:0xa67b47,Math.cos(a)*.3,1.5-Math.sin(a)*.2,.32+Math.sin(a)*.05,.045);}
 }
 if(index===1){orb(head,0x76a665,0,.08,-.02,.45,.47,.43);orb(head,0x8dbb73,0,-.12,.34,.37,.22,.36);orb(head,0xcbd99e,0,-.24,.39,.28,.08,.27);for(const side of [-1,1]){eye(head,side*.23,.19,.31,true,0xe9c05d);orb(head,0x436f45,side*.17,-.06,.65,.035,.025,.015);for(let j=0;j<3;j++)orb(head,0x527e48,side*(.33+j*.02),-.04+j*.13,.29,.055,.04,.03);}
 for(let i=0;i<5;i++){const crest=add(head,new T.ConeGeometry(.11,.3-i*.015,5),0xe0b955,0,.49-i*.08,-.28+i*.09);crest.rotation.x=-.25;}
 line(body,0x6f9c58,[[0,.8,-.25],[.22,.6,-.7],[.52,.42,-1.2],[.6,.57,-1.55],[.37,.74,-1.7]],.145).name='tail';for(let i=0;i<4;i++)orb(body,0xc8b75a,i*.12,.73-i*.045,-.55-i*.23,.065,.12,.065);line(head,0x416f49,[[-.23,-.17,.61],[0,-.2,.67],[.23,-.17,.61]],.012);}
 if(index===2){orb(head,0x4f9b92,0,.08,0,.45,.46,.44);orb(head,0x7cb5a0,0,-.12,.34,.32,.24,.4);orb(head,0xd2dfb2,0,-.25,.37,.25,.09,.28);for(const side of [-1,1]){eye(head,side*.23,.18,.33,true,0xd6c681);orb(head,0x31645c,side*.15,-.02,.7,.03,.025,.014);line(head,0xe3d7ab,[[side*.31,.35,-.08],[side*.46,.6,-.14],[side*.5,.85,-.35]],.075);triangle(head,0x71b9a6,[side*.31,.2,-.1,side*.8,.4,-.33,side*.54,-.14,-.14]);}for(let i=0;i<4;i++){const spike=add(body,new T.ConeGeometry(.1,.32,6),0xdcc987,0,1.9-i*.25,-.42);spike.rotation.x=-.5;}
 wing(body,-1);wing(body,1);line(body,0x4a9b8d,[[0,.75,-.3],[-.25,.45,-.9],[-.6,.55,-1.5],[-.9,.9,-1.7]],.16).name='tail';orb(body,0xd7d590,-.9,.95,-1.7,.18,.1,.24);line(head,0x2a665d,[[-.2,-.16,.65],[0,-.2,.7],[.2,-.16,.65]],.012);}
 if(index===3){orb(head,0xda9f61,0,.1,0,.47,.45,.42);for(const side of [-1,1]){const ear=new T.Group();ear.position.set(side*.32,.38,-.03);head.add(ear);const outer=add(ear,new T.ConeGeometry(.23,.48,3),0xca8d51,0,.13,0);outer.rotation.y=side*.18;triangle(ear,0xe9aaa0,[-.13,.06,.12,.13,.06,.12,0,.36,.08]);eye(head,side*.19,.16,.34,true,0x91bc8b);orb(head,0xf0dabb,side*.15,-.11,.38,.2,.15,.13);for(let j=0;j<3;j++)line(head,0xf4e4c5,[[side*.16,-.11,.49],[side*.43,-.08+j*.06,.43],[side*.68,-.04+j*.09,.33]],.009);for(let j=0;j<2;j++){const stripe=orb(head,0x8d603e,side*.37,.2-j*.14,.23,.11,.025,.04);stripe.rotation.z=side*.3;}}
 orb(head,0xa75c58,0,-.075,.51,.075,.045,.035);line(head,0x795543,[[0,-.1,.5],[0,-.17,.49],[-.08,-.19,.46]],.012);line(head,0x795543,[[0,-.17,.49],[.08,-.19,.46]],.012);for(const x of [-.14,0,.14])orb(head,0x9b673e,x,.43,.18,.027,.14,.055);
 const tail=new T.Group();tail.name='tail';body.add(tail);line(tail,0xd4a16c,[[0,.8,-.22],[.3,.65,-.75],[.65,.9,-1.05],[.7,1.3,-1.1],[.5,1.5,-1]],.14);orb(tail,0xf0d7ae,.5,1.5,-1,.15);}
 const ring=add(root,new T.TorusGeometry(.63,.022,6,40),[0x92e4fa,0xffbb80,0xace6cb,0xe1c58e][index],0,.04,0);ring.rotation.x=-Math.PI/2;ring.castShadow=false;(ring.material as T.MeshStandardMaterial).emissive.copy((ring.material as T.MeshStandardMaterial).color);(ring.material as T.MeshStandardMaterial).emissiveIntensity=.5;
 return root;
}
export function animateGuardianDetails(root:T.Group,time:number,attack:number){const body=root.children[0];for(const name of ['leftWing','rightWing']){const wing=body.getObjectByName(name);if(wing)wing.rotation.y=(name==='leftWing'?1:-1)*(.12+Math.sin(time*2.5)*.16+attack*.6);}const tail=body.getObjectByName('tail');if(tail)tail.rotation.y=Math.sin(time*2)*.12;const head=body.getObjectByName('head');if(head)head.rotation.y=Math.sin(time*.8)*.055;}
