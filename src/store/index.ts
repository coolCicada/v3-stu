import { createStore } from "./lvuex";

export default createStore({
  state() {
    return {
      count: 666,
    };
  },
  mutations: {
    add(state: { count: number; }) {
      state.count ++
    }
  }
})