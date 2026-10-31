import {describe,it,expect} from 'vitest';
import {levelFor,spawnInterval,collectScore,collides,clamp} from '../src/rules';
describe('progression and collisions',()=>{
 it('advances at score thresholds and caps difficulty',()=>{expect(levelFor(499)).toBe(1);expect(levelFor(500)).toBe(2);expect(levelFor(100000)).toBe(12);expect(spawnInterval(12)).toBeGreaterThanOrEqual(.22);expect(spawnInterval(6)).toBeLessThan(spawnInterval(1));});
 it('rewards chains without unbounded multipliers',()=>{expect(collectScore(1)).toBe(50);expect(collectScore(3)).toBe(150);expect(collectScore(9)).toBe(250);});
 it('detects overlapping circles but not separated objects',()=>{expect(collides({x:0,y:0,r:10},{x:19,y:0,r:10})).toBe(true);expect(collides({x:0,y:0,r:10},{x:21,y:0,r:10})).toBe(false);});
 it('keeps the ship within the arena',()=>{expect(clamp(-50,18,982)).toBe(18);expect(clamp(1100,18,982)).toBe(982);});
});
