<template>
  <div id="app">
      <Header :style="{background:obj.bg}" :obj='obj'></Header>
      <div id="content">
        <router-view></router-view>

      </div>
       <Footer :menu='menu' @HeaderBg="HeaderBg" :Footerbg='obj.bg'></Footer> 
  </div>
</template>
  <script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';
  // 导入
  export default {
    data(){
      return{  
        menu:[{
          path:"/movie",
          name:'电影',
          bg:'#f56780',
        },{
          path:"/music",
          name:'音乐',
          bg:'#80f0f6'
        },{
          path:"/book",
          name:'图书',
          bg:'#8909ff'
        },{
          path:"/photo",
          name:'图片',
          bg:'#d07806'
        }],
        obj:{
          path:"/movie",
          name:'电影',
          bg:'#f56780',
        }
      }
    },
    components:{
      // 声明组件
      Header,
      Footer
    },
    methods:{
      HeaderBg(obj){
        this.obj = obj;
      }
    },
    created(){
      // 原生语法bom
      // console.log(location.pathname);
      // route语法
      // console.log(this.$route.path);
      let initial = this.menu.filter((obj,index) =>{
        return obj.path == this.$route.path;
      })
      this.obj = initial[0];
    }
  };
  </script>
  
<style>
  #content{
    margin: 1rem 0;
  }
</style>

