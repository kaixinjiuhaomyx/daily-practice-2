<template>
    <div>
        detail
    
        {{photoList[$route.params.index]}}
        <!-- {{$store.state.photoList}} -->
  
    </div>
</template>

<script>
    import {mapState} from 'vuex'; 
    export default {
        computed: {
            ...mapState(['photoList'])
        }
    }
</script>

<style lang="scss" scoped>

</style>