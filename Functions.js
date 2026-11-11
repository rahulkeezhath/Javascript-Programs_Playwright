function printHello(){
    console.log("Hello World");
}
printHello()

function addition(a,b){
    let result = a+b
    console.log(result);
}
addition(10,20)
addition(15,25)

function subtraction(c,d){
 let sub= c-d
 return sub
}
const output = subtraction(35,10)
console.log(output);
console.log(subtraction(50,30)); // Not Recommended

//Anonymous Function
const greet=function()
{
    console.log("Good Morning");
    
}
greet()

//Arrow Function   // Maximum Short line code
const display = ()=>{console.log("My Name is Rahul K");}
display()

const add =(a,b,c)=>a+b+c
const sum=add(5,10,15)
console.log(sum);
