
class User{
    constructor(user,email){
        this.user = user;
        this.email = email;
        this.account = [];
        this.account.push(new BankAccount(0.02, 0)); 
    }
    withdrawal(amount, n){ //please enter the amount of your withdrawal and the number associated with your account! If you forget how many accounts you have, then just run "yourName.seeAccounts()" !
        this.account[n-1].makeWithdrawal(amount);
        return this;
    }
    deposit(amount, n){ //please enter the amount of your deposit and the number associated with your account!
        this.account[n-1].makeDeposit(amount);
        return this;
    }
    
    balance(n){
        console.log('Current Balance: '+ this.account[n-1].balance);
        return this;
    }
    seeAccounts(){ //run "yourName.seeAccounts()" to see how many accounts you have and all account info at once!
        let numofAccts = this.account.length;
        console.log("You have " + numofAccts + " accounts!");
        return this;
    }
    newAccount(){  //enter yourName.newAccount() to add a new account!
        this.account.push(new BankAccount(0.02, 0));
    }

}


class BankAccount {
    constructor(intRate, balance) { 
        this.intRate = intRate;
        this.balance = balance;
    }

    makeWithdrawal(amount){
        this.balance -= amount;
        if(this.balance<0){
            console.log("Insufficient funds: Charging $5 fee.");
            this.balance -= 5;
        }
        return this;
    }
    makeDeposit(amount){
        this.balance += amount;
        return this;
    }
    
    displayBalance(){
        console.log('Current Balance: '+ this.balance);
        return this;
    }

    yieldInterest() {
	this.balance += this.balance * this.intRate ;
    this.displayBalance();
    return this;
    }
}


const tom = new User("Tom", "wexler18@gmail.com");
const erin = new User("Erin", "erin@gmail.com");
const goku = new User("Goku", "goku@gmail.com");

