<template>
  <div id="app">

    <c-header></c-header>
    <!-- <c-header>是识别components中的CHeader 要大写要加杠
          因为html是不分大小写的 而js是分大小写的-->
    <router-view/>
  </div>
</template>

<script>
import CHeader from '@/components/CHeader'
export default {
  components:{
    CHeader
  }
}
</script>

<style>

</style>
