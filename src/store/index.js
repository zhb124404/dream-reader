import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import { getNestedKey } from './utils'

const sls = new SecureLS({ isCompression: false })

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: {
      useDarktheme: true
    }
  },
  getters: {
    // 不直接通过state获取嵌套state对象属性，而应使用Getter
    // 使用柯里化函数传递额外参数 state => key => {}
    // 通用Getter this.$store.getters.getState(key) key as a,a.b,...
    getState: state => key => getNestedKey(state, key.split('.'))
  },
  mutations: {
    setTheme: (state, [key, value]) => Vue.set(state.theme, key, value)
  },
  actions: {
  },
  plugins: [createPersistedState({
    key: 'dreamReder-UserData',
    storage: {
      getItem: key => sls.get(key),
      setItem: (key, value) => sls.set(key, value),
      removeItem: key => sls.remove(key)
    }
  })]
})
