// 'use strict';
// function fib(n){
//     if ( n === 0 ){
//         return 0;
//     } else if ( n === 1){
//         return 1;
//     }
//     return fib (n - 1) + fib (n - 2);
// }

// const length = 40;
// for(let i = 0; i <= length; i ++){
//     console.log(fib(i));
// }


'use strict';
const memo = new Map();//memo という名前の Map を作成。キーには順番を、値には答えを格納。
memo.set(0, 0);
memo.set(1, 1);//0 番目と 1 番目の答えは予め定義されているため、これを格納しているコード。
function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}