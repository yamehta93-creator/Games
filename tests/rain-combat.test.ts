import {describe,it,expect,vi} from 'vitest';
import * as T from 'three';
import {RainGame} from '../src/rain/engine';
function game(){const g=Object.create(RainGame.prototype) as RainGame;const root=new T.Group();for(const name of ['leftLeg','rightLeg','arm']){const p=new T.Group();p.name=name;root.add(p);}Object.assign(g,{scene:new T.Scene(),camera:new T.OrthographicCamera(-15,15,8,-8,.1,60),root,bg:new T.Mesh(),rain:new T.LineSegments(),rainPositions:new T.BufferAttribute(new Float32Array(12),3),gate:new T.Group(),changed:vi.fn(),state:{mode:'play',hp:100,shards:0,wave:0,dash:0,progress:0,chapter:0,boss:240,message:'',power:1},body:{x:3,y:0,vx:0,vy:0,grounded:true},keys:new Set(),axis:0,facing:1,attackHeld:false,attackCD:0,invincible:0,dashTime:0,checkpoint:3,jumpBuffer:0,coyote:.12,time:0,foes:[],spells:[],pickups:[],lights:[],muted:true});return g;}
describe('rainfall combat and recovery',()=>{
 it('wave heals, damages an enemy only once, and respects cooldown',()=>{const g=game();g.spawnFoe(6,0,false);g.state.hp=70;g.strike(true);expect(g.state.hp).toBe(76);g.strike(true);expect(g.spells).toHaveLength(1);g.update(.02);expect(g.foes[0].hp).toBe(14);g.update(.02);expect(g.foes[0].hp).toBe(14);});
 it('recovers from a missed jump at the saved checkpoint with a health cost',()=>{const g=game();g.checkpoint=27;g.body.y=-8;g.update(.02);expect(g.body.x).toBe(27);expect(g.body.y).toBe(1.2);expect(g.state.hp).toBe(78);});
 it('wins only after the boss falls and the player reaches the gate',()=>{const g=game();g.spawnFoe(98,0,true);g.body.x=101;g.invincible=1;g.update(.01);expect(g.state.mode).toBe('play');g.foes[0].hp=0;g.update(.01);expect(g.state.mode).toBe('win');});
 it('recognizes defeat and pauses movement',()=>{const g=game();g.pause();g.keys.add('d');g.update(.1);expect(g.body.x).toBe(3);g.pause();g.hurt(100);expect(g.state.mode).toBe('dead');});
});
