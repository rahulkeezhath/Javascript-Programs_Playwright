class Vehicle{
    startEngine(){
        console.log("Start Engine Function Invoked");
        
    }
    constructor(Brand,Color){  //Parameterized Constructor
        console.log("Constructor Invoked");
        this.Brand = Brand
        this.Color = Color
    }
    displayCarDetails(){
        console.log(this.Brand);
        console.log(this.Color);
   }
}
const vehicle = new Vehicle("Benz","White") //Object Creation
vehicle.startEngine()
vehicle.displayCarDetails()

const vehobj = new Vehicle("Ather", "Black")
vehobj.startEngine()
vehobj.displayCarDetails()


class Student{
    constructor(Mark1, Mark2, Mark3){
        this.Mark1 = Mark1
        this.Mark2 = Mark2
        this.Mark3 = Mark3
    }
    displayStudentDetails(){
        console.log(this.Mark1);
        console.log(this.Mark2);
        console.log(this.Mark3);    
    }
    averageMark(){
        let result = (this.Mark1+this.Mark2+this.Mark3) /3
        console.log("Average:",result);  
    }
}

const stuobj = new Student(80,85,90)
stuobj.displayStudentDetails()
stuobj.averageMark()

const stuobj1 = new Student(50,55,65)
stuobj1.displayStudentDetails()
stuobj1.averageMark()



