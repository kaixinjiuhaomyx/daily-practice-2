import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import Text1 from './views/Text1.vue';
import Text2 from './views/Text2.vue';
import Error from './views/Error.vue';
import CompA from './views/CompA.vue';
import CompB from './views/CompB.vue';
import CompC from './views/CompC.vue';
import Vuex from './views/Vuex.vue';


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
      alias: '/abc',
    },
    {
      path: '/mine',
      component: Mine,
      children: [
        {
          path: '/text1',
          name: 'text1',
          component: Text1,
        },
        {
          path: '/text2/:name/:age',
          component: Text2,
        },
      ]
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/redirect/:name/:age',
      redirect: '/text2/:name/:age',
    },
    {
      path: '/error',
      component: Error,
    },
    {
      path: '/compA',
      component: CompA,
    },
    {
      path: '/compB',
      component: CompB,
    },
    {
      path: '/compC',
      component: CompC,
    },
    {
      path:'/vuex',
      component:Vuex,
    }
  ],
});
