export class EmployeeParent{
    constructor(empId, empName){
        this.empId = empId
        this.empName = empName
    }
    responsibilities(){
        console.log("Teacher");
        
    }
    displayDetails(){
        console.log(`${this.empId} ${this.empName}`);
        
    }
}