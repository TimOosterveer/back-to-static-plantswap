import * as server from '../entries/pages/stekjes_overzicht/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/stekjes_overzicht/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/stekjes_overzicht/+page.server.js";
export const imports = ["_app/immutable/nodes/7.fbece26e.js","_app/immutable/chunks/scheduler.4e6a9c3a.js","_app/immutable/chunks/index.f869b299.js","_app/immutable/chunks/TheMaking4.svelte_svelte_type_style_lang.b465946e.js","_app/immutable/chunks/MobileMenu.fb3566d7.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Location.svelte_svelte_type_style_lang.0780ddf0.js","_app/immutable/chunks/vectorplant.9c23bb20.js"];
export const stylesheets = ["_app/immutable/assets/7.0908c524.css","_app/immutable/assets/TheMaking4.2c03a9ec.css","_app/immutable/assets/MobileMenu.b3c9f339.css","_app/immutable/assets/Location.29d5aeee.css"];
export const fonts = [];