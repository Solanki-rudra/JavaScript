var myName = "Rudra";
console.log("Line no.1"+myName);

function sayName() {
   console.log("Line no.2"+myName);
   sayName2();
   function sayName2() {
    console.log("Line no.3"+myName);
   }
}
sayName();