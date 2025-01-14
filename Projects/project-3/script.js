const courses =[
    {
        name: "Complete ReactJS course",
        price:"2.3",
    },
    {
        name: "Complete Angular course",
        price:"2.1",
    },
    {
        name: "Complete Html course",
        price:"2.7",
    },
    {
        name: "Complete C++ course",
        price:"2.8",
    },
    {
        name: "Complete Django course",
        price:"1.8",
    },
];
function generateLIST() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";

    courses.forEach((course) => {
        
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$ "+course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}
// generateLIST();
window.addEventListener("load", generateLIST);

const button1 = document.querySelector(".sort-btn");

button1.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    
    generateLIST();
});

const button2 = document.querySelector(".btn-primary");
button2.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    
    generateLIST();
});