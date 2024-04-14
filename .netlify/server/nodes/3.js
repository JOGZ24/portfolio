import * as server from '../entries/pages/competences/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/competences/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/competences/+page.server.js";
export const imports = ["_app/immutable/nodes/3.BN-GI8aU.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Ci4c2pC2.js","_app/immutable/chunks/each.YN6LrtWk.js"];
export const stylesheets = ["_app/immutable/assets/3.N04jryue.css"];
export const fonts = [];
