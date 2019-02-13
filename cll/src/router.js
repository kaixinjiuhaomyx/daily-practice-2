import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

import Min from './views/Min.vue';
import Text from './views/Text.vue';
import A from './views/A.vue';
import B from './views/B.vue';





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
      path: '/about/:name/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      component: About,
    },{
      path:'/min',
      name:'mine',
      component: Min,
    },
    {
      path:'/text',
      component: Text,
      children:[
        {
        path:'/a',
        component:A,
        },
        {
          path:'/b',
          component:B,
        }
      ]
    },
  ],
});
