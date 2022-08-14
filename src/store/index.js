import { createStore } from "vuex";

const moduleA = {
  state() {
    return {
      androiddlist: {
        AndroidDownloadMessageList: {},
        AndroidAppList: {},
        AndroidSdkList: {}
      },
      count: 1

    };
  },
  mutations: {
    androiddlist(state, data) {
      const { AndroidDownloadMessageList } = data;
      // console.log("data数据", data)
      state.androiddlist.AndroidDownloadMessageList = AndroidDownloadMessageList;
    },
    increment(state, n) {
      console.log(n)
    },
    Reduction(state) {
      state.count++;
    },
    doneTodos(state) {
      return state.todos.filter((todo) => {
        console.log(todo);
        if (todo.done) {
          todo.done;
        }
      });
    },
  },
  actions: {
    androiddlist(context) {
      context.commit("androiddlist");
    },
    increment(context) {
      console.log("context", context)
      context.commit("increment");
    },
    actionA({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("increment", 10);
          resolve(store.state.count);
        }, 1000);
      });
    },
  },
  getters: {
    doubleCountA(state) {
      return state.count * 2;
    },
  },
};
const moduleB = {
  state() {
    return {
      count: 0,
    };
  },
  mutations: {

  },
  actions: {

  }
};

const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB,
  },
});


// const  store = createStore({
//   state() {
//     return {
//       count: 1
//     }
//   }
// })
export default store;