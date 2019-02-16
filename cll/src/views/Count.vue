<template>
    <div>
    count 页面
    {{$store.state.count}}
    <button @click="$store.commit('add',2)">add</button>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>