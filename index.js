// Data Types
// Number , Strings , Boolean , Undefined , Null , Symbol & Obj

// let , var , const :
// Resources  :  W3scools.com , MDN WEBDOCks , Devdocs , GFG

//  Function
function newfunction(a) {
  return a;
}
// Fn -> Anonymous Function
// a  )  Remove the name and  assign the function as a value
const newfunction2 = function (a) {
  return a;
};

// Fn  -> Arrow Function
// a ) Remove the 'function' keyword & remove the 'function Name'
// b ) Add Fat arrow '=>' after your paranthesis '()'
// c ) Optional : If you have an expression to return remove the
//      curly braces as well a return keyword  'x+2 -5*10'  / x +'s'  (a)
// d ) Note : curly braces without return keyword do not return anything
// e )  If you have only a single parameter , you can remove the paranthesis aswell

const newfunction3 = (a) => a;

const fnSolGuresh = () => "Hello, World";

//  Function Invoking / Calling
newfunction3();

// Return Keyword

// Parameters : Are inputs for the function

// let a = 2
// let b = 3
function Add(a, b) {
  return a + b;
}
// Add(2,3) => 5
// Add(8,2) => 10

// Higher order Functions : function that accepts functions as parameters and/or returns a function.

function Add2(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const Add2 = (a) => {
  (b) => {
    (c) => a + b + c;
  };
};
const Add2 = (a) => (b) => (c) => a + b + c;

// Add2(2)(3)(4)

function Multiply(a, b) {
  return a * b;
}

function Substract(a, b) {
  return a - b;
}

function Calculate(a, b, fn) {
  fn(a, b);
}

Calculate(2, 3, Multiply);
Calculate(8, 3, Substract);

//  Self Invoking Functions
let counter = 0;
let counter2 = 0;

function Increment() {
  let counter = 0;
  counter = counter + 1;
}

function SetIncrement() {
  counter = 0;
}

//  Self Invoking Functions  : A self-invoking function is a nameless (anonymous) function that is invoked immediately after its definition
//  a ) Wrap the entire function in paranthesis
//  b) Immediatley Call it outside
const customCounter = (function () {
  let privateCounter = 0;

  return function Increment2() {
    privateCounter = privateCounter + 1;
    return privateCounter;
  };
})();

const customCounter2 = (() => {
  let privateCounter = 0;

  return () => {
    privateCounter = privateCounter + 1;
    return privateCounter;
  };
})();

//  Arrays :

var temparr = ["Ice Cream", 1, "", , null, 3.14];

const Fruit = ["Mango", "Guava", "Custard", "Apple", "Watermelon"];
const Vegetable = ["Potato", "Mushroom", "Spinach", "Peas", "Carrot"];

// Spread Operator (...)
const Vegetable2 = [
  "Potato",
  "Mushroom",
  ...Fruit,
  "Spinach",
  "Peas",
  "Carrot",
];
// ['Potato', 'Mushroom', 'Mango', 'Guava', 'Custard', 'Apple', 'Watermelon', 'Spinach', 'Peas', 'Carrot']

// Map Method : Map() creates a new array from calling a function for every array element
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

const Circumference = (r) => 2 * 3.14 * r;
const gen_Circumference = (item, index, arr) => 2 * 3.14 * r;

let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 18, 25, 30];

let newarr = arr.map(Circumference);

// Filter : The JavaScript Array filter() Method is used to create a new array from a given array
// consisting of only those elements from the given array which satisfy a condition set by the argument method.

const customFilter = (r) => r % 2 == 0;
let filterArr = arr.filter(customFilter);

//  Chaining of Map & Filter
let filteredCircumference = arr.filter(customFilter).map(Circumference);

//  Reduce : The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.
const customAcc = (previousValue, currentValue, Index, array) =>
  (previousValue + currentValue + Index) * 100;
let result = filteredCircumference.reduce(customAcc, 0);

let wholenewArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Sum2N(sum, curr) {
  return sum + curr;
}

wholenewArr.reduce(Sum2N, 0);

// Async Functions

// function A(){
//   return 1
// }
// function B(){
//   return 2
// }

// B();
// A();

async function Increment2() {
  counter = await datafromapi;
  counter = counter + 1;
}

const Increment3 = async () => {
  let counter = 0;
  counter = counter + 1;
};

// Objects :
// Object values are written as key : value pairs (key and value separated by
//  a colon(:)).

let peopleArr = [
  {
    fullName: "Tahir",
    age: 23,
  },
  {
    fullName: "Shaista",
    age: 21,
  },
];

const EligibleVoters = peopleArr.filter((item) => item.age >= 22);

// Spread Operator

const address = { location: "Banglore", country: "India" };

const TahirObj = {
  fullName: "Tahir",
  age: 23,
  ...address,
};

// Assignment 1 : Hint  : Map fn

let number = 8;

let multiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let multiples = multiplier.map(function (element) {
  return element * number;
});

// Assignment 2 :  You have a certain amount in the bank and
//  you have an array of payouts to complete . Using the reducer function
//  find the remaining value in you bank account after eall the payouts have been processed

let bank = 5000;

let payouts = [150, 200, 75, 99, 1, 30, 260, 80];

let rembalance = payouts.reduce(function (balance, payout) {
  return balance - payout;
}, bank);

const acc = (previousvalue, currentvalue, index, array) =>
  0 - currentvalue + previousvalue;
const balance = payouts.reduce(acc, bank);

// Methods in Objects
// const address = { location : 'Banglore' ,country : 'India' }
const TahirObj2 = {
  fullName: "Tahir",
  age: 23,
  ...address,
  greetings: function () {},
  details: function () {
    console.log(this.fullName);
  },
};

// Promises : A wrapper to a function
// Pending :
// Fulfilled
// Rejected

// new :  pre keyword for  Constructor ()

const amountPromise = new Promise(function (res, rej) {
  //  does something
  if (number > 5) {
    res();
  } else {
    rej();
  }
});
