//参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串
//刚刚（t距离当前时间不到1分钟时间间隔）
//3分钟前（t距当前时间大于等于1分钟，小于1小时）
//8小时前（t距离当前时间大于等于1小时，小于24小时）
//3天前（t距离当前时间大于等于24小时，小于30天）
//2个月前（t距离当前时间大于等于30天，小于12个月）
//1年前（t距离当前时间大于等于12个月）

function friendlyDate(time){
  var interval = Date.now() - Date.parse(time)
  switch(true) {
    case interval < 0:
      console.log('在未来')
      break;

    case interval >= 0 && interval < (60*1000):
      console.log('刚刚')
      break;

    case interval >= (60*1000) && interval < (60*60*1000):
      console.log('3分钟前')
      break;

    case interval >= (60*60*1000) && interval < (24*60*60*1000):
      console.log('8小时前')
      break;

    case interval >= (24*60*60*1000) && interval < (30*24*60*60*1000):
      console.log('3天前')
      break;

    case interval >= (30*24*60*60*1000) && interval < (12*30*24*60*60*1000):
      console.log('2个月前')
      break;

    case interval >= (12*30*24*60*60*1000):
      console.log('1年前')
      break;
  }
}


friendlyDate('2018-05-03')  //2个月前
