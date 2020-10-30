import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import fullpage from 'fullpage.js'
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')


new fullpage('#fullpage', {
  licenseKey: 'YOUR KEY HERE',
  autoScrolling:true,
	scrollHorizontally: true,
  sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
});


