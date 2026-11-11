import { EmployeeParent } from "./Employee.js";

class Teacher extends EmployeeParent{
    constructor(subject){
        super(112,"Raj")
        this.subject = subject
    }
    responsibilities(){
        console.log(`${this.subject} is the Subject`);
        
    }
    displayData(){
        console.log("Data Invoked");
        
    }
}

const teacherObj = new Teacher("Maths")
teacherObj.responsibilities() //Child Func using child obj
teacherObj.displayData()
teacherObj.displayDetails()

const empObj = new EmployeeParent(112,"Raj")
empObj.responsibilities()
empObj.displayDetails()
console.log(empObj.empId);
console.log(empObj.empName);


