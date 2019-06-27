<template >
    <div>
        <router-link to="/photo">
             <v-touch class="bg">
                <!-- {{photoList[$route.params.index]}} -->
                <!-- {{$store.state.photoList}} -->
                <div v-on:swipeleft='next()'>
                    <img  :src='photoList[$route.params.index].src'/>
                </div>
                
            </v-touch>
        </router-link>
       
    </div>
    
</template>

<script>
    import {mapState} from 'vuex'; 
    import VueTouch from 'vue-touch';
    import Vue from 'vue';
    Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        computed: {
            ...mapState(['photoList']),
            // VueTouch
        },
        methods:{
            next(){
                this.$router.params.index++;
                console.log(this.$router.params.index);
            }
        }
    }
</script>

<style scoped>
    .bg{
        background: #000;
        position:absolute;
        top:1rem;
        right: 0;
        left:0;
        bottom: 1rem;
    }
    img{
        position: absolute;
        top:50%;
        transform: translate(0,-50%)

    }
</style>