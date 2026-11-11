for(i=1;i<=5;i++){
    if(i==3){
        break
    }
    console.log(i);
}

console.log("******************");


for(i=1;i<=5;i++){
    if(i==3){
        continue
    }
    console.log(i);
}

console.log("******************");



for(i=1;i<=100;i++){
    if(i%2!=0){
        continue
    }
    console.log(i);
    
}