import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // 调用action action提交mntations mntations 提交state（直接调用mntations 或state也行）
  state: {
    con:99,
    con1:0
  },
  mutations: {
    add(state){
      state.con++;
    },
    sub(state){
      state.con--;
    }
  },
  actions: {

  },
});
