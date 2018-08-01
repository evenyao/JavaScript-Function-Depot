//实现一个时钟的输出效果
  var timer = setInterval(function() {
    console.log(new Date())
  }, 1000)




//实现一个节流函数
var timer
function hiFrequency() {
  if(timer){
    clearTimeout(timer)
  }
  timer = setTimeout(function(){
    console.log('do something')
  }, 3000)   //3秒之后如果没有操作就输出do something,如果执行hiFrequency(),就清除timer
}


hiFrequency()   //3秒之前进行调用，即可不让consolo.log输出
hiFrequency()
hiFrequency()




//节流函数改造版
function throttle(fn, delay) {
  var timer = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn(arguments)
    }, delay)
  }
}

function fn() {
  console.log('hello')
}

var fn2 = throttle(fn, 1000)
fn2()
fn2()
fn2()
