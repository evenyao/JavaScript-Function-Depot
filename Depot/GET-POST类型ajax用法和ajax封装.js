//同步
// var xhr = new XMLHttpRequest()
// xhr.open('GET','hello.json',false)
// xhr.send()
// var data = xhr.responseText
// console.log(data)


//异步GET
var xhr = new XMLHttpRequest()
xhr.open('GET','/login?username=evenyao&password=123',true)  //get类型 数据需要拼接成url放到?后面
xhr.send()

console.log('readyState:',xhr.readyState)
xhr.addEventListener('readystatechange',function(){    //或者使用xhr.onload = function()
  //查看readyState状态
  console.log('readyState:',xhr.readyState)
})
xhr.addEventListener('load',function(){
  console.log(xhr.status)
  if((xhr.status >= 200 && xhr.status < 300)|| xhr.status === 304){
	var data = xhr.responseText
	console.log(data)
  }else{
	console.log('error')
  }
})
xhr.onerror = function(){
  console.log('error')
}


//等同代码
var xhr = new XMLHttpRequest()
xhr.open('GET','/login?username=evenyao&password=123',true)
xhr.send()
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
	if((xhr.status >= 200 && xhr.status < 300)|| xhr.status === 304){
	  console.log(xhr.responseText)
	}else{
	  console.log('error')
	}
  }
}
xhr.onerror = function(){
  console.log('error')
}




//异步POST
var xhr = new XMLHttpRequest()
xhr.open('POST','/login',true)  //post拼接数据放掉send里面
//post拼接数据放掉send里面
xhr.send(makeUrl({
  username:'evenyao',
  password:'123'
}))

xhr.addEventListener('load',function(){
  console.log(xhr.status)
  if((xhr.status >= 200 && xhr.status < 300)|| xhr.status === 304){
	var data = xhr.responseText
	console.log(data)
  }else{
	console.log('error')
  }
})
xhr.onerror = function(){
  console.log('error')
}

//makeUrl拼接函数
function makeUrl(obj){
  var arr = []
  for(var key in obj){
	arr.push(key + '=' + obj[key])
  }
  return arr.join('&')
}




//封装ajax
function ajax(opts){
  var url = opts.url
  //如果有类型就使用用户输入的类型; 如果没有,默认为后面的
  var type = opts.type || 'GET'
  var dataType = opts.dataType || 'json'
  var onsuccess = opts.onsuccess || function(){}
  var onerror = opts.onerror || function(){}
  var data = opts.data || {}

  //data序列化
  var dataStr = []
  for(var key in data){
	dataStr.push(key + '=' + data[key])
  }
  dataStr = dataStr.join('&')

  //GET类型 使用url拼接
  if(type === 'GET'){
	url += '?' + dataStr
  }

  //XMLHttpRequest对象创建
  var xhr = new XMLHttpRequest()
  xhr.open(type,url,true)
  xhr.onload = function(){
	if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
	  //成功
	  //如果返回的数据类型是json，就解析成json格式
	  if(dataType === 'json'){
		onsuccess(JSON.parse(xhr.responseText))
	  }else{
		onsuccess(xhr.responseText)
	  }
	}else{
	  onerror()
	}
  }
  //如果断网，也会执行onerror()
  xhr.onerror = onerror()

  //POST类型
  if(type === 'POST'){
	xhr.send(dataStr)
  }else{
	xhr.send()
  }
}

ajax({
  url:'http://api.jirengu.com/weather.php',
  type: 'POST',
  data: {
	city: '北京'
  },
  onsuccess: function(ret){
	console.log(ret)
	render(ret)
  },
  onerror: function(){
	console.log('服务器异常')
	showError()
  }
})


function render(json){

}

function showError(){

}