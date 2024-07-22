fetch("https://api.chucknorris.io/jokes/random")
.then((response) =>{
    return response.json();
})
.then((data) => {
    // console.log("DaTa is: " , data);
    var joke = data.value;
    console.log("JOKE :",joke);
})
.catch();