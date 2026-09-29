function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}


try{divide(2,0)}catch(Err){console.log(Err.stack)}

console.log('the app continues') // this prints out

try {
  divide(3, 0)
} catch (error) {
  console.log(error) 
} finally {
  console.log('with error') //with error
}

try {
  divide(3, 1)
} catch (error) {
  console.log(error) 
} finally {
  console.log('without error') //without error
}

// 1. Custom error class
class DivisionByZeroError extends Error {
  constructor(message = "Cannot divide by zero") {
    super(message);
    this.name = "DivisionByZeroError";
  }
}

// 2. The function throwing the custom error
function divide2(a, b) {
  if (b === 0) {
    throw new DivisionByZeroError();
  }
  return a / b;
}

// 3. Catch, check with instanceof, and re-throw anything else
function calculate(a, b) {
  try {
    const result = divide2(a, b);
    console.log("Result:", result);
  } catch (error) {
    if (error instanceof DivisionByZeroError) {
      console.log("Handled division error:", error.message);
    } else {
      throw error; // Not our error, pass it along
    }
  }
}

calculate(10, 0); // Prints: Handled division error: Cannot divide by zero


try {
  setTimeout(() => {
    divide2(10, 0); // Throws DivisionByZeroError here
  }, 1000);
} catch (error) {
  // This NEVER runs. The error is not caught.
  console.log("Caught:", error.message);
}