// [18:26]$ node a8-arrays.js
// 6
// 4
// true
// false


function myReduce(array, callback, start) {
    let accumulator = start;
    
    for (let i = 0; i < array.length; i++) {
        // We call the passed-in function and save its return value back into accumulator
        accumulator = callback(accumulator, array[i]);
    }
    
    return accumulator;
}

// Tested once by adding up [1, 2, 3]
const sum = myReduce([1, 2, 3], (acc, item) => {
    return acc + item;
}, 0);

console.log(sum); // Logs: 6



const list = [1, 2, 3]

console.log(list.push(4)) // 4, new length
console.log(list === list)      //true, the array mutates
console.log(list === [...list, 5]) // false, creates a new array and React pays attention to this one

