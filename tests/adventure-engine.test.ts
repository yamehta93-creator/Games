import {describe,it,expect,vi} from 'vitest';
import * as T from 'three';
import {Adventure} from '../src/adventure/engine';
import {createTeam} from '../src/adventure/model';
// Run the actual combat/AI state machine without creating a GPU renderer.
function adventure(){const g=Object.create(Adventure.prototype) as Adventure;Object.assign(g,{spells:[],showcase:0,scene:new T.Scene(),camera:new T.PerspectiveCamera(),terrain:new T.Group(),team:createTeam(),heroes:[],enemies:[],effects:[],drops:[],keys:new Set(),stick:{x:0,y:0},heldAttack:false,mode:'title',chapter:0,shards:6,kills:0,total:0,special:0,dashCD:0,dashTime:0,invincible:0,facing:{x:0,z:-1},relic:false,clock:0,playTime:0,message:'',messageTime:0,formation:'balanced',muted:true,onChange:vi.fn()});g.loadChapter();return g;}
describe('3D adventure combat and campaign',()=>{
 it('strikes nearby enemies, spends cooldown, and freezes with water surge',()=>{const g=adventure(),a=g.heroes[0],e=g.enemies[0];a.x=e.x;a.z=e.z+2;const hp=e.hp;g.attack();expect(e.hp).toBeLessThan(hp);const after=e.hp;g.attack();expect(e.hp).toBe(after);g.attack(0,true);expect(e.slow).toBeGreaterThan(0);expect(g.special).toBe(8);});
 it('creates exactly one actor and protects him while dodging',()=>{const g=adventure();expect(g.heroes).toHaveLength(1);g.invincible=0;g.dash();g.hurtHero(0,20);expect(g.team[0].hp).toBe(140);g.invincible=0;g.hurtHero(0,20);expect(g.team[0].hp).toBe(120);});
 it('water surge heals the player without any companion dependencies',()=>{const g=adventure();g.team[0].hp=60;g.attack(0,true);expect(g.team[0].hp).toBe(84);expect(g.spells[0].element).toBe('water');});
 it('finishes all three chapters, grows adults, retains upgrades, and reaches victory',()=>{const g=adventure();g.upgrade(0,'power');for(let stage=0;stage<3;stage++){for(const e of g.enemies){if(e.hp<=0)continue;g.heroes[0].x=e.x;g.heroes[0].z=e.z+1;g.hitEnemy(e,e.hp,g.heroes[0]);}expect(g.kills).toBe(g.total);g.heroes[0].x=0;g.heroes[0].z=-31;g.update(.01);if(stage<2){expect(g.mode).toBe('chapter');g.nextChapter();expect(g.chapter).toBe(stage+1);expect(g.team.every(h=>h.hp===h.maxHp)).toBe(true);expect(g.team[0].upgrades.power).toBe(1);}else expect(g.mode).toBe('victory');}});
 it('halts simulation in menus and recognizes defeat',()=>{const g=adventure();g.mode='upgrades';g.keys.add('w');const z=g.heroes[0].z;g.update(1);expect(g.heroes[0].z).toBe(z);g.mode='playing';g.invincible=0;g.hurtHero(0,1000);expect(g.mode).toBe('defeat');expect(g.team[0].hp).toBe(0);});
});
