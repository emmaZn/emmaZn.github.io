import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import fullpage from 'fullpage.js'
import 'fullpage.js/dist/fullpage.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


new fullpage('#fullpage', {
  licenseKey: 'YOUR KEY HERE',
  autoScrolling:true,
	scrollHorizontally: true,
	lockAnchors: false,
	anchors: ['firstPage', 'secondPage', 'fourthPage','fifthPage'],
	sectionsColor : ['#144552','#144552','#144552','#144552'],
	menu: '#myMenu',
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['Accueil', 'A propos', 'Compétences', 'Contact'],
	showActiveTooltip: true,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',
	css3:true
});


