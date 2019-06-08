<template>
  <div id="app">
      <Header :style="{background:bg}"></Header>

      <div id="content">
        <router-view></router-view>
      </div>
     
      <Footer :menu='menu' @HeaderBg="HeaderBg"></Footer>
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
          bg:'#00f878'
        },{
          path:"/book",
          name:'图书',
          bg:'#8909ff'
        },{
          path:"/photo",
          name:'图片',
          bg:'#d07806'
        }],
        bg:''
      }
    },
    components:{
      // 声明组件
      Header,
      Footer
    },
    methods:{
      HeaderBg(bg){
        // console.log(bg);
        this.bg = bg;
        // console.log(this);
      }

    }
  };
  </script>
  
<style>
  #content{
    margin: 1rem 0;
  }
</style>

