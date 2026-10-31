export type Platform={x:number;w:number;y:number};
export type Body={x:number;y:number;vx:number;vy:number;grounded:boolean};
export const PLATFORMS:Platform[]=[{x:-8,w:29,y:0},{x:24,w:11,y:1.2},{x:38,w:12,y:.4},{x:53,w:13,y:2},{x:69,w:11,y:1},{x:83,w:24,y:0}];
export function stepBody(b:Body,dt:number,platforms=PLATFORMS){const old=b.y;b.vy-=21*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;b.grounded=false;for(const p of platforms){if(b.vy<=0&&old>=p.y-.05&&b.y<=p.y&&b.x>p.x-.2&&b.x<p.x+p.w+.2){b.y=p.y;b.vy=0;b.grounded=true;break;}}b.x=Math.max(-5,Math.min(104,b.x));}
export function chapterAt(x:number){return x<35?0:x<69?1:2;}
export function approach(n:number,target:number,speed:number){return n<target?Math.min(target,n+speed):Math.max(target,n-speed);}
