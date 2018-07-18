import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import './router/permission'
import icon from './components/icon'
import basicContainer from './components/container'
import './api/mock'
Vue.use(ElementUI)
Vue.component('icon',icon)
Vue.component('basicContainer', basicContainer)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')