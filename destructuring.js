let deadpool = {
        firstName: 'Wade',
        middleName: 'Winston',
        power: 'Regeneration',
        getHero: function() {
            return `${this.firstName} ${this.middleName} has ${this.power}`;
        }
    }
    /*
    let firstName = deadpool.fistName;
    let middleName = deadpool.middleName;
    let power = deadpool.power;
    */
let { firstName, middleName, power } = deadpool;

console.log(`${firstName} ${middleName} has ${power}`);