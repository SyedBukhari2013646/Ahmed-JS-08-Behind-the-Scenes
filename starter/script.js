'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   //   console.log(firstName);

//   function printAge() {
//     let output = `${firstName} ,You are ${age}, and born in ${birthYear}`;

//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and You are millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'New output';
//     }

//     console.log(millenial);

//     console.log(output);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Ahmed';
// console.log(calcAge(1991));

//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Ahmed';
let job = 'Web Developer';
const year = 2001;

// functions

console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}

// var addExp = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example
console.log(undefined);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Product Deleted');
}

// Some windows Object

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
