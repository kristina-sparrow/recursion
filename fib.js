// non-recursive
function fibs(n) {
  if (n <= 0) return "Please enter a number greater than 0";
  const arr = [0, 1];
  if (n < 2) return arr.slice(0, n);
  while (n > 2) {
    const newNum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(newNum);
    n--;
  }
  return arr;
}

// recursive
function fibsRec(n) {
  return n <= 0
    ? "Please enter a number greater than 0"
    : n === 1
    ? [0]
    : n === 2
    ? [0, 1]
    : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}
