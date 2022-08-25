"use strict";

// Calculate the sum of numbers from 1 to 10

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
  console.log(sum);
}
//==============================

// Create a function that will convert from Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}
console.log(celsiusToFahrenheit(19));

//==============================

// Create a function that will convert from Fahrenheit to Celsius

function fahrenheitToCelsius(fahrenheit) {
  const celsious = (fahrenheit - 32) * 1.8;
  return celsious;
}
console.log(fahrenheitToCelsius(35));

//================================

//  Calculate the sum of numbers in an array of numbers

const numbers = [5, 10, 18, 27, 45, 75, 50, 35];
let num3 = 0;
for (let i = 0; i < numbers.length; i++) {
  num3 = num3 + numbers[i];
}
console.log(num3);

//================================

// Calculate the average of the numbers in an array of numbers

const scors = [10, 20, 40, 60, 75, 100, 125];
let total = 0;
for (let i = 0; i < scors.length; i++) {
  total += scors[i];
}
console.log(total / scors.length);

//================================

// Create a function that receives an array of numbers and returns an array containing only the positive numbers

let num1 = [2, -3, 5, -1, 10, 9, -17, -55, 66];

function number(num1) {
  let positive = [];

  for (let i = 0; i < num1.length; i++) {
    const num2 = num1[i];
    if (num2 >= 0) {
      positive.push(num2);
    }
  }

  return positive;
}

const positive = number(num1);
console.log(positive);

//================================

// Find the maximum number in an array of numbers
const myArray = [5, 15, 20, 50, 30, 8, 100];

let maxNumbers = myArray[0];
for (let i = 1; i < myArray.length; ++i) {
  if (myArray[i] > maxNumbers) {
    maxNumbers = myArray[i];
  }
}
console.log(maxNumbers);

//================================

// Create a function that will return a Boolean specifying if a number is prime
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

//  Create a function that will merge two arrays and return the result as a new array

const margeArreys = function (firstArray, secondArray) {
  const marginArrey = firstArray.concat(secondArray);
  const newArrey = marginArrey;
  return newArrey;
};

const classFiveBoysName = ["Tasir", "Saqib", "Sourob", "Rahat", "Anowar"];

const classFiveGirlsName = ["Noyan", "Sultana", "Sarmin", "Sania", "Afrina"];
const classFiveAllStudents = margeArreys(classFiveBoysName, classFiveGirlsName);

console.log(classFiveAllStudents);
