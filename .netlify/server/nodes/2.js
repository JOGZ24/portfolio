

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B00JDX4N.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Ci4c2pC2.js"];
export const stylesheets = ["_app/immutable/assets/2.C1k6nM_z.css"];
export const fonts = [];
