// import User from "./classAndModule";

const User = require("./classAndModule.js");
const rudra = new User("rudra","solankirudra556@gmail.com")
console.log(rudra.getInfo().email);

rudra.enrollCourse("React Bootcamp");
rudra.enrollCourse("Angular Bootcamp");

console.log(rudra.getcourseList());
let course = rudra.getcourseList();
console.log(course.length);
course.forEach((c) => console.log(c));