// Object Create

let test = new Object();
test.name = "Hello";     
test.email = "hello@test.in"
test.abc = function(){
    console.log('Hello Wolrd');
}
// test.abc();
// console.log(test);

// delete
delete test.email;
console.log(test);
