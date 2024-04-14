import * as server from '../entries/pages/formations/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/formations/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/formations/+page.server.js";
export const imports = ["_app/immutable/nodes/5.DknxoLhE.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.Ci4c2pC2.js","_app/immutable/chunks/each.YN6LrtWk.js"];
export const stylesheets = ["_app/immutable/assets/5.DPJ9QwzX.css"];
export const fonts = [];
