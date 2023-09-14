// Apply method
function greet(city,state){
    return `${this.name}'s age is ${this.age} and lives in ${city},${state}`;
}

let person = {
    name: "Bhavik",
    age: 22
};

x = greet.apply(person,['Surat','Gujarat']);
console.log(x);
