class ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log("Hi! My name is "+ this.name+"!");
    }
    showStats(){
        console.log("Name: "+this.name, "| Health: "+this.health, "| Speed: "+this.speed, "| Strength: "+this.strength);
    }

    drinkSake(){
        this.health += 10;
        let oldHealth = this.health - 10;
        console.log("Plus-ten health! " + oldHealth + " -> " + this.health);
    }
}

// COPIED FROM THE CONSOLE:
// const goku = new ninja("goku", 100);

// goku.showStats();
// Name: goku | Health: 100 | Speed: 3 | Strength: 3 script.js:12:17

// goku.drinkSake();
// Plus-ten health! 100 -> 110 script.js:18:17

// goku.showStats();
// Name: goku | Health: 110 | Speed: 3 | Strength: 3 script.js:12:17

// goku.sayName();
// Hi! My name is goku!