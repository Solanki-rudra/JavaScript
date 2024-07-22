const uno = () => {
    return "I am one";
}
const dos = () => {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ("I am one");    
    }, 3000);
    
   });
}
const tres = () => {
    return "I am three";
}

const callMe = () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};
callMe();