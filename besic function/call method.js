// function Call Method
function greet(){
    return `${this.name}'s age is ${this.age}`;
}

let person = {
    name: "Bhavik",
    age: 22
};

x = greet.call(person);
console.log(x);
