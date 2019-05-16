/**
 * @name formatDate
 * @description 格式化日期
 * @param !必须 {Date Object} date  日期类型的对象
 * @param  !必须 {String} template 年：y 月:M 日：d 时：h 分：m 秒：s 例如 'yyyy-MM-dd hh:mm:ss'等
 * @returns {String} 格式化后的日期字符串.
 */
function formatDate (date, template) {
  if (/(y+)/.test(template)) {
    template = template.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  function padLeftZero (str) {
    let index = str.length
    return ('00' + str).slice(index);
  }

  for (let k in o) {
    if (new RegExp(`(${k})`).test(template)) {
      let str = o[k] + ''
      template = template.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return template
}

/**
 * @name urlParse
 * @description 解析url
 * @param  !非必须 {String}
 * @example ?id=123&a=b
 * @return Object {id:123, a:b}
 */
function urlParse (url) {

  url = url ? url : window.location.search
  if (!url) {
    return
  }
  let obj = {}
  let reg = /[?&][^?&]+=[^?&#]+/g
  let arr = url.match(reg)
  // ['?id=123', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=')
      let key = decodeURIComponent(tempArr[0])
      let val = decodeURIComponent(tempArr[1])
      obj[key] = val
    })
    return obj
  }
}

/**
 * @name delayExe
 * @description
 *  把某一段时间内重复触发的事件归结到一次回调中执行；
 *  例如 搜索框内多次输入，只在最后一次输入后,进行查寻
 * @param  !必须 {Function} fn 回调函数
 * @param  !必须 {Number} delay 延迟的时间
 * @example
 * @return Object {id:123, a:b}
 */
function delayExe (fn, delay) {
  let timer
  return function () {
    let args = arguments,
      self = this
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      clearTimeout(timer)
      fn.apply(self, args)
      timer = null
    }, delay)
  }
}

/**
 * @name once
 * @description
 *  让函数只运行一次
 * @param  !必须 {Function} fn 回调函数
 * @example
 * @return {Function} 闭包
 */
function once (fn) {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}

/**
 * @name typeIs
 * @description
 *  判断参数类型 特殊情况 null 返回 null NaN 返回 NaN
 * @param  !必须 {Any}
 * @example
 * @return {String} 'nan' 'null'
 */
const _toString = Object.prototype.toString

function typeIs (o) {

  let t, c// type class

  if (o === null) return 'null'

  if (o !== o) return 'nan'

  t = typeof o
  if (t !== 'object') return t

  c = classIs(o)
  if (c !== 'Object') return c

  return 'Object'

}

function classIs (o) {
  return _toString.call(o).slice(8, -1).toLowerCase()
}
/**
 * @isEmail
 * @description
 * 判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean}
 */
function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}
/**
 * @name isIdCard
 * @description
 * 判断是否为身份证号
 * @param  {String|Number} str
 * @return {Boolean}
 */
function isIdCard(str) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
}
/**
 * @name isPhoneNum
 * @description
 * 判断是否为手机号
 * @param  {String|Number} st r
 * @return {Boolean}
 */
function isPhoneNum(str) {
  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
}
/**
 * @name randomNum
 * @description
 * 生成随机整数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const validateMobile = function (val) {
  val = val.replace(/[^\d]/g, '')
  if (val.length <= 3) {
    return val
  } else if (val.length <= 7) {
    val = val.replace(/(\d{3})(\d{0,4})/, '$1-$2')
  } else {
    val = val.replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1-$2-$3')
  }
  return val
}
