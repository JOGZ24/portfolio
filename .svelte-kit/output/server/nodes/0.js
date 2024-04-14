

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.7sIGX4i4.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Ci4c2pC2.js"];
export const stylesheets = ["_app/immutable/assets/0.Dim-tGLa.css"];
export const fonts = [];
