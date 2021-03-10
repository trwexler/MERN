class card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class effect extends card{
    constructor(name, cost, amount){
        super(name, cost, amount);
        this.amount = amount;
    }
    afflict(target){
        target.res = target.res - this.amount;
        console.log(target.name+"'s","Resiliance has been lowered to ", target.res, " by ", this.name);
    }
    buff(target){
        target.res = target.res + target.power;
        console.log(target.name+"'s","Resiliance has been elevated to ", target.res, " by ", this.name);
    }
    plusStrength(target){
        target.power = this.amount + target.power;
        console.log(target.name+"'s","Strength has been elevated to ", target.power, " by ", this.name);
    }
}

class unhandledPromise extends effect{
    
    constructor(name){
        super(name, Math.floor(Math.random()*5), Math.floor(Math.random(5)*5));
    }
    afflict(target){
        super.afflict(target);
    }
}

class hardAlgo extends effect{
    constructor(name){
        super(name, Math.floor(Math.random()*5), Math.floor(Math.random(5)*5));
    }
    buff(target){
        super.buff(target);
    }
}

class pairProgramming extends effect{
    constructor(name){
        super(name, Math.floor(Math.random()*5), Math.floor(Math.random(5)*5));
    }
    plusStrength(target){
        super.plusStrength(target);
    }
}



class unit extends card{
    constructor(name, cost, power, res){
        super(name, cost, power, res);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res = target.res - this.power;
        console.log(target.name+"'s resiliance has been lowered to", target.res);
    }
}


class RedBeltNinja extends unit{
    constructor(name){
        super(name, 3, 3, 4);
    }
    attack(target){
        super.attack(target);
    }
}

class BlackBeltNinja extends unit{
    constructor(name){
        super(name, 4, 5, 4);
    }
    attack(target){
        super.attack(target);
    }
}




const RedNinja = new RedBeltNinja("Red Belt Ninja");
console.log(RedNinja);
const HardAlgorithm = new hardAlgo("Hard Algorithm");
console.log(HardAlgorithm);
HardAlgorithm.buff(RedNinja);

const BlackNinja = new BlackBeltNinja("Black Belt Ninja");
console.log(BlackNinja);

const UnhandledPromiseRejection = new unhandledPromise("Unhandled Promise Rejection");
console.log(UnhandledPromiseRejection);
UnhandledPromiseRejection.afflict(RedNinja);


const PairProgramming = new pairProgramming("Pair Programming");
console.log(PairProgramming);
PairProgramming.plusStrength(RedNinja);


RedNinja.attack(BlackNinja);

