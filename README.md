# Recursion

Solutions for two common DSA problems using recursion and written in JavaScript.

- Exercise 1: Fibonacci Sequence
- Exercise 2: Merge Sort

### Fibonacci

Fibonacci asks the user to provide a positive number to generate a fibonacci sequence, the first using iteration and the second using recursion.

```javascript
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
```

### Merge Sort

Merge Sort asks the user to input an array, which is then sorted by a recursive script.

```javascript
function mergeSort(arr) {
  if (arr.length === 0) return "Please provide a non empty array";
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    left[i] < right[j] ? result.push(left[i++]) : result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}
```
