let score = "Sonu"

// console.log(score);
// console.log(typeof score);

let inStringValueBe = Number(score);

// console.log(inStringValueBe); // we get NaN means not a number if try to convert string to number
// console.log(typeof inStringValueBe); // but type converted to number 

let value = "33"

let inValueBe = Number(value)

// console.log(inValueBe); // it successfully converted into because the value is actually in number but with quotations
// console.log(typeof inValueBe); // and type is number

let string = 100

// console.log(string);
// console.log(typeof string)

let inStringBe = String(string);

// console.log(inStringBe); // o/p is 100 it got converted
// console.log(typeof inStringBe); // it gave string type in o/p 

let boolean = 1
let inBooleanBe = Boolean(boolean)

// console.log(inBooleanBe); // if we give 1 it is converting to true or if we give 0 it will convert into false
// console.log(typeof inBooleanBe); // type is converted to boolean


/* operators */

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);    // basic operations
// console.log(2/2);
// console.log(2%2);

let firstName = "Hello";
let secondName = " Sonu";

// console.log(firstName + secondName); // string concatination

console.log("2" + 2); // here priority is important if first is string then everything is converted into operation
console.log(2 + "2" + 2); 
console.log("2" + 2 + 2); // if you have want to add first and then add string then use boardmass rule
console.log(2 + 2 + "2"); // here first is number so it is adding and then attaching to string priority

// using boardmass rule

console.log("2" + (2 + 2)); // output is 24 






