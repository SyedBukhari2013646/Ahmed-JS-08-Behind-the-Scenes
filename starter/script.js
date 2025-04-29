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

// //Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Ahmed';
// let job = 'Web Developer';
// const year = 2001;

// // functions

// console.log(addDecl(2, 3));
// // console.log(addExp(2, 3));
// // console.log(addArrow(2, 3));
// function addDecl(a, b) {
//   return a + b;
// }

// // var addExp = function (a, b) {
// //   return a + b;
// // };

// // const addArrow = (a, b) => a + b;

// // Example
// console.log(undefined);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All Product Deleted');
// }

// // Some windows Object

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// This keyword

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(2002);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(2008);

// const ahmed = {
//   year: 2002,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// ahmed.calcAge();

// const aqsa = {
//   year: 2004,
// };

// aqsa.calcAge = ahmed.calcAge;

// aqsa.calcAge();

// const f = ahmed.calcAge;
// f();

// This keyword On Arrow And Regular functions

// var firstName = 'Aqsa';

// const ahmed = {
//   firstName: 'Ahmed',
//   year: 1991,

//   calcAge: function () {
//     console.log(2037 - this.year);

// //Solution 1
// const self = this;
// const isMellenial = function () {
//   console.log(self);
//   console.log(self.year >= 1980 && self.year <= 1996);

//   console.log(this.year >= 1980 && this.year <= 1996);
// };

//Solution 2
//     const isMellenial = () => {
//       console.log(this);
//       console.log(this.year >= 1980 && this.year <= 1996);
//     };
//     isMellenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },

//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// ahmed.greet();
// ahmed.calcAge();

// // Arguments Keyword

// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExp(2, 3, 5, 3);

// // Args for Arrow Keyword
// var addArrow = (a, b) => {
//   console.log(arguments);
//   a + b;
// };

// addArrow(2, 3);

//////////////////////////////////////
//Objective refrence in practice (deep VS shallow choices)

const kubra1 = {
  firstName: 'Kubra',
  lastName: 'bibi',
  age: 19,
};

function shadishudaInsaan(newKubra, newLastName) {
  newKubra.lastName = newLastName;
  return newKubra;
}

const kubraMarried = shadishudaInsaan(kubra1, 'Ahmed');

// const kubraMarried = kubra1;
// kubraMarried.lastName = 'ahmed';

// const kubra2 = {
//   firstName: 'Kubra',
//   lastName: 'Baby❤️‍🔥',
//   age: 19,
//   family: ['akshay', 'shahrukh'],
// };

// // shallow clone just the first layer

// const kubraCopy = { ...kubra2 };
// kubraCopy.lastName = 'Ahmed';

// // console.log('Before: ', kubra2);
// // console.log('After: ', kubraCopy);

// // kubraCopy.family.push('Huzaifa');
// // kubraCopy.family.push('Abdullah');

// // Deep cloning/copying to change in all the layers / nested layers

// const kubraClone = structuredClone(kubra2);
// kubraCopy.family.push('Huzaifa');
// kubraCopy.family.push('Abdullah');
// console.log(kubra2);
// console.log(kubraClone);

const kubra2 = {
  firstName: 'Kubra',
  lastName: 'Baby❤️‍🔥',
  age: 19,
  family: ['akshay', 'shahrukh'],
};

// First create a shallow copy
const kubraCopy = { ...kubra2 };
kubraCopy.lastName = 'Ahmed';

// Then create a deep clone
const kubraClone = structuredClone(kubra2);

// Now modify the family in the deep clone
kubraClone.family.push('Huzaifa');
kubraClone.family.push('Abdullah');

console.log('Original:', kubra2); // Will show 2 family members
console.log('Deep Clone:', kubraClone); // Will show 4 family members
