// 1. no argu no return
// function hello()        // defination
// {
//     console.log("Hello World");
// }

// hello();        // function call




// 2. No Arg with return
// function square(){
//     let a = 5;
//     return a * a;
// }

// let result = square();
// console.log(result);

// console.log(square());

// user value input
// function Square(){
//     let a = Number(prompt('Enter value'));
//     return a * a;
// }
// console.log(Square())




// 3. With Arg No return
// function Hello(a){
//     console.log(a);
// }

// Hello(10);
// Hello("SkillQode");
// Hello(true);


// function product(a,b){
//     console.log(a+b);
// }

// product("5","3.5");




// 4. With Arg With Return
// function Add(a,b){
//     return a + b;
// }
// let result = Add(10.5, '26');
// console.log(result);




// 5.function as a variable
// function as a expression
// anonymous function

// let Add = function (a , b){
//     return a + b;
// }

// console.log(Add(10,15));    


//---------

//6
// function constructor
// let product = new Function("a", "b", "return a+b")
// console.log(product(12,5));

// function Product(a,b){
//     return a *b;
// }




//7
// Arrow Function
// let x = (a,b) => {
//     let sum = a +b;
//     return sum;
// }
// let x = (a,b) => a*b;
// console.log(x(15,20));




//8
// IIFE
// (function(){
//     console.log("Hello Wolrd.....");
// })();
// ((a,b)=>{

//     console.log("Product is: ", a*b);
// })(22,3);




//9
// function Objects
// function SumAll(){
//     return arguments.length;
// }
// let text = SumAll(1,2,3,4,5);      // SumAll[1,2,3,4,5]
// console.log(text);

// function SumAll(){
//     let s = 0;
//     for(let i = 0; i<arguments.length; i++){
//         s += arguments[i];
//     }
//     return s;  
// }
// let text = SumAll(1,2);      // SumAll[1,2,3,4,5]
// console.log(text);




//10
// // this keyword
// let person = {
//     firstName: "Skill",
//     lastname: "Qode",
//     age: 11,
//     Fullname: function(){
//         return this.firstName + " " + this.lastname;
//     }
// }

// // console.log(person.age);//11
// console.log(person.Fullname());




//11
// Callback function
// function hello(){
//     console.log("Hello Wolrd");
// }

// function skill(s, callback){
//     console.log("Hi....",s);
//     callback();     // hello()
// }

// skill("Peter", hello);2