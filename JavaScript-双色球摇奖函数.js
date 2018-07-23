// ======================== 写一个可以选双色球号码的函数
function getColor() {
//先定义两个数组池，一个普通号池，一个特别号池
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]
var arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
//定义两个空数组，用来抓取7个待选普通号，1个待选特别号
var b = []
var sp = []

//做for循环，7次，每一次从普通号数组池里面随机抓取一个元素值，push到待选空数组中，模拟摇奖时候的操作，即取出该号码之后，该号码不在存在于原数组
for(var i=0; i < 7; i++){
  var index = Math.floor(Math.random()*arr.length)
  b.push((arr.splice(index,1))[0])
  }

//重新进行排序
b.sort(function(v1,v2){
  return v1 - v2
})

//特别号同理，只是池子变得更小了，而且只提取一次
for(var i = 0;i < 1 ;i++){
  var index2 = Math.floor(Math.random()*arr2.length)
  sp.push((arr2.splice(index2,1))[0])
  }

//输出结果
console.log('普通号：'+ b)
console.log('特别号：'+ sp)
}
