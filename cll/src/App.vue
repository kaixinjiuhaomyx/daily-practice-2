<template>
  <div id="app">
    <button @click="prev()">&lt;</button>
    <button @click="goHome()">首页</button>
<!-- 
  ************************************************
  钩子函数  为敲
 -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- 重定向 -->
      <router-link to="/redirect/mm/12">Redirect</router-link> |
      <!-- <router-link to="/about">About</router-link>| -->
      <!-- <router-link to="/min">Min</router-link>| -->
      <router-link to="/about/xx/5">About</router-link> |
      <!-- params 用来传参  传参时to前要加‘：’-->
      <router-link :to="{name:'mine',params:{name:'zs',id:'001'}}">Min</router-link>|
      <router-link to="/text">Text</router-link>|
      <router-link to="/count">Count</router-link>|
      <router-link to="/k">xxx</router-link>|
      <router-link to="/i">x</router-link>|



    </div>
    
    
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  methods:{
    prev(){
      this.$router.go(-1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* 切换时加动画
   在上边加trasition 起name 
 */
.fade-enter{
  /* opacity: 0; */
  transform: translateX(-100%);
}

.fade-enter-active{
  transition: transform 1s ease;
}

.fade-enter-to{
  /* opacity: 1; */
  transform: translateX(0);
}

.fade-leave{
  opacity: 1;
  /* transform: translateX(0); */
}

.fade-leave-active{
  transition: opacity 2s ease;
}

.fade-leave-to{
  opacity: 0;
  /* transform: translateX(-100%); */
} 
</style>
