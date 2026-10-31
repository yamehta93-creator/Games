import {describe,it,expect} from 'vitest';
import {attackDamage,CHAPTERS,createTeam,growTeam,specialCooldown,upgradeCost,upgradeHero} from '../src/adventure/model';
describe('elemental adventure progression',()=>{
 it('starts four independent heroes with distinct elements',()=>{const t=createTeam();expect(t.map(h=>h.element)).toEqual(['water','fire','wind','earth']);upgradeHero(t[0],'power',6);expect(t[1].power).toBe(1);});
 it('charges shards, increases cost, and rejects unaffordable purchases',()=>{const h=createTeam()[0];expect(upgradeHero(h,'power',6)).toBe(4);expect(upgradeCost(h,'power')).toBe(3);expect(upgradeHero(h,'power',2)).toBeNull();expect(h.upgrades.power).toBe(1);expect(attackDamage(h)).toBeGreaterThan(15);});
 it('increases survivability and healing without exceeding max health',()=>{const h=createTeam()[3];h.hp=25;upgradeHero(h,'vitality',6);expect(h.maxHp).toBe(130);expect(h.hp).toBe(75);});
 it('limits upgrades and improves water surge cooldown',()=>{const h=createTeam()[0];for(let i=0;i<4;i++)expect(upgradeHero(h,'mastery',100)).not.toBeNull();expect(upgradeHero(h,'mastery',100)).toBeNull();expect(h.mastery).toBe(4);expect(specialCooldown(h)).toBe(4);});
 it('grows and restores the whole team while retaining upgrades',()=>{const t=createTeam();upgradeHero(t[1],'power',6);t.forEach(h=>h.hp=0);growTeam(t);expect(t.every(h=>h.hp===135)).toBe(true);expect(t[1].power).toBeCloseTo(1.65);expect(t[1].upgrades.power).toBe(1);expect(CHAPTERS).toHaveLength(3);});
});
