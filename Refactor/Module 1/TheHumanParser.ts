/**
 * Module 1: The Human Parser (Tracing Execution)
 *
 * Objective
 * Strengthen your Working Memory and Short-Term Memory by manually tracing
 * how data evolves through a function. You are not just reading code.
 * You are becoming the CPU.
 *
 * The Practicum
 * Below is a TypeScript function designed to be intentionally cumbersome.
 * It uses mutation, nested logic, and poorly tracked state.
 *
 * Your Tasks
 * 1) Trace the State:
 *    Given:
 *      data = [2, 5, 8, 10, 3]
 *      threshold = 6
 *    Write out the value of every variable at the end of every loop iteration:
 *      - result
 *      - temp
 *      - i
 *      - j (when the inner loop runs)
 *
 * 2) Explain the Logic:
 *    In plain English, describe what this function is trying to accomplish.
 *
 * 3) Refactor:
 *    Rewrite this function in a clean, readable style that produces the same result.
 *
 * Submission Rule
 * Show your manual trace first.
 * Then provide your explanation.
 * Then provide your refactor.
 */

function processData(data: number[], threshold: number): number[] {
	let result: number[] = [];
	let temp = 0;

	for (let i = 0; i < data.length; i++) {
		temp = data[i];
		if (temp % 2 === 0) {
			if (temp > threshold) {
				result.push(temp);
			} else {
				for (let j = 0; j < 1; j++) {
					temp = temp * 2;
					if (temp > threshold) {
						result.push(temp);
					}
				}
			}
		} else {
			if (temp + 1 > threshold) {
				result.push(temp + 1);
			}
		}
	}
	return result;
}

// Exercise input to trace manually:
const data = [2, 5, 8, 10, 3];
const threshold = 6;

// Optional: run this only after you complete your manual trace.
// console.log(processData(data, threshold));

// 1) Manual Trace
// Iteration 1 (i=0):
// temp = 2
// temp % 2 === 0 (true)
// temp > threshold (2 > 6) (false)
// Inner loop runs (j=0):
// temp = temp * 2 = 4
// temp > threshold (4 > 6) (false)
// result = []

// Iteration 2 (i=1):
// temp = 5
// temp % 2 === 0 (false)
// temp + 1 > threshold (5 + 1 > 6) (false)
// result = []

// Iteration 3 (i=2):
// temp = 8
// temp % 2 === 0 (true)
// temp > threshold (8 > 6) (true)
// result.push(8) => result = [8]

// Iteration 4 (i=3):
// temp = 10
// temp % 2 === 0 (true)
// temp > threshold (10 > 6) (true)
// result.push(10) => result = [8, 10]

// Iteration 5 (i=4):
// temp = 3
// temp % 2 === 0 (false)
// temp + 1 > threshold (3 + 1 > 6) (false)
// result = [8, 10]

// Final result: [8, 10]

// 2) Explanation of Logic
// The function `processData` takes an array of numbers and a threshold value. It iterates through each number 
// in the array and checks if it is even or odd. If the number is even, it checks if it is greater 
// than the threshold. If it is, it adds the number to the result array. 
// If it is not greater than the threshold, it doubles the number and checks 
// again if the doubled value is greater than the threshold. If it is, it adds the doubled value to the result array. 
// If the number is odd, it checks if the number plus one is greater than the threshold. If it is, it adds 
// the number plus one to the result array. Finally, it returns the result array containing all the
//  numbers that met the specified conditions.

// 3) The Refactor Challenge
//
// How would you rewrite this function to be readable?
//
// If you were explaining this to another developer, you wouldn't say
// "loop, then check parity, then nested loop to double."
// You'd say: "Process each number to its potential maximum,
// then filter for those above the threshold."
//
// Try to rewrite it using clean TypeScript.
//
// Hint 1: Use a .map() to handle the transformations
//         (double even numbers, add 1 to odd numbers).
//
// Hint 2: Use a .filter() to keep only values above the threshold.
//
// Hint 3: Or, use a simple for...of loop with Guard Clauses
//         (early continue statements) to keep the nesting flat.
//
// How would you write it?

const processDataRefactored = (data: number[], threshold: number): number[] =>
  data
    .map(x => (x % 2 === 0 ? (x > threshold ? x : x * 2) : x + 1))
    .filter(x => x > threshold);
