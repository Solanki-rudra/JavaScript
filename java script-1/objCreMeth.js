var User = {
    name: "",
    getUserName: function() {
        console.log(`User name is: ${this.name}`);
    },
};
var rudra = Object.create(User);
console.log(rudra);
rudra.name = "Rudra Solanki";
rudra.getUserName();

var hitesh = Object.create(User,{
    name:{value:"hitesh"},
    courseCount:{value:3},
});
hitesh.getUserName();

