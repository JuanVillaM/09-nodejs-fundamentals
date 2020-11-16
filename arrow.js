/*
function aditioning(a, b) {
    return a + b;
}
console.log(aditioning(57, 20));

let adition = (a, b) => a + b;
console.log(aditon(58, 20));

function greeting() {
    return 'Hello World function';
}
console.log(greeting());

let greet = () => 'Hello World arrow function';
console.log(greet());
*/
let deadpool = {
    firstName: 'Wade',
    middleName: 'Winston',
    power: 'Regeneration',
    getHero() {
        return `${this.firstName} ${this.middleName} has ${this.power}`;
    }
}

console.log(deadpool.getHero());