// this gives alert message whenever the page lets load. void function which takes "message" as input basically string input.
alert('hello welcome to learn something new and interesting');

// how to write messages :-
// .write method 
// document.write() - not an ideal method to write
// document.getElementById() - takes element by id and assign the value to it. ideal way.
// console.log - used for debugging purposes.
var check = "js is good";
let name = prompt("what's your name?"); // prompt is used to take input from the user.
let message = 'explore something new every day';
let output = name + " " + message;
document.getElementById('but').innerHTML = output;
document.write(output);
console.log(output);

//VARIABLES.
// var let const
// const is block scope
let boo = true;
if(boo){
const v = "hi";
    if(!boo){
        const v = "hello";
        // v is defined in this block only.
    }
    // v = "assign"; const v = "assign" -> these will give an error.

}

// let can be reassigned but re declared in the block of scope.

// there are six type data :-
// string
// null - no value
// boolean
// undefined - declared variable hasn't given the value
// numbers
// symbol - unique value that's not equal to other value.
