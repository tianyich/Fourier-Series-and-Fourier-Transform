

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CCr2F43c.js","_app/immutable/chunks/scheduler.B2bXgY5_.js","_app/immutable/chunks/index.CLt6ezP5.js","_app/immutable/chunks/entry.B5Zwvaoq.js"];
export const stylesheets = [];
export const fonts = [];
