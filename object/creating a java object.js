 // object creating as a variable
let person = {
    name: "Skill",
    age: 10,
    email: "hello@test.com",
    hello: function(){
        return `${this.name} is ${this.age}`
    }
};

// console.log(typeof(person));

// console.log(person);

// console.log(person.name);  

// console.log(person.hello());  

// console.log(person["age"]);  

let x = "email";
console.log(person[x]);