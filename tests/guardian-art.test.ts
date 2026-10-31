import {describe,it,expect,vi} from 'vitest';
import * as T from 'three';
import {guardian} from '../src/adventure/characters';
import {ElementalBurst} from '../src/adventure/elemental';
import {disposeTree} from '../src/adventure/art';
describe('guardian visual assets',()=>{
 it('builds distinct articulated human, lizard, dragon, and cat characters',()=>{for(const [i,species] of ['Human','Lizard','Dragon','Cat'].entries()){const g=guardian(i);expect(g.userData.species).toBe(species);expect(g.getObjectByName('head')).toBeDefined();expect(g.getObjectByName('leftArm')).toBeDefined();if(i>0)expect(g.getObjectByName('tail')).toBeDefined();if(i===2){expect(g.getObjectByName('leftWing')).toBeDefined();expect(g.getObjectByName('rightWing')).toBeDefined();}disposeTree(g);}});
 it('keeps all four spell animations finite and disposable',()=>{for(const element of ['water','fire','wind','earth'] as const){const spell=new ElementalBurst(element,true,2,4);expect(spell.update(.6)).toBe(true);spell.group.updateMatrixWorld();spell.group.traverse(o=>{expect(o.matrixWorld.elements.every(Number.isFinite)).toBe(true);});expect(spell.update(3)).toBe(false);const point=spell.group.children.find(o=>o instanceof T.Points) as T.Points;const dispose=vi.spyOn(point.geometry,'dispose');spell.dispose();expect(dispose).toHaveBeenCalledOnce();}});
});
