

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9gkCzjZT.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Ci4c2pC2.js","_app/immutable/chunks/stores.B86KWltE.js","_app/immutable/chunks/entry.DIVBFO3M.js"];
export const stylesheets = [];
export const fonts = [];
