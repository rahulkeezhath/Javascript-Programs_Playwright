const student = {
    name:"Rahul K", //keyvalue
    age:24,
    city:"Manjeri"
}
console.log(student.name); //Dot notation
console.log(student["age"]); //Bracket notation

student.gender= "Male" // Add New Keyvalue
console.log(student);

student.age=23
console.log(student);

delete student.city
console.log(student.city);

for(let key in student){
    console.log(key + ":" + student[key]);
}

