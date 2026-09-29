try {
  somethingElse();
  something();
  
} catch (error) {
  console.log(error, "error from the function"); // error from te function expression call
}

const something = () => console.log("booo");
function somethingElse() {
console.log("second boo");  
}

function defaulted (name = 'pati') { // the default value for name will print
    console.log(name)
} 

defaulted()


let arr = [1,2,3]

let [...newArr] = arr   // [1,2,3] rest

console.log(newArr)

let combined = [...arr, ...newArr]

console.log(combined)   // [1,2,3,1,2,3]  spread


function newSomething (fn){
    console.log(typeof(fn))
    return fn();
}

newSomething(somethingElse) //return second boo

const person = {
    name: 'pati',
    human(){
      const logName = () => {
        console.log(this.name)   //pati
      }
    logName()
    }
}

person.human()