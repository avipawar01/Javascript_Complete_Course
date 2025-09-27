// Function that calls itself

function factorial(n) {
    // Base case: if n is 0 or 1, the factorial is 1
    if (n === 0 || n === 1) {
      return 1;
    }
    else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5));