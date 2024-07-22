const names = ["Youtube","facebook","instagram","Netflix","Amazon"];

for (const n of names){
    console.log(n);
}

const symbols = {
    yt : "Youtube",
    ig : "instagram",
    fb : "facebook",
    lco : "LearnCodeOnline.in",
};

for (const n in symbols){
    console.log(`Key is: ${n} and value is: ${symbols[n]}.`);
}