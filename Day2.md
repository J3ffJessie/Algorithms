# Big O 
- What is easy for a computer to compute
- What is difficult for a computer to compute (time & space)
- How the size of the input affects the computer compute time
- Typically Time Complexity
- Ram and Hard Drive specs are so good now that space complexity isn't such a large factor

## Time Complexity
- Speed at which the computer computes the algorithm
- O(n) = linear time (n generic for size number of elements) n(kittens)
- O(1) = constant time Array has an access time of O(1) a single element being accessed.  Always the same amount of time no matter the size of the element

## Constant Time
- n
```
//Indices   [0,1,2]
const arr = [1,2,3];
//O(1)
console.log(arr[0]);
console.log(arr[2]);
```
## Linear Time
- n + 1
```
//O(n)
const findElement = (element, arr) => {
    for(let index = 0; index ++; index <= arr.length) {
        if(arr[index] === element) {
            console.log(index);
        }
    }
};

findElement[2];
```
## Quadratic Time
- n^2
## O(n)
- Has to go through the entire array to compute what we are searching for
- Time grows as size complexity increases
- Drop trivial constants and additions O(2n + 1) drop the 2
- Do not drop O(n^2) as that is totally different you are multiplying it by itself which is dramatically different than multiplying it by the number 2

---

# Big O Notation in 100 Seconds

<a href = "https://www.youtube.com/watch?v=cjYOcaPfHn8"> Video Link</a>

<hr>


# Modulos Operator %
- A = (B * Q) + R
- A is your first number
- B is what you are dividing by
- Q is the quotient
- R is the remainder
---
- Modulus operator is a Bound Operand range checker
## Integer Division
- 5 / 2 == 2


## Any number % 0 will end with NaN (Not a Number)
- You cannot divide by 0

# Shared File from the Slack Channel

CS Week1 Day2


Comp Sci with Javascript
----------------------------

Big O notation
----------------------------



What is Big O?


A metric for algorithm efficiency
Relation to input size
Progress over time, aka “Speed”
Doesn’t care about machine specs


Also known as ‘asymptotic notation’



Article:

https://medium.com/karuna-sehgal/a-simplified-explanation-of-the-big-o-notation-82523585e835



Video:

https://www.youtube.com/watch?v=v4cd1O4zkGw&t=150s



Visuals:

https://www.bigocheatsheet.com/


<strong> Removed the assignment work for note purposes </strong> 



# <strong>Assignment</strong>
- Circular array
    - use one for loop or one while loop
        - Must use Modulus operator
        - console.log(every element, and break the iterations by a -----)