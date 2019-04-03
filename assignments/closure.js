// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let total = (function (){
  let a = 7;
  return function() {let b = 3; let multiplyNum = (a * b); return multiplyNum}
})();

total();


//EXAMPLE?
// function outer() {
//   let b = 10;
//   function inner() {
//         let a = 20; 
//         console.log(a+b);
// }
//   return inner;
// }
// console.log(outer)


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
