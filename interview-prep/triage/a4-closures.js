// const makeCounter = () => {
//     let count = 0
//     return () => {
//         return count+=1
//     }
// }

// const counter = makeCounter()
// const counter2 = makeCounter()
// console.log(counter()) // 1
// console.log(counter2())
// console.log(counter()) // 2
// console.log(counter2())
// console.log(counter()) // 3
// console.log(counter2())
// console.log(counter()) // 4
// console.log(counter2())

// const account = () => {
//     let balance = 10

//      const deposit = (amount) => {
//         return balance+=amount
//     }
//     const withdrawal = (amount) => {
//         return balance -= amount
//     }

//     const total = () => {
//         return balance 
//     }

//     return {total, deposit, withdrawal}
// }

// const bank = account()
// console.log(bank.deposit(100)) // 100
// console.log(bank.total()) // 100
// console.log(bank.withdrawal(50)) //50
// console.log(bank.total()) //50


// const cache = () => {
//     let storage = {}    
//     return (item)=>{
//         if(item in storage){
//             console.log('this is already in')
//             return storage[item]
//         }
//         console.log('new value')
//         return storage[item] = item     
//     }
// }

// const store = (cache())
// console.log(store(2), 'first 2')
// console.log(store(2), 'second 2')
// console.log(store(1), 'new value')
// console.log(store(2), 'third 2')

// function processScores(...params) {
//     console.log(params);
//   const doubled = params.map(s => s * 2);
//   console.log(doubled);
// }

// processScores(10, 20, 30);