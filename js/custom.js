"use strict";

//answer 01..

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
  console.log(sum);
}

//==============================

//amswer 02......

function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}
console.log(celsiusToFahrenheit(19));

//==============================

//answer 03....

function fahrenheitToCelsius(fahrenheit) {
  const celsious = (fahrenheit - 32) * 1.8;
  return celsious;
}
console.log(fahrenheitToCelsius(35));

//========================================
//answer 04....

const numbers = [5, 10, 18, 27, 45, 75, 50, 35];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);

//===================================

//answer 05....

const scors = [10, 20, 40, 60, 75, 100, 125];
let total = 0;
for (let i = 0; i < scors.length; i++) {
  total += scors[i];
}
console.log(total / scors.length);

//================================

//answer 06......

let num1 = [2, -3, 0, 5, -1, 10, 9, -17, -55, 66];

function numbers(num1) {
  let positive = [];

  for (let i = 0; i < num1.length; i++) {
    const num2 = num1[i];
    if (num2 >= 0) {
      positive.push(num2);
    }
  }

  return positive;
}

const positive = numbers(num1);
console.log(positive);

//==================================

//answer 07....
const myArray = [5, 15, 20, 50, 30, 8, 100];

let maxNumbers = myArray[0];
for (let i = 1; i < myArray.length; ++i) {
  if (myArray[i] > maxNumbers) {
    maxNumbers = myArray[i];
  }
}
console.log(maxNumbers);

//======================================

// answer 08....
function isPrime(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(isPrime(3));

//=========================
