import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.ef2bb69c.js","_app/immutable/chunks/scheduler.4e6a9c3a.js","_app/immutable/chunks/index.725e2a91.js"];
export const stylesheets = [];
export const fonts = [];
