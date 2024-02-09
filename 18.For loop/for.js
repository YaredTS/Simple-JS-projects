// for loop = repeat some code a LIMITED amount of times


for (let i =0; i<= 2; i++){
    console.log("Hello");
}
for (let i =0; i<= 2; i++){
    console.log(i);
}


// If you ever need skip iteration 
// you can use continue keyword


for (let i=1; i <=20; i++){
    if (i==13){
        continue;
    }else{
        console.log(i);
    }
}

for (let i=1; i <=20; i++){
    if (i==13){
        break;
    }else{
        console.log(i);
    }
}