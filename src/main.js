import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Content from './Ui/Main/Content.vue'
import About from './Ui/Main/About.vue'

Vue.component("Header", Header);
Vue.component("Content", Content);
Vue.component("About", About);


new Vue({
  el: '#app',
  render: h => h(App)
})
