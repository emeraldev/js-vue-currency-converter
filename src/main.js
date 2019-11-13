import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Routes from './routes'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import App from './App.vue';
//import store from './store';

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false;


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');
