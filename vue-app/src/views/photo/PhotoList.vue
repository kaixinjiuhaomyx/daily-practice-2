<template >
    <div>
        <router-link to="/photo">
             <v-touch class="bg" v-on:swipeleft='next()' v-on:swiperight='before()'>
                <!-- {{photoList[$route.params.index]}} -->
                <!-- {{$store.state.photoList}} -->
                <!-- {{$route.params.index}} -->
                    <img :src='photoList[iNow].src'/>
                    <!-- <img :src='photoList[$route.params.index].src'/> -->
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
        data(){
            return{
                iNow:this.$route.params.index
            }
        },
        computed: {
            ...mapState(['photoList']),
            // VueTouch
        },
        methods:{
            next(){
                // index++;
                // this.$route.params.index++;
                // console.log(this.$route.params.index);
                // console.log(this.iNow);
                this.iNow++;
            },
            before(){
                this.iNow--;
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