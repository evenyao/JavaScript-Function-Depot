var users = [
  {name:'John', age:20 , company:'Baidu'},
  {name:'Pete', age:18 , company:'Alibaba'},
  {name:'Ann', age:17 , company:'Tecent'}
]

//以name字段进行排序
var sortByName = users.sort(function(v1,v2){
  return v1.name > v2.name
})
console.log(sortByName)

//以age字段进行排序
var sortByAge = users.sort(function(v1,v2){
  return v1.age > v2.age
})
console.log(sortByAge)

//以company字段进行排序
var sortByCompany = users.sort(function(v1,v2){
  return v1.company > v2.company
})
console.log(sortByCompany)
