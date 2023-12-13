import * as server from '../entries/pages/workshops/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/workshops/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/workshops/+page.server.js";
export const imports = ["_app/immutable/nodes/8.c818e508.js","_app/immutable/chunks/scheduler.4e6a9c3a.js","_app/immutable/chunks/index.725e2a91.js","_app/immutable/chunks/TheMaking4.svelte_svelte_type_style_lang.b465946e.js","_app/immutable/chunks/Location.svelte_svelte_type_style_lang.0780ddf0.js","_app/immutable/chunks/vectorplant.9c23bb20.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/MobileMenu.ee6361f7.js"];
export const stylesheets = ["_app/immutable/assets/TheMaking4.2c03a9ec.css","_app/immutable/assets/Location.29d5aeee.css","_app/immutable/assets/MobileMenu.b3c9f339.css"];
export const fonts = [];
