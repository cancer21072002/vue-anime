import Vue from "vue";
import VueRouter from "vue-router";

// @ts-ignore
import HomePage from "../views/HomePage.vue";
// @ts-ignore
import Categories from "../views/CategoriesPage.vue";
// @ts-ignore
import AnimeDetails from "../views/AnimeDetails.vue";
// @ts-ignore
import AnimeWatching from "../views/AnimeWatching.vue";
// @ts-ignore
import BlogDetails from "../views/BlogDetails.vue";
// @ts-ignore
import Signup from "../views/Signup.vue";
// @ts-ignore
import Login from "../views/Login.vue";
// @ts-ignore
import Blog from "../views/BlogPage.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: HomePage,
    },
    {
        path: "/categories",
        component: Categories,
    },
    {
        path: "/anime-details",
        component: AnimeDetails,
    },
    {
        path: "/anime-watching",
        component: AnimeWatching,
    },
    {
        path: "/blog-detals",
        component: BlogDetails,
    },
    {
        path: "/signup",
        component: Signup,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/blog",
        component: Blog,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;