//生成一个随机IP地址
function getRandIP() {
  var arr = []  //定义一个空数组存放数据
  for (var i = 0; i < 4; i++){
    index = Math.floor(Math.random()*256)
    arr.push(index)  //向数组里面添加数据
  }
  return arr.join('.')   //数组里面的数据通过.进行分割并返回字符串
}

var ip = getRandIP()
console.log(ip)



//生成随机颜色字符串
function getRandColor() {
  var str = '' //定义一个空字符存放数据
  var dict = '0123456789abcdef'   //定义一个字符串字典
  for (var i = 0; i < 6; i++ ) {
    var index = Math.floor(Math.random()*dict.length)
    str += dict[index]
  }
  var color = '#' + str
  return color
}

var color = getRandColor()
console.log(color)



//随机生成一个长度为n的随机字符串
function getRandStr(len) {
  var str = ''
  var dict = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (var i = 0; i < len ;i++ ) {
    var index = Math.floor(Math.random()*dict.length)
    str += dict[index]
  }
  return str
}

var str = getRandStr(10)
console.log(str)
