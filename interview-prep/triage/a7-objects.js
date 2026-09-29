// const user = {
//     name: 'pedro'
// }

// const personAge = user?.age

// console.log(personAge)




// const obj = { a: 1, b: 2 }

// console.log(Object.entries(obj))




const knownAs = 'name'

const person = {
    age: 30,
    characteristics: {
        hair: 'long',
        gender: 'male'
    }
}

const instancePerson = {...person, [knownAs]:'peter'} //computed key. this is also how you copy an object without changing the reference
console.log(person)
// [10:32]$ node a7-objects.js
// { age: 30, characteristics: { hair: 'long', gender: 'male' } }
console.log(instancePerson) 
// {  
// age: 30,
//   characteristics: { hair: 'long', gender: 'male' },
//   name: 'peter'
// }
// [10:18]$ node a7-objects.js
// {
//   age: 30,
//   characteristics: { hair: 'long', gender: 'male' },
//   name: 'peter'
// }

const hairColor = 'hairColor'

const hair = {hairColor}

 console.log(hair) //{hairColor: 'hairColor'}
// [10:04]$ node a7-objects.js
// { hairColor: 'hairColor' }

const {age} = person //object destructuring

 console.log(age) // 30
// [10:05]$ node a7-objects.js
// 30 

const shallowPerson = {...person,} // shallow copy, changing a variable


shallowPerson.characteristics.hair = 'short'

 console.log(person) // { age: 30, characteristics: { hair: 'short', gender: 'male' } }

 console.log(shallowPerson) // { age: 30, characteristics: { hair: 'short', gender: 'male' } }

// [10:27]$ node a7-objects.js
// { age: 30, characteristics: { hair: 'short', gender: 'male' } }
// { age: 30, characteristics: { hair: 'short', gender: 'male' } }


const deepCopy = structuredClone(person)

deepCopy.characteristics.hair = 'medium' // this one does not change the original 

console.log(person) //{ age: 30, characteristics: { hair: 'short', gender: 'male' } }
console.log(deepCopy) // { age: 30, characteristics: { hair: 'medium', gender: 'male' } }

// [10:31]$ node a7-objects.js
// { age: 30, characteristics: { hair: 'short', gender: 'male' } }
// { age: 30, characteristics: { hair: 'medium', gender: 'male' } }

 console.log(Object.keys(person)) //[ 'age', 'characteristics' ]
 console.log(Object.values(person)) // [ 30, { hair: 'short', gender: 'male' } ]
 console.log(Object.entries(person)) 

// [
//   [ 'age', 30 ],
//   [ 'characteristics', { hair: 'short', gender: 'male' } ]
// ]

// [10:33]$ node a7-objects.js
// [ 'age', 'characteristics' ]
// [ 30, { hair: 'short', gender: 'male' } ]
// [
//   [ 'age', 30 ],
//   [ 'characteristics', { hair: 'short', gender: 'male' } ]
// ]

const digit = 0

 console.log(digit || 10) // 10

 console.log(digit??10) // 0

// [11:19]$ node a7-objects.js
// 10
// 0


const user = {
    name: 'pedro'
}

const personAge = user?.digit

console.log(personAge?.age) //undefined

console.log(personAge.age, 'without .?') // undefined crash

// [11:24]$ node a7-objects.js
// undefined
// undefined without .?

