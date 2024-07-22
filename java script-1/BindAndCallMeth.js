const rudra = {
    firstName: 'Rudra',
    lastName: "solanki",
    age: 18,
    gender: 'Male',
    birthDate: '22-08-2004',
    getInfo: function () {
        console.log(`
           First name is ${this.firstName}
           Last name is ${this.lastName}
           Age is ${this.age}
           Gender is ${this.gender}
           Birth date is ${this.birthDate}
        `);
    }
}
const hitesh = {
    firstName: 'Hitesh',
    lastName: 'Modi',
    age: 17,
    gender: 'Male',
    birthDate: "10-06-2005",
}
// rudra.getInfo();

// var hiteshInfo = rudra.getInfo.bind(hitesh);
// hiteshInfo();

//Another way to run this syntax
// rudra.getInfo.bind(hitesh)();


//using call
 rudra.getInfo.call(hitesh);