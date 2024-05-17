const fibonacci = function (n) {
  // dynamic programming
  // recursive relation:
  // fib(n) = fib(n - 1) + fib(n - 2)
  // base cases fib(1) = 1, fib(2) = 1
  n = +n;
  if (n < 0) {
    return "OOPS";
  }
  if (n == 0) {
    return 0;
  }
  if (n < 3) {
    return 1;
  }

  let first = 1;
  let second = 1;
  for (let num = 3; num <= n; num++) {
    const tmp = first;
    first = second;
    second = tmp + second;
  }
  return second;
};

// Do not edit below this line
module.exports = fibonacci;
