<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- <MyPage></MyPage> -->
    <!-- <SignUp></SignUp> -->
    <!-- <Login></Login>  -->
    <!-- <Content></Content> -->
    <!--  <About></About> -->
    <!-- <HobbyStartInfo></HobbyStartInfo> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
