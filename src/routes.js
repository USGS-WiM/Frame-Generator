// routes.js
// Defined routes for Vue router to use

let AppName = process.env.VUE_APP_COMPANY_NAME;


export const routes = [
	// * Default Page
	{
		path: "/",
		name: "home",
		component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue"),
		meta: {
			title: AppName + " — Home",

			sitemap: {
				priority:    1,
				changefreq: "weekly",
			}
		}
	},
	//* Interface
	// Example page for seeing UI Elements
	{
		path: "/interface",
		name: "interface",
		component: () => import(/* webpackChunkName: "interface" */ "./views/other/interface/Interface.vue"),
		meta: {
			title: "Interface Examples — " + AppName,

			// Ignore in sitemap
			sitemap: { ignoreRoute: true }
		}
	},
	// 
	// ! Other Pages
	// 
	// * 404 Page
	{
		path: "/404/",
		name: "error-404",
		component: () => import(/* webpackChunkName: "error-404" */ "./views/other/Error404.vue"),
		meta: {
			title: "404 - Page not Found — " + AppName,

			// Ignore in sitemap
			sitemap: { ignoreRoute: true }
		}
	},
	// 
	// ! Redirect to 404 if route does not exist
	{
		path: "*",
		redirect: "/404/"
	}
];