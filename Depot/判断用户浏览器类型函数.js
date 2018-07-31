//判断是否是iPhone用户
function isIPhone(){
  return /iPhone/.test(navigator.userAgent)
}

//判断是否是iPad用户
function isIPad(){
  return /iPad/.test(navigator.userAgent)
}

//判断是否是安卓用户
function isAndroid(){
  return /Android/.test(navigator.userAgent)
}

//判断是否是IOS用户
function isIOS(){
  return /(iPad)|(iPhone)/.test(navigator.userAgent)
}
