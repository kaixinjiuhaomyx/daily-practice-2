<template>
  <div class="mine">
    <router-link :to="{name:'text1',params:{age:18,name:'Ma'}}">子路由1</router-link> |
    <router-link to='/text2/Yu/17'>子路由2</router-link>

   <h1>Mine</h1>
   <router-view/>
  </div>
</template>

<script>
export default {
  
};
</script>
