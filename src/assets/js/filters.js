import Vue from 'vue'

/**
 * 金额数据处理
 * @param value 调用过滤器时，调用的文本
 */
Vue.filter('priceValue', function(value) {
  // 如果文本不存在，返回空字符
  // value === 0 ; !0 === true.
  if (!value) {
    return '0.00'
  }

  // 文本转化为 float
  let result = parseFloat(value)

  // 如果文本为 integer 类型的文本，表示当前文本没有小数
  if (Number.isInteger(result)) {
    return result
  }

  // 文本包含小数，result.toFixed(2)
  return result.toFixed(2)
})
