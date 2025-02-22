export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","small/DSC01039.jpg","small/DSC01043.jpg","small/IMG_0024.jpg","small/IMG_0028.jpg","small/IMG_0029.jpg","small/IMG_0040-2.jpg","small/IMG_0040.jpg","small/IMG_0074.jpg","small/IMG_0087.jpg","small/IMG_0127.jpg","small/IMG_0138.jpg","small/IMG_0143.jpg","small/IMG_0145.jpg","small/IMG_0153.jpg","small/IMG_0158.jpg","small/IMG_0163.jpg","small/IMG_0205.jpg","small/IMG_0246.jpg","small/IMG_0250.jpg","small/IMG_0252.jpg","small/IMG_0858.jpg","small/IMG_0860.jpg","small/IMG_0862.jpg","small/IMG_0864.jpg","small/IMG_0873-2.jpg","small/IMG_0873.jpg","small/IMG_0920.jpg","small/IMG_0931.jpg","small/IMG_0932.jpg","small/IMG_0950.jpg","small/IMG_0964.jpg","small/IMG_0996.jpg","small/IMG_1004.jpg","small/IMG_1005.jpg","small/IMG_1013.jpg","small/IMG_1014.jpg","small/IMG_1016.jpg","small/IMG_1018.jpg","small/IMG_1025.jpg","small/IMG_1026.jpg","small/IMG_1028.jpg","small/IMG_1033.jpg","small/IMG_1039.jpg","small/IMG_1048.jpg","small/IMG_1077.jpg","small/IMG_1093.jpg","small/IMG_1094.jpg","small/IMG_1095.jpg","small/IMG_1096.jpg","small/IMG_1097.jpg","small/IMG_1098.jpg","small/IMG_1100.jpg","small/IMG_1124.jpg","small/IMG_1165.jpg","small/IMG_1167.jpg","small/IMG_1170.jpg","small/IMG_1182.jpg","small/IMG_1191.jpg","small/IMG_1192.jpg","small/IMG_8946.jpg","small/IMG_9634.jpg","small/IMG_9805.jpg","small/IMG_9807.jpg","small/IMG_9842.jpg","small/IMG_9856.jpg","small/IMG_9857.jpg","small/IMG_9864.jpg","small/IMG_9932.jpg","small/IMG_9937.jpg","small/IMG_9975.jpg","small/IMG_9995.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.s4IdtHc0.js",app:"_app/immutable/entry/app.Eq-McE4E.js",imports:["_app/immutable/entry/start.s4IdtHc0.js","_app/immutable/chunks/A5yv79KA.js","_app/immutable/chunks/D9MaXWBK.js","_app/immutable/chunks/CnG9GFaM.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BjXfs5vT.js","_app/immutable/entry/app.Eq-McE4E.js","_app/immutable/chunks/D9MaXWBK.js","_app/immutable/chunks/l724nrnI.js","_app/immutable/chunks/CoADqiFQ.js","_app/immutable/chunks/DOYvKiX5.js","_app/immutable/chunks/CknbixxF.js","_app/immutable/chunks/CnG9GFaM.js","_app/immutable/chunks/BjXfs5vT.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/about-me",
				pattern: /^\/about-me\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/music",
				pattern: /^\/music\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/photo-video",
				pattern: /^\/photo-video\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/publications",
				pattern: /^\/publications\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/whisky",
				pattern: /^\/whisky\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/whisky/[slug]",
				pattern: /^\/whisky\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
