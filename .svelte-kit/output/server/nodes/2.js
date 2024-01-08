import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.09f05f65.js","_app/immutable/chunks/scheduler.4e6a9c3a.js","_app/immutable/chunks/index.725e2a91.js","_app/immutable/nodes/5.dd558adb.js","_app/immutable/chunks/MobileMenu.ee6361f7.js"];
export const stylesheets = ["_app/immutable/assets/5.e9a3d970.css","_app/immutable/assets/MobileMenu.b3c9f339.css"];
export const fonts = [];
