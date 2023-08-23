# Analyzing Performance of Arrays and Objects

Build-in Data structures through the lens of Big O

## Objects

Unordered, key value pairs!

```
let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1,2,3,4]
}
```

### When to use objects

- When you don't need order
- When you need fast access / insertion and removal

### Big O of Objects

Insertion: O(1)

Removal: O(1)

Searching: O(N)

Access: O(1)

When you don't need any ordering, objects are an excellent choice!

### Big O of Object Methods

Object.keys: O(N)

Object.values: O(N)

Object.entries: O(N)

hasOwnProperty: O(1)

## Arrays

Ordered lists!

```
let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2 "awesome"]
```

### When to use arrays

- When you need order
- When you need fast access / insertion and removal (sort of...)

### Big O of Arrays

Insertion: In the beginning is O(N), at the end O(1)

Removal: In the beginning is O(N), at the end O(1)

Searching: O(N)

Access: O(1)

Let's see what we mean by that!

`push` and `pop` **always faster** than `shift` and `unshift`

### Big O of Array Operations

- push: O(1)
- pop: O(1)
- shift: O(N)
- unshift: O(N)
- concat: O(N)
- slice: O(N)
- splice: O(n)
- sort: O(N\*LOGN)
- forEach/map/filter/reduce/etc.: O(N)

---
