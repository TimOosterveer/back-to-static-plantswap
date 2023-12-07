import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.df12431a.js","_app/immutable/chunks/scheduler.4e6a9c3a.js","_app/immutable/chunks/index.f869b299.js","_app/immutable/nodes/5.f6227db1.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/MobileMenu.fb3566d7.js"];
export const stylesheets = ["_app/immutable/assets/5.e7e10585.css","_app/immutable/assets/MobileMenu.b3c9f339.css"];
export const fonts = [];
