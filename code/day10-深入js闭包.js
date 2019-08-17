/* 
首先说说什么是闭包：
闭包就是能够读取其他函数内部的变量的函数
闭包的用途：
    1.读取其他函数内部的变量
    2.将这些变量的值始终保存到内存中
*/

// 常见的闭包代码
for(var i=0;i<5;i++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
}
//这里输出的应该是5 5 5 5 5
// 如何解决呢，采用立即执行函数或es6的let
for(var i=0; i<5; i++){
    (function(j){
        setTimeout(() => {
            console.log(j)
        }, 1000)
    })(i) 
}
// 这里输出的是  0 1 2 3 4