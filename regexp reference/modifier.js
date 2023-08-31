//modefier = g , i ,  m ;

let data = 'hello wrold i am learning java script skillqode@hello.in';

//1.i
let reg = /am/g;

//2.g
// let reg = /i/g;
// let reg = /[h]/g;
// let reg = /[h,g]/g;
// let reg = /[h,g,a,o]/g;
// let reg = /[h,o,d,h,a,r,]/g;

//3.m
// let reg = /[c]/m;
// let reg = /[i]/m;
// let reg = /[o]/m;
// let reg = /[w]/m;


let result = data.match(reg);
// let result = data.(reg,'cm');
console.log(result);