let numArray=[1,2,3,4,5]

console.log("Using For Of loop"); // Array Recommened is For of

for(let n of numArray){
    console.log(n);
}

console.log("Using For Loop");
let sum=0

for(let i=0;i<numArray.length;i++){
    //console.log(numArray[i]);
    sum=sum+numArray[i]  //Or Sum+=numArray[i]
}
console.log(sum);

console.log("Using Reduce Method");

let total=numArray.reduce((p,c)=>p+c,10) // 10 is sum value i.e initialization value 10 instead of 0
console.log(total);

//Filter
let evenArray=numArray.filter(num=>num%2==0)
console.log(evenArray);





///task

/*let numArray1=[2,3,5,6,8,9]

for(let m of numArray1){
    console.log(m);
}

let sum1=0

for(let j=0; j<numArray1.length; j++){
    console.log(j);
    sum1+=numArray1[j]
}
console.log(sum1);
*/
console.log("*******Map Method**********");

let doubleArray= numArray.map(n=>n*2)
console.log(doubleArray);



let numArray2=[3,5,8,10,12,15]

const result = numArray2.filter(nm=>nm%5==0).map(nm=>nm*5).reduce((p,c)=>p+c)
console.log(result);
 