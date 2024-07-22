var states = ["Gujrat","Delhi","Maharastra","Punjab"];
//Another way to declare Array...
var country = new Array("India","England","Japan","Germany");

// console.log(states[0]);
states.unshift("Rajasthan");
console.log(states);
states.shift();
console.log(states);

country.pop();
console.log(country);

// console.log(country.indexOf("Japan"));

// console.log(Array.from("Rudra"));