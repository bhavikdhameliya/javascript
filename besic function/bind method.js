// Bind method
function greet(){
    return `${this.name}'s age is ${this.age}`;
}

let person = {
    name: "Bhavik",
    age: 22
};
x = greet.bind(person);
console.log(x());      