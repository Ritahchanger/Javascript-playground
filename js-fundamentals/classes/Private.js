class BankAccount{

    #balance;

    constructor(initialBalance){

        this.#balance = initialBalance;

    }
    deposit(amount){

        this.#balance+=amount;

        console.log(`Deposited: ${amount}, Balance: ${this.#balance}`)

    }
    getBalance(){

        return this.#balance;

    }

}

const account = new BankAccount(100)

account.deposit(50)

console.log(account.getBalance())