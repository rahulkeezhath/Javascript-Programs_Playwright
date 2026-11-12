function displayResult(result){
    console.log("Result is "+ result);
    
}
function findAverage(Mark1, Mark2, Mark3,myCallback){
    let avg = (Mark1+Mark2+Mark3)/3
    myCallback(avg)
}
findAverage(80,85,90,displayResult)


function sum(Mark1,Mark2,Mark3,myCallbk){
    let sum = Mark1+Mark2+Mark3
    myCallbk(sum)
}
sum(70,80,90,displayResult)


