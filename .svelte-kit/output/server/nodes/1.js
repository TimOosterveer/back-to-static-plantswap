

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fb483e42.js","_app/immutable/chunks/scheduler.4e6a9c3a.js","_app/immutable/chunks/index.725e2a91.js","_app/immutable/chunks/singletons.72c53a14.js"];
export const stylesheets = [];
export const fonts = [];
