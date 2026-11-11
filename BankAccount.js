class BankAccount{  //Encapsulation - Variables Hiding
    #balance
    constructor(AccntHolder, IntiBalance){
        this.AccntHolder = AccntHolder
        this.#balance = IntiBalance
    }
    getBalance(){
        console.log(this.#balance);
        
    }
    deposit(amount){
        this.#balance+= amount
    }
    withdraw(amount){
        this.#balance-=amount
    }
}   

const bankObj = new BankAccount("Ram",20000)
bankObj.AccntHolder= "Akshay"
console.log(bankObj.AccntHolder);
//bankObj.#balance = 10000
bankObj.getBalance()
bankObj.deposit(1000)
bankObj.getBalance()
bankObj.withdraw(500)
bankObj.getBalance()
