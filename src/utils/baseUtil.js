/**
 * 数字转换为估算值
 * @param {number} num
 */
export function estimatNum(num) {
  let str = num.toString()
  let prefix = str.substring(0, 1)

  if (typeof num !== 'number') return '0'
  if (num < 100) return str
  else if (num >= 100 && num < 1000) {
    return `${prefix}00+`
  } else if (num >= 1000 && num < 10000) {
    return `${prefix}k+`
  } else if (num >= 10000 && num < 100000) {
    return `${prefix}w+`
  } else {
    return `10w+`
  }
}

/**
 * 获取iframe高度
 * @param {HTMLIFrameElement} el
 */
export function getIframeHeight(el) {
  if (!(el instanceof HTMLIFrameElement)) return 0

  const doc = el.contentDocument || el.contentWindow.document
  const height = doc.documentElement.scrollHeight || 0
  return height
}
