////********************************quistion 1*************************************

function reverseNumber(num) {
  let reversedNum = 0;
  while (num > 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversedNum;
}

let x = 98765;
console.log(reverseNumber(x)); // Output is  56789  
////********************************quistion 2*************************************

function convertFirstLetterToUpper(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
const input = "tuwaiq academy";
const output = convertFirstLetterToUpper(input);
console.log(output); // Output is 'Tuwaiq Academy' 
////********************************quistion 3*************************************

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}
const input1 = "Javascript is awesome";
const output1 = countVowels(input1);
console.log(output1); // Output is  8 
////********************************quistion 4*************************************

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
const num = 17;
const result = isPrime(num); 
console.log(result); // Output is true if the number 17 and well be fulse if number 21 or any number non-primary*
////********************************quistion 5*************************************

function findLongestWord(str) {
  const words = str.split(" ");
  const longestWord = words.reduce((prev, curr) => {
    return curr.length > prev.length ? curr : prev;
  });

  return longestWord;
}

const str = "Kingdom of Saudi arabia";
const longestWord = findLongestWord(str);

console.log(longestWord); // Output is 'kingdom' 

////********************************quistion 6*************************************

function sortString(str) {
  const chars = str.split("");
  chars.sort();
  return chars.join("");
}

const str1 = "webmaster";
const sortedString = sortString(str1);

console.log(sortedString); // Output is 'abeemrstw'   
////********************************quistion 7*************************************

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(3, 2)); //  + will be 5
console.log(sum(-3, -6)); // will be -9
console.log(sum(7, 3)); // will be 10

////*****************************quistion 8****************************************

function calcAge(years) {
  const days = years * 365;
  return days;
}

const ageInDays = calcAge(65);
console.log(ageInDays); // Output is  23725
const ageInDays1 = calcAge(20);
console.log(ageInDays1); // Output is 7300
////*******************************quistion 9************************************

function howManySeconds(hours) {
  return hours * 3600;
}

const seconds = howManySeconds(2);
console.log(seconds); // Output is 7200
////*******************************quistion 10************************************

function lessThanOrEqualToZero(num) {
  return num <= 0;
}
console.log(lessThanOrEqualToZero(5)); // false
console.log(lessThanOrEqualToZero(0)); // true
console.log(lessThanOrEqualToZero(-2)); // true
////*******************************quistion 11************************************
function amountOfDigits(num) {
  return num.toString().length;
}
console.log(amountOfDigits(1000)); // Output is 4
////*******************************quistion 12************************************

function objectToArray(obj) {
  return Object.entries(obj);
}
let object = {
  name: "arwa",
  lname: "alharbi",
  age: 20,
};
let toArray = {
  shrimp: 15,
  tots: 12,
};
console.log(objectToArray(object)); // all object
console.log(objectToArray(toArray)); // to array
console.log(objectToArray({}));
////*******************************quistion 13************************************

function Paths(n) {
  let cities = 1;
  for (let i = 2; i <= n; i++) {
    cities *= i;
  }
  return cities;
}

console.log(Paths(4));
console.log(Paths(1));
console.log(Paths(9));
////*******************************quistion 14************************************

function doubleLetters(word) {
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) {
      return true;
    }
  }
  return false;
}
console.log(doubleLetters("loop")); //true
console.log(doubleLetters("yummy")); //true
console.log(doubleLetters("orange")); // false
console.log(doubleLetters("munchkin")); //false

////*******************************quistion 15************************************

function CurrentDate(format) {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();
  return day + "/" + month + "/" + year;
}
const todaysDate = CurrentDate("dd-mm-yyyy");
console.log("9/12/2002");

////*******************************quistion 16************************************
function getDays(date1, date2) {
  const diff = Math.abs(date1 - date2);
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days;
}

const date1 = new Date("June 14, 2019");
const date2 = new Date("June 20, 2019");
console.log(getDays(date1, date2)); // Output is 6

const date3 = new Date("December 29, 2018");
const date4 = new Date("January 1, 2019");
console.log(getDays(date3, date4)); // Output is 3

const date5 = new Date("July 20, 2019");
const date6 = new Date("July 30, 2019");
console.log(getDays(date5, date6)); // Output is 10

////*******************************quistion 17************************************

let animals = [
  "dog",
  "cat",
  "bat",
  "cock",
  "cow",
  "pig",
  "fox",
  "ant",
  "bird",
  "lion",
  "wolf",
  "deer",
  "bear",
  "frog",
  "hen",
  "mole",
  "duck",
  "goat",
];

function animalCount(txt) {
  let count = 0;
  for (let i = 0; i < animals.length; i++) {
    if (txt.includes(animals[i])) {
      count++;
    }
  }
  return count;
}
console.log(animalCount("goatcode"));
////*******************************quistion 18************************************

let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

if (num1 > num2) {
  console.log("The larger number is:", num1);
} else {
  console.log("The larger number is:", num2);
}

////*******************************quistion 19************************************

function mostExpensive(jewelry) {
  let mostExpensiveName = "";
  let mostExpensivePrice = 0;

  for (const [name, price] of Object.entries(jewelry)) {
    if (price > mostExpensivePrice) {
      mostExpensivePrice = price;
      mostExpensiveName = name;
    }
  }

  return `The most expensive one is the ${mostExpensiveName}`;
}
const jewelry = {
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650,
};

const result2 = mostExpensive(jewelry);
console.log(result2); // Output: "The most expensive one is the Pearl Necklace"

////*******************************quistion 20************************************

function cupSwapping(swaps) {
  let ballPosition = "B";
  for (let i = 0; i < swaps.length; i++) {
    const swap = swaps[i];
    if (swap[0] === "A" && swap[1] === "B") {
      ballPosition = "A";
    } else if (swap[0] === "C" && swap[1] === "A") {
      ballPosition = "C";
    }
  }
  return ballPosition;
}
cupSwapping(["AB", "CA", "AB"]); // returns "C"
cupSwapping(["AC", "CA", "CA", "AC"]); // returns "B"
cupSwapping(["BA", "AC", "CA", "BC"]); // returns "A"

const cupSwapping1 = ["AC", "CA", "CA", "AC"];
console.log(cupSwapping(cupSwapping1)); // output is c
