// You reimplemented JavaScript's built-in Array.prototype.map from scratch: a method added to the array prototype 
// that loops over this, calls a passed-in function with each element, its index, and the whole array, and returns 
// a new array of the results without touching the original.

// Along the way you worked through higher-order functions (passing a function as an argument), prototype method 
// lookup (why every array can reach a method you defined once), and this binding (why the array on the left of 
// the dot shows up inside the method body).

Array.prototype.myMap = function (functionName) {

let newArray = [];
for (let i = 0; i < this.length; i++) {
  console.log(this[i]);
  console.log(i);
  console.log(this);
  let result = functionName(this[i], i, this);
  newArray.push(result);
 }
  return newArray;
};

function multiplyByTwo(num) {
  return num + 2;
};

const arrayToPlay = [1, 2, 3, 4, 5];

const mappedArray = arrayToPlay.myMap(multiplyByTwo);
console.log(mappedArray);