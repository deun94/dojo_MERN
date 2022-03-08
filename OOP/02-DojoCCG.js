class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}



// ================Unit Card===============

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power =power;
        this.res = res;
    }
    attack(target){
        if(target instanceof Unit){
            target.res -= this.power;
            console.log(`${this.name} attacked ${target.name}!! Reducing its resillience by ${this.power}`);
        }
        else{
            throw new Error("Target must be a unit!");
        }
    }
}


//=================Effect Card=================
class Effect extends Card{
    constructor(name, cost, stat, magnitude){
        super(name, cost);

        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        let move = "";
        if (this.magnitude >0){
            move = "Raise";
        }else{
            move = "Lower";
        }
        
        this.text = `${move} the ${target.name}'s ${this.stat} by ${this.magnitude}`;

        if(target instanceof Unit){
            if(this.stat == "power"){
                target.power += this.magnitude;
                console.log(`${this.text}! Now the ${target.name}'s power is ${target.power}`);
            }
            else if (this.stat =="resilience"){
                target.res += this.magnitude;
                console.log(`${this.text}! Now the ${target.name}'s resillience is ${target.res}`);
            }
        }else{
            throw new Error("Target must be a unit!");
        }
    }

}
//============================new instance of units
const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
const unit2 = new Unit("Black Belt Ninja", 4,5,4);



//=============================new instances of effects
const effect1 = new Effect("Hard Algorithm", 2, "resilience", 3);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
const effect3 = new Effect("Pair Programming", 3, "power", 2);

//=============turn 1
// play Hard algorithm and target Red Belt Ninja
effect1.play(unit1);


//===============turn 2
//play unhandled promise to red belt
effect2.play(unit1);


//===============turn 3
//pairprogramming on red belt ninja

effect3.play(unit1);
//red belt ninja attacks black belt ninja
unit1.attack(unit2);