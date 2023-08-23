# Big O Notation

## Introduction

### What's the idea here?

Imagine we have multiple implementation of the same function.

How can we determine which one is the **best**?

"Write a function that accepts a string input and returns a reversed copy"

---

### Who Cares?

- It's important to have a precise vocabulary to talk about how our code performs
- Useful for discussing trade-offs between different approaches
- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
- Less important: it comes up in interviews!

---

## Timing Our Code

### An Example

Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number `n`

1st solution:

```
function addUpTo(n){
  let total = 0;
  for(let i = 1; i<= n; i++){
    total +=i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)
// Time Elapsed: 1.243699999180443 seconds
// Time Elapsed: 1.255400000189058 seconds
```

2nd solution:

```
function addUpTo(n){
  return n*(n+1) / 2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)
// Time Elapsed: 0.0001000000047497 seconds
```

---

### What does better mean?

- Faster?
- Less memory-intensive?
- More readable?
- Brevity

---

### The Problem with Time

- Different machines will record different times
- The **same** machine will record different times!
- For fast algorithms, speed measurements may not be precise enough?

---

## Counting Operations

### If not time, then what?

Rather than counting **seconds**, which are so variable...

Let's count the **number** of simple operations the computer has to perform!

e.g. 1

```
function addUpTo(n){
  return n*(n+1) / 2;
}
```

- 1 multiplication
- 1 addition
- 1 division

3 simple operations, regardless of the size of n

e.g. 2

```
function addUpTo(n){
  let total = 0;
  for(let i = 1; i<= n; i++){
    total +=i;
  }
  return total;
}
```

total = 0

- 1 assignment

i = 1

- 1 assignment

i <=n

- n comparisons

i++

- n additions
- n assignments

total+=i:

- n additions
- n assignments

---

### Counting is hard!

Depending on what we count, the number of operations can be as low as **2n** or as high as **5n + 2**

But regardless of the exact number, the number of operations grows roughly **proportionally with n**

---
