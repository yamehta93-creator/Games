let context: AudioContext | undefined;
export function unlockAudio() { context ??= new AudioContext(); void context.resume(); }
export function sound(kind: 'collect' | 'dash' | 'hit' | 'level', muted: boolean) {
 if (muted || !context) return;
 const now=context.currentTime, osc=context.createOscillator(), gain=context.createGain();
 osc.type=kind==='hit'?'sawtooth':'sine';
 const frequency={collect:740,dash:180,hit:90,level:520}[kind];
 osc.frequency.setValueAtTime(frequency,now);osc.frequency.exponentialRampToValueAtTime(kind==='hit'?30:frequency*2,now+.16);
 gain.gain.setValueAtTime(.065,now);gain.gain.exponentialRampToValueAtTime(.001,now+.22);
 osc.connect(gain);gain.connect(context.destination);osc.start(now);osc.stop(now+.23);
}
