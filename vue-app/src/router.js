import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/movie/Movie.vue'
import Music from './views/music/Music.vue'
import Book from './views/book/Book.vue'
import Photo from './views/photo/Photo.vue'
import MusicList from './views/music/MusicList.vue'
import Slide from './components/Slide.vue'
import PhotoList from './views/photo/PhotoList.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/movie',
      component: Movie,
    },{
      path:'/music',
      component: Music,
    },{
      path:'/book',
      component: Book,
    },
    {
      path:'/photo',
      component: Photo,
    },{
      path:'/',
      redirect:'/movie',
    },{
      path:'/musiclist',
      component: MusicList
    },{
      path:'/slide',
      component: Slide
    },{
      path:'/photolist',
      component: PhotoList
    },
    
  ],
});
