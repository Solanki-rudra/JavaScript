var returnedvalue = Math.max(2,5,6,7,4,9,4,1);
// console.log(returnedvalue);

var myObj = {};
Object.assign(myObj,{a:1,b:2,c:3,d:4},{x:5,y:6,z:7});


// console.log(myObj);

function sumOne(a,b) {
    return a+b;    
}
//  SPREAD 
// var myA = [5,4];
// console.log(sumOne(myA));
//USING SPREAD
var myA = [5,4];
// console.log(sumOne(...myA));

function sumTwo(a,b,...args) {

    console.log(args);

    let multi = a*b;
    let sum = 0;
    for (const arg of args){
        sum += arg;
    }
    return [multi,sum]; 
}
console.log(sumTwo(2,3,9,4,2));
