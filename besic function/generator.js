
// Function Generator
function* generator(){
    yield 1;
    yield 2;
    return '3'
}


let hello = generator();
console.log(hello.next().value);
console.log(hello.next().value);
console.log(hello.next().value);