export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.KQeX8fuX.js","app":"_app/immutable/entry/app.Cz2gv_pJ.js","imports":["_app/immutable/entry/start.KQeX8fuX.js","_app/immutable/chunks/entry.B5Zwvaoq.js","_app/immutable/chunks/scheduler.B2bXgY5_.js","_app/immutable/entry/app.Cz2gv_pJ.js","_app/immutable/chunks/scheduler.B2bXgY5_.js","_app/immutable/chunks/index.CLt6ezP5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
