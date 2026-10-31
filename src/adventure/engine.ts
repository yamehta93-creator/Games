import * as T from 'three';
import {ElementalBurst} from './elemental';
import {animateCharacter,character,disposeTree,material,mesh,world} from './art';
import {attackDamage,CHAPTERS,clamp,createTeam,distance,growTeam,specialCooldown,upgradeHero,type Hero,type Upgrade} from './model';
import {sound,unlockAudio} from '../audio';
export type Mode='title'|'studio'|'playing'|'paused'|'upgrades'|'chapter'|'defeat'|'victory';
export type Snapshot={mode:Mode;chapter:number;team:Hero[];shards:number;kills:number;total:number;bossHp:number;bossMax:number;bossName:string;special:number;dash:number;message:string;formation:'balanced'|'assault'|'guard';time:number;relic:boolean;showcase:number};
type Actor={object:T.Group;x:number;z:number;hp:number;maxHp:number;cooldown:number;attack:number;hurt:number;down:number;index:number};
type Enemy=Actor&{boss:boolean;charge:number;warn:T.Mesh;origin:{x:number;z:number};slow:number};
type FX={object:T.Object3D;life:number;max:number;velocity:T.Vector3;grow:boolean};
type Drop={object:T.Mesh;x:number;z:number;value:number};
export class Adventure {
 renderer:T.WebGLRenderer; scene=new T.Scene(); camera=new T.PerspectiveCamera(43,1,.1,220); terrain:T.Group;
 spells:ElementalBurst[]=[];showcase=0;
 team=createTeam();heroes:Actor[]=[];enemies:Enemy[]=[];effects:FX[]=[];drops:Drop[]=[];petals:T.Points;
 keys=new Set<string>();stick={x:0,y:0};heldAttack=false;mode:Mode='title';chapter=0;shards=6;kills=0;total=0;special=0;dashCD=0;dashTime=0;invincible=0;facing={x:0,z:-1};relic=false;clock=0;playTime=0;message='Four elements. One destiny.';messageTime=0;formation:Snapshot['formation']='balanced';muted=false;
 frame=0;last=0;notifyTime=0;sun:T.DirectionalLight;resizeObserver:ResizeObserver;disposed=false;
 constructor(public container:HTMLElement,public onChange:(s:Snapshot)=>void){
 this.renderer=new T.WebGLRenderer({antialias:true,powerPreference:'high-performance'});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=T.PCFSoftShadowMap;this.renderer.outputColorSpace=T.SRGBColorSpace;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.05;container.appendChild(this.renderer.domElement);this.renderer.domElement.setAttribute('aria-label','3D adventure arena');
 this.scene.background=new T.Color(0xb6d7ba);this.scene.fog=new T.FogExp2(0xb6d7ba,.008);this.scene.add(new T.HemisphereLight(0xc7e3ff,0x344f3c,1.3));this.sun=new T.DirectionalLight(0xffdfb0,3.4);this.sun.position.set(-20,35,15);this.sun.castShadow=true;this.sun.shadow.mapSize.set(1024,1024);Object.assign(this.sun.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:100});this.sun.shadow.camera.updateProjectionMatrix();this.sun.shadow.bias=-.001;this.sun.shadow.normalBias=.04;this.scene.add(this.sun);this.scene.add(this.sun.target);
 this.terrain=world(0);this.scene.add(this.terrain);
 const positions=new Float32Array(180*3);for(let i=0;i<180;i++){positions[i*3]=Math.random()*70-35;positions[i*3+1]=Math.random()*13+1;positions[i*3+2]=Math.random()*85-42;}
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(positions,3));this.petals=new T.Points(geometry,new T.PointsMaterial({color:0xffe1c9,size:.12,transparent:true,opacity:.7}));this.scene.add(this.petals);
 this.makeHeroes();this.camera.position.set(24,19,44);this.camera.lookAt(0,1,12);
 this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(container);this.resize();this.loop(0);this.emit();
 }
 makeHeroes(){for(const a of this.heroes){this.scene.remove(a.object);disposeTree(a.object);}this.heroes=this.team.map((h,i)=>{const object=character(i);const x=[0,-2.8,2.8,0][i],z=24+(i===0?0:i===3?4:2);object.position.set(x,0,z);this.scene.add(object);return{object,x,z,hp:h.hp,maxHp:h.maxHp,cooldown:0,attack:0,hurt:0,down:0,index:i};});}
 resize(){const {width,height}=this.container.getBoundingClientRect();this.renderer.setSize(width,height);this.camera.aspect=width/Math.max(1,height);this.camera.updateProjectionMatrix();}
 snapshot():Snapshot{const b=this.enemies.find(e=>e.boss);return{mode:this.mode,chapter:this.chapter,team:this.team.map(h=>({...h,upgrades:{...h.upgrades}})),shards:this.shards,kills:this.kills,total:this.total,bossHp:b?.hp??0,bossMax:b?.maxHp??1,bossName:CHAPTERS[this.chapter].boss,special:this.special,dash:this.dashCD,message:this.message,formation:this.formation,time:this.playTime,relic:this.relic,showcase:this.showcase};}
 emit(){this.onChange(this.snapshot());}
 toast(text:string){this.message=text;this.messageTime=5;this.emit();}
 start(){try{unlockAudio();}catch{}this.team=createTeam();this.chapter=0;this.shards=6;this.playTime=0;this.special=0;this.dashCD=0;this.loadChapter();this.toast('The monastery is under attack. Stay together and recover the relic.');}
 clearBattle(){for(const spell of this.spells){this.scene.remove(spell.group);spell.dispose();}this.spells=[];for(const e of this.enemies){this.scene.remove(e.object,e.warn);disposeTree(e.object);disposeTree(e.warn);}this.enemies=[];for(const e of this.effects){this.scene.remove(e.object);disposeTree(e.object);}this.effects=[];for(const d of this.drops){this.scene.remove(d.object);disposeTree(d.object);}this.drops=[];}
 loadChapter(){this.clearBattle();this.scene.remove(this.terrain);disposeTree(this.terrain);this.terrain=world(this.chapter);this.scene.add(this.terrain);this.scene.background=new T.Color(CHAPTERS[this.chapter].palette);this.scene.fog=new T.FogExp2(CHAPTERS[this.chapter].palette,.008);this.makeHeroes();this.kills=0;this.relic=false;this.special=0;this.dashCD=0;this.invincible=1.5;this.mode='playing';this.releaseControls();
 const count=CHAPTERS[this.chapter].enemies;for(let i=0;i<count;i++){const z=10-Math.floor(i/3)*11;this.spawnEnemy((i%3-1)*5+(i%2)*1.5,z,false);}this.spawnEnemy(0,-25,true);this.total=this.enemies.length;this.camera.position.set(14,20,45);this.emit();}
 spawnEnemy(x:number,z:number,boss:boolean){const object=character(0,true,boss);object.position.set(x,0,z);this.scene.add(object);const maxHp=boss?360+this.chapter*180:58+this.chapter*24;const warn=new T.Mesh(new T.RingGeometry(.88,1,40),material(0xf6694e,{transparent:true,opacity:0,side:T.DoubleSide,depthWrite:false}));warn.rotation.x=-Math.PI/2;warn.position.y=.08;this.scene.add(warn);this.enemies.push({object,x,z,hp:maxHp,maxHp,cooldown:1.5,attack:0,hurt:0,down:0,index:0,boss,charge:0,warn,origin:{x,z},slow:0});}
 releaseControls(){this.keys.clear();this.stick={x:0,y:0};this.heldAttack=false;}
 togglePause(){if(this.mode==='playing'){this.mode='paused';this.releaseControls();}else if(this.mode==='paused')this.mode='playing';this.emit();}
 openUpgrades(){if(this.mode==='playing'||this.mode==='chapter'){this.mode='upgrades';this.releaseControls();this.emit();}}
 closeUpgrades(){if(this.mode==='upgrades'){this.mode=this.relic?'chapter':'playing';this.emit();}}
 upgrade(index:number,key:Upgrade){const value=upgradeHero(this.team[index],key,this.shards);if(value===null)return;this.shards=value;const a=this.heroes[index];a.hp=this.team[index].hp;a.maxHp=this.team[index].maxHp;this.emit();}
 nextChapter(){if(this.mode!=='chapter'&&this.mode!=='upgrades')return;if(this.chapter===2){this.mode='victory';this.emit();return;}this.chapter++;growTeam(this.team);this.shards+=6;this.loadChapter();this.toast(this.chapter===1?'Years of training have passed. Your team returns as adult guardians.':'The four elements awaken. The final showdown begins.');}
 setFormation(value:Snapshot['formation']){this.formation=value;this.emit();}
 effect(x:number,z:number,color:T.ColorRepresentation,radius=3,life=.45){const object=new T.Mesh(new T.RingGeometry(.8,1,48),material(color,{transparent:true,opacity:.85,side:T.DoubleSide,depthWrite:false,emissive:color,emissiveIntensity:.8}));object.rotation.x=-Math.PI/2;object.position.set(x,.18,z);object.scale.setScalar(radius*.4);this.scene.add(object);this.effects.push({object,life,max:life,velocity:new T.Vector3(),grow:true});}
 sparks(x:number,z:number,color:T.ColorRepresentation,n=8){for(let i=0;i<n;i++){const object=mesh(new T.IcosahedronGeometry(.1,0),color,this.scene,x,1,z,{emissive:color,emissiveIntensity:.6});const a=Math.random()*Math.PI*2;this.effects.push({object,life:.5,max:.5,velocity:new T.Vector3(Math.cos(a)*4,Math.random()*5,Math.sin(a)*4),grow:false});}}
 hitEnemy(e:Enemy,damage:number,from:Actor){if(e.hp<=0)return;const before=e.hp;e.hp=Math.max(0,e.hp-damage);if(e.boss&&before>e.maxHp/2&&e.hp<=e.maxHp/2&&e.hp>0)this.toast(`${CHAPTERS[this.chapter].boss} is enraged. Watch the ground and keep moving!`);e.hurt=.2;const dx=e.x-from.x,dz=e.z-from.z,l=Math.hypot(dx,dz)||1;e.x+=dx/l*(e.boss?.15:.5);e.z+=dz/l*(e.boss?.15:.5);this.sparks(e.x,e.z,0xffd991,4);
 if(e.hp===0){this.kills++;this.shards+=e.boss?5:1;const drop=mesh(new T.OctahedronGeometry(.3),0xade6cb,this.scene,e.x,.6,e.z,{emissive:0x64ab93,emissiveIntensity:.7});this.drops.push({object:drop,x:e.x,z:e.z,value:e.boss?20:6});this.effect(e.x,e.z,0xf6d58b,2);this.scene.remove(e.object,e.warn);disposeTree(e.object);disposeTree(e.warn);if(e.boss){this.toast('The guardian falls. Clear the remaining raiders, then enter the golden gate.');sound('level',this.muted);}if(this.kills===this.total)this.toast('The relic is restored. Lead Omi into the spirit gate to continue.');}}
 attack(index=0,special=false){if(this.mode!=='playing')return;const actor=this.heroes[index],h=this.team[index];if(h.hp<=0)return;if(special){if(index===0&&this.special>0)return;}else if(actor.cooldown>0)return;
 const enemies=this.enemies.filter(e=>e.hp>0&&distance(actor,e)<(special?7:4.1));const nearest=enemies.sort((a,b)=>distance(actor,a)-distance(actor,b))[0];if(nearest){actor.object.rotation.y=Math.atan2(nearest.x-actor.x,nearest.z-actor.z);if(index===0)this.facing={x:Math.sin(actor.object.rotation.y),z:Math.cos(actor.object.rotation.y)};}
 actor.cooldown=special?.8:index===0?.42:.8;actor.attack=.32;const color=h.color;
 this.castElement(index,special);if(index===0)sound(special?'level':'collect',this.muted);
 const damage=attackDamage(h,special)*(index===0?1:this.formation==='assault'?1.2:.8);
 for(const e of enemies){this.hitEnemy(e,damage*(h.element==='fire'&&e.slow>0?1.35:1),actor);if(special&&h.element==='water')e.slow=3+h.mastery*.6;if(!special&&h.element!=='fire')break;}
 if(special){if(index===0){this.special=specialCooldown(h);this.invincible=.7;this.heal(0,12+h.mastery*4);}if(h.element==='wind')for(let i=0;i<4;i++)if(distance(actor,this.heroes[i])<12)this.heal(i,12+h.mastery*6);if(h.element==='earth')for(const a of this.heroes)if(distance(a,actor)<10)a.hurt=-3-h.mastery;}
 }
 castElement(index:number,special:boolean){const a=this.heroes[index];const spell=new ElementalBurst(this.team[index].element,special,a.x,a.z,a.object.rotation.y);this.spells.push(spell);this.scene.add(spell.group);}
 openStudio(){if(this.mode!=='title')return;this.mode='studio';this.selectGuardian(0);}
 selectGuardian(index:number){if(this.mode!=='studio')return;for(const spell of this.spells){this.scene.remove(spell.group);spell.dispose();}this.spells=[];this.showcase=index;for(const a of this.heroes){a.object.visible=a.index===index;if(a.index===index){a.x=0;a.z=24;a.object.position.set(0,0,24);a.object.rotation.y=0;}}this.emit();}
 previewPower(){if(this.mode!=='studio'||this.spells.length>2)return;try{unlockAudio();}catch{}this.heroes[this.showcase].attack=.55;this.castElement(this.showcase,true);sound('level',this.muted);}
 closeStudio(){if(this.mode!=='studio')return;this.clearBattle();this.makeHeroes();this.mode='title';this.emit();}
 heal(index:number,amount:number){if(this.team[index].hp>0){this.team[index].hp=Math.min(this.team[index].maxHp,this.team[index].hp+amount);this.heroes[index].hp=this.team[index].hp;}}
 dash(){if(this.mode!=='playing'||this.dashCD>0)return;this.dashCD=2.2;this.dashTime=.3;this.invincible=.6;this.effect(this.heroes[0].x,this.heroes[0].z,0x9be5e8,2);sound('dash',this.muted);}
 hurtHero(index:number,amount:number){const h=this.team[index],a=this.heroes[index];if(h.hp<=0||a.hurt>0||index===0&&this.invincible>0)return;const clay=this.heroes[3],protection=this.team[3].hp>0&&distance(a,clay)<7?(this.formation==='guard'?.55:.8):1;const shield=a.hurt<0?.5:1;h.hp=Math.max(0,h.hp-amount*protection*shield);a.hp=h.hp;a.hurt=.55;this.sparks(a.x,a.z,0xff8e75,8);if(index===0){sound('hit',this.muted);if(h.hp<=0){this.mode='defeat';this.releaseControls();this.emit();}}}
 move(a:Actor,dx:number,dz:number,speed:number,dt:number){const len=Math.hypot(dx,dz);if(len<.05)return;const oldX=a.x,oldZ=a.z;a.x=clamp(a.x+dx/len*speed*dt,-12,12);a.z=clamp(a.z+dz/len*speed*dt,-34,31);if(a.index===0&&a===this.heroes[0]){this.facing={x:dx/len,z:dz/len};}a.object.rotation.y=Math.atan2(a.x-oldX,a.z-oldZ);}
 update(dt:number){if(this.mode!=='playing')return;this.playTime+=dt;this.special=Math.max(0,this.special-dt);this.dashCD=Math.max(0,this.dashCD-dt);this.dashTime=Math.max(0,this.dashTime-dt);this.invincible=Math.max(0,this.invincible-dt);this.messageTime-=dt;if(this.messageTime<=0)this.message='';
 const player=this.heroes[0];let dx=Number(this.keys.has('d')||this.keys.has('ArrowRight'))-Number(this.keys.has('a')||this.keys.has('ArrowLeft'))+this.stick.x;let dz=Number(this.keys.has('s')||this.keys.has('ArrowDown'))-Number(this.keys.has('w')||this.keys.has('ArrowUp'))+this.stick.y;
 // The camera is offset diagonally; transform screen directions into world directions.
 const sx=dx*.857+dz*.515,sz=-dx*.515+dz*.857;dx=sx;dz=sz;if(this.dashTime>0){dx=this.facing.x;dz=this.facing.z;}this.move(player,dx,dz,this.dashTime>0?23:7.5,dt);if(this.keys.has('j')||this.heldAttack)this.attack();
 const living=this.enemies.filter(e=>e.hp>0);
 for(let i=0;i<4;i++){const a=this.heroes[i],h=this.team[i];a.cooldown=Math.max(0,a.cooldown-dt);a.attack=Math.max(0,a.attack-dt);if(a.hurt>0)a.hurt=Math.max(0,a.hurt-dt);else a.hurt=Math.min(0,a.hurt+dt);
 if(h.hp<=0){a.object.rotation.z=Math.PI/2;a.object.position.y=.3;if(i>0&&distance(player,a)<3.5){a.down+=dt;if(a.down>3){h.hp=h.maxHp*.4;a.hp=h.hp;a.down=0;this.toast(`${h.name} is back in the fight.`);}}else a.down=0;continue;}
 a.object.rotation.z=0;a.object.position.set(a.x,0,a.z);
 if(i>0){const leash=this.formation==='assault'?15:this.formation==='guard'?7:11;const candidates=living.filter(e=>distance(e,player)<leash);const target=candidates.sort((a,b)=>distance(a,this.heroes[i])-distance(b,this.heroes[i]))[0];const offsets=[0,-2.7,2.7,0];let tx=player.x+offsets[i],tz=player.z+(i===3?3:1.5);if(target){tx=target.x;tz=target.z+(i===2?3:1.5);}const dist=Math.hypot(tx-a.x,tz-a.z);if(dist>(target?2.6:1.2))this.move(a,tx-a.x,tz-a.z,7.1,dt);
 if(target&&distance(a,target)<4&&a.cooldown<=0){const useSpecial=(Math.floor(this.playTime+i*2)%(Math.max(4,9-h.mastery)))===0;this.attack(i,useSpecial);}if(i===2&&h.mastery>0&&Math.sin(this.playTime*2)>0.98)for(let j=0;j<4;j++)if(distance(a,this.heroes[j])<8)this.heal(j,dt*(3+h.mastery*3));
 if(distance(a,player)>22){a.x=player.x+offsets[i];a.z=player.z+2;}
 }
 animateCharacter(a.object,this.clock+i, i===0?Math.hypot(dx,dz)>.1:Math.sin(this.clock*3+i)>.1,a.attack,this.chapter>0);
 a.object.traverse(o=>{if(o instanceof T.Mesh&&o.material instanceof T.MeshStandardMaterial){if(o.userData.baseEmissive===undefined)o.userData.baseEmissive=o.material.emissive.getHex();o.material.emissive.set(a.hurt>0?0x683222:o.userData.baseEmissive);}});
 }
 for(const e of living){if(e.hp<=0)continue;if(e.slow>0){e.slow=Math.max(0,e.slow-dt);e.object.position.y=.06+Math.sin(this.clock*4)*.04;continue;}e.cooldown-=dt;e.hurt=Math.max(0,e.hurt-dt);e.slow=Math.max(0,e.slow-dt);const targets=this.heroes.filter(a=>this.team[a.index].hp>0);const target=targets.sort((a,b)=>distance(a,e)-distance(b,e))[0];if(!target)continue;const dist=distance(e,target),alert=distance(e,player)<(e.boss?19:16)||e.hp<e.maxHp;
 if(alert){if(e.charge>0){e.charge-=dt;const m=e.warn.material as T.MeshStandardMaterial;m.opacity=.35+(Math.sin(this.clock*20)+1)*.2;if(e.charge<=0){this.effect(e.origin.x,e.origin.z,0xff8265,e.boss?7:3,.5);for(let j=0;j<4;j++)if(distance(this.heroes[j],e.origin)<(e.boss?5.7:2.8))this.hurtHero(j,(e.boss?25:12)+this.chapter*5);e.cooldown=e.boss?(e.hp<e.maxHp/2?1.3:2.2):1.7;m.opacity=0;}}
 else if(dist<(e.boss?6:3)&&e.cooldown<=0){e.charge=e.boss?1.15:.7;e.origin={x:target.x,z:target.z};e.warn.position.set(target.x,.1,target.z);e.warn.scale.setScalar(e.boss?5.7:2.8);}
 else if(dist>(e.boss?3:1.9)){const speed=(e.boss?2.5:3.4)*(e.slow>0?.35:1);const l=dist||1;e.x=clamp(e.x+(target.x-e.x)/l*speed*dt,-12,12);e.z=clamp(e.z+(target.z-e.z)/l*speed*dt,-34,31);e.object.rotation.y=Math.atan2(target.x-e.x,target.z-e.z);}}
 e.object.position.set(e.x,0,e.z);animateCharacter(e.object,this.clock,alert&&e.charge===0,e.charge,this.chapter>0);if(e.slow>0)e.object.position.y=.1+Math.sin(this.clock*5)*.08;
 }
 for(const d of [...this.drops]){d.object.rotation.y+=dt;d.object.position.y=.8+Math.sin(this.clock*3)*.15;if(distance(d,player)<3){for(let i=0;i<4;i++)this.heal(i,d.value);this.scene.remove(d.object);disposeTree(d.object);this.drops.splice(this.drops.indexOf(d),1);}}
 if(this.kills===this.total&&distance(player,{x:0,z:-31})<3){this.relic=true;this.shards+=5;this.mode=this.chapter===2?'victory':'chapter';this.releaseControls();sound('level',this.muted);this.emit();}
 }
 loop=(timestamp:number)=>{if(this.disposed)return;const dt=Math.min(.04,Math.max(0,(timestamp-this.last)/1000));this.last=timestamp;this.clock+=dt;this.update(dt);
 for(const spell of [...this.spells]){if(!spell.update(dt)){this.scene.remove(spell.group);spell.dispose();this.spells.splice(this.spells.indexOf(spell),1);}}
 const river=this.terrain.getObjectByName('river') as T.Mesh;if(river&&(river.material instanceof T.ShaderMaterial))river.material.uniforms.time.value=this.clock;
 if(this.mode==='title'||this.mode==='studio')for(const a of this.heroes){a.attack=Math.max(0,a.attack-dt);animateCharacter(a.object,this.clock+a.index,false,a.attack,false);}

 for(const f of [...this.effects]){f.life-=dt;if(f.life<=0){this.scene.remove(f.object);disposeTree(f.object);this.effects.splice(this.effects.indexOf(f),1);continue;}f.object.position.addScaledVector(f.velocity,dt);if(f.grow)f.object.scale.multiplyScalar(1+dt*3);const m=(f.object as T.Mesh).material as T.MeshStandardMaterial;m.opacity=f.life/f.max;}
 const positions=this.petals.geometry.attributes.position;for(let i=0;i<positions.count;i++){let y=positions.getY(i)-dt*.45;if(y<.2)y=13;positions.setY(i,y);positions.setX(i,positions.getX(i)+Math.sin(this.clock*.5+i)*dt*.1);}positions.needsUpdate=true;
 const player=this.heroes[0];if(this.mode==='studio'){const a=this.heroes[this.showcase];this.camera.position.lerp(new T.Vector3(a.x+4,3.8,a.z+7.5),1-Math.exp(-dt*5));this.camera.lookAt(a.x-(this.camera.aspect<.8?0:1.3),this.camera.aspect<.8?-.4:1.45,a.z);a.object.rotation.y=-.1;}else if(this.mode==='title'){this.camera.position.set(21+Math.sin(this.clock*.08)*4,18,43);this.camera.lookAt(0,1,13);}else{const target=new T.Vector3(player.x+11,15,player.z+19);this.camera.position.lerp(target,1-Math.exp(-dt*4));this.camera.lookAt(player.x,1,player.z-3);this.sun.position.set(player.x-20,35,player.z+15);this.sun.target.position.set(player.x,0,player.z-5);}
 const portal=this.terrain.getObjectByName('gateInside') as T.Mesh;if(portal){(portal.material as T.MeshStandardMaterial).opacity=this.kills===this.total&&this.mode!=='title'?.6+Math.sin(this.clock*2)*.2:.12;portal.rotation.z=this.clock*.2;}
 this.renderer.render(this.scene,this.camera);this.notifyTime+=dt;if(this.notifyTime>.12){this.notifyTime=0;this.emit();}this.frame=requestAnimationFrame(this.loop);
 };
 dispose(){for(const spell of this.spells)spell.dispose();this.disposed=true;cancelAnimationFrame(this.frame);this.resizeObserver.disconnect();disposeTree(this.scene);this.petals.geometry.dispose();(this.petals.material as T.Material).dispose();this.renderer.dispose();this.renderer.domElement.remove();}
}
