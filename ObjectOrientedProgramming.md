CS Week2Day2
DAY 2
Week 9 - Comp Sci with Javascript
---------------------------------------
Object Oriented Programming
Classes and Objects
---------------------------------------

Well Explained Video:
https://www.youtube.com/watch?v=T-HGdc8L-7w

Article:
https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes

Deeper dive:
https://youtu.be/vDJpGenyHaA

Decent Wikipedia Page:
https://en.wikipedia.org/wiki/Object_(computer_science)
Lets start with Data Types:
A data type can be one of:
integer
char
string
boolean
float
double
etc...

Javascript is "loosely typed",
We declare variables like:

let a = 5

Javascript will infer the type, in this case an integer
Then it will re-type it if it has to:

a = "hello"

Now the varaible a is of type string

These simple types are often called "primatives" or "primative types"

Natively, the JS engine knows how to handle these when it sees them.

---------------------------------------
But what if we wanted our own custom "type"?
Examples:
Bank Account
User
Car
etc, etc, etc.

So, just like what we did with primatives we can do things like:

const myFirstCar = new Car(color="blue")

const mySecondCar = new Car(color="red")
What is "Car()"? It looks like a function!
Well, it is and it isn’t.
These lines are called "Instantiating a class", or creating an Object

So What are Classes?
They are the custom types!
A template
We can use "Encapsulation" to really define what our Class does
A class can even act like a primitive type (in most cases)
It is completely up to your own implementation

So then what are objects?
Objects are an "instance" of a class
A class does not really exist until it is instantiated
Every language that supports classes has their own syntax for this

A more Technical view of objects:
Simply: collection of data stored in memory
This data is a combination of primitives, other objects, and methods (functions)

How does the Class know how to be instantiated?
This is called a "Constructor"
A Constructor is the first function called when the Class is instantiated into an object
It "Constructs" the Object from the template
Constructors are customizable too, they are just functions!

```
class Car {
    constructor(name, color, type, isAutomatic, isFourWheel, cylinders, topSpeed) {
        this.name = name;
        this.color = color;
        this.type = type;
        this.isAutomatic = isAutomatic;
        this.isFourWheel = isFourWheel;
        this.cylinders = cylinders;
        this.topSpeed = topSpeed;
    }

    accelerate(){}

    stop() {}


}

const sportsCar = new Car("Sports Car", "Blue", "Coupe", false, false, 8, 100);


console.log(this.name);
console.log(sportsCar.accelerate());
const blueSuv = new Car();

```
---------------------------------------

Assignment:
Design your own Class, it can be anything (Player, Car, Home, Account)
Build out all your own methods and variables
Instantiate it into an Object
Show off all your object’s methods!

Bonus:
Research "inheritance", and nested Objects
I.E., both Car and Plane objects can inherit from Vehicle
I.E., a Bank can have many nested BankAccounts and Users
Try to use them in your Classes!


Note: React went away from objects and classes - but OOP is all over the place in code. This is super important!




```
class Bank {
    constructor(...) {}


    //Setter
    setEmployeeCount(numEmployees){
        this.numEmployees = numEmployees
    }

    addEmployee(employee) {
        this.allEmployees.push(employee)
        this.numEmployees++;
    }

    fireEmployee(employeeId){

    }


    //Getter
    getEmployeeCount() {
        return this.numEmployees
    }
}
```