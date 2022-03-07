// #1
console.log(hello);
var hello = "world";

//interpreter :
    // var hello;
    //console.log(hello);
    //hello = "world";
    //will do undefined since var is defined after the console.log

//#2 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
/*interpreter: 
    var needle
    function test(){
        var needle
        needle = 'magnet';
        console.log(needle);
    }
    test()
*/

/* result: 
print magnet
*/

//#3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

/*interpreter: 
    var brendan
    function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
    brendan = "super cool"
    console.log(brendan)
*/
//result: print super cool because we didnt call on the function


//#4
var food = 'chicken'; 
console.log(food); 
eat(); 
function eat(){
    food = 'half-chicken';
    console.log(food); 
    var food = 'gone';
}

/* interpreter:
var food
function eat(){
    var food
    food = 'half-chicken';
    console.log(food); 
    food = 'gone';
}
console.log(food)
eat();

//result: print chicken, then half-chicken in the eat function
*/


//#5
/*
mean(); //calls the function mean
console.log(food); //console log error mean is not function
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
*/

/*interpreter:
var mean = function? 
mean is not function
*/

//#6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
/*interpreter
    var genre
    function rewind() {
        var genre
        genre = "rock";
        console.log(genre);
        genre = "r&b";
        console.log(genre);
    }
    genre = "disco"
    rewing();

    //result: rock r*b THEN disco

    */

//#7/
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

/*interpreter:
    function learn() {
        var dojo;
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
    }
    dojo = "san jose"
    console.log(dojo);
    learn();

    result: san jose, seattle, burbank

    */

//#8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    // const dojo = {};
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";//error of assignment to CONSTANT variable so change to let 
    }
    return dojo;
}
/* interpreter
function makeDojo(name, students){
    // const dojo = {};
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

    result : print {name: chicacgo, students: 65, hiring: true}
            pring closed for now
*/
