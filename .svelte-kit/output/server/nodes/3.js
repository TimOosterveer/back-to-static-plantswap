

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.22cfc540.js","_app/immutable/chunks/scheduler.4e6a9c3a.js","_app/immutable/chunks/index.f869b299.js","_app/immutable/chunks/Location.svelte_svelte_type_style_lang.2d89838f.js","_app/immutable/chunks/MobileMenu.fb3566d7.js"];
export const stylesheets = ["_app/immutable/assets/3.57c7173d.css","_app/immutable/assets/Location.29d5aeee.css","_app/immutable/assets/MobileMenu.b3c9f339.css"];
export const fonts = [];
