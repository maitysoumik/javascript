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

const x = 5;
const displayTwoNumbers = function() {
    const y = 10;
    const displayThreeNumbers = function(){
        const z = 15;
        console.log(z, y, x);
    }
    displayThreeNumbers(); 
}
displayTwoNumbers();
