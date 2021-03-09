class User{
    constructor(user,email){
        this.user = user;
        this.email = email;
        this.balance = 0;
    }
    makeWithdrawl(amount){
        this.balance -= amount;
        this.displayBalance();
    }
    makeDeposit(amount){
        this.balance += amount;
        this.displayBalance();
    }
    displayBalance(){
        console.log(this.user+'s balance is '+this.balance);
    }
    makeTransfer(user,amount ){
        user.balance += amount;
        this.balance -= amount;
        this.displayBalance();
        user.displayBalance();
    }
}

const tom = new User("Tom", "wexler18@gmail.com");
const erin = new User("Erin", "erin@gmail.com");
const goku = new User("Goku", "goku@gmail.com");


tom.makeDeposit(100);
tom.makeDeposit(100);
tom.makeDeposit(100);
tom.makeWithdrawl(100);

erin.makeDeposit(100);
erin.makeDeposit(100);
erin.makeWithdrawl(100);
erin.makeWithdrawl(100);


goku.makeDeposit(1000);
goku.makeWithdrawl(100);
goku.makeWithdrawl(100);
goku.makeWithdrawl(100);


goku.makeTransfer(erin, 200);

