import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Header from './Header.vue'
import Content from './Ui/Main/Content.vue'
import About from './Ui/Main/About.vue'
import HobbyStartInfo from './Ui/Main/HobbyStartInfo.vue'
import Login from './Ui/Form/Login.vue'
import SignUp from './Ui/Form/SignUp.vue'
import MyPage from './Ui/MyPage/Mypage.vue'

Vue.use(VueRouter);

Vue.component("Header", Header);
Vue.component("Content", Content);
Vue.component("About", About);
Vue.component("HobbyStartInfo", HobbyStartInfo);
Vue.component("Login", Login);
Vue.component("SignUp", SignUp);
Vue.component("MyPage", MyPage);


const routes = [
  { path : '', component : Content},
  { path : '/about', component : About},
  { path : '/login', component : Login},
  { path : '/hobbystart', component : HobbyStartInfo},
  { path : '/mypage', component : MyPage},
  { path : '/signup', component : SignUp},
];


const router = new VueRouter({
  routes,
  mode: 'history'
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


