import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./resources/css/reset.css"
import $ from 'jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import * as echarts from 'echarts'; 

Vue.config.productionTip = false

// 使用 element-ui
Vue.use(ElementUI);

// 使用jq
Vue.prototype.$ = $;

// 使用echarts
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
