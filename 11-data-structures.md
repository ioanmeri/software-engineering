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

---

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

**Creating objects from classes**

We use the **new** keyword

```
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
```

**Instance Methods**

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

**Class Methods**

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

**One gotcha with `this`**

Inside all of our **instance** methods and **constructor**, the keyword `this` refers to the object created from that class (also known as **instance**)

---
