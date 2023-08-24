# Big O Notation

Contents

[Introduction](#introduction)

[Counting Operations](#counting-operations)

[Big O Notation Definition](#big-o-notation-definition)

[Space Complexity](#space-complexity)

[Logarithms](#logarithms)

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

## Big O Notation Definition

Big O Notation is a way to formalize fuzzy counting

It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

We won't care about the details, only the trends

### The Official Definition

We say that an algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times **f(n)**, as **n** increases.

- f(n) could be linear (f(n) = n)

- f(n) could be quadratic (f(n) = n^2)

- f(n) could be constant (f(n) = 1)

- f(n) could be something entirely different!

---

### Simplifying Big O Expressions

When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.

These rules of thumb are consequences of the definition of big O notation.

---

#### Constants Don't Matter

- O(2n) -> O(n)
- O(500) -> O(1)
- O(13n^2) -> O(n^2)

---

#### Smaller Terms Don't Matter

- O(n + 10) -> O(n)
- O(1000n + 50) -> O(n)
- O(n^2 + 5n + 8) => O(n^2)

---

### Big O Shorthands

- Analyzing complexity with big O can get complicated
- There are several rules of thumb that can help

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

---

## Space Complexity

So far, we've been focusing on **time complexity**: how can we analyze the runtime of an algorithm as the size of the inputs increases?

We can also use big O notation to analyze **space complexity**: how much additional memory do we need to allocate in order to run code in our algorithm?

---

### What about the inputs?

Sometimes you'll hear the term **auxiliary space complexity** to refer to space required by the algorithm, not including space taken up by the inputs.

Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity.

---

### Space Complexity in JS

Rules of Thumb

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

---

## Logarithms

We've encountered some of the most common complexities: O(1), O(n), O(n^2)

Sometimes big O expressions involve more complex mathematical expressions

One that appears more often than you might like is the logarithm!

---

### What's a log?

Log is the inverse of exponentiation

```
Log[base 2](8) = 3 -> 2^3 = 8
```

2 to what power equals 8? It's 3

```
log[base 2](value) = exponent -> 2^exponent = value
```

We'll omit the 2.

```
log === log[base 2]
```

---

### Wut

This isn't a math course, so here's a rule of thumb.

The logarithm of a number roughly measures the number of times you can divide that number by 2 **before you a value that's less than or equal to one**

---

### Logarithm Examples

```
log(8) = 3

log(25) = 4.64
```

---

### Logarithm Complexity

Logarithmic time complexity is great!

- O(1)
- O(log n)
- O(n)
- O(n log n)
- O(n^2)

---

### Who Cares?

Certain searching algorithms have logarithmic time complexity.

Efficient sorting algorithms involve logarithms.

Recursion sometimes involves logarithmic space complexity.

---
