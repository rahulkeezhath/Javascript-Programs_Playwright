//if(condition){
//}

// 2 condition
/*if(condition){
}else{
}*/

// multiple conditions
/*if(condion1){
}
else if(condition2){
}
else{
}*/

let age=20
let hasLicense=false
if(age>=18){
    console.log("You are eligible to drive");
}


if(hasLicense){
    console.log("You can drive");
}else{
    console.log("You cannot drive");
}


//(If else short form)
// Ternary Operator
//condition ? exprnTrue :exprnFalse;

const result = age>=18? "You are Eligible" : "Not Eligible"
console.log(result)




let marks = 95
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=80){
    console.log("Grade B");
}
else if(marks>=70){
    console.log("Grade C");
}
else if(marks>=60){
    console.log("Grade D");
}
else if(marks>=50){
    console.log("Grade E");
}
else{
    console.log("Fail");
}



// switch statement

/*switch(exprn){
case value
case value2
case value 3

case value n

default
} */


let day =5

switch(day)
{
    case 1:
    console.log("Today is Monday")
    break  // immediate exit or humping statement
    case 2:
    console.log("Today is Tuesday")
    break
    case 3:
    console.log("Today is Wednesday")
    break
    case 4:
    console.log("Today is Thursday")
    break
    case 5:
    console.log("Today is Friday")
    break
    case 6:
    console.log("Today is Saturday")
    break
    case 7:
    console.log("Today is Sunday")
    break

    default:
    console.log("Invalid")
}