/**
 * This function, accumulateAndSpin, mimics a common "bad code" pattern: using a single variable for multiple purposes and having a "side effect" logic that triggers only on specific counts.
 * 
 * Your Task:
 * 
 * The Manual Trace: Given the input list = [1, 2, 3, 4] and modifier = 2, write out the value of total and score at the end of every loop iteration.
 * 
 * The Logic Catch: There is a specific condition where the total is modified by something other than the current number in the list. What is that condition?
 * 
 * Refactor: Rewrite this to be "boring" and easy to read.
 */

function accumulateAndSpin(list: number[], modifier: number): number {
    let total = 0;
    let score = 0;

    for (let i = 0; i < list.length; i++) {
        let current = list[i];
        
        if (current % modifier === 0) {
            score++;
            total += (current * score);
        } else {
            total += current;
        }

        if (score > 1) {
            total -= 1;
            score = 0; 
        }
    }

    return total;
}

/**
 * Walk me through it. Input: list = [1, 2, 3, 4], modifier = 2
 * 
 * Iteration 0 (current = 1): What are total and score? 
 * this is the first iteration, so total = 0 and score = 0. Since 1 % 2 !== 0, 
 * we go to the else block and total becomes total + current, which is 0 + 1 = 1.  
 * 
 * Iteration 1 (current = 2): What are total and score?
 * `current % modifier` is 0. `score` becomes 1. `total` becomes `1 + (2 * 1)` = 3.
 * `score > 1` is false.
 * End of iteration: total = 3, score = 1
 * 
 * Iteration 2 (current = 3): What are total and score?
 * `current % modifier` is not 0. `total` becomes `3 + 3` = 6.
 * `score > 1` is false. The score from the previous iteration (1) is maintained.
 * End of iteration: total = 6, score = 1
 * 
 * Iteration 3 (current = 4): What are total and score?
 * `current % modifier` is 0. `score` increments to 2. `total` becomes `6 + (4 * 2)` = 14.
 * `score > 1` is now true. `total` is penalized by 1, becoming 13. `score` is reset to 0.
 * End of iteration: total = 13, score = 0
 * 
 * What is the final returned number?
 * 13
 */

/**
 * The Logic Catch
 * The total is modified by something other than the current number when the `score` variable exceeds 1.
 * When `score > 1`, a penalty is applied, and `total` is reduced by 1. Immediately after, `score` is reset to 0.
 */

/**
 * Refactor
 * This function can be refactored using `Array.prototype.reduce` to make the state
 * transformations more explicit and contained within an accumulator object.
 */

function accumulateAndSpinRefactored(list: number[], modifier: number): number {