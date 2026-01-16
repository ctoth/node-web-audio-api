import * as webaudio from './index.mjs';

// Expose webaudio globally
Object.assign(globalThis, webaudio);
// note that `standardized-audio-context` explicitly relies on window
// cf. https://github.com/chrisguttandin/standardized-audio-context/blob/master/src/factories/window.ts
globalThis.window = {};
Object.assign(globalThis.window, webaudio);
