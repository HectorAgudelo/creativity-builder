//console.log(name2) // referenceError
console.log(name) //undefined
var name = 'hector'
let name2 = 'patricia'
//ReferenceError: Cannot access 'name2' before initialization
if(name2){
    var greeting = 'hello'
}
console.log(greeting)
// this one prints hello
if(name2){
    let greeting2 = 'hi'
}

//console.log(greeting2) 
//ReferenceError: greeting2 is not defined


let person = 'hector'
function individual (){
    let person = 'joaquin';
   return () => {
        console.log(person)
    };
}

individual()
let fucnIndividual = individual()
fucnIndividual()

//joaquin

for(var i = 0; i<3; i++){
    setTimeout(()=>{           // there is only one copy of the variable for the whole loop
        console.log(i)
    },5000)
}

for(let i = 0; i<3; i++){
    setTimeout(()=>{
        console.log(i, 'with let')
    },5000)
}

// undefined
// hello
// joaquin
// 3
// 3
// 3
// 0 with let
// 1 with let
// 2 with let