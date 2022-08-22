import { createStore } from "vuex";
import { windowsproductTest } from "@/services";

const moduleA = {
  state() {
    return {
      list: [],
      count: 1,
    };
  },
  mutations: {
    async activeMenu(state, list) {
      state.list = list;
    },
  },
  actions: {},
  getters: {},
};
const moduleB = {
  state() {
    return {
      count: 0,
    };
  },
  mutations: {},
  actions: {},
};

const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB,
  },
});

export default store;
