/** FUNCTIONS */
/** DECLARING FUNCTIONS */

// simple function
let a = 5;
let b = 10;
let total = 0;
function calc(a, b) {
    total = (a * b);
    console.log(total);
}
calc(a, b);
console.log(total);

// undefined variable passing
let c;
function calc1(c) {
    total += c;
    console.log(total);
}
calc1(c);  // HERE IT GIVES NaN that no variable integer is passed.

// initialising in para -> c = undefined.
// ***** IMP --> if c is assigned initially and then value is given in the parameter then initial value will be considered only.
function calc2(c = 5) {
    console.log(c);
}
calc2(c);


// giving some conditions for assigning value of para -> c = undefined
function calc3(c) {
    /** there are two ways - */
    // 1.
    c = c == undefined ? 0 : c;

    // 2.
    c = c || 2; // if c is undefined then it is false so assign 2 to it or if it is true then same value is assinged.

    console.log(c); // gives 0 
}


/**
 * Parameters are essentially passed to functions by value — 
   so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function, 
   the change is not reflected globally or in the code which called that function.

   When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function
 */




function myFunc(theObject) {
    theObject.make = "Toyota";
}

const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};

// x gets the value "Honda"
const x = mycar.make;

// the make property is changed by the function
myFunc(mycar);
// y gets the value "Toyota"
const y = mycar.make;




// When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function
function myFunc(theArr) {
    theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30




/** FUNCTIONS EXPRESSIONS */

const square = function (number) {
    return number * number;
};
const m = square(4);
console.log(m);

/** both of these example will run as the value is passed*/
//assining const value to let 
const square0 = function (number) {
    return number * number;
};
let m0 = square0(4);
console.log(m0);


// assining let value to const
let square1 = function (number) {
    return number * number;
};
const m1 = square1(4);

console.log(m1);
square1 = 65;
console.log(square1);
console.log(m1);


// first initialise the variable 

const m4 = square4(4);  /** HERE WE GET AN **ERROR** BECAUSE square4 is interpreted before intialising */
console.log(m4);
const square4 = function (number) {
    return number * number;
};

/** Function expressions are convenient when passing a function as an argument to another function. 
     The following example shows a map function that should receive a function as first argument and an array as second argument: */

function map(f, a) {  // passing f as para
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]); 
    }
    return result;
}



/**
    PASSING VALUES AS GLOBAL AND LOCAL SCOPE IN PARAMS 
 */

let k = 1000;
let l = 34;

fun(5,10);
fun1();
function fun(k,l){
    // k = 5 and l = 10
    let total = 0; // doesn't matter if globally present
    function mul(){return (k*l)}; // does not need to provides params will use outer one as it is in that scope.
    function add(){return (k+l)};
    total += mul();
    total =+ add(); // notice that add is added to total =+ does not add 
    console.log(total);

}
function fun1(){
    let total = 0; // doesn't matter if globally present
    function mul(){return (k*l)}; // will use global scope values
    function add(){return (k+l)};
    total += mul();
    total += add();
    console.log(total);

}



/**JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function 
 * (and all other variables and functions that the outer function has access to).

However, the outer function does not have access to the variables and functions defined inside the inner function. 
This provides a sort of encapsulation for the variables of the inner function.

Also, since the inner function has access to the scope of the outer function, the variables and 
functions defined in the outer function will live longer than the duration of the outer function execution, 
if the inner function manages to survive beyond the life of the outer function.
 A closure is created when the inner function is somehow made available to any scope outside the outer function. */

 function val(){
    const secret = 12334;
    return function val1(){
        console.log('number ${secret}');
    }
 }

 const asdf = val();
 asdf();








 /** ARROW FUNCTIONS */
let temp = 90;
 let qwe = (temp) => temp*5; 
 console.log(qwe(10));

qwe = (temp) => {
    // multiple statements
    temp = 120;
    return temp;
}
console.log(qwe(10));