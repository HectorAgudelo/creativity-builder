// const digit = 3
// //digit = 'hello' 
// // digit = 'hello'
// //       ^

// // TypeError: Assignment to constant variable.

// let copyDigit = digit;
// copyDigit = 10

// console.log(digit, copyDigit) // this would print 3, 10

// const obj = {name: 'hector'}
// const copyObj = obj
// copyObj.name = 'patricia'

// console.log(obj.name, copyObj.name) // this would print patricia, patricia

// //copyObj = {age:38} // TypeError
// //console.log(copyObj)

// //home/hectordesk/Documents/Personal_Projects/typeScript/interview-prep/triage/a1-retest.js:19
// // copyObj = {age:38} // TypeError^

// // TypeError: Assignment to constant variable.

// console.log(5 == "5", 5 === "5") // coercion on the first match true, and false on the second

// const values = [0, -0, 0n, "", false, null, undefined, NaN]


// const vals = values.forEach((x)=>{
//     if(!x){
//       const displayVal = Object.is(x, -0)? "-0":String(x);
//       console.log(displayVal, ' it is a falsy')
//     }
// })

// console.log(vals) 

// // 3 10
// // patricia patricia
// // true false
// // 0  it is a falsy
// // -0  it is a falsy
// // 0  it is a falsy
// //   it is a falsy
// // false  it is a falsy
// // null  it is a falsy
// // undefined  it is a falsy
// // NaN  it is a falsy
// // undefined

// let isString = 'hello'
// isString[0] = 'J'
// console.log(isString)

// // let [...string] = isString
// // string[0]= 0
// // let joinString = string.join("")

// // console.log(joinString)

// let digit = 7

// let newDigit = digit
// console.log(newDigit)   // 7
// newDigit = 10
// console.log(newDigit) // 10
// console.log(digit) // 7


// const person = {name:'pat'}

// const newPerson = person
// console.log(newPerson) // {name:'pat'}
// newPerson.name = 'hec'
// console.log(newPerson) // {name:'hec'}
// console.log(person)  //{name:'hec'}

// let animal = 'cat'
// animal[0]= 'bo'
// console.log(animal) //cat

// let digit = 5
// let isString = '5'

// if(digit + isString){
//   console.log('coercion', typeof(isString), 'string', typeof(digit), 'number') //coercion
// }

// console.log(digit, isString, typeof(isString), 'string', typeof(digit), 'number', 'part2 answer to the point 4. they dont change') // 5 "5"

// if(digit-isString){
//   console.log('nothing') // ignore
// }
// console.log(typeof(isString), 'string', typeof(digit), 'number')

// let convertDigit = Number(isString)
// console.log(typeof(convertDigit))  // number

// if(digit == isString){
//   console.log('coercion', 'true')  //coercion, true
// }

// if(digit === isString){
//   console.log('false') //ignore
// }

const digit = 0
const empty = ""
const names = null

console.log(Boolean(digit)) // false
console.log(Boolean(empty)) // false
console.log(Boolean(names))  //false


let person;
const human = null

console.log(typeof(person), typeof(human));  //undefined  object