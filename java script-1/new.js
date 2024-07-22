var User = function (firstName , courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`course count is: ${this.courseCount}`);        
    };
};

User.prototype.getFirstName = function(){
    console.log(`your firstname is: ${this.firstName}.`);
}

var rudra = new User("Rudra",2);
// rudra.getCourseCount();
if (rudra.hasOwnProperty("firstName")) {
    rudra.getFirstName();
}
// console.log(rudra);

var hitesh = new User("Hitesh",3);
// console.log(hitesh);
// hitesh.getCourseCount();
// hitesh.getFirstName();
//what is callback function?
if (hitesh.hasOwnProperty("firstName")) {
hitesh.getFirstName();
}