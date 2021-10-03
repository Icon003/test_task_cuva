import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Hotel from "../views/Hotel.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/hotel/:id",
		name: "Hotel Page",
		component: Hotel
	}
];

const router = new VueRouter({
	mode: "history",
	base: "/",
	routes
});

export default router;
