//参数为数组，返回一个新数组，数组中的每一项是原数组对应值的平方，原数组不变
function squirArr (arr) {
  var newarr=[]
  for(i=0; i<arr.length; i++){
    newarr[i] = arr[i]*arr[i]
  }
  return newarr
}

var arr = [3,4,5]
var arr2 = squirArr(arr)
console.log(arr)  //[3, 4, 5]
console.log(arr2)  //[9, 16, 25]




//对应封装成另一个带value参数的函数，可相当于原数组生成另外一个数组，做基本运算
function squirArr (arr,value) {
  var newarr=[]
  for(i=0; i<arr.length; i++){
    newarr[i] = arr[i]*value
  }
  return newarr
}

var arr2 = squirArr(arr,2)
console.log(arr)  //[3, 4, 5]
console.log(arr2)  //[6, 7, 8]




//JSON深拷贝函数
function deepCopy(src) {
  return JSON.parse(JSON.stringify(src))
}

var arr = [3,4,5,6,11]
var arr2 = deepCopy(arr)
console.log(arr)   //[3, 4, 5, 6, 11]
console.log(arr2)  //[3, 4, 5, 6, 11]
arr === arr2    //false




//将字符串倒序的函数
function sortString(str){
  return str.split('').reverse().join('')
}

var str = 'helloword'
var str2 = sortString(str)
console.log(str2)  //'drowolleh'




//操作数组，返回一个新数组，新数组中只包含正数
function filterPositive(arr){
  for (var i=0; i < arr.length; i++){
  if (arr[i] < 0 || typeof arr[i] != "number"){
        arr.splice(i,1)
        i--
    }
  }
}

var arr = [3,-1,2,'even',true]
filterPositive(arr)
console.log(arr)  //[3, 2]



//声明一个格式化搜索字符串的函数 titleCase，该函数功能为自动格式化空格之后每个单词首字母为大写，便于匹配搜索
function titleCase(s) {
var i, ss = s.toLowerCase().split(/\s+/);  //把输入的值全部格式化成小写，再使用split方法匹配中间空格将其变为字符串数组
for (i = 0; i < ss.length; i++) {
    ss[i] = ss[i].slice(0, 1).toUpperCase() + ss[i].slice(1);  //使用slice方法，格式化第一个字符，将其大写
}
return ss.join(' ');
}
