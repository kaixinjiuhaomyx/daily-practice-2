<template>
    <div class="slide-wraper">
        <ul class='pop'>
            <transition-group name="fade"> 

            <li  v-for="(value,index) in imgs" :key="index" v-show="index==iNow">
                <img :src="value" alt="">
            </li>
            </transition-group>

        </ul>
        <ul class="btns">
            <li v-for="(i,index) in imgs.length" :key="index" :class="{active:index == iNow}">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg",
                    "https://img3.doubanio.com/lpic/s6960353.jpg"
                ],
                iNow:1
            }
        },
        created(){
            setInterval(()=>{
                this.iNow++;
                if(this.iNow == this.imgs.length){
                    this.iNow = 0;
                }
            },1500)
        },
    }
</script>

<style scoped>
.slide-wraper{
    position: relative;
     height:9.5rem;
     overflow: hidden;
    /* overflow: ; */
} 
.pop li{
    width:100%;
    position: absolute;
    left:0px;
    top:0px;
}
.pop img{
    width: 100%;
    height: 9.5rem;
    /* position: absolute;
    top:0px;
    left:0px; */

}
.btns li{
    width:0.2rem;
    height:0.2rem;
    background: #f00;
    border-radius: 50%;
    float: left;
    margin-right:0.1rem;
}
.btns li.active{
    background: #0f0;
}
.btns{
    position: absolute;
    top:9rem;
    left:42%;

}
.fade-enter{
    transform: translateX(100%)
}
.fade-enter-active{
    transition: transform 1s ease;
}
.fade-enter-to{
    transform: translateX(0)
}
.fade-leave{
    transform: translateX(0)
}
.fade-leave-active{
    transition: transform 1s ease;
}
.fade-leave-to{
    transform: translateX(-100%)
}


</style>