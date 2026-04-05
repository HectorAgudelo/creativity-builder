type GameResult = string;

function calculateFinalScore(
    basePoints: number, 
    multiplier: number, 
    bonusCode?: number
): GameResult {
    // Your logic here:
    // 1. Calculate the raw score (base * multiplier).
    // 2. Add the bonusCode if it exists (default to 0 if null/undefined).
    // 3. Return a string: "Player total: [score] points!"
    let rawScore = basePoints * multiplier;
    let bonus = bonusCode ?? 0;
    let totalScore = rawScore + bonus;
    return `Player total: ${totalScore} points!`;
}

// Test your function
const result = calculateFinalScore(100, 1.5, 50);
console.log(result);