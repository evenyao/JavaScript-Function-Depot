//判断用户输入的是否是手机号的函数
function isPhoneNum(str) {
  var reg = /^1[34578]\d{9}$/g
  if(reg.test(str)){
    console.log('是正确的手机号格式')
  } else {
    console.log('不是正确的手机号格式')
  }
}

isPhoneNum(17300001111)   //是正确的手机号格式



//判断用户输入的是否是邮箱的函数
function isEmail(str) {
  var reg = /^\w+\.?\w+@\w+(\.\w+){1,3}$/g
  if(reg.test(str)) {
    console.log('是正确的邮箱地址')
  } else {
    console.log('不是正确的邮箱地址')
  }
}

isEmail('17300001111@163.com')  //是正确的邮箱地址



//判断用户输入的是不是合法用户名（长度6-20个字符，只能包括字母、数字、下划线）
function isValidUsername(str) {
  var reg = /^\w{6,20}$/g
  if(reg.test(str)) {
    console.log('是合法的用户名')
  } else {
    console.log('不是合法的用户名')
  }
}

isValidUsername('evenyao')   //是合法的用户名



//去除字符串两边的空白字符的函数
function trim(str) {
  return str.replace(/^\s*|\s*$/g,'')
}

trim('  hello word ')
