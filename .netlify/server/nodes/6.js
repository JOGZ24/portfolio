import * as server from '../entries/pages/projects/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.js";
export const imports = ["_app/immutable/nodes/6.OkWPet9N.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Ci4c2pC2.js","_app/immutable/chunks/each.YN6LrtWk.js"];
export const stylesheets = ["_app/immutable/assets/6.DzgXM7Qi.css"];
export const fonts = [];
