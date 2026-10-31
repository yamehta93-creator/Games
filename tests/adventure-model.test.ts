import {describe,it,expect} from 'vitest';
import {attackDamage,CHAPTERS,createTeam,growTeam,specialCooldown,upgradeCost,upgradeHero} from '../src/adventure/model';
describe('solo water guardian',()=>{
 it('creates only the human player',()=>{const t=createTeam();expect(t).toHaveLength(1);expect(t[0].name).toBe('Omi');expect(t[0].element).toBe('water');});
 it('charges shards and rejects unaffordable upgrades',()=>{const h=createTeam()[0],before=attackDamage(h);expect(upgradeHero(h,'power',6)).toBe(4);expect(upgradeCost(h,'power')).toBe(3);expect(upgradeHero(h,'power',2)).toBeNull();expect(attackDamage(h)).toBeGreaterThan(before);});
 it('increases health and restores a bounded amount',()=>{const h=createTeam()[0];h.hp=25;upgradeHero(h,'vitality',6);expect(h.maxHp).toBe(170);expect(h.hp).toBe(75);});
 it('caps mastery purchases and lowers cooldown',()=>{const h=createTeam()[0];for(let i=0;i<4;i++)upgradeHero(h,'mastery',100);expect(upgradeHero(h,'mastery',100)).toBeNull();expect(specialCooldown(h)).toBe(4);});
 it('restores the solo hero across three chapters without losing upgrades',()=>{const t=createTeam();upgradeHero(t[0],'power',6);t[0].hp=0;growTeam(t);expect(t[0].hp).toBe(175);expect(t[0].upgrades.power).toBe(1);expect(CHAPTERS).toHaveLength(3);});
});
