# Sorting Algorithms

Contents:

[Introduction to Sorting Algorithms](#introduction-to-sorting-algorithms)

[Built-in JavaScript Sorting](#built-in-javascript-sorting)

[BubbleSort](#bubblesort)

[Bubble Sort: BIG O Complexity](#bubble-sort-big-o-complexity)

## Introduction to Sorting Algorithms

**What is sorting?**

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are is some kind of order.

Examples:

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

**Why do we need to learn this?**

- Sorting is an incredibly common task, so it's good to know how it works
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages

e.g. Insertion which is slow for random data, it's very quick for nearly sorted data

Resources:

[Animations of sorting algorithms](https://www.toptal.com/developers/sorting-algorithms)

---

## Built-in JavaScript Sorting

Yes, it does!
...but it doesn't always work the way you expect.

```
["Steele", "Colt", "Data Structures", "Algorithms"].sort();
// ["Algorithms", "Colt", "Data Structures", "Steele"]

[6, 4, 15, 10].sort();
// [10, 15, 4, 6]
```

The default sort order is according to string Unicode code points.

Every element in the array is converting to a string, and then it's unicode value it's taken and then they are sorted

**Telling JavaScript how to sort**

- The built-in sort method accepts an optional **comparator** function
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
  - if it returns a negative number, a should come before b
  - if it returns a positive number, a should come after b
  - if it returns 0, and b are the same as far as the sort is concerned

```
function numberCompare(num1, num2){
  return num1 - num2;
}

[6,4,15,10].sort(numberCompare);
// [4, 6, 10, 15]
```

```
function compareByLen(str1, str2){
  return str2.length - str1. length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
// ["Colt", "Steele", "Algorithms", "Data Structures"]
```

---

## BubbleSort

A sorting algorithm where the largest values bubble up to the top!

We compare the pairs and **swap** if needed.

The largest number bubbles to the end (last element sorted) at each iteration.

**Iteration 1**

```
[5, 3, 4, 1, 2]
[3, 5, 4, 1, 2]
[3, 4, 5, 1, 2]
[3, 4, 1, 5, 2]
[3, 4, 1, 2, 5]
```

as we go through the amount of elements decreases

**Before we sort, we must swap!**

Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)

```
//ES5
function swap(arr, idx1, idx2){
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx2],arr[idx2]] = [arr[idx2], arr[idx2]]
}
```

**BubbleSort Pseudocode**

- Start looping from with a variable called i at the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- if arr[j] is greater than arr[j+1], swap those two values!
- Return the sorted array;

---

## Bubble Sort: BIG O Complexity

**O(n^2)**

if data is nearly sorted or already sorted, with noSwap optimization is more like linear time. Best case possible **O(n)**

2 n's but simplifies down to O(n)

---

## Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
