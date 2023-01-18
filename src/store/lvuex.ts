import { inject, reactive } from "vue";

const STORE_KEY = '__store__'
function useStore(): any {
  return inject(STORE_KEY);
}

function createStore(options: any) {
  return new Store(options);
}

class Store {
  private _state: { data: any; };
  private _mutations: any;
  constructor(options: any) {
    this._state = reactive({
      data: options.state()
    })
    this._mutations = options.mutations
  }

  get state() {
    return this._state.data;
  }

  commit = (type: string, payload: any) => {
    const entry = this._mutations[type];
    entry && entry(this.state, payload);
  }

  install(app: any) {
    app.provide(STORE_KEY, this);
  }
}

export { createStore, useStore }