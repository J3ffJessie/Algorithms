CS Week2Day2
DAY 2

Week 9 - Comp Sci with Javascript
-------------------------
Data Types and Structures
-------------------------

### Video:
https://www.youtube.com/watch?v=DuDz6B4cqVc&t=183s

No Article because there are many different data structures
You can go down whichever road you please
But you must implement the given 4 below.

-------------------------
More on Data Types
Types: Primitive, Composite, ADT
Examples of Primitives?
You guys should know this by now

### Composite Data Types:
    1. Think of the word ‘composite’
    2. Just a combination of primitive datatypes
    3. Combined, they form a singular composite DT.

    - Examples? Arrays, Lists, Tuples, Collections, etc.
Abstract Data Types:
    1. Simply, "Objects" (or classes)
    2. Custom objects built to do a job
    3. Mostly in the form of "containers"
      i.e., a Player class is a container for all the things a Player does

ADT’s are the foundation for OOP and object manipulation

-------------------------
Data Structures
A set of ADT’s that each serve specific purposes
Most are implemented natively, or in standard libraries
Foundational - manage the underlying flow and structure of programs

There are MANY Data Structures
Data Structures are implemented all the time!
  - Customized to how YOU want to handle a problem set

-------------------------
Some "Lower Level" data structures: (don’t be too concerned)
These mostly require memory pointers, used in C and assembly
Linked List, Doubly Linked-List, etc.
Trees (Binary, Heaps, B-trees, AVL trees)
Graphs - (nodes-edges graph, not your typical math graph)

What we will worry about:
"Higher Level", array-like data structures:
Set
Stack
Queue
Map / Hash (actually, just an object-literal in Javascript!)

Start to think about what each of the above 4 data structures do.
What makes them... them?
This is the first step to self-implementation
I.E, What do we want our "Set" to do?

Before moving on, try to guess or think about what each of these do!

-------------------------
Set
A set is just an unordered list (like an array) - but it has NO duplicates!
Think of a math set {1, 2, 3}, etc.

Stack
We went over stack already
LIFO - Last in, first out!
What does a Stack class do?
We can add to the stack
We can remove from the stack
We can check if the stack is empty or not
We can initialize it in multiple ways, too

Queue
Kind of the opposite of a stack
FIFO - First in, first out!
It’s just a line, like the line at the grocery store
Now, think about what a Queue does

Map / Hash
Think of an object-literal in JS.
It has a Key and that key reveals a Value
Key --> Value
Think of an array... what’s the key?... the index!
What else can our Map class do? Add, remove, etc?

Of course, these data structures can be easily called from native JS or libraries
But Self-implementation helps you understand their structure
While also allowing you your own customization!

-------------------------
Assignment
Implement a Class for each of Set, Stack, Queue, Map
Each one should cover all of its capabilities
Each one can be initalized either empty (no parameters), OR with initial values
Implement obj.isEmpty()
Implement a "Type" Parameter (optional)
This parameter enforces types in your data structure, ie, all strings, all integers, etc.
Will throw error (or output a message) if you add a value that is not of the correct type
For Map, you will need two of these, one for Key, one for Value

Notes:
For Map, you can ONLY USE arrays. NO OBJECT-LITERALS. - That’s cheating!
Avoid built-in functions, if it feels like a shortcut, then it is a shortcut

Extras:
Implement obj_1.equals(obj_2), where both objs are of the same Class
This checks if all values (and in some cases, the order) are equal

Congrats, you’ve built four of your own data structures!

You are free to add and manipulate them how you like!
For example, look up Priority Queue (little advanced)


```
// Data structure
// An object with certain properties, that interact with data, and are only accessible through interfacing with the data structure
​
// Stack, Queue, Object*****
​
// Our ownSet
// What else does a Set DAta Structure do??
// Add an elemetn
// Remove an element
​
class MySet {
  constructor(arr) {
    this.set = this.removeDuplicates(arr);
  }
​
  // Getter
  getSet() {
    return this.set;
  }
​
  isEmpty() {
    return this.set.length === 0;
  }
​
  // Creating the set
  removeDuplicates(arr) {
    const map = {}; // Plain old js object
​
    const set = [];
​
    for (const idx in arr) {
      const value = arr[idx];
​
      if (!map[value]) {
        map[value] = true;
​
        set.push(value);
      }
    }
​
    this.map = map; // O(1)
    return set;
  }
​
  // Add value if not already in set
  addToSet(value) {
    if (this.map[value]) return;
​
    this.map[value] = true;
​
    this.set.push(value);
​
    this.print();
  }
​
  removeFromSet(value) {
    if (!this.map[value]) return;
​
    delete this.map[value];
​
    this.set = this.set.filter((setVal) => setVal !== value);
​
    this.print();
  }
​
  // We want "otherSet" to be an instance of MySet
​
  // Union -- combine sets, remove duplicates again
  // DOES NOT MANIPULATE THIS INSTANCE'S SET
  union(otherSet) {
    if (otherSet && otherSet.className === "MY_SET") {
      const newArr = this.set.concat(otherSet.getSet());
​
      return new MySet(newArr);
    }
​
    throw new Error("Must supply another class of type: MySet");
  }
​
  // Intersection -- combine sets, prune all non-duplicates
  // DOES NOT MANIPULATE THIS INSTANCE'S SET
  intersection(otherSet) {
    if (otherSet && otherSet.className === "MY_SET") {
      const newArr = [];
​
      const setToIntersect = otherSet.getSet();
​
      for (const idx in setToIntersect) {
        const value = setToIntersect[idx];
​
        if (this.map[value]) newArr.push(value);
      }
​
      return new MySet(newArr);
    }
​
    throw new Error("Must supply another class of type: MySet");
  }
​
  clearSet() {
    this.map = {}; // O(1) mapping
    this.set = [];
  }
​
  print() {
    console.log(`{ ${this.getSet()} }`);
  }
​
  className = "MY_SET";
}
​
// --------------------
​
const someArr = [1, 1, 2, 3, 3, 2, 8];
​
const setA = new MySet(someArr);
​
setA.print();
setA.addToSet(100);
setA.removeFromSet(8);
​
const setB = new MySet([1, 4, 5, 100]);
​
console.log("----------------");
setB.print();
​
const unionSet = setA.union(setB);
const intersectionSet = setB.intersection(setA);
​
intersectionSet.print();
​
setA.clearSet();
setA.print();

```