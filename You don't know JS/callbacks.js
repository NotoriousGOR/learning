// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
function map(array, callback) {
  let clone = [];

  for (let i = 0; i < array.length; i++) {
    clone.push(callback(array[i]));
  }

  return clone;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }

  return output;
}

// see for yourself if your forEach works!
let alphabet = "";

const letters = ["a", "b", "c", "d"];

forEach(letters, function (char) {
  alphabet += char;
});

console.log(alphabet);

// Challenge 5: In challenge 3, you've created a function called map. In this challenge, you're going to rebuild the map function by creating a function called mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.
function mapWith(array, callback) {
  return forEach(array, callback);
}

// Challenge 6
function reduce(array, callback, initialValue) {
  // 1st pass: 4, 2nd: 5, 3rd: 8
  let acc = initialValue;

  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }

  return acc;
}

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0)); //-> 8

// Challenge 7
function intersection(arrays) {
  return arrays.reduce((prev, current) =>
    current.filter((el) => prev.includes(el))
  );
}

console.log(
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
);
// should log: [5, 15]

// Challenge 8
function union(arrays) {
  return arrays.reduce((prev, current) => {
    const element = current.filter((el) => !prev.includes(el));
    return prev.concat(element);
  });
}

console.log(
  union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ])
);
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {
  let output = {};

  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) == array2[i]) {
      output[array1[i]] = array2[i];
    }
  }

  return output;
}

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  let output = {};

  for (let i = 0; i < arrVals.length; i++) {
    output[arrVals[i]] = [];

    for (let j = 0; j < arrCallbacks.length; j++) {
      output[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
    }
  }

  return output;
}

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  const output = {};

  for (const key in obj) {
    if (callback(key) === obj[key]) output[key] = obj[key];
  }
  return output;
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};

console.log(objectFilter(cities, (city) => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  let amountTrue = 0;
  let amountFalse = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!callback(element)) {
      amountFalse++;
    } else {
      amountTrue++;
    }
  }

  return amountTrue > amountFalse ? true : false;
}

// /*** Uncomment these to check your work! ***/

console.log(
  majority([1, 2, 3, 4, 5], function (num) {
    return num % 2 === 1;
  })
); // should log: true
console.log(
  majority([2, 3, 4, 5], function (num) {
    return num % 2 === 1;
  })
); // should log: false

// Challenge 13
function prioritize(array, callback) {
  let output = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (callback(element)) {
      output.unshift(element);
    } else {
      output.push(element);
    }
  }

  return output;
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
console.log(
  prioritize(
    ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
    startsWithS
  )
);
// should log: ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// Challenge 14
function countBy(array, callback) {
  let output = {};

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    const result = callback(element);

    output[result] !== undefined ? output[result]++ : (output[result] = 0);
  }

  return output;
}

// /*** Uncomment these to check your work! ***/
console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  let output = {};

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    output[callback(element)]
      ? output[callback(element)].push(element)
      : (output[callback(element)] = [element]);
  }

  return output;
}

/*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  let output = [];

  for (const key in obj) {
    // The hasOwnProperty() method in JavaScript is used to check if an object has a property that is not inherited from its prototype
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      callback(element) && output.push(key);
    }
  }

  return output;
}

// /*** Uncomment these to check your work! ***/
const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  return func1(func2(value)) === func2(func1(value));
}

// /*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(object, callback) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];

      element !== callback(key) && delete element;
    }
  }

  return object;
}

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n) => n / 2;
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {
  const maxScore = 100;

  const possiblePointsPerCallBack = maxScore / arrOfFuncs.length;

  let score = 0;

  for (let index = 0; index < arrOfFuncs.length; index++) {
    if (arrOfFuncs[index](value)) score += possiblePointsPerCallBack;
  }

  return score;
}

// /*** Uncomment these to check your work! ***/
const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes("6");
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  return arrOfFuncs.reduce((accum, fn) => {
    return fn(accum) || fn(value);
  }, "");
}

// /*** Uncomment these to check your work! ***/
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, "cat")); // should log: 'CATcatCATcat'

// Challenge 21
// I feel like reduce can be used here instead, but I'm unsure how
function highestFunc(objOfFuncs, subject) {
  let tempValue = 0;
  let winner = "";

  for (const key in objOfFuncs) {
    if (Object.hasOwnProperty.call(objOfFuncs, key)) {
      const fn = objOfFuncs[key];

      if (fn(subject) > tempValue) winner = key;

      tempValue = fn(subject);
    }
  }

  return winner;
}

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  let output = startVal;

  for (let index = 0; index < arrOfFuncs.length; index++) {
    const fn = arrOfFuncs[index];
    output = fn(output);
  }

  return output;
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

// /*** Uncomment these to check your work! ***/
console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, (n) => n * 5, (n) => n + 10])); // Should output 10

// Challenge 23
function myFunc(array, callback) {
  return array.findIndex(callback);
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
console.log(myFunc(numbers, isOdd)); // Output should be 1
console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {
  let output = 0;

  array.forEach((item) => (output = callback(item)));

  return output;
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
const nums2 = [1, 2, 3];
myForEach(nums2, addToSum);
console.log(sum); // Should output 6
