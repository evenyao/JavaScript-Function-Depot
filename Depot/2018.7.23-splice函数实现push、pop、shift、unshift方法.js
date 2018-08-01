//splice函数实现push方法
function samePush(arr,value) {
  arr.splice(arr.length, 0 ,value)
  return arr.length
}

var arr = [3,4,5]
samePush(arr,12)



//splice函数实现pop方法
function samePop(arr) {
  return (arr.splice(arr.length-1,1))[0]
}

var arr = [3,4,5,12,'3']
samePop(arr)



//splice函数实现shift方法
function sameShift(arr) {
  return (arr.splice(0,1))[0]
}

var arr = ['e',3,4,5,6,12]
sameShift(arr)



//splice函数实现unshift方法
function sameUnshift(arr,value) {
  arr.splice(0,0,value)
  return arr.length
}

var arr = [3,4,6,7,11]
sameUnshift(arr,22)
