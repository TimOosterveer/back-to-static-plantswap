export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","style.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.76c53bd5.js","app":"_app/immutable/entry/app.e552de19.js","imports":["_app/immutable/entry/start.76c53bd5.js","_app/immutable/chunks/scheduler.4e6a9c3a.js","_app/immutable/chunks/singletons.72c53a14.js","_app/immutable/entry/app.e552de19.js","_app/immutable/chunks/scheduler.4e6a9c3a.js","_app/immutable/chunks/index.725e2a91.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
