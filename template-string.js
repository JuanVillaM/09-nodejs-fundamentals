let heroName = 'Deadpool';
let realName = 'Wade Winston';

console.log(heroName + ' is ' + realName);
console.log(`${ heroName } is ${ realName }`);

let completeName = heroName + ' is ' + realName;
let completeTemplate = `${ heroName } is ${ realName }`;

console.log(completeName === completeTemplate);

function getName() {
    return `${ heroName } is ${ realName }`;
}
console.log(`The secret: ${getName()}`);