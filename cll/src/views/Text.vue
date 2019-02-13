<template>
    <div>
        text
      <router-link to="/a">A</router-link>|
      <router-link to="/b">B</router-link>
      <!-- 地址变化时用于占位 -->
        <router-view/>
 
        
    </div>
    
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>