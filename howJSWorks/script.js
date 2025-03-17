// console.log(x);
// var x = 5;
// console.log(x);

// console.log(test);
// test();
// function test() {
//     console.log("Function called.")
// }
// console.log(test);

// console.log(test);

// var test = function() {
//     console.log("Function called.");
// }
// test();
// console.log(test);

// console.log(test1);
// console.log(test2);
// console.log(x);
// function test1() {
//     console.log("Function1 called.")
// }
// var test2 = function() {
//     console.log("Function2 called.");
// }
// var x = 5;
// console.log(test1);
// console.log(test2);
// console.log(x);

//console.log(y); //y is not defined

//console.log(x); 
//Cannot access 'x' before initialization
// let x;
// console.log(x);
// x=5;
// console.log(x);

// const sumTwo = add(4, 5);
// function add(x, y) {
//     let sum;
//     sum=0;
//     console.log("Computing Sum...");
//     sum = x + y;
//     function sayHi() {
//         console.log('Hi');
//     }
//     sayHi();
//     return sum;
// }
// console.log(sumTwo);


// const x = 5;
// const displayTwoNumbers = function() {
//     const y = 10;
//     console.log(y, x);

// }
// displayTwoNumbers();

// const x = 5;
// const displayTwoNumbers = function() {
//     //const x = 10;
//     console.log(y, x);

// }
// displayTwoNumbers();

// const x = 5;
// const displayTwoNumbers = function() {
//     const y = 10;
//     const displayThreeNumbers = function(){
//         const z = 15;
//         console.log(z, y, x);
//     }
//     displayThreeNumbers(); 
// }
// displayTwoNumbers();

//Closures

// function can also return functions.

// function outer() {
//     let x = 10;
//     function inner() {
//         console.log("Inner Function");
//     }
//     return inner;
// }

// let returnDemo = outer();
// //console.log(returnDemo);

// returnDemo();

// function outer() {
//     let x = 10;
//     return function inner() {
//         console.log(x);
//     }
// }
// const printX = outer();
// //console.log(printX);
// printX(); 

// function printFullName(firstName, lastName) {
//     function printName() {
//         console.log(firstName, lastName);
//     }
//     return printName;
// }
// const print = printFullName('Dev', 'Goyal');
// print();

// While we return printName, the function is returned bundled with the required elements with it.

//Activity: Design a function such that it prints the number of times it has been called.


function countCalls() {
    let count = 0;
    return function() {
        count++;
        console.log(`I am called ${count} time(s)`);
    }
    
}

const printCount = countCalls();
printCount();
printCount();






