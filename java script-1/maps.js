var myMap = new Map();
myMap.set(1, "tom");
myMap.set(2, "jerry");
myMap.set(3, "ninja");
myMap.set(4, "you");

// console.log(myMap);

for (let key of myMap.keys()) {
   // console.log(`key is ${key}`); 
}
for (let value of myMap.values()) {
   // console.log(`value is ${value}`); 
}
for (let[key, value] of myMap){
   // console.log(`key is ${key} and value is ${value}`);
} 

myMap.forEach((k,v) => {
    //console.log(`key is ${k} and value is ${v}`)
});

myMap.delete(3);
console.log(myMap);