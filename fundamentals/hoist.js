// #1
console.log(hello);
//undefined becuase hello is not yet defined variable
var hello = "world";

//#2 
var needle = 'haystack';
test();
//calling on the function not yet defined
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//will print the redefined magnet because the function is called

//#3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//then will print super cool which is a universal b/c the function has not been called yet

//#4
var food = 'chicken'; //declares food as chicken as global
console.log(food); //print "chicken"
eat(); //calls the function eat()
function eat(){
    food = 'half-chicken'; //re defines food as half chicken
    console.log(food); //print half chicken
    var food = 'gone'; //redefines food as gone but does not print 
}


// //#5??
// mean(); //calls the function mean
// console.log(food); //console log error mean is not function
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//#6
console.log(genre); //genre is not yet defined 
var genre = "disco"; //genre is disco
rewind(); //calls the function rewind
function rewind() {
    genre = "rock"; //redefines genreas rock
    console.log(genre); //prints rock
    var genre = "r&b"; //again?
    console.log(genre); //prints r&b
}
console.log(genre); //prints disco

//#7/
dojo = "san jose";
console.log(dojo); //prints san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); //prints seattle
    var dojo = "burbank";
    console.log(dojo); //prints burbank
}
console.log(dojo); //prints seattle and burbank NOOO
//because learn function is called up there

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
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
//function can be called from anywhere