export type Element = 'water'|'fire'|'wind'|'earth';
export type Upgrade = 'power'|'vitality'|'mastery';
export type Hero = {name:string;element:Element;color:string;hp:number;maxHp:number;power:number;mastery:number;rank:number;upgrades:Record<Upgrade,number>};
export const CHAPTERS = [
 {title:'The Jade Awakening',age:'Young trainees',location:'Jade Monastery',objective:'Defeat the raiders, reclaim the relic, then enter the spirit gate.',boss:'The Iron Warden',palette:0xb6d7ba,relic:'The Orb of Tides',enemies:3},
 {title:'Guardians of the Ember',age:'Adult guardians',location:'Ember Highlands',objective:'Break the siege and defeat the Ash Sentinel. Your team has grown.',boss:'The Ash Sentinel',palette:0xe4b8a0,relic:'The Phoenix Seal',enemies:5},
 {title:'The Last Showdown',age:'Elemental masters',location:'The Celestial Threshold',objective:'Unite the four elements. Defeat the Eclipse Sovereign.',boss:'The Eclipse Sovereign',palette:0xaeb0d6,relic:'The Heart of Balance',enemies:7},
] as const;
export function createTeam():Hero[]{return [{name:'Omi',element:'water',color:'#7bdaf3',hp:140,maxHp:140,power:1.25,mastery:0,rank:1,upgrades:{power:0,vitality:0,mastery:0}}];}
export function upgradeCost(hero:Hero,key:Upgrade){return 2+hero.upgrades[key];}
export function upgradeHero(hero:Hero,key:Upgrade,shards:number):number|null{const cost=upgradeCost(hero,key);if(shards<cost||hero.upgrades[key]>=4)return null;hero.upgrades[key]++;hero.rank++;if(key==='power')hero.power+=.35;if(key==='vitality'){hero.maxHp+=30;hero.hp=Math.min(hero.maxHp,hero.hp+50);}if(key==='mastery')hero.mastery++;return shards-cost;}
export function growTeam(team:Hero[]){for(const h of team){h.maxHp+=35;h.hp=h.maxHp;h.power+=.3;}}
export function attackDamage(hero:Hero,special=false){return (special?36:15)*hero.power;}
export function specialCooldown(hero:Hero){return Math.max(3,8-hero.mastery);}
export function distance(a:{x:number;z:number},b:{x:number;z:number}){return Math.hypot(a.x-b.x,a.z-b.z);}
export function clamp(n:number,min:number,max:number){return Math.max(min,Math.min(max,n));}
