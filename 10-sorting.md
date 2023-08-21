# Sorting Algorithms

Contents:

[Introduction to Sorting Algorithms](#introduction-to-sorting-algorithms)

[Built-in JavaScript Sorting](#built-in-javascript-sorting)

[BubbleSort](#bubblesort)

[Bubble Sort: BIG O Complexity](#bubble-sort-big-o-complexity)

[Selection Sort](#selection-sort)

[Selection Sort: Big O Complexity](#selection-sort-big-o-complexity)

[Insertion Sort](#insertion-sort)

[Insertion Sort: BIG O Complexity](#insertion-sort-big-o-complexity)

[Comparing Bubble, Selection, and Insertion Sort](#comparing-bubble-selection-and-insertion-sort)

[Merge Sort](#merge-sort)

[Merge Sort BIG O Complexity](#merge-sort-big-o-complexity)

[Quick Sort](#quick-sort)

[Quick Sort Big O Complexity](#quick-sort-big-o-complexity)

[Radix Sort](#radix-sort)

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

**Passing 1**

```
[5, 3, 4, 1, 2] // min 5
[5, 3, 4, 1, 2] // min 3
[5, 3, 4, 1, 2] // min 3
[5, 3, 4, 1, 2] // min 1
[5, 3, 4, 1, 2] // min 1
[1, 3, 4, 5, 2] // swap with what started with
```

Find the minimum, swap at the end, and put it at the beginning

We' are going through and select the minimum, and putting it at the beginning.

**Selection Sort Pseudocode**

- Store the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- if a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- if the "minimum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted.

---

## Selection Sort: Big O Complexity

**O(n^2)**

When selection sort, potentially, is better than bubble sort, it's (one scenario) when you want to minimize the number of swaps.

When worrying about writing in memory, not very common.

---

## Insertion Sort

Builds up the sort by gradually creating a larger left half (portion better than half) which is always sorted.

```
[5, 3, 4, 1, 2]

[3, 5, 4, 1, 2]

[3, 4, 5, 1, 2]

[1, 3, 4, 5, 2]

[1, 2, 3, 4, 5]
```

We are taking an element one at a time, and inserting it in the correct spot

**Insertion Sort Pseudocode**

- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
- Repeat until the array is sorted.

---

## Insertion Sort: BIG O Complexity

Similar to the other two. Worst case it's quadratic: **O(n^2)**

But if the data it's almost sorted the insertion sort performs well.

Another thing that Insertion sort is good is for **online algorithms**, which is an **algorithm that can work as data is coming in**

---

## Comparing Bubble, Selection, and Insertion Sort

| Algorithm      | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| -------------- | ---------------------- | ------------------------- | ----------------------- | ---------------- |
| Bubble Sort    | O(n)                   | O(n^2)                    | O(n^2)                  | O(1)             |
| Insertion Sort | O(n)                   | O(n^2)                    | O(n^2)                  | O(1)             |
| Selection Sort | O(n^2)                 | O(n^2)                    | O(n^2)                  | O(1)             |

---

## Merge Sort

- It's a combination of two things - merging and sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

**How does it work?**

```
[8, 3, 5, 4, 7, 6, 1, 2]

[8, 3, 5, 4]  [7, 6, 1, 2]

[8, 3] [5, 4] [7, 6] [1, 2]

[8] [3] [5] [4] [7] [6] [1] [2]
```

we have 8 single element arrays and we merge them back

```
[3, 8] [4, 5] [6, 7] [1, 2]

[3, 4, 5, 8] [1, 2, 6, 7]

[1, 2, 3, 4, 5, 6, 7, 8]
```

**Merging Arrays**

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two array which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
- This function should run in **O(n + m)** time and **O(n + m)** space and **should not** modify the parameters passed to it.

**Merging Arrays Pseudocode**

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at:
  - if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  - if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
  - Once we exhaust one array, push in all remaining values from the other array

**mergeSort Pseudocode**

- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged(and sorted!) array

---

## Merge Sort BIG O Complexity

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| ---------------------- | ------------------------- | ----------------------- | ---------------- |
| O(n log n)             | O(n log n)                | O (n log n)             | O (n)            |

O(log n) decompositions

times

O(n) comparisons per decomposition

```
 [8]  [3]  [5]  [4]  [7]  [6]  [1] [2]

  [3, 8] [4, 5]       [6, 7] [1, 2]

      [3, 4, 5, 8]    [1, 2, 6, 7]

        [1, 2, 3, 4, 5, 6, 7, 8]
```

---

## Quick Sort

- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

**How does it work?**

```
[5, 2, 1, 8, 4, 7, 6, 3]

        5
3 2 1 4   7  6  8

     3
1  2   4

1
  2 3 4

```

**Pivot Helper**

- In order to implement merge sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
- The order of elements on either side of the pivot doesn't matter
- The helper should do this **in place**, that is, it should not create a new array
- When complete, the helper should return the index of the pivot

**Picking a pivot**

- The runtime of quick sort depends in part on how one selects the pivot
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
- For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)

**Pivot Helper Example**

```
let arr = [5, 2, 1, 8, 4, 7, 6, 3]

pivot(arr); // 4;

arr;
// any one of these is an acceptable mutation:
// [2, 1, 4, 3, 5, 8, 7, 6]
// [1, 4, 3, 2, 5, 7, 6, 8]
// [3, 2, 1, 4, 5, 7, 6, 8]
// [4, 1, 2, 3, 5, 6, 8, 7]
// there are other acceptable mutations too!
```

**Pivot Pseudocode**

- It will help to accept three arguments: an array, a start index, and an end index(these can default to 0 and the array length minus 1, respectively)
- Grab the pivot from the start of the array
- Store the current pivot index in a variable(this will keep track of where the pivot should end up)
- Loop through the array from the start until the end
  - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element (i.e. the pivot) with the pivot index
- Return the pivot index

**Quicksort Pseudocode**

- Call the pivot helper on the array
- When the helper returns to you the updated pivot index, recursively cal the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
- Your base case occurs when you consider a subarray with less than 2 elements

---

## Quick Sort Big O Complexity

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| ---------------------- | ------------------------- | ----------------------- | ---------------- |
| O(n log n)             | O(n log n)                | O (n^2)                 | O (log n)        |

Worst case when data already sorted and needed:

O(n) decompositions
O(n) comparisons

---

o(n^2)

---

## Radix Sort

There are other types of sorting algorithms, that are not comparison algorithms which they take advantage of special properties of the data (e.g. integer sorting)

**Radix sort** is a special sorting algorithm that works on lists on **numbers**

It never makes comparisons between elements!

It exploits the fact that information about the size of a number is encoded in the number of digits.

More digits means a bigger number!

**How does it work**?

```
[1556, 4, 3556, 592, 408, 4386, 902, 7, 8257, 86, 9637, 29]
```

we create 10 buckets, which represent all of the possible numbers in base 10

and we go through the list of numbers and based on the first digit in the number, in the right side, and we group them in the buckets

| 0   | 1   | 2   | 3   | 4   | 5   | 6    | 7    | 8   | 9   |
| --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |
|     |     |     |     |     |     | 86   |      |     |     |
|     |     |     |     |     |     | 4386 | 9637 |     |     |
|     |     |     |     |     |     | 3556 | 8157 |     |     |
|     |     | 902 | 593 | 4   |     | 1556 | 7    | 408 | 29  |

```
[902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29]
```

now we repeat the process for the second digit from the right side:

| 0   | 1   | 2   | 3    | 4   | 5    | 6   | 7   | 8    | 9   |
| --- | --- | --- | ---- | --- | ---- | --- | --- | ---- | --- |
| 408 |     |     |      |     |      |     |     |      |     |
| 7   |     |     |      |     | 8157 |     |     |      |     |
| 4   |     |     |      |     | 3556 |     |     | 86   |     |
| 902 |     | 29  | 9637 | 4   | 1556 |     |     | 4386 | 593 |

and we repeat it again for the 3rd digit:

```
[902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]
```

| 0   | 1    | 2   | 3    | 4   | 5    | 6    | 7   | 8   | 9   |
| --- | ---- | --- | ---- | --- | ---- | ---- | --- | --- | --- |
| 86  |      |     |      |     |      |      |     |     |     |
| 29  |      |     |      |     | 593  |      |     |     |     |
| 7   |      |     |      |     | 3556 |      |     |     |     |
| 4   | 8157 |     | 4386 | 408 | 1556 | 9637 |     |     | 902 |

and we reform it to the list again, one more time:

the number of times depends on how many digits the largest number has (4 times here)

| 0   | 1    | 2   | 3    | 4    | 5   | 6   | 7   | 8    | 9    |
| --- | ---- | --- | ---- | ---- | --- | --- | --- | ---- | ---- |
| 902 |      |     |      |      |     |     |     |      |      |
| 593 |      |     |      |      |     |     |     |      |      |
| 408 |      |     |      |      |     |     |     |      |      |
| 86  |      |     |      |      |     |     |     |      |
| 29  |      |     |      |      |     |     |     |      |      |
| 7   |      |     |      |      |     |     |     |      |      |
| 4   | 1556 |     | 3556 | 4386 |     |     |     | 8157 | 9637 |

---
