import * as server from '../entries/pages/projects/_slug_/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/7.tcRIsTOu.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Ci4c2pC2.js","_app/immutable/chunks/each.YN6LrtWk.js","_app/immutable/chunks/stores.B86KWltE.js","_app/immutable/chunks/entry.DIVBFO3M.js"];
export const stylesheets = ["_app/immutable/assets/7.Dwsy4m9r.css"];
export const fonts = [];
