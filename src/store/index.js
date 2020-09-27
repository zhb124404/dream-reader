import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import { getNestedKey } from './utils'

const sls = new SecureLS({ isCompression: false })

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 主题
    theme: {
      useDarktheme: false,
      showNav:true
    },
    // 全局消息条
    snackbar: {
      show: false, // 展示消息
      type: 'info', // success,info,warning，error
      text: '', // 提示文字
      timeout: 1400 // 消失时间
    }
  },
  getters: {
    // 不直接通过state获取嵌套state对象属性，而应使用Getter
    // 使用柯里化函数传递额外参数 state => key => {}
    // 通用Getter this.$store.getters.getState(key) key as a,a.b,...
    // getState: state => key => getNestedKey(state, key.split('.')),
    // getSnackbar: state => ({ ...state.snackbar })
  },
  mutations: {
    // 保持state响应式
    // setTheme: (state, [key, value]) => Vue.set(state.theme, key, value) // 1.使用 Vue.set(obj,newKey,newValue)
    setTheme: (state, payload) => state.theme = { ...state.theme, ...payload }, // 2.以新对象替换老对象
    showMsg: (state, config) => {
      if (config.show === false) {
        state.snackbar.show = false
      }
      else {
        state.snackbar = {
          show: true,
          type: 'info',
          text: '',
          timeout: 1400,
          ...config
        }
      }
    }
  },
  actions: {},
  plugins: [createPersistedState({
    key: 'dreamReder-UserData',
    storage: {
      getItem: key => sls.get(key),
      setItem: (key, value) => sls.set(key, value),
      removeItem: key => sls.remove(key)
    }
  })]
})
