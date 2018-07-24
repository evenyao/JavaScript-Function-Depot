function f1(callback){
    setTimeout(function(){
        //做某件事，可能很久
        console.log('别急，开始执行f1')
        for(var i=0;i< 100000;i++){

        }
        console.log('f1执行完了')

        callback()
    }, 0);

}
function f2(){
    console.log('执行f2');
}
function f3(){
    console.log('执行f3');
}
f1(f2) //当f1执行完之后再执行 f2
f3()