// [12:33]$ node a9-prototypes.js
// Human { parameters: 'pedro', characteristic: 'primitive' }
// racing tires for toyota supra so it could go at 100 km/h
// true
// true
// true
// false



class Person {
    constructor(parameters) {
        this.parameters = parameters
    }
}

class Human extends Person {                           // numeral 1
    constructor(parameters, characteristic){
        super(parameters);                            // numeral 2
        this.characteristic = characteristic;
    }

}

const individual = new Human('pedro', 'primitive')

console.log(individual) // human { parameters: 'pedro', characteristic: 'primitive' }


class Car {
    wheels= 4;
    constructor(brand){
        this.brand = brand;
    }
    description(){
        return 'racing tires'
    } 
}


class Coupe extends Car {
    characteristic = '2 doors'
    constructor(brand, fast){
        super(brand)
        this.fast = fast
    }

    description(){
    return `${super.description()} for ${this.brand} so it could go at ${this.fast}` // numeral 3
    }
}

const toyota = new Coupe ('toyota supra', '100 km/h')

console.log(toyota.description())


console.log("characteristic" in toyota)      //true
console.log(Object.hasOwn(toyota, "wheels")) //true


// PREDICTION: true. The 'in' operator checks the object, fails to find it, walks the __proto__ link to Coupe.prototype, fails, walks to Car.prototype, finds it, and returns true.
console.log("description" in toyota); 

// PREDICTION: false. Object.hasOwn strictly checks the toyota object itself and refuses to walk the prototype chain.
console.log(Object.hasOwn(toyota, "description"));