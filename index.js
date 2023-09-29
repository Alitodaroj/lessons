let interestRate = 0.3
interestRate = 1;
console.log(interestRate);

let isApproved = false;
let firstName = undefined;
let selectedColor = undefined;

let person = {
    name: "Mosh",
    age: 30
}

person.name = "John";

person['name'] = 'Mary';

console.log(person)

let selectedColors = ['red', 'blue'];
selectedColors[2] = 12;
console.log(selectedColors.length);

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
function square(number) {
    return number * number;
    }


console.log(square(18));

greet('Mary', 'Smith');