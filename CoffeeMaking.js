class CoffeeMachine{  //Abstraction - function hiding
    #boilWater(){
        console.log("Boil Water");
        
    }
    #addMilk(){
        console.log("Add Milk");
        
    }
    #addSugar(){
        console.log("Add Sugar");
        
    }
    #addCoffeePowder(){
        console.log("Add Coffee Powder");
        
    }
    #addTeaPowder(){
        console.log("Add Tea Powder");
        
    }
    makeCoffee(){
        this.#boilWater()
        this.#addMilk()
        this.#addSugar()
        this.#addCoffeePowder()
        console.log("Coffee Ready");
        
    }
    makeTea(){
        this.#boilWater()
        this.#addMilk()
        this.#addSugar()
        this.#addTeaPowder()
        console.log("Tea Ready");
        
    }
}

const coffeeObj = new CoffeeMachine()
coffeeObj.makeCoffee()
coffeeObj.makeTea()