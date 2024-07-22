class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];
    getInfo(){
        return {name: this.name, email: this.email};
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getcourseList(){
        return this.#courseList;
    }
    // static
    login(){
        return "you are logged in.";
    }
}
class SubAdmin extends User{
    constructor(name,email){
        super(name,email);
    }
    getAdminInfo(){
        return "I am Sub-Admin";
    }
    login(){
        return "Login for admin only"
    }
}

module.exports = User;

const rock = new User("rock","rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp")
console.log(rock.getcourseList());
console.log(rock.courseList);

const tom = new SubAdmin("tom","tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());


