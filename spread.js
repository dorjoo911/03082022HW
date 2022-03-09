"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
module.exports = { copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests

function copyArray(arr) {
  let newArray = [...arr];
  return newArray;
}

function concat(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  return newArr;
}
// const arr2 = [4, -5, 5, 6, 7, 8, 0, -1, -1];

function findMin(...numbers) {
  return Math.min(...numbers);
}
// console.log("findMin: " + findMin(arr2));

function combineObjs(obj1, obj2) {
  let combine = Object.assign(obj1, obj2);
  return combine;
}

// *** **** ** ** *** **** ** *** **** **** *** *** *** **** *** **
/*
Write a function printNumbers(from, to) that outputs a number every second,
starting from from and ending with to.
Make two variants of the solution.
1. Using setInterval.
2. Using nested setTimeout.
*/

function printNumbers(from, to) {
  let timerId = setInterval(() => {
    console.log(from);
    if (from == to) {
      clearInterval(timerId);
    }
    from++;
  }, 1000);
  return timerId;
}
// printNumbers(1, 5);

function printNestedNumbers(from, to) {
  setTimeout(function go() {
    console.log(from);
    if (from < to) {
      setTimeout(go, 1000);
    }
    from++;
  }, 1000);
}
// printNestedNumbers(3, 7);

let i = 0;

setTimeout(() => console.log(i), 100); // 1000

// assume that the time to execute this function is >100ms
for (let j = 0; j < 1000; j++) {
  i++;
}

function printIncraseSec(from, to) {
  setTimeout(function go() {
    console.log(from);
    if (from < to) {
      setTimeout(go, 1000 * from);
    }
    from++;
  }, 1000);
}
printIncraseSec(1, 6);
