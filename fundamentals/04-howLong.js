//#1.
Number.prototype.isPrime = function(){
        for( let i=2; i<=Math.sqrt(this); i++ ) {//or equal to because you need to include the number
            if( this % i === 0 ) {
                return false;
            }
        }
        return true;
    }

// Number.prototype.isPrime = function() {
//     for( let i=2; i<=Math.sqrt(this); i++ ) {//or equal to because you need to include the number
//         return this % i === 0
//         ? false
//         : console.log("true")
//     }
//     return true;
// }

// calculuate how long it took to find the 10,000thprime number
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// let num2 = 2;
// while(primeCount <1e6){
//     if(num2.isPrime()){
//         primeCount ++;
//     }
//     num2++;
// }
// console.log(`The 10,000,00th prime number is ${num2-1}`);
//#2. Fibonacci
// recursive
function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    rFib(20);
    // iterative
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    iFib(20);
//recursive should be faster


//3.reverse a string
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");// because each function has nested for loop inside of them
console.log(reversed1);

function reverseString(str){
    let reversed2 = "";
    for(var i = str.length-1 ; i>=0; i--){
        reversed2 += str[i];
    }
    return reversed2;
}

//new version

function newReverse(str){
    let reversed = ""
    for(let character of str){ // lets you directly access the element inside the string
        reversed = character + reversed;
    }
    return reversed;
}

console.log(reverseString(story));
console.log(newReverse(story));