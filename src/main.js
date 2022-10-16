import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import $ from 'jquery'
import axios from 'axios'
import "@fontsource/libre-caslon-text"; 
import "bootstrap-icons/font/bootstrap-icons.css";
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(axios);
Vue.config.productionTip = false
Vue.use($);
import { createPopper } from '@popperjs/core';
const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');
createPopper(popcorn, tooltip, {
  placement: 'top',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')








