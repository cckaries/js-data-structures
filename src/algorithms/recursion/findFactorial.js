// solution 1: recursive
function findFactorialRecursive (n = 0) { // T: O(n)
  if(n <= 2) {
    return n;
  }

  return n * findFactorialRecursive(n - 1);
}

// solution 2: iterative
function findFactorialIterative (n = 0) { // T: O(n)
  if(n <= 2) {
    return n;
  }

  let res = 1;

  for (let i = 2; i <= n; i++) {
    res *= i;
  }

  return res;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));