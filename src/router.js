// ! Router
//	Defines available routes and views


// Imports
import Vue from "vue";
import Router from "vue-router";
import store from "@/store/store";
import { routes } from "./routes.js";



Vue.use(Router);


const router = new Router({
	mode: "history",
	linkExactActiveClass: "is-active",
	base: process.env.VUE_APP_BASE_PATH,
	// Return to top after route change
	scrollBehavior(to, from, savedPostition) {
		if (to.hash) {
			return {
			  selector: to.hash,
			//   behavior: 'smooth',
			};
		}else{
			return { x: 0, y: 0, };
		}
	},
	routes
});

// Scroll up
  router.afterEach((to, from) => {
		document.getElementById("mainScrollView").scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
  });


// Before Each route navigation guards
// Uncomment to use to restrict pages - demo code not working

// router.beforeEach((to, from, next) => {

// 	// Signed in (or not) user
// 	const currentUser = auth.currentUser;
// 	// Meta definitions to check
// 	const routeRequiresUser = to.matched.some(record => record.meta.routeRequiresUser);
// 	// Path
// 	const toPath = to.path;
// 	const fromPath = from.path;

// 	// Pages where authentication is REQUIRED
// 	if (routeRequiresUser && !currentUser) {
// 		// Save clicked url to redirect after login
// 		store.dispatch("Hold/REDIRECT_AFTER_LOGIN", toPath);
// 		next("/");
// 	}
// 	// Else continue to route
// 	else{
// 		next();
// 	}
// });


export default router;
