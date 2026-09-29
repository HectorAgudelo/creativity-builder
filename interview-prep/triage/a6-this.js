//'use strict'


// pedro
// /home/hectordesk/Documents/Personal_Projects/typeScript/interview-prep/triage/a6-this.js:7
//         console.log(this.name)
//                          ^

// TypeError: Cannot read properties of undefined (reading 'name')

// [13:04]$ node a6-this.js
// pedro
// undefined

// [13:49]$ node a6-this.js
// pedro
// 8 hector
// 8 hector
// {}
// levis
// pedro
// undefined
// pedro

const person = {
    name: 'pedro',
    sayName(){
        console.log(this.name)
    }
}

person.sayName() // this prints pedro
const individual = person.sayName// this prints pedro
//individual()                    // this is not a function, gets an type error TypeError: Cannot read properties of undefined (reading 'name') with use strict
//and just undefined without use strict



 setTimeout(person.sayName, 2000); // undefined
 setTimeout(person.sayName.bind(person)) // pedro
 setTimeout(()=>person.sayName(),2000) // pedro


const human = {
    personName:'hector'
}

function subject (age){
    console.log(age , this.personName)
}

subject.call(human, 8)
subject.apply(human, [8])


const logThisArrow = () => {
    console.log(this);
};

const userObject = { name: 'Hector' };

const boundResult = logThisArrow.bind(userObject); //ignored bind
boundResult();


class Name {
    constructor(parameters) {
        this.brand = parameters

    }
    clothes(){ console.log(this.brand)}
}

const jeans = new Name('levis') 
jeans.clothes()