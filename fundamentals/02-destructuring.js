//predict the output. If it will throw an error, state the error
//#1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
/*
const [randomCar] = cars -> Tesla
const [, otherRandomCar ] = cars
skip Tesla, Mercedes

Result: Tesla, Mercedes
*/

//#2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);

console.log(otherName);

/* will Throw an error because name is the part of the dict of employee thus name is not defined outside of that dict
you would have to call otherName only */

//#3.
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

/* password will be 12345
hash password will be undefined. It has not been assigned a value yet!*/

//#4.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

/* first will be 2
second will be skip three times, =5
rhird will be skip 8 so 2
console.log(does 2 equal 5?) = false
console.log(does 2 equal 2?) = true*/

//#5.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

/* extracting the key: value from last Test
secondKey , extracting the array from lastTest
skilling 1, going to 5

result should be value, [1,5,1,8,3,3], 1, 5*/



