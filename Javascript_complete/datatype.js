"use strict"; // treat all JS code as newer version

// alert ("Hello") we are using node js not browser this alert will work only with browser!

console.log(3 
    +
    3
) // do not write like this code, The code readability should be high

console.log("Sonu"); // write like this 

let name = "Sonu"; // string
let age  = 21; // number
let isloggedin = true; // boolean

// datatypes primitive
// number
// bigint // it is used for bigger numbers
// eaxmple for bigInt is bigNumber = 30824927098732408n in the end give "n" 
// string => ""
// boolean => true/false
// null => standalone value
// undefined => no value assigned
// symbol => unique
const id = Symbol('123')    // example for symbol datatype with symbol keyword

// datatype non-primitive

// array
const heros = ["Ironman", "superman", "hulk","spiderman"]  // within brackets are called arrays

// function
const myFunction = function(){
    console.log("Hello World")
}  
                                 // keyword is "function" and then parentesis and curly braces
// object
let object = {
    name : "sonu",
    age  : 21          // within curly braces are called objects
}


console.log(typeof(age));

console.log(typeof null); // null type is an object

// memory allocation

// Stack (primitive datatype) Heap (non-primitive datatype)

let myName = "Sonu"

let anotherName = myName

anotherName = "Moni"

console.log(myName)
console.log(anotherName) // in stack it gives a copy to another variable not a refrences original remain the same 

let userOne = {
    name: "sonu",
    age: 21
}

let userTwo = userOne

userTwo.name = "moni"

console.log(userOne.name)
console.log(userTwo.name) // in heap it gives the refernces variable means the original that means everything changes.

