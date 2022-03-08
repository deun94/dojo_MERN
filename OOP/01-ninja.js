class Ninja{
    constructor(name,health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
        //default attributes are not passed in arguments
    }
    sayName(){
        console.log(`The name of ninja is ${this.name}`); // you need backticks
        // console.log(this.name);
    }

    showStats(){
        console.log(`Hi! My name is ${this.name}. I am super healthy! My health is ${this.health}% with speedy ${this.speed} and strengthy ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
        console.log(`${this.name} has drank sake! his health is now ${this.health}`);
    }

}
// const ninja1 = new Ninja("Hyabusa");
const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

// ==============================SENSEI CLASS ==================> inhertence and super
class Sensei extends Ninja{
    constructor(name){
        super(name, 200);//super means run the constuctor of the parent method
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
