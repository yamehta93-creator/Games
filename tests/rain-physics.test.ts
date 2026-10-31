import {describe,it,expect} from 'vitest';
import {stepBody,PLATFORMS,chapterAt,type Body} from '../src/rain/physics';
describe('rain shrine platform movement',()=>{
 it('lands on ledges while falling and permits jumping upward through their height',()=>{const b:Body={x:26,y:4,vx:0,vy:-1,grounded:false};for(let i=0;i<100;i++)stepBody(b,1/60);expect(b.y).toBe(1.2);expect(b.grounded).toBe(true);b.vy=10.5;b.grounded=false;stepBody(b,1/60);expect(b.y).toBeGreaterThan(1.2);});
 it('allows every required gap to be crossed at running jump speed',()=>{for(let i=0;i<PLATFORMS.length-1;i++){const a=PLATFORMS[i],next=PLATFORMS[i+1];const b:Body={x:a.x+a.w-.2,y:a.y,vx:5.3,vy:10.5,grounded:false};let landed=false;for(let f=0;f<90;f++){stepBody(b,1/60);if(b.grounded&&b.x>=next.x&&b.x<=next.x+next.w){landed=true;break;}}expect(landed,`gap ${i+1}`).toBe(true);}});
 it('falls into gaps instead of landing on invisible ground',()=>{const b:Body={x:22,y:0,vx:0,vy:0,grounded:false};for(let i=0;i<100;i++)stepBody(b,1/60);expect(b.y).toBeLessThan(-7);});
 it('selects the three journey regions',()=>{expect(chapterAt(10)).toBe(0);expect(chapterAt(45)).toBe(1);expect(chapterAt(90)).toBe(2);});
});
