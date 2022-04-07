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
		}
	},
	// * Frame Page
	{
		path: "/frame",
		name: "frame",
		component: () => import(/* webpackChunkName: "home" */ "./views/Frame.vue"),
		meta: {
			title: AppName + " — Frame",
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
		}
	},
	// 
	// ! Redirect to 404 if route does not exist
	{
		path: "*",
		redirect: "/404/"
	}
];