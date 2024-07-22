var myDetails = {
    firstName : "Rudra",
    lastName : "Solanki",
    email : "solankirudra556@gmail.com",
    moNumber : 9106558832,

    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },

    getCourseCount: function () {
        return `${this.firstName} have total of ${this.courseList.length} already bought caurses`;
    },
};
console.log(myDetails.getCourseCount());
myDetails.buyCourse("node js course");
myDetails.buyCourse("html and css course");
console.log(myDetails.getCourseCount());
