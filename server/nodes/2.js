

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.-ldDEO4-.js","_app/immutable/chunks/scheduler.B2bXgY5_.js","_app/immutable/chunks/index.CLt6ezP5.js"];
export const stylesheets = ["_app/immutable/assets/2.DcwmWIZC.css"];
export const fonts = [];
