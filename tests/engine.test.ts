import {describe,it,expect,vi} from 'vitest';
vi.stubGlobal('window',{innerWidth:1000});
import {Game} from '../src/engine';
const create=()=>new Game({} as HTMLCanvasElement,vi.fn(),vi.fn());
describe('game simulation',()=>{
 it('collects crystals, chains points, and advances sector',()=>{const g=create();g.gemTimer=100;for(let i=0;i<4;i++){g.gems=[{...g.player,vx:0,vy:0,spin:0}];g.update(.01);}expect(g.stats.score).toBe(500);expect(g.stats.combo).toBe(4);expect(g.stats.level).toBe(2);});
 it('resets the chain after a pickup gap',()=>{const g=create();g.stats.combo=4;g.comboTime=.01;g.update(.02);expect(g.stats.combo).toBe(0);});
 it('applies hit protection and ends after three distinct hits',()=>{const g=create();g.gemTimer=100;for(let i=0;i<3;i++){g.invincible=0;g.hazards=[{...g.player,vx:0,vy:0,spin:0}];g.update(.01);if(i===0){g.update(.01);expect(g.stats.lives).toBe(2);}}expect(g.over).toBe(true);expect(g.stats.lives).toBe(0);expect(g.onEnd).toHaveBeenCalledOnce();});
 it('dashes through danger, then recharges',()=>{const g=create();g.invincible=0;g.dash();g.hazards=[{...g.player,vx:0,vy:0,spin:0}];g.update(.01);expect(g.stats.lives).toBe(3);expect(g.stats.dash).toBeGreaterThan(2);g.dash();expect(g.stats.dash).toBeLessThan(2.6);g.hazards=[];g.update(2.7);expect(g.stats.dash).toBe(0);});
 it('freezes simulation while paused',()=>{const g=create();g.paused=true;g.keys.add('d');g.update(1);expect(g.player.x).toBe(500);expect(g.stats.time).toBe(0);});
});
