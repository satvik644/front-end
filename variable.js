/** variables scope and how they perform. */ 

let a = 10;

function test(){
    // takes value of a.
    console.log(a);
}

console.log(a); // prints 10
test(a); // prints 10
a = 12;
test(a); // prints 12;


/** declaring a new variable in the scope */
function test1(){ 
    let a = 15;
    console.log(a);
}
console.log(a); // prints 12
test1(a) // prints 15
console.log(a) // print 12



/** reassining same reference to new value */
function test2(){
    a = 20;
    console.log(a);
}
console.log(a); // prints 12
test2(a);  // prints 20
console.log(a); // pirnts 20



/** CONST */
const b = 'test';

function check(){
    // b= 'test1';  /** HERE THIS WILL GIVE AN ERROR. BECAUSE const CAN NOT REASSINGED. */
    console.log(b);
}
// console.log(b);
// check();
// console.log(b);



/** creating a new reference and assigning value to that */
function check1(){
    const b = 'test2';
    console.log(b);
}
console.log(b);
check1();
console.log(b);