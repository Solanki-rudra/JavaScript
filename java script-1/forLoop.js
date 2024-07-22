const country = [
    "Gujrat",
    "Assam",
    "Delhi",
    "Chennai",
    2022,
    "Maharastra"
];

// for(let i=0; i<country.length; i++){
//     if(typeof country[i] !== "string") continue;
//     console.log(country[i]);
// }
// for(let i=0; i<country.length; i++){
//     if(typeof country[i] !== "string") break;
//     console.log(country[i]);
// }

let i=0;

while(i < country.length){
  console.log(country[i]);
  i++;
}