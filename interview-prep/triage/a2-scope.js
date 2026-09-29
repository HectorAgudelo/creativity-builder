// console.log(name) //undefined
// console.log(name2) //referenceError

var name = 'hector'
let name2 = 'patricica'


if(2 == 2){
    var digit = 3
    let digit2 = 4
    console.log('inside')
}

console.log(digit) //undefined
// console.log(digit2) //referenceError


const digit3 = 4

const person = {
    name: 'hector'
}

digit3 = 5
console.log(digit3) // this cannot be reassigned the const doe snot allow it

person.name = 'patricia' 

console.log(person) // i can change the value in the object but i cant point it to other object.


const person2 = () => {
    const name2 = 2
     function sum (){

        console.log(name2) //the variable inside the outer function gets printed first 
        console.log(name2)   

    }
    sum()
}  
person2()   
