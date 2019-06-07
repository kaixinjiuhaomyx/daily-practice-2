<template>
  <div id="app">
      <Header></Header>

      <div id="content">
        <router-view></router-view>
      </div>
     
      <Footer :menu='menu'></Footer>
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
          name:'电影'
        },{
          path:"/music",
          name:'音乐'
        },{
          path:"/book",
          name:'图书'
        },{
          path:"/photo",
          name:'图片'
        }]
      }
    },
    components:{
      // 声明组件
      Header,
      Footer
    }
  };
  </script>
  
<style>
  #content{
    margin: 1rem 0;
  }
</style>

