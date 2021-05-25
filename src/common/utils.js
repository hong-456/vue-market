// 设置一个防抖函数,可以输入两个参数：函数和时间
// 需要把ceshi()放进去，但注意，不能加括号，得是this.ceshi，否则他放进去的就是函数的返回值而不是函数
// 当load()执行时，执行防抖函数，
// 防抖函数的返回值是一个函数，这个函数可以再输入属于函数的参数
export function debounce(fn,time){
    let settime = null;
    return function(...params) {
        if (settime) {
            clearTimeout(settime)
        }
        settime = setTimeout(() => {
            fn.apply(this,params)
        }, time);
    }
}