<template>
    <div>
        <img  v-for="(obj,index) in musicList" :key="index" :src="obj.bg" alt="" @click="goList"/>
        <!-- <div @click="goList">click</div> -->
   
    </div>
    
</template>

<script>
    import Axios from 'axios';
    export default {
        data(){
            return{
                musicList:[]
            }
        },
        created(){
            Axios.get("/data/musiclist.json")
            .then((result)=>{
                // console.log(result);
                this.musicList = result.data.albums;
                // console.log(this.musicList);

            })
            .catch();
        },
        methods:{
            goList(){
                this.$router.push('/musiclist');
            }
        }
    }
    
</script>

<style scoped>
    img{
        width: 50%;
    }
</style>