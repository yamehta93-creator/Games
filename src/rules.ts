export const WIDTH = 1000, HEIGHT = 650;
export const DASH_COOLDOWN = 2.6;
export function levelFor(score: number) { return Math.min(12, 1 + Math.floor(score / 500)); }
export function spawnInterval(level: number) { return Math.max(.22, .95 - (level - 1) * .065); }
export function collectScore(combo: number) { return 50 * Math.min(5, Math.max(1, combo)); }
export function clamp(value: number, min: number, max: number) { return Math.max(min, Math.min(max, value)); }
export function collides(a: {x:number;y:number;r:number}, b: {x:number;y:number;r:number}) { return Math.hypot(a.x-b.x,a.y-b.y) < a.r+b.r; }
