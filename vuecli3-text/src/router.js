import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import Text1 from './views/Text1.vue';
import Text2 from './views/Text2.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/mine',
      component: Mine,
      children:[
        {
          path:'/text1',
          name:'text1',
          component: Text1
        },
        {
          path:'/text2/:name/:age',
          component: Text2,
        }
      ]
      
    },
  ],
});
