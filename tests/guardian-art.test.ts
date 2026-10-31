import {describe,it,expect,vi} from 'vitest';
import * as T from 'three';
import {guardian} from '../src/adventure/characters';
import {ElementalBurst} from '../src/adventure/elemental';
import {disposeTree} from '../src/adventure/art';
describe('guardian visual assets',()=>{
 it('builds an articulated human with a smaller head scale',()=>{const g=guardian(0);expect(g.userData.species).toBe('Human');expect(g.userData.headScale).toBeLessThan(1);expect(g.getObjectByName('head')).toBeDefined();expect(g.getObjectByName('leftArm')).toBeDefined();expect(g.getObjectByName('leftWing')).toBeUndefined();disposeTree(g);});
 it('keeps all four spell animations finite and disposable',()=>{for(const element of ['water','fire','wind','earth'] as const){const spell=new ElementalBurst(element,true,2,4);expect(spell.update(.6)).toBe(true);spell.group.updateMatrixWorld();spell.group.traverse(o=>{expect(o.matrixWorld.elements.every(Number.isFinite)).toBe(true);});expect(spell.update(3)).toBe(false);const point=spell.group.children.find(o=>o instanceof T.Points) as T.Points;const dispose=vi.spyOn(point.geometry,'dispose');spell.dispose();expect(dispose).toHaveBeenCalledOnce();}});
});
