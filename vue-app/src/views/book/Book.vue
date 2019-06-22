<template>
    <div>
        <!-- vue-swipe -->
        <!-- <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe> -->
        <!-- <div @click="go">click</div> -->
        <slide :booklist='booklist'>
        </slide>
    </div>
</template>

<script>
    require('vue-swipe/dist/vue-swipe.css');
    import { Swipe, SwipeItem } from 'vue-swipe';
    import Slide from '@/components/Slide.vue'
    export default{
        data(){
            return{
                booklist:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg",
                    "https://img3.doubanio.com/lpic/s6985053.jpg"
                ]
            }
        },
        components:{
            Swipe,
            SwipeItem,
            Slide
        },
        methods:{
            go(){
                this.$router.push('/slide')
            }
        }
    }

</script>

<style  scoped>
   .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    }
    
    .slide1 {
    background-color: #0089dc;
    color: #fff;
    }
    
    .slide2 {
    background-color: #ffd705;
    color: #000;
    }
    
    .slide3 {
    background-color: #ff2d4b;
    color: #fff;
    }
</style>