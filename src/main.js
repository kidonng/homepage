import Vue from 'vue'
import galite from 'ga-lite'
import App from './App'
import 'minireset.css'

if (location.pathname !== '/') history.replaceState(null, null, '/')

galite('create', 'UA-140053908-1', 'auto')
galite('send', 'pageview')

new Vue({
  render: h => h(App)
}).$mount('#app')
