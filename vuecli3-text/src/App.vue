<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mine">Mine</router-link> |
      <router-link :to="{name:'text1',params:{age:18,name:'Ma'}}">子路由1</router-link> |
      <router-link to='/text2/Yu/17'>子路由2</router-link> |
      <router-link to='/home'>重定向</router-link> |
      <router-link to='/redirect/xue/50'>重定向参数</router-link> |
      <router-link to='/abc'>别名</router-link> |
      <router-link to='/compA'>compA</router-link> |
      <!-- <router-link to='/compB'>compB</router-link> | -->
      <!-- <router-link to='/compC'>compC</router-link> | -->
      <router-link to='/vuex'>Vuex</router-link> |

       <button @click="back">退一</button>
      <button @click="go">进一</button>
      <button @click="home">回家</button>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
      <!-- <button @click="back">退一</button>
      <button @click="go">进一</button>
      <button @click="home">回家</button> -->
  </div>
</template>

<script>
export default {
  name:"app",
  methods:{
    back(){
      this.$router.go(-1);
    },
    go(){
      this.$router.go(1);
    },
    home(){
      this.$router.push('/');
    },
  }
} 
</script>


<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s linear;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  transform: translate(0%)
}
.fade-leave-active{
  transition: transform 1s linear;
}
.fade-leave-to{
  transform: translate(100%)
}

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
</style>
