import { AnimalParent } from "./Animal.js";
class DogChild extends AnimalParent{
    constructor(Name, Breed){
        super(Name)// Parent Class Reference
        //this.Name = Name
        this.Breed = Breed
    }
    bark(){
        console.log("Dog Barked");
    }
}

const dogClassObj = new DogChild("Tobby Shelby", "Siberian Husky")
dogClassObj.bark()
dogClassObj.eat()

const animalClassOnj = new AnimalParent("Tobby")
animalClassOnj.eat()