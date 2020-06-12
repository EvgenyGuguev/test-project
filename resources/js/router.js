import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Edit from "./components/Edit";



Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/edit',
            component: Edit
        }
    ]
})
