var isEven = (number) => {
    return number %2 === 0;
}
// console.log(isEven(50));

//arrow Function
var result = [2,4,6,8].every((e) => (e%2 === 0));
console.log(result);