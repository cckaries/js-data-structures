/* Optimise fibonacci recursive function with dynamic programming */

// T: O(n), S: O(n)
function fibonacciDp() { 
  let cache = {};

  return function fib(n = 0) {
    if (n < 2) {
      return n;
    }

    if (n in cache) {
      return cache[n];
    }

    cache[n] = fib(n - 1) + fib(n - 2);

    return cache[n];
  };
}

// Bottom up, T: O(n), S: O(n)
function fibonacciDpBottomUp(n = 0) { 
  let cache = [0, 1];

  for (let i = 2; i <= n; i++) {
    cache.push(cache[i - 1] + cache[i - 2]);
  }

  return cache.pop();
}

const fib = fibonacciDp();

console.log('Fibonacci DP:', fib(10));
console.log('Fibonacci DP bottom up:', fibonacciDpBottomUp(10));
