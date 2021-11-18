import Vue from 'vue'
import App from './App.vue'
import 'buefy/dist/buefy.css'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck, faTimes);

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount('#app')
