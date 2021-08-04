import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';
import VeeValidate from 'vee-validate';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import msg from './pt_BR';

Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(VeeValidate);
// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VeeValidate,{
  locale: 'pt_BR',
  dictionary:{
    pt_BR: {
      messages: msg
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})