const greeting = 'HellO';
const integer = 2.8;
const unknown = null;
const arr = [1,2];
const obj = { key: 'value' };

console.log(typeof(greeting)) // string
console.log(typeof(integer)) // number
console.log(typeof(unknown)) // null
console.log(typeof(arr)) // number[]
console.log(typeof(obj))  // object


let integer2 = integer;
integer2 = 4;

console.log(integer2);
console.log(integer);

let obj2 = obj;
obj2.key = 'new value';

console.log(obj2);
console.log(obj);


console.log(0=='', 'true')
console.log(0==='', 'false')
console.log(null==undefined, 'true')
console.log(null===undefined, 'false')
console.log(5 == '5', 'true')

const lowerstring = greeting.toLowerCase();
console.log(lowerstring); // 'hello'
console.log(greeting); // 'HellO'


const falsyValues = [0n, null, undefined, NaN, 0, -0, false];

falsyValues.forEach((val) => {
  if (!val) {
    const displayVal = Object.is(val, -0) ? "-0" : String(val);
    console.log(`${displayVal} is falsy`);
  }
});