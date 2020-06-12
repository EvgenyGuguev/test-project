require('./bootstrap');

import Vue from 'vue';
import router from './router';
import App from "./components/App";

import VModal from 'vue-js-modal';
import Vuelidate from 'vuelidate';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

axios.interceptors.request.use(response => {
    NProgress.start();
    return response;
});

axios.interceptors.response.use(response => {
    NProgress.done();
    return response;
});

Vue.use(VModal);
Vue.use(Vuelidate);


window.Vue = require('vue');

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router
});
