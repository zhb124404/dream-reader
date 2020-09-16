module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 禁用行尾分号
    'semi': [2, 'never'],
    // 强制使用===
    'eqeqeq': [2, 'always'],
    // 禁用末尾逗号
    'comma-dangle': [2, 'never'],
    // 禁用文件末尾空行
    'eol-last': [2, 'always'],
    // 导入文件需要扩展名
    'import/extensions': [0],
    // 要求对象字面量属性名称使用引号,如果没有严格要求，允许对象属性名称使用引号 (当 as-needed 时生效)
    'quote-props': [2, 'as-needed', { keywords: false, unnecessary: false, numbers: false }],
    // 箭头函数在可以省略括号的地方强制不使用括号
    'arrow-parens': [0, 'as-needed'],
    // 行的最大长度
    'max-len': [0],
    // 禁用自增自减运算符
    'no-plusplus': [0],
    // Object.assign使用规则
    'prefer-object-spread': [0],
    'no-param-reassign': [0]
  }
}
