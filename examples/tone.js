import '../register-global.mjs';
import * as Tone from 'tone';

const latencyHint = process.env.WEB_AUDIO_LATENCY === 'playback' ? 'playback' : 'interactive';
const audioContext = new AudioContext({ latencyHint });
Tone.setContext(audioContext);

const synth = new Tone.Synth().toDestination();
const now = Tone.now();
// trigger the attack immediately
synth.triggerAttack('C4', now);
// wait one second before triggering the release
synth.triggerRelease(now + 1);

await new Promise(resolve => setTimeout(resolve, 1500));
console.log('closing');
await audioContext.close();
