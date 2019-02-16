import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:0
  },
  // mutations 用来修改state中的值
  mutations: {
    add(state,num){
      state.count += num;
    }
  },
  actions: {

  },
});
