// for, while, do-while

//For Loop

/*for(initialize;condition;updation){
//code
}*/

for(let i=1; i<=5; i++){
    console.log(i);
}

for(let j=10; j<=20; j++){
    console.log(j);
    
}

//switch task 

let vowel= 'w'

switch(vowel){
    case 'a' :
        case 'e':
            case 'i':
                case 'o':
                    case 'u':
                    console.log("Vowel")
        break

        default:
            console.log("Not Vowel");
            

}


//While Loop

/*initialize;
while(condition){
//updation
}*/

let a=5
while(a<=10){
    console.log(a);
    a++
}


/*for(let i=10; i>=0 ; i--){
    console.log(i);
    
}*/

let b=10
while(b>=0){
    console.log(b);
    b--
}

//do-while

//do{
//}while(condition)

let x= 6
do{
    console.log(x);
    x++
} while(x>10)