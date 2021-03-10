class ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    } //ddd
    sayName(){
        console.log("Hi! My name is "+ this.name+"!");
    }  ///ddd
    showStats(){
        console.log("Name: "+this.name, "| Health: "+this.health, "| Speed: "+this.speed, "| Strength: "+this.strength);
    }

    drinkSake(){
        this.health += 10;
        let oldHealth = this.health - 10;
        console.log("Plus-ten health! " + oldHealth + " -> " + this.health);
    }
}


class sensei extends ninja{
    constructor(name){
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("I am wise!");
    }
    showStats(){
        super.showStats();
        //console.log(yo+ "Wisdom: " +this.wisdom);   didn't work... asking question. log below
    }
}

//work

//Roshi.showStats();
// Name: Roshi | Health: 200 | Speed: 10 | Strength: 10 script.js:12:17
// undefinedWisdom: 10

