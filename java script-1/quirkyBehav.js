const student = {
    age : 44,
    name : {
        firstName : "Rudra",
        lastName : "solanki",
    },
};

student.age = 19;
console.log(student);

Object.freeze(student);
student.age = 16;
console.log(student);

student.name.firstName = "Not Rudra";
console.log(student);