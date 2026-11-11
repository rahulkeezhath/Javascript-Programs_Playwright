export class AnimalParent {
    constructor(Name){
        this.Name = Name
    }
    eat(){
        console.log(`${this.Name} can eat`);   
    }
}