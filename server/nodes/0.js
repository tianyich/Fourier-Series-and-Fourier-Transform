

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BnNsBFvt.js","_app/immutable/chunks/scheduler.B2bXgY5_.js","_app/immutable/chunks/index.CLt6ezP5.js"];
export const stylesheets = [];
export const fonts = [];
