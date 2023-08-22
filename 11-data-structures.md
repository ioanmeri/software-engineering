# Data Structures

**Contents**

[Introduction](#introduction)

[ES2015 Class Syntax](#es2015-class-syntax)

Binary Search Trees

Queues

Singly Linked Lists

Undirected Unweighted Graphs

Binary Heaps

Directed Graphs

Hash Tables

Doubly Linked Lists

Stacks

## Introduction

**What do they do?**

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

**Why so many?**

Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

**Why care?**

The more time you spend as a developer, the more likely you'll need to use one of these data structures

You've already worked with many of them unknowingly!

and of course...INTERVIEWS

There is no one **BEST** data structures, they all excel in different situations.

e.g.

Working with map/location data? Use a graph!

Need an ordered list with fast inserts/removals at the beginning and end? Use a linked list!

Web scraping nested HTML? Use a tree!

Need to write a scheduler? Use a binary heap!

---

## ES2015 Class Syntax

**What is a class?**

A blueprint for creating objects with pre-defined properties and methods

**Why do we need to learn this?**

We're going to implement **data structures** as **classes**!

**The Syntax**

```
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

The method to create new objects **must** be called constructor

The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!
