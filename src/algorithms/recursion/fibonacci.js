// solution 1: recursive
function fibonacciRecursive (n = 0) { // T: O(2^n)
  if(n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// solution 2: iterative
function fibonacciIterative (n = 0) { // T: O(n)
  if(n < 2) {
    return n;
  }

  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

console.log(fibonacciRecursive(7));
console.log(fibonacciIterative(7));