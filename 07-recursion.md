# Recursion

## Why Use Recursion?

### What is Recursion?

A **process** (a function in our case) that **calls itself**

**It's everywhere!**

- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- We will see it with more complex data structures
- It's sometimes a cleaner alternative to iteration

**first...let's talk about functions**

- In almost all programming languages, there is a built in data structure that manages what happens when function are invoked
- It's name is **call stack**

---

### The call stack

- It's a **stack** data structure - we'll talk about that later!
- Any time a function is invoked it is placed (**pushed**) on the top of the call stack
- When JavaScript sees the **return** keyword or when the function ends, the compiler will remove (**pop**)

#### Why do I care?

- You're used to functions being pushed on the call stack and popped off when they are done
- When we write recursive functions, we keep pushing new functions onto the call stack!

---

## First Recursive Function

### How recursive functions work

Invoke the **same function** with a different input until you reach your base case!

---

### Base Case

The condition when the recursion ends.

**This is the most important concept to understand**

---

### Two essential parts of a recursive function!

- Base Case
- Different Input

---

### First recursive function

```
function countDown(num){
  if(num <= 0){
    console.log("All done!);
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
```
