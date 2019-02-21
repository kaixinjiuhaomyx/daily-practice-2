<template>
  <div id="app">

    <c-header></c-header>
    <!-- <c-header>是识别components中的CHeader 要大写要加杠
          因为html是不分大小写的 而js是分大小写的-->
          <div id="content">
            <h2>电影</h2>
            <h2>电影</h2>
            <h2>电影</h2>
            <h2>电影</h2>
          </div>
          
          
    <c-footer></c-footer>
    <router-view/>
  </div>
</template>

<script>
import CHeader from '@/components/CHeader'
import CFooter from '@/components/CFooter'

export default {
  components:{
    CHeader,
    CFooter
    
  }
}
</script>

<style>
 #content{
   margin-top:1rem;
 }
</style>
