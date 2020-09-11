import Vue from 'vue'

/**
 * 获取多层嵌套属性值
 * @param {Object} obj 目标对象
 * @param {Array} path 属性路径 如a.color则为['a','color']
  */
export const getNestedKey = (obj, path) => {
  if (path.length === 1) {
    return obj[path[0]]
  }
  if (!obj[path[0]]) {
    return undefined // 节点不存在则返回undefined
  }
  return getNestedKey(obj[path[0]], path.slice(1))
}

// 判断是否json对象
const isObject = (obj) => obj !== undefined && obj !== null && obj.constructor === Object

const setNestedKey1 = (obj, path, value) => {
  if (!isObject(obj)) return false
  if (path.length === 1) {
    Vue.set(obj, path[0], value)
    return true
  }
  if (!obj[path[0]]) Vue.set(obj, path[0], {}) // 不存在则创建节点
  return setNestedKey1(obj[path[0]], path.slice(1), value)
}

/**
 * 设置多层嵌套属性值
 * @param {Object} obj 目标对象
 * @param {Array} path 属性路径 如a.color则为['a','color']
 * @param {*} value 要设置的属性值
 */
export const setNestedKey = (obj, path, value) => {
  // Vue不允许动态添加根级别的响应式property
  if (path[0] && !obj[path[0]]) return false
  return setNestedKey1(obj, path, value)
}
