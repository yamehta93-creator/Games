import {clamp, collectScore, collides, DASH_COOLDOWN, HEIGHT, levelFor, spawnInterval, WIDTH} from './rules';
import {sound} from './audio';
export type Stats={score:number;level:number;lives:number;combo:number;dash:number;time:number};
type Body={x:number;y:number;r:number;vx:number;vy:number;spin:number};
type Particle={x:number;y:number;vx:number;vy:number;life:number;max:number;color:string};
export class Game {
 width=window.innerWidth<700?650:WIDTH; height=window.innerWidth<700?900:HEIGHT;
 stats:Stats={score:0,level:1,lives:3,combo:0,dash:0,time:0};
 player={x:WIDTH/2,y:HEIGHT/2,r:11}; keys=new Set<string>(); target:{x:number;y:number}|null=null;
 hazards:Body[]=[]; gems:Body[]=[];particles:Particle[]=[];trail:{x:number;y:number;life:number}[]=[];
 paused=false;over=false;muted=false;invincible=1.5;dashTime=0;comboTime=0;spawnTimer=0;gemTimer=0;lastDirection={x:0,y:-1};shake=0;
 constructor(public canvas:HTMLCanvasElement,public onUpdate:(stats:Stats)=>void,public onEnd:()=>void) { this.player.x=this.width/2;this.player.y=this.height/2; }
 burst(x:number,y:number,color:string,count=18) {for(let i=0;i<count;i++){const a=Math.random()*Math.PI*2,s=40+Math.random()*190;this.particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:.3+Math.random()*.5,max:.8,color});}}
 dash(){if(this.paused||this.over||this.stats.dash>0)return;this.stats.dash=DASH_COOLDOWN;this.dashTime=.22;this.burst(this.player.x,this.player.y,'#a6fff2');sound('dash',this.muted);}
 spawn(){const side=Math.floor(Math.random()*4);let x=side===0?-30:side===1?this.width+30:Math.random()*this.width,y=side===2?-30:side===3?this.height+30:Math.random()*this.height;
 const angle=Math.atan2(this.player.y-y,this.player.x-x)+(Math.random()-.5)*.5,speed=80+this.stats.level*13+Math.random()*45;
 this.hazards.push({x,y,r:12+Math.random()*10,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,spin:Math.random()*6});}
 update(dt:number){if(this.paused||this.over)return;const s=this.stats;s.time+=dt;s.dash=Math.max(0,s.dash-dt);this.invincible=Math.max(0,this.invincible-dt);this.dashTime=Math.max(0,this.dashTime-dt);this.shake=Math.max(0,this.shake-dt*30);
 this.comboTime-=dt;if(this.comboTime<=0)s.combo=0;
 let dx=Number(this.keys.has('ArrowRight')||this.keys.has('d'))-Number(this.keys.has('ArrowLeft')||this.keys.has('a'));
 let dy=Number(this.keys.has('ArrowDown')||this.keys.has('s'))-Number(this.keys.has('ArrowUp')||this.keys.has('w'));
 if(!dx&&!dy&&this.target){dx=this.target.x-this.player.x;dy=this.target.y-this.player.y;if(Math.hypot(dx,dy)<5){dx=0;dy=0;}}
 const length=Math.hypot(dx,dy);if(length){dx/=length;dy/=length;this.lastDirection={x:dx,y:dy};}
 if(this.dashTime>0){dx=this.lastDirection.x;dy=this.lastDirection.y;}
 const speed=this.dashTime>0?850:260;
 this.player.x=clamp(this.player.x+dx*speed*dt,18,this.width-18);this.player.y=clamp(this.player.y+dy*speed*dt,18,this.height-18);
 this.trail.push({x:this.player.x,y:this.player.y,life:this.dashTime>0?.45:.22});this.trail=this.trail.filter(t=>(t.life-=dt)>0);
 this.spawnTimer-=dt;if(this.spawnTimer<=0){this.spawn();this.spawnTimer=spawnInterval(s.level);}
 this.gemTimer-=dt;if(this.gemTimer<=0&&this.gems.length<7){this.gems.push({x:45+Math.random()*(this.width-90),y:45+Math.random()*(this.height-90),r:10,vx:0,vy:0,spin:Math.random()*6});this.gemTimer=.85;}
 for(const h of this.hazards){h.x+=h.vx*dt;h.y+=h.vy*dt;h.spin+=dt;
 if(collides(this.player,h)&&this.invincible<=0&&this.dashTime<=0){s.lives--;s.combo=0;this.invincible=1.8;this.shake=12;this.burst(this.player.x,this.player.y,'#ff6b8d',30);sound('hit',this.muted);if(s.lives<=0){this.over=true;this.onUpdate({...s});this.onEnd();return;}}}
 this.hazards=this.hazards.filter(h=>h.x>-100&&h.x<this.width+100&&h.y>-100&&h.y<this.height+100);
 this.gems=this.gems.filter(g=>{if(collides({...this.player,r:18},g)){s.combo=Math.min(5,s.combo+1);this.comboTime=3;s.score+=collectScore(s.combo);this.burst(g.x,g.y,'#7bffe1');sound('collect',this.muted);return false;}return true;});
 const level=levelFor(s.score);if(level>s.level){s.level=level;this.burst(this.player.x,this.player.y,'#c9abff',45);sound('level',this.muted);}
 for(const p of this.particles){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vx*=.98;p.vy*=.98;}this.particles=this.particles.filter(p=>p.life>0);
 this.onUpdate({...s});
 }
 draw(clock:number){const ctx=this.canvas.getContext('2d')!;const dpr=Math.min(window.devicePixelRatio||1,2);if(this.canvas.width!==this.width*dpr){this.canvas.width=this.width*dpr;this.canvas.height=this.height*dpr;}ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,this.width,this.height);ctx.save();if(this.shake)ctx.translate((Math.random()-.5)*this.shake,(Math.random()-.5)*this.shake);
 const bg=ctx.createRadialGradient(500,300,20,500,300,650);bg.addColorStop(0,'#122039');bg.addColorStop(1,'#080e20');ctx.fillStyle=bg;ctx.fillRect(0,0,this.width,this.height);
 ctx.strokeStyle='rgba(123,174,220,.045)';ctx.lineWidth=1;for(let x=0;x<this.width;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,this.height);ctx.stroke();}for(let y=0;y<this.height;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(this.width,y);ctx.stroke();}
 for(let i=0;i<65;i++){const x=(Math.sin(i*127.1)*43758.54%1+1)%1*this.width,y=(Math.sin(i*311.7)*9137.11%1+1)%1*this.height;ctx.fillStyle=`rgba(165,205,255,${.15+.15*Math.sin(clock+i)})`;ctx.fillRect(x,y,1.5,1.5);}
 ctx.strokeStyle='#294058';ctx.strokeRect(14,14,this.width-28,this.height-28);
 for(const g of this.gems){ctx.save();ctx.translate(g.x,g.y);ctx.rotate(clock*.8+g.spin);ctx.shadowColor='#72ffdb';ctx.shadowBlur=22;ctx.fillStyle='#8affdf';ctx.beginPath();ctx.moveTo(0,-10);ctx.lineTo(7,0);ctx.lineTo(0,10);ctx.lineTo(-7,0);ctx.closePath();ctx.fill();ctx.shadowBlur=0;ctx.strokeStyle='rgba(130,255,220,.15)';ctx.strokeRect(-17,-17,34,34);ctx.restore();}
 for(const h of this.hazards){ctx.save();ctx.translate(h.x,h.y);ctx.rotate(h.spin);ctx.shadowColor='#ff5479';ctx.shadowBlur=16;ctx.strokeStyle='#ff6487';ctx.fillStyle='#3e1c39';ctx.lineWidth=1.5;ctx.beginPath();for(let i=0;i<6;i++){const a=i*Math.PI/3;const x=Math.cos(a)*h.r,y=Math.sin(a)*h.r;i?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#ff8fa6';ctx.fillRect(-2,-2,4,4);ctx.restore();}
 for(const t of this.trail){ctx.globalAlpha=t.life;ctx.fillStyle='#78ffe5';ctx.beginPath();ctx.arc(t.x,t.y,9*t.life/.4,0,Math.PI*2);ctx.fill();}ctx.globalAlpha=1;
 for(const p of this.particles){ctx.globalAlpha=Math.max(0,p.life/p.max);ctx.fillStyle=p.color;ctx.fillRect(p.x,p.y,3,3);}ctx.globalAlpha=1;
 ctx.save();ctx.translate(this.player.x,this.player.y);if(this.invincible>0&&Math.sin(clock*25)>0)ctx.globalAlpha=.45;ctx.rotate(Math.atan2(this.lastDirection.y,this.lastDirection.x)+Math.PI/2);ctx.shadowBlur=this.dashTime>0?35:20;ctx.shadowColor='#83ffea';ctx.fillStyle='#d4fff6';ctx.strokeStyle='#71ffdc';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,-15);ctx.lineTo(10,10);ctx.lineTo(0,6);ctx.lineTo(-10,10);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.restore();
 }
}
