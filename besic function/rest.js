//function ex
// function product(...args){
//     let s = 1;
//     for(let i of args){
//         s *= i;
//     }
//     return s;
// }
// a = product(10,5);
// console.log(a);

//arry ex
// let arr1 = [ 1,2,3];
// let arr2 = [...arr1];
// console.log(arr1);
// console.log(arr2);

// arr1.push(4);
// console.log(arr1);
// console.log(arr2);

//object ex
let a = { x: 1, y: 2 }
let b = { z: 1 }
let c = {...a, ...b};
console.log(c);

a.s = 5;
console.log(a);
console.log(c);