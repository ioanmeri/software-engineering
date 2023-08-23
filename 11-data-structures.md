# Data Structures

**Contents**

[Introduction](#introduction)

[ES2015 Class Syntax](#es2015-class-syntax)

[Singly Linked Lists](#singly-linked-lists)

Binary Search Trees

Queues

Undirected Unweighted Graphs

Binary Heaps

Directed Graphs

Hash Tables

Doubly Linked Lists

Stacks

---

## Introduction

### What do they do?

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

---

### Why so many?

Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

---

### Why care?

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

### What is a class?

A blueprint for creating objects with pre-defined properties and methods

---

### Why do we need to learn this?

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

---

### Creating objects from classes

We use the **new** keyword

```
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
```

---

### Instance Methods

Relevant to individual instances

```
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }

  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate(){
    this.tardies += 1;
    if(this.tardies >= 3){
      return "YOU ARE EXPELLED!!!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score){
    this.scores.push(score)
    return this.scores;
  }

  calculateAverage(){
    let sum = this.scores.reduce(function(a,b){return a+b});
    return sum/this.scores.length;
  }
}

let firstName = new Student('Colt', 'Steele');

firstStudent.fullName();
firstStudent.markLate();
firstStudent.markLate();
firstStudent.addScore(92);
firstStudent.addScore(87);
firstStudent.scores // [92, 87]
firstStudent.calculateAverage();
```

---

### Class Methods

Using the `static` keyword in front of the definition. It's a utility function not related to single instances.

```
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  static enrollStudents(...students){
    // maybe send an email here
  }
}
```

```
Student.enrollStudents([firstStudent, secondStudent])
```

---

### One gotcha with `this`

Inside all of our **instance** methods and **constructor**, the keyword `this` refers to the object created from that class (also known as **instance**)

---

## Singly Linked Lists

### What is a linked list?

A data structure that contains a **head**, **tail**, and **length** property.

Linked Lists consists of nodes, and each **node** has a **value** and a **pointer** to another node or null

---

### Comparisons with Arrays

**Lists**

- Do not have indexes!
- Connected via nodes with a **next** pointer
- Random access is not allowed

**Arrays**

- Indexed in order!
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

---

### Pushing pseudocode

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- Increment the length by one
- Return the linked list

---

### Popping

Removing a **node** from the end of the Linked List!

---

### Popping pseudocode

- if there are no nodes in the list, return undefined
- Loop through the list until you reach the tail
- Set the next property of the 2nd to last node to be null
- Set the tail to be the 2nd to last node
- Decrement the length of the list by 1
- Return the value of the node removed

---

### Shifting

Removing a new **node** from the beginning of the Linked List!

---

### Shifting pseudocode

- if there are no nodes, return undefined
- Store the current head property in a variable
- Set the head property to be the current head's next property
- Decrement the length by 1
- Return the value of the node removed

---

### Unshifting

Adding a new **node** to the beginning of the Linked List!

---

### Unshifting pseudocode

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the newly created node's next property to be the current head property on the list
- Set the head property on the list to be that newly created node
- Increment the length of the list by 1
- Return the linked list

---

### Get

Retrieving a **node** by it's position in the Linked List!

---

### Get Pseudocode

- This function should accept an index
- if the index is less than zero or greater than or equal to the length of the list, return null
- Loop through the list until you reach the index and return the node at that specific index

---
