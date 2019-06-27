<template>
    <div>
        <ul class="ul">
            <li v-for='(src,index) in $store.state.photoList' :key='index'>
                <img :src="src.src" alt="" @click="pDetail(index)">
            </li>
        </ul>
        <div class="xx">
            <!-- 为什么不加内容就不能设置高度 -->
            111111111111111111111111111
            111111111111111111111111111111
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        data(){
            return{
                // photoList:[]
            }
        },
        created(){
            Axios.get('/data/photodata.json')
            .then((result)=>{
                // console.log(result.data.photoData);
                // 把数据给当前页面的photoList
                // this.photoList = [...result.data.photoData];
                // console.log(this.photoList)
                // this.$store.state.photoList = result.data.photoData;
                this.$store.commit('changPhoto',result.data.photoData)
            })
        },
        methods:{
            pDetail(index){
                this.$router.push('/photolist/'+index);
                // console.log();
            }
        }
    }
</script>

<style  scoped>
img{
    width: 3.2rem;
    float: left;
}
.xx{
    height: 1rem;
    background: #fff;
    color: #fff;
}
</style>