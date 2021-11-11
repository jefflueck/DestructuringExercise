// Question one
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets);
// should print 8
console.log(yearNeptuneDiscovered);
// should print 1846

// Question 2
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears);
// should print object {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Question 3
function getUserData({ firstName, favoriteColor = 'green' }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' });
// Should return object {firstName Alegandro, favoriteColor: purple}
// Missed the string interpolation:
// correction:
// returns Your name is Alejandro and you like purple
getUserData({ firstName: 'Melissa' });
// Should return object {firstName: Melissa, favoriteColor: green}
// correction:
// Your first name is Melissa and you like green
getUserData({});
// Should return object{undefinded, favoriteColor: green}
// correction:
// my answer was retuning undefined
// output:
// Your first name is undefined and you like green

// Array Question 1
let [first, second, third] = ['Maya', 'Marisa', 'Chi'];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

// Array Question 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  'Raindrops on roses',
  'whiskers on kittens',
  'Bright copper kettles',
  'warm woolen mittens',
  'Brown paper packages tied up with strings',
];

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // Whiskers on kittens
console.log(aFewOfMyFavoriteThings); // [Bright copper kettles, warm wollen mittens, Brown paper packages tied up with strings]

// Array Question 3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // [30, 20] correct answer was [10, 30, 20]

// ES5 assigning variables to object properties questions
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

// refactor
let obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const {
  numbers: { a = 3, b = 4 },
} = obj;

// // Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

[1,2] = [2,temp]

const raceResults = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre'];

function results([first, second, third, ...rest]) {
  return {
    first,
    second,
    third,
    rest,
  };
}
