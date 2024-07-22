"use strict";

let krishn = "myName";

function init(){
    var firstName = "Rudra";
    function sayHello(){
        console.log(krishn);
        // console.log(`Your name is: ${firstName}.`);
    }
  return sayHello();
}

// let value = init();
init()

//Another way to understand closure

// function doAddition(x){
//     return function (y){
//         return x + y;
//     };
// }
// var add5 = doAddition(5);
// console.log(add5(10));
// //second easy way
// //console.log(doAddition(5)(10));



