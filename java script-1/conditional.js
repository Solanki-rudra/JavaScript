// var temprature;
// temprature = 30;
// if(temprature<30){
//     console.log('its good');
// }
// else{
//     console.log("its not good");
// }

var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;

// if(isLoggedIn){
//     console.log("Logged in success");
//     if(isEmailVerified){
//         console.log("Email is verified");
//         if(cardInfo){
//             console.log("you can make a purchase");
//         }
//     }
// }

// make easy this time

if(isLoggedIn&&isEmailVerified&&cardInfo){
    console.log("you can make a purchase");
}
else{
    console.log('SORRY! you can not make a purchase');
}