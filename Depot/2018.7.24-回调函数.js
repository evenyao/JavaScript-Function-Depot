function f1(callback){
    setTimeout(function(){
        //��ĳ���£����ܾܺ�
        console.log('�𼱣���ʼִ��f1')
        for(var i=0;i< 100000;i++){

        }
        console.log('f1ִ������')

        callback()
    }, 0);

}
function f2(){
    console.log('ִ��f2');
}
function f3(){
    console.log('ִ��f3');
}
f1(f2) //��f1ִ����֮����ִ�� f2
f3()