import Vue from 'vue'
import VueCookies from 'vue-cookies';
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import VueAxios from  'vue-axios'
axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials = true;

Vue.use(ElementUI);
Vue.use(VueCookies);
Vue.use(VueAxios,axios)
Vue.config.productionTip = false;
Vue.prototype.$store = store;
new Vue({
  el: '#app',
  router,
  store,
  render: h =>h(App)
})
