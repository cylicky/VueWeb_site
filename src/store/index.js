import { createStore } from "vuex";

const moduleA={
  state() {
    return {
      count: 0,
      todos: [
        { id: 1, text: "...", done: true },
        { id: 2, text: "...", done: false },
      ],
    };
  },
  mutations: {
    increment(state, n) {
      state.count += n;
    },
    Reduction(state) {
      state.count--;
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
    increment(context) {
      context.commit("increment");
    },
    actionA({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("increment",10);
          resolve( store.state.count);
        }, 1000);
      });
    },
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}
const moduleB={
  state() {
    return {
      count: 0,
      todos: [
        { id: 1, text: "...", done: true },
        { id: 2, text: "...", done: false },
      ],
    };
  },
  mutations: {
    increment(state, n) {
      state.count += n;
    },
    Reduction(state) {
      state.count--;
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
    increment(context) {
      context.commit("increment");
    },
    actionA({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("increment",10);
          resolve( store.state.count);
        }, 1000);
      });
    },
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}

const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB
  }
});
export default store;
