//try to understand CONTAX

//1..FUNCTION DECLARATION ARE SCANNED AND MADE AVAILBLE
tipper("5");
function tipper(a) {
    var bill = parseInt(a);//parseInt is convert string to int
    console.log(bill+5);
}

//2..VARIABLE DECLARATION ARE SCANNED AND MADE UNDEFINED

// bigTipper("200");
// var  bigTipper = function(a) {
//     var bill = parseInt(a);//parseInt is convert string to int
//     console.log(bill+5);
// }
//currect way to write this var function
var  bigTipper = function(a) {
    var bill = parseInt(a);//parseInt is convert string to int
    console.log(bill+5);
}
bigTipper("200");


// Easier way to understand this 2 poit of variable decl...

var myName = 'Rudra';
console.log(myName);

//..when you declare variable after consol..
//like this...
// console.log(myName);
// var myName = 'Rudra';
//this is UNDEFINED

//..when you dont declare variable 
//like this...
// console.log(myName);
//this is threw ERROR